(defproject grimoire-cloud "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[prismatic/dommy "0.1.1"]
                 [org.clojure/clojure "1.5.1"]
                 [cljs-http "0.1.2"]]
  :plugins [[lein-cljsbuild "0.3.2"]]
  :cljsbuild {
    :builds [{
      ;ソースコードを配置するパス
      :source-paths ["src/grimoire_cloud"]
      ;nodejsか標準を選択
      ;ClojureScriptコンパイラの基本オプション
      ;(ClojureScriptのドキュメントを良く見てね)
      :compiler {
        ;標準設定: target/cljsbuild-main.js
        :optimizations :simple
        :externs ["jslib/externs.js"]
        :pretty-print true}}]})
