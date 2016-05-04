/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-flexbox-addtest-fnbind-setclasses-testprop !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,i,s,f;for(var l in _)if(_.hasOwnProperty(l)){if(e=[],n=_[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],f=s.split("."),1===f.length?Modernizr[f[0]]=r:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=r),x.push((r?"":"no-")+f.join("-"))}}function i(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?S.className.baseVal=n:S.className=n)}function s(e,n){if("object"==typeof e)for(var t in e)w(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),i([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function f(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=l(b?"svg":"body"),e.fake=!0),e}function u(e,t,o,r){var i,s,f,u,c="modernizr",d=l("div"),p=a();if(parseInt(o,10))for(;o--;)f=l("div"),f.id=r?r[o]:c+(o+1),d.appendChild(f);return i=l("style"),i.type="text/css",i.id="s"+c,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),s=t(d,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):d.parentNode.removeChild(d),!!s}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(c(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+c(n[r])+":"+o+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function h(e,n,r,i){function s(){u&&(delete T.style,delete T.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var a=d(e,r);if(!o(a,"undefined"))return a}for(var u,c,h,m,v,y=["modernizr","tspan"];!T.style;)u=!0,T.modElem=l(y.shift()),T.style=T.modElem.style;for(h=e.length,c=0;h>c;c++)if(m=e[c],v=T.style[m],f(m,"-")&&(m=p(m)),T.style[m]!==t){if(i||o(r,"undefined"))return s(),"pfx"==n?m:!0;try{T.style[m]=r}catch(g){}if(T.style[m]!=v)return s(),"pfx"==n?m:!0}return s(),!1}function m(e,n){return function(){return e.apply(n,arguments)}}function v(e,n,t){var r;for(var i in e)if(e[i]in n)return t===!1?e[i]:(r=n[e[i]],o(r,"function")?m(r,t||n):r);return!1}function y(e,n,t,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),f=(e+" "+j.join(s+" ")+s).split(" ");return o(n,"string")||o(n,"undefined")?h(f,n,r,i):(f=(e+" "+z.join(s+" ")+s).split(" "),v(f,n,t))}function g(e,n,o){return y(e,t,t,n,o)}var _=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){_.push({name:e,fn:n,options:t})},addAsyncTest:function(e){_.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var w,x=[],S=n.documentElement,b="svg"===S.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;w=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),C._l={},C.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=s});var P={elem:l("modernizr")};Modernizr._q.push(function(){delete P.elem});var T={style:P.elem.style};Modernizr._q.unshift(function(){delete T.style});var E=(C.testProp=function(e,n,o){return h([e],t,n,o)},"Moz O ms Webkit"),j=C._config.usePrefixes?E.split(" "):[];C._cssomPrefixes=j;var z=C._config.usePrefixes?E.toLowerCase().split(" "):[];C._domPrefixes=z,C.testAllProps=y,C.testAllProps=g,Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),r(),i(x),delete C.addTest,delete C.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);