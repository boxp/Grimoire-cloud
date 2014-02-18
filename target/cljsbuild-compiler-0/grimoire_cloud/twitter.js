// Compiled by ClojureScript 0.0-2120
goog.provide('grimoire_cloud.twitter');
goog.require('cljs.core');
goog.require('grimoire_cloud.wrapper.twitter');
goog.require('grimoire_cloud.wrapper.twitter');
/**
* post tweet
* @param {...*} var_args
*/
grimoire_cloud.twitter.post = (function() {
var post = null;
var post__2 = (function (twitter,text){return grimoire_cloud.wrapper.twitter.status_update.call(null,twitter,text,null);
});
var post__3 = (function() { 
var G__642093__delegate = function (twitter,text,opts){var option = cljs.core.apply.call(null,cljs.core.hash_map,opts);return grimoire_cloud.wrapper.twitter.status_update.call(null,twitter,text,option);
};
var G__642093 = function (twitter,text,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__642093__delegate.call(this,twitter,text,opts);};
G__642093.cljs$lang$maxFixedArity = 2;
G__642093.cljs$lang$applyTo = (function (arglist__642094){
var twitter = cljs.core.first(arglist__642094);
arglist__642094 = cljs.core.next(arglist__642094);
var text = cljs.core.first(arglist__642094);
var opts = cljs.core.rest(arglist__642094);
return G__642093__delegate(twitter,text,opts);
});
G__642093.cljs$core$IFn$_invoke$arity$variadic = G__642093__delegate;
return G__642093;
})()
;
post = function(twitter,text,var_args){
var opts = var_args;
switch(arguments.length){
case 2:
return post__2.call(this,twitter,text);
default:
return post__3.cljs$core$IFn$_invoke$arity$variadic(twitter,text, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
post.cljs$lang$maxFixedArity = 2;
post.cljs$lang$applyTo = post__3.cljs$lang$applyTo;
post.cljs$core$IFn$_invoke$arity$2 = post__2;
post.cljs$core$IFn$_invoke$arity$variadic = post__3.cljs$core$IFn$_invoke$arity$variadic;
return post;
})()
;
