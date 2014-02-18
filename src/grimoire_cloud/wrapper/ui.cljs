(ns grimoire-cloud.wrapper.ui
  (:require-macros [dommy.macros :refer [sel1 sel]]))

(defn open-browser
  "open firefoxos browser"
  [url]
  (let [data (clj->js {:name "view"
                       :data {:type "url"
                              :url url}})
        activity (js/MozActivity. data)]
    activity))

(defn switch-section!
  [id]
  (let [current (sel "[data-position='current']")
        target (sel1 id)]
    (set! (. target -className) "current")
    (set! (. current -className) "left")))

(defn back-section!
  [id]
  (let [current (sel "[data-position='current']")
        target (sel1 id)]
    (set! (. target -className) "right")
    (set! (. current -className) "current")))

(defn toast
  [mes]
  (.. js/utils -status (show mes)))
