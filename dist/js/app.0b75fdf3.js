(function(t){function e(e){for(var r,i,c=e[0],u=e[1],l=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"0b4b":function(t,e,n){"use strict";var r=n("255c"),a=n.n(r);a.a},2201:function(t,e,n){"use strict";var r=n("56c0"),a=n.n(r);a.a},"255c":function(t,e,n){},"56c0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("Title"),n("br"),n("Blurb"),n("br"),n("br"),n("Links")],1),n("Sketch")],1)},o=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blurb-container"},[n("span",{staticClass:"blurb"},[t._v("\n      Someone once told me the keys to a good website are a nice typeface, some heavy white space, and a touch of color.*\n      "),n("br"),n("br"),t._v("\n      I am a UX Designer @ Google and got my BFA in Industrial Design @ RISD.\n    ")])])}],u={},l=u,s=(n("ef4a"),n("2877")),f=Object(s["a"])(l,i,c,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-container"},[n("span",{staticClass:"title"},[t._v("\n       ADVAIT KALAKKAD*\n    ")])])}],v={},b=v,m=(n("0b4b"),Object(s["a"])(b,d,h,!1,null,null,null)),w=m.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links-container"},[n("a",{attrs:{href:"https://www.are.na/advait-kalakkad"}},[t._v("Are.na  ↗")]),n("a",{attrs:{href:"https://github.com/akalakkad"}},[t._v("Github  ↗")]),n("a",{attrs:{href:"https://twitter.com/computerpolygl1"}},[t._v("Twitter  ↗")])])}],y={},k=y,O=(n("8937"),Object(s["a"])(k,_,g,!1,null,null,null)),j=O.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sketch"}})},S=[],C=(n("6c7b"),{components:{},props:[],data:function(){return{}},mounted:function(){var t=function(t){var e,n;t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight,t.WEBGL),e=0,n=0,t.noCursor()},t.draw=function(){t.background(255),e=t.lerp(e,t.mouseX,.1),n=t.lerp(n,t.mouseY,.1),t.push(),t.translate(e,n,0),t.noStroke(),t.fill(0,0,255),t.ellipse(-t.width/2,-t.height/2,400,400),t.pop()},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}},e=n("237d");new e(t,"sketch")}}),E=C,$=(n("2201"),Object(s["a"])(E,x,S,!1,null,null,null)),A=$.exports,P={name:"app",components:{Blurb:p,Title:w,Links:j,Sketch:A}},T=P,D=(n("034f"),Object(s["a"])(T,a,o,!1,null,null,null)),B=D.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(B)}}).$mount("#app")},"64a9":function(t,e,n){},8937:function(t,e,n){"use strict";var r=n("e00f"),a=n.n(r);a.a},a493:function(t,e,n){},e00f:function(t,e,n){},ef4a:function(t,e,n){"use strict";var r=n("a493"),a=n.n(r);a.a}});
//# sourceMappingURL=app.0b75fdf3.js.map