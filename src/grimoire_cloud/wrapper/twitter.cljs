(ns grimoire-cloud.wrapper.twitter
  (:require [grimoire-cloud.wrapper.oauth :as oa]
            [grimoire-cloud.wrapper.user :as user]
            [grimoire-cloud.wrapper.ui :as wui]))

(defprotocol Twitter-protocol
  (status-update [this text opts])
  (get-settings [this success-handler])
  (get-home-time-line [this success-handler]))

(defrecord Twitter 
  [consumer-key consumer-secret oauth]
  oa/OAuth
  (set-access-token [this access-key access-secret]
    (.. this -oauth (setAccessToken access-key access-secret)))
  (fetch-request-token [this success-handler]
    (let [failure-handler #(throw (js/Error. "Getting request token Failure"))]
      (.. this -oauth (fetchRequestToken success-handler failure-handler))))
  (fetch-access-token [this]
    (let [success-handler #(.. this -oauth 
                            (setAccessToken
                              (.. this -oauth getAccessTokenKey)
                              (.. this -oauth getAccessTokenSecret)))
          failure-handler #(throw (js/Error. "Getting access token Failure"))]
      (.. this -oauth (fetchAccessToken success-handler failure-handler))))
  (set-verifier [this pin]
    (.. this -oauth (setVerifier (str pin))))
  Twitter-protocol
  (status-update [this text opts]
    (let [file (:file opts)
          file-data (if file {"media[]" file} nil)
          data (merge {:status text} file-data)
          url (cond file "https://api.twitter.com/1.1/statuses/update_with_media.json"
                    :default "https://api.twitter.com/1.1/statuses/update.json")
          success-handler #(wui/toast "success")
          failure-handler #(do
                            (wui/toast "tweet failed.")
                            (.error js/console %))]
      (.. this -oauth (post url (clj->js data) success-handler failure-handler))))
   (get-settings [this success-handler]
     (.. this -oauth (get "https://api.twitter.com/1.1/account/settings.json"
                          success-handler)))
   (get-home-time-line [this success-handler]
     (.. this -oauth (get "https://api.twitter.com/1.1/statuses/home_timeline.json"
                          success-handler))))

(defn init-twitter
  "twitter record constracter"
  [consumer-key consumer-secret]
  (let [config (clj->js {:consumerKey consumer-key
                         :consumerSecret consumer-secret
                         :requestTokenUrl "https://api.twitter.com/oauth/request_token"
                         :authorizationUrl "https://api.twitter.com/oauth/authorize"
                         :accessTokenUrl "https://api.twitter.com/oauth/access_token"})]
    (->Twitter consumer-key consumer-secret (js/OAuth. config))))
