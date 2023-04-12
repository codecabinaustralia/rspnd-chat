(function(){var t={507:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var r=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],s=n(1),o={},a=(0,s.Z)(o,r,i,!1,null,null,null),c=a.exports},1:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return r}})},765:function(){
/*! (C) Andrea Giammarchi - @WebReflection - ISC Style License */
!function(t,e){"use strict";function n(){var t=S.splice(0,S.length);for(Zt=0;t.length;)t.shift().call(null,t.shift())}function r(t,e){for(var n=0,r=t.length;n<r;n++)g(t[n],e)}function i(t){for(var e,n=0,r=t.length;n<r;n++)e=t[n],x(e,ot[o(e)])}function s(t){return function(e){Ut(e)&&(g(e,t),at.length&&r(e.querySelectorAll(at),t))}}function o(t){var e=qt.call(t,"is"),n=t.nodeName.toUpperCase(),r=ut.call(st,e?nt+e.toUpperCase():et+n);return e&&-1<r&&!a(n,e)?-1:r}function a(t,e){return-1<at.indexOf(t+'[is="'+e+'"]')}function c(t){var e=t.currentTarget,n=t.attrChange,r=t.attrName,i=t.target,s=t[X]||2,o=t[J]||3;!se||i&&i!==e||!e[q]||"style"===r||t.prevValue===t.newValue&&(""!==t.newValue||n!==s&&n!==o)||e[q](r,n===s?null:t.prevValue,n===o?null:t.newValue)}function u(t){var e=s(t);return function(t){S.push(e,t.target),Zt&&clearTimeout(Zt),Zt=setTimeout(n,1)}}function l(t){ie&&(ie=!1,t.currentTarget.removeEventListener(Z,l)),at.length&&r((t.target||I).querySelectorAll(at),t.detail===B?B:$),Pt&&p()}function h(t,e){var n=this;Gt.call(n,t,e),A.call(n,{target:n})}function d(t,e,n){var r=e.apply(t,n),s=o(r);return-1<s&&x(r,ot[s]),n.pop()&&at.length&&i(r.querySelectorAll(at)),r}function f(t,e){Rt(t,e),D?D.observe(t,Jt):(re&&(t.setAttribute=h,t[U]=N(t),t[j](tt,A)),t[j](Y,c)),t[W]&&se&&(t.created=!0,t[W](),t.created=!1)}function p(){for(var t,e=0,n=jt.length;e<n;e++)t=jt[e],ct.contains(t)||(n--,jt.splice(e--,1),g(t,B))}function m(t){throw new Error("A "+t+" type is already registered")}function g(t,e){var n,r,i=o(t);-1<i&&!Bt.call(t,"TEMPLATE")&&(L(t,ot[i]),i=0,e!==$||t[$]?e!==B||t[B]||(t[$]=!1,t[B]=!0,r="disconnected",i=1):(t[B]=!1,t[$]=!0,r="connected",i=1,Pt&&ut.call(jt,t)<0&&jt.push(t)),i&&(n=t[e+V]||t[r+V])&&n.call(t))}function v(){}function y(t,e,n){var r=n&&n[H]||"",i=e.prototype,s=Dt(i),o=e.observedAttributes||pt,a={prototype:s};Ft(s,W,{value:function(){if(kt)kt=!1;else if(!this[_t]){this[_t]=!0,new e(this),i[W]&&i[W].call(this);var t=St[Ot.get(e)];(!Et||t.create.length>1)&&b(this)}}}),Ft(s,q,{value:function(t){-1<ut.call(o,t)&&i[q]&&i[q].apply(this,arguments)}}),i[K]&&Ft(s,z,{value:i[K]}),i[G]&&Ft(s,Q,{value:i[G]}),r&&(a[H]=r),t=t.toUpperCase(),St[t]={constructor:e,create:r?[r,Nt(t)]:[t]},Ot.set(e,t),I[P](t.toLowerCase(),a),E(t),At[t].r()}function w(t){var e=St[t.toUpperCase()];return e&&e.constructor}function _(t){return"string"==typeof t?t:t&&t.is||""}function b(t){for(var e,n=t[q],r=n?t.attributes:pt,i=r.length;i--;)e=r[i],n.call(t,e.name||e.nodeName,null,e.value||e.nodeValue)}function E(t){return t=t.toUpperCase(),t in At||(At[t]={},At[t].p=new Ct((function(e){At[t].r=e}))),At[t].p}function T(){bt&&delete t.customElements,ft(t,"customElements",{configurable:!0,value:new v}),ft(t,"CustomElementRegistry",{configurable:!0,value:v});for(var e=k.get(/^HTML[A-Z]*[a-z]/),n=e.length;n--;function(e){var n=t[e];if(n){t[e]=function(t){var e,r;return t||(t=this),t[_t]||(kt=!0,e=St[Ot.get(t.constructor)],r=Et&&1===e.create.length,t=r?Reflect.construct(n,pt,e.constructor):I.createElement.apply(I,e.create),t[_t]=!0,kt=!1,r||b(t)),t},t[e].prototype=n.prototype;try{n.prototype.constructor=t[e]}catch(r){!0,ft(n,_t,{value:t[e]})}}}(e[n]));I.createElement=function(t,e){var n=_(e);return n?Xt.call(this,t,Nt(n)):Xt.call(this,t)},te||(ne=!0,I[P](""))}var I=t.document,C=t.Object,k=function(t){var e,n,r,i,s=/^[A-Z]+[a-z]/,o=function(t){var e,n=[];for(e in c)t.test(e)&&n.push(e);return n},a=function(t,e){(e=e.toLowerCase())in c||(c[t]=(c[t]||[]).concat(e),c[e]=c[e.toUpperCase()]=t)},c=(C.create||C)(null),u={};for(n in t)for(i in t[n])for(r=t[n][i],c[i]=r,e=0;e<r.length;e++)c[r[e].toLowerCase()]=c[r[e].toUpperCase()]=i;return u.get=function(t){return"string"==typeof t?c[t]||(s.test(t)?[]:""):o(t)},u.set=function(t,e){return s.test(t)?a(t,e):a(e,t),u},u}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof e&&(e={type:e||"auto"});var S,A,O,N,D,R,L,x,M,P="registerElement",F=1e5*t.Math.random()>>0,U="__"+P+F,j="addEventListener",$="attached",V="Callback",B="detached",H="extends",q="attributeChanged"+V,z=$+V,K="connected"+V,G="disconnected"+V,W="created"+V,Q=B+V,X="ADDITION",J="REMOVAL",Y="DOMAttrModified",Z="DOMContentLoaded",tt="DOMSubtreeModified",et="<",nt="=",rt=/^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,it=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],st=[],ot=[],at="",ct=I.documentElement,ut=st.indexOf||function(t){for(var e=this.length;e--&&this[e]!==t;);return e},lt=C.prototype,ht=lt.hasOwnProperty,dt=lt.isPrototypeOf,ft=C.defineProperty,pt=[],mt=C.getOwnPropertyDescriptor,gt=C.getOwnPropertyNames,vt=C.getPrototypeOf,yt=C.setPrototypeOf,wt=!!C.__proto__,_t="__dreCEv1",bt=t.customElements,Et=!/^force/.test(e.type)&&!!(bt&&bt.define&&bt.get&&bt.whenDefined),Tt=C.create||C,It=t.Map||function(){var t,e=[],n=[];return{get:function(t){return n[ut.call(e,t)]},set:function(r,i){t=ut.call(e,r),t<0?n[e.push(r)-1]=i:n[t]=i}}},Ct=t.Promise||function(t){function e(t){for(r=!0;n.length;)n.shift()(t)}var n=[],r=!1,i={catch:function(){return i},then:function(t){return n.push(t),r&&setTimeout(e,1),i}};return t(e),i},kt=!1,St=Tt(null),At=Tt(null),Ot=new It,Nt=function(t){return t.toLowerCase()},Dt=C.create||function t(e){return e?(t.prototype=e,new t):this},Rt=yt||(wt?function(t,e){return t.__proto__=e,t}:gt&&mt?function(){function t(t,e){for(var n,r=gt(e),i=0,s=r.length;i<s;i++)n=r[i],ht.call(t,n)||ft(t,n,mt(e,n))}return function(e,n){do{t(e,n)}while((n=vt(n))&&!dt.call(n,e));return e}}():function(t,e){for(var n in e)t[n]=e[n];return t}),Lt=t.MutationObserver||t.WebKitMutationObserver,xt=t.HTMLAnchorElement,Mt=(t.HTMLElement||t.Element||t.Node).prototype,Pt=!dt.call(Mt,ct),Ft=Pt?function(t,e,n){return t[e]=n.value,t}:ft,Ut=Pt?function(t){return 1===t.nodeType}:function(t){return dt.call(Mt,t)},jt=Pt&&[],$t=Mt.attachShadow,Vt=Mt.cloneNode,Bt=Mt.closest||function(t){for(var e=this;e&&e.nodeName!==t;)e=e.parentNode;return e},Ht=Mt.dispatchEvent,qt=Mt.getAttribute,zt=Mt.hasAttribute,Kt=Mt.removeAttribute,Gt=Mt.setAttribute,Wt=I.createElement,Qt=I.importNode,Xt=Wt,Jt=Lt&&{attributes:!0,characterData:!0,attributeOldValue:!0},Yt=Lt||function(t){re=!1,ct.removeEventListener(Y,Yt)},Zt=0,te=P in I&&!/^force-all/.test(e.type),ee=!0,ne=!1,re=!0,ie=!0,se=!0;if(Lt&&(M=I.createElement("div"),M.innerHTML="<div><div></div></div>",new Lt((function(t,e){if(t[0]&&"childList"==t[0].type&&!t[0].removedNodes[0].childNodes.length){M=mt(Mt,"innerHTML");var n=M&&M.set;n&&ft(Mt,"innerHTML",{set:function(t){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,t)}})}e.disconnect(),M=null})).observe(M,{childList:!0,subtree:!0}),M.innerHTML=""),te||(yt||wt?(L=function(t,e){dt.call(e,t)||f(t,e)},x=f):(L=function(t,e){t[U]||(t[U]=C(!0),f(t,e))},x=L),Pt?(re=!1,function(){var t=mt(Mt,j),e=t.value,n=function(t){var e=new CustomEvent(Y,{bubbles:!0});e.attrName=t,e.prevValue=qt.call(this,t),e.newValue=null,e[J]=e.attrChange=2,Kt.call(this,t),Ht.call(this,e)},r=function(t,e){var n=zt.call(this,t),r=n&&qt.call(this,t),i=new CustomEvent(Y,{bubbles:!0});Gt.call(this,t,e),i.attrName=t,i.prevValue=n?r:null,i.newValue=e,n?i.MODIFICATION=i.attrChange=1:i[X]=i.attrChange=0,Ht.call(this,i)},i=function(t){var e,n=t.currentTarget,r=n[U],i=t.propertyName;r.hasOwnProperty(i)&&(r=r[i],e=new CustomEvent(Y,{bubbles:!0}),e.attrName=r.name,e.prevValue=r.value||null,e.newValue=r.value=n[i]||null,null==e.prevValue?e[X]=e.attrChange=0:e.MODIFICATION=e.attrChange=1,Ht.call(n,e))};t.value=function(t,s,o){t===Y&&this[q]&&this.setAttribute!==r&&(this[U]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,e.call(this,"propertychange",i)),e.call(this,t,s,o)},ft(Mt,j,t)}()):Lt||(ct[j](Y,Yt),ct.setAttribute(U,1),ct.removeAttribute(U),re&&(A=function(t){var e,n,r,i=this;if(i===t.target){for(r in e=i[U],i[U]=n=N(i),n){if(!(r in e))return O(0,i,r,e[r],n[r],X);if(n[r]!==e[r])return O(1,i,r,e[r],n[r],"MODIFICATION")}for(r in e)if(!(r in n))return O(2,i,r,e[r],n[r],J)}},O=function(t,e,n,r,i,s){var o={attrChange:t,currentTarget:e,attrName:n,prevValue:r,newValue:i};o[s]=t,c(o)},N=function(t){for(var e,n,r={},i=t.attributes,s=0,o=i.length;s<o;s++)e=i[s],"setAttribute"!==(n=e.name)&&(r[n]=e.value);return r})),I[P]=function(t,e){if(n=t.toUpperCase(),ee&&(ee=!1,Lt?(D=function(t,e){function n(t,e){for(var n=0,r=t.length;n<r;e(t[n++]));}return new Lt((function(r){for(var i,s,o,a=0,c=r.length;a<c;a++)i=r[a],"childList"===i.type?(n(i.addedNodes,t),n(i.removedNodes,e)):(s=i.target,se&&s[q]&&"style"!==i.attributeName&&(o=qt.call(s,i.attributeName))!==i.oldValue&&s[q](i.attributeName,i.oldValue,o))}))}(s($),s(B)),R=function(t){return D.observe(t,{childList:!0,subtree:!0}),t},R(I),$t&&(Mt.attachShadow=function(){return R($t.apply(this,arguments))})):(S=[],I[j]("DOMNodeInserted",u($)),I[j]("DOMNodeRemoved",u(B))),I[j](Z,l),I[j]("readystatechange",l),I.importNode=function(t,e){switch(t.nodeType){case 1:return d(I,Qt,[t,!!e]);case 11:for(var n=I.createDocumentFragment(),r=t.childNodes,i=r.length,s=0;s<i;s++)n.appendChild(I.importNode(r[s],!!e));return n;default:return Vt.call(t,!!e)}},Mt.cloneNode=function(t){return d(this,Vt,[!!t])}),ne)return ne=!1;if(-2<ut.call(st,nt+n)+ut.call(st,et+n)&&m(t),!rt.test(n)||-1<ut.call(it,n))throw new Error("The type "+t+" is invalid");var n,i,o=function(){return c?I.createElement(h,n):I.createElement(h)},a=e||lt,c=ht.call(a,H),h=c?e[H].toUpperCase():n;return c&&-1<ut.call(st,et+h)&&m(h),i=st.push((c?nt:et)+n)-1,at=at.concat(at.length?",":"",c?h+'[is="'+t.toLowerCase()+'"]':h),o.prototype=ot[i]=ht.call(a,"prototype")?a.prototype:Dt(Mt),at.length&&r(I.querySelectorAll(at),$),o},I.createElement=Xt=function(t,e){var n=_(e),r=n?Wt.call(I,t,Nt(n)):Wt.call(I,t),i=""+t,s=ut.call(st,(n?nt:et)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=a(i.toUpperCase(),n))),se=!I.createElement.innerHTMLHelper,o&&x(r,ot[s]),r}),addEventListener("beforeunload",(function(){delete I.createElement,delete I.importNode,delete I[P]}),!1),v.prototype={constructor:v,define:Et?function(t,e,n){if(n)y(t,e,n);else{var r=t.toUpperCase();St[r]={constructor:e,create:[r]},Ot.set(e,r),bt.define(t,e)}}:y,get:Et?function(t){return bt.get(t)||w(t)}:w,whenDefined:Et?function(t){return Ct.race([bt.whenDefined(t),E(t)])}:E},!bt||/^force/.test(e.type))T();else if(!e.noBuiltIn)try{!function(e,n,r){var i=new RegExp("^<a\\s+is=('|\")"+r+"\\1></a>$");if(n[H]="a",e.prototype=Dt(xt.prototype),e.prototype.constructor=e,t.customElements.define(r,e,n),!i.test(I.createElement("a",{is:r}).outerHTML)||!i.test((new e).outerHTML))throw n}((function t(){return Reflect.construct(xt,[],t)}),{},"document-register-element-a"+F)}catch(oe){T()}if(!e.noBuiltIn)try{if(Wt.call(I,"a","a").outerHTML.indexOf("is")<0)throw{}}catch(ae){Nt=function(t){return{is:t.toLowerCase()}}}}(window)}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}!function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}();!function(){"use strict";
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var t=Object.freeze({}),e=Array.isArray;function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function s(t){return!0===t}function o(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return"function"===typeof t}function u(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function h(t){return"[object Object]"===l.call(t)}function d(t){return"[object RegExp]"===l.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function w(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function E(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var T=/-(\w)/g,I=E((function(t){return t.replace(T,(function(t,e){return e?e.toUpperCase():""}))})),C=E((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),k=/\B([A-Z])/g,S=E((function(t){return t.replace(k,"-$1").toLowerCase()}));function A(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var N=Function.prototype.bind?O:A;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function R(t,e){for(var n in e)t[n]=e[n];return t}function L(t){for(var e={},n=0;n<t.length;n++)t[n]&&R(e,t[n]);return e}function x(t,e,n){}var M=function(t,e,n){return!1},P=function(t){return t};function F(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return F(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return F(t[n],e[n])}))}catch(c){return!1}}function U(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function j(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function $(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var V="data-server-rendered",B=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:x,parsePlatformTagName:P,mustUseProp:M,async:!0,_lifecycleHooks:H},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function G(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^".concat(z.source,".$_\\d]"));function Q(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X="__proto__"in{},J="undefined"!==typeof window,Y=J&&window.navigator.userAgent.toLowerCase(),Z=Y&&/msie|trident/.test(Y),tt=Y&&Y.indexOf("msie 9.0")>0,et=Y&&Y.indexOf("edge/")>0;Y&&Y.indexOf("android");var nt=Y&&/iphone|ipad|ipod|ios/.test(Y);Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y);var rt,it=Y&&Y.match(/firefox\/(\d+)/),st={}.watch,ot=!1;if(J)try{var at={};Object.defineProperty(at,"passive",{get:function(){ot=!0}}),window.addEventListener("test-passive",null,at)}catch(DL){}var ct=function(){return void 0===rt&&(rt=!J&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),rt},ut=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ht="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=null;function pt(t){void 0===t&&(t=null),t||ft&&ft._scope.off(),ft=t,t&&t._scope.on()}var mt=function(){function t(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),gt=function(t){void 0===t&&(t="");var e=new mt;return e.text=t,e.isComment=!0,e};function vt(t){return new mt(void 0,void 0,void 0,String(t))}function yt(t){var e=new mt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var wt=0,_t=[],bt=function(){for(var t=0;t<_t.length;t++){var e=_t[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}_t.length=0},Et=function(){function t(){this._pending=!1,this.id=wt++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,_t.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();Et.target=null;var Tt=[];function It(t){Tt.push(t),Et.target=t}function Ct(){Tt.pop(),Et.target=Tt[Tt.length-1]}var kt=Array.prototype,St=Object.create(kt),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach((function(t){var e=kt[t];G(St,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var Ot=Object.getOwnPropertyNames(St),Nt={},Dt=!0;function Rt(t){Dt=t}var Lt={notify:x,depend:x,addSub:x,removeSub:x},xt=function(){function t(t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!1),this.value=t,this.shallow=n,this.mock=r,this.dep=r?Lt:new Et,this.vmCount=0,G(t,"__ob__",this),e(t)){if(!r)if(X)t.__proto__=St;else for(var i=0,s=Ot.length;i<s;i++){var o=Ot[i];G(t,o,St[o])}n||this.observeArray(t)}else{var a=Object.keys(t);for(i=0;i<a.length;i++){o=a[i];Pt(t,o,Nt,void 0,n,r)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Mt(t[e],!1,this.mock)},t}();function Mt(t,n,r){return t&&b(t,"__ob__")&&t.__ob__ instanceof xt?t.__ob__:!Dt||!r&&ct()||!e(t)&&!h(t)||!Object.isExtensible(t)||t.__v_skip||Ht(t)||t instanceof mt?void 0:new xt(t,n,r)}function Pt(t,n,r,i,s,o){var a=new Et,c=Object.getOwnPropertyDescriptor(t,n);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||r!==Nt&&2!==arguments.length||(r=t[n]);var h=!s&&Mt(r,!1,o);return Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var n=u?u.call(t):r;return Et.target&&(a.depend(),h&&(h.dep.depend(),e(n)&&jt(n))),Ht(n)&&!s?n.value:n},set:function(e){var n=u?u.call(t):r;if($(n,e)){if(l)l.call(t,e);else{if(u)return;if(!s&&Ht(n)&&!Ht(e))return void(n.value=e);r=e}h=!s&&Mt(e,!1,o),a.notify()}}}),a}}function Ft(t,n,r){if(!Bt(t)){var i=t.__ob__;return e(t)&&f(n)?(t.length=Math.max(t.length,n),t.splice(n,1,r),i&&!i.shallow&&i.mock&&Mt(r,!1,!0),r):n in t&&!(n in Object.prototype)?(t[n]=r,r):t._isVue||i&&i.vmCount?r:i?(Pt(i.value,n,r,void 0,i.shallow,i.mock),i.dep.notify(),r):(t[n]=r,r)}}function Ut(t,n){if(e(t)&&f(n))t.splice(n,1);else{var r=t.__ob__;t._isVue||r&&r.vmCount||Bt(t)||b(t,n)&&(delete t[n],r&&r.dep.notify())}}function jt(t){for(var n=void 0,r=0,i=t.length;r<i;r++)n=t[r],n&&n.__ob__&&n.__ob__.dep.depend(),e(n)&&jt(n)}function $t(t){return Vt(t,!0),G(t,"__v_isShallow",!0),t}function Vt(t,e){if(!Bt(t)){Mt(t,e,ct());0}}function Bt(t){return!(!t||!t.__v_isReadonly)}function Ht(t){return!(!t||!0!==t.__v_isRef)}function qt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Ht(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Ht(r)&&!Ht(t)?r.value=t:e[n]=t}})}var zt="watcher";"".concat(zt," callback"),"".concat(zt," getter"),"".concat(zt," cleanup");var Kt;var Gt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!t&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Kt;try{return Kt=this,t()}finally{Kt=e}}else 0},t.prototype.on=function(){Kt=this},t.prototype.off=function(){Kt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Wt(t,e){void 0===e&&(e=Kt),e&&e.active&&e.effects.push(t)}function Qt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var Xt=E((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function Jt(t,n){function r(){var t=r.fns;if(!e(t))return Ge(t,null,arguments,n,"v-on handler");for(var i=t.slice(),s=0;s<i.length;s++)Ge(i[s],null,arguments,n,"v-on handler")}return r.fns=t,r}function Yt(t,e,n,i,o,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=Xt(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=Jt(u,a)),s(h.once)&&(u=t[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(h=Xt(c),i(h.name,e[c],h.capture))}function Zt(t,e,n){var o;t instanceof mt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),w(o.fns,c)}r(a)?o=Jt([c]):i(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=Jt([a,c]),o.merged=!0,t[e]=o}function te(t,e,n){var s=e.options.props;if(!r(s)){var o={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in s){var l=S(u);ee(o,c,u,l,!0)||ee(o,a,u,l,!1)}return o}}function ee(t,e,n,r,s){if(i(e)){if(b(e,n))return t[n]=e[n],s||delete e[n],!0;if(b(e,r))return t[n]=e[r],s||delete e[r],!0}return!1}function ne(t){for(var n=0;n<t.length;n++)if(e(t[n]))return Array.prototype.concat.apply([],t);return t}function re(t){return a(t)?[vt(t)]:e(t)?se(t):void 0}function ie(t){return i(t)&&i(t.text)&&o(t.isComment)}function se(t,n){var o,c,u,l,h=[];for(o=0;o<t.length;o++)c=t[o],r(c)||"boolean"===typeof c||(u=h.length-1,l=h[u],e(c)?c.length>0&&(c=se(c,"".concat(n||"","_").concat(o)),ie(c[0])&&ie(l)&&(h[u]=vt(l.text+c[0].text),c.shift()),h.push.apply(h,c)):a(c)?ie(l)?h[u]=vt(l.text+c):""!==c&&h.push(vt(c)):ie(c)&&ie(l)?h[u]=vt(l.text+c.text):(s(t._isVList)&&i(c.tag)&&r(c.key)&&i(n)&&(c.key="__vlist".concat(n,"_").concat(o,"__")),h.push(c)));return h}function oe(t,n){var r,s,o,a,c=null;if(e(t)||"string"===typeof t)for(c=new Array(t.length),r=0,s=t.length;r<s;r++)c[r]=n(t[r],r);else if("number"===typeof t)for(c=new Array(t),r=0;r<t;r++)c[r]=n(r+1,r);else if(u(t))if(dt&&t[Symbol.iterator]){c=[];var l=t[Symbol.iterator](),h=l.next();while(!h.done)c.push(n(h.value,c.length)),h=l.next()}else for(o=Object.keys(t),c=new Array(o.length),r=0,s=o.length;r<s;r++)a=o[r],c[r]=n(t[a],a,r);return i(c)||(c=[]),c._isVList=!0,c}function ae(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=R(R({},r),n)),i=s(n)||(c(e)?e():e)):i=this.$slots[t]||(c(e)?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function ce(t){return br(this.$options,"filters",t,!0)||P}function ue(t,n){return e(t)?-1===t.indexOf(n):t!==n}function le(t,e,n,r,i){var s=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?ue(i,r):s?ue(s,t):r?S(r)!==e:void 0===t}function he(t,n,r,i,s){if(r)if(u(r)){e(r)&&(r=L(r));var o=void 0,a=function(e){if("class"===e||"style"===e||y(e))o=t;else{var a=t.attrs&&t.attrs.type;o=i||q.mustUseProp(n,a,e)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=I(e),u=S(e);if(!(c in o)&&!(u in o)&&(o[e]=r[e],s)){var l=t.on||(t.on={});l["update:".concat(e)]=function(t){r[e]=t}}};for(var c in r)a(c)}else;return t}function de(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),pe(r,"__static__".concat(t),!1)),r}function fe(t,e,n){return pe(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function pe(t,n,r){if(e(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&me(t[i],"".concat(n,"_").concat(i),r);else me(t,n,r)}function me(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ge(t,e){if(e)if(h(e)){var n=t.on=t.on?R({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function ve(t,n,r,i){n=n||{$stable:!r};for(var s=0;s<t.length;s++){var o=t[s];e(o)?ve(o,n,r):o&&(o.proxy&&(o.fn.proxy=!0),n[o.key]=o.fn)}return i&&(n.$key=i),n}function ye(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function we(t,e){return"string"===typeof t?e+t:t}function _e(t){t._o=fe,t._n=g,t._s=m,t._l=oe,t._t=ae,t._q=F,t._i=U,t._m=de,t._f=ce,t._k=le,t._b=he,t._v=vt,t._e=gt,t._u=ve,t._g=ge,t._d=ye,t._p=we}function be(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Ee)&&delete n[u];return n}function Ee(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t){return t.isComment&&t.asyncFactory}function Ie(e,n,r,i){var s,o=Object.keys(r).length>0,a=n?!!n.$stable:!o,c=n&&n.$key;if(n){if(n._normalized)return n._normalized;if(a&&i&&i!==t&&c===i.$key&&!o&&!i.$hasNormal)return i;for(var u in s={},n)n[u]&&"$"!==u[0]&&(s[u]=Ce(e,r,u,n[u]))}else s={};for(var l in r)l in s||(s[l]=ke(r,l));return n&&Object.isExtensible(n)&&(n._normalized=s),G(s,"$stable",a),G(s,"$key",c),G(s,"$hasNormal",o),s}function Ce(t,n,r,i){var s=function(){var n=ft;pt(t);var r=arguments.length?i.apply(null,arguments):i({});r=r&&"object"===typeof r&&!e(r)?[r]:re(r);var s=r&&r[0];return pt(n),r&&(!s||1===r.length&&s.isComment&&!Te(s))?void 0:r};return i.proxy&&Object.defineProperty(n,r,{get:s,enumerable:!0,configurable:!0}),s}function ke(t,e){return function(){return t[e]}}function Se(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=Ae(t);pt(t),It();var i=Ge(n,null,[t._props||$t({}),r],t,"setup");if(Ct(),pt(),c(i))e.render=i;else if(u(i))if(t._setupState=i,i.__sfc){var s=t._setupProxy={};for(var o in i)"__sfc"!==o&&qt(s,i,o)}else for(var o in i)K(o)||qt(t,i,o);else 0}}function Ae(e){return{get attrs(){if(!e._attrsProxy){var n=e._attrsProxy={};G(n,"_v_attr_proxy",!0),Oe(n,e.$attrs,t,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var n=e._listenersProxy={};Oe(n,e.$listeners,t,e,"$listeners")}return e._listenersProxy},get slots(){return De(e)},emit:N(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return qt(e,t,n)}))}}}function Oe(t,e,n,r,i){var s=!1;for(var o in e)o in t?e[o]!==n[o]&&(s=!0):(s=!0,Ne(t,o,r,i));for(var o in t)o in e||(s=!0,delete t[o]);return s}function Ne(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function De(t){return t._slotsProxy||Re(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Re(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Le(e){e._vnode=null,e._staticTrees=null;var n=e.$options,r=e.$vnode=n._parentVnode,i=r&&r.context;e.$slots=be(n._renderChildren,i),e.$scopedSlots=r?Ie(e.$parent,r.data.scopedSlots,e.$slots):t,e._c=function(t,n,r,i){return Be(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Be(e,t,n,r,i,!0)};var s=r&&r.data;Pt(e,"$attrs",s&&s.attrs||t,null,!0),Pt(e,"$listeners",n._parentListeners||t,null,!0)}var xe=null;function Me(t){_e(t.prototype),t.prototype.$nextTick=function(t){return on(t,this)},t.prototype._render=function(){var t,n=this,r=n.$options,i=r.render,s=r._parentVnode;s&&n._isMounted&&(n.$scopedSlots=Ie(n.$parent,s.data.scopedSlots,n.$slots,n.$scopedSlots),n._slotsProxy&&Re(n._slotsProxy,n.$scopedSlots)),n.$vnode=s;try{pt(n),xe=n,t=i.call(n._renderProxy,n.$createElement)}catch(DL){Ke(DL,n,"render"),t=n._vnode}finally{xe=null,pt()}return e(t)&&1===t.length&&(t=t[0]),t instanceof mt||(t=gt()),t.parent=s,t}}function Pe(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function Fe(t,e,n,r,i){var s=gt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function Ue(t,e){if(s(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=xe;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var o=t.owners=[n],a=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return w(o,n)}));var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=j((function(n){t.resolved=Pe(n,e),a?o.length=0:h(!0)})),f=j((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),m=t(d,f);return u(m)&&(p(m)?r(t.resolved)&&m.then(d,f):p(m.component)&&(m.component.then(d,f),i(m.error)&&(t.errorComp=Pe(m.error,e)),i(m.loading)&&(t.loadingComp=Pe(m.loading,e),0===m.delay?t.loading=!0:c=setTimeout((function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),i(m.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&f(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function je(t){if(e(t))for(var n=0;n<t.length;n++){var r=t[n];if(i(r)&&(i(r.componentOptions)||Te(r)))return r}}var $e=1,Ve=2;function Be(t,n,r,i,o,c){return(e(r)||a(r))&&(o=i,i=r,r=void 0),s(c)&&(o=Ve),He(t,n,r,i,o)}function He(t,n,r,s,o){if(i(r)&&i(r.__ob__))return gt();if(i(r)&&i(r.is)&&(n=r.is),!n)return gt();var a,u;if(e(s)&&c(s[0])&&(r=r||{},r.scopedSlots={default:s[0]},s.length=0),o===Ve?s=re(s):o===$e&&(s=ne(s)),"string"===typeof n){var l=void 0;u=t.$vnode&&t.$vnode.ns||q.getTagNamespace(n),a=q.isReservedTag(n)?new mt(q.parsePlatformTagName(n),r,s,void 0,void 0,t):r&&r.pre||!i(l=br(t.$options,"components",n))?new mt(n,r,s,void 0,void 0,t):ir(l,r,t,s,n)}else a=ir(n,r,t,s);return e(a)?a:i(a)?(i(u)&&qe(a,u),i(r)&&ze(r),a):gt()}function qe(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var o=0,a=t.children.length;o<a;o++){var c=t.children[o];i(c.tag)&&(r(c.ns)||s(n)&&"svg"!==c.tag)&&qe(c,e,n)}}function ze(t){u(t.style)&&hn(t.style),u(t.class)&&hn(t.class)}function Ke(t,e,n){It();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,t,e,n);if(o)return}catch(DL){We(DL,r,"errorCaptured hook")}}}We(t,e,n)}finally{Ct()}}function Ge(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&p(s)&&!s._handled&&(s.catch((function(t){return Ke(t,r,i+" (Promise/async)")})),s._handled=!0)}catch(DL){Ke(DL,r,i)}return s}function We(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(DL){DL!==t&&Qe(DL,null,"config.errorHandler")}Qe(t,e,n)}function Qe(t,e,n){if(!J||"undefined"===typeof console)throw t;console.error(t)}var Xe,Je=!1,Ye=[],Ze=!1;function tn(){Ze=!1;var t=Ye.slice(0);Ye.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var en=Promise.resolve();Xe=function(){en.then(tn),nt&&setTimeout(x)},Je=!0}else if(Z||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Xe="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(tn)}:function(){setTimeout(tn,0)};else{var nn=1,rn=new MutationObserver(tn),sn=document.createTextNode(String(nn));rn.observe(sn,{characterData:!0}),Xe=function(){nn=(nn+1)%2,sn.data=String(nn)},Je=!0}function on(t,e){var n;if(Ye.push((function(){if(t)try{t.call(e)}catch(DL){Ke(DL,e,"nextTick")}else n&&n(e)})),Ze||(Ze=!0,Xe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function an(t){return function(e,n){if(void 0===n&&(n=ft),n)return cn(n,t,e)}}function cn(t,e,n){var r=t.$options;r[e]=fr(r[e],n)}an("beforeMount"),an("mounted"),an("beforeUpdate"),an("updated"),an("beforeDestroy"),an("destroyed"),an("activated"),an("deactivated"),an("serverPrefetch"),an("renderTracked"),an("renderTriggered"),an("errorCaptured");var un="2.7.14";var ln=new ht;function hn(t){return dn(t,ln),ln.clear(),t}function dn(t,n){var r,i,s=e(t);if(!(!s&&!u(t)||t.__v_skip||Object.isFrozen(t)||t instanceof mt)){if(t.__ob__){var o=t.__ob__.dep.id;if(n.has(o))return;n.add(o)}if(s){r=t.length;while(r--)dn(t[r],n)}else if(Ht(t))dn(t.value,n);else{i=Object.keys(t),r=i.length;while(r--)dn(t[i[r]],n)}}}var fn,pn=0,mn=function(){function t(t,e,n,r,i){Wt(this,Kt&&!Kt._vm?Kt:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++pn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="",c(e)?this.getter=e:(this.getter=Q(e),this.getter||(this.getter=x)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;It(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(DL){if(!this.user)throw DL;Ke(DL,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&hn(t),Ct(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Ge(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&w(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&_n(t,e)}function vn(t,e){fn.$on(t,e)}function yn(t,e){fn.$off(t,e)}function wn(t,e){var n=fn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function _n(t,e,n){fn=t,Yt(e,n||{},vn,yn,wn,t),fn=void 0}function bn(t){var n=/^hook:/;t.prototype.$on=function(t,r){var i=this;if(e(t))for(var s=0,o=t.length;s<o;s++)i.$on(t[s],r);else(i._events[t]||(i._events[t]=[])).push(r),n.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,n){var r=this;if(!arguments.length)return r._events=Object.create(null),r;if(e(t)){for(var i=0,s=t.length;i<s;i++)r.$off(t[i],n);return r}var o,a=r._events[t];if(!a)return r;if(!n)return r._events[t]=null,r;var c=a.length;while(c--)if(o=a[c],o===n||o.fn===n){a.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),i='event handler for "'.concat(t,'"'),s=0,o=n.length;s<o;s++)Ge(n[s],e,r,e,i)}return e}}var En=null;function Tn(t){var e=En;return En=t,function(){En=e}}function In(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Cn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=Tn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Dn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||w(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Dn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function kn(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=gt),Dn(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Dn(t,"beforeUpdate")}};new mn(t,r,x,i,!0),n=!1;var s=t._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==t.$vnode&&(t._isMounted=!0,Dn(t,"mounted")),t}function Sn(e,n,r,i,s){var o=i.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==t&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=s;var h=i.data.attrs||t;e._attrsProxy&&Oe(e._attrsProxy,h,l.data&&l.data.attrs||t,e,"$attrs")&&(u=!0),e.$attrs=h,r=r||t;var d=e.$options._parentListeners;if(e._listenersProxy&&Oe(e._listenersProxy,r,d||t,e,"$listeners"),e.$listeners=e.$options._parentListeners=r,_n(e,r,d),n&&e.$options.props){Rt(!1);for(var f=e._props,p=e.$options._propKeys||[],m=0;m<p.length;m++){var g=p[m],v=e.$options.props;f[g]=Er(g,v,n,e)}Rt(!0),e.$options.propsData=n}u&&(e.$slots=be(s,i.context),e.$forceUpdate())}function An(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function On(t,e){if(e){if(t._directInactive=!1,An(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)On(t.$children[n]);Dn(t,"activated")}}function Nn(t,e){if((!e||(t._directInactive=!0,!An(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Nn(t.$children[n]);Dn(t,"deactivated")}}function Dn(t,e,n,r){void 0===r&&(r=!0),It();var i=ft;r&&pt(t);var s=t.$options[e],o="".concat(e," hook");if(s)for(var a=0,c=s.length;a<c;a++)Ge(s[a],t,n||null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),r&&pt(i),Ct()}var Rn=[],Ln=[],xn={},Mn=!1,Pn=!1,Fn=0;function Un(){Fn=Rn.length=Ln.length=0,xn={},Mn=Pn=!1}var jn=0,$n=Date.now;if(J&&!Z){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&$n()>document.createEvent("Event").timeStamp&&($n=function(){return Vn.now()})}var Bn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Hn(){var t,e;for(jn=$n(),Pn=!0,Rn.sort(Bn),Fn=0;Fn<Rn.length;Fn++)t=Rn[Fn],t.before&&t.before(),e=t.id,xn[e]=null,t.run();var n=Ln.slice(),r=Rn.slice();Un(),Kn(n),qn(r),bt(),ut&&q.devtools&&ut.emit("flush")}function qn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Dn(r,"updated")}}function zn(t){t._inactive=!1,Ln.push(t)}function Kn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,On(t[e],!0)}function Gn(t){var e=t.id;if(null==xn[e]&&(t!==Et.target||!t.noRecurse)){if(xn[e]=!0,Pn){var n=Rn.length-1;while(n>Fn&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);Mn||(Mn=!0,on(Hn))}}function Wn(t){var e=t.$options.provide;if(e){var n=c(e)?e.call(t):e;if(!u(n))return;for(var r=Qt(t),i=dt?Reflect.ownKeys(n):Object.keys(n),s=0;s<i.length;s++){var o=i[s];Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))}}}function Qn(t){var e=Xn(t.$options.inject,t);e&&(Rt(!1),Object.keys(e).forEach((function(n){Pt(t,n,e[n])})),Rt(!0))}function Xn(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=t[s].from;if(o in e._provided)n[s]=e._provided[o];else if("default"in t[s]){var a=t[s].default;n[s]=c(a)?a.call(e):a}else 0}}return n}}function Jn(n,r,i,o,a){var c,u=this,l=a.options;b(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=s(l._compiled),d=!h;this.data=n,this.props=r,this.children=i,this.parent=o,this.listeners=n.on||t,this.injections=Xn(l.inject,o),this.slots=function(){return u.$slots||Ie(o,n.scopedSlots,u.$slots=be(i,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ie(o,n.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ie(o,n.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,n,r,i){var s=Be(c,t,n,r,i,d);return s&&!e(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(t,e,n,r){return Be(c,t,e,n,r,d)}}function Yn(n,r,s,o,a){var c=n.options,u={},l=c.props;if(i(l))for(var h in l)u[h]=Er(h,l,r||t);else i(s.attrs)&&tr(u,s.attrs),i(s.props)&&tr(u,s.props);var d=new Jn(s,u,a,o,n),f=c.render.call(null,d._c,d);if(f instanceof mt)return Zn(f,s,d.parent,c,d);if(e(f)){for(var p=re(f)||[],m=new Array(p.length),g=0;g<p.length;g++)m[g]=Zn(p[g],s,d.parent,c,d);return m}}function Zn(t,e,n,r,i){var s=yt(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function tr(t,e){for(var n in e)t[I(n)]=e[n]}function er(t){return t.name||t.__name||t._componentTag}_e(Jn.prototype);var nr={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;nr.prepatch(n,n)}else{var r=t.componentInstance=sr(t,En);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Sn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Dn(n,"mounted")),t.data.keepAlive&&(e._isMounted?zn(n):On(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Nn(e,!0):e.$destroy())}},rr=Object.keys(nr);function ir(t,e,n,o,a){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=Ue(l,c),void 0===t))return Fe(l,e,n,o,a);e=e||{},Kr(t),i(e.model)&&cr(t.options,e);var h=te(e,t,a);if(s(t.options.functional))return Yn(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}or(e);var p=er(t.options)||a,m=new mt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:o},l);return m}}}function sr(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function or(t){for(var e=t.hook||(t.hook={}),n=0;n<rr.length;n++){var r=rr[n],i=e[r],s=nr[r];i===s||i&&i._merged||(e[r]=i?ar(s,i):s)}}function ar(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function cr(t,n){var r=t.model&&t.model.prop||"value",s=t.model&&t.model.event||"input";(n.attrs||(n.attrs={}))[r]=n.model.value;var o=n.on||(n.on={}),a=o[s],c=n.model.callback;i(a)?(e(a)?-1===a.indexOf(c):a!==c)&&(o[s]=[c].concat(a)):o[s]=c}var ur=x,lr=q.optionMergeStrategies;function hr(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,s,o=dt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)r=o[a],"__ob__"!==r&&(i=t[r],s=e[r],n&&b(t,r)?i!==s&&h(i)&&h(s)&&hr(i,s):Ft(t,r,s));return t}function dr(t,e,n){return n?function(){var r=c(e)?e.call(n,n):e,i=c(t)?t.call(n,n):t;return r?hr(r,i):i}:e?t?function(){return hr(c(e)?e.call(this,this):e,c(t)?t.call(this,this):t)}:e:t}function fr(t,n){var r=n?t?t.concat(n):e(n)?n:[n]:t;return r?pr(r):r}function pr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function mr(t,e,n,r){var i=Object.create(t||null);return e?R(i,e):i}lr.data=function(t,e,n){return n?dr(t,e,n):e&&"function"!==typeof e?t:dr(t,e)},H.forEach((function(t){lr[t]=fr})),B.forEach((function(t){lr[t+"s"]=mr})),lr.watch=function(t,n,r,i){if(t===st&&(t=void 0),n===st&&(n=void 0),!n)return Object.create(t||null);if(!t)return n;var s={};for(var o in R(s,t),n){var a=s[o],c=n[o];a&&!e(a)&&(a=[a]),s[o]=a?a.concat(c):e(c)?c:[c]}return s},lr.props=lr.methods=lr.inject=lr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return R(i,t),e&&R(i,e),i},lr.provide=function(t,e){return t?function(){var n=Object.create(null);return hr(n,c(t)?t.call(this):t),e&&hr(n,c(e)?e.call(this):e,!1),n}:e};var gr=function(t,e){return void 0===e?t:e};function vr(t,n){var r=t.props;if(r){var i,s,o,a={};if(e(r)){i=r.length;while(i--)s=r[i],"string"===typeof s&&(o=I(s),a[o]={type:null})}else if(h(r))for(var c in r)s=r[c],o=I(c),a[o]=h(s)?s:{type:s};else 0;t.props=a}}function yr(t,n){var r=t.inject;if(r){var i=t.inject={};if(e(r))for(var s=0;s<r.length;s++)i[r[s]]={from:r[s]};else if(h(r))for(var o in r){var a=r[o];i[o]=h(a)?R({from:o},a):{from:a}}else 0}}function wr(t){var e=t.directives;if(e)for(var n in e){var r=e[n];c(r)&&(e[n]={bind:r,update:r})}}function _r(t,e,n){if(c(e)&&(e=e.options),vr(e,n),yr(e,n),wr(e),!e._base&&(e.extends&&(t=_r(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=_r(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)b(t,s)||a(s);function a(r){var i=lr[r]||gr;o[r]=i(t[r],e[r],n,r)}return o}function br(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var s=I(n);if(b(i,s))return i[s];var o=C(s);if(b(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Er(t,e,n,r){var i=e[t],s=!b(n,t),o=n[t],a=Sr(Boolean,i.type);if(a>-1)if(s&&!b(i,"default"))o=!1;else if(""===o||o===S(t)){var c=Sr(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Tr(r,i,t);var u=Dt;Rt(!0),Mt(o),Rt(u)}return o}function Tr(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:c(r)&&"Function"!==Cr(e.type)?r.call(t):r}}var Ir=/^\s*function (\w+)/;function Cr(t){var e=t&&t.toString().match(Ir);return e?e[1]:""}function kr(t,e){return Cr(t)===Cr(e)}function Sr(t,n){if(!e(n))return kr(n,t)?0:-1;for(var r=0,i=n.length;r<i;r++)if(kr(n[r],t))return r;return-1}var Ar={enumerable:!0,configurable:!0,get:x,set:x};function Or(t,e,n){Ar.get=function(){return this[e][n]},Ar.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ar)}function Nr(t){var e=t.$options;if(e.props&&Dr(t,e.props),Se(t),e.methods&&jr(t,e.methods),e.data)Rr(t);else{var n=Mt(t._data={});n&&n.vmCount++}e.computed&&Mr(t,e.computed),e.watch&&e.watch!==st&&$r(t,e.watch)}function Dr(t,e){var n=t.$options.propsData||{},r=t._props=$t({}),i=t.$options._propKeys=[],s=!t.$parent;s||Rt(!1);var o=function(s){i.push(s);var o=Er(s,e,n,t);Pt(r,s,o),s in t||Or(t,"_props",s)};for(var a in e)o(a);Rt(!0)}function Rr(t){var e=t.$options.data;e=t._data=c(e)?Lr(e,t):e||{},h(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var s=n[i];0,r&&b(r,s)||K(s)||Or(t,"_data",s)}var o=Mt(e);o&&o.vmCount++}function Lr(t,e){It();try{return t.call(e,e)}catch(DL){return Ke(DL,e,"data()"),{}}finally{Ct()}}var xr={lazy:!0};function Mr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var s=e[i],o=c(s)?s:s.get;0,r||(n[i]=new mn(t,o||x,x,xr)),i in t||Pr(t,i,s)}}function Pr(t,e,n){var r=!ct();c(n)?(Ar.get=r?Fr(e):Ur(n),Ar.set=x):(Ar.get=n.get?r&&!1!==n.cache?Fr(e):Ur(n.get):x,Ar.set=n.set||x),Object.defineProperty(t,e,Ar)}function Fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Et.target&&e.depend(),e.value}}function Ur(t){return function(){return t.call(this,this)}}function jr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?x:N(e[n],t)}function $r(t,n){for(var r in n){var i=n[r];if(e(i))for(var s=0;s<i.length;s++)Vr(t,r,i[s]);else Vr(t,r,i)}}function Vr(t,e,n,r){return h(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Br(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ft,t.prototype.$delete=Ut,t.prototype.$watch=function(t,e,n){var r=this;if(h(e))return Vr(r,t,e,n);n=n||{},n.user=!0;var i=new mn(r,t,e,n);if(n.immediate){var s='callback for immediate watcher "'.concat(i.expression,'"');It(),Ge(e,r,[i.value],r,s),Ct()}return function(){i.teardown()}}}var Hr=0;function qr(t){t.prototype._init=function(t){var e=this;e._uid=Hr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Gt(!0),e._scope._vm=!0,t&&t._isComponent?zr(e,t):e.$options=_r(Kr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,In(e),gn(e),Le(e),Dn(e,"beforeCreate",void 0,!1),Qn(e),Nr(e),Wn(e),Dn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function zr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Kr(t){var e=t.options;if(t.super){var n=Kr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Gr(t);i&&R(t.extendOptions,i),e=t.options=_r(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Gr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Wr(t){this._init(t)}function Qr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),c(t.install)?t.install.apply(t,n):c(t)&&t.apply(null,n),e.push(t),this}}function Xr(t){t.mixin=function(t){return this.options=_r(this.options,t),this}}function Jr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=er(t)||er(n.options);var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=_r(n.options,t),o["super"]=n,o.options.props&&Yr(o),o.options.computed&&Zr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,B.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=R({},o.options),i[r]=o,o}}function Yr(t){var e=t.options.props;for(var n in e)Or(t.prototype,"_props",n)}function Zr(t){var e=t.options.computed;for(var n in e)Pr(t.prototype,n,e[n])}function ti(t){B.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&c(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ei(t){return t&&(er(t.Ctor.options)||t.tag)}function ni(t,n){return e(t)?t.indexOf(n)>-1:"string"===typeof t?t.split(",").indexOf(n)>-1:!!d(t)&&t.test(n)}function ri(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&ii(n,s,r,i)}}}function ii(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,w(n,e)}qr(Wr),Br(Wr),bn(Wr),Cn(Wr),Me(Wr);var si=[String,RegExp,Array],oi={name:"keep-alive",abstract:!0,props:{include:si,exclude:si,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;e[i]={name:ei(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&ii(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)ii(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){ri(t,(function(t){return ni(e,t)}))})),this.$watch("exclude",(function(e){ri(t,(function(t){return!ni(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=je(t),n=e&&e.componentOptions;if(n){var r=ei(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!ni(s,r))||o&&r&&ni(o,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,w(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},ai={KeepAlive:oi};function ci(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ur,extend:R,mergeOptions:_r,defineReactive:Pt},t.set=Ft,t.delete=Ut,t.nextTick=on,t.observable=function(t){return Mt(t),t},t.options=Object.create(null),B.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,R(t.options.components,ai),Qr(t),Xr(t),Jr(t),ti(t)}ci(Wr),Object.defineProperty(Wr.prototype,"$isServer",{get:ct}),Object.defineProperty(Wr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Wr,"FunctionalRenderContext",{value:Jn}),Wr.version=un;var ui=v("style,class"),li=v("input,textarea,option,select,progress"),hi=function(t,e,n){return"value"===n&&li(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},di=v("contenteditable,draggable,spellcheck"),fi=v("events,caret,typing,plaintext-only"),pi=function(t,e){return wi(e)||"false"===e?"false":"contenteditable"===t&&fi(e)?e:"true"},mi=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),gi="http://www.w3.org/1999/xlink",vi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},yi=function(t){return vi(t)?t.slice(6,t.length):""},wi=function(t){return null==t||!1===t};function _i(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=bi(r.data,e));while(i(n=n.parent))n&&n.data&&(e=bi(e,n.data));return Ei(e.staticClass,e.class)}function bi(t,e){return{staticClass:Ti(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Ei(t,e){return i(t)||i(e)?Ti(t,Ii(e)):""}function Ti(t,e){return t?e?t+" "+e:t:e||""}function Ii(t){return Array.isArray(t)?Ci(t):u(t)?ki(t):"string"===typeof t?t:""}function Ci(t){for(var e,n="",r=0,s=t.length;r<s;r++)i(e=Ii(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ki(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Si={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ai=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Oi=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ni=function(t){return Ai(t)||Oi(t)};function Di(t){return Oi(t)?"svg":"math"===t?"math":void 0}var Ri=Object.create(null);function Li(t){if(!J)return!0;if(Ni(t))return!1;if(t=t.toLowerCase(),null!=Ri[t])return Ri[t];var e=document.createElement(t);return t.indexOf("-")>-1?Ri[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Ri[t]=/HTMLUnknownElement/.test(e.toString())}var xi=v("text,number,password,search,email,tel,url");function Mi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Pi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Fi(t,e){return document.createElementNS(Si[t],e)}function Ui(t){return document.createTextNode(t)}function ji(t){return document.createComment(t)}function $i(t,e,n){t.insertBefore(e,n)}function Vi(t,e){t.removeChild(e)}function Bi(t,e){t.appendChild(e)}function Hi(t){return t.parentNode}function qi(t){return t.nextSibling}function zi(t){return t.tagName}function Ki(t,e){t.textContent=e}function Gi(t,e){t.setAttribute(e,"")}var Wi=Object.freeze({__proto__:null,createElement:Pi,createElementNS:Fi,createTextNode:Ui,createComment:ji,insertBefore:$i,removeChild:Vi,appendChild:Bi,parentNode:Hi,nextSibling:qi,tagName:zi,setTextContent:Ki,setStyleScope:Gi}),Qi={create:function(t,e){Xi(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Xi(t,!0),Xi(e))},destroy:function(t){Xi(t,!0)}};function Xi(t,n){var r=t.data.ref;if(i(r)){var s=t.context,o=t.componentInstance||t.elm,a=n?null:o,u=n?void 0:o;if(c(r))Ge(r,s,[a],s,"template ref function");else{var l=t.data.refInFor,h="string"===typeof r||"number"===typeof r,d=Ht(r),f=s.$refs;if(h||d)if(l){var p=h?f[r]:r.value;n?e(p)&&w(p,o):e(p)?p.includes(o)||p.push(o):h?(f[r]=[o],Ji(s,r,f[r])):r.value=[o]}else if(h){if(n&&f[r]!==o)return;f[r]=u,Ji(s,r,a)}else if(d){if(n&&r.value!==o)return;r.value=a}else 0}}}function Ji(t,e,n){var r=t._setupState;r&&b(r,e)&&(Ht(r[e])?r[e].value=n:r[e]=n)}var Yi=new mt("",{},[]),Zi=["create","activate","update","remove","destroy"];function ts(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&es(t,e)||s(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function es(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,s=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===s||xi(r)&&xi(s)}function ns(t,e,n){var r,s,o={};for(r=e;r<=n;++r)s=t[r].key,i(s)&&(o[s]=r);return o}function rs(t){var n,o,c={},u=t.modules,l=t.nodeOps;for(n=0;n<Zi.length;++n)for(c[Zi[n]]=[],o=0;o<u.length;++o)i(u[o][Zi[n]])&&c[Zi[n]].push(u[o][Zi[n]]);function h(t){return new mt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function d(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=l.parentNode(t);i(e)&&l.removeChild(e,t)}function p(t,e,n,r,o,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=yt(t)),t.isRootInsert=!o,!m(t,e,n,r)){var u=t.data,h=t.children,d=t.tag;i(d)?(t.elm=t.ns?l.createElementNS(t.ns,d):l.createElement(d,t),T(t),_(t,h,e),i(u)&&E(t,e),w(n,t.elm,r)):s(t.isComment)?(t.elm=l.createComment(t.text),w(n,t.elm,r)):(t.elm=l.createTextNode(t.text),w(n,t.elm,r))}}function m(t,e,n,r){var o=t.data;if(i(o)){var a=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1),i(t.componentInstance))return g(t,e),w(n,t.elm,r),s(a)&&y(t,e,n,r),!0}}function g(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(E(t,e),T(t)):(Xi(t),e.push(t))}function y(t,e,n,r){var s,o=t;while(o.componentInstance)if(o=o.componentInstance._vnode,i(s=o.data)&&i(s=s.transition)){for(s=0;s<c.activate.length;++s)c.activate[s](Yi,o);e.push(o);break}w(n,t.elm,r)}function w(t,e,n){i(t)&&(i(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function _(t,n,r){if(e(n)){0;for(var i=0;i<n.length;++i)p(n[i],r,t.elm,null,!0,n,i)}else a(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function E(t,e){for(var r=0;r<c.create.length;++r)c.create[r](Yi,t);n=t.data.hook,i(n)&&(i(n.create)&&n.create(Yi,t),i(n.insert)&&e.push(t))}function T(t){var e;if(i(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}i(e=En)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function I(t,e,n,r,i,s){for(;r<=i;++r)p(n[r],s,t,e,!1,n,r)}function C(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<c.destroy.length;++e)c.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)C(t.children[n])}function k(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(S(r),C(r)):f(r.elm))}}function S(t,e){if(i(e)||i(t.data)){var n,r=c.remove.length+1;for(i(e)?e.listeners+=r:e=d(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&S(n,e),n=0;n<c.remove.length;++n)c.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else f(t.elm)}function A(t,e,n,s,o){var a,c,u,h,d=0,f=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,w=n[0],_=n[y],b=!o;while(d<=m&&f<=y)r(g)?g=e[++d]:r(v)?v=e[--m]:ts(g,w)?(N(g,w,s,n,f),g=e[++d],w=n[++f]):ts(v,_)?(N(v,_,s,n,y),v=e[--m],_=n[--y]):ts(g,_)?(N(g,_,s,n,y),b&&l.insertBefore(t,g.elm,l.nextSibling(v.elm)),g=e[++d],_=n[--y]):ts(v,w)?(N(v,w,s,n,f),b&&l.insertBefore(t,v.elm,g.elm),v=e[--m],w=n[++f]):(r(a)&&(a=ns(e,d,m)),c=i(w.key)?a[w.key]:O(w,e,d,m),r(c)?p(w,s,t,g.elm,!1,n,f):(u=e[c],ts(u,w)?(N(u,w,s,n,f),e[c]=void 0,b&&l.insertBefore(t,u.elm,g.elm)):p(w,s,t,g.elm,!1,n,f)),w=n[++f]);d>m?(h=r(n[y+1])?null:n[y+1].elm,I(t,h,n,f,y,s)):f>y&&k(e,d,m)}function O(t,e,n,r){for(var s=n;s<r;s++){var o=e[s];if(i(o)&&ts(t,o))return s}}function N(t,e,n,o,a,u){if(t!==e){i(e.elm)&&i(o)&&(e=o[a]=yt(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?L(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(t,e);var p=t.children,m=e.children;if(i(f)&&b(e)){for(d=0;d<c.update.length;++d)c.update[d](t,e);i(d=f.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(p)&&i(m)?p!==m&&A(h,p,m,n,u):i(m)?(i(t.text)&&l.setTextContent(h,""),I(h,null,m,0,m.length-1,n)):i(p)?k(p,0,p.length-1):i(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(t,e)}}}function D(t,e,n){if(s(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var R=v("attrs,class,staticClass,staticStyle,key");function L(t,e,n,r){var o,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,s(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(o=c.hook)&&i(o=o.init)&&o(e,!0),i(o=e.componentInstance)))return g(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(o=c)&&i(o=o.domProps)&&i(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!L(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else _(e,u,n);if(i(c)){var f=!1;for(var p in c)if(!R(p)){f=!0,E(e,n);break}!f&&c["class"]&&hn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,o){if(!r(e)){var a=!1,u=[];if(r(t))a=!0,p(e,u);else{var d=i(t.nodeType);if(!d&&ts(t,e))N(t,e,u,null,null,o);else{if(d){if(1===t.nodeType&&t.hasAttribute(V)&&(t.removeAttribute(V),n=!0),s(n)&&L(t,e,u))return D(e,u,!0),t;t=h(t)}var f=t.elm,m=l.parentNode(f);if(p(e,u,f._leaveCb?null:m,l.nextSibling(f)),i(e.parent)){var g=e.parent,v=b(e);while(g){for(var y=0;y<c.destroy.length;++y)c.destroy[y](g);if(g.elm=e.elm,v){for(var w=0;w<c.create.length;++w)c.create[w](Yi,g);var _=g.data.hook.insert;if(_.merged)for(var E=1;E<_.fns.length;E++)_.fns[E]()}else Xi(g);g=g.parent}}i(m)?k([t],0,0):i(t.tag)&&C(t)}}return D(e,u,a),e.elm}i(t)&&C(t)}}var is={create:ss,update:ss,destroy:function(t){ss(t,Yi)}};function ss(t,e){(t.data.directives||e.data.directives)&&os(t,e)}function os(t,e){var n,r,i,s=t===Yi,o=e===Yi,a=cs(t.data.directives,t.context),c=cs(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,ls(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(ls(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)ls(u[n],"inserted",e,t)};s?Zt(e,"insert",h):h()}if(l.length&&Zt(e,"postpatch",(function(){for(var n=0;n<l.length;n++)ls(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||ls(a[n],"unbind",t,t,o)}var as=Object.create(null);function cs(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=as),i[us(r)]=r,e._setupState&&e._setupState.__sfc){var s=r.def||br(e,"_setupState","v-"+r.name);r.def="function"===typeof s?{bind:s,update:s}:s}r.def=r.def||br(e.$options,"directives",r.name,!0)}return i}function us(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function ls(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(DL){Ke(DL,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var hs=[Qi,is];function ds(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var o,a,c,u=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(o in(i(h.__ob__)||s(h._v_attr_proxy))&&(h=e.data.attrs=R({},h)),h)a=h[o],c=l[o],c!==a&&fs(u,o,a,e.data.pre);for(o in(Z||et)&&h.value!==l.value&&fs(u,"value",h.value),l)r(h[o])&&(vi(o)?u.removeAttributeNS(gi,yi(o)):di(o)||u.removeAttribute(o))}}function fs(t,e,n,r){r||t.tagName.indexOf("-")>-1?ps(t,e,n):mi(e)?wi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):di(e)?t.setAttribute(e,pi(e,n)):vi(e)?wi(n)?t.removeAttributeNS(gi,yi(e)):t.setAttributeNS(gi,e,n):ps(t,e,n)}function ps(t,e,n){if(wi(n))t.removeAttribute(e);else{if(Z&&!tt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var ms={create:ds,update:ds};function gs(t,e){var n=e.elm,s=e.data,o=t.data;if(!(r(s.staticClass)&&r(s.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=_i(e),c=n._transitionClasses;i(c)&&(a=Ti(a,Ii(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var vs,ys={create:gs,update:gs},ws="__r",_s="__c";function bs(t){if(i(t[ws])){var e=Z?"change":"input";t[e]=[].concat(t[ws],t[e]||[]),delete t[ws]}i(t[_s])&&(t.change=[].concat(t[_s],t.change||[]),delete t[_s])}function Es(t,e,n){var r=vs;return function i(){var s=e.apply(null,arguments);null!==s&&Cs(t,i,n,r)}}var Ts=Je&&!(it&&Number(it[1])<=53);function Is(t,e,n,r){if(Ts){var i=jn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}vs.addEventListener(t,e,ot?{capture:n,passive:r}:n)}function Cs(t,e,n,r){(r||vs).removeEventListener(t,e._wrapper||e,n)}function ks(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};vs=e.elm||t.elm,bs(n),Yt(n,i,Is,Cs,Es,e.context),vs=void 0}}var Ss,As={create:ks,update:ks,destroy:function(t){return ks(t,Yi)}};function Os(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,o,a=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(i(u.__ob__)||s(u._v_attr_proxy))&&(u=e.data.domProps=R({},u)),c)n in u||(a[n]="");for(n in u){if(o=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),o===c[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n&&"PROGRESS"!==a.tagName){a._value=o;var l=r(o)?"":String(o);Ns(a,l)&&(a.value=l)}else if("innerHTML"===n&&Oi(a.tagName)&&r(a.innerHTML)){Ss=Ss||document.createElement("div"),Ss.innerHTML="<svg>".concat(o,"</svg>");var h=Ss.firstChild;while(a.firstChild)a.removeChild(a.firstChild);while(h.firstChild)a.appendChild(h.firstChild)}else if(o!==c[n])try{a[n]=o}catch(DL){}}}}function Ns(t,e){return!t.composing&&("OPTION"===t.tagName||Ds(t,e)||Rs(t,e))}function Ds(t,e){var n=!0;try{n=document.activeElement!==t}catch(DL){}return n&&t.value!==e}function Rs(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return g(n)!==g(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var Ls={create:Os,update:Os},xs=E((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Ms(t){var e=Ps(t.style);return t.staticStyle?R(t.staticStyle,e):e}function Ps(t){return Array.isArray(t)?L(t):"string"===typeof t?xs(t):t}function Fs(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Ms(i.data))&&R(r,n)}(n=Ms(t.data))&&R(r,n);var s=t;while(s=s.parent)s.data&&(n=Ms(s.data))&&R(r,n);return r}var Us,js=/^--/,$s=/\s*!important$/,Vs=function(t,e,n){if(js.test(e))t.style.setProperty(e,n);else if($s.test(n))t.style.setProperty(S(e),n.replace($s,""),"important");else{var r=Hs(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},Bs=["Webkit","Moz","ms"],Hs=E((function(t){if(Us=Us||document.createElement("div").style,t=I(t),"filter"!==t&&t in Us)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Bs.length;n++){var r=Bs[n]+e;if(r in Us)return r}}));function qs(t,e){var n=e.data,s=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(s.staticStyle)&&r(s.style))){var o,a,c=e.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=Ps(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?R({},d):d;var f=Fs(e,!0);for(a in h)r(f[a])&&Vs(c,a,"");for(a in f)o=f[a],o!==h[a]&&Vs(c,a,null==o?"":o)}}var zs={create:qs,update:qs},Ks=/\s+/;function Gs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ks).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ws(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ks).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Qs(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&R(e,Xs(t.name||"v")),R(e,t),e}return"string"===typeof t?Xs(t):void 0}}var Xs=E((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),Js=J&&!tt,Ys="transition",Zs="animation",to="transition",eo="transitionend",no="animation",ro="animationend";Js&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(to="WebkitTransition",eo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(no="WebkitAnimation",ro="webkitAnimationEnd"));var io=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function so(t){io((function(){io(t)}))}function oo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Gs(t,e))}function ao(t,e){t._transitionClasses&&w(t._transitionClasses,e),Ws(t,e)}function co(t,e,n){var r=lo(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===Ys?eo:ro,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var uo=/\b(transform|all)(,|$)/;function lo(t,e){var n,r=window.getComputedStyle(t),i=(r[to+"Delay"]||"").split(", "),s=(r[to+"Duration"]||"").split(", "),o=ho(i,s),a=(r[no+"Delay"]||"").split(", "),c=(r[no+"Duration"]||"").split(", "),u=ho(a,c),l=0,h=0;e===Ys?o>0&&(n=Ys,l=o,h=s.length):e===Zs?u>0&&(n=Zs,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?Ys:Zs:null,h=n?n===Ys?s.length:c.length:0);var d=n===Ys&&uo.test(r[to+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function ho(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return fo(e)+fo(t[n])})))}function fo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function po(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Qs(t.data.transition);if(!r(s)&&!i(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,l=s.enterClass,h=s.enterToClass,d=s.enterActiveClass,f=s.appearClass,p=s.appearToClass,m=s.appearActiveClass,v=s.beforeEnter,y=s.enter,w=s.afterEnter,_=s.enterCancelled,b=s.beforeAppear,E=s.appear,T=s.afterAppear,I=s.appearCancelled,C=s.duration,k=En,S=En.$vnode;while(S&&S.parent)k=S.context,S=S.parent;var A=!k._isMounted||!t.isRootInsert;if(!A||E||""===E){var O=A&&f?f:l,N=A&&m?m:d,D=A&&p?p:h,R=A&&b||v,L=A&&c(E)?E:y,x=A&&T||w,M=A&&I||_,P=g(u(C)?C.enter:C);0;var F=!1!==o&&!tt,U=vo(L),$=n._enterCb=j((function(){F&&(ao(n,D),ao(n,N)),$.cancelled?(F&&ao(n,O),M&&M(n)):x&&x(n),n._enterCb=null}));t.data.show||Zt(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),L&&L(n,$)})),R&&R(n),F&&(oo(n,O),oo(n,N),so((function(){ao(n,O),$.cancelled||(oo(n,D),U||(go(P)?setTimeout($,P):co(n,a,$)))}))),t.data.show&&(e&&e(),L&&L(n,$)),F||U||$()}}}function mo(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Qs(t.data.transition);if(r(s)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var o=s.css,a=s.type,c=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,m=s.leaveCancelled,v=s.delayLeave,y=s.duration,w=!1!==o&&!tt,_=vo(f),b=g(u(y)?y.leave:y);0;var E=n._leaveCb=j((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),w&&(ao(n,l),ao(n,h)),E.cancelled?(w&&ao(n,c),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),w&&(oo(n,c),oo(n,h),so((function(){ao(n,c),E.cancelled||(oo(n,l),_||(go(b)?setTimeout(E,b):co(n,a,E)))}))),f&&f(n,E),w||_||E())}}function go(t){return"number"===typeof t&&!isNaN(t)}function vo(t){if(r(t))return!1;var e=t.fns;return i(e)?vo(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function yo(t,e){!0!==e.data.show&&po(e)}var wo=J?{create:yo,activate:yo,remove:function(t,e){!0!==t.data.show?mo(t,e):e()}}:{},_o=[ms,ys,As,Ls,zs,wo],bo=_o.concat(hs),Eo=rs({nodeOps:Wi,modules:bo});tt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&No(t,"input")}));var To={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Zt(n,"postpatch",(function(){To.componentUpdated(t,e,n)})):Io(t,e,n.context),t._vOptions=[].map.call(t.options,So)):("textarea"===n.tag||xi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Ao),t.addEventListener("compositionend",Oo),t.addEventListener("change",Oo),tt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Io(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,So);if(i.some((function(t,e){return!F(t,r[e])}))){var s=t.multiple?e.value.some((function(t){return ko(t,i)})):e.value!==e.oldValue&&ko(e.value,i);s&&No(t,"change")}}}};function Io(t,e,n){Co(t,e,n),(Z||et)&&setTimeout((function(){Co(t,e,n)}),0)}function Co(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=U(r,So(o))>-1,o.selected!==s&&(o.selected=s);else if(F(So(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function ko(t,e){return e.every((function(e){return!F(e,t)}))}function So(t){return"_value"in t?t._value:t.value}function Ao(t){t.target.composing=!0}function Oo(t){t.target.composing&&(t.target.composing=!1,No(t.target,"input"))}function No(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Do(t){return!t.componentInstance||t.data&&t.data.transition?t:Do(t.componentInstance._vnode)}var Ro={bind:function(t,e,n){var r=e.value;n=Do(n);var i=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,po(n,(function(){t.style.display=s}))):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Do(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?po(n,(function(){t.style.display=t.__vOriginalDisplay})):mo(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},Lo={model:To,show:Ro},xo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Mo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Mo(je(e.children)):t}function Po(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[I(r)]=i[r];return e}function Fo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Uo(t){while(t=t.parent)if(t.data.transition)return!0}function jo(t,e){return e.key===t.key&&e.tag===t.tag}var $o=function(t){return t.tag||Te(t)},Vo=function(t){return"show"===t.name},Bo={name:"transition",props:xo,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter($o),n.length)){0;var r=this.mode;0;var i=n[0];if(Uo(this.$vnode))return i;var s=Mo(i);if(!s)return i;if(this._leaving)return Fo(t,i);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=Po(this),u=this._vnode,l=Mo(u);if(s.data.directives&&s.data.directives.some(Vo)&&(s.data.show=!0),l&&l.data&&!jo(s,l)&&!Te(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=R({},c);if("out-in"===r)return this._leaving=!0,Zt(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Fo(t,i);if("in-out"===r){if(Te(s))return u;var d,f=function(){d()};Zt(c,"afterEnter",f),Zt(c,"enterCancelled",f),Zt(h,"delayLeave",(function(t){d=t}))}}return i}}},Ho=R({tag:String,moveClass:String},xo);delete Ho.mode;var qo={props:Ho,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Tn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=Po(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(zo),t.forEach(Ko),t.forEach(Go),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;oo(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(eo,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(eo,t),n._moveCb=null,ao(n,e))})}})))},methods:{hasMove:function(t,e){if(!Js)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ws(n,t)})),Gs(n,e),n.style.display="none",this.$el.appendChild(n);var r=lo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function zo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Ko(t){t.data.newPos=t.elm.getBoundingClientRect()}function Go(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),s.transitionDuration="0s"}}var Wo={Transition:Bo,TransitionGroup:qo};Wr.config.mustUseProp=hi,Wr.config.isReservedTag=Ni,Wr.config.isReservedAttr=ui,Wr.config.getTagNamespace=Di,Wr.config.isUnknownElement=Li,R(Wr.options.directives,Lo),R(Wr.options.components,Wo),Wr.prototype.__patch__=J?Eo:x,Wr.prototype.$mount=function(t,e){return t=t&&J?Mi(t):void 0,kn(this,t,e)},J&&setTimeout((function(){q.devtools&&ut&&ut.emit("init",Wr)}),0);var Qo=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"w-full text-rspnd"},[t._v(" "+t._s(t.tenant)+" ")])])},Xo=[];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jo=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},Yo=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},Zo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw new ta;const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ea=function(t){const e=Jo(t);return Zo.encodeByteArray(e,!0)},na=function(t){return ea(t).replace(/\./g,"")},ra=function(t){try{return Zo.decodeString(t,!0)}catch(DL){console.error("base64Decode failed: ",DL)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ia(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=()=>ia().__FIREBASE_DEFAULTS__,oa=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},aa=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(DL){return}const e=t&&ra(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return sa()||oa()||aa()}catch(DL){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${DL}`)}},ua=t=>{var e,n;return null===(n=null===(e=ca())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},la=t=>{const e=ua(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ha=()=>{var t;return null===(t=ca())||void 0===t?void 0:t.config},da=t=>{var e;return null===(e=ca())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[na(JSON.stringify(n)),na(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function ga(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ma())}function va(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function ya(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function wa(){const t=ma();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _a(){try{return"object"===typeof indexedDB}catch(DL){return!1}}function ba(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function Ea(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="FirebaseError";class Ia extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Ta,Object.setPrototypeOf(this,Ia.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ca.prototype.create)}}class Ca{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?ka(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new Ia(r,o,n);return a}}function ka(t,e){return t.replace(Sa,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const Sa=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(Na(n)&&Na(s)){if(!Oa(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Na(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Da(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ra(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e){const n=new Ma(t,e);return n.subscribe.bind(n)}class Ma{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=Pa(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=Fa),void 0===r.error&&(r.error=Fa),void 0===r.complete&&(r.complete=Fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(DL){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(DL){"undefined"!==typeof console&&console.error&&console.error(DL)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Pa(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function Fa(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ua(t){return t&&t._delegate?t._delegate:t}class ja{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new fa;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(DL){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(DL){if(r)return null;throw DL}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(Ha(t))try{this.getOrInitializeService({instanceIdentifier:$a})}catch(DL){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(DL){}}}}clearInstance(t=$a){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=$a){return this.instances.has(t)}getOptions(t=$a){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(Hw){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ba(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(Hw){}return n||null}normalizeInstanceIdentifier(t=$a){return this.component?this.component.multipleInstances?t:$a:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function Ba(t){return t===$a?void 0:t}function Ha(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Va(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const za=[];var Ka;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(Ka||(Ka={}));const Ga={debug:Ka.DEBUG,verbose:Ka.VERBOSE,info:Ka.INFO,warn:Ka.WARN,error:Ka.ERROR,silent:Ka.SILENT},Wa=Ka.INFO,Qa={[Ka.DEBUG]:"log",[Ka.VERBOSE]:"log",[Ka.INFO]:"info",[Ka.WARN]:"warn",[Ka.ERROR]:"error"},Xa=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=Qa[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class Ja{constructor(t){this.name=t,this._logLevel=Wa,this._logHandler=Xa,this._userLogHandler=null,za.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ka))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?Ga[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ka.DEBUG,...t),this._logHandler(this,Ka.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ka.VERBOSE,...t),this._logHandler(this,Ka.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ka.INFO,...t),this._logHandler(this,Ka.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ka.WARN,...t),this._logHandler(this,Ka.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ka.ERROR,...t),this._logHandler(this,Ka.ERROR,...t)}}const Ya=(t,e)=>e.some((e=>t instanceof e));let Za,tc;function ec(){return Za||(Za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nc(){return tc||(tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rc=new WeakMap,ic=new WeakMap,sc=new WeakMap,oc=new WeakMap,ac=new WeakMap;function cc(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(pc(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&rc.set(e,t)})).catch((()=>{})),ac.set(e,t),e}function uc(t){if(ic.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));ic.set(t,e)}let lc={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ic.get(t);if("objectStoreNames"===e)return t.objectStoreNames||sc.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pc(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function hc(t){lc=t(lc)}function dc(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?nc().includes(t)?function(...e){return t.apply(mc(this),e),pc(rc.get(this))}:function(...e){return pc(t.apply(mc(this),e))}:function(e,...n){const r=t.call(mc(this),e,...n);return sc.set(r,e.sort?e.sort():[e]),pc(r)}}function fc(t){return"function"===typeof t?dc(t):(t instanceof IDBTransaction&&uc(t),Ya(t,ec())?new Proxy(t,lc):t)}function pc(t){if(t instanceof IDBRequest)return cc(t);if(oc.has(t))return oc.get(t);const e=fc(t);return e!==t&&(oc.set(t,e),ac.set(e,t)),e}const mc=t=>ac.get(t);function gc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pc(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(pc(o.result),t.oldVersion,t.newVersion,pc(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const vc=["get","getKey","getAll","getAllKeys","count"],yc=["put","add","delete","clear"],wc=new Map;function _c(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(wc.get(e))return wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!vc.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return wc.set(e,s),s}hc((t=>({...t,get:(e,n,r)=>_c(e,n)||t.get(e,n,r),has:(e,n)=>!!_c(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(Ec(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function Ec(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const Tc="@firebase/app",Ic="0.9.7",Cc=new Ja("@firebase/app"),kc="@firebase/app-compat",Sc="@firebase/analytics-compat",Ac="@firebase/analytics",Oc="@firebase/app-check-compat",Nc="@firebase/app-check",Dc="@firebase/auth",Rc="@firebase/auth-compat",Lc="@firebase/database",xc="@firebase/database-compat",Mc="@firebase/functions",Pc="@firebase/functions-compat",Fc="@firebase/installations",Uc="@firebase/installations-compat",jc="@firebase/messaging",$c="@firebase/messaging-compat",Vc="@firebase/performance",Bc="@firebase/performance-compat",Hc="@firebase/remote-config",qc="@firebase/remote-config-compat",zc="@firebase/storage",Kc="@firebase/storage-compat",Gc="@firebase/firestore",Wc="@firebase/firestore-compat",Qc="firebase",Xc="9.19.1",Jc="[DEFAULT]",Yc={[Tc]:"fire-core",[kc]:"fire-core-compat",[Ac]:"fire-analytics",[Sc]:"fire-analytics-compat",[Nc]:"fire-app-check",[Oc]:"fire-app-check-compat",[Dc]:"fire-auth",[Rc]:"fire-auth-compat",[Lc]:"fire-rtdb",[xc]:"fire-rtdb-compat",[Mc]:"fire-fn",[Pc]:"fire-fn-compat",[Fc]:"fire-iid",[Uc]:"fire-iid-compat",[jc]:"fire-fcm",[$c]:"fire-fcm-compat",[Vc]:"fire-perf",[Bc]:"fire-perf-compat",[Hc]:"fire-rc",[qc]:"fire-rc-compat",[zc]:"fire-gcs",[Kc]:"fire-gcs-compat",[Gc]:"fire-fst",[Wc]:"fire-fst-compat","fire-js":"fire-js",[Qc]:"fire-js-all"},Zc=new Map,tu=new Map;function eu(t,e){try{t.container.addComponent(e)}catch(DL){Cc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,DL)}}function nu(t){const e=t.name;if(tu.has(e))return Cc.debug(`There were multiple attempts to register component ${e}.`),!1;tu.set(e,t);for(const n of Zc.values())eu(n,t);return!0}function ru(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const iu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},su=new Ca("app","Firebase",iu);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ou{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ja("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw su.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=Xc;function cu(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:Jc,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!==typeof i||!i)throw su.create("bad-app-name",{appName:String(i)});if(n||(n=ha()),!n)throw su.create("no-options");const s=Zc.get(i);if(s){if(Oa(n,s.options)&&Oa(r,s.config))return s;throw su.create("duplicate-app",{appName:i})}const o=new qa(i);for(const c of tu.values())o.addComponent(c);const a=new ou(n,r,o);return Zc.set(i,a),a}function uu(t=Jc){const e=Zc.get(t);if(!e&&t===Jc)return cu();if(!e)throw su.create("no-app",{appName:t});return e}function lu(t,e,n){var r;let i=null!==(r=Yc[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Cc.warn(t.join(" "))}nu(new ja(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hu="firebase-heartbeat-database",du=1,fu="firebase-heartbeat-store";let pu=null;function mu(){return pu||(pu=gc(hu,du,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fu)}}}).catch((t=>{throw su.create("idb-open",{originalErrorMessage:t.message})}))),pu}async function gu(t){try{const e=await mu();return e.transaction(fu).objectStore(fu).get(yu(t))}catch(DL){if(DL instanceof Ia)Cc.warn(DL.message);else{const e=su.create("idb-get",{originalErrorMessage:null===DL||void 0===DL?void 0:DL.message});Cc.warn(e.message)}}}async function vu(t,e){try{const n=await mu(),r=n.transaction(fu,"readwrite"),i=r.objectStore(fu);return await i.put(e,yu(t)),r.done}catch(DL){if(DL instanceof Ia)Cc.warn(DL.message);else{const e=su.create("idb-set",{originalErrorMessage:null===DL||void 0===DL?void 0:DL.message});Cc.warn(e.message)}}}function yu(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=1024,_u=2592e6;class bu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Iu(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Eu();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=_u})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Eu(),{heartbeatsToSend:e,unsentEntries:n}=Tu(this._heartbeatsCache.heartbeats),r=na(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Eu(){const t=new Date;return t.toISOString().substring(0,10)}function Tu(t,e=wu){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Cu(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Iu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!_a()&&ba().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await gu(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return vu(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return vu(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Cu(t){return na(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){nu(new ja("platform-logger",(t=>new bc(t)),"PRIVATE")),nu(new ja("heartbeat",(t=>new bu(t)),"PRIVATE")),lu(Tc,Ic,t),lu(Tc,Ic,"esm2017"),lu("fire-js","")}ku("");var Su,Au="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},Ou={},Nu=Nu||{},Du=Au||self;function Ru(){}function Lu(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function xu(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function Mu(t){return Object.prototype.hasOwnProperty.call(t,Pu)&&t[Pu]||(t[Pu]=++Fu)}var Pu="closure_uid_"+(1e9*Math.random()>>>0),Fu=0;function Uu(t,e,n){return t.call.apply(t.bind,arguments)}function ju(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function $u(t,e,n){return $u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Uu:ju,$u.apply(null,arguments)}function Vu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Bu(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function Hu(){this.s=this.s,this.o=this.o}var qu=0;Hu.prototype.s=!1,Hu.prototype.na=function(){this.s||(this.s=!0,this.M(),0==qu)||Mu(this)},Hu.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ku(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Gu(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(Lu(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function Wu(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Wu.prototype.h=function(){this.defaultPrevented=!0};var Qu=function(){if(!Du.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Du.addEventListener("test",Ru,e),Du.removeEventListener("test",Ru,e)}catch(n){}return t}();function Xu(t){return/^[\s\xa0]*$/.test(t)}var Ju=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Yu(t,e){return t<e?-1:t>e?1:0}function Zu(){var t=Du.navigator;return t&&(t=t.userAgent)?t:""}function tl(t){return-1!=Zu().indexOf(t)}function el(t){return el[" "](t),t}function nl(t){var e=ml;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}el[" "]=Ru;var rl,il=tl("Opera"),sl=tl("Trident")||tl("MSIE"),ol=tl("Edge"),al=ol||sl,cl=tl("Gecko")&&!(-1!=Zu().toLowerCase().indexOf("webkit")&&!tl("Edge"))&&!(tl("Trident")||tl("MSIE"))&&!tl("Edge"),ul=-1!=Zu().toLowerCase().indexOf("webkit")&&!tl("Edge");function ll(){var t=Du.document;return t?t.documentMode:void 0}t:{var hl="",dl=function(){var t=Zu();return cl?/rv:([^\);]+)(\)|;)/.exec(t):ol?/Edge\/([\d\.]+)/.exec(t):sl?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):ul?/WebKit\/(\S+)/.exec(t):il?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(dl&&(hl=dl?dl[1]:""),sl){var fl=ll();if(null!=fl&&fl>parseFloat(hl)){rl=String(fl);break t}}rl=hl}var pl,ml={};function gl(){return nl((function(){let t=0;const e=Ju(String(rl)).split("."),n=Ju("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=Yu(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Yu(0==i[2].length,0==s[2].length)||Yu(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(Du.document&&sl){var vl=ll();pl=vl||(parseInt(rl,10)||void 0)}else pl=void 0;var yl=pl;function wl(t,e){if(Wu.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(cl){t:{try{el(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:_l[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wl.X.h.call(this)}}Bu(wl,Wu);var _l={2:"touch",3:"pen",4:"mouse"};wl.prototype.h=function(){wl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bl="closure_listenable_"+(1e6*Math.random()|0),El=0;function Tl(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++El,this.ba=this.ea=!1}function Il(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Cl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function kl(t){const e={};for(const n in t)e[n]=t[n];return e}const Sl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Al(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<Sl.length;e++)n=Sl[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ol(t){this.src=t,this.g={},this.h=0}function Nl(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=zu(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Il(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Dl(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}Ol.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Dl(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Tl(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};var Rl="closure_lm_"+(1e6*Math.random()|0),Ll={};function xl(t,e,n,r,i){if(r&&r.once)return Fl(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)xl(t,e[s],n,r,i);return null}return n=ql(n),t&&t[bl]?t.N(e,n,xu(r)?!!r.capture:!!r,i):Ml(t,e,n,!1,r,i)}function Ml(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=xu(i)?!!i.capture:!!i,a=Bl(t);if(a||(t[Rl]=a=new Ol(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Pl(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Qu||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent($l(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Pl(){function t(n){return e.call(t.src,t.listener,n)}const e=Vl;return t}function Fl(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Fl(t,e[s],n,r,i);return null}return n=ql(n),t&&t[bl]?t.O(e,n,xu(r)?!!r.capture:!!r,i):Ml(t,e,n,!0,r,i)}function Ul(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ul(t,e[s],n,r,i);else r=xu(r)?!!r.capture:!!r,n=ql(n),t&&t[bl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Dl(s,n,r,i),-1<n&&(Il(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Bl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Dl(e,n,r,i)),(n=-1<t?e[t]:null)&&jl(n))}function jl(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[bl])Nl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($l(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bl(e))?(Nl(n,t),0==n.h&&(n.src=null,e[Rl]=null)):Il(t)}}}function $l(t){return t in Ll?Ll[t]:Ll[t]="on"+t}function Vl(t,e){if(t.ba)t=!0;else{e=new wl(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&jl(t),t=n.call(r,e)}return t}function Bl(t){return t=t[Rl],t instanceof Ol?t:null}var Hl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ql(t){return"function"===typeof t?t:(t[Hl]||(t[Hl]=function(e){return t.handleEvent(e)}),t[Hl])}function zl(){Hu.call(this),this.i=new Ol(this),this.P=this,this.I=null}function Kl(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new Wu(e,t);else if(e instanceof Wu)e.target=e.target||t;else{var i=e;e=new Wu(r,t),Al(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Gl(o,r,!0,e)&&i}if(o=e.g=t,i=Gl(o,r,!0,e)&&i,i=Gl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Gl(o,r,!1,e)&&i}function Gl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Nl(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Bu(zl,Hu),zl.prototype[bl]=!0,zl.prototype.removeEventListener=function(t,e,n,r){Ul(this,t,e,n,r)},zl.prototype.M=function(){if(zl.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Il(n[r]);delete e.g[t],e.h--}}this.I=null},zl.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},zl.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Wl=Du.JSON.stringify;function Ql(){var t=ih;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Xl{constructor(){this.h=this.g=null}add(t,e){const n=Yl.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Jl,Yl=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Zl),(t=>t.reset()));class Zl{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function th(t){Du.setTimeout((()=>{throw t}),0)}function eh(t,e){Jl||nh(),rh||(Jl(),rh=!0),ih.add(t,e)}function nh(){var t=Du.Promise.resolve(void 0);Jl=function(){t.then(sh)}}var rh=!1,ih=new Xl;function sh(){for(var t;t=Ql();){try{t.h.call(t.g)}catch(n){th(n)}var e=Yl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}rh=!1}function oh(t,e){zl.call(this),this.h=t||1,this.g=e||Du,this.j=$u(this.lb,this),this.l=Date.now()}function ah(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function ch(t,e,n){if("function"===typeof t)n&&(t=$u(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=$u(t.handleEvent,t)}return 2147483647<Number(e)?-1:Du.setTimeout(t,e||0)}function uh(t){t.g=ch((()=>{t.g=null,t.i&&(t.i=!1,uh(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Bu(oh,zl),Su=oh.prototype,Su.ca=!1,Su.R=null,Su.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Kl(this,"tick"),this.ca&&(ah(this),this.start()))}},Su.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Su.M=function(){oh.X.M.call(this),ah(this),delete this.g};class lh extends Hu{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:uh(this)}M(){super.M(),this.g&&(Du.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hh(t){Hu.call(this),this.h=t,this.g={}}Bu(hh,Hu);var dh=[];function fh(t,e,n,r){Array.isArray(n)||(n&&(dh[0]=n.toString()),n=dh);for(var i=0;i<n.length;i++){var s=xl(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ph(t){Cl(t.g,(function(t,e){this.g.hasOwnProperty(e)&&jl(t)}),t),t.g={}}function mh(){this.g=!0}function gh(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function vh(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function yh(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+_h(t,n)+(r?" "+r:"")}))}function wh(t,e){t.info((function(){return"TIMEOUT: "+e}))}function _h(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Wl(n)}catch(a){return e}}hh.prototype.M=function(){hh.X.M.call(this),ph(this)},hh.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},mh.prototype.Aa=function(){this.g=!1},mh.prototype.info=function(){};var bh={},Eh=null;function Th(){return Eh=Eh||new zl}function Ih(t){Wu.call(this,bh.Pa,t)}function Ch(t){const e=Th();Kl(e,new Ih(e))}function kh(t,e){Wu.call(this,bh.STAT_EVENT,t),this.stat=e}function Sh(t){const e=Th();Kl(e,new kh(e,t))}function Ah(t,e){Wu.call(this,bh.Qa,t),this.size=e}function Oh(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Du.setTimeout((function(){t()}),e)}bh.Pa="serverreachability",Bu(Ih,Wu),bh.STAT_EVENT="statevent",Bu(kh,Wu),bh.Qa="timingevent",Bu(Ah,Wu);var Nh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Dh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Rh(){}function Lh(t){return t.h||(t.h=t.i())}function xh(){}Rh.prototype.h=null;var Mh,Ph={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Fh(){Wu.call(this,"d")}function Uh(){Wu.call(this,"c")}function jh(){}function $h(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new hh(this),this.O=Bh,t=al?125:void 0,this.T=new oh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}Bu(Fh,Wu),Bu(Uh,Wu),Bu(jh,Rh),jh.prototype.g=function(){return new XMLHttpRequest},jh.prototype.i=function(){return{}},Mh=new jh;var Bh=45e3,Hh={},qh={};function zh(t,e,n){t.K=1,t.v=fd(cd(e)),t.s=n,t.P=!0,Kh(t,null)}function Kh(t,e){t.F=Date.now(),Xh(t),t.A=cd(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),kd(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Vh,t.g=Df(t.l,n?e:null,!t.s),0<t.N&&(t.L=new lh($u(t.La,t,t.g),t.N)),fh(t.S,t.g,"readystatechange",t.ib),e=t.H?kl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ch(),gh(t.j,t.u,t.A,t.m,t.U,t.s)}function Gh(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Wh(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Qh(t,n),r==qh){4==e&&(t.o=4,Sh(14),i=!1),yh(t.j,t.m,null,"[Incomplete Response]");break}if(r==Hh){t.o=4,Sh(15),yh(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}yh(t.j,t.m,r,null),ed(t,r)}Gh(t)&&r!=qh&&r!=Hh&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Sh(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tf(e),e.K=!0,Sh(11))):(yh(t.j,t.m,n,"[Invalid Chunked Response]"),td(t),Zh(t))}function Qh(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?qh:(n=Number(e.substring(n,r)),isNaN(n)?Hh:(r+=1,r+n>e.length?qh:(e=e.substr(r,n),t.C=r+n,e)))}function Xh(t){t.V=Date.now()+t.O,Jh(t,t.O)}function Jh(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Oh($u(t.gb,t),e)}function Yh(t){t.B&&(Du.clearTimeout(t.B),t.B=null)}function Zh(t){0==t.l.G||t.I||kf(t.l,t)}function td(t){Yh(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ah(t.T),ph(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ed(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||xd(n.h,t)))if(!t.J&&xd(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Cf(n),pf(n)}Ef(n),Sh(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Oh($u(n.cb,n),6e3));if(1>=Ld(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else Af(n,11)}else if((t.J||n.g==t)&&Cf(n),!Xu(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Md(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,dd(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Nf(r,r.H?r.ka:null,r.V),o.J){Pd(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Yh(a),Xh(a)),r.g=o}else bf(r);0<n.i.length&&gf(n)}else"stop"!=u[0]&&"close"!=u[0]||Af(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Af(n,7):ff(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Ch(4)}catch(u){}}function nd(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(Lu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function rd(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(Lu(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function id(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Lu(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=rd(t),r=nd(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}Su=$h.prototype,Su.setTimeout=function(t){this.O=t},Su.ib=function(t){t=t.target;const e=this.L;e&&3==af(t)?e.l():this.La(t)},Su.La=function(t){try{if(t==this.g)t:{const l=af(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(3!=l||al||this.g&&(this.h.h||this.g.fa()||cf(this.g)))){this.I||4!=l||7==e||Ch(8==e||0>=h?3:2),Yh(this);var n=this.g.aa();this.Y=n;e:if(Gh(this)){var r=cf(this.g);t="";var i=r.length,s=4==af(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){td(this),Zh(this);var o="";break e}this.h.i=new Du.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,vh(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xu(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Sh(12),td(this),Zh(this);break t}yh(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ed(this,n)}this.P?(Wh(this,l,o),al&&this.i&&3==l&&(fh(this.S,this.T,"tick",this.hb),this.T.start())):(yh(this.j,this.m,o,null),ed(this,o)),4==l&&td(this),this.i&&!this.I&&(4==l?kf(this.l,this):(this.i=!1,Xh(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Sh(12)):(this.o=0,Sh(13)),td(this),Zh(this)}}}catch(l){}},Su.hb=function(){if(this.g){var t=af(this.g),e=this.g.fa();this.C<e.length&&(Yh(this),Wh(this,t,e),this.i&&4!=t&&Xh(this))}},Su.cancel=function(){this.I=!0,td(this)},Su.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(wh(this.j,this.A),2!=this.K&&(Ch(),Sh(17)),td(this),this.o=2,Zh(this)):Jh(this,this.V-t)};var sd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function od(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ad(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ad){this.h=void 0!==e?e:t.h,ud(this,t.j),this.s=t.s,this.g=t.g,ld(this,t.m),this.l=t.l,e=t.i;var n=new Ed;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),hd(this,n),this.o=t.o}else t&&(n=String(t).match(sd))?(this.h=!!e,ud(this,n[1]||"",!0),this.s=pd(n[2]||""),this.g=pd(n[3]||"",!0),ld(this,n[4]),this.l=pd(n[5]||"",!0),hd(this,n[6]||"",!0),this.o=pd(n[7]||"")):(this.h=!!e,this.i=new Ed(null,this.h))}function cd(t){return new ad(t)}function ud(t,e,n){t.j=n?pd(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ld(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hd(t,e,n){e instanceof Ed?(t.i=e,Ad(t.i,t.h)):(n||(e=md(e,_d)),t.i=new Ed(e,t.h))}function dd(t,e,n){t.i.set(e,n)}function fd(t){return dd(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pd(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function md(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,gd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gd(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ad.prototype.toString=function(){var t=[],e=this.j;e&&t.push(md(e,vd,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(md(e,vd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(md(n,"/"==n.charAt(0)?wd:yd,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",md(n,bd)),t.join("")};var vd=/[#\/\?@]/g,yd=/[#\?:]/g,wd=/[#\?]/g,_d=/[#\?@]/g,bd=/#/g;function Ed(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Td(t){t.g||(t.g=new Map,t.h=0,t.i&&od(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Id(t,e){Td(t),e=Sd(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Cd(t,e){return Td(t),e=Sd(t,e),t.g.has(e)}function kd(t,e,n){Id(t,e),0<n.length&&(t.i=null,t.g.set(Sd(t,e),Ku(n)),t.h+=n.length)}function Sd(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ad(t,e){e&&!t.j&&(Td(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Id(this,e),kd(this,n,t))}),t)),t.j=e}Su=Ed.prototype,Su.add=function(t,e){Td(this),this.i=null,t=Sd(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Su.forEach=function(t,e){Td(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},Su.oa=function(){Td(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},Su.W=function(t){Td(this);let e=[];if("string"===typeof t)Cd(this,t)&&(e=e.concat(this.g.get(Sd(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Su.set=function(t,e){return Td(this),this.i=null,t=Sd(this,t),Cd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Su.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},Su.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var Od=class{constructor(t,e){this.h=t,this.g=e}};function Nd(t){this.l=t||Dd,Du.PerformanceNavigationTiming?(t=Du.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Du.g&&Du.g.Ga&&Du.g.Ga()&&Du.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Dd=10;function Rd(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ld(t){return t.h?1:t.g?t.g.size:0}function xd(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Md(t,e){t.g?t.g.add(e):t.h=e}function Pd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Fd(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ku(t.i)}function Ud(){}function jd(){this.g=new Ud}function $d(t,e,n){const r=n||"";try{id(t,(function(t,n){let i=t;xu(t)&&(i=Wl(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(DL){throw e.push(r+"type="+encodeURIComponent("_badmap")),DL}}function Vd(t,e){const n=new mh;if(Du.Image){const r=new Image;r.onload=Vu(Bd,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Vu(Bd,n,r,"TestLoadImage: error",!1,e),r.onabort=Vu(Bd,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Vu(Bd,n,r,"TestLoadImage: timeout",!1,e),Du.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Bd(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Hd(t){this.l=t.ac||null,this.j=t.jb||!1}function qd(t,e){zl.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Nd.prototype.cancel=function(){if(this.i=Fd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ud.prototype.stringify=function(t){return Du.JSON.stringify(t,void 0)},Ud.prototype.parse=function(t){return Du.JSON.parse(t,void 0)},Bu(Hd,Rh),Hd.prototype.g=function(){return new qd(this.l,this.j)},Hd.prototype.i=function(t){return function(){return t}}({}),Bu(qd,zl);var zd=0;function Kd(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Gd(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wd(t)}function Wd(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Su=qd.prototype,Su.open=function(t,e){if(this.readyState!=zd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wd(this)},Su.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Du).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Su.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Gd(this)),this.readyState=zd},Su.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wd(this)),this.g&&(this.readyState=3,Wd(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof Du.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kd(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Su.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gd(this):Wd(this),3==this.readyState&&Kd(this)}},Su.Va=function(t){this.g&&(this.response=this.responseText=t,Gd(this))},Su.Ua=function(t){this.g&&(this.response=t,Gd(this))},Su.ga=function(){this.g&&Gd(this)},Su.setRequestHeader=function(t,e){this.v.append(t,e)},Su.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Su.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(qd.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Qd=Du.JSON.parse;function Xd(t){zl.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jd,this.K=this.L=!1}Bu(Xd,zl);var Jd="",Yd=/^https?$/i,Zd=["POST","PUT"];function tf(t){return sl&&gl()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function ef(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nf(t),sf(t)}function nf(t){t.D||(t.D=!0,Kl(t,"complete"),Kl(t,"error"))}function rf(t){if(t.h&&"undefined"!=typeof Nu&&(!t.C[1]||4!=af(t)||2!=t.aa()))if(t.v&&4==af(t))ch(t.Ha,0,t);else if(Kl(t,"readystatechange"),4==af(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(sd)[1]||null;if(!i&&Du.self&&Du.self.location){var s=Du.self.location.protocol;i=s.substr(0,s.length-1)}r=!Yd.test(i?i.toLowerCase():"")}n=r}if(n)Kl(t,"complete"),Kl(t,"success");else{t.m=6;try{var o=2<af(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",nf(t)}}finally{sf(t)}}}function sf(t,e){if(t.g){of(t);const n=t.g,r=t.C[0]?Ru:null;t.g=null,t.C=null,e||Kl(t,"ready");try{n.onreadystatechange=r}catch(DL){}}}function of(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Du.clearTimeout(t.A),t.A=null)}function af(t){return t.g?t.g.readyState:0}function cf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Jd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Wf){return null}}function uf(t){let e="";return Cl(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function lf(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=uf(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):dd(t,e,n))}function hf(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function df(t){this.Ca=0,this.i=[],this.j=new mh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hf("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hf("baseRetryDelayMs",5e3,t),this.bb=hf("retryDelaySeedMs",1e4,t),this.$a=hf("forwardChannelMaxRetries",2,t),this.ta=hf("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Nd(t&&t.concurrentRequestLimit),this.Fa=new jd,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function ff(t){if(mf(t),3==t.G){var e=t.U++,n=cd(t.F);dd(n,"SID",t.I),dd(n,"RID",e),dd(n,"TYPE","terminate"),wf(t,n),e=new $h(t,t.j,e,void 0),e.K=2,e.v=fd(cd(n)),n=!1,Du.navigator&&Du.navigator.sendBeacon&&(n=Du.navigator.sendBeacon(e.v.toString(),"")),!n&&Du.Image&&((new Image).src=e.v,n=!0),n||(e.g=Df(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xh(e)}Of(t)}function pf(t){t.g&&(Tf(t),t.g.cancel(),t.g=null)}function mf(t){pf(t),t.u&&(Du.clearTimeout(t.u),t.u=null),Cf(t),t.h.cancel(),t.m&&("number"===typeof t.m&&Du.clearTimeout(t.m),t.m=null)}function gf(t){Rd(t.h)||t.m||(t.m=!0,eh(t.Ja,t),t.C=0)}function vf(t,e){return!(Ld(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=Oh($u(t.Ja,t,e),Sf(t,t.C)),t.C++,!0))}function yf(t,e){var n;n=e?e.m:t.U++;const r=cd(t.F);dd(r,"SID",t.I),dd(r,"RID",n),dd(r,"AID",t.T),wf(t,r),t.o&&t.s&&lf(r,t.o,t.s),n=new $h(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=_f(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Md(t.h,n),zh(n,r,e)}function wf(t,e){t.ia&&Cl(t.ia,(function(t,n){dd(e,n,t)})),t.l&&id({},(function(t,n){dd(e,n,t)}))}function _f(t,e,n){n=Math.min(t.i.length,n);var r=t.l?$u(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{$d(a,t,"req"+n+"_")}catch(ip){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function bf(t){t.g||t.u||(t.Z=1,eh(t.Ia,t),t.A=0)}function Ef(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Oh($u(t.Ia,t),Sf(t,t.A)),t.A++,!0)}function Tf(t){null!=t.B&&(Du.clearTimeout(t.B),t.B=null)}function If(t){t.g=new $h(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=cd(t.sa);dd(e,"RID","rpc"),dd(e,"SID",t.I),dd(e,"CI",t.L?"0":"1"),dd(e,"AID",t.T),dd(e,"TYPE","xmlhttp"),wf(t,e),t.o&&t.s&&lf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=fd(cd(e)),n.s=null,n.P=!0,Kh(n,t)}function Cf(t){null!=t.v&&(Du.clearTimeout(t.v),t.v=null)}function kf(t,e){var n=null;if(t.g==e){Cf(t),Tf(t),t.g=null;var r=2}else{if(!xd(t.h,e))return;n=e.D,Pd(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Th(),Kl(r,new Ah(r,n)),gf(t)}else bf(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==r&&vf(t,e)||2==r&&Ef(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Af(t,5);break;case 4:Af(t,10);break;case 3:Af(t,6);break;default:Af(t,2)}}function Sf(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Af(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=$u(t.kb,t);n||(n=new ad("//www.google.com/images/cleardot.gif"),Du.location&&"http"==Du.location.protocol||ud(n,"https"),fd(n)),Vd(n.toString(),r)}else Sh(2);t.G=0,t.l&&t.l.va(e),Of(t),mf(t)}function Of(t){if(t.G=0,t.la=[],t.l){const e=Fd(t.h);0==e.length&&0==t.i.length||(Gu(t.la,e),Gu(t.la,t.i),t.h.i.length=0,Ku(t.i),t.i.length=0),t.l.ua()}}function Nf(t,e,n){var r=n instanceof ad?cd(n):new ad(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),ld(r,r.m);else{var i=Du.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ad(null,void 0);r&&ud(s,r),e&&(s.g=e),i&&ld(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&dd(r,n,e),dd(r,"VER",t.ma),wf(t,r),r}function Df(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Xd(new Hd({jb:!0})):new Xd(t.ra),e.Ka(t.H),e}function Rf(){}function Lf(){if(sl&&!(10<=Number(yl)))throw Error("Environmental error: no available transport.")}function xf(t,e){zl.call(this),this.g=new df(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Xu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xu(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ff(this)}function Mf(t){Fh.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Pf(){Uh.call(this),this.status=1}function Ff(t){this.g=t}Su=Xd.prototype,Su.Ka=function(t){this.L=t},Su.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Mh.g(),this.C=this.u?Lh(this.u):Lh(Mh),this.g.onreadystatechange=$u(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void ef(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Du.FormData&&t instanceof Du.FormData,!(0<=zu(Zd,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{of(this),0<this.B&&((this.K=tf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$u(this.qa,this)):this.A=ch(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ef(this,s)}},Su.qa=function(){"undefined"!=typeof Nu&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Kl(this,"timeout"),this.abort(8))},Su.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Kl(this,"complete"),Kl(this,"abort"),sf(this))},Su.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sf(this,!0)),Xd.X.M.call(this)},Su.Ha=function(){this.s||(this.F||this.v||this.l?rf(this):this.fb())},Su.fb=function(){rf(this)},Su.aa=function(){try{return 2<af(this)?this.g.status:-1}catch(t){return-1}},Su.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Su.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Qd(e)}},Su.Ea=function(){return this.m},Su.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},Su=df.prototype,Su.ma=8,Su.G=1,Su.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new $h(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=kl(s),Al(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=_f(this,i,e),n=cd(this.F),dd(n,"RID",t),dd(n,"CVER",22),this.D&&dd(n,"X-HTTP-Session-Id",this.D),wf(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(uf(s)))+"&"+e:this.o&&lf(n,this.o,s)),Md(this.h,i),this.Ya&&dd(n,"TYPE","init"),this.O?(dd(n,"$req",e),dd(n,"SID","null"),i.Z=!0,zh(i,n,null)):zh(i,n,e),this.G=2}}else 3==this.G&&(t?yf(this,t):0==this.i.length||Rd(this.h)||yf(this))},Su.Ia=function(){if(this.u=null,If(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Oh($u(this.eb,this),t)}},Su.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Sh(10),pf(this),If(this))},Su.cb=function(){null!=this.v&&(this.v=null,pf(this),Ef(this),Sh(19))},Su.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Sh(2)):(this.j.info("Failed to ping google.com"),Sh(1))},Su=Rf.prototype,Su.xa=function(){},Su.wa=function(){},Su.va=function(){},Su.ua=function(){},Su.Ra=function(){},Lf.prototype.g=function(t,e){return new xf(t,e)},Bu(xf,zl),xf.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Sh(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Nf(t,null,t.V),gf(t)},xf.prototype.close=function(){ff(this.g)},xf.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wl(t),t=n);e.i.push(new Od(e.ab++,t)),3==e.G&&gf(e)},xf.prototype.M=function(){this.g.l=null,delete this.j,ff(this.g),delete this.g,xf.X.M.call(this)},Bu(Mf,Fh),Bu(Pf,Uh),Bu(Ff,Rf),Ff.prototype.xa=function(){Kl(this.g,"a")},Ff.prototype.wa=function(t){Kl(this.g,new Mf(t))},Ff.prototype.va=function(t){Kl(this.g,new Pf)},Ff.prototype.ua=function(){Kl(this.g,"b")},Lf.prototype.createWebChannel=Lf.prototype.g,xf.prototype.send=xf.prototype.u,xf.prototype.open=xf.prototype.m,xf.prototype.close=xf.prototype.close,Nh.NO_ERROR=0,Nh.TIMEOUT=8,Nh.HTTP_ERROR=6,Dh.COMPLETE="complete",xh.EventType=Ph,Ph.OPEN="a",Ph.CLOSE="b",Ph.ERROR="c",Ph.MESSAGE="d",zl.prototype.listen=zl.prototype.N,Xd.prototype.listenOnce=Xd.prototype.O,Xd.prototype.getLastError=Xd.prototype.Oa,Xd.prototype.getLastErrorCode=Xd.prototype.Ea,Xd.prototype.getStatus=Xd.prototype.aa,Xd.prototype.getResponseJson=Xd.prototype.Sa,Xd.prototype.getResponseText=Xd.prototype.fa,Xd.prototype.send=Xd.prototype.da,Xd.prototype.setWithCredentials=Xd.prototype.Ka;var Uf=Ou.createWebChannelTransport=function(){return new Lf},jf=Ou.getStatEventTarget=function(){return Th()},$f=Ou.ErrorCode=Nh,Vf=Ou.EventType=Dh,Bf=Ou.Event=bh,Hf=Ou.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},qf=Ou.FetchXmlHttpFactory=Hd,zf=Ou.WebChannel=xh,Kf=Ou.XhrIo=Xd;const Gf="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Wf.UNAUTHENTICATED=new Wf(null),Wf.GOOGLE_CREDENTIALS=new Wf("google-credentials-uid"),Wf.FIRST_PARTY=new Wf("first-party-uid"),Wf.MOCK_USER=new Wf("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qf="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new Ja("@firebase/firestore");function Jf(){return Xf.logLevel}function Yf(t,...e){if(Xf.logLevel<=Ka.DEBUG){const n=e.map(ep);Xf.debug(`Firestore (${Qf}): ${t}`,...n)}}function Zf(t,...e){if(Xf.logLevel<=Ka.ERROR){const n=e.map(ep);Xf.error(`Firestore (${Qf}): ${t}`,...n)}}function tp(t,...e){if(Xf.logLevel<=Ka.WARN){const n=e.map(ep);Xf.warn(`Firestore (${Qf}): ${t}`,...n)}}function ep(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t="Unexpected state"){const e=`FIRESTORE (${Qf}) INTERNAL ASSERTION FAILED: `+t;throw Zf(e),new Error(e)}function rp(t,e){t||np()}function ip(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class op extends Ia{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class up{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Wf.UNAUTHENTICATED)))}shutdown(){}}class lp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class hp{constructor(t){this.t=t,this.currentUser=Wf.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ap;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ap,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Yf("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Yf("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ap)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Yf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(rp("string"==typeof e.accessToken),new cp(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rp(null===t||"string"==typeof t),new Wf(t)}}class dp{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Wf.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class fp{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new dp(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Wf.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mp{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Yf("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Yf("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Yf("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):Yf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(rp("string"==typeof t.token),this.T=t.token,new pp(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gp(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=gp(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function yp(t,e){return t<e?-1:t>e?1:0}function wp(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _p{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new op(sp.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new op(sp.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new op(sp.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new op(sp.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return _p.fromMillis(Date.now())}static fromDate(t){return _p.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new _p(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?yp(this.nanoseconds,t.nanoseconds):yp(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t){this.timestamp=t}static fromTimestamp(t){return new bp(t)}static min(){return new bp(new _p(0,0))}static max(){return new bp(new _p(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,e,n){void 0===e?e=0:e>t.length&&np(),void 0===n?n=t.length-e:n>t.length-e&&np(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ep.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ep?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Tp extends Ep{construct(t,e,n){return new Tp(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new op(sp.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Tp(e)}static emptyPath(){return new Tp([])}}const Ip=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Cp extends Ep{construct(t,e,n){return new Cp(t,e,n)}static isValidIdentifier(t){return Ip.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Cp.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Cp(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new op(sp.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new op(sp.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new op(sp.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new op(sp.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Cp(e)}static emptyPath(){return new Cp([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(t){this.path=t}static fromPath(t){return new kp(Tp.fromString(t))}static fromName(t){return new kp(Tp.fromString(t).popFirst(5))}static empty(){return new kp(Tp.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Tp.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Tp.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new kp(new Tp(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Sp.UNKNOWN_ID=-1;function Ap(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=bp.fromTimestamp(1e9===r?new _p(n+1,0):new _p(n,r));return new Np(i,kp.empty(),e)}function Op(t){return new Np(t.readTime,t.key,-1)}class Np{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Np(bp.min(),kp.empty(),-1)}static max(){return new Np(bp.max(),kp.empty(),-1)}}function Dp(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=kp.comparator(t.documentKey,e.documentKey),0!==n?n:yp(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(t){if(t.code!==sp.FAILED_PRECONDITION||t.message!==Rp)throw t;Yf("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&np(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Mp(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Mp?e:Mp.resolve(e)}catch(t){return Mp.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Mp.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Mp.reject(e)}static resolve(t){return new Mp(((e,n)=>{e(t)}))}static reject(t){return new Mp(((e,n)=>{n(t)}))}static waitFor(t){return new Mp(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Mp.resolve(!1);for(const n of t)e=e.next((t=>t?Mp.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Mp(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Mp(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fp{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Up(t){return null==t}function jp(t){return 0===t&&1/t==-1/0}Fp.ct=-1;const $p=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Vp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Bp=Vp;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qp(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t,e){this.comparator=t,this.root=e||Wp.EMPTY}insert(t,e){return new Kp(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Wp.BLACK,null,null))}remove(t){return new Kp(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Wp.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gp(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gp(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gp(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gp(this.root,t,this.comparator,!0)}}class Gp{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Wp{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Wp.RED,this.left=null!=r?r:Wp.EMPTY,this.right=null!=i?i:Wp.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Wp(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Wp.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Wp.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Wp.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Wp.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw np();if(this.right.isRed())throw np();const t=this.left.check();if(t!==this.right.check())throw np();return t+(this.isRed()?0:1)}}Wp.EMPTY=null,Wp.RED=!0,Wp.BLACK=!1,Wp.EMPTY=new class{constructor(){this.size=0}get key(){throw np()}get value(){throw np()}get color(){throw np()}get left(){throw np()}get right(){throw np()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Wp(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qp{constructor(t){this.comparator=t,this.data=new Kp(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xp(this.data.getIterator())}getIteratorFrom(t){return new Xp(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Qp))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Qp(this.comparator);return e.data=t,e}}class Xp{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jp{constructor(t){this.fields=t,t.sort(Cp.comparator)}static empty(){return new Jp([])}unionWith(t){let e=new Qp(Cp.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Jp(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return wp(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zp{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Yp("Invalid base64 string: "+t):t}}(t);return new Zp(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Zp(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return yp(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Zp.EMPTY_BYTE_STRING=new Zp("");const tm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function em(t){if(rp(!!t),"string"==typeof t){let e=0;const n=tm.exec(t);if(rp(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nm(t.seconds),nanos:nm(t.nanos)}}function nm(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function rm(t){return"string"==typeof t?Zp.fromBase64String(t):Zp.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function sm(t){const e=t.mapValue.fields.__previous_value__;return im(e)?sm(e):e}function om(t){const e=em(t.mapValue.fields.__local_write_time__.timestampValue);return new _p(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class cm{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new cm("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof cm&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lm(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?im(t)?4:Tm(t)?9007199254740991:10:np()}function hm(t,e){if(t===e)return!0;const n=lm(t);if(n!==lm(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return om(t).isEqual(om(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=em(t.timestampValue),r=em(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return rm(t.bytesValue).isEqual(rm(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return nm(t.geoPointValue.latitude)===nm(e.geoPointValue.latitude)&&nm(t.geoPointValue.longitude)===nm(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return nm(t.integerValue)===nm(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=nm(t.doubleValue),r=nm(e.doubleValue);return n===r?jp(n)===jp(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return wp(t.arrayValue.values||[],e.arrayValue.values||[],hm);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Hp(n)!==Hp(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!hm(n[i],r[i])))return!1;return!0}(t,e);default:return np()}}function dm(t,e){return void 0!==(t.values||[]).find((t=>hm(t,e)))}function fm(t,e){if(t===e)return 0;const n=lm(t),r=lm(e);if(n!==r)return yp(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return yp(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=nm(t.integerValue||t.doubleValue),r=nm(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return pm(t.timestampValue,e.timestampValue);case 4:return pm(om(t),om(e));case 5:return yp(t.stringValue,e.stringValue);case 6:return function(t,e){const n=rm(t),r=rm(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=yp(n[i],r[i]);if(0!==t)return t}return yp(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=yp(nm(t.latitude),nm(e.latitude));return 0!==n?n:yp(nm(t.longitude),nm(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=fm(n[i],r[i]);if(t)return t}return yp(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===um.mapValue&&e===um.mapValue)return 0;if(t===um.mapValue)return 1;if(e===um.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=yp(r[o],s[o]);if(0!==t)return t;const e=fm(n[r[o]],i[s[o]]);if(0!==e)return e}return yp(r.length,s.length)}(t.mapValue,e.mapValue);default:throw np()}}function pm(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return yp(t,e);const n=em(t),r=em(e),i=yp(n.seconds,r.seconds);return 0!==i?i:yp(n.nanos,r.nanos)}function mm(t){return gm(t)}function gm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=em(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?rm(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,kp.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=gm(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${gm(t.fields[i])}`;return n+"}"}(t.mapValue):np();var e,n}function vm(t){return!!t&&"integerValue"in t}function ym(t){return!!t&&"arrayValue"in t}function wm(t){return!!t&&"nullValue"in t}function _m(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bm(t){return!!t&&"mapValue"in t}function Em(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qp(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Em(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Em(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Tm(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Im{constructor(t){this.value=t}static empty(){return new Im({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!bm(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Em(e)}setAll(t){let e=Cp.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Em(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());bm(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return hm(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];bm(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){qp(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Im(Em(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cm{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Cm(t,0,bp.min(),bp.min(),bp.min(),Im.empty(),0)}static newFoundDocument(t,e,n,r){return new Cm(t,1,e,bp.min(),n,r,0)}static newNoDocument(t,e){return new Cm(t,2,e,bp.min(),bp.min(),Im.empty(),0)}static newUnknownDocument(t,e){return new Cm(t,3,e,bp.min(),bp.min(),Im.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(bp.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Im.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Im.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bp.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Cm&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Cm(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,e){this.position=t,this.inclusive=e}}function Sm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?kp.comparator(kp.fromName(o.referenceValue),n.key):fm(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Am(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hm(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t,e="asc"){this.field=t,this.dir=e}}function Nm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{}class Rm extends Dm{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new $m(t,e,n):"array-contains"===e?new qm(t,n):"in"===e?new zm(t,n):"not-in"===e?new Km(t,n):"array-contains-any"===e?new Gm(t,n):new Rm(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Vm(t,n):new Bm(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(fm(e,this.value)):null!==e&&lm(this.value)===lm(e)&&this.matchesComparison(fm(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return np()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Lm extends Dm{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new Lm(t,e)}matches(t){return xm(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function xm(t){return"and"===t.op}function Mm(t){return Pm(t)&&xm(t)}function Pm(t){for(const e of t.filters)if(e instanceof Lm)return!1;return!0}function Fm(t){if(t instanceof Rm)return t.field.canonicalString()+t.op.toString()+mm(t.value);if(Mm(t))return t.filters.map((t=>Fm(t))).join(",");{const e=t.filters.map((t=>Fm(t))).join(",");return`${t.op}(${e})`}}function Um(t,e){return t instanceof Rm?function(t,e){return e instanceof Rm&&t.op===e.op&&t.field.isEqual(e.field)&&hm(t.value,e.value)}(t,e):t instanceof Lm?function(t,e){return e instanceof Lm&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Um(n,e.filters[r])),!0)}(t,e):void np()}function jm(t){return t instanceof Rm?function(t){return`${t.field.canonicalString()} ${t.op} ${mm(t.value)}`}(t):t instanceof Lm?function(t){return t.op.toString()+" {"+t.getFilters().map(jm).join(" ,")+"}"}(t):"Filter"}class $m extends Rm{constructor(t,e,n){super(t,e,n),this.key=kp.fromName(n.referenceValue)}matches(t){const e=kp.comparator(t.key,this.key);return this.matchesComparison(e)}}class Vm extends Rm{constructor(t,e){super(t,"in",e),this.keys=Hm("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Bm extends Rm{constructor(t,e){super(t,"not-in",e),this.keys=Hm("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Hm(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>kp.fromName(t.referenceValue)))}class qm extends Rm{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ym(e)&&dm(e.arrayValue,this.value)}}class zm extends Rm{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&dm(this.value.arrayValue,e)}}class Km extends Rm{constructor(t,e){super(t,"not-in",e)}matches(t){if(dm(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!dm(this.value.arrayValue,e)}}class Gm extends Rm{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ym(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>dm(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function Qm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Wm(t,e,n,r,i,s,o)}function Xm(t){const e=ip(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Fm(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Up(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>mm(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>mm(t))).join(",")),e.ft=t}return e.ft}function Jm(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Nm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Um(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Am(t.startAt,e.startAt)&&Am(t.endAt,e.endAt)}function Ym(t){return kp.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zm{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function tg(t,e,n,r,i,s,o,a){return new Zm(t,e,n,r,i,s,o,a)}function eg(t){return new Zm(t)}function ng(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function rg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ig(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function sg(t){return null!==t.collectionGroup}function og(t){const e=ip(t);if(null===e.dt){e.dt=[];const t=ig(e),n=rg(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Om(t)),e.dt.push(new Om(Cp.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Om(Cp.keyField(),t))}}}return e.dt}function ag(t){const e=ip(t);if(!e.wt)if("F"===e.limitType)e.wt=Qm(e.path,e.collectionGroup,og(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of og(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Om(i.field,e))}const n=e.endAt?new km(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new km(e.startAt.position,e.startAt.inclusive):null;e.wt=Qm(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function cg(t,e,n){return new Zm(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ug(t,e){return Jm(ag(t),ag(e))&&t.limitType===e.limitType}function lg(t){return`${Xm(ag(t))}|lt:${t.limitType}`}function hg(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>jm(t))).join(", ")}]`),Up(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>mm(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>mm(t))).join(",")),`Target(${e})`}(ag(t))}; limitType=${t.limitType})`}function dg(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):kp.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of og(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Sm(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,og(t),e))&&!(t.endAt&&!function(t,e,n){const r=Sm(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,og(t),e))}(t,e)}function fg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pg(t){return(e,n)=>{let r=!1;for(const i of og(t)){const t=mg(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function mg(t,e,n){const r=t.field.isKeyField()?kp.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?fm(r,i):np()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return np()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){qp(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return zp(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Kp(kp.comparator);function yg(){return vg}const wg=new Kp(kp.comparator);function _g(...t){let e=wg;for(const n of t)e=e.insert(n.key,n);return e}function bg(t){let e=wg;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Eg(){return Ig()}function Tg(){return Ig()}function Ig(){return new gg((t=>t.toString()),((t,e)=>t.isEqual(e)))}new Kp(kp.comparator);const Cg=new Qp(kp.comparator);function kg(...t){let e=Cg;for(const n of t)e=e.add(n);return e}const Sg=new Qp(yp);function Ag(){return Sg}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jp(e)?"-0":e}}function Ng(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this._=void 0}}function Rg(t,e,n){return t instanceof Mg?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Pg?Fg(t,e):t instanceof Ug?jg(t,e):function(t,e){const n=xg(t,e),r=Vg(n)+Vg(t._t);return vm(n)&&vm(t._t)?Ng(r):Og(t.serializer,r)}(t,e)}function Lg(t,e,n){return t instanceof Pg?Fg(t,e):t instanceof Ug?jg(t,e):n}function xg(t,e){return t instanceof $g?vm(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Mg extends Dg{}class Pg extends Dg{constructor(t){super(),this.elements=t}}function Fg(t,e){const n=Bg(e);for(const r of t.elements)n.some((t=>hm(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Ug extends Dg{constructor(t){super(),this.elements=t}}function jg(t,e){let n=Bg(e);for(const r of t.elements)n=n.filter((t=>!hm(t,r)));return{arrayValue:{values:n}}}class $g extends Dg{constructor(t,e){super(),this.serializer=t,this._t=e}}function Vg(t){return nm(t.integerValue||t.doubleValue)}function Bg(t){return ym(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Pg&&e instanceof Pg||t instanceof Ug&&e instanceof Ug?wp(t.elements,e.elements,hm):t instanceof $g&&e instanceof $g?hm(t._t,e._t):t instanceof Mg&&e instanceof Mg}(t.transform,e.transform)}class qg{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new qg}static exists(t){return new qg(void 0,t)}static updateTime(t){return new qg(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zg(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Kg{}function Gg(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new nv(t.key,qg.none()):new Jg(t.key,t.data,qg.none());{const n=t.data,r=Im.empty();let i=new Qp(Cp.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Yg(t.key,r,new Jp(i.toArray()),qg.none())}}function Wg(t,e,n){t instanceof Jg?function(t,e,n){const r=t.value.clone(),i=tv(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Yg?function(t,e,n){if(!zg(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=tv(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Zg(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Qg(t,e,n,r){return t instanceof Jg?function(t,e,n,r){if(!zg(t.precondition,e))return n;const i=t.value.clone(),s=ev(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yg?function(t,e,n,r){if(!zg(t.precondition,e))return n;const i=ev(t.fieldTransforms,r,e),s=e.data;return s.setAll(Zg(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return zg(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Xg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&wp(t,e,((t,e)=>Hg(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jg extends Kg{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Yg extends Kg{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function tv(t,e,n){const r=new Map;rp(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Lg(o,a,n[i]))}return r}function ev(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Rg(t,s,e))}return r}class nv extends Kg{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rv{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Wg(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Qg(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Qg(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Tg();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Gg(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(bp.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),kg())}isEqual(t){return this.batchId===t.batchId&&wp(this.mutations,t.mutations,((t,e)=>Xg(t,e)))&&wp(this.baseMutations,t.baseMutations,((t,e)=>Xg(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iv{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sv{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ov,av;function cv(t){if(void 0===t)return Zf("GRPC error has no .code"),sp.UNKNOWN;switch(t){case ov.OK:return sp.OK;case ov.CANCELLED:return sp.CANCELLED;case ov.UNKNOWN:return sp.UNKNOWN;case ov.DEADLINE_EXCEEDED:return sp.DEADLINE_EXCEEDED;case ov.RESOURCE_EXHAUSTED:return sp.RESOURCE_EXHAUSTED;case ov.INTERNAL:return sp.INTERNAL;case ov.UNAVAILABLE:return sp.UNAVAILABLE;case ov.UNAUTHENTICATED:return sp.UNAUTHENTICATED;case ov.INVALID_ARGUMENT:return sp.INVALID_ARGUMENT;case ov.NOT_FOUND:return sp.NOT_FOUND;case ov.ALREADY_EXISTS:return sp.ALREADY_EXISTS;case ov.PERMISSION_DENIED:return sp.PERMISSION_DENIED;case ov.FAILED_PRECONDITION:return sp.FAILED_PRECONDITION;case ov.ABORTED:return sp.ABORTED;case ov.OUT_OF_RANGE:return sp.OUT_OF_RANGE;case ov.UNIMPLEMENTED:return sp.UNIMPLEMENTED;case ov.DATA_LOSS:return sp.DATA_LOSS;default:return np()}}(av=ov||(ov={}))[av.OK=0]="OK",av[av.CANCELLED=1]="CANCELLED",av[av.UNKNOWN=2]="UNKNOWN",av[av.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",av[av.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",av[av.NOT_FOUND=5]="NOT_FOUND",av[av.ALREADY_EXISTS=6]="ALREADY_EXISTS",av[av.PERMISSION_DENIED=7]="PERMISSION_DENIED",av[av.UNAUTHENTICATED=16]="UNAUTHENTICATED",av[av.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",av[av.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",av[av.ABORTED=10]="ABORTED",av[av.OUT_OF_RANGE=11]="OUT_OF_RANGE",av[av.UNIMPLEMENTED=12]="UNIMPLEMENTED",av[av.INTERNAL=13]="INTERNAL",av[av.UNAVAILABLE=14]="UNAVAILABLE",av[av.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uv{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return lv}static getOrCreateInstance(){return null===lv&&(lv=new uv),lv}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let lv=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,dv.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new hv(bp.min(),r,Ag(),yg(),kg())}}class dv{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new dv(n,e,kg(),kg(),kg())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(t,e,n,r){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=r}}class pv{constructor(t,e){this.targetId=t,this.Et=e}}class mv{constructor(t,e,n=Zp.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class gv{constructor(){this.At=0,this.Rt=wv(),this.vt=Zp.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=kg(),e=kg(),n=kg();return this.Rt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:np()}})),new dv(this.vt,this.bt,t,e,n)}xt(){this.Pt=!1,this.Rt=wv()}Nt(t,e){this.Pt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class vv{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=yg(),this.qt=yv(),this.Ut=new Qp(yp)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}zt(t){this.forEachTarget(t,(e=>{const n=this.jt(e);switch(t.state){case 0:this.Wt(e)&&n.Dt(t.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(e);break;case 3:this.Wt(e)&&(n.Mt(),n.Dt(t.resumeToken));break;case 4:this.Wt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:np()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.Wt(n)&&e(n)}))}Jt(t){var e;const n=t.targetId,r=t.Et.count,i=this.Yt(n);if(i){const s=i.target;if(Ym(s))if(0===r){const t=new kp(s.path);this.Qt(n,t,Cm.newNoDocument(t,bp.min()))}else rp(1===r);else{const i=this.Zt(n);i!==r&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(e=uv.instance)||void 0===e||e.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:t.Et.count}))}}}Xt(t){const e=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&Ym(i.target)){const e=new kp(i.target.path);null!==this.Lt.get(e)||this.te(r,e)||this.Qt(r,e,Cm.newNoDocument(e,t))}n.St&&(e.set(r,n.Ct()),n.xt())}}));let n=kg();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const r=new hv(t,e,this.Ut,this.Lt,n);return this.Lt=yg(),this.qt=yv(),this.Ut=new Qp(yp),r}Gt(t,e){if(!this.Wt(t))return;const n=this.te(t,e.key)?2:0;this.jt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.Wt(t))return;const r=this.jt(t);this.te(t,e)?r.Nt(e,1):r.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Zt(t){const e=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let e=this.Bt.get(t);return e||(e=new gv,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new Qp(yp),this.qt=this.qt.insert(t,e)),e}Wt(t){const e=null!==this.Yt(t);return e||Yf("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new gv),this.Ft.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.Ft.getRemoteKeysForTarget(t).has(e)}}function yv(){return new Kp(kp.comparator)}function wv(){return new Kp(kp.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),bv=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Ev=(()=>{const t={and:"AND",or:"OR"};return t})();class Tv{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Iv(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kv(t){return rp(!!t),bp.fromTimestamp(function(t){const e=em(t);return new _p(e.seconds,e.nanos)}(t))}function Sv(t,e){return function(t){return new Tp(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Av(t){const e=Tp.fromString(t);return rp(Kv(e)),e}function Ov(t,e){const n=Av(e);if(n.get(1)!==t.databaseId.projectId)throw new op(sp.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new op(sp.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new kp(Lv(n))}function Nv(t,e){return Sv(t.databaseId,e)}function Dv(t){const e=Av(t);return 4===e.length?Tp.emptyPath():Lv(e)}function Rv(t){return new Tp(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lv(t){return rp(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function xv(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:np()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(rp(void 0===e||"string"==typeof e),Zp.fromBase64String(e||"")):(rp(void 0===e||e instanceof Uint8Array),Zp.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?sp.UNKNOWN:cv(t.code);return new op(e,t.message||"")}(o);n=new mv(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ov(t,r.document.name),s=kv(r.document.updateTime),o=r.document.createTime?kv(r.document.createTime):bp.min(),a=new Im({mapValue:{fields:r.document.fields}}),c=Cm.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new fv(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ov(t,r.document),s=r.readTime?kv(r.readTime):bp.min(),o=Cm.newNoDocument(i,s),a=r.removedTargetIds||[];n=new fv([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ov(t,r.document),s=r.removedTargetIds||[];n=new fv([],s,i,null)}else{if(!("filter"in e))return np();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new sv(r),s=t.targetId;n=new pv(s,i)}}return n}function Mv(t,e){return{documents:[Nv(t,e.path)]}}function Pv(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Nv(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nv(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return zv(Lm.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Hv(t.field),direction:$v(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.useProto3Json||Up(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Fv(t){let e=Dv(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){rp(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=jv(t);return e instanceof Lm&&Mm(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Om(qv(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Up(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new km(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new km(n,e)}(n.endAt)),tg(e,i,o,s,a,"F",c,u)}function Uv(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return np()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function jv(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qv(t.unaryFilter.field);return Rm.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qv(t.unaryFilter.field);return Rm.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qv(t.unaryFilter.field);return Rm.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qv(t.unaryFilter.field);return Rm.create(i,"!=",{nullValue:"NULL_VALUE"});default:return np()}}(t):void 0!==t.fieldFilter?function(t){return Rm.create(qv(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return np()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Lm.create(t.compositeFilter.filters.map((t=>jv(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return np()}}(t.compositeFilter.op))}(t):np()}function $v(t){return _v[t]}function Vv(t){return bv[t]}function Bv(t){return Ev[t]}function Hv(t){return{fieldPath:t.canonicalString()}}function qv(t){return Cp.fromServerFormat(t.fieldPath)}function zv(t){return t instanceof Rm?function(t){if("=="===t.op){if(_m(t.value))return{unaryFilter:{field:Hv(t.field),op:"IS_NAN"}};if(wm(t.value))return{unaryFilter:{field:Hv(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(_m(t.value))return{unaryFilter:{field:Hv(t.field),op:"IS_NOT_NAN"}};if(wm(t.value))return{unaryFilter:{field:Hv(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hv(t.field),op:Vv(t.op),value:t.value}}}(t):t instanceof Lm?function(t){const e=t.getFilters().map((t=>zv(t)));return 1===e.length?e[0]:{compositeFilter:{op:Bv(t.op),filters:e}}}(t):np()}function Kv(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t,e,n,r,i=bp.min(),s=bp.min(),o=Zp.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Gv(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Gv(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Gv(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(t){this.se=t}}function Qv(t){const e=Fv({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?cg(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xv{constructor(){}oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(nm(t.integerValue));else if("doubleValue"in t){const n=nm(t.doubleValue);isNaN(n)?this.ae(e,13):(this.ae(e,15),jp(n)?e.he(0):e.he(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ae(e,20),"string"==typeof n?e.le(n):(e.le(`${n.seconds||""}`),e.he(n.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(rm(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ae(e,45),e.he(n.latitude||0),e.he(n.longitude||0)}else"mapValue"in t?Tm(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):np()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const n=t.fields||{};this.ae(e,55);for(const r of Object.keys(n))this.fe(r,e),this.ue(n[r],e)}ge(t,e){const n=t.values||[];this.ae(e,50);for(const r of n)this.ue(r,e)}_e(t,e){this.ae(e,37),kp.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}}Xv.pe=new Xv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jv{constructor(){this.He=new Yv}addToCollectionParentIndex(t,e){return this.He.add(e),Mp.resolve()}getCollectionParents(t,e){return Mp.resolve(this.He.getEntries(e))}addFieldIndex(t,e){return Mp.resolve()}deleteFieldIndex(t,e){return Mp.resolve()}getDocumentsMatchingTarget(t,e){return Mp.resolve(null)}getIndexType(t,e){return Mp.resolve(0)}getFieldIndexes(t,e){return Mp.resolve([])}getNextCollectionGroupToUpdate(t){return Mp.resolve(null)}getMinOffset(t,e){return Mp.resolve(Np.min())}getMinOffsetFromCollectionGroup(t,e){return Mp.resolve(Np.min())}updateCollectionGroup(t,e,n){return Mp.resolve()}updateIndexEntries(t,e){return Mp.resolve()}}class Yv{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Qp(Tp.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Qp(Tp.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Zv{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Zv(t,Zv.DEFAULT_COLLECTION_PERCENTILE,Zv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zv.DEFAULT_COLLECTION_PERCENTILE=10,Zv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zv.DEFAULT=new Zv(41943040,Zv.DEFAULT_COLLECTION_PERCENTILE,Zv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zv.DISABLED=new Zv(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ty{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new ty(0)}static bn(){return new ty(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ey{constructor(){this.changes=new gg((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Cm.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Mp.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ny{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Qg(n.mutation,t,Jp.empty(),_p.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,kg()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=kg()){const r=Eg();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=_g();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Eg();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,kg())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=yg();const s=Ig(),o=Ig();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Yg)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Qg(o.mutation,e,o.mutation.getFieldMask(),_p.now())):s.set(e.key,Jp.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new ny(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Ig();let r=new Kp(((t,e)=>t-e)),i=kg();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Jp.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||kg()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Tg();c.forEach((t=>{if(!i.has(t)){const r=Gg(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Mp.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return kp.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):sg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Mp.resolve(Eg());let o=-1,a=i;return s.next((e=>Mp.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Mp.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,kg()))).next((t=>({batchId:o,changes:bg(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new kp(e)).next((t=>{let e=_g();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=_g();return this.indexManager.getCollectionParents(t,r).next((s=>Mp.forEach(s,(s=>{const o=function(t,e){return new Zm(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Cm.newInvalidDocument(r)))}));let n=_g();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&Qg(s.mutation,i,Jp.empty(),_p.now()),dg(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Mp.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:kv(n.createTime)}),Mp.resolve()}getNamedQuery(t,e){return Mp.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Qv(t.bundledQuery),readTime:kv(t.readTime)}}(e)),Mp.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.overlays=new Kp(kp.comparator),this.ts=new Map}getOverlay(t,e){return Mp.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Eg();return Mp.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.re(t,e,r)})),Mp.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.ts.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.ts.delete(n)),Mp.resolve()}getOverlaysForCollection(t,e,n){const r=Eg(),i=e.length+1,s=new kp(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Mp.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Kp(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Eg(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Eg(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Mp.resolve(o)}re(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new iv(e,n));let i=this.ts.get(e);void 0===i&&(i=kg(),this.ts.set(e,i)),this.ts.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.es=new Qp(ay.ns),this.ss=new Qp(ay.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,e){const n=new ay(t,e);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.us(new ay(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}hs(t){const e=new kp(new Tp([])),n=new ay(e,t),r=new ay(e,t+1),i=[];return this.ss.forEachInRange([n,r],(t=>{this.us(t),i.push(t.key)})),i}ls(){this.es.forEach((t=>this.us(t)))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const e=new kp(new Tp([])),n=new ay(e,t),r=new ay(e,t+1);let i=kg();return this.ss.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ay(t,0),n=this.es.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ay{constructor(t,e){this.key=t,this.ds=e}static ns(t,e){return kp.comparator(t.key,e.key)||yp(t.ds,e.ds)}static rs(t,e){return yp(t.ds,e.ds)||kp.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this._s=new Qp(ay.ns)}checkEmpty(t){return Mp.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new rv(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this._s=this._s.add(new ay(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Mp.resolve(s)}lookupMutationBatch(t,e){return Mp.resolve(this.gs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ys(n),i=r<0?0:r;return Mp.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Mp.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Mp.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ay(e,0),r=new ay(e,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,r],(t=>{const e=this.gs(t.ds);i.push(e)})),Mp.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qp(yp);return e.forEach((t=>{const e=new ay(t,0),r=new ay(t,Number.POSITIVE_INFINITY);this._s.forEachInRange([e,r],(t=>{n=n.add(t.ds)}))})),Mp.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;kp.isDocumentKey(i)||(i=i.child(""));const s=new ay(new kp(i),0);let o=new Qp(yp);return this._s.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ds)),!0)}),s),Mp.resolve(this.ps(o))}ps(t){const e=[];return t.forEach((t=>{const n=this.gs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){rp(0===this.Is(e.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return Mp.forEach(e.mutations,(r=>{const i=new ay(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this._s=n}))}En(t){}containsKey(t,e){const n=new ay(e,0),r=this._s.firstAfterOrEqual(n);return Mp.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Mp.resolve()}Is(t,e){return this.ys(t)}ys(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}gs(t){const e=this.ys(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(t){this.Ts=t,this.docs=new Kp(kp.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ts(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Mp.resolve(n?n.document.mutableCopy():Cm.newInvalidDocument(e))}getEntries(t,e){let n=yg();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Cm.newInvalidDocument(t))})),Mp.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=yg();const s=e.path,o=new kp(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Dp(Op(o),n)<=0||(r.has(o.key)||dg(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Mp.resolve(i)}getAllFromCollectionGroup(t,e,n,r){np()}Es(t,e){return Mp.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ly(this)}getSize(t){return Mp.resolve(this.size)}}class ly extends ey{constructor(t){super(),this.Jn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Jn.addEntry(t,r)):this.Jn.removeEntry(n)})),Mp.waitFor(e)}getFromCache(t,e){return this.Jn.getEntry(t,e)}getAllFromCache(t,e){return this.Jn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(t){this.persistence=t,this.As=new gg((t=>Xm(t)),Jm),this.lastRemoteSnapshotVersion=bp.min(),this.highestTargetId=0,this.Rs=0,this.vs=new oy,this.targetCount=0,this.bs=ty.vn()}forEachTarget(t,e){return this.As.forEach(((t,n)=>e(n))),Mp.resolve()}getLastRemoteSnapshotVersion(t){return Mp.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Mp.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),Mp.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Rs&&(this.Rs=e),Mp.resolve()}Sn(t){this.As.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new ty(e),this.highestTargetId=e),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,e){return this.Sn(e),this.targetCount+=1,Mp.resolve()}updateTargetData(t,e){return this.Sn(e),Mp.resolve()}removeTargetData(t,e){return this.As.delete(e.target),this.vs.hs(e.targetId),this.targetCount-=1,Mp.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Mp.waitFor(i).next((()=>r))}getTargetCount(t){return Mp.resolve(this.targetCount)}getTargetData(t,e){const n=this.As.get(e)||null;return Mp.resolve(n)}addMatchingKeys(t,e,n){return this.vs.os(e,n),Mp.resolve()}removeMatchingKeys(t,e,n){this.vs.cs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Mp.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.vs.hs(e),Mp.resolve()}getMatchingKeysForTargetId(t,e){const n=this.vs.fs(e);return Mp.resolve(n)}containsKey(t,e){return Mp.resolve(this.vs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(t,e){this.Ps={},this.overlays={},this.Vs=new Fp(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new hy(this),this.indexManager=new Jv,this.remoteDocumentCache=function(t){return new uy(t)}((t=>this.referenceDelegate.Cs(t))),this.serializer=new Wv(e),this.xs=new iy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new sy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ps[t.toKey()];return n||(n=new cy(e,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,e,n){Yf("MemoryPersistence","Starting transaction:",t);const r=new fy(this.Vs.next());return this.referenceDelegate.Ns(),n(r).next((t=>this.referenceDelegate.ks(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Os(t,e){return Mp.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class fy extends Lp{constructor(t){super(),this.currentSequenceNumber=t}}class py{constructor(t){this.persistence=t,this.$s=new oy,this.Ms=null}static Fs(t){return new py(t)}get Bs(){if(this.Ms)return this.Ms;throw np()}addReference(t,e,n){return this.$s.addReference(n,e),this.Bs.delete(n.toString()),Mp.resolve()}removeReference(t,e,n){return this.$s.removeReference(n,e),this.Bs.add(n.toString()),Mp.resolve()}markPotentiallyOrphaned(t,e){return this.Bs.add(e.toString()),Mp.resolve()}removeTarget(t,e){this.$s.hs(e.targetId).forEach((t=>this.Bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ns(){this.Ms=new Set}ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Mp.forEach(this.Bs,(n=>{const r=kp.fromPath(n);return this.Ls(t,r).next((t=>{t||e.removeEntry(r,bp.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ls(t,e).next((t=>{t?this.Bs.delete(e.toString()):this.Bs.add(e.toString())}))}Cs(t){return 0}Ls(t,e){return Mp.or([()=>Mp.resolve(this.$s.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class my{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Vi=n,this.Si=r}static Di(t,e){let n=kg(),r=kg();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new my(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.Ci=!1}initialize(t,e){this.xi=t,this.indexManager=e,this.Ci=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ni(t,e).next((i=>i||this.ki(t,e,r,n))).next((n=>n||this.Oi(t,e)))}Ni(t,e){if(ng(e))return Mp.resolve(null);let n=ag(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=cg(e,null,"F"),n=ag(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=kg(...r);return this.xi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.$i(e,r);return this.Mi(e,s,i,n.readTime)?this.Ni(t,cg(e,null,"F")):this.Fi(t,s,e,n)}))))})))))}ki(t,e,n,r){return ng(e)||r.isEqual(bp.min())?this.Oi(t,e):this.xi.getDocuments(t,n).next((i=>{const s=this.$i(e,i);return this.Mi(e,s,n,r)?this.Oi(t,e):(Jf()<=Ka.DEBUG&&Yf("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),hg(e)),this.Fi(t,s,e,Ap(r,-1)))}))}$i(t,e){let n=new Qp(pg(t));return e.forEach(((e,r)=>{dg(t,r)&&(n=n.add(r))})),n}Mi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(t,e){return Jf()<=Ka.DEBUG&&Yf("QueryEngine","Using full collection scan to execute query:",hg(e)),this.xi.getDocumentsMatchingQuery(t,e,Np.min())}Fi(t,e,n,r){return this.xi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(t,e,n,r){this.persistence=t,this.Bi=e,this.serializer=r,this.Li=new Kp(yp),this.qi=new gg((t=>Xm(t)),Jm),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(n)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ry(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Li)))}}function yy(t,e,n,r){return new vy(t,e,n,r)}async function wy(t,e){const n=ip(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=kg();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Qi:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function _y(t){const e=ip(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}function by(t,e){const n=ip(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ds.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Zp.EMPTY_BYTE_STRING,bp.min()).withLastLimboFreeSnapshotVersion(bp.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Ds.updateTargetData(t,u))}));let a=yg(),c=kg();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Ey(t,s,e.documentUpdates).next((t=>{a=t.zi,c=t.ji}))),!r.isEqual(bp.min())){const e=n.Ds.getLastRemoteSnapshotVersion(t).next((e=>n.Ds.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Mp.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Li=i,t)))}function Ey(t,e,n){let r=kg(),i=kg();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=yg();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(bp.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Yf("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{zi:r,ji:i}}))}function Ty(t,e){const n=ip(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Ds.getTargetData(t,e).next((i=>i?(r=i,Mp.resolve(r)):n.Ds.allocateTargetId(t).next((i=>(r=new Gv(e,i,0,t.currentSequenceNumber),n.Ds.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Li.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function Iy(t,e,n){const r=ip(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Pp(t))throw t;Yf("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function Cy(t,e,n){const r=ip(t);let i=bp.min(),s=kg();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=ip(t),i=r.qi.get(n);return void 0!==i?Mp.resolve(r.Li.get(i)):r.Ds.getTargetData(e,n)}(r,t,ag(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Bi.getDocumentsMatchingQuery(t,e,n?i:bp.min(),n?s:kg()))).next((t=>(ky(r,fg(e),t),{documents:t,Wi:s})))))}function ky(t,e,n){let r=t.Ui.get(e)||bp.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ui.set(e,r)}class Sy{constructor(){this.activeTargetIds=Ag()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ay{constructor(){this.Br=new Sy,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,e,n){this.Lr[t]=e}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Sy,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Yf("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){Yf("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dy=null;function Ry(){return null===Dy?Dy=268435456+Math.round(2147483648*Math.random()):Dy++,"0x"+Dy.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ly={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="WebChannelConnection";class Py extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.ro=e+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,e,n,r,i){const s=Ry(),o=this.ao(t,e);Yf("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.ho(a,r,i),this.lo(t,o,a,n).then((e=>(Yf("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw tp("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}fo(t,e,n,r,i,s){return this.co(t,e,n,r,i)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Qf,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=Ly[t];return`${this.ro}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,r){const i=Ry();return new Promise(((s,o)=>{const a=new Kf;a.setWithCredentials(!0),a.listenOnce(Vf.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case $f.NO_ERROR:const e=a.getResponseJson();Yf(My,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case $f.TIMEOUT:Yf(My,`RPC '${t}' ${i} timed out`),o(new op(sp.DEADLINE_EXCEEDED,"Request time out"));break;case $f.HTTP_ERROR:const n=a.getStatus();if(Yf(My,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(sp).indexOf(e)>=0?e:sp.UNKNOWN}(e.status);o(new op(t,e.message))}else o(new op(sp.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new op(sp.UNAVAILABLE,"Connection failed."));break;default:np()}}finally{Yf(My,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);Yf(My,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}wo(t,e,n){const r=Ry(),i=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Uf(),o=jf(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new qf({})),this.ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Yf(My,`Creating RPC '${t}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new xy({Wr:e=>{h?Yf(My,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(Yf(My,`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),Yf(My,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},Hr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,zf.EventType.OPEN,(()=>{h||Yf(My,`RPC '${t}' stream ${r} transport opened.`)})),f(u,zf.EventType.CLOSE,(()=>{h||(h=!0,Yf(My,`RPC '${t}' stream ${r} transport closed`),d.so())})),f(u,zf.EventType.ERROR,(e=>{h||(h=!0,tp(My,`RPC '${t}' stream ${r} transport errored:`,e),d.so(new op(sp.UNAVAILABLE,"The operation could not be completed")))})),f(u,zf.EventType.MESSAGE,(e=>{var n;if(!h){const i=e.data[0];rp(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Yf(My,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=ov[t];if(void 0!==e)return cv(e)}(e),i=o.message;void 0===n&&(n=sp.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),h=!0,d.so(new op(n,i)),u.close()}else Yf(My,`RPC '${t}' stream ${r} received:`,i),d.io(i)}})),f(o,Bf.STAT_EVENT,(e=>{e.stat===Hf.PROXY?Yf(My,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Hf.NOPROXY&&Yf(My,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){return new Tv(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Ws=t,this.timerId=e,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,e-n);r>0&&Yf("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(t,e,n,r,i,s,o,a){this.Ws=t,this.bo=n,this.Po=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new jy(t,e)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,e){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==t?this.Co.reset():e&&e.code===sp.RESOURCE_EXHAUSTED?(Zf(e.toString()),Zf("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):e&&e.code===sp.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.Ko(t,n)}),(e=>{t((()=>{const t=new op(sp.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Go(t)}))}))}Ko(t,e){const n=this.Uo(this.Vo);this.stream=this.Qo(t,e),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((t=>{n((()=>this.Go(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(t){return Yf("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Ws.enqueueAndForget((()=>this.Vo===t?e():(Yf("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Vy extends $y{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}Qo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Co.reset();const e=xv(this.serializer,t),n=function(t){if(!("targetChange"in t))return bp.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?bp.min():e.readTime?kv(e.readTime):bp.min()}(t);return this.listener.zo(e,n)}jo(t){const e={};e.database=Rv(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;return n=Ym(r)?{documents:Mv(t,r)}:{query:Pv(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Cv(t,e.resumeToken):e.snapshotVersion.compareTo(bp.min())>0&&(n.readTime=Iv(t,e.snapshotVersion.toTimestamp())),n}(this.serializer,t);const n=Uv(this.serializer,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=Rv(this.serializer),e.removeTarget=t,this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class By extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new op(sp.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.co(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===sp.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new op(sp.UNKNOWN,t.toString())}))}fo(t,e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.fo(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===sp.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new op(sp.UNKNOWN,t.toString())}))}terminate(){this.eu=!0}}class Hy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,"Online"===t&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Zf(e),this.ru=!1):Yf("OnlineStateTracker",e)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((t=>{n.enqueueAndForget((async()=>{Zy(this)&&(Yf("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ip(t);e.du.add(4),await Ky(e),e.mu.set("Unknown"),e.du.delete(4),await zy(e)}(this))}))})),this.mu=new Hy(n,r)}}async function zy(t){if(Zy(t))for(const e of t.wu)await e(!0)}async function Ky(t){for(const e of t.wu)await e(!1)}function Gy(t,e){const n=ip(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Yy(n)?Jy(n):aw(n).No()&&Qy(n,e))}function Wy(t,e){const n=ip(t),r=aw(n);n.fu.delete(e),r.No()&&Xy(n,e),0===n.fu.size&&(r.No()?r.$o():Zy(n)&&n.mu.set("Unknown"))}function Qy(t,e){t.gu.Ot(e.targetId),aw(t).jo(e)}function Xy(t,e){t.gu.Ot(e),aw(t).Wo(e)}function Jy(t){t.gu=new vv({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),aw(t).start(),t.mu.ou()}function Yy(t){return Zy(t)&&!aw(t).xo()&&t.fu.size>0}function Zy(t){return 0===ip(t).du.size}function tw(t){t.gu=void 0}async function ew(t){t.fu.forEach(((e,n)=>{Qy(t,e)}))}async function nw(t,e){tw(t),Yy(t)?(t.mu.au(e),Jy(t)):t.mu.set("Unknown")}async function rw(t,e,n){if(t.mu.set("Online"),e instanceof mv&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.fu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.fu.delete(r),t.gu.removeTarget(r))}(t,e)}catch(n){Yf("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await iw(t,n)}else if(e instanceof fv?t.gu.Kt(e):e instanceof pv?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(bp.min()))try{const e=await _y(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.gu.Xt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.fu.get(r);i&&t.fu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.fu.get(e);if(!n)return;t.fu.set(e,n.withResumeToken(Zp.EMPTY_BYTE_STRING,n.snapshotVersion)),Xy(t,e);const r=new Gv(n.target,e,1,n.sequenceNumber);Qy(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Yf("RemoteStore","Failed to raise snapshot:",e),await iw(t,e)}}async function iw(t,e,n){if(!Pp(e))throw e;t.du.add(1),await Ky(t),t.mu.set("Offline"),n||(n=()=>_y(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Yf("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await zy(t)}))}async function sw(t,e){const n=ip(t);n.asyncQueue.verifyOperationInProgress(),Yf("RemoteStore","RemoteStore received new credentials");const r=Zy(n);n.du.add(3),await Ky(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await zy(n)}async function ow(t,e){const n=ip(t);e?(n.du.delete(2),await zy(n)):e||(n.du.add(2),await Ky(n),n.mu.set("Unknown"))}function aw(t){return t.yu||(t.yu=function(t,e,n){const r=ip(t);return r.nu(),new Vy(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Jr:ew.bind(null,t),Zr:nw.bind(null,t),zo:rw.bind(null,t)}),t.wu.push((async e=>{e?(t.yu.Oo(),Yy(t)?Jy(t):t.mu.set("Unknown")):(await t.yu.stop(),tw(t))}))),t.yu}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cw{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ap,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new cw(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new op(sp.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uw(t,e){if(Zf("AsyncQueue",`${e}: ${t}`),Pp(t))return new op(sp.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(t){this.comparator=t?(e,n)=>t(e,n)||kp.comparator(e.key,n.key):(t,e)=>kp.comparator(t.key,e.key),this.keyedMap=_g(),this.sortedSet=new Kp(this.comparator)}static emptySet(t){return new lw(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof lw))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new lw;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.Iu=new Kp(kp.comparator)}track(t){const e=t.doc.key,n=this.Iu.get(e);n?0!==t.type&&3===n.type?this.Iu=this.Iu.insert(e,t):3===t.type&&1!==n.type?this.Iu=this.Iu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Iu=this.Iu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Iu=this.Iu.remove(e):1===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):np():this.Iu=this.Iu.insert(e,t)}Tu(){const t=[];return this.Iu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class dw{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new dw(t,e,lw.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ug(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.Eu=void 0,this.listeners=[]}}class pw{constructor(){this.queries=new gg((t=>lg(t)),ug),this.onlineState="Unknown",this.Au=new Set}}async function mw(t,e){const n=ip(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new fw),i)try{s.Eu=await n.onListen(r)}catch(t){const n=uw(t,`Initialization of query '${hg(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&ww(n)}async function gw(t,e){const n=ip(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vw(t,e){const n=ip(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(i)&&(r=!0);e.Eu=i}}r&&ww(n)}function yw(t,e,n){const r=ip(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ww(t){t.Au.forEach((t=>{t.next()}))}class _w{constructor(t,e,n){this.query=t,this.bu=e,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new dw(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),e=!0):this.Du(t,this.onlineState)&&(this.Cu(t),e=!0),this.Vu=t,e}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let e=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),e=!0),e}Du(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.xu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Su(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Cu(t){t=dw.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bw{constructor(t){this.key=t}}class Ew{constructor(t){this.key=t}}class Tw{constructor(t,e){this.query=t,this.Lu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=kg(),this.mutatedKeys=kg(),this.Ku=pg(t),this.Gu=new lw(this.Ku)}get Qu(){return this.Lu}zu(t,e){const n=e?e.ju:new hw,r=e?e.Gu:this.Gu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=dg(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Wu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ku(l,a)>0||c&&this.Ku(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Gu:s,ju:n,Mi:o,mutatedKeys:i}}Wu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.ju.Tu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return np()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const s=e?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new dw(this.query,t.Gu,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new hw,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=kg(),this.Gu.forEach((t=>{this.Zu(t.key)&&(this.Uu=this.Uu.add(t.key))}));const e=[];return t.forEach((t=>{this.Uu.has(t)||e.push(new Ew(t))})),this.Uu.forEach((n=>{t.has(n)||e.push(new bw(n))})),e}Xu(t){this.Lu=t.Wi,this.Uu=kg();const e=this.zu(t.documents);return this.applyChanges(e,!0)}tc(){return dw.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Iw{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Cw{constructor(t){this.key=t,this.ec=!1}}class kw{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new gg((t=>lg(t)),ug),this.ic=new Map,this.rc=new Set,this.oc=new Kp(kp.comparator),this.uc=new Map,this.cc=new oy,this.ac={},this.hc=new Map,this.lc=ty.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Sw(t,e){const n=Vw(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const t=await Ty(n.localStore,ag(e));n.isPrimaryClient&&Gy(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Aw(n,e,r,"current"===s,t.resumeToken)}return i}async function Aw(t,e,n,r,i){t.dc=(e,n,r)=>async function(t,e,n,r){let i=e.view.zu(n);i.Mi&&(i=await Cy(t.localStore,e.query,!1).then((({documents:t})=>e.view.zu(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Mw(t,e.targetId,o.Yu),o.snapshot}(t,e,n,r);const s=await Cy(t.localStore,e,!0),o=new Tw(e,s.Wi),a=o.zu(s.documents),c=dv.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Mw(t,n,u.Yu);const l=new Iw(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function Ow(t,e){const n=ip(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter((t=>!ug(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Iy(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Wy(n.remoteStore,r.targetId),Lw(n,r.targetId)})).catch(xp)):(Lw(n,r.targetId),await Iy(n.localStore,r.targetId,!0))}async function Nw(t,e){const n=ip(t);try{const t=await by(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.uc.get(e);r&&(rp(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ec=!0:t.modifiedDocuments.size>0?rp(r.ec):t.removedDocuments.size>0&&(rp(r.ec),r.ec=!1))})),await Uw(n,t,e)}catch(t){await xp(t)}}function Dw(t,e,n){const r=ip(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.sc.forEach(((n,r)=>{const i=r.view.Ru(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ip(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Ru(e)&&(r=!0)})),r&&ww(n)}(r.eventManager,e),t.length&&r.nc.zo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rw(t,e,n){const r=ip(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let t=new Kp(kp.comparator);t=t.insert(s,Cm.newNoDocument(s,bp.min()));const n=kg().add(s),i=new hv(bp.min(),new Map,new Qp(yp),t,n);await Nw(r,i),r.oc=r.oc.remove(s),r.uc.delete(e),Fw(r)}else await Iy(r.localStore,e,!1).then((()=>Lw(r,e,n))).catch(xp)}function Lw(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach((e=>{t.cc.containsKey(e)||xw(t,e)}))}function xw(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Wy(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Fw(t))}function Mw(t,e,n){for(const r of n)r instanceof bw?(t.cc.addReference(r.key,e),Pw(t,r)):r instanceof Ew?(Yf("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||xw(t,r.key)):np()}function Pw(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(Yf("SyncEngine","New document in limbo: "+n),t.rc.add(r),Fw(t))}function Fw(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new kp(Tp.fromString(e)),r=t.lc.next();t.uc.set(r,new Cw(n)),t.oc=t.oc.insert(n,r),Gy(t.remoteStore,new Gv(ag(eg(n.path)),r,2,Fp.ct))}}async function Uw(t,e,n){const r=ip(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach(((t,a)=>{o.push(r.dc(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=my.Di(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.nc.zo(i),await async function(t,e){const n=ip(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Mp.forEach(e,(e=>Mp.forEach(e.Vi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Mp.forEach(e.Si,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Pp(t))throw t;Yf("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Li.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Li=n.Li.insert(t,i)}}}(r.localStore,s))}async function jw(t,e){const n=ip(t);if(!n.currentUser.isEqual(e)){Yf("SyncEngine","User change. New user:",e.toKey());const t=await wy(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new op(sp.CANCELLED,e))}))})),t.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Uw(n,t.Qi)}}function $w(t,e){const n=ip(t),r=n.uc.get(e);if(r&&r.ec)return kg().add(r.key);{let t=kg();const r=n.ic.get(e);if(!r)return t;for(const e of r){const r=n.sc.get(e);t=t.unionWith(r.view.Qu)}return t}}function Vw(t){const e=ip(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$w.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rw.bind(null,e),e.nc.zo=vw.bind(null,e.eventManager),e.nc.wc=yw.bind(null,e.eventManager),e}class Bw{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Uy(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return yy(this.persistence,new gy,t.initialUser,this.serializer)}createPersistence(t){return new dy(py.Fs,this.serializer)}createSharedClientState(t){return new Ay}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hw{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Dw(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=jw.bind(null,this.syncEngine),await ow(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new pw}createDatastore(t){const e=Uy(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Py(r));var r;return function(t,e,n,r){return new By(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Dw(this.syncEngine,t,0),s=Ny.D()?new Ny:new Oy,new qy(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new kw(t,e,n,r,i,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ip(t);Yf("RemoteStore","RemoteStore shutting down."),e.du.add(5),await Ky(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qw{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Zf("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zw{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Wf.UNAUTHENTICATED,this.clientId=vp.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Yf("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Yf("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new op(sp.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ap;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(DL){const n=uw(DL,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Kw(t,e){t.asyncQueue.verifyOperationInProgress(),Yf("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await wy(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Gw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qw(t);Yf("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>sw(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>sw(e.remoteStore,n))),t._onlineComponents=e}function Ww(t){return"FirebaseError"===t.name?t.code===sp.FAILED_PRECONDITION||t.code===sp.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Qw(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Yf("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kw(t,t._uninitializedComponentsProvider._offline)}catch(DL){const n=DL;if(!Ww(n))throw n;tp("Error using user provided cache. Falling back to memory cache: "+n),await Kw(t,new Bw)}}else Yf("FirestoreClient","Using default OfflineComponentProvider"),await Kw(t,new Bw);return t._offlineComponents}async function Xw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Yf("FirestoreClient","Using user provided OnlineComponentProvider"),await Gw(t,t._uninitializedComponentsProvider._online)):(Yf("FirestoreClient","Using default OnlineComponentProvider"),await Gw(t,new Hw))),t._onlineComponents}async function Jw(t){const e=await Xw(t),n=e.eventManager;return n.onListen=Sw.bind(null,e.syncEngine),n.onUnlisten=Ow.bind(null,e.syncEngine),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yw=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e,n){if(!n)throw new op(sp.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function t_(t,e,n,r){if(!0===e&&!0===r)throw new op(sp.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function e_(t){if(!kp.isDocumentKey(t))throw new op(sp.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function n_(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":np()}function r_(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new op(sp.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=n_(t);throw new op(sp.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class i_{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new op(sp.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new op(sp.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,t_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new op(sp.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new op(sp.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new up;switch(t.type){case"firstParty":return new fp(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new op(sp.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Yw.get(t);e&&(Yf("ComponentProvider","Removing Datastore"),Yw.delete(t),e.terminate())}(this),Promise.resolve()}}function o_(t,e,n,r={}){var i;const s=(t=r_(t,s_))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&tp("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Wf.MOCK_USER;else{e=pa(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new op(sp.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Wf(s)}t._authCredentials=new lp(new cp(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new u_(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new a_(this.firestore,t,this._key)}}class c_{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new c_(this.firestore,t,this._query)}}class u_ extends c_{constructor(t,e,n){super(t,e,eg(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new a_(this.firestore,null,new kp(t))}withConverter(t){return new u_(this.firestore,t,this._path)}}function l_(t,e,...n){if(t=Ua(t),1===arguments.length&&(e=vp.A()),Zw("doc","path",e),t instanceof s_){const r=Tp.fromString(e,...n);return e_(r),new a_(t,null,new kp(r))}{if(!(t instanceof a_||t instanceof u_))throw new op(sp.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Tp.fromString(e,...n));return e_(r),new a_(t.firestore,t instanceof u_?t.converter:null,new kp(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h_{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new jy(this,"async_queue_retry"),this.qc=()=>{const t=Fy();t&&Yf("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=Fy();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=Fy();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new ap;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(Bu){if(!Pp(Bu))throw Bu;Yf("AsyncQueue","Operation failed with retryable error: "+Bu)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Zf("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,n){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const r=cw.createAndSchedule(this,t,e,n,(t=>this.Qc(t)));return this.$c.push(r),r}Uc(){this.Mc&&np()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function d_(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class f_ extends s_{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new h_,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||g_(this),this._firestoreClient.terminate()}}function p_(t,e){const n="object"==typeof t?t:uu(),r="string"==typeof t?t:e||"(default)",i=ru(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=la("firestore");t&&o_(i,...t)}return i}function m_(t){return t._firestoreClient||g_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function g_(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new am(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zw(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v_{constructor(t){this._byteString=t}static fromBase64String(t){try{return new v_(Zp.fromBase64String(t))}catch(t){throw new op(sp.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new v_(Zp.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new op(sp.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cp(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w_{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new op(sp.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new op(sp.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return yp(this._lat,t._lat)||yp(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new RegExp("[~\\*/\\[\\]]");function b_(t,e,n){if(e.search(__)>=0)throw E_(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new y_(...e.split("."))._internalPath}catch(r){throw E_(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function E_(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new op(sp.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T_{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new a_(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new I_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(C_("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class I_ extends T_{data(){return super.data()}}function C_(t,e){return"string"==typeof e?b_(t,e):e instanceof y_?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new op(sp.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class S_{convertValue(t,e="none"){switch(lm(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nm(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(rm(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw np()}}convertObject(t,e){const n={};return qp(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new w_(nm(t.latitude),nm(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=sm(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(om(t));default:return null}}convertTimestamp(t){const e=em(t);return new _p(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Tp.fromString(t);rp(Kv(n));const r=new cm(n.get(1),n.get(3)),i=new kp(n.popFirst(5));return r.isEqual(e)||Zf(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A_{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class O_ extends T_{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new N_(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(C_("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class N_ extends O_{data(t={}){return super.data(t)}}class D_{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new A_(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new N_(this._firestore,this._userDataWriter,n.key,n,new A_(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new op(sp.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new N_(t._firestore,t._userDataWriter,n.doc.key,n.doc,new A_(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new N_(t._firestore,t._userDataWriter,e.doc.key,e.doc,new A_(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:R_(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function R_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return np()}}class L_ extends S_{constructor(t){super(),this.firestore=t}convertBytes(t){return new v_(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new a_(this.firestore,null,e)}}function x_(t,...e){var n,r,i;t=Ua(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||d_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(d_(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,u,l;if(t instanceof a_)u=r_(t.firestore,f_),l=eg(t._key.path),c={next:n=>{e[o]&&e[o](M_(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=r_(t,c_);u=r_(n.firestore,f_),l=n._query;const r=new L_(u);c={next:t=>{e[o]&&e[o](new D_(u,r,n,t))},error:e[o+1],complete:e[o+2]},k_(t._query)}return function(t,e,n,r){const i=new qw(r),s=new _w(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>mw(await Jw(t),s))),()=>{i.yc(),t.asyncQueue.enqueueAndForget((async()=>gw(await Jw(t),s)))}}(m_(u),l,a,c)}function M_(t,e,n){const r=n.docs.get(e._key),i=new L_(t);return new O_(t,i,e._key,r,new A_(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Qf=t}(au),nu(new ja("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new f_(new hp(t.getProvider("auth-internal")),new mp(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new op(sp.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cm(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),lu(Gf,"3.10.0",t),lu(Gf,"3.10.0","esm2017")}();var P_="firebase",F_="9.19.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
lu(P_,F_,"app");function U_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;function j_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $_=j_,V_=new Ca("auth","Firebase",j_()),B_=new Ja("@firebase/auth");function H_(t,...e){B_.logLevel<=Ka.ERROR&&B_.error(`Auth (${au}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t,...e){throw G_(t,...e)}function z_(t,...e){return G_(t,...e)}function K_(t,e,n){const r=Object.assign(Object.assign({},$_()),{[e]:n}),i=new Ca("auth","Firebase",r);return i.create(e,{appName:t.name})}function G_(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return V_.create(t,...e)}function W_(t,e,...n){if(!t)throw G_(e,...n)}function Q_(t){const e="INTERNAL ASSERTION FAILED: "+t;throw H_(e),new Error(e)}function X_(t,e){t||Q_(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new Map;function Y_(t){X_(t instanceof Function,"Expected a class definition");let e=J_.get(t);return e?(X_(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,J_.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t,e){const n=ru(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if(Oa(r,null!==e&&void 0!==e?e:{}))return t;q_(t,"already-initialized")}const r=n.initialize({options:e});return r}function tb(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Y_);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function nb(){return"http:"===rb()||"https:"===rb()}function rb(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(nb()||va()||"connection"in navigator))||navigator.onLine}function sb(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(t,e){this.shortDelay=t,this.longDelay=e,X_(e>t,"Short delay should be less than long delay!"),this.isMobile=ga()||ya()}get(){return ib()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t,e){X_(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void Q_("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void Q_("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void Q_("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},lb=new ob(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function db(t,e,n,r,i={}){return fb(t,i,(async()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=Da(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),cb.fetch()(mb(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function fb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ub),e);try{const e=new gb(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw vb(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw vb(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw vb(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw vb(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw K_(t,a,o);q_(t,a)}}catch(DL){if(DL instanceof Ia)throw DL;q_(t,"network-request-failed",{message:String(DL)})}}async function pb(t,e,n,r,i={}){const s=await db(t,e,n,r,i);return"mfaPendingCredential"in s&&q_(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ab(t.config,i):`${t.config.apiScheme}://${i}`}class gb{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(z_(this.auth,"network-request-failed"))),lb.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function vb(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=z_(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e){return db(t,"POST","/v1/accounts:delete",e)}async function wb(t,e){return db(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(DL){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e=!1){const n=Ua(t),r=await n.getIdToken(e),i=Tb(r);W_(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:_b(Eb(i.auth_time)),issuedAtTime:_b(Eb(i.iat)),expirationTime:_b(Eb(i.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Eb(t){return 1e3*Number(t)}function Tb(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return H_("JWT malformed, contained fewer than 3 sections"),null;try{const t=ra(n);return t?JSON.parse(t):(H_("Failed to decode base64 JWT payload"),null)}catch(DL){return H_("Caught error parsing JWT payload as JSON",null===DL||void 0===DL?void 0:DL.toString()),null}}function Ib(t){const e=Tb(t);return W_(e,"internal-error"),W_("undefined"!==typeof e.exp,"internal-error"),W_("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e,n=!1){if(n)return e;try{return await e}catch(DL){throw DL instanceof Ia&&kb(DL)&&t.auth.currentUser===t&&await t.auth.signOut(),DL}}function kb({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(DL){return void("auth/network-request-failed"===(null===DL||void 0===DL?void 0:DL.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=_b(this.lastLoginAt),this.creationTime=_b(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Cb(t,wb(n,{idToken:r}));W_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?Rb(s.providerUserInfo):[],a=Db(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ab(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Nb(t){const e=Ua(t);await Ob(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Db(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function Rb(t){return t.map((t=>{var{providerId:e}=t,n=U_(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lb(t,e){const n=await fb(t,{},(async()=>{const n=Da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=mb(t,r,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",cb.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W_(t.idToken,"internal-error"),W_("undefined"!==typeof t.idToken,"internal-error"),W_("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Ib(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return W_(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await Lb(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new xb;return n&&(W_("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(W_("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(W_("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new xb,this.toJSON())}_performRefresh(){return Q_("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t,e){W_("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class Pb{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=U_(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ab(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Cb(this,this.stsTokenManager.getToken(this.auth,t));return W_(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return bb(this,t)}reload(){return Nb(this)}_assign(t){this!==t&&(W_(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Pb(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){W_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Ob(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Cb(this,yb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:E}=e;W_(y&&E,t,"internal-error");const T=xb.fromJSON(this.name,E);W_("string"===typeof y,t,"internal-error"),Mb(l,t.name),Mb(h,t.name),W_("boolean"===typeof w,t,"internal-error"),W_("boolean"===typeof _,t,"internal-error"),Mb(d,t.name),Mb(f,t.name),Mb(p,t.name),Mb(m,t.name),Mb(g,t.name),Mb(v,t.name);const I=new Pb({uid:y,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return b&&Array.isArray(b)&&(I.providerData=b.map((t=>Object.assign({},t)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new xb;r.updateFromServerResponse(e);const i=new Pb({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Ob(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Fb.type="NONE";const Ub=Fb;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t,e,n){return`firebase:${t}:${e}:${n}`}class $b{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=jb(this.userKey,r.apiKey,i),this.fullPersistenceKey=jb("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Pb._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new $b(Y_(Ub),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||Y_(Ub);const s=jb(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(s);if(e){const n=Pb._fromJSON(t,e);c!==i&&(o=n),i=c;break}}catch(Hw){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(Hw){}}))),new $b(i,t,n)):new $b(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gb(e))return"Blackberry";if(Wb(e))return"Webos";if(Hb(e))return"Safari";if((e.includes("chrome/")||qb(e))&&!e.includes("edge/"))return"Chrome";if(Kb(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Bb(t=ma()){return/firefox\//i.test(t)}function Hb(t=ma()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qb(t=ma()){return/crios\//i.test(t)}function zb(t=ma()){return/iemobile/i.test(t)}function Kb(t=ma()){return/android/i.test(t)}function Gb(t=ma()){return/blackberry/i.test(t)}function Wb(t=ma()){return/webos/i.test(t)}function Qb(t=ma()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xb(t=ma()){var e;return Qb(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Jb(){return wa()&&10===document.documentMode}function Yb(t=ma()){return Qb(t)||Kb(t)||Wb(t)||Gb(t)||/windows phone/i.test(t)||zb(t)}function Zb(){try{return!(!window||window===window.top)}catch(DL){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e=[]){let n;switch(t){case"Browser":n=Vb(ma());break;case"Worker":n=`${Vb(ma())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${au}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(DL){r(DL)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(DL){e.reverse();for(const r of e)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===DL||void 0===DL?void 0:DL.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iE(this),this.idTokenSubscription=new iE(this),this.beforeStateQueue=new eE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Y_(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await $b.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(DL){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(DL){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(DL)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W_(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(DL){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ob(t)}catch(DL){if("auth/network-request-failed"!==(null===DL||void 0===DL?void 0:DL.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Ua(t):null;return e&&W_(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&W_(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Y_(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ca("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Y_(t)||this._popupRedirectResolver;W_(e,this,"argument-error"),this.redirectPersistenceManager=await $b.create(this,[Y_(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return W_(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W_(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=tE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function rE(t){return Ua(t)}class iE{constructor(t){this.auth=t,this.observer=null,this.addObserver=xa((t=>this.observer=t))}get next(){return W_(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sE(t,e,n){const r=rE(t);W_(r._canInitEmulator,r,"emulator-config-failed"),W_(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=oE(e),{host:o,port:a}=aE(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uE()}function oE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aE(t){const e=oE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:cE(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:cE(e)}}}function cE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uE(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Q_("not implemented")}_getIdTokenResponse(t){return Q_("not implemented")}_linkToIdToken(t,e){return Q_("not implemented")}_getReauthenticationResolver(t){return Q_("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(t,e){return db(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dE(t,e){return pb(t,"POST","/v1/accounts:signInWithPassword",hb(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function fE(t,e){return pb(t,"POST","/v1/accounts:signInWithEmailLink",hb(t,e))}async function pE(t,e){return pb(t,"POST","/v1/accounts:signInWithEmailLink",hb(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends lE{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new mE(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new mE(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return dE(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fE(t,{email:this._email,oobCode:this._password});default:q_(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return hE(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pE(t,{idToken:e,email:this._email,oobCode:this._password});default:q_(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(t,e){return pb(t,"POST","/v1/accounts:signInWithIdp",hb(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="http://localhost";class yE extends lE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new yE(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):q_("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=U_(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new yE(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return gE(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,gE(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,gE(t,e)}buildRequest(){const t={requestUri:vE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Da(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(t,e){return db(t,"POST","/v1/accounts:sendVerificationCode",hb(t,e))}async function _E(t,e){return pb(t,"POST","/v1/accounts:signInWithPhoneNumber",hb(t,e))}async function bE(t,e){const n=await pb(t,"POST","/v1/accounts:signInWithPhoneNumber",hb(t,e));if(n.temporaryProof)throw vb(t,"account-exists-with-different-credential",n);return n}const EE={["USER_NOT_FOUND"]:"user-not-found"};async function TE(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return pb(t,"POST","/v1/accounts:signInWithPhoneNumber",hb(t,n),EE)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends lE{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new IE({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new IE({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return _E(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return bE(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return TE(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new IE({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kE(t){const e=Ra(La(t))["link"],n=e?Ra(La(e))["deep_link_id"]:null,r=Ra(La(t))["deep_link_id"],i=r?Ra(La(r))["link"]:null;return i||r||n||e||t}class SE{constructor(t){var e,n,r,i,s,o;const a=Ra(La(t)),c=null!==(e=a["apiKey"])&&void 0!==e?e:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=CE(null!==(r=a["mode"])&&void 0!==r?r:null);W_(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(t){const e=kE(t);try{return new SE(e)}catch(Hw){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AE{constructor(){this.providerId=AE.PROVIDER_ID}static credential(t,e){return mE._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=SE.parseLink(e);return W_(n,"argument-error"),mE._fromEmailAndCode(t,n.code,n.tenantId)}}AE.PROVIDER_ID="password",AE.EMAIL_PASSWORD_SIGN_IN_METHOD="password",AE.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class OE{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE extends OE{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class DE extends NE{constructor(){super("facebook.com")}static credential(t){return yE._fromParams({providerId:DE.PROVIDER_ID,signInMethod:DE.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return DE.credentialFromTaggedObject(t)}static credentialFromError(t){return DE.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return DE.credential(t.oauthAccessToken)}catch(Hw){return null}}}DE.FACEBOOK_SIGN_IN_METHOD="facebook.com",DE.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class RE extends NE{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return yE._fromParams({providerId:RE.PROVIDER_ID,signInMethod:RE.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return RE.credentialFromTaggedObject(t)}static credentialFromError(t){return RE.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return RE.credential(e,n)}catch(Hw){return null}}}RE.GOOGLE_SIGN_IN_METHOD="google.com",RE.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class LE extends NE{constructor(){super("github.com")}static credential(t){return yE._fromParams({providerId:LE.PROVIDER_ID,signInMethod:LE.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return LE.credentialFromTaggedObject(t)}static credentialFromError(t){return LE.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return LE.credential(t.oauthAccessToken)}catch(Hw){return null}}}LE.GITHUB_SIGN_IN_METHOD="github.com",LE.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xE extends NE{constructor(){super("twitter.com")}static credential(t,e){return yE._fromParams({providerId:xE.PROVIDER_ID,signInMethod:xE.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return xE.credentialFromTaggedObject(t)}static credentialFromError(t){return xE.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return xE.credential(e,n)}catch(Hw){return null}}}xE.TWITTER_SIGN_IN_METHOD="twitter.com",xE.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ME{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await Pb._fromIdTokenResponse(t,n,r),s=PE(n),o=new ME({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=PE(n);return new ME({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function PE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FE extends Ia{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,FE.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new FE(t,e,n,r)}}function UE(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw FE._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e,n=!1){const r=await Cb(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ME._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $E(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Cb(t,UE(r,i,e,t),n);W_(s.idToken,r,"internal-error");const o=Tb(s.idToken);W_(o,r,"internal-error");const{sub:a}=o;return W_(t.uid===a,r,"user-mismatch"),ME._forOperation(t,i,s)}catch(DL){throw"auth/user-not-found"===(null===DL||void 0===DL?void 0:DL.code)&&q_(r,"user-mismatch"),DL}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e,n=!1){const r="signIn",i=await UE(t,r,e),s=await ME._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function BE(t,e,n,r){return Ua(t).onIdTokenChanged(e,n,r)}function HE(t,e,n){return Ua(t).beforeAuthStateChanged(e,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qE(t,e){return db(t,"POST","/v2/accounts/mfaEnrollment:start",hb(t,e))}function zE(t,e){return db(t,"POST","/v2/accounts/mfaEnrollment:finalize",hb(t,e))}function KE(t,e){return db(t,"POST","/v2/accounts/mfaEnrollment:start",hb(t,e))}function GE(t,e){return db(t,"POST","/v2/accounts/mfaEnrollment:finalize",hb(t,e))}new WeakMap;const WE="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(WE,"1"),this.storage.removeItem(WE),Promise.resolve(!0)):Promise.resolve(!1)}catch(Hw){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(){const t=ma();return Hb(t)||Qb(t)}const JE=1e3,YE=10;class ZE extends QE{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=XE()&&Zb(),this.fallbackToPolling=Yb(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Jb()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,YE):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),JE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ZE.type="LOCAL";const tT=ZE;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT extends QE{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}eT.type="SESSION";const nT=eT;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new iT(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await rT(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sT(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */iT.receivers=[];class oT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=sT("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){return window}function cT(t){aT().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){return"undefined"!==typeof aT()["WorkerGlobalScope"]&&"function"===typeof aT()["importScripts"]}async function lT(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(Hw){return null}}function hT(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function dT(){return uT()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="firebaseLocalStorageDb",pT=1,mT="firebaseLocalStorage",gT="fbase_key";class vT{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function yT(t,e){return t.transaction([mT],e?"readwrite":"readonly").objectStore(mT)}function wT(){const t=indexedDB.deleteDatabase(fT);return new vT(t).toPromise()}function _T(){const t=indexedDB.open(fT,pT);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(mT,{keyPath:gT})}catch(DL){n(DL)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(mT)?e(n):(n.close(),await wT(),e(await _T()))}))}))}async function bT(t,e,n){const r=yT(t,!0).put({[gT]:e,value:n});return new vT(r).toPromise()}async function ET(t,e){const n=yT(t,!1).get(e),r=await new vT(n).toPromise();return void 0===r?null:r.value}function TT(t,e){const n=yT(t,!0).delete(e);return new vT(n).toPromise()}const IT=800,CT=3;class kT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _T()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(DL){if(e++>CT)throw DL;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=iT._getInstance(dT()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await lT(),!this.activeServiceWorker)return;this.sender=new oT(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&hT()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(Hw){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _T();return await bT(t,WE,"1"),await TT(t,WE),!0}catch(Hw){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>bT(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>ET(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>TT(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=yT(t,!1).getAll();return new vT(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),IT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}kT.type="LOCAL";const ST=kT;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t,e){return db(t,"POST","/v2/accounts/mfaSignIn:start",hb(t,e))}function OT(t,e){return db(t,"POST","/v2/accounts/mfaSignIn:finalize",hb(t,e))}function NT(t,e){return db(t,"POST","/v2/accounts/mfaSignIn:finalize",hb(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function DT(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function RT(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=z_("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",DT().appendChild(r)}))}function LT(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
LT("rcb"),new ob(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xT="recaptcha";async function MT(t,e,n){var r;const i=await n.verify();try{let s;if(W_("string"===typeof i,t,"argument-error"),W_(n.type===xT,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){W_("enroll"===e.type,t,"internal-error");const n=await qE(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{W_("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;W_(n,t,"missing-multi-factor-info");const o=await AT(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await wE(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PT{constructor(t){this.providerId=PT.PROVIDER_ID,this.auth=rE(t)}verifyPhoneNumber(t,e){return MT(this.auth,t,Ua(e))}static credential(t,e){return IE._fromVerification(t,e)}static credentialFromResult(t){const e=t;return PT.credentialFromTaggedObject(e)}static credentialFromError(t){return PT.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?IE._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function FT(t,e){return e?Y_(e):(W_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */PT.PROVIDER_ID="phone",PT.PHONE_SIGN_IN_METHOD="phone";class UT extends lE{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gE(t,this._buildIdpRequest())}_linkToIdToken(t,e){return gE(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return gE(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function jT(t){return VE(t.auth,new UT(t),t.bypassAuthState)}function $T(t){const{auth:e,user:n}=t;return W_(n,e,"internal-error"),$E(n,new UT(t),t.bypassAuthState)}async function VT(t){const{auth:e,user:n}=t;return W_(n,e,"internal-error"),jE(n,new UT(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(DL){this.reject(DL)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(DL){this.reject(DL)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return jT;case"linkViaPopup":case"linkViaRedirect":return VT;case"reauthViaPopup":case"reauthViaRedirect":return $T;default:q_(this.auth,"internal-error")}}resolve(t){X_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){X_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new ob(2e3,1e4);class qT extends BT{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,qT.currentPopupAction&&qT.currentPopupAction.cancel(),qT.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W_(t,this.auth,"internal-error"),t}async onExecution(){X_(1===this.filter.length,"Popup operations only handle one event");const t=sT();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(z_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(z_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qT.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(z_(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,HT.get())};t()}}qT.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zT="pendingRedirect",KT=new Map;class GT extends BT{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=KT.get(this.auth._key());if(!t){try{const e=await WT(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(DL){t=()=>Promise.reject(DL)}KT.set(this.auth._key(),t)}return this.bypassAuthState||KT.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function WT(t,e){const n=JT(e),r=XT(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function QT(t,e){KT.set(t._key(),e)}function XT(t){return Y_(t._redirectPersistence)}function JT(t){return jb(zT,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(t,e,n=!1){const r=rE(t),i=FT(r,e),s=new GT(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ZT=6e5;class tI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!rI(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!nI(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(z_(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ZT&&this.cachedEventUids.clear(),this.cachedEventUids.has(eI(t))}saveEventToCache(t){this.cachedEventUids.add(eI(t)),this.lastProcessedEventTime=Date.now()}}function eI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function nI({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function rI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nI(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e={}){return db(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oI=/^https?/;async function aI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iI(t);for(const n of e)try{if(cI(n))return}catch(Hw){}q_(t,"unauthorized-domain")}function cI(t){const e=eb(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!oI.test(n))return!1;if(sI.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=new ob(3e4,6e4);function lI(){const t=aT().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function hI(t){return new Promise(((e,n)=>{var r,i,s;function o(){lI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lI(),n(z_(t,"network-request-failed"))},timeout:uI.get()})}if(null===(i=null===(r=aT().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=aT().gapi)||void 0===s?void 0:s.load)){const e=LT("iframefcb");return aT()[e]=()=>{gapi.load?o():n(z_(t,"network-request-failed"))},RT(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw dI=null,t}))}let dI=null;function fI(t){return dI=dI||hI(t),dI}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new ob(5e3,15e3),mI="__/auth/iframe",gI="emulator/auth/iframe",vI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wI(t){const e=t.config;W_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ab(e,gI):`https://${t.config.authDomain}/${mI}`,r={apiKey:e.apiKey,appName:t.name,v:au},i=yI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Da(r).slice(1)}`}async function _I(t){const e=await fI(t),n=aT().gapi;return W_(n,t,"internal-error"),e.open({where:document.body,url:wI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vI,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=z_(t,"network-request-failed"),s=aT().setTimeout((()=>{r(i)}),pI.get());function o(){aT().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EI=500,TI=600,II="_blank",CI="http://localhost";class kI{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(DL){}}}function SI(t,e,n,r=EI,i=TI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ma().toLowerCase();n&&(a=qb(u)?II:n),Bb(u)&&(e=e||CI,c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(Xb(u)&&"_self"!==a)return AI(e||"",a),new kI(null);const h=window.open(e||"",a,l);W_(h,t,"popup-blocked");try{h.focus()}catch(DL){}return new kI(h)}function AI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="__/auth/handler",NI="emulator/auth/handler";function DI(t,e,n,r,i,s){W_(t.config.authDomain,t,"auth-domain-config-required"),W_(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:au,eventId:i};if(e instanceof OE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Aa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof NE){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${RI(t)}?${Da(a).slice(1)}`}function RI({config:t}){return t.emulator?ab(t,NI):`https://${t.authDomain}/${OI}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="webStorageSupport";class xI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nT,this._completeRedirectFn=YT,this._overrideRedirectResult=QT}async _openPopup(t,e,n,r){var i;X_(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=DI(t,e,n,eb(),r);return SI(t,s,sT())}async _openRedirect(t,e,n,r){return await this._originValidation(t),cT(DI(t,e,n,eb(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(X_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await _I(t),n=new tI(t);return e.register("authEvent",(e=>{W_(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(LI,{type:LI},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[LI];void 0!==i&&e(!!i),q_(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=aI(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Yb()||Hb()||Qb()}}const MI=xI;class PI{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return Q_("unexpected MultiFactorSessionType")}}}class FI extends PI{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new FI(t)}_finalizeEnroll(t,e,n){return zE(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return OT(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class UI{constructor(){}static assertion(t){return FI._fromCredential(t)}}UI.FACTOR_ID="phone";class jI{static assertionForEnrollment(t,e){return $I._fromSecret(t,e)}static assertionForSignIn(t,e){return $I._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;W_("undefined"!==typeof e.auth,"internal-error");const n=await KE(e.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return VI._fromStartTotpMfaEnrollmentResponse(n,e.auth)}}jI.FACTOR_ID="totp";class $I extends PI{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new $I(e,void 0,t)}static _fromEnrollmentId(t,e){return new $I(e,t)}async _finalizeEnroll(t,e,n){return W_("undefined"!==typeof this.secret,t,"argument-error"),GE(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){W_(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return NT(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class VI{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new VI(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(BI(t)||BI(e))&&(r=!0),r&&(BI(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),BI(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function BI(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var HI="@firebase/auth",qI="0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){W_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GI(t){nu(new ja("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((e,r)=>{W_(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),W_(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tE(t)},a=new nE(e,r,i);return tb(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),nu(new ja("auth-internal",(t=>{const e=rE(t.getProvider("auth").getImmediate());return(t=>new zI(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),lu(HI,qI,KI(t)),lu(HI,qI,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=300,QI=da("authIdTokenMaxAge")||WI;let XI=null;const JI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QI)return;const i=null===n||void 0===n?void 0:n.token;XI!==i&&(XI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YI(t=uu()){const e=ru(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Z_(t,{popupRedirectResolver:MI,persistence:[ST,tT,nT]}),r=da("authTokenSyncURL");if(r){const t=JI(r);HE(n,t,(()=>t(n.currentUser))),BE(n,(e=>t(e)))}const i=ua("auth");return i&&sE(n,`http://${i}`),n}GI("Browser");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ZI="firebasestorage.googleapis.com",tC="storageBucket",eC=12e4,nC=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rC extends Ia{constructor(t,e,n=0){super(oC(t),`Firebase Storage: ${e} (${oC(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rC.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return oC(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var iC,sC;function oC(t){return"storage/"+t}function aC(){const t="An unknown error occurred, please check the error payload for server response.";return new rC(iC.UNKNOWN,t)}function cC(){return new rC(iC.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function uC(){return new rC(iC.CANCELED,"User canceled the upload/download.")}function lC(t){return new rC(iC.INVALID_URL,"Invalid URL '"+t+"'.")}function hC(t){return new rC(iC.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dC(t){return new rC(iC.INVALID_ARGUMENT,t)}function fC(){return new rC(iC.APP_DELETED,"The Firebase app was deleted.")}function pC(t){return new rC(iC.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(iC||(iC={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mC{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=mC.makeFromUrl(t,e)}catch(DL){return new mC(t,"")}if(""===n.path)return n;throw hC(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),a={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",l=e.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${l}/${u}/b/${r}/o${h}`,"i"),f={bucket:1,path:3},p=e===ZI?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",g=new RegExp(`^https?://${p}/${r}/${m}`,"i"),v={bucket:1,path:2},y=[{regex:o,indices:a,postModify:i},{regex:d,indices:f,postModify:c},{regex:g,indices:v,postModify:c}];for(let w=0;w<y.length;w++){const e=y[w],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new mC(t,i),e.postModify(n);break}}if(null==n)throw lC(t);return n}}class gC{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function yC(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){return void 0!==t}function _C(t,e,n,r){if(r<e)throw dC(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw dC(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function EC(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(sC||(sC={}));class TC{constructor(t,e,n,r,i,s,o,a,c,u,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new IC(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===sC.NO_ERROR,i=n.getStatus();if(!e||EC(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===sC.ABORT;return void t(!1,new IC(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new IC(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());wC(t)?n(t):n()}catch(DL){r(DL)}else if(null!==i){const t=aC();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?fC():uC();r(t)}else{const t=cC();r(t)}};this.canceled_?e(!1,new IC(!1,null,!0)):this.backoffId_=vC(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&yC(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class IC{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function CC(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function kC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function SC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AC(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function OC(t,e,n,r,i,s,o=!0){const a=bC(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return SC(u,e),CC(u,n),kC(u,s),AC(u,r),new TC(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function NC(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function DC(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class RC{constructor(t,e){this._service=t,this._location=e instanceof mC?e:mC.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new RC(t,e)}get root(){const t=new mC(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return DC(this._location.path)}get storage(){return this._service}get parent(){const t=NC(this._location.path);if(null===t)return null;const e=new mC(this._location.bucket,t);return new RC(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw pC(t)}}function LC(t,e){const n=null===e||void 0===e?void 0:e[tC];return null==n?null:mC.makeFromBucketSpec(n,t)}function xC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken="string"===typeof i?i:pa(i,t.app.options.projectId))}class MC{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=ZI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eC,this._maxUploadRetryTime=nC,this._requests=new Set,this._bucket=null!=r?mC.makeFromBucketSpec(r,this._host):LC(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=mC.makeFromBucketSpec(this._url,t):this._bucket=LC(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){_C("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){_C("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new RC(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new gC(fC());{const s=OC(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const PC="@firebase/storage",FC="0.11.2",UC="storage";function jC(t=uu(),e){t=Ua(t);const n=ru(t,UC),r=n.getImmediate({identifier:e}),i=la("storage");return i&&$C(r,...i),r}function $C(t,e,n,r={}){xC(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new MC(n,r,i,e,au)}function BC(){nu(new ja(UC,VC,"PUBLIC").setMultipleInstances(!0)),lu(PC,FC,""),lu(PC,FC,"esm2017")}BC();const HC=(t,e)=>e.some((e=>t instanceof e));let qC,zC;function KC(){return qC||(qC=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GC(){return zC||(zC=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WC=new WeakMap,QC=new WeakMap,XC=new WeakMap,JC=new WeakMap,YC=new WeakMap;function ZC(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(sk(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&WC.set(e,t)})).catch((()=>{})),YC.set(e,t),e}function tk(t){if(QC.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));QC.set(t,e)}let ek={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return QC.get(t);if("objectStoreNames"===e)return t.objectStoreNames||XC.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sk(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function nk(t){ek=t(ek)}function rk(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?GC().includes(t)?function(...e){return t.apply(ok(this),e),sk(WC.get(this))}:function(...e){return sk(t.apply(ok(this),e))}:function(e,...n){const r=t.call(ok(this),e,...n);return XC.set(r,e.sort?e.sort():[e]),sk(r)}}function ik(t){return"function"===typeof t?rk(t):(t instanceof IDBTransaction&&tk(t),HC(t,KC())?new Proxy(t,ek):t)}function sk(t){if(t instanceof IDBRequest)return ZC(t);if(JC.has(t))return JC.get(t);const e=ik(t);return e!==t&&(JC.set(t,e),YC.set(e,t)),e}const ok=t=>YC.get(t);function ak(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=sk(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(sk(o.result),t.oldVersion,t.newVersion,sk(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const ck=["get","getKey","getAll","getAllKeys","count"],uk=["put","add","delete","clear"],lk=new Map;function hk(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(lk.get(e))return lk.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!ck.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return lk.set(e,s),s}nk((t=>({...t,get:(e,n,r)=>hk(e,n)||t.get(e,n,r),has:(e,n)=>!!hk(e,n)||t.has(e,n)})));const dk="@firebase/installations",fk="0.6.4",pk=1e4,mk=`w:${fk}`,gk="FIS_v2",vk="https://firebaseinstallations.googleapis.com/v1",yk=36e5,wk="installations",_k="Installations",bk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ek=new Ca(wk,_k,bk);function Tk(t){return t instanceof Ia&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik({projectId:t}){return`${vk}/projects/${t}/installations`}function Ck(t){return{token:t.token,requestStatus:2,expiresIn:Nk(t.expiresIn),creationTime:Date.now()}}async function kk(t,e){const n=await e.json(),r=n.error;return Ek.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Sk({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ak(t,{refreshToken:e}){const n=Sk(t);return n.append("Authorization",Dk(e)),n}async function Ok(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Nk(t){return Number(t.replace("s","000"))}function Dk(t){return`${gk} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ik(t),i=Sk(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:gk,appId:t.appId,sdkVersion:mk},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ok((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:Ck(t.authToken)};return e}throw await kk("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=/^[cdef][\w-]{21}$/,Pk="";function Fk(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=Uk(t);return Mk.test(n)?n:Pk}catch(Hw){return Pk}}function Uk(t){const e=xk(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new Map;function Vk(t,e){const n=jk(t);Bk(n,e),Hk(n,e)}function Bk(t,e){const n=$k.get(t);if(n)for(const r of n)r(e)}function Hk(t,e){const n=zk();n&&n.postMessage({key:t,fid:e}),Kk()}let qk=null;function zk(){return!qk&&"BroadcastChannel"in self&&(qk=new BroadcastChannel("[Firebase] FID Change"),qk.onmessage=t=>{Bk(t.data.key,t.data.fid)}),qk}function Kk(){0===$k.size&&qk&&(qk.close(),qk=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk="firebase-installations-database",Wk=1,Qk="firebase-installations-store";let Xk=null;function Jk(){return Xk||(Xk=ak(Gk,Wk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qk)}}})),Xk}async function Yk(t,e){const n=jk(t),r=await Jk(),i=r.transaction(Qk,"readwrite"),s=i.objectStore(Qk),o=await s.get(n);return await s.put(e,n),await i.done,o&&o.fid===e.fid||Vk(t,e.fid),e}async function Zk(t){const e=jk(t),n=await Jk(),r=n.transaction(Qk,"readwrite");await r.objectStore(Qk).delete(e),await r.done}async function tS(t,e){const n=jk(t),r=await Jk(),i=r.transaction(Qk,"readwrite"),s=i.objectStore(Qk),o=await s.get(n),a=e(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.done,!a||o&&o.fid===a.fid||Vk(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(t){let e;const n=await tS(t.appConfig,(n=>{const r=nS(n),i=rS(t,r);return e=i.registrationPromise,i.installationEntry}));return n.fid===Pk?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function nS(t){const e=t||{fid:Fk(),registrationStatus:0};return aS(e)}function rS(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(Ek.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=iS(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:sS(t)}:{installationEntry:e}}async function iS(t,e){try{const n=await Rk(t,e);return Yk(t.appConfig,n)}catch(DL){throw Tk(DL)&&409===DL.customData.serverCode?await Zk(t.appConfig):await Yk(t.appConfig,{fid:e.fid,registrationStatus:0}),DL}}async function sS(t){let e=await oS(t.appConfig);while(1===e.registrationStatus)await Lk(100),e=await oS(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await eS(t);return n||e}return e}function oS(t){return tS(t,(t=>{if(!t)throw Ek.create("installation-not-found");return aS(t)}))}function aS(t){return cS(t)?{fid:t.fid,registrationStatus:0}:t}function cS(t){return 1===t.registrationStatus&&t.registrationTime+pk<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS({appConfig:t,heartbeatServiceProvider:e},n){const r=lS(t,n),i=Ak(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:mk,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ok((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e=Ck(t);return e}throw await kk("Generate Auth Token",c)}function lS(t,{fid:e}){return`${Ik(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e=!1){let n;const r=await tS(t.appConfig,(r=>{if(!mS(r))throw Ek.create("not-registered");const i=r.authToken;if(!e&&gS(i))return r;if(1===i.requestStatus)return n=dS(t,e),r;{if(!navigator.onLine)throw Ek.create("app-offline");const e=yS(r);return n=pS(t,e),e}})),i=n?await n:r.authToken;return i}async function dS(t,e){let n=await fS(t.appConfig);while(1===n.authToken.requestStatus)await Lk(100),n=await fS(t.appConfig);const r=n.authToken;return 0===r.requestStatus?hS(t,e):r}function fS(t){return tS(t,(t=>{if(!mS(t))throw Ek.create("not-registered");const e=t.authToken;return wS(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function pS(t,e){try{const n=await uS(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Yk(t.appConfig,r),n}catch(DL){if(!Tk(DL)||401!==DL.customData.serverCode&&404!==DL.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Yk(t.appConfig,n)}else await Zk(t.appConfig);throw DL}}function mS(t){return void 0!==t&&2===t.registrationStatus}function gS(t){return 2===t.requestStatus&&!vS(t)}function vS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+yk}function yS(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function wS(t){return 1===t.requestStatus&&t.requestTime+pk<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(t){const e=t,{installationEntry:n,registrationPromise:r}=await eS(e);return r?r.catch(console.error):hS(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(t,e=!1){const n=t;await ES(n);const r=await hS(n,e);return r.token}async function ES(t){const{registrationPromise:e}=await eS(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function TS(t){if(!t||!t.options)throw IS("App Configuration");if(!t.name)throw IS("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw IS(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function IS(t){return Ek.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="installations",kS="installations-internal",SS=t=>{const e=t.getProvider("app").getImmediate(),n=TS(e),r=ru(e,"heartbeat"),i={app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()};return i},AS=t=>{const e=t.getProvider("app").getImmediate(),n=ru(e,CS).getImmediate(),r={getId:()=>_S(n),getToken:t=>bS(n,t)};return r};function OS(){nu(new ja(CS,SS,"PUBLIC")),nu(new ja(kS,AS,"PRIVATE"))}OS(),lu(dk,fk),lu(dk,fk,"esm2017");const NS=(t,e)=>e.some((e=>t instanceof e));let DS,RS;function LS(){return DS||(DS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xS(){return RS||(RS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const MS=new WeakMap,PS=new WeakMap,FS=new WeakMap,US=new WeakMap,jS=new WeakMap;function $S(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(KS(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&MS.set(e,t)})).catch((()=>{})),jS.set(e,t),e}function VS(t){if(PS.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));PS.set(t,e)}let BS={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return PS.get(t);if("objectStoreNames"===e)return t.objectStoreNames||FS.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return KS(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function HS(t){BS=t(BS)}function qS(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?xS().includes(t)?function(...e){return t.apply(GS(this),e),KS(MS.get(this))}:function(...e){return KS(t.apply(GS(this),e))}:function(e,...n){const r=t.call(GS(this),e,...n);return FS.set(r,e.sort?e.sort():[e]),KS(r)}}function zS(t){return"function"===typeof t?qS(t):(t instanceof IDBTransaction&&VS(t),NS(t,LS())?new Proxy(t,BS):t)}function KS(t){if(t instanceof IDBRequest)return $S(t);if(US.has(t))return US.get(t);const e=zS(t);return e!==t&&(US.set(t,e),jS.set(e,t)),e}const GS=t=>jS.get(t);function WS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=KS(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(KS(o.result),t.oldVersion,t.newVersion,KS(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}function QS(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",(()=>e())),KS(n).then((()=>{}))}const XS=["get","getKey","getAll","getAllKeys","count"],JS=["put","add","delete","clear"],YS=new Map;function ZS(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(YS.get(e))return YS.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!XS.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return YS.set(e,s),s}HS((t=>({...t,get:(e,n,r)=>ZS(e,n)||t.get(e,n,r),has:(e,n)=>!!ZS(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tA="/firebase-messaging-sw.js",eA="/firebase-cloud-messaging-push-scope",nA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",rA="https://fcmregistrations.googleapis.com/v1",iA="google.c.a.c_id",sA="google.c.a.c_l",oA="google.c.a.ts",aA="google.c.a.e";var cA,uA;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lA(t){const e=new Uint8Array(t),n=btoa(String.fromCharCode(...e));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function hA(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["DATA_MESSAGE"]=1]="DATA_MESSAGE",t[t["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(cA||(cA={})),function(t){t["PUSH_RECEIVED"]="push-received",t["NOTIFICATION_CLICKED"]="notification-clicked"}(uA||(uA={}));const dA="fcm_token_details_db",fA=5,pA="fcm_token_object_Store";async function mA(t){if("databases"in indexedDB){const t=await indexedDB.databases(),e=t.map((t=>t.name));if(!e.includes(dA))return null}let e=null;const n=await WS(dA,fA,{upgrade:async(n,r,i,s)=>{var o;if(r<2)return;if(!n.objectStoreNames.contains(pA))return;const a=s.objectStore(pA),c=await a.index("fcmSenderId").get(t);if(await a.clear(),c)if(2===r){const t=c;if(!t.auth||!t.p256dh||!t.endpoint)return;e={token:t.fcmToken,createTime:null!==(o=t.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:t.auth,p256dh:t.p256dh,endpoint:t.endpoint,swScope:t.swScope,vapidKey:"string"===typeof t.vapidKey?t.vapidKey:lA(t.vapidKey)}}}else if(3===r){const t=c;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:lA(t.auth),p256dh:lA(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:lA(t.vapidKey)}}}else if(4===r){const t=c;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:lA(t.auth),p256dh:lA(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:lA(t.vapidKey)}}}}});return n.close(),await QS(dA),await QS("fcm_vapid_details_db"),await QS("undefined"),gA(e)?e:null}function gA(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return"number"===typeof t.createTime&&t.createTime>0&&"string"===typeof t.token&&t.token.length>0&&"string"===typeof e.auth&&e.auth.length>0&&"string"===typeof e.p256dh&&e.p256dh.length>0&&"string"===typeof e.endpoint&&e.endpoint.length>0&&"string"===typeof e.swScope&&e.swScope.length>0&&"string"===typeof e.vapidKey&&e.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="firebase-messaging-database",yA=1,wA="firebase-messaging-store";let _A=null;function bA(){return _A||(_A=WS(vA,yA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wA)}}})),_A}async function EA(t){const e=CA(t),n=await bA(),r=await n.transaction(wA).objectStore(wA).get(e);if(r)return r;{const e=await mA(t.appConfig.senderId);if(e)return await TA(t,e),e}}async function TA(t,e){const n=CA(t),r=await bA(),i=r.transaction(wA,"readwrite");return await i.objectStore(wA).put(e,n),await i.done,e}async function IA(t){const e=CA(t),n=await bA(),r=n.transaction(wA,"readwrite");await r.objectStore(wA).delete(e),await r.done}function CA({appConfig:t}){return t.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},SA=new Ca("messaging","Messaging",kA);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function AA(t,e){const n=await RA(t),r=LA(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{const e=await fetch(DA(t.appConfig),i);s=await e.json()}catch(o){throw SA.create("token-subscribe-failed",{errorInfo:null===o||void 0===o?void 0:o.toString()})}if(s.error){const t=s.error.message;throw SA.create("token-subscribe-failed",{errorInfo:t})}if(!s.token)throw SA.create("token-subscribe-no-token");return s.token}async function OA(t,e){const n=await RA(t),r=LA(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{const n=await fetch(`${DA(t.appConfig)}/${e.token}`,i);s=await n.json()}catch(o){throw SA.create("token-update-failed",{errorInfo:null===o||void 0===o?void 0:o.toString()})}if(s.error){const t=s.error.message;throw SA.create("token-update-failed",{errorInfo:t})}if(!s.token)throw SA.create("token-update-no-token");return s.token}async function NA(t,e){const n=await RA(t),r={method:"DELETE",headers:n};try{const n=await fetch(`${DA(t.appConfig)}/${e}`,r),i=await n.json();if(i.error){const t=i.error.message;throw SA.create("token-unsubscribe-failed",{errorInfo:t})}}catch(i){throw SA.create("token-unsubscribe-failed",{errorInfo:null===i||void 0===i?void 0:i.toString()})}}function DA({projectId:t}){return`${rA}/projects/${t}/registrations`}async function RA({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function LA({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==nA&&(i.web.applicationPubKey=r),i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=6048e5;async function MA(t){const e=await jA(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:lA(e.getKey("auth")),p256dh:lA(e.getKey("p256dh"))},r=await EA(t.firebaseDependencies);if(r){if($A(r.subscriptionOptions,n))return Date.now()>=r.createTime+xA?FA(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await NA(t.firebaseDependencies,r.token)}catch(DL){console.warn(DL)}return UA(t.firebaseDependencies,n)}return UA(t.firebaseDependencies,n)}async function PA(t){const e=await EA(t.firebaseDependencies);e&&(await NA(t.firebaseDependencies,e.token),await IA(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function FA(t,e){try{const n=await OA(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await TA(t.firebaseDependencies,r),n}catch(DL){throw await PA(t),DL}}async function UA(t,e){const n=await AA(t,e),r={token:n,createTime:Date.now(),subscriptionOptions:e};return await TA(t,r),r.token}async function jA(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:hA(e)})}function $A(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return BA(e,t),HA(e,t),qA(e,t),e}function BA(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function HA(t,e){e.data&&(t.data=e.data)}function qA(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(null===(n=e.notification)||void 0===n?void 0:n.click_action))return;t.fcmOptions={};const a=null!==(i=null===(r=e.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==i?i:null===(s=e.notification)||void 0===s?void 0:s.click_action;a&&(t.fcmOptions.link=a);const c=null===(o=e.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){return"object"===typeof t&&!!t&&iA in t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){if(!t||!t.options)throw WA("App Configuration Object");if(!t.name)throw WA("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw WA(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function WA(t){return SA.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */KA("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),KA("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class QA{constructor(t,e,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=GA(t);this.firebaseDependencies={app:t,appConfig:r,installations:e,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t){try{t.swRegistration=await navigator.serviceWorker.register(tA,{scope:eA}),t.swRegistration.update().catch((()=>{}))}catch(DL){throw SA.create("failed-service-worker-registration",{browserErrorMessage:null===DL||void 0===DL?void 0:DL.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e){if(e||t.swRegistration||await XA(t),e||!t.swRegistration){if(!(e instanceof ServiceWorkerRegistration))throw SA.create("invalid-sw-registration");t.swRegistration=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=nA)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t,e){if(!navigator)throw SA.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw SA.create("permission-blocked");return await YA(t,null===e||void 0===e?void 0:e.vapidKey),await JA(t,null===e||void 0===e?void 0:e.serviceWorkerRegistration),MA(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(t,e,n){const r=eO(e),i=await t.firebaseDependencies.analyticsProvider.get();i.logEvent(r,{message_id:n[iA],message_name:n[sA],message_time:n[oA],message_device_time:Math.floor(Date.now()/1e3)})}function eO(t){switch(t){case uA.NOTIFICATION_CLICKED:return"notification_open";case uA.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===uA.PUSH_RECEIVED&&("function"===typeof t.onMessageHandler?t.onMessageHandler(VA(n)):t.onMessageHandler.next(VA(n)));const r=n.data;zA(r)&&"1"===r[aA]&&await tO(t,n.messageType,r)}const rO="@firebase/messaging",iO="0.12.4",sO=t=>{const e=new QA(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(t=>nO(e,t))),e},oO=t=>{const e=t.getProvider("messaging").getImmediate(),n={getToken:t=>ZA(e,t)};return n};function aO(){nu(new ja("messaging",sO,"PUBLIC")),nu(new ja("messaging-internal",oO,"PRIVATE")),lu(rO,iO),lu(rO,iO,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(){try{await ba()}catch(DL){return!1}return"undefined"!==typeof window&&_a()&&Ea()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uO(t=uu()){return cO().then((t=>{if(!t)throw SA.create("unsupported-browser")}),(t=>{throw SA.create("indexed-db-unsupported")})),ru(Ua(t),"messaging").getImmediate()}aO();const lO={apiKey:"AIzaSyA_gY_T3ZX1zYKYSB5gDjEjX8gUaZhw86E",authDomain:"rspnd-15b3a.firebaseapp.com",projectId:"rspnd-15b3a",storageBucket:"rspnd-15b3a.appspot.com",messagingSenderId:"204698056949",appId:"1:204698056949:web:5ac02c5b9fee4a4fdfedbc"},hO=cu(lO),dO=p_(hO);YI(),uO(hO),jC();var fO,pO={data(){return{tenant:null}},methods:{async initiate(){this.getTenant()},getTenant(){x_(l_(dO,"tenants","DirNZfLx0KQVFp0g7f93"),(t=>{this.tenant={...t.data(),id:t.id}}))}},created(){this.initiate()}},mO=pO,gO=n(1),vO=(0,gO.Z)(mO,Qo,Xo,!1,null,null,null),yO=vO.exports,wO=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function _O(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var r=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&fO.then((function(){wO()?(TO(t,r,n),navigator.serviceWorker.ready.then((function(t){r("ready",t)})).catch((function(t){return bO(r,t)}))):(EO(t,r,n),navigator.serviceWorker.ready.then((function(t){r("ready",t)})).catch((function(t){return bO(r,t)})))}))}function bO(t,e){navigator.onLine||t("offline"),t("error",e)}function EO(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return bO(e,t)}))}function TO(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),IO()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),IO()):EO(t,e,n)})).catch((function(t){return bO(e,t)}))}function IO(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return bO(emit,t)}))}function CO(t,e){for(var n in e)t[n]=e[n];return t}"undefined"!==typeof window&&(fO="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}}),_O("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var kO=/[!'()*]/g,SO=function(t){return"%"+t.charCodeAt(0).toString(16)},AO=/%2C/g,OO=function(t){return encodeURIComponent(t).replace(kO,SO).replace(AO,",")};function NO(t){try{return decodeURIComponent(t)}catch(e){0}return t}function DO(t,e,n){void 0===e&&(e={});var r,i=n||LO;try{r=i(t||"")}catch(DL){r={}}for(var s in e){var o=e[s];r[s]=Array.isArray(o)?o.map(RO):RO(o)}return r}var RO=function(t){return null==t||"object"===typeof t?t:String(t)};function LO(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=NO(n.shift()),i=n.length>0?NO(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function xO(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return OO(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(OO(e)):r.push(OO(e)+"="+OO(t)))})),r.join("&")}return OO(e)+"="+OO(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var MO=/\/?$/;function PO(t,e,n,r){var i=r&&r.options.stringifyQuery,s=e.query||{};try{s=FO(s)}catch(DL){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:$O(e,i),matched:t?jO(t):[]};return n&&(o.redirectedFrom=$O(n,i)),Object.freeze(o)}function FO(t){if(Array.isArray(t))return t.map(FO);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=FO(t[n]);return e}return t}var UO=PO(null,{path:"/"});function jO(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function $O(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var s=e||xO;return(n||"/")+s(r)+i}function VO(t,e,n){return e===UO?t===e:!!e&&(t.path&&e.path?t.path.replace(MO,"")===e.path.replace(MO,"")&&(n||t.hash===e.hash&&BO(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&BO(t.query,e.query)&&BO(t.params,e.params))))}function BO(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var s=t[n],o=r[i];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?BO(s,a):String(s)===String(a)}))}function HO(t,e){return 0===t.path.replace(MO,"/").indexOf(e.path.replace(MO,"/"))&&(!e.hash||t.hash===e.hash)&&qO(t.query,e.query)}function qO(t,e){for(var n in e)if(!(n in t))return!1;return!0}function zO(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var KO={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,i=e.parent,s=e.data;s.routerView=!0;var o=i.$createElement,a=n.name,c=i.$route,u=i._routerViewCache||(i._routerViewCache={}),l=0,h=!1;while(i&&i._routerRoot!==i){var d=i.$vnode?i.$vnode.data:{};d.routerView&&l++,d.keepAlive&&i._directInactive&&i._inactive&&(h=!0),i=i.$parent}if(s.routerViewDepth=l,h){var f=u[a],p=f&&f.component;return p?(f.configProps&&GO(p,s,f.route,f.configProps),o(p,s,r)):o()}var m=c.matched[l],g=m&&m.components[a];if(!m||!g)return u[a]=null,o();u[a]={component:g},s.registerRouteInstance=function(t,e){var n=m.instances[a];(e&&n!==t||!e&&n===t)&&(m.instances[a]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[a]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[a]&&(m.instances[a]=t.componentInstance),zO(c)};var v=m.props&&m.props[a];return v&&(CO(u[a],{route:c,configProps:v}),GO(g,s,c,v)),o(g,s,r)}};function GO(t,e,n,r){var i=e.props=WO(n,r);if(i){i=e.props=CO({},i);var s=e.attrs=e.attrs||{};for(var o in i)t.props&&o in t.props||(s[o]=i[o],delete i[o])}}function WO(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function QO(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function XO(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function JO(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var YO=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},ZO=yN,tN=sN,eN=oN,nN=uN,rN=vN,iN=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function sN(t,e){var n,r=[],i=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=iN.exec(t))){var c=n[0],u=n[1],l=n.index;if(o+=t.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=t[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,w="+"===g||"*"===g,_="?"===g||"*"===g,b=n[2]||a,E=p||m;r.push({name:f||i++,prefix:d||"",delimiter:b,optional:_,repeat:w,partial:y,asterisk:!!v,pattern:E?hN(E):v?".*":"[^"+lN(b)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&r.push(o),r}function oN(t,e){return uN(sN(t,e),e)}function aN(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function cN(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function uN(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",fN(e)));return function(e,r){for(var i="",s=e||{},o=r||{},a=o.pretty?aN:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(YO(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?cN(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function lN(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function hN(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function dN(t,e){return t.keys=e,t}function fN(t){return t&&t.sensitive?"":"i"}function pN(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return dN(t,e)}function mN(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(yN(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",fN(n));return dN(s,e)}function gN(t,e,n){return vN(sN(t,n),e,n)}function vN(t,e,n){YO(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=lN(a);else{var c=lN(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=lN(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",dN(new RegExp("^"+s,fN(n)),e)}function yN(t,e,n){return YO(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?pN(t,e):YO(t)?mN(t,e,n):gN(t,e,n)}ZO.parse=tN,ZO.compile=eN,ZO.tokensToFunction=nN,ZO.tokensToRegExp=rN;var wN=Object.create(null);function _N(t,e,n){e=e||{};try{var r=wN[t]||(wN[t]=ZO.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(DL){return""}finally{delete e[0]}}function bN(t,e,n,r){var i="string"===typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){i=CO({},t);var s=i.params;return s&&"object"===typeof s&&(i.params=CO({},s)),i}if(!i.path&&i.params&&e){i=CO({},i),i._normalized=!0;var o=CO(CO({},e.params),i.params);if(e.name)i.name=e.name,i.params=o;else if(e.matched.length){var a=e.matched[e.matched.length-1].path;i.path=_N(a,o,"path "+e.path)}else 0;return i}var c=XO(i.path||""),u=e&&e.path||"/",l=c.path?QO(c.path,u,n||i.append):u,h=DO(c.query,i.query,r&&r.options.parseQuery),d=i.hash||c.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:l,query:h,hash:d}}var EN,TN=[String,Object],IN=[String,Array],CN=function(){},kN={name:"RouterLink",props:{to:{type:TN,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:IN,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,i=n.resolve(this.to,r,this.append),s=i.location,o=i.route,a=i.href,c={},u=n.options.linkActiveClass,l=n.options.linkExactActiveClass,h=null==u?"router-link-active":u,d=null==l?"router-link-exact-active":l,f=null==this.activeClass?h:this.activeClass,p=null==this.exactActiveClass?d:this.exactActiveClass,m=o.redirectedFrom?PO(null,bN(o.redirectedFrom),null,n):o;c[p]=VO(r,m,this.exactPath),c[f]=this.exact||this.exactPath?c[p]:HO(r,m);var g=c[p]?this.ariaCurrentValue:null,v=function(t){SN(t)&&(e.replace?n.replace(s,CN):n.push(s,CN))},y={click:SN};Array.isArray(this.event)?this.event.forEach((function(t){y[t]=v})):y[this.event]=v;var w={class:c},_=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:a,route:o,navigate:v,isActive:c[f],isExactActive:c[p]});if(_){if(1===_.length)return _[0];if(_.length>1||!_.length)return 0===_.length?t():t("span",{},_)}if("a"===this.tag)w.on=y,w.attrs={href:a,"aria-current":g};else{var b=AN(this.$slots.default);if(b){b.isStatic=!1;var E=b.data=CO({},b.data);for(var T in E.on=E.on||{},E.on){var I=E.on[T];T in y&&(E.on[T]=Array.isArray(I)?I:[I])}for(var C in y)C in E.on?E.on[C].push(y[C]):E.on[C]=v;var k=b.data.attrs=CO({},b.data.attrs);k.href=a,k["aria-current"]=g}else w.on=y}return t(this.tag,w,this.$slots.default)}};function SN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function AN(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=AN(e.children)))return e}}function ON(t){if(!ON.installed||EN!==t){ON.installed=!0,EN=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",KO),t.component("RouterLink",kN);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var NN="undefined"!==typeof window;function DN(t,e,n,r,i){var s=e||[],o=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){RN(s,o,a,t,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function RN(t,e,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=xN(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:LN(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?JO(s+"/"+r.path):void 0;RN(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};RN(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function LN(t,e){var n=ZO(t,[],e);return n}function xN(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:JO(e.path+"/"+t)}function MN(t,e){var n=DN(t),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(t){DN(t,r,i,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;DN([e||t],r,i,s,n),n&&n.alias.length&&DN(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,s,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,o){var a=bN(t,n,!1,e),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=_N(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(PN(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(PO(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var p=FN(c,t),m=_N(p,f,'redirect route with path "'+p+'"');return u({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=_N(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return e.params=i.params,d(o,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):PO(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function PN(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?NO(r[i]):r[i])}return!0}function FN(t,e){return QO(t,e.parent?e.parent.path:"/",!0)}var UN=NN&&window.performance&&window.performance.now?window.performance:Date;function jN(){return UN.now().toFixed(3)}var $N=jN();function VN(){return $N}function BN(t){return $N=t}var HN=Object.create(null);function qN(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=CO({},window.history.state);return n.key=VN(),window.history.replaceState(n,"",e),window.addEventListener("popstate",GN),function(){window.removeEventListener("popstate",GN)}}function zN(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var s=WN(),o=i.call(t,e,n,r?s:null);o&&("function"===typeof o.then?o.then((function(t){eD(t,s)})).catch((function(t){0})):eD(o,s))}))}}function KN(){var t=VN();t&&(HN[t]={x:window.pageXOffset,y:window.pageYOffset})}function GN(t){KN(),t.state&&t.state.key&&BN(t.state.key)}function WN(){var t=VN();if(t)return HN[t]}function QN(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function XN(t){return ZN(t.x)||ZN(t.y)}function JN(t){return{x:ZN(t.x)?t.x:window.pageXOffset,y:ZN(t.y)?t.y:window.pageYOffset}}function YN(t){return{x:ZN(t.x)?t.x:0,y:ZN(t.y)?t.y:0}}function ZN(t){return"number"===typeof t}var tD=/^#\d/;function eD(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=tD.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=YN(i),e=QN(r,i)}else XN(t)&&(e=JN(t))}else n&&XN(t)&&(e=JN(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var nD=NN&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function rD(t,e){KN();var n=window.history;try{if(e){var r=CO({},n.state);r.key=VN(),n.replaceState(r,"",t)}else n.pushState({key:BN(jN())},"",t)}catch(DL){window.location[e?"replace":"assign"](t)}}function iD(t){rD(t,!0)}var sD={redirected:2,aborted:4,cancelled:8,duplicated:16};function oD(t,e){return lD(t,e,sD.redirected,'Redirected when going from "'+t.fullPath+'" to "'+dD(e)+'" via a navigation guard.')}function aD(t,e){var n=lD(t,e,sD.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function cD(t,e){return lD(t,e,sD.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function uD(t,e){return lD(t,e,sD.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function lD(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var hD=["params","query","hash"];function dD(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return hD.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function fD(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function pD(t,e){return fD(t)&&t._isRouter&&(null==e||t.type===e)}function mD(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}function gD(t){return function(e,n,r){var i=!1,s=0,o=null;vD(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,s++;var c,u=bD((function(e){_D(e)&&(e=e.default),t.resolved="function"===typeof e?e:EN.extend(e),n.components[a]=e,s--,s<=0&&r()})),l=bD((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=fD(t)?t:new Error(e),r(o))}));try{c=t(u,l)}catch(DL){l(DL)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function vD(t,e){return yD(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function yD(t){return Array.prototype.concat.apply([],t)}var wD="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function _D(t){return t.__esModule||wD&&"Module"===t[Symbol.toStringTag]}function bD(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var ED=function(t,e){this.router=t,this.base=TD(e),this.current=UO,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function TD(t){if(!t)if(NN){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ID(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function CD(t,e,n,r){var i=vD(t,(function(t,r,i,s){var o=kD(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,i,s)})):n(o,r,i,s)}));return yD(r?i.reverse():i)}function kD(t,e){return"function"!==typeof t&&(t=EN.extend(t)),t.options[e]}function SD(t){return CD(t,"beforeRouteLeave",OD,!0)}function AD(t){return CD(t,"beforeRouteUpdate",OD)}function OD(t,e){if(e)return function(){return t.apply(e,arguments)}}function ND(t){return CD(t,"beforeRouteEnter",(function(t,e,n,r){return DD(t,n,r)}))}function DD(t,e,n){return function(r,i,s){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}ED.prototype.listen=function(t){this.cb=t},ED.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ED.prototype.onError=function(t){this.errorCbs.push(t)},ED.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(DL){throw this.errorCbs.forEach((function(e){e(DL)})),DL}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(pD(t,sD.redirected)&&s===UO||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},ED.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var s=function(t){!pD(t)&&fD(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=i.matched.length-1;if(VO(t,i)&&o===a&&t.matched[o]===i.matched[a])return this.ensureURL(),t.hash&&zN(this.router,i,t,!1),s(aD(i,t));var c=ID(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(SD(l),this.router.beforeHooks,AD(u),h.map((function(t){return t.beforeEnter})),gD(h)),f=function(e,n){if(r.pending!==t)return s(cD(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),s(uD(i,t))):fD(e)?(r.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(oD(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(DL){s(DL)}};mD(d,f,(function(){var n=ND(h),o=n.concat(r.router.resolveHooks);mD(o,f,(function(){if(r.pending!==t)return s(cD(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){zO(t)}))}))}))},ED.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},ED.prototype.setupListeners=function(){},ED.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=UO,this.pending=null};var RD=function(t){function e(e,n){t.call(this,e,n),this._startLocation=LD(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=nD&&n;r&&this.listeners.push(qN());var i=function(){var n=t.current,i=LD(t.base);t.current===UO&&i===t._startLocation||t.transitionTo(i,(function(t){r&&zN(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){rD(JO(r.base+t.fullPath)),zN(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){iD(JO(r.base+t.fullPath)),zN(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(LD(this.base)!==this.current.fullPath){var e=JO(this.base+this.current.fullPath);t?rD(e):iD(e)}},e.prototype.getCurrentLocation=function(){return LD(this.base)},e}(ED);function LD(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(JO(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var xD=function(t){function e(e,n,r){t.call(this,e,n),r&&MD(this.base)||PD()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=nD&&n;r&&this.listeners.push(qN());var i=function(){var e=t.current;PD()&&t.transitionTo(FD(),(function(n){r&&zN(t.router,n,e,!0),nD||$D(n.fullPath)}))},s=nD?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){jD(t.fullPath),zN(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){$D(t.fullPath),zN(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;FD()!==e&&(t?jD(e):$D(e))},e.prototype.getCurrentLocation=function(){return FD()},e}(ED);function MD(t){var e=LD(t);if(!/^\/#/.test(e))return window.location.replace(JO(t+"/#"+e)),!0}function PD(){var t=FD();return"/"===t.charAt(0)||($D("/"+t),!1)}function FD(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function UD(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function jD(t){nD?rD(UD(t)):window.location.hash=t}function $D(t){nD?iD(UD(t)):window.location.replace(UD(t))}var VD=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){pD(t,sD.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ED),BD=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=MN(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!nD&&!1!==t.fallback,this.fallback&&(e="hash"),NN||(e="abstract"),this.mode=e,e){case"history":this.history=new RD(this,t.base);break;case"hash":this.history=new xD(this,t.base,this.fallback);break;case"abstract":this.history=new VD(this,t.base);break;default:0}},HD={currentRoute:{configurable:!0}};BD.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},HD.currentRoute.get=function(){return this.history&&this.history.current},BD.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof RD||n instanceof xD){var r=function(t){var r=n.current,i=e.options.scrollBehavior,s=nD&&i;s&&"fullPath"in t&&zN(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},BD.prototype.beforeEach=function(t){return zD(this.beforeHooks,t)},BD.prototype.beforeResolve=function(t){return zD(this.resolveHooks,t)},BD.prototype.afterEach=function(t){return zD(this.afterHooks,t)},BD.prototype.onReady=function(t,e){this.history.onReady(t,e)},BD.prototype.onError=function(t){this.history.onError(t)},BD.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},BD.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},BD.prototype.go=function(t){this.history.go(t)},BD.prototype.back=function(){this.go(-1)},BD.prototype.forward=function(){this.go(1)},BD.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},BD.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=bN(t,e,n,this),i=this.match(r,e),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=KD(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},BD.prototype.getRoutes=function(){return this.matcher.getRoutes()},BD.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==UO&&this.history.transitionTo(this.history.getCurrentLocation())},BD.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==UO&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(BD.prototype,HD);var qD=BD;function zD(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function KD(t,e,n){var r="hash"===n?"#"+e:e;return t?JO(t+"/"+r):r}BD.install=ON,BD.version="3.6.5",BD.isNavigationFailure=pD,BD.NavigationFailureType=sD,BD.START_LOCATION=UO,NN&&window.Vue&&window.Vue.use(BD);var GD=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},WD=[],QD=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._m(0),e("h3",[t._v("Installed CLI Plugins")]),t._m(1),e("h3",[t._v("Essential Links")]),t._m(2),e("h3",[t._v("Ecosystem")]),t._m(3)])},XD=[function(){var t=this,e=t._self._c;return e("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),e("br"),t._v(" check out the "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[t._v("pwa")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),e("li",[e("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],JD={name:"HelloWorld",props:{msg:String}},YD=JD,ZD=(0,gO.Z)(YD,QD,XD,!1,null,"54bf1b84",null),tR=ZD.exports,eR={name:"HomeView",components:{HelloWorld:tR}},nR=eR,rR=(0,gO.Z)(nR,GD,WD,!1,null,null,null),iR=rR.exports;Wr.use(qD);const sR=[{path:"/",name:"home",component:iR},{path:"/about",name:"about",component:function(){return Promise.resolve().then(n.bind(n,507))}}],oR=new qD({mode:"history",base:"/",routes:sR});var aR=oR;
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function cR(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var uR="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},lR=uR.__VUE_DEVTOOLS_GLOBAL_HOOK__;function hR(t){lR&&(t._devtoolHook=lR,lR.emit("vuex:init",t),lR.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){lR.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){lR.emit("vuex:action",t,e)}),{prepend:!0}))}function dR(t,e){return t.filter(e)[0]}function fR(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=dR(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=fR(t[n],e)})),r}function pR(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function mR(t){return null!==t&&"object"===typeof t}function gR(t){return t&&"function"===typeof t.then}function vR(t,e){return function(){return t(e)}}var yR=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},wR={namespaced:{configurable:!0}};wR.namespaced.get=function(){return!!this._rawModule.namespaced},yR.prototype.addChild=function(t,e){this._children[t]=e},yR.prototype.removeChild=function(t){delete this._children[t]},yR.prototype.getChild=function(t){return this._children[t]},yR.prototype.hasChild=function(t){return t in this._children},yR.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},yR.prototype.forEachChild=function(t){pR(this._children,t)},yR.prototype.forEachGetter=function(t){this._rawModule.getters&&pR(this._rawModule.getters,t)},yR.prototype.forEachAction=function(t){this._rawModule.actions&&pR(this._rawModule.actions,t)},yR.prototype.forEachMutation=function(t){this._rawModule.mutations&&pR(this._rawModule.mutations,t)},Object.defineProperties(yR.prototype,wR);var _R=function(t){this.register([],t,!1)};function bR(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;bR(t.concat(r),e.getChild(r),n.modules[r])}}_R.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},_R.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},_R.prototype.update=function(t){bR([],this.root,t)},_R.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new yR(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&pR(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},_R.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},_R.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var ER;var TR=function(t){var e=this;void 0===t&&(t={}),!ER&&"undefined"!==typeof window&&window.Vue&&FR(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new _R(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new ER,this._makeLocalGettersCache=Object.create(null);var i=this,s=this,o=s.dispatch,a=s.commit;this.dispatch=function(t,e){return o.call(i,t,e)},this.commit=function(t,e,n){return a.call(i,t,e,n)},this.strict=r;var c=this._modules.root.state;AR(this,c,[],this._modules.root),SR(this,c),n.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:ER.config.devtools;u&&hR(this)},IR={state:{configurable:!0}};function CR(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function kR(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;AR(t,n,[],t._modules.root,!0),SR(t,n,e)}function SR(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};pR(i,(function(e,n){s[n]=vR(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=ER.config.silent;ER.config.silent=!0,t._vm=new ER({data:{$$state:e},computed:s}),ER.config.silent=o,t.strict&&xR(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),ER.nextTick((function(){return r.$destroy()})))}function AR(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=MR(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){ER.set(a,c,r.state)}))}var u=r.context=OR(t,o,n);r.forEachMutation((function(e,n){var r=o+n;DR(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;RR(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;LR(t,r,e,u)})),r.forEachChild((function(r,s){AR(t,e,n.concat(s),r,i)}))}function OR(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=PR(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=PR(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return NR(t,e)}},state:{get:function(){return MR(t.state,n)}}}),i}function NR(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function DR(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function RR(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return gR(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function LR(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function xR(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function MR(t,e){return e.reduce((function(t,e){return t[e]}),t)}function PR(t,e,n){return mR(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function FR(t){ER&&t===ER||(ER=t,cR(ER))}IR.state.get=function(){return this._vm._data.$$state},IR.state.set=function(t){0},TR.prototype.commit=function(t,e,n){var r=this,i=PR(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},TR.prototype.dispatch=function(t,e){var n=this,r=PR(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(DL){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(DL){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(DL){0}e(t)}))}))}},TR.prototype.subscribe=function(t,e){return CR(t,this._subscribers,e)},TR.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return CR(n,this._actionSubscribers,e)},TR.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},TR.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},TR.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),AR(this,this.state,t,this._modules.get(t),n.preserveState),SR(this,this.state)},TR.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=MR(e.state,t.slice(0,-1));ER.delete(n,t[t.length-1])})),kR(this)},TR.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},TR.prototype.hotUpdate=function(t){this._modules.update(t),kR(this,!0)},TR.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(TR.prototype,IR);var UR=zR((function(t,e){var n={};return HR(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=KR(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),jR=zR((function(t,e){var n={};return HR(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=KR(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),$R=zR((function(t,e){var n={};return HR(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||KR(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),VR=zR((function(t,e){var n={};return HR(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=KR(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),BR=function(t){return{mapState:UR.bind(null,t),mapGetters:$R.bind(null,t),mapMutations:jR.bind(null,t),mapActions:VR.bind(null,t)}};function HR(t){return qR(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function qR(t){return Array.isArray(t)||mR(t)}function zR(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function KR(t,e,n){var r=t._modulesNamespaceMap[n];return r}function GR(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var c=t.logActions;void 0===c&&(c=!0);var u=t.logger;return void 0===u&&(u=console),function(t){var l=fR(t.state);"undefined"!==typeof u&&(a&&t.subscribe((function(t,s){var o=fR(s);if(n(t,l,o)){var a=XR(),c=i(t),h="mutation "+t.type+a;WR(u,h,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",r(l)),u.log("%c mutation","color: #03A9F4; font-weight: bold",c),u.log("%c next state","color: #4CAF50; font-weight: bold",r(o)),QR(u)}l=o})),c&&t.subscribeAction((function(t,n){if(s(t,n)){var r=XR(),i=o(t),a="action "+t.type+r;WR(u,a,e),u.log("%c action","color: #03A9F4; font-weight: bold",i),QR(u)}})))}}function WR(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(DL){t.log(e)}}function QR(t){try{t.groupEnd()}catch(DL){t.log("—— log end ——")}}function XR(){var t=new Date;return" @ "+YR(t.getHours(),2)+":"+YR(t.getMinutes(),2)+":"+YR(t.getSeconds(),2)+"."+YR(t.getMilliseconds(),3)}function JR(t,e){return new Array(e+1).join(t)}function YR(t,e){return JR("0",e-t.toString().length)+t}var ZR={Store:TR,install:FR,version:"3.6.2",mapState:UR,mapMutations:jR,mapGetters:$R,mapActions:VR,createNamespacedHelpers:BR,createLogger:GR},tL=ZR;Wr.use(tL);var eL=new tL.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});n(765);function nL(t,e){return t.__proto__=e,t}
/**
  * vue-custom-element v3.3.0
  * (c) 2021 Karol Fabjańczuk
  * @license MIT
  */
Object.setPrototypeOf=Object.setPrototypeOf||nL;nL.bind(Object);function rL(){return"undefined"!==typeof Symbol&&"undefined"!==typeof Reflect&&"undefined"!==typeof Proxy&&!Object.isSealed(Proxy)}var iL=rL(),sL=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function oL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function aL(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function cL(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function uL(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}function lL(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!==typeof customElements){if(iL){var n=function(t){function n(t){var e;oL(this,n);var r=aL(this,(n.__proto__||Object.getPrototypeOf(n)).call(this)),s=t?HTMLElement.call(t):r;return i.call(s),e=s,aL(r,e)}return cL(n,t),sL(n,null,[{key:"observedAttributes",get:function(){return e.observedAttributes||[]}}]),n}(uL);return n.prototype.connectedCallback=s,n.prototype.disconnectedCallback=o,n.prototype.attributeChangedCallback=a,c(t,n),n}var r=function(t){var e=t?HTMLElement.call(t):this;return i.call(e),e};return r.observedAttributes=e.observedAttributes||[],r.prototype=Object.create(HTMLElement.prototype,{constructor:{configurable:!0,writable:!0,value:r}}),r.prototype.connectedCallback=s,r.prototype.disconnectedCallback=o,r.prototype.attributeChangedCallback=a,c(t,r),r}function i(){!0===e.shadow&&HTMLElement.prototype.attachShadow&&this.attachShadow({mode:"open"}),"function"===typeof e.constructorCallback&&e.constructorCallback.call(this)}function s(){"function"===typeof e.connectedCallback&&e.connectedCallback.call(this)}function o(){"function"===typeof e.disconnectedCallback&&e.disconnectedCallback.call(this)}function a(t,n,r){"function"===typeof e.attributeChangedCallback&&e.attributeChangedCallback.call(this,t,n,r)}function c(t,e){var n=customElements.get(t);return"undefined"!==typeof n?n:customElements.define(t,e)}}Object.setPrototypeOf(uL.prototype,HTMLElement.prototype),Object.setPrototypeOf(uL,HTMLElement);var hL=/-(\w)/g,dL=function(t){return t.replace(hL,(function(t,e){return e?e.toUpperCase():""}))},fL=/([^-])([A-Z])/g,pL=function(t){return t.replace(fL,"$1-$2").replace(fL,"$1-$2").toLowerCase()};function mL(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}var gL="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function vL(t,e){if(null===t||void 0===t)return e!==Boolean&&void 0;var n=t,r=["true","false"].indexOf(t)>-1,i=parseFloat(n,10),s=!isNaN(i)&&isFinite(n)&&"string"===typeof n&&!n.match(/^0+[^.]\d*$/g);return e&&e!==Boolean&&("undefined"===typeof n?"undefined":gL(n))!==e?n=e(t):r||e===Boolean?n=""===n||("true"===n||!0===n):s&&(n=i),n}function yL(t,e){if(t&&t.length)t.forEach((function(t){var n=dL(t);-1===e.camelCase.indexOf(n)&&e.camelCase.push(n)}));else if(t&&"object"===("undefined"===typeof t?"undefined":gL(t)))for(var n in t){var r=dL(n);-1===e.camelCase.indexOf(r)&&e.camelCase.push(r),t[r]&&t[r].type&&(e.types[n]=[].concat(t[r].type)[0])}}function wL(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={camelCase:[],hyphenate:[],types:{}};if(t.mixins&&t.mixins.forEach((function(t){yL(t.props,e)})),t.extends&&t.extends.props){var n=t.extends.props;yL(n,e)}return yL(t.props,e),e.camelCase.forEach((function(t){e.hyphenate.push(pL(t))})),e}function _L(t,e){e.camelCase.forEach((function(n,r){Object.defineProperty(t,n,{get:function(){return this.__vue_custom_element__[n]},set:function(t){if("object"!==("undefined"===typeof t?"undefined":gL(t))&&"function"!==typeof t||!this.__vue_custom_element__){var n=e.types[e.camelCase[r]];this.setAttribute(e.hyphenate[r],vL(t,n))}else{var i=e.camelCase[r];this.__vue_custom_element__[i]=t}}})}))}function bL(t,e,n){var r=e.propsData||{};return n.hyphenate.forEach((function(e,i){var s=n.camelCase[i],o=t.attributes[e]||t[s],a=null;n.types[s]&&(a=n.types[s]),o instanceof Attr?r[s]=vL(o.value,a):"undefined"!==typeof o&&(r[s]=o)})),r}function EL(t){var e={};return mL(t.attributes).forEach((function(t){e["vue-slot"===t.nodeName?"slot":t.nodeName]=t.nodeValue})),e}function TL(t){if(t.childNodes.length)return t.childNodes;if(t.content&&t.content.childNodes&&t.content.childNodes.length)return t.content.childNodes;var e=document.createElement("div");return e.innerHTML=t.innerHTML,e.childNodes}function IL(t,e,n){var r=TL(e),i=mL(r).map((function(e){return"#text"===e.nodeName?e.nodeValue:t(e.tagName,{attrs:EL(e),domProps:{innerHTML:e.innerHTML}})}));return n.slot=e.id,t("template",n,i)}function CL(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1],n=[];return mL(t).forEach((function(t){if("#text"===t.nodeName)t.nodeValue.trim()&&n.push(e("span",t.nodeValue));else if("#comment"!==t.nodeName){var r=EL(t),i={attrs:r,domProps:{innerHTML:""===t.innerHTML?t.innerText:t.innerHTML}};r.slot&&(i.slot=r.slot,r.slot=void 0);var s="TEMPLATE"===t.tagName?IL(e,t,i):e(t.tagName,i);n.push(s)}})),n}function kL(t,e){var n={bubbles:!1,cancelable:!1,detail:e},r=void 0;return"function"===typeof window.CustomEvent?r=new CustomEvent(t,n):(r=document.createEvent("CustomEvent"),r.initCustomEvent(t,n.bubbles,n.cancelable,n.detail)),r}function SL(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=kL(e,[].concat(r));t.dispatchEvent(s)}function AL(t,e,n,r,i){if(t.__vue_custom_element__)return Promise.resolve(t);var s=e.util.extend({},n),o=bL(t,s,r),a=e.version&&parseInt(e.version.split(".")[0],10)||0;function c(){this.$emit=function(){for(var e,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];SL.apply(void 0,[t].concat(r)),this.__proto__&&(e=this.__proto__.$emit).call.apply(e,[this].concat(r))}}if(s.beforeCreate=[].concat(s.beforeCreate||[],c),s._compiled){var u={},l=s._Ctor;l&&(u=Object.keys(l).map((function(t){return l[t]}))[0].options),u.beforeCreate=s.beforeCreate}var h=void 0;if(a>=2){var d=t.cloneNode(!0).childNodes;h={propsData:o,props:r.camelCase,computed:{reactiveProps:function(){var t=this,e={};return r.camelCase.forEach((function(n){"undefined"!==typeof t[n]&&(e[n]=t[n])})),e}},render:function(t){var e={props:this.reactiveProps};return t(s,e,CL(d,t))}}}else if(1===a)h=s,h.propsData=o;else{h=s;var f={};Object.keys(o).forEach((function(t){f[t]={default:o[t]}})),h.props=f}var p=a>=2?"<div></div>":("<div>"+t.innerHTML+"</div>").replace(/vue-slot=/g,"slot=");if(i.shadow&&t.shadowRoot?(t.shadowRoot.innerHTML=p,h.el=t.shadowRoot.children[0]):(t.innerHTML=p,h.el=t.children[0]),i.shadow&&i.shadowCss&&t.shadowRoot){var m=document.createElement("style");m.type="text/css",m.appendChild(document.createTextNode(i.shadowCss)),t.shadowRoot.appendChild(m)}return _L(t,r),"function"===typeof i.beforeCreateVueInstance&&(h=i.beforeCreateVueInstance(h)||h),Promise.resolve(h).then((function(n){return t.__vue_custom_element__=new e(n),t.__vue_custom_element_props__=r,t.getVueInstance=function(){var e=t.__vue_custom_element__;return e.$children.length?e.$children[0]:e},t.removeAttribute("vce-cloak"),t.setAttribute("vce-ready",""),SL(t,"vce-ready"),t}))}function OL(t){t.customElement=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i="function"===typeof n,s=i&&{props:r.props||[]},o=wL(i?s:n),a=lL(e,{constructorCallback:function(){"function"===typeof r.constructorCallback&&r.constructorCallback.call(this)},connectedCallback:function(){var s=this,a=i&&n(),c=a&&a.then&&"function"===typeof a.then;if("function"===typeof r.connectedCallback&&r.connectedCallback.call(this),i&&!c)throw new Error("Async component "+e+" do not returns Promise");this.__detached__||(c?a.then((function(e){var n=wL(e);AL(s,t,e,n,r).then((function(){"function"===typeof r.vueInstanceCreatedCallback&&r.vueInstanceCreatedCallback.call(s)}))})):AL(this,t,n,o,r).then((function(){"function"===typeof r.vueInstanceCreatedCallback&&r.vueInstanceCreatedCallback.call(s)}))),this.__detached__=!1},disconnectedCallback:function(){var t=this;this.__detached__=!0,"function"===typeof r.disconnectedCallback&&r.disconnectedCallback.call(this),null!==r.destroyTimeout&&setTimeout((function(){t.__detached__&&t.__vue_custom_element__&&(t.__detached__=!1,t.__vue_custom_element__.$destroy(!0),delete t.__vue_custom_element__,delete t.__vue_custom_element_props__)}),r.destroyTimeout||3e3)},attributeChangedCallback:function(t,e,n){if(this.__vue_custom_element__&&"undefined"!==typeof n){var i=dL(t);"function"===typeof r.attributeChangedCallback&&r.attributeChangedCallback.call(this,t,e,n);var s=this.__vue_custom_element_props__.types[i];this.__vue_custom_element__[i]=vL(n,s)}},observedAttributes:o.hyphenate,shadow:!!r.shadow&&!!HTMLElement.prototype.attachShadow});return a}}"undefined"!==typeof window&&window.Vue&&(window.Vue.use(OL),OL.installed&&(OL.installed=!1));var NL=OL;Wr.use(NL),yO.store=eL,yO.router=aR,Wr.customElement("rspnd-chat",yO)}()})();
//# sourceMappingURL=app.js.map