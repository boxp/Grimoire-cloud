goog.provide('grimoire_cloud.tool');
goog.require('cljs.core');
/**
* makes a javascript map from a clojure one
*/
grimoire_cloud.tool.make_js_map = (function make_js_map(cljmap){
var out = {};
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__5972_SHARP_){
return (out[cljs.core.name.call(null,cljs.core.first.call(null,p1__5972_SHARP_))] = cljs.core.second.call(null,p1__5972_SHARP_));
}),cljmap));
return out;
});
