(ns grimoire-cloud.oauth
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as ac]
            [cljs-http.client :as client]))

; コンシューマーキー
(def consumers {:consumerKey "Blnxqqx44rdGTZsBYI4bKw", :consumerSecret "bmQIczed6gbdqkN0V8tV11Carwy2PLj7l2bOIAdcoE"})
(def req-token (atom nil))

(defn get-req-token
  " コンシューマーキーからリクエストトークンを取る"
  [consumers]
  (go
    (let [response (<! 
                     (http/post "https://api.twitter.com/oauth/request_token"
                       :body (str )
