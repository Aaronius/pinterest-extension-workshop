'use strict';

module.exports = function() {
  if (!window.pintrk) {
    window.pintrk = function () {
      window.pintrk.queue.push(
        Array.prototype.slice.call(arguments))
    };
    var pintrk = window.pintrk;
    pintrk.queue = [];
    pintrk.version = "3.0";
    pintrk('load', 'YOUR_TAG_ID');
    pintrk('page');
    !function(e){var r={};function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(n,t,e){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"e",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.e)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(n){var t=n&&n.e?function(){return n.default}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="",u(u.s=0)}([function(n,t){!function(n,t){var e=n.createElement("script");e.async=!0,e.src="https://s.pinimg.com/ct/lib/main.4a81c615.js";var r=n.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r)}(document)}]);
  }
};
