(ns grimoire-cloud.oauth
  (:require [grimoire-cloud.wrapper.twitter :as tw]
            [grimoire-cloud.wrapper.oauth :as oa]
            [grimoire-cloud.wrapper.ui :as wui]
            [grimoire-cloud.storage :as st]))

(def consumer {:key "eTYIHvFk0asDrjaecEOcw"
               :secret "T4ONaTLiZCARQT95cbhfuMBdKCYEi6YeGNnoM774Y"})

(defn get-verified-twitter
  "return completed twitter object"
  [consumer] 
    (doto (tw/init-twitter 
            (:key consumer) 
            (:secret consumer))
      (oa/fetch-request-token 
        #(wui/open-browser %))
      (oa/set-verifier 
        (js/prompt "Please enter your PIN"))
      (oa/fetch-access-token)
      (st/save-access-token-key)))

(defn get-twitter
  "return completed twitter object"
  [consumer access-token]
  (if access-token
    (doto (tw/init-twitter
            (:key consumer)
            (:secret consumer))
      (oa/set-access-token (:key access-token) (:secret access-token)))
    nil))

(defn reborn-twitter
  "return completed twitter object 
   from oauth object"
  [consumer oauth]
  (if oauth
    (tw/->Twitter 
      (:key consumer)
      (:secret consumer)
      oauth)
    nil))
