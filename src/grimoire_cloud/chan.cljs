(ns grimoire-cloud.chan
  (:require [grimoire-cloud.twitter :as tw]
            [cljs.core.async :refer [put! <! chan]])
  (:require-macros [dommy.macros :refer [sel sel1]]))

(defn make-post-fn
  "return function post tweet from text box"
  []
  (let [file (aget (. (sel1 :#file) -files) 0)]
    (if (undefined? file)
      #(tw/post % (. (sel1 :#newTweetText) -value))
      #(tw/post % (. (sel1 :#newTweetText) -value) 
                :file file))))

(defn make-tweet-sender
  [chan]
  #(let [tweet (js->clj (.parse js/JSON (. % -text))
                        :keywordize-keys true)]
    (put! chan {:tweet tweet})))
