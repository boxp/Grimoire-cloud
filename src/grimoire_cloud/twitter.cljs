(ns grimoire-cloud.twitter
  (:require [grimoire-cloud.wrapper.twitter :as wtw]))

(defn post 
  "post tweet"
  ([twitter text]
    (wtw/status-update twitter text nil))
  ([twitter text & opts]
    (let [option (apply hash-map opts)]
      (wtw/status-update twitter text option))))

