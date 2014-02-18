(ns grimoire-cloud.start
  (:require [grimoire-cloud.oauth :as oa]
            [grimoire-cloud.storage :as st]
            [grimoire-cloud.wrapper.ui :as wui]
            [grimoire-cloud.wrapper.twitter :as wtw]
            [grimoire-cloud.twitter :as tw]
            [grimoire-cloud.chan :as ch]
            [cljs.core.async :refer [put! <! chan]]
            [dommy.core :as dommy])
  (:require-macros [dommy.macros :refer [sel sel1]]
                   [cljs.core.async.macros :refer [go]]))

(defn set-buttons!
  [chan]
  (dommy/listen! (sel1 :#newPostButton)
                 :click #(wui/switch-section! :#newTweetSection))
  (dommy/listen! (sel1 :#backButton)
                 :click #(wui/back-section! :#newTweetSection))
  (dommy/listen! (sel1 :#statusUpdateButton)
                 :click #(put! chan
                          {:post
                           (ch/make-post-fn)}))
  (dommy/listen! (sel1 :#updateButton)
                 :click #(put! chan
                          {:get-home-time-line
                           (fn [twitter]
                             (wtw/get-home-time-line twitter
                               (ch/make-tweet-sender chan)))})))

(defn twitter-loop
  [twitter chan]
  ; setting buttons
  (set-buttons! chan)
  ; main go block
  (go (loop [tweet []]
        ; read
        (let [input (<! chan)
              ; data input eval
              new-tweet (concat tweet (:tweet input))]
          ; sub effect eval
          (condp (fn [map key] (key map)) input
            :get-home-time-line :>> #(% twitter)
            :post :>> #(% twitter)
            :save :>> #(% twitter)
            nil)
          ; loop
          (recur new-tweet)))))

(defn start
  []
  (let [twitter (or (oa/get-twitter oa/consumer 
                                    (st/load-access-token-key))
                    (oa/get-verified-twitter oa/consumer))
        chan (chan)]
     ; acount loop start
     (twitter-loop twitter chan)
     (wui/toast (str "loggin Successful"))))

(set! *print-fn* (fn [& data] (.log js/console (apply str data))))
(set! (. js/window -onload) start)
