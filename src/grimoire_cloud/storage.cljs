(ns grimoire-cloud.storage)

(defn load-access-token-key
  []
  (let [access-token-key (.. js/localStorage (getItem "accessTokenKey")) 
        access-token-secret (.. js/localStorage (getItem "accessTokenSecret"))]
    (if (and access-token-key access-token-secret)
      {:key access-token-key
       :secret access-token-secret}
      nil)))
    

(defn save-access-token-key
  [twitter]
  (let [access-token-key (-> twitter :oauth .getAccessTokenKey)
        access-token-secret (-> twitter :oauth .getAccessTokenSecret)]
    (.. js/localStorage (setItem "accessTokenKey" access-token-key))
    (.. js/localStorage (setItem "accessTokenSecret" access-token-secret))))

(defn load-oauth-obj
  []
  (let [oauth-obj (.parse js/JSON 
                    (.. js/localStorage 
                      (getItem "oauthObj")))]
    (if oauth-obj
      oauth-obj
      nil)))

(defn save-oauth-obj
  [twitter]
  (let [oauth-obj (:oauth twitter)]
    (.. js/localStorage 
      (setItem "oauthObj" (.stringify js/JSON oauth-obj)))))
