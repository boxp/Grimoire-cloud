(ns grimoire-cloud.wrapper.user)

(defprotocol User
  (get-screen-name [this])
  (get-id [this]))
