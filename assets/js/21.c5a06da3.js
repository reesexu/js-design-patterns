(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{235:function(t,e){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),s=(function(){function t(){this.state="off"}t.prototype.pressed=function(){"off"===this.state?(this.state="on",console.log("开灯")):(this.state="off",console.log("关灯"))}}(),function(){function t(){this.state="off"}t.prototype.pressed=function(){"off"===this.state?(this.state="weak",console.log("弱光")):"weak"===this.state?(this.state="strong",console.log("强光")):"strong"===this.state&&(this.state="off",console.log("关灯"))}}(),function(){function t(){this.offState=new i,this.weakState=new c,this.strongState=new f,this.currentState=this.offState}return t.prototype.pressed=function(){this.currentState.pressed(this)},t.prototype.setState=function(t){this.currentState=t},t}()),r=function(){},i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.pressed=function(t){console.log("弱光"),t.setState(t.weakState)},e}(r),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.pressed=function(t){console.log("强光"),t.setState(t.strongState)},e}(r),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.pressed=function(t){console.log("关灯"),t.setState(t.offState)},e}(r),u=new s;u.pressed(),u.pressed(),u.pressed(),u.pressed();var p={off:{pressed:function(){console.log("弱光"),this.setState(p.weak)}},weak:{pressed:function(){console.log("强光"),this.setState(p.strong)}},strong:{pressed:function(){console.log("关灯"),this.setState(p.off)}}},a=new(function(){function t(){this.currentState=p.off}return t.prototype.pressed=function(){this.currentState.pressed.call(this)},t.prototype.setState=function(t){this.currentState=t},t}());console.log("------"),a.pressed(),a.pressed(),a.pressed()},261:function(t,e,n){"use strict";n.r(e);n(235);var o={name:"design-patterns-state"},s=n(0),r=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=r.exports}}]);