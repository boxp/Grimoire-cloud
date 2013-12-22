goog.provide('grimoire_cloud.twitter');
goog.require('cljs.core');
grimoire_cloud.twitter.tweets = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
goog.provide('grimoire_cloud.twitter.User');

/**
* @constructor
* @param {*} id
* @param {*} name
* @param {*} profile_img
* @param {*} tweet_count
* @param {*} disc
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
grimoire_cloud.twitter.User = (function (id,name,profile_img,tweet_count,disc,__meta,__extmap){
this.id = id;
this.name = name;
this.profile_img = profile_img;
this.tweet_count = tweet_count;
this.disc = disc;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
grimoire_cloud.twitter.User.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2897__auto__){
var self__ = this;
var h__2770__auto__ = self__.__hash;
if(!((h__2770__auto__ == null)))
{return h__2770__auto__;
} else
{var h__2770__auto____$1 = cljs.core.hash_imap.call(null,this__2897__auto__);
self__.__hash = h__2770__auto____$1;
return h__2770__auto____$1;
}
});
grimoire_cloud.twitter.User.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2902__auto__,k__2903__auto__){
var self__ = this;
return this__2902__auto__.cljs$core$ILookup$_lookup$arity$3(this__2902__auto__,k__2903__auto__,null);
});
grimoire_cloud.twitter.User.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2904__auto__,k6549,else__2905__auto__){
var self__ = this;
if((k6549 === "\uFDD0:id"))
{return self__.id;
} else
{if((k6549 === "\uFDD0:name"))
{return self__.name;
} else
{if((k6549 === "\uFDD0:profile-img"))
{return self__.profile_img;
} else
{if((k6549 === "\uFDD0:tweet-count"))
{return self__.tweet_count;
} else
{if((k6549 === "\uFDD0:disc"))
{return self__.disc;
} else
{if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k6549,else__2905__auto__);
} else
{return null;
}
}
}
}
}
}
});
grimoire_cloud.twitter.User.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2909__auto__,k__2910__auto__,G__6548){
var self__ = this;
var pred__6551 = cljs.core.identical_QMARK_;
var expr__6552 = k__2910__auto__;
if(pred__6551.call(null,"\uFDD0:id",expr__6552))
{return (new grimoire_cloud.twitter.User(G__6548,self__.name,self__.profile_img,self__.tweet_count,self__.disc,self__.__meta,self__.__extmap,null));
} else
{if(pred__6551.call(null,"\uFDD0:name",expr__6552))
{return (new grimoire_cloud.twitter.User(self__.id,G__6548,self__.profile_img,self__.tweet_count,self__.disc,self__.__meta,self__.__extmap,null));
} else
{if(pred__6551.call(null,"\uFDD0:profile-img",expr__6552))
{return (new grimoire_cloud.twitter.User(self__.id,self__.name,G__6548,self__.tweet_count,self__.disc,self__.__meta,self__.__extmap,null));
} else
{if(pred__6551.call(null,"\uFDD0:tweet-count",expr__6552))
{return (new grimoire_cloud.twitter.User(self__.id,self__.name,self__.profile_img,G__6548,self__.disc,self__.__meta,self__.__extmap,null));
} else
{if(pred__6551.call(null,"\uFDD0:disc",expr__6552))
{return (new grimoire_cloud.twitter.User(self__.id,self__.name,self__.profile_img,self__.tweet_count,G__6548,self__.__meta,self__.__extmap,null));
} else
{return (new grimoire_cloud.twitter.User(self__.id,self__.name,self__.profile_img,self__.tweet_count,self__.disc,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__2910__auto__,G__6548),null));
}
}
}
}
}
});
grimoire_cloud.twitter.User.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2916__auto__,writer__2917__auto__,opts__2918__auto__){
var self__ = this;
var pr_pair__2919__auto__ = (function (keyval__2920__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2917__auto__,cljs.core.pr_writer,""," ","",opts__2918__auto__,keyval__2920__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2917__auto__,pr_pair__2919__auto__,"#grimoire-cloud.twitter.User{",", ","}",opts__2918__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:id",self__.id),cljs.core.vector.call(null,"\uFDD0:name",self__.name),cljs.core.vector.call(null,"\uFDD0:profile-img",self__.profile_img),cljs.core.vector.call(null,"\uFDD0:tweet-count",self__.tweet_count),cljs.core.vector.call(null,"\uFDD0:disc",self__.disc)], true),self__.__extmap));
});
grimoire_cloud.twitter.User.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2907__auto__,entry__2908__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__2908__auto__))
{return this__2907__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2907__auto__,cljs.core._nth.call(null,entry__2908__auto__,0),cljs.core._nth.call(null,entry__2908__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2907__auto__,entry__2908__auto__);
}
});
grimoire_cloud.twitter.User.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2914__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:id",self__.id),cljs.core.vector.call(null,"\uFDD0:name",self__.name),cljs.core.vector.call(null,"\uFDD0:profile-img",self__.profile_img),cljs.core.vector.call(null,"\uFDD0:tweet-count",self__.tweet_count),cljs.core.vector.call(null,"\uFDD0:disc",self__.disc)], true),self__.__extmap));
});
grimoire_cloud.twitter.User.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2906__auto__){
var self__ = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});
grimoire_cloud.twitter.User.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2898__auto__,other__2899__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__2899__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__2898__auto__.constructor === other__2899__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__2898__auto__,other__2899__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
grimoire_cloud.twitter.User.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2901__auto__,G__6548){
var self__ = this;
return (new grimoire_cloud.twitter.User(self__.id,self__.name,self__.profile_img,self__.tweet_count,self__.disc,G__6548,self__.__extmap,self__.__hash));
});
grimoire_cloud.twitter.User.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2900__auto__){
var self__ = this;
return self__.__meta;
});
grimoire_cloud.twitter.User.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2911__auto__,k__2912__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:disc",null,"\uFDD0:name",null,"\uFDD0:tweet-count",null,"\uFDD0:profile-img",null,"\uFDD0:id",null], true),k__2912__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2911__auto__),self__.__meta),k__2912__auto__);
} else
{return (new grimoire_cloud.twitter.User(self__.id,self__.name,self__.profile_img,self__.tweet_count,self__.disc,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__2912__auto__)),null));
}
});
grimoire_cloud.twitter.User.cljs$lang$type = true;
grimoire_cloud.twitter.User.cljs$lang$ctorPrSeq = (function (this__2937__auto__){
return cljs.core.list.call(null,"grimoire-cloud.twitter/User");
});
grimoire_cloud.twitter.User.cljs$lang$ctorPrWriter = (function (this__2937__auto__,writer__2938__auto__){
return cljs.core._write.call(null,writer__2938__auto__,"grimoire-cloud.twitter/User");
});
grimoire_cloud.twitter.__GT_User = (function __GT_User(id,name,profile_img,tweet_count,disc){
return (new grimoire_cloud.twitter.User(id,name,profile_img,tweet_count,disc));
});
grimoire_cloud.twitter.map__GT_User = (function map__GT_User(G__6550){
return (new grimoire_cloud.twitter.User((new cljs.core.Keyword("\uFDD0:id")).call(null,G__6550),(new cljs.core.Keyword("\uFDD0:name")).call(null,G__6550),(new cljs.core.Keyword("\uFDD0:profile-img")).call(null,G__6550),(new cljs.core.Keyword("\uFDD0:tweet-count")).call(null,G__6550),(new cljs.core.Keyword("\uFDD0:disc")).call(null,G__6550),null,cljs.core.dissoc.call(null,G__6550,"\uFDD0:id","\uFDD0:name","\uFDD0:profile-img","\uFDD0:tweet-count","\uFDD0:disc")));
});
goog.provide('grimoire_cloud.twitter.Tweet');

/**
* @constructor
* @param {*} user
* @param {*} faved_QMARK_
* @param {*} reted_QMARK_
* @param {*} isret_QMARK_
* @param {*} id
* @param {*} date
* @param {*} txt
* @param {*} mention_user
* @param {*} source
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
grimoire_cloud.twitter.Tweet = (function (user,faved_QMARK_,reted_QMARK_,isret_QMARK_,id,date,txt,mention_user,source,__meta,__extmap){
this.user = user;
this.faved_QMARK_ = faved_QMARK_;
this.reted_QMARK_ = reted_QMARK_;
this.isret_QMARK_ = isret_QMARK_;
this.id = id;
this.date = date;
this.txt = txt;
this.mention_user = mention_user;
this.source = source;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>9){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
grimoire_cloud.twitter.Tweet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2897__auto__){
var self__ = this;
var h__2770__auto__ = self__.__hash;
if(!((h__2770__auto__ == null)))
{return h__2770__auto__;
} else
{var h__2770__auto____$1 = cljs.core.hash_imap.call(null,this__2897__auto__);
self__.__hash = h__2770__auto____$1;
return h__2770__auto____$1;
}
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2902__auto__,k__2903__auto__){
var self__ = this;
return this__2902__auto__.cljs$core$ILookup$_lookup$arity$3(this__2902__auto__,k__2903__auto__,null);
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2904__auto__,k6555,else__2905__auto__){
var self__ = this;
if((k6555 === "\uFDD0:user"))
{return self__.user;
} else
{if((k6555 === "\uFDD0:faved?"))
{return self__.faved_QMARK_;
} else
{if((k6555 === "\uFDD0:reted?"))
{return self__.reted_QMARK_;
} else
{if((k6555 === "\uFDD0:isret?"))
{return self__.isret_QMARK_;
} else
{if((k6555 === "\uFDD0:id"))
{return self__.id;
} else
{if((k6555 === "\uFDD0:date"))
{return self__.date;
} else
{if((k6555 === "\uFDD0:txt"))
{return self__.txt;
} else
{if((k6555 === "\uFDD0:mention-user"))
{return self__.mention_user;
} else
{if((k6555 === "\uFDD0:source"))
{return self__.source;
} else
{if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k6555,else__2905__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2909__auto__,k__2910__auto__,G__6554){
var self__ = this;
var pred__6557 = cljs.core.identical_QMARK_;
var expr__6558 = k__2910__auto__;
if(pred__6557.call(null,"\uFDD0:user",expr__6558))
{return (new grimoire_cloud.twitter.Tweet(G__6554,self__.faved_QMARK_,self__.reted_QMARK_,self__.isret_QMARK_,self__.id,self__.date,self__.txt,self__.mention_user,self__.source,self__.__meta,self__.__extmap,null));
} else
{if(pred__6557.call(null,"\uFDD0:faved?",expr__6558))
{return (new grimoire_cloud.twitter.Tweet(self__.user,G__6554,self__.reted_QMARK_,self__.isret_QMARK_,self__.id,self__.date,self__.txt,self__.mention_user,self__.source,self__.__meta,self__.__extmap,null));
} else
{if(pred__6557.call(null,"\uFDD0:reted?",expr__6558))
{return (new grimoire_cloud.twitter.Tweet(self__.user,self__.faved_QMARK_,G__6554,self__.isret_QMARK_,self__.id,self__.date,self__.txt,self__.mention_user,self__.source,self__.__meta,self__.__extmap,null));
} else
{if(pred__6557.call(null,"\uFDD0:isret?",expr__6558))
{return (new grimoire_cloud.twitter.Tweet(self__.user,self__.faved_QMARK_,self__.reted_QMARK_,G__6554,self__.id,self__.date,self__.txt,self__.mention_user,self__.source,self__.__meta,self__.__extmap,null));
} else
{if(pred__6557.call(null,"\uFDD0:id",expr__6558))
{return (new grimoire_cloud.twitter.Tweet(self__.user,self__.faved_QMARK_,self__.reted_QMARK_,self__.isret_QMARK_,G__6554,self__.date,self__.txt,self__.mention_user,self__.source,self__.__meta,self__.__extmap,null));
} else
{if(pred__6557.call(null,"\uFDD0:date",expr__6558))
{return (new grimoire_cloud.twitter.Tweet(self__.user,self__.faved_QMARK_,self__.reted_QMARK_,self__.isret_QMARK_,self__.id,G__6554,self__.txt,self__.mention_user,self__.source,self__.__meta,self__.__extmap,null));
} else
{if(pred__6557.call(null,"\uFDD0:txt",expr__6558))
{return (new grimoire_cloud.twitter.Tweet(self__.user,self__.faved_QMARK_,self__.reted_QMARK_,self__.isret_QMARK_,self__.id,self__.date,G__6554,self__.mention_user,self__.source,self__.__meta,self__.__extmap,null));
} else
{if(pred__6557.call(null,"\uFDD0:mention-user",expr__6558))
{return (new grimoire_cloud.twitter.Tweet(self__.user,self__.faved_QMARK_,self__.reted_QMARK_,self__.isret_QMARK_,self__.id,self__.date,self__.txt,G__6554,self__.source,self__.__meta,self__.__extmap,null));
} else
{if(pred__6557.call(null,"\uFDD0:source",expr__6558))
{return (new grimoire_cloud.twitter.Tweet(self__.user,self__.faved_QMARK_,self__.reted_QMARK_,self__.isret_QMARK_,self__.id,self__.date,self__.txt,self__.mention_user,G__6554,self__.__meta,self__.__extmap,null));
} else
{return (new grimoire_cloud.twitter.Tweet(self__.user,self__.faved_QMARK_,self__.reted_QMARK_,self__.isret_QMARK_,self__.id,self__.date,self__.txt,self__.mention_user,self__.source,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__2910__auto__,G__6554),null));
}
}
}
}
}
}
}
}
}
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2916__auto__,writer__2917__auto__,opts__2918__auto__){
var self__ = this;
var pr_pair__2919__auto__ = (function (keyval__2920__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2917__auto__,cljs.core.pr_writer,""," ","",opts__2918__auto__,keyval__2920__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2917__auto__,pr_pair__2919__auto__,"#grimoire-cloud.twitter.Tweet{",", ","}",opts__2918__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:user",self__.user),cljs.core.vector.call(null,"\uFDD0:faved?",self__.faved_QMARK_),cljs.core.vector.call(null,"\uFDD0:reted?",self__.reted_QMARK_),cljs.core.vector.call(null,"\uFDD0:isret?",self__.isret_QMARK_),cljs.core.vector.call(null,"\uFDD0:id",self__.id),cljs.core.vector.call(null,"\uFDD0:date",self__.date),cljs.core.vector.call(null,"\uFDD0:txt",self__.txt),cljs.core.vector.call(null,"\uFDD0:mention-user",self__.mention_user),cljs.core.vector.call(null,"\uFDD0:source",self__.source)], true),self__.__extmap));
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2907__auto__,entry__2908__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__2908__auto__))
{return this__2907__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2907__auto__,cljs.core._nth.call(null,entry__2908__auto__,0),cljs.core._nth.call(null,entry__2908__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2907__auto__,entry__2908__auto__);
}
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2914__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:user",self__.user),cljs.core.vector.call(null,"\uFDD0:faved?",self__.faved_QMARK_),cljs.core.vector.call(null,"\uFDD0:reted?",self__.reted_QMARK_),cljs.core.vector.call(null,"\uFDD0:isret?",self__.isret_QMARK_),cljs.core.vector.call(null,"\uFDD0:id",self__.id),cljs.core.vector.call(null,"\uFDD0:date",self__.date),cljs.core.vector.call(null,"\uFDD0:txt",self__.txt),cljs.core.vector.call(null,"\uFDD0:mention-user",self__.mention_user),cljs.core.vector.call(null,"\uFDD0:source",self__.source)], true),self__.__extmap));
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2906__auto__){
var self__ = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2898__auto__,other__2899__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__2899__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__2898__auto__.constructor === other__2899__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__2898__auto__,other__2899__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2901__auto__,G__6554){
var self__ = this;
return (new grimoire_cloud.twitter.Tweet(self__.user,self__.faved_QMARK_,self__.reted_QMARK_,self__.isret_QMARK_,self__.id,self__.date,self__.txt,self__.mention_user,self__.source,G__6554,self__.__extmap,self__.__hash));
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2900__auto__){
var self__ = this;
return self__.__meta;
});
grimoire_cloud.twitter.Tweet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2911__auto__,k__2912__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:date",null,"\uFDD0:reted?",null,"\uFDD0:isret?",null,"\uFDD0:faved?",null,"\uFDD0:user",null,"\uFDD0:mention-user",null,"\uFDD0:source",null,"\uFDD0:id",null,"\uFDD0:txt",null], true),k__2912__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2911__auto__),self__.__meta),k__2912__auto__);
} else
{return (new grimoire_cloud.twitter.Tweet(self__.user,self__.faved_QMARK_,self__.reted_QMARK_,self__.isret_QMARK_,self__.id,self__.date,self__.txt,self__.mention_user,self__.source,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__2912__auto__)),null));
}
});
grimoire_cloud.twitter.Tweet.cljs$lang$type = true;
grimoire_cloud.twitter.Tweet.cljs$lang$ctorPrSeq = (function (this__2937__auto__){
return cljs.core.list.call(null,"grimoire-cloud.twitter/Tweet");
});
grimoire_cloud.twitter.Tweet.cljs$lang$ctorPrWriter = (function (this__2937__auto__,writer__2938__auto__){
return cljs.core._write.call(null,writer__2938__auto__,"grimoire-cloud.twitter/Tweet");
});
grimoire_cloud.twitter.__GT_Tweet = (function __GT_Tweet(user,faved_QMARK_,reted_QMARK_,isret_QMARK_,id,date,txt,mention_user,source){
return (new grimoire_cloud.twitter.Tweet(user,faved_QMARK_,reted_QMARK_,isret_QMARK_,id,date,txt,mention_user,source));
});
grimoire_cloud.twitter.map__GT_Tweet = (function map__GT_Tweet(G__6556){
return (new grimoire_cloud.twitter.Tweet((new cljs.core.Keyword("\uFDD0:user")).call(null,G__6556),(new cljs.core.Keyword("\uFDD0:faved?")).call(null,G__6556),(new cljs.core.Keyword("\uFDD0:reted?")).call(null,G__6556),(new cljs.core.Keyword("\uFDD0:isret?")).call(null,G__6556),(new cljs.core.Keyword("\uFDD0:id")).call(null,G__6556),(new cljs.core.Keyword("\uFDD0:date")).call(null,G__6556),(new cljs.core.Keyword("\uFDD0:txt")).call(null,G__6556),(new cljs.core.Keyword("\uFDD0:mention-user")).call(null,G__6556),(new cljs.core.Keyword("\uFDD0:source")).call(null,G__6556),null,cljs.core.dissoc.call(null,G__6556,"\uFDD0:user","\uFDD0:faved?","\uFDD0:reted?","\uFDD0:isret?","\uFDD0:id","\uFDD0:date","\uFDD0:txt","\uFDD0:mention-user","\uFDD0:source")));
});
