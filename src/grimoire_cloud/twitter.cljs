(ns grimoire-cloud.twitter)

; 全てのツイートを保存するベクタ
(def tweets (transient []))
; ユーザートークンを保管するベクタ
(def tokens (transient #{}))
; ツイッターアカウントを保管するベクタ
(def twitters (transient #{}))

; データ構造
(defrecord User
  [disc id screen-name name profile-img tweet-count disc])

(defrecord Tweet
  [user faved? reted? isret? id date txt mention-user source])

(defrecord Twitter
  [
