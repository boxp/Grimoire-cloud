(ns grimoire-cloud.wrapper.oauth)

(defprotocol OAuth
  (set-access-token [this access-key access-secret])
  (fetch-request-token [this success-handler])
  (fetch-access-token [this])
  (set-verifier [this pin]))
