(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{319:function(t,n,r){var e=r(20),s=/"/g;t.exports=function(t,n,r,i){var u=String(e(t)),o="<"+n;return""!==r&&(o+=" "+r+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+u+"</"+n+">"}},320:function(t,n,r){var e=r(1);t.exports=function(t){return e((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},368:function(t,n,r){"use strict";var e=r(0),s=r(319);e({target:"String",proto:!0,forced:r(320)("sub")},{sub:function(){return s(this,"sub","","")}})},376:function(t,n,r){"use strict";r.r(n);r(368);var e={props:{main:{type:String,default:"$site"},sub:{type:String},handle:{type:String}},computed:{value:function(){var t=this[this.main];if(this.sub&&(t=t[this.sub]),this.handle){var n=s[this.handle];n&&(t=n(t))}return t}}},s={firstToLowerCase:function(t){return t[0].toLowerCase()+t.substr(1)}},i=e,u=r(26),o=Object(u.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.value))])}),[],!1,null,null,null);n.default=o.exports}}]);