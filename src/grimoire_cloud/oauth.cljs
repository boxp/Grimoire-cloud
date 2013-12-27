(ns grimoire-cloud.oauth
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as ac]
            [grimoire-cloud.tool :as tl]
            [cljs-http.client :as client]))

; コンシューマーキー
(def consumers {:consumerKey "Blnxqqx44rdGTZsBYI4bKw", :consumerSecret "bmQIczed6gbdqkN0V8tV11Carwy2PLj7l2bOIAdcoE"})
(def req-token (atom nil))

(defn get-req-token
  "リクエストトークンをclojure.mapで取得する"
  []
  (let [acce (tl/clj->js
               {:consumerSecret (:consumerSecret consumers)
                :tokenSecret ""})
        mes (tl/clj->js
              {:method "GET"
               :action "http://twitter.com/oauth/request_token"
               :parameters
                 {:oauth_signature_method "HMAC-SHA1"
                  :oauth_consumer_key (:consumerKey consumers)}})

