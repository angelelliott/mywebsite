(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=i(s);fetch(s.href,u)}})();var jp={exports:{}},xu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DS;function d3(){if(DS)return xu;DS=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,s,u){var f=null;if(u!==void 0&&(f=""+u),s.key!==void 0&&(f=""+s.key),"key"in s){u={};for(var h in s)h!=="key"&&(u[h]=s[h])}else u=s;return s=u.ref,{$$typeof:l,type:a,key:f,ref:s!==void 0?s:null,props:u}}return xu.Fragment=t,xu.jsx=i,xu.jsxs=i,xu}var US;function p3(){return US||(US=1,jp.exports=d3()),jp.exports}var Xe=p3(),Zp={exports:{}},gu={},Kp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NS;function m3(){return NS||(NS=1,(function(l){function t(k,et){var j=k.length;k.push(et);t:for(;0<j;){var xt=j-1>>>1,_t=k[xt];if(0<s(_t,et))k[xt]=et,k[j]=_t,j=xt;else break t}}function i(k){return k.length===0?null:k[0]}function a(k){if(k.length===0)return null;var et=k[0],j=k.pop();if(j!==et){k[0]=j;t:for(var xt=0,_t=k.length,Bt=_t>>>1;xt<Bt;){var te=2*(xt+1)-1,xe=k[te],B=te+1,ct=k[B];if(0>s(xe,j))B<_t&&0>s(ct,xe)?(k[xt]=ct,k[B]=j,xt=B):(k[xt]=xe,k[te]=j,xt=te);else if(B<_t&&0>s(ct,j))k[xt]=ct,k[B]=j,xt=B;else break t}}return et}function s(k,et){var j=k.sortIndex-et.sortIndex;return j!==0?j:k.id-et.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;l.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();l.unstable_now=function(){return f.now()-h}}var p=[],m=[],_=1,x=null,g=3,y=!1,E=!1,b=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(k){for(var et=i(m);et!==null;){if(et.callback===null)a(m);else if(et.startTime<=k)a(m),et.sortIndex=et.expirationTime,t(p,et);else break;et=i(m)}}function P(k){if(b=!1,L(k),!E)if(i(p)!==null)E=!0,N||(N=!0,K());else{var et=i(m);et!==null&&st(P,et.startTime-k)}}var N=!1,O=-1,F=5,R=-1;function C(){return M?!0:!(l.unstable_now()-R<F)}function H(){if(M=!1,N){var k=l.unstable_now();R=k;var et=!0;try{t:{E=!1,b&&(b=!1,w(O),O=-1),y=!0;var j=g;try{e:{for(L(k),x=i(p);x!==null&&!(x.expirationTime>k&&C());){var xt=x.callback;if(typeof xt=="function"){x.callback=null,g=x.priorityLevel;var _t=xt(x.expirationTime<=k);if(k=l.unstable_now(),typeof _t=="function"){x.callback=_t,L(k),et=!0;break e}x===i(p)&&a(p),L(k)}else a(p);x=i(p)}if(x!==null)et=!0;else{var Bt=i(m);Bt!==null&&st(P,Bt.startTime-k),et=!1}}break t}finally{x=null,g=j,y=!1}et=void 0}}finally{et?K():N=!1}}}var K;if(typeof D=="function")K=function(){D(H)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ht=it.port2;it.port1.onmessage=H,K=function(){ht.postMessage(null)}}else K=function(){v(H,0)};function st(k,et){O=v(function(){k(l.unstable_now())},et)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(k){k.callback=null},l.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},l.unstable_getCurrentPriorityLevel=function(){return g},l.unstable_next=function(k){switch(g){case 1:case 2:case 3:var et=3;break;default:et=g}var j=g;g=et;try{return k()}finally{g=j}},l.unstable_requestPaint=function(){M=!0},l.unstable_runWithPriority=function(k,et){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var j=g;g=k;try{return et()}finally{g=j}},l.unstable_scheduleCallback=function(k,et,j){var xt=l.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?xt+j:xt):j=xt,k){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=j+_t,k={id:_++,callback:et,priorityLevel:k,startTime:j,expirationTime:_t,sortIndex:-1},j>xt?(k.sortIndex=j,t(m,k),i(p)===null&&k===i(m)&&(b?(w(O),O=-1):b=!0,st(P,j-xt))):(k.sortIndex=_t,t(p,k),E||y||(E=!0,N||(N=!0,K()))),k},l.unstable_shouldYield=C,l.unstable_wrapCallback=function(k){var et=g;return function(){var j=g;g=et;try{return k.apply(this,arguments)}finally{g=j}}}})(Qp)),Qp}var LS;function _3(){return LS||(LS=1,Kp.exports=m3()),Kp.exports}var Jp={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OS;function x3(){if(OS)return ce;OS=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.for("react.view_transition"),y=Symbol.iterator;function E(B){return B===null||typeof B!="object"?null:(B=y&&B[y]||B["@@iterator"],typeof B=="function"?B:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,v={};function w(B,ct,$){this.props=B,this.context=ct,this.refs=v,this.updater=$||b}w.prototype.isReactComponent={},w.prototype.setState=function(B,ct){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ct,"setState")},w.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function D(){}D.prototype=w.prototype;function L(B,ct,$){this.props=B,this.context=ct,this.refs=v,this.updater=$||b}var P=L.prototype=new D;P.constructor=L,M(P,w.prototype),P.isPureReactComponent=!0;var N=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function C(B,ct,$){var at=$.ref;return{$$typeof:l,type:B,key:ct,ref:at!==void 0?at:null,props:$}}function H(B,ct){return C(B.type,ct,B.props)}function K(B){return typeof B=="object"&&B!==null&&B.$$typeof===l}function it(B){var ct={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function($){return ct[$]})}var ht=/\/+/g;function st(B,ct){return typeof B=="object"&&B!==null&&B.key!=null?it(""+B.key):ct.toString(36)}function k(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(O,O):(B.status="pending",B.then(function(ct){B.status==="pending"&&(B.status="fulfilled",B.value=ct)},function(ct){B.status==="pending"&&(B.status="rejected",B.reason=ct)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function et(B,ct,$,at,yt){var Ot=typeof B;(Ot==="undefined"||Ot==="boolean")&&(B=null);var At=!1;if(B===null)At=!0;else switch(Ot){case"bigint":case"string":case"number":At=!0;break;case"object":switch(B.$$typeof){case l:case t:At=!0;break;case _:return At=B._init,et(At(B._payload),ct,$,at,yt)}}if(At)return yt=yt(B),At=at===""?"."+st(B,0):at,N(yt)?($="",At!=null&&($=At.replace(ht,"$&/")+"/"),et(yt,ct,$,"",function(oe){return oe})):yt!=null&&(K(yt)&&(yt=H(yt,$+(yt.key==null||B&&B.key===yt.key?"":(""+yt.key).replace(ht,"$&/")+"/")+At)),ct.push(yt)),1;At=0;var Mt=at===""?".":at+":";if(N(B))for(var Vt=0;Vt<B.length;Vt++)at=B[Vt],Ot=Mt+st(at,Vt),At+=et(at,ct,$,Ot,yt);else if(Vt=E(B),typeof Vt=="function")for(B=Vt.call(B),Vt=0;!(at=B.next()).done;)at=at.value,Ot=Mt+st(at,Vt++),At+=et(at,ct,$,Ot,yt);else if(Ot==="object"){if(typeof B.then=="function")return et(k(B),ct,$,at,yt);throw ct=String(B),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return At}function j(B,ct,$){if(B==null)return B;var at=[],yt=0;return et(B,at,"","",function(Ot){return ct.call($,Ot,yt++)}),at}function xt(B){if(B._status===-1){var ct=B._result,$=ct();$.then(function(at){(B._status===0||B._status===-1)&&(B._status=1,B._result=at,$.status===void 0&&($.status="fulfilled",$.value=at))},function(at){(B._status===0||B._status===-1)&&(B._status=2,B._result=at,$.status===void 0&&($.status="rejected",$.reason=at))}),B._status===-1&&(B._status=0,B._result=$)}if(B._status===1)return B._result.default;throw B._result}var _t=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function Bt(B){var ct=F.T,$={};$.types=ct!==null?ct.types:null,F.T=$;try{var at=B(),yt=F.S;yt!==null&&yt($,at),typeof at=="object"&&at!==null&&typeof at.then=="function"&&at.then(O,_t)}catch(Ot){_t(Ot)}finally{ct!==null&&$.types!==null&&(ct.types=$.types),F.T=ct}}function te(B){var ct=F.T;if(ct!==null){var $=ct.types;$===null?ct.types=[B]:$.indexOf(B)===-1&&$.push(B)}else Bt(te.bind(null,B))}var xe={map:j,forEach:function(B,ct,$){j(B,function(){ct.apply(this,arguments)},$)},count:function(B){var ct=0;return j(B,function(){ct++}),ct},toArray:function(B){return j(B,function(ct){return ct})||[]},only:function(B){if(!K(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ce.Activity=x,ce.Children=xe,ce.Component=w,ce.Fragment=i,ce.Profiler=s,ce.PureComponent=L,ce.StrictMode=a,ce.Suspense=p,ce.ViewTransition=g,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ce.__COMPILER_RUNTIME={__proto__:null,c:function(B){return F.H.useMemoCache(B)}},ce.addTransitionType=te,ce.cache=function(B){return function(){return B.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(B,ct,$){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var at=M({},B.props),yt=B.key;if(ct!=null)for(Ot in ct.key!==void 0&&(yt=""+ct.key),ct)!R.call(ct,Ot)||Ot==="key"||Ot==="__self"||Ot==="__source"||Ot==="ref"&&ct.ref===void 0||(at[Ot]=ct[Ot]);var Ot=arguments.length-2;if(Ot===1)at.children=$;else if(1<Ot){for(var At=Array(Ot),Mt=0;Mt<Ot;Mt++)At[Mt]=arguments[Mt+2];at.children=At}return C(B.type,yt,at)},ce.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:u,_context:B},B},ce.createElement=function(B,ct,$){var at,yt={},Ot=null;if(ct!=null)for(at in ct.key!==void 0&&(Ot=""+ct.key),ct)R.call(ct,at)&&at!=="key"&&at!=="__self"&&at!=="__source"&&(yt[at]=ct[at]);var At=arguments.length-2;if(At===1)yt.children=$;else if(1<At){for(var Mt=Array(At),Vt=0;Vt<At;Vt++)Mt[Vt]=arguments[Vt+2];yt.children=Mt}if(B&&B.defaultProps)for(at in At=B.defaultProps,At)yt[at]===void 0&&(yt[at]=At[at]);return C(B,Ot,yt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(B){return{$$typeof:h,render:B}},ce.isValidElement=K,ce.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:xt}},ce.memo=function(B,ct){return{$$typeof:m,type:B,compare:ct===void 0?null:ct}},ce.startTransition=Bt,ce.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ce.use=function(B){return F.H.use(B)},ce.useActionState=function(B,ct,$){return F.H.useActionState(B,ct,$)},ce.useCallback=function(B,ct){return F.H.useCallback(B,ct)},ce.useContext=function(B){return F.H.useContext(B)},ce.useDebugValue=function(){},ce.useDeferredValue=function(B,ct){return F.H.useDeferredValue(B,ct)},ce.useEffect=function(B,ct){return F.H.useEffect(B,ct)},ce.useEffectEvent=function(B){return F.H.useEffectEvent(B)},ce.useId=function(){return F.H.useId()},ce.useImperativeHandle=function(B,ct,$){return F.H.useImperativeHandle(B,ct,$)},ce.useInsertionEffect=function(B,ct){return F.H.useInsertionEffect(B,ct)},ce.useLayoutEffect=function(B,ct){return F.H.useLayoutEffect(B,ct)},ce.useMemo=function(B,ct){return F.H.useMemo(B,ct)},ce.useOptimistic=function(B,ct){return F.H.useOptimistic(B,ct)},ce.useReducer=function(B,ct,$){return F.H.useReducer(B,ct,$)},ce.useRef=function(B){return F.H.useRef(B)},ce.useState=function(B){return F.H.useState(B)},ce.useSyncExternalStore=function(B,ct,$){return F.H.useSyncExternalStore(B,ct,$)},ce.useTransition=function(){return F.H.useTransition()},ce.version="19.3.1",ce}var PS;function km(){return PS||(PS=1,Jp.exports=x3()),Jp.exports}var $p={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zS;function g3(){if(zS)return Vn;zS=1;var l=km();function t(_){var x="https://react.dev/errors/"+_;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)x+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+_+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function h(_,x,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:y===f?f:""+y,children:_,containerInfo:x,implementation:g}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,x){if(_==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Vn.browser=function(_){return{$$typeof:u,_reason:_}},Vn.createPortal=function(_,x){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(t(299));return h(_,x,null,g)},Vn.flushSync=function(_){var x=p.T,g=a.p;try{if(p.T=null,a.p=2,_)return _()}finally{p.T=x,a.p=g,a.d.f()}},Vn.preconnect=function(_,x){typeof _=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,a.d.C(_,x))},Vn.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},Vn.preinit=function(_,x){if(typeof _=="string"&&x&&typeof x.as=="string"){var g=x.as,y=m(g,x.crossOrigin),E=typeof x.integrity=="string"?x.integrity:void 0,b=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;g==="style"?a.d.S(_,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:y,integrity:E,fetchPriority:b}):g==="script"&&a.d.X(_,{crossOrigin:y,integrity:E,fetchPriority:b,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Vn.preinitModule=function(_,x){if(typeof _=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var g=m(x.as,x.crossOrigin);a.d.M(_,{crossOrigin:g,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}}else x==null&&a.d.M(_)},Vn.preload=function(_,x){if(typeof _=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var g=x.as,y=m(g,x.crossOrigin);a.d.L(_,g,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Vn.preloadModule=function(_,x){if(typeof _=="string")if(x){var g=m(x.as,x.crossOrigin);a.d.m(_,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:g,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}else a.d.m(_)},Vn.requestFormReset=function(_){a.d.r(_)},Vn.unstable_batchedUpdates=function(_,x){return _(x)},Vn.useFormState=function(_,x,g){return p.H.useFormState(_,x,g)},Vn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Vn.version="19.3.1",Vn}var IS;function v3(){if(IS)return $p.exports;IS=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),$p.exports=g3(),$p.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FS;function S3(){if(FS)return gu;FS=1;var l=_3(),t=km(),i=v3();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,r=n;r&&!r.alternate;)n=r,(n.flags&4098)!==0&&(e=n.return),r=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var c=r.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===r)return p(c),e;if(d===o)return p(c),n;d=d.sibling}throw Error(a(188))}if(r.return!==o.return)r=c,o=d;else{for(var S=!1,T=c.child;T;){if(T===r){S=!0,r=c,o=d;break}if(T===o){S=!0,o=c,r=d;break}T=T.sibling}if(!S){for(T=d.child;T;){if(T===r){S=!0,r=d,o=c;break}if(T===o){S=!0,o=d,r=c;break}T=T.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function x(e,n,r,o,c,d){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&r(e,o,c,d)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&x(e.child,n,r,o,c,d))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function y(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],r=g(e);return r===null||b(n,e,r.child,{foundSelf:!1}),n}function b(e,n,r,o){for(;r!==null;){if(r===n)o.foundSelf=!0;else if(r.tag===5||r.tag===27||r.tag===6){if(o.foundSelf)return e[1]=r,!0;e[0]=r}else if((r.tag!==22||r.memoizedState===null)&&b(e,n,r.child,o))return!0;r=r.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(a(559))}}var v=null,w=null;function D(e,n,r){return e===r?!0:e===n?(v=e,!0):!1}function L(e,n,r){return e===r?(w=e,!1):e===n?(w!==null&&(v=e),!0):!1}function P(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function N(e,n,r){for(var o=0,c=e;c;c=r(c))o++;c=0;for(var d=n;d;d=r(d))c++;for(;0<o-c;)e=r(e),o--;for(;0<c-o;)n=r(n),c--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=r(e),n=r(n)}return null}var O=Object.assign,F=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),ht=Symbol.for("react.consumer"),st=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Bt=Symbol.for("react.activity"),te=Symbol.for("react.legacy_hidden"),xe=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),$=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var yt=Symbol.for("react.client.reference");function Ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case it:return"Profiler";case K:return"StrictMode";case et:return"Suspense";case j:return"SuspenseList";case Bt:return"Activity";case B:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case st:return e.displayName||"Context";case ht:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xt:return n=e.displayName||null,n!==null?n:Ot(e.type)||"Memo";case _t:n=e._payload,e=e._init;try{return Ot(e(n))}catch{}}return null}var At=Array.isArray,Mt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},ke=[],G=-1;function le(e){return{current:e}}function Qt(e){0>G||(e.current=ke[G],ke[G]=null,G--)}function $t(e,n){G++,ke[G]=e.current,e.current=n}var It=le(null),Fe=le(null),Yt=le(null),re=le(null);function z(e,n){switch($t(Yt,n),$t(Fe,e),$t(It,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Bv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Bv(n),e=Hv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Qt(It),$t(It,e)}function A(){Qt(It),Qt(Fe),Qt(Yt)}function nt(e){var n=e.memoizedState;n!==null&&(zo._currentValue=n.memoizedState,$t(re,e)),n=It.current;var r=Hv(n,e.type);n!==r&&($t(Fe,e),$t(It,r))}function mt(e){Fe.current===e&&(Qt(It),Qt(Fe)),re.current===e&&(Qt(re),zo._currentValue=oe)}var vt,ft;function Gt(e){if(vt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);vt=n&&n[1]||"",ft=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+e+ft}var Ut=!1;function Zt(e,n){if(!e||Ut)return"";Ut=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(Dt){var Y=Dt}Reflect.construct(e,[],pt)}else{try{pt.call()}catch(Dt){Y=Dt}pt=!1;try{var tt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),pt=!0,new e}finally{pt&&(tt!==void 0?Object.defineProperty(e.prototype,"props",tt):delete e.prototype.props)}}}else{try{throw Error()}catch(Dt){Y=Dt}(pt=e())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(Dt){if(Dt&&Y&&typeof Dt.stack=="string")return[Dt.stack,Y.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],T=d[1];if(S&&T){var I=S.split(`
`),W=T.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<W.length&&!W[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===W.length)for(o=I.length-1,c=W.length-1;1<=o&&0<=c&&I[o]!==W[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==W[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==W[c]){var rt=`
`+I[o].replace(" at new "," at ");return e.displayName&&rt.includes("<anonymous>")&&(rt=rt.replace("<anonymous>",e.displayName)),rt}while(1<=o&&0<=c);break}}}finally{Ut=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Gt(r):""}function qt(e,n){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return e.child!==n&&n!==null?Gt("Suspense Fallback"):Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return Zt(e.type,!1);case 11:return Zt(e.type.render,!1);case 1:return Zt(e.type,!0);case 31:return Gt("Activity");case 30:return Gt("ViewTransition");default:return""}}function St(e){try{var n="",r=null;do n+=qt(e,r),r=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Rt=Object.prototype.hasOwnProperty,ee=l.unstable_scheduleCallback,Jt=l.unstable_cancelCallback,Ft=l.unstable_shouldYield,se=l.unstable_requestPaint,V=l.unstable_now,Nt=l.unstable_getCurrentPriorityLevel,Ct=l.unstable_ImmediatePriority,wt=l.unstable_UserBlockingPriority,bt=l.unstable_NormalPriority,gt=l.unstable_LowPriority,Xt=l.unstable_IdlePriority,ue=l.log,je=l.unstable_setDisableYieldValue,we=null,nn=null;function xn(e){if(typeof ue=="function"&&je(e),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(we,e)}catch{}}var Kn=Math.clz32?Math.clz32:wa,Ku=Math.log,Qu=Math.LN2;function wa(e){return e>>>=0,e===0?32:31-(Ku(e)/Qu|0)|0}var hr=256,rs=262144,ss=4194304;function Pi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function os(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?c=Pi(o):(S&=T,S!==0?c=Pi(S):r||(r=T&~e,r!==0&&(c=Pi(r))))):(T=o&~d,T!==0?c=Pi(T):S!==0?c=Pi(S):r||(r=o&~e,r!==0&&(c=Pi(r)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:c}function ua(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Al(e,n){(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var o=31-Kn(r),c=1<<o;n|=e[o],r&=~c}return n}function Ju(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $u(){var e=ss;return ss<<=1,(ss&62914560)===0&&(ss=4194304),e}function Rl(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function ls(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bh(e,n,r,o,c,d){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,W=e.hiddenUpdates;for(r=S&~r;0<r;){var rt=31-Kn(r),pt=1<<rt;T[rt]=0,I[rt]=-1;var Y=W[rt];if(Y!==null)for(W[rt]=null,rt=0;rt<Y.length;rt++){var tt=Y[rt];tt!==null&&(tt.lane&=-536870913)}r&=~pt}o!==0&&tc(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function tc(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Kn(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function ec(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-Kn(r),c=1<<o;c&n|e[o]&n&&(e[o]|=n),r&=~c}}function U(e,n){var r=n&-n;return r=(r&42)!==0?1:Z(r),(r&(e.suspendedLanes|n))!==0?0:r}function Z(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ot(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ut(){var e=Vt.p;return e!==0?e:(e=window.event,e===void 0?32:bS(e.type))}function Q(e,n){var r=Vt.p;try{return Vt.p=e,n()}finally{Vt.p=r}}var Et=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Et,Lt="__reactProps$"+Et,zt="__reactContainer$"+Et,ne="__reactEvents$"+Et,ae="__reactListeners$"+Et,Kt="__reactHandles$"+Et,ge="__reactResources$"+Et,De="__reactMarker$"+Et,Ze="__reactLoad$"+Et;function Ke(e){delete e[Tt],delete e[Lt],delete e[ae],delete e[Kt]}function Re(e){var n;if(n=e[Tt])return n;for(var r=e.parentNode;r;){if(n=r[zt]||r[Tt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=iS(e);e!==null;){if(r=e[Tt])return r;e=iS(e)}return n}e=r,r=e.parentNode}return null}function Wt(e){if(e=e[Tt]||e[zt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Be(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function ve(e){var n=e[ge];return n||(n=e[ge]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ne(e){e[De]=!0}function Da(e){e[Ze]=void 0}var Xn=new Set,dr={};function Oe(e,n){hn(e,n),hn(e+"Capture",n)}function hn(e,n){for(dr[e]=n,e=0;e<n.length;e++)Xn.add(n[e])}var ri=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wn={},Pn={};function Cl(e){return Rt.call(Pn,e)?!0:Rt.call(wn,e)?!1:ri.test(e)?Pn[e]=!0:(wn[e]=!0,!1)}var me=!1;function T_(){var e=me;return me=!1,e}function nc(e,n,r){if(Cl(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,r)}}function ic(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,r)}}function Ua(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,o)}}function _i(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function A_(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function L1(e,n,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){r=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Eh(e){if(!e._valueTracker){var n=A_(e)?"checked":"value";e._valueTracker=L1(e,n,""+e[n])}}function R_(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=A_(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}var O1=/[\n"\\]/g;function zi(e){return e.replace(O1,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Th(e,n,r,o,c,d,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_i(n)):e.value!==""+_i(n)&&(e.value=""+_i(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?S==="number"&&e.value==n?Ah(e,_i(e.value)):Ah(e,_i(n)):r!=null?Ah(e,_i(r)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+_i(T):e.removeAttribute("name")}function C_(e,n,r,o,c,d,S,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Eh(e);return}r=r!=null?""+_i(r):"",n=n!=null?""+_i(n):r,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Eh(e)}function Ah(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function $s(e,n,r,o){if(e=e.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=n.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&o&&(e[r].defaultSelected=!0)}else{for(r=""+_i(r),n=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function w_(e,n,r){if(n!=null&&(n=""+_i(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+_i(r):""}function D_(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(At(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=_i(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),Eh(e)}function to(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var P1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function U_(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||P1.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function N_(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",me=!0);for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&(U_(e,c,o),me=!0)}else for(var d in n)n.hasOwnProperty(d)&&U_(e,d,n[d])}function Rh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ac(e){return I1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ca(){}var Ch=null;function wh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var eo=null,no=null;function L_(e){var n=Wt(e);if(n&&(e=n.stateNode)){var r=e[Lt]||null;t:switch(e=n.stateNode,n.type){case"input":if(Th(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+zi(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var c=o[Lt]||null;if(!c)throw Error(a(90));Th(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&R_(o)}break t;case"textarea":w_(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&$s(e,!!r.multiple,n,!1)}}}var Dh=!1;function O_(e,n,r){if(Dh)return e(n,r);Dh=!0;try{var o=e(n);return o}finally{if(Dh=!1,(eo!==null||no!==null)&&(rf(),eo&&(n=eo,e=no,no=eo=null,L_(n),e)))for(n=0;n<e.length;n++)L_(e[n])}}function wl(e,n){var r=e.stateNode;if(r===null)return null;var o=r[Lt]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uh=!1;if(Na)try{var Dl={};Object.defineProperty(Dl,"passive",{get:function(){Uh=!0}}),window.addEventListener("test",Dl,Dl),window.removeEventListener("test",Dl,Dl)}catch{Uh=!1}var pr=null,Nh=null,rc=null;function P_(){if(rc)return rc;var e,n=Nh,r=n.length,o,c="value"in pr?pr.value:pr.textContent,d=c.length;for(e=0;e<r&&n[e]===c[e];e++);var S=r-e;for(o=1;o<=S&&n[r-o]===c[d-o];o++);return rc=c.slice(e,1<o?1-o:void 0)}function sc(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function oc(){return!0}function z_(){return!1}function Qn(e){function n(r,o,c,d,S){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(r=e[T],this[T]=r?r(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?oc:z_,this.isPropagationStopped=z_,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),n}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=Qn(mr),Ul=O({},mr,{view:0,detail:0}),F1=Qn(Ul),Lh,Oh,Nl,uc=O({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nl&&(Nl&&e.type==="mousemove"?(Lh=e.screenX-Nl.screenX,Oh=e.screenY-Nl.screenY):Oh=Lh=0,Nl=e),Lh)},movementY:function(e){return"movementY"in e?e.movementY:Oh}}),I_=Qn(uc),B1=O({},uc,{dataTransfer:0}),H1=Qn(B1),V1=O({},Ul,{relatedTarget:0}),Ph=Qn(V1),G1=O({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),X1=Qn(G1),k1=O({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y1=Qn(k1),q1=O({},mr,{data:0}),F_=Qn(q1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Z1[e])?!!n[e]:!1}function zh(){return K1}var Q1=O({},Ul,{key:function(e){if(e.key){var n=W1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(e){return e.type==="keypress"?sc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J1=Qn(Q1),$1=O({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),B_=Qn($1),tb=O({},mr,{submitter:0}),eb=Qn(tb),nb=O({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),ib=Qn(nb),ab=O({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rb=Qn(ab),sb=O({},uc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ob=Qn(sb),lb=O({},mr,{newState:0,oldState:0,source:0}),ub=Qn(lb),cb=[9,13,27,32],Ih=Na&&"CompositionEvent"in window,Ll=null;Na&&"documentMode"in document&&(Ll=document.documentMode);var fb=Na&&"TextEvent"in window&&!Ll,H_=Na&&(!Ih||Ll&&8<Ll&&11>=Ll),V_=" ",G_=!1;function X_(e,n){switch(e){case"keyup":return cb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var io=!1;function hb(e,n){switch(e){case"compositionend":return k_(n);case"keypress":return n.which!==32?null:(G_=!0,V_);case"textInput":return e=n.data,e===V_&&G_?null:e;default:return null}}function db(e,n){if(io)return e==="compositionend"||!Ih&&X_(e,n)?(e=P_(),rc=Nh=pr=null,io=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return H_&&n.locale!=="ko"?null:n.data;default:return null}}var pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Y_(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!pb[e.type]:n==="textarea"}function q_(e,n,r,o){eo?no?no.push(o):no=[o]:eo=o,n=ff(n,"onChange"),0<n.length&&(r=new lc("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var Ol=null,Pl=null;function mb(e){Lv(e,0)}function cc(e){var n=Be(e);if(R_(n))return e}function W_(e,n){if(e==="change")return n}var j_=!1;if(Na){var Fh;if(Na){var Bh="oninput"in document;if(!Bh){var Z_=document.createElement("div");Z_.setAttribute("oninput","return;"),Bh=typeof Z_.oninput=="function"}Fh=Bh}else Fh=!1;j_=Fh&&(!document.documentMode||9<document.documentMode)}function K_(){Ol&&(Ol.detachEvent("onpropertychange",Q_),Pl=Ol=null)}function Q_(e){if(e.propertyName==="value"&&cc(Pl)){var n=[];q_(n,Pl,e,wh(e)),O_(mb,n)}}function _b(e,n,r){e==="focusin"?(K_(),Ol=n,Pl=r,Ol.attachEvent("onpropertychange",Q_)):e==="focusout"&&K_()}function xb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cc(Pl)}function gb(e,n){if(e==="click")return cc(n)}function vb(e,n){if(e==="input"||e==="change")return cc(n)}function Sb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var xi=typeof Object.is=="function"?Object.is:Sb;function zl(e,n){if(xi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!Rt.call(n,c)||!xi(e[c],n[c]))return!1}return!0}function Hh(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function J_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $_(e,n){var r=J_(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=J_(r)}}function tx(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tx(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ex(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Hh(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Hh(e.document)}return n}function Vh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var yb=Na&&"documentMode"in document&&11>=document.documentMode,ao=null,Gh=null,Il=null,Xh=!1;function nx(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xh||ao==null||ao!==Hh(o)||(o=ao,"selectionStart"in o&&Vh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Il&&zl(Il,o)||(Il=o,o=ff(Gh,"onSelect"),0<o.length&&(n=new lc("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=ao)))}function us(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var ro={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},kh={},ix={};Na&&(ix=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function cs(e){if(kh[e])return kh[e];if(!ro[e])return e;var n=ro[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in ix)return kh[e]=n[r];return e}var ax=cs("animationend"),rx=cs("animationiteration"),sx=cs("animationstart"),Mb=cs("transitionrun"),bb=cs("transitionstart"),Eb=cs("transitioncancel"),ox=cs("transitionend"),lx=new Map,Yh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yh.push("scrollEnd");function Ji(e,n){lx.set(e,n),Oe(n,[e])}var Tb=0;function La(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=na.identifierPrefix;var r=Tb++;return e="_"+e+"t_"+r.toString(32)+"_",n.autoName=e}function ux(e){if(e==null||typeof e=="string")return e;var n=null,r=Ao;if(r!==null)for(var o=0;o<r.length;o++){var c=e[r[o]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function Oa(e,n){return e=ux(e),n=ux(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var fc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ii=[],so=0,qh=0;function hc(){for(var e=so,n=qh=so=0;n<e;){var r=Ii[n];Ii[n++]=null;var o=Ii[n];Ii[n++]=null;var c=Ii[n];Ii[n++]=null;var d=Ii[n];if(Ii[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}d!==0&&cx(r,c,d)}}function dc(e,n,r,o){Ii[so++]=e,Ii[so++]=n,Ii[so++]=r,Ii[so++]=o,qh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Wh(e,n,r,o){return dc(e,n,r,o),pc(e)}function fs(e,n){return dc(e,null,null,n),pc(e)}function cx(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var c=!1,d=e.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-Kn(r),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=r|536870912),d):null}function pc(e){if(50<ru)throw ru=0,af=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var oo={};function Ab(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,n,r,o){return new Ab(e,n,r,o)}function jh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pa(e,n){var r=e.alternate;return r===null?(r=si(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&1206910976,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function fx(e,n){e.flags&=1206910978;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function mc(e,n,r,o,c,d){var S=0;if(o=e,typeof o=="function")jh(o)&&(S=1);else if(typeof o=="string")S=t3(e,r,It.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case Bt:return e=si(31,r,n,c),e.elementType=Bt,e.lanes=d,e;case H:return hs(r.children,c,d,n);case K:S=8,c|=24;break;case it:return e=si(12,r,n,c|2),e.elementType=it,e.lanes=d,e;case et:return e=si(13,r,n,c),e.elementType=et,e.lanes=d,e;case j:return e=si(19,r,n,c),e.elementType=j,e.lanes=d,e;case te:case B:return e=c|32,e=si(30,r,n,e),e.elementType=B,e.lanes=d,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case st:S=10;break t;case ht:S=9;break t;case k:S=11;break t;case xt:S=14;break t;case _t:S=16,o=null;break t}S=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=si(S,r,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function hs(e,n,r,o){return e=si(7,e,o,n),e.lanes=r,e}function Zh(e,n,r){return e=si(6,e,null,n),e.lanes=r,e}function hx(e){var n=si(18,null,null,0);return n.stateNode=e,n}function Kh(e,n,r){return n=si(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var dx=new WeakMap;function Fi(e,n){if(typeof e=="object"&&e!==null){var r=dx.get(e);return r!==void 0?r:(n={value:e,source:n,stack:St(n)},dx.set(e,n),n)}return{value:e,source:n,stack:St(n)}}var lo=[],uo=0,_c=null,Fl=0,Bi=[],Hi=0,_r=null,fa=1,ha="";function za(e,n){lo[uo++]=Fl,lo[uo++]=_c,_c=e,Fl=n}function px(e,n,r){Bi[Hi++]=fa,Bi[Hi++]=ha,Bi[Hi++]=_r,_r=e;var o=fa;e=ha;var c=32-Kn(o)-1;o&=~(1<<c),r+=1;var d=32-Kn(n)+c;if(30<d){var S=c-c%5;d=(o&(1<<S)-1).toString(32),o>>=S,c-=S,fa=1<<32-Kn(n)+c|r<<c|o,ha=d+e}else fa=1<<d|r<<c|o,ha=e}function xc(e){e.return!==null&&(za(e,1),px(e,1,0))}function Qh(e){for(;e===_c;)_c=lo[--uo],lo[uo]=null,Fl=lo[--uo],lo[uo]=null;for(;e===_r;)_r=Bi[--Hi],Bi[Hi]=null,ha=Bi[--Hi],Bi[Hi]=null,fa=Bi[--Hi],Bi[Hi]=null}function mx(e,n){Bi[Hi++]=fa,Bi[Hi++]=ha,Bi[Hi++]=_r,fa=n.id,ha=n.overflow,_r=e}var Dn=null,tn=null,Se=!1,xr=null,Vi=!1,Jh=Error(a(519));function gr(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bl(Fi(n,e)),Jh}function _x(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[Tt]=e,n[Lt]=o,r){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(r=0;r<ou.length;r++)Me(ou[r],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),C_(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),D_(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Iv(n.textContent,r)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=ca),n=!0):n=!1,n||gr(e,!0)}function gc(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Dn=Dn.return}}function co(e){if(e!==Dn)return!1;if(!Se)return gc(e),Se=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Cp(e.type,e.memoizedProps)),r=!r),r&&tn&&gr(e),gc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));tn=nS(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));tn=nS(e)}else n===27?(n=tn,Or(e.type)?(e=Ip,Ip=null,tn=e):tn=n):tn=Dn?Xi(e.stateNode.nextSibling):null;return!0}function ds(){tn=Dn=null,Se=!1}function $h(){var e=xr;return e!==null&&(ui===null?ui=e:ui.push.apply(ui,e),xr=null),e}function Bl(e){xr===null?xr=[e]:xr.push(e)}var td=le(null),ps=null,Ia=null;function vr(e,n,r){$t(td,n._currentValue),n._currentValue=r}function Fa(e){e._currentValue=td.current,Qt(td)}function vc(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function ed(e,n,r,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var S=c.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=c;for(var I=0;I<n.length;I++)if(T.context===n[I]){d.lanes|=r,T=d.alternate,T!==null&&(T.lanes|=r),vc(d.return,r,e),o||(S=null);break t}d=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(a(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),vc(S,r,e),S=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=r,S=c.alternate,S!==null&&(S.lanes|=r),vc(c.return,r,e),S=c.child,S=S!==null?S.sibling:null):S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function ms(e,n,r,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var T=c.type;xi(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===re.current){if(S=c.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}c=c.return}return e!==null&&ed(n,e,r,o),n.flags|=262144,e!==null}function Sc(e){for(e=e.firstContext;e!==null;){if(!xi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){ps=e,Ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return xx(ps,e)}function yc(e,n){return ps===null&&_s(e),xx(e,n)}function xx(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ia===null){if(e===null)throw Error(a(308));Ia=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ia=Ia.next=n;return r}var Rb=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},Cb=l.unstable_scheduleCallback,wb=l.unstable_NormalPriority,gn={$$typeof:st,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nd(){return{controller:new Rb,data:new Map,refCount:0}}function Hl(e){e.refCount--,e.refCount===0&&Cb(wb,function(){e.controller.abort()})}function gx(e,n){if((e.pendingLanes&4194048)!==0){var r=e.transitionTypes;for(r===null&&(r=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];r.indexOf(o)===-1&&r.push(o)}}}var Vl=null;function Db(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Gl=null,id=0,xs=0,fo=null;function Ub(e,n){if(Gl===null){var r=Gl=[];id=0,xs=vp(),fo={status:"pending",value:void 0,then:function(o){r.push(o)}}}return id++,n.then(vx,vx),n}function vx(){if(--id===0&&(Vl=null,Gl!==null)){fo!==null&&(fo.status="fulfilled");var e=Gl;Gl=null,xs=0,fo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Nb(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var Sx=Mt.S;Mt.S=function(e,n){if(hv=V(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ub(e,n),Vl!==null)for(var r=Do;r!==null;)gx(r,Vl),r=r.next;if(r=e.types,r!==null){for(var o=Do;o!==null;)gx(o,r),o=o.next;if(xs!==0){o=Vl,o===null&&(o=Vl=[]);for(var c=0;c<r.length;c++){var d=r[c];o.indexOf(d)===-1&&o.push(d)}}}Sx!==null&&Sx(e,n)};var gs=le(null);function ad(){var e=gs.current;return e!==null?e:Qe.pooledCache}function Mc(e,n){n===null?$t(gs,gs.current):$t(gs,n.pool)}function yx(){var e=ad();return e===null?null:{parent:gn._currentValue,pool:e}}var ho=Error(a(460)),rd=Error(a(474)),bc=Error(a(542)),Ec={then:function(){}};function Mx(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bx(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(ca,ca),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tx(e),e===void 0&&!("reason"in n)?Error(a(600)):e;default:if(typeof n.status=="string")n.then(ca,ca);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tx(e),e}throw Ss=n,ho}}function vs(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Ss=r,ho):r}}var Ss=null;function Ex(){if(Ss===null)throw Error(a(459));var e=Ss;return Ss=null,e}function Tx(e){if(e===ho||e===bc)throw Error(a(483))}var po=null,Xl=0;function Tc(e){var n=Xl;return Xl+=1,po===null&&(po=[]),bx(po,e,n)}function Sr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ac(e,n){throw n.$$typeof===F?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ax(e){function n(q,X){if(e){var J=q.deletions;J===null?(q.deletions=[X],q.flags|=16):J.push(X)}}function r(q,X){if(!e)return null;for(;X!==null;)n(q,X),X=X.sibling;return null}function o(q){for(var X=new Map;q!==null;)q.key===null?X.set(q.index,q):X.set(q.key,q),q=q.sibling;return X}function c(q,X){return q=Pa(q,X),q.index=0,q.sibling=null,q}function d(q,X,J){return q.index=J,e?(J=q.alternate,J!==null?(J=J.index,J<X?(q.flags|=2,X):J):(q.flags|=134217730,X)):(q.flags|=1048576,X)}function S(q){return e&&q.alternate===null&&(q.flags|=134217730),q}function T(q,X,J,dt){return X===null||X.tag!==6?(X=Zh(J,q.mode,dt),X.return=q,X):(X=c(X,J),X.return=q,X)}function I(q,X,J,dt){var Ht=J.type;return Ht===H?(q=rt(q,X,J.props.children,dt,J.key),Sr(q,J),q):X!==null&&(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===_t&&vs(Ht)===X.type)?(X=c(X,J.props),Sr(X,J),X.return=q,X):(X=mc(J.type,J.key,J.props,null,q.mode,dt),Sr(X,J),X.return=q,X)}function W(q,X,J,dt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Kh(J,q.mode,dt),X.return=q,X):(X=c(X,J.children||[]),X.return=q,X)}function rt(q,X,J,dt,Ht){return X===null||X.tag!==7?(X=hs(J,q.mode,dt,Ht),X.return=q,X):(X=c(X,J),X.return=q,X)}function pt(q,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Zh(""+X,q.mode,J),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case R:return J=mc(X.type,X.key,X.props,null,q.mode,J),Sr(J,X),J.return=q,J;case C:return X=Kh(X,q.mode,J),X.return=q,X;case _t:return X=vs(X),pt(q,X,J)}if(At(X)||at(X))return X=hs(X,q.mode,J,null),X.return=q,X;if(typeof X.then=="function")return pt(q,Tc(X),J);if(X.$$typeof===st)return pt(q,yc(q,X),J);Ac(q,X)}return null}function Y(q,X,J,dt){var Ht=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:T(q,X,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case R:return J.key===Ht?I(q,X,J,dt):null;case C:return J.key===Ht?W(q,X,J,dt):null;case _t:return J=vs(J),Y(q,X,J,dt)}if(At(J)||at(J))return Ht!==null?null:rt(q,X,J,dt,null);if(typeof J.then=="function")return Y(q,X,Tc(J),dt);if(J.$$typeof===st)return Y(q,X,yc(q,J),dt);Ac(q,J)}return null}function tt(q,X,J,dt,Ht){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return q=q.get(J)||null,T(X,q,""+dt,Ht);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case R:return q=q.get(dt.key===null?J:dt.key)||null,I(X,q,dt,Ht);case C:return q=q.get(dt.key===null?J:dt.key)||null,W(X,q,dt,Ht);case _t:return dt=vs(dt),tt(q,X,J,dt,Ht)}if(At(dt)||at(dt))return q=q.get(J)||null,rt(X,q,dt,Ht,null);if(typeof dt.then=="function")return tt(q,X,J,Tc(dt),Ht);if(dt.$$typeof===st)return tt(q,X,J,yc(X,dt),Ht);Ac(X,dt)}return null}function Dt(q,X,J,dt){for(var Ht=null,Te=null,jt=X,ie=X=0,yn=null;jt!==null&&ie<J.length;ie++){jt.index>ie?(yn=jt,jt=null):yn=jt.sibling;var Ue=Y(q,jt,J[ie],dt);if(Ue===null){jt===null&&(jt=yn);break}e&&jt&&Ue.alternate===null&&n(q,jt),X=d(Ue,X,ie),Te===null?Ht=Ue:Te.sibling=Ue,Te=Ue,jt=yn}if(ie===J.length)return r(q,jt),Se&&za(q,ie),Ht;if(jt===null){for(;ie<J.length;ie++)jt=pt(q,J[ie],dt),jt!==null&&(X=d(jt,X,ie),Te===null?Ht=jt:Te.sibling=jt,Te=jt);return Se&&za(q,ie),Ht}for(jt=o(jt);ie<J.length;ie++)yn=tt(jt,q,ie,J[ie],dt),yn!==null&&(e&&(Ue=yn.alternate,Ue!==null&&jt.delete(Ue.key===null?ie:Ue.key)),X=d(yn,X,ie),Te===null?Ht=yn:Te.sibling=yn,Te=yn);return e&&jt.forEach(function(Br){return n(q,Br)}),Se&&za(q,ie),Ht}function kt(q,X,J,dt){if(J==null)throw Error(a(151));for(var Ht=null,Te=null,jt=X,ie=X=0,yn=null,Ue=J.next();jt!==null&&!Ue.done;ie++,Ue=J.next()){jt.index>ie?(yn=jt,jt=null):yn=jt.sibling;var Br=Y(q,jt,Ue.value,dt);if(Br===null){jt===null&&(jt=yn);break}e&&jt&&Br.alternate===null&&n(q,jt),X=d(Br,X,ie),Te===null?Ht=Br:Te.sibling=Br,Te=Br,jt=yn}if(Ue.done)return r(q,jt),Se&&za(q,ie),Ht;if(jt===null){for(;!Ue.done;ie++,Ue=J.next())Ue=pt(q,Ue.value,dt),Ue!==null&&(X=d(Ue,X,ie),Te===null?Ht=Ue:Te.sibling=Ue,Te=Ue);return Se&&za(q,ie),Ht}for(jt=o(jt);!Ue.done;ie++,Ue=J.next())Ue=tt(jt,q,ie,Ue.value,dt),Ue!==null&&(e&&(yn=Ue.alternate,yn!==null&&jt.delete(yn.key===null?ie:yn.key)),X=d(Ue,X,ie),Te===null?Ht=Ue:Te.sibling=Ue,Te=Ue);return e&&jt.forEach(function(h3){return n(q,h3)}),Se&&za(q,ie),Ht}function de(q,X,J,dt){if(typeof J=="object"&&J!==null&&J.type===H&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case R:t:{for(var Ht=J.key;X!==null;){if(X.key===Ht){if(Ht=J.type,Ht===H){if(X.tag===7){r(q,X.sibling),dt=c(X,J.props.children),Sr(dt,J),dt.return=q,q=dt;break t}}else if(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===_t&&vs(Ht)===X.type){r(q,X.sibling),dt=c(X,J.props),Sr(dt,J),dt.return=q,q=dt;break t}r(q,X);break}else n(q,X);X=X.sibling}J.type===H?(dt=hs(J.props.children,q.mode,dt,J.key),Sr(dt,J),dt.return=q,q=dt):(dt=mc(J.type,J.key,J.props,null,q.mode,dt),Sr(dt,J),dt.return=q,q=dt)}return S(q);case C:t:{for(Ht=J.key;X!==null;){if(X.key===Ht)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){r(q,X.sibling),dt=c(X,J.children||[]),dt.return=q,q=dt;break t}else{r(q,X);break}else n(q,X);X=X.sibling}dt=Kh(J,q.mode,dt),dt.return=q,q=dt}return S(q);case _t:return J=vs(J),de(q,X,J,dt)}if(At(J))return Dt(q,X,J,dt);if(at(J)){if(Ht=at(J),typeof Ht!="function")throw Error(a(150));return J=Ht.call(J),kt(q,X,J,dt)}if(typeof J.then=="function")return de(q,X,Tc(J),dt);if(J.$$typeof===st)return de(q,X,yc(q,J),dt);Ac(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(r(q,X.sibling),dt=c(X,J),dt.return=q,q=dt):(r(q,X),dt=Zh(J,q.mode,dt),dt.return=q,q=dt),S(q)):r(q,X)}return function(q,X,J,dt){try{Xl=0;var Ht=de(q,X,J,dt);return po=null,Ht}catch(jt){if(jt===ho||jt===bc)throw jt;var Te=si(29,jt,null,q.mode);return Te.lanes=dt,Te.return=q,Te}finally{}}}var ys=Ax(!0),Rx=Ax(!1),yr=!1;function sd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function od(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Mr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function br(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=pc(e),cx(e,null,r),n}return dc(e,o,n,r),pc(e)}function kl(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,ec(e,r)}}function ld(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?c=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?c=d=n:d=d.next=n}else c=d=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var ud=!1;function Yl(){if(ud){var e=fo;if(e!==null)throw e}}function ql(e,n,r,o){ud=!1;var c=e.updateQueue;yr=!1;var d=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var I=T,W=I.next;I.next=null,S===null?d=W:S.next=W,S=I;var rt=e.alternate;rt!==null&&(rt=rt.updateQueue,T=rt.lastBaseUpdate,T!==S&&(T===null?rt.firstBaseUpdate=W:T.next=W,rt.lastBaseUpdate=I))}if(d!==null){var pt=c.baseState;S=0,rt=W=I=null,T=d;do{var Y=T.lane&-536870913,tt=Y!==T.lane;if(tt?(Ee&Y)===Y:(o&Y)===Y){Y!==0&&Y===xs&&(ud=!0),rt!==null&&(rt=rt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Dt=e,kt=T;Y=n;var de=r;switch(kt.tag){case 1:if(Dt=kt.payload,typeof Dt=="function"){pt=Dt.call(de,pt,Y);break t}pt=Dt;break t;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=kt.payload,Y=typeof Dt=="function"?Dt.call(de,pt,Y):Dt,Y==null)break t;pt=O({},pt,Y);break t;case 2:yr=!0}}Y=T.callback,Y!==null&&(e.flags|=64,tt&&(e.flags|=8192),tt=c.callbacks,tt===null?c.callbacks=[Y]:tt.push(Y))}else tt={lane:Y,tag:T.tag,payload:T.payload,callback:T.callback,next:null},rt===null?(W=rt=tt,I=pt):rt=rt.next=tt,S|=Y;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;tt=T,T=tt.next,tt.next=null,c.lastBaseUpdate=tt,c.shared.pending=null}}while(!0);rt===null&&(I=pt),c.baseState=I,c.firstBaseUpdate=W,c.lastBaseUpdate=rt,d===null&&(c.shared.lanes=0),Dr|=S,e.lanes=S,e.memoizedState=pt}}function Cx(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function wx(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Cx(r[e],n)}var Er=le(null),Rc=le(0);function Dx(e,n){e=Xa,$t(Rc,e),$t(Er,n),Xa=e|n.baseLanes}function cd(){$t(Rc,Xa),$t(Er,Er.current)}function fd(){Xa=Rc.current,Qt(Er),Qt(Rc)}var In=le(null),kn=null;function Tr(e){var n=e.alternate;$t(Fn,Fn.current&1),$t(In,e),kn===null&&(n===null||Er.current!==null||n.memoizedState!==null)&&(kn=e)}function hd(e){$t(Fn,Fn.current),$t(In,e),kn===null&&(kn=e)}function Ux(e){e.tag===22?($t(Fn,Fn.current),$t(In,e),kn===null&&(kn=e)):Ar()}function Ar(){$t(Fn,Fn.current),$t(In,In.current)}function gi(e){Qt(In),kn===e&&(kn=null),Qt(Fn)}var Fn=le(0);function Wl(e,n){$t(In,In.current),$t(Fn,n)}function dd(e){Qt(Fn),Qt(In),kn===e&&(kn=null)}function Cc(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Pp(r)||zp(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ba=0,he=null,Ye=null,vn=null,wc=!1,mo=!1,Ms=!1,Dc=0,jl=0,_o=null,Lb=0;function un(){throw Error(a(321))}function pd(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!xi(e[r],n[r]))return!1;return!0}function md(e,n,r,o,c,d){return Ba=d,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=e===null||e.memoizedState===null?pg:mg,Ms=!1,d=r(o,c),Ms=!1,mo&&(d=Lx(n,r,o,c)),Nx(e),d}function Nx(e){Mt.H=Ic;var n=Ye!==null&&Ye.next!==null;if(Ba=0,vn=Ye=he=null,wc=!1,jl=0,_o=null,n)throw Error(a(300));e===null||Sn||(e=e.dependencies,e!==null&&Sc(e)&&(Sn=!0))}function Lx(e,n,r,o){he=e;var c=0;do{if(mo&&(_o=null),jl=0,mo=!1,25<=c)throw Error(a(301));if(c+=1,vn=Ye=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Mt.H=Vb,d=n(r,o)}while(mo);return d}function Ob(){var e=Mt.H,n=e.useState()[0];return n=typeof n.then=="function"?Zl(n):n,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(he.flags|=1024),n}function _d(){var e=Dc!==0;return Dc=0,e}function xd(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function gd(e){if(wc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wc=!1}Ba=0,vn=Ye=he=null,mo=!1,jl=Dc=0,_o=null}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?he.memoizedState=vn=e:vn=vn.next=e,vn}function dn(){if(Ye===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var n=vn===null?he.memoizedState:vn.next;if(n!==null)vn=n,Ye=e;else{if(e===null)throw he.alternate===null?Error(a(467)):Error(a(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},vn===null?he.memoizedState=vn=e:vn=vn.next=e}return vn}function Uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zl(e){var n=jl;return jl+=1,_o===null&&(_o=[]),e=bx(_o,e,n),n=he,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?pg:mg),e}function Nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zl(e);if(e.$$typeof===ct)return;if(e.$$typeof===st)return zn(e)}throw Error(a(438,String(e)))}function vd(e){var n=null,r=he.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Uc(),he.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=xe;return n.index++,r}function Ha(e,n){return typeof n=="function"?n(e):n}function Lc(e){var n=dn();return Sd(n,Ye,e)}function Sd(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var S=c.next;c.next=d.next,d.next=S}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var T=S=null,I=null,W=n,rt=!1;do{var pt=W.lane&-536870913;if(pt!==W.lane?(Ee&pt)===pt:(Ba&pt)===pt){var Y=W.revertLane;if(Y===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),pt===xs&&(rt=!0);else if((Ba&Y)===Y){W=W.next,Y===xs&&(rt=!0);continue}else pt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},I===null?(T=I=pt,S=d):I=I.next=pt,he.lanes|=Y,Dr|=Y;pt=W.action,Ms&&r(d,pt),d=W.hasEagerState?W.eagerState:r(d,pt)}else Y={lane:pt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},I===null?(T=I=Y,S=d):I=I.next=Y,he.lanes|=pt,Dr|=pt;W=W.next}while(W!==null&&W!==n);if(I===null?S=d:I.next=T,!xi(d,e.memoizedState)&&(Sn=!0,rt&&(r=fo,r!==null)))throw r;e.memoizedState=d,e.baseState=S,e.baseQueue=I,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function yd(e){var n=dn(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,c=r.pending,d=n.memoizedState;if(c!==null){r.pending=null;var S=c=c.next;do d=e(d,S.action),S=S.next;while(S!==c);xi(d,n.memoizedState)||(Sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,o]}function Ox(e,n,r){var o=he,c=dn(),d=Se;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=n();var S=!xi((Ye||c).memoizedState,r);if(S&&(c.memoizedState=r,Sn=!0),c=c.queue,Ed(Ix.bind(null,o,c,e),[e]),e=c.getSnapshot!==n||S||vn!==null&&(vn.memoizedState.tag&1)!==0,xo(e?9:8,{destroy:void 0},zx.bind(null,o,c,r,n),null),e){if(o.flags|=2048,Qe===null)throw Error(a(349));d||(Ba&127)!==0||Px(o,n,r)}return r}function Px(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=he.updateQueue,n===null?(n=Uc(),he.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function zx(e,n,r,o){n.value=r,n.getSnapshot=o,Fx(n)&&Bx(e)}function Ix(e,n,r){return r(function(){Fx(n)&&Bx(e)})}function Fx(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!xi(e,r)}catch{return!0}}function Bx(e){var n=fs(e,2);n!==null&&ci(n,e,2)}function Md(e){var n=Jn();if(typeof e=="function"){var r=e;if(e=r(),Ms){xn(!0);try{r()}finally{xn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:e},n}function Hx(e,n,r,o){return e.baseState=r,Sd(e,Ye,typeof o=="function"?o:Ha)}function Pb(e,n,r,o,c){if(zc(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};Mt.T!==null?r(!0):d.isTransition=!1,o(d),r=n.pending,r===null?(d.next=n.pending=d,Vx(n,d)):(d.next=r.next,n.pending=r.next=d)}}function Vx(e,n){var r=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=Mt.T,S={};S.types=d!==null?d.types:null,Mt.T=S;try{var T=r(c,o),I=Mt.S;I!==null&&I(S,T),Gx(e,n,T)}catch(W){bd(e,n,W)}finally{d!==null&&S.types!==null&&(d.types=S.types),Mt.T=d}}else try{d=r(c,o),Gx(e,n,d)}catch(W){bd(e,n,W)}}function Gx(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Xx(e,n,o)},function(o){return bd(e,n,o)}):Xx(e,n,r)}function Xx(e,n,r){n.status="fulfilled",n.value=r,kx(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,Vx(e,r)))}function bd(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,kx(n),n=n.next;while(n!==o)}e.action=null}function kx(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Yx(e,n){return n}function qx(e,n){if(Se){var r=Qe.formState;if(r!==null){t:{var o=he;if(Se){if(tn){e:{for(var c=tn,d=Vi;c.nodeType!==8;){if(!d){c=null;break e}if(c=Xi(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){tn=Xi(c.nextSibling),o=c.data==="F!";break t}}gr(o)}o=!1}o&&(n=r[0])}}return r=Jn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yx,lastRenderedState:n},r.queue=o,r=fg.bind(null,he,o),o.dispatch=r,o=Md(!1),d=wd.bind(null,he,!1,o.queue),o=Jn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,r=Pb.bind(null,he,c,d,r),c.dispatch=r,o.memoizedState=e,[n,r,!1]}function Wx(e){var n=dn();return jx(n,Ye,e)}function jx(e,n,r){if(n=Sd(e,n,Yx)[0],e=Lc(Ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Zl(n)}catch(S){throw S===ho?bc:S}else o=n;n=dn();var c=n.queue,d=c.dispatch;return r!==n.memoizedState&&(he.flags|=2048,xo(9,{destroy:void 0},zb.bind(null,c,r),null)),[o,d,e]}function zb(e,n){e.action=n}function Zx(e){var n=dn(),r=Ye;if(r!==null)return jx(n,r,e);dn(),n=n.memoizedState,r=dn();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function xo(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=Uc(),he.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function Kx(){return dn().memoizedState}function Oc(e,n,r,o){var c=Jn();he.flags|=e,c.memoizedState=xo(1|n,{destroy:void 0},r,o===void 0?null:o)}function Pc(e,n,r,o){var c=dn();o=o===void 0?null:o;var d=c.memoizedState.inst;Ye!==null&&o!==null&&pd(o,Ye.memoizedState.deps)?c.memoizedState=xo(n,d,r,o):(he.flags|=e,c.memoizedState=xo(1|n,d,r,o))}function Qx(e,n){Oc(8390656,8,e,n)}function Ed(e,n){Pc(2048,8,e,n)}function Ib(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=Uc(),he.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function Jx(e){var n=dn().memoizedState;return Ib({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function $x(e,n){return Pc(4,2,e,n)}function tg(e,n){return Pc(4,4,e,n)}function eg(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ng(e,n,r){r=r!=null?r.concat([e]):null,Pc(4,4,eg.bind(null,n,e),r)}function Td(){}function ig(e,n){var r=dn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&pd(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function ag(e,n){var r=dn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&pd(n,o[1]))return o[0];if(o=e(),Ms){xn(!0);try{e()}finally{xn(!1)}}return r.memoizedState=[o,n],o}function Ad(e,n,r){return r===void 0||(Ba&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=pv(),he.lanes|=e,Dr|=e,r)}function rg(e,n,r,o){return xi(r,n)?r:Er.current!==null?(e=Ad(e,r,o),xi(e,n)||(Sn=!0),e):(Ba&106)===0||(Ba&1073741824)!==0&&(Ee&261930)===0?(Sn=!0,e.memoizedState=r):(e=pv(),he.lanes|=e,Dr|=e,n)}function sg(e,n,r,o,c){var d=Vt.p;Vt.p=d!==0&&8>d?d:8;var S=Mt.T,T={};T.types=S!==null?S.types:null,Mt.T=T,wd(e,!1,n,r);try{var I=c(),W=Mt.S;if(W!==null&&W(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var rt=Nb(I,o);Kl(e,n,rt,Mi(e))}else Kl(e,n,o,Mi(e))}catch(pt){Kl(e,n,{then:function(){},status:"rejected",reason:pt},Mi())}finally{Vt.p=d,S!==null&&T.types!==null&&(S.types=T.types),Mt.T=S}}function Fb(){}function Rd(e,n,r,o){if(e.tag!==5)throw Error(a(476));var c=og(e).queue;sg(e,c,n,oe,r===null?Fb:function(){return lg(e),r(o)})}function og(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:oe},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function lg(e){var n=og(e);n.next===null&&(n=e.alternate.memoizedState),Kl(e,n.next.queue,{},Mi())}function Cd(){return zn(zo)}function ug(){return dn().memoizedState}function cg(){return dn().memoizedState}function Bb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Mi();e=Mr(r);var o=br(n,e,r);o!==null&&(ci(o,n,r),kl(o,n,r)),n={cache:nd()},e.payload=n;return}n=n.return}}function Hb(e,n,r){var o=Mi();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zc(e)?hg(n,r):(r=Wh(e,n,r,o),r!==null&&(ci(r,e,o),dg(r,n,o)))}function fg(e,n,r){var o=Mi();Kl(e,n,r,o)}function Kl(e,n,r,o){var c={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(zc(e))hg(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,T=d(S,r);if(c.hasEagerState=!0,c.eagerState=T,xi(T,S))return dc(e,n,c,0),Qe===null&&hc(),!1}catch{}finally{}if(r=Wh(e,n,c,o),r!==null)return ci(r,e,o),dg(r,n,o),!0}return!1}function wd(e,n,r,o){if(o={lane:2,revertLane:vp(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zc(e)){if(n)throw Error(a(479))}else n=Wh(e,r,o,2),n!==null&&ci(n,e,2)}function zc(e){var n=e.alternate;return e===he||n!==null&&n===he}function hg(e,n){mo=wc=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function dg(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,ec(e,r)}}var Ic={readContext:zn,use:Nc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},pg={readContext:zn,use:Nc,useCallback:function(e,n){return Jn().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:Qx,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Oc(4194308,4,eg.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Oc(4194308,4,e,n)},useInsertionEffect:function(e,n){Oc(4,2,e,n)},useMemo:function(e,n){var r=Jn();n=n===void 0?null:n;var o=e();if(Ms){xn(!0);try{e()}finally{xn(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=Jn();if(r!==void 0){var c=r(n);if(Ms){xn(!0);try{r(n)}finally{xn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Hb.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Jn();return e={current:e},n.memoizedState=e},useState:function(e){e=Md(e);var n=e.queue,r=fg.bind(null,he,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Td,useDeferredValue:function(e,n){var r=Jn();return Ad(r,e,n)},useTransition:function(){var e=Md(!1);return e=sg.bind(null,he,e.queue,!0,!1),Jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=he,c=Jn();if(Se){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Qe===null)throw Error(a(349));(Ee&127)!==0||Px(o,n,r)}c.memoizedState=r;var d={value:r,getSnapshot:n};return c.queue=d,Qx(Ix.bind(null,o,d,e),[e]),o.flags|=2048,xo(9,{destroy:void 0},zx.bind(null,o,d,r,n),null),r},useId:function(){var e=Jn(),n=Qe.identifierPrefix;if(Se){var r=ha,o=fa;r=(o&~(1<<32-Kn(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Dc++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=Lb++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Cd,useFormState:qx,useActionState:qx,useOptimistic:function(e){var n=Jn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=wd.bind(null,he,!0,r),r.dispatch=n,[e,n]},useMemoCache:vd,useCacheRefresh:function(){return Jn().memoizedState=Bb.bind(null,he)},useEffectEvent:function(e){var n=Jn(),r={impl:e};return n.memoizedState=r,function(){if((Pe&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},mg={readContext:zn,use:Nc,useCallback:ig,useContext:zn,useEffect:Ed,useImperativeHandle:ng,useInsertionEffect:$x,useLayoutEffect:tg,useMemo:ag,useReducer:Lc,useRef:Kx,useState:function(){return Lc(Ha)},useDebugValue:Td,useDeferredValue:function(e,n){var r=dn();return rg(r,Ye.memoizedState,e,n)},useTransition:function(){var e=Lc(Ha)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Zl(e),n]},useSyncExternalStore:Ox,useId:ug,useHostTransitionStatus:Cd,useFormState:Wx,useActionState:Wx,useOptimistic:function(e,n){var r=dn();return Hx(r,Ye,e,n)},useMemoCache:vd,useCacheRefresh:cg,useEffectEvent:Jx},Vb={readContext:zn,use:Nc,useCallback:ig,useContext:zn,useEffect:Ed,useImperativeHandle:ng,useInsertionEffect:$x,useLayoutEffect:tg,useMemo:ag,useReducer:yd,useRef:Kx,useState:function(){return yd(Ha)},useDebugValue:Td,useDeferredValue:function(e,n){var r=dn();return Ye===null?Ad(r,e,n):rg(r,Ye.memoizedState,e,n)},useTransition:function(){var e=yd(Ha)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Zl(e),n]},useSyncExternalStore:Ox,useId:ug,useHostTransitionStatus:Cd,useFormState:Zx,useActionState:Zx,useOptimistic:function(e,n){var r=dn();return Ye!==null?Hx(r,Ye,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:vd,useCacheRefresh:cg,useEffectEvent:Jx};function Dd(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:O({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ud={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=Mi(),c=Mr(o);c.payload=n,r!=null&&(c.callback=r),n=br(e,c,o),n!==null&&(ci(n,e,o),kl(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=Mi(),c=Mr(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=br(e,c,o),n!==null&&(ci(n,e,o),kl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Mi(),o=Mr(r);o.tag=2,n!=null&&(o.callback=n),n=br(e,o,r),n!==null&&(ci(n,e,r),kl(n,e,r))}};function _g(e,n,r,o,c,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!zl(r,o)||!zl(c,d):!0}function xg(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&Ud.enqueueReplaceState(n,n.state,null)}function bs(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=O({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}function gg(e){fc(e)}function vg(e){console.error(e)}function Sg(e){fc(e)}function Fc(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function yg(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Nd(e,n,r){return r=Mr(r),r.tag=3,r.payload={element:null},r.callback=function(){Fc(e,n)},r}function Mg(e){return e=Mr(e),e.tag=3,e}function bg(e,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){yg(n,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){yg(n,r,o),typeof c!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Gb(e,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&ms(n,r,c,!0),r=In.current,r!==null){switch(r.tag){case 31:case 13:case 19:return kn===null?sf():r.alternate===null&&cn===0&&(cn=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===Ec?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),_p(e,o,c)),!1;case 22:return r.flags|=65536,o===Ec?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),_p(e,o,c)),!1}throw Error(a(435,r.tag))}return _p(e,o,c),sf(),!1}if(Se)return n=In.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Jh&&(e=Error(a(422),{cause:o}),Bl(Fi(e,r)))):(o!==Jh&&(n=Error(a(423),{cause:o}),Bl(Fi(n,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Fi(o,r),c=Nd(e.stateNode,o,c),ld(e,c),cn!==4&&(cn=2)),!1;var d=Error(a(520),{cause:o});if(d=Fi(d,r),au===null?au=[d]:au.push(d),cn!==4&&(cn=2),n===null)return!0;o=Fi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=Nd(r.stateNode,o,e),ld(r,e),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ur===null||!Ur.has(d))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Mg(c),bg(c,e,r,o),ld(r,c),!1;break;case 22:if(r.memoizedState!==null)return r.flags|=65536,!1}r=r.return}while(r!==null);return!1}var Ld=Error(a(461)),Sn=!1;function Tn(e,n,r,o){n.child=e===null?Rx(n,null,r,o):ys(n,e.child,r,o)}function Eg(e,n,r,o,c){r=r.render;var d=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return _s(n),o=md(e,n,r,S,d,c),T=_d(),e!==null&&!Sn?(xd(e,n,c),Va(e,n,c)):(Se&&T&&xc(n),n.flags|=1,Tn(e,n,o,c),n.child)}function Tg(e,n,r,o,c){if(e===null){var d=r.type;return typeof d=="function"&&!jh(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,Ag(e,n,d,o,c)):(e=mc(r.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Vd(e,c)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:zl,r(S,o)&&e.ref===n.ref)return Va(e,n,c)}return n.flags|=1,e=Pa(d,o),e.ref=n.ref,e.return=n,n.child=e}function Ag(e,n,r,o,c){if(e!==null){var d=e.memoizedProps;if(zl(d,o)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=o=d,Vd(e,c))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,Va(e,n,c)}return Od(e,n,r,o,c)}function Rg(e,n,r,o){var c=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,n.child=null;return Cg(e,n,d,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mc(n,d!==null?d.cachePool:null),d!==null?Dx(n,d):cd(),Ux(n);else return o=n.lanes=536870912,Cg(e,n,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(Mc(n,d.cachePool),Dx(n,d),Ar(),n.memoizedState=null):(e!==null&&Mc(n,null),cd(),Ar());return Tn(e,n,c,r),n.child}function Ql(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Cg(e,n,r,o,c){var d=ad();return d=d===null?null:{parent:gn._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},e!==null&&Mc(n,null),cd(),Ux(n),e!==null&&ms(e,n,o,!0),n.childLanes=c,null}function Bc(e,n){return n=Hc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function wg(e,n,r){return ys(n,e.child,null,r),e=Bc(n,n.pendingProps),e.flags|=2,gi(n),n.memoizedState=null,e}function Xb(e,n,r){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=Bc(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ql(null,e);if(hd(n),(e=tn)?(e=eS(e,Vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_r!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},r=hx(e),r.return=n,n.child=r,Dn=n,tn=null)):e=null,e===null)throw gr(n);return n.lanes=536870912,null}return Bc(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(hd(n),c)if(n.flags&256)n.flags&=-257,n=wg(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(Sn||ms(e,n,r,!1),c=(r&e.childLanes)!==0,Sn||c){if(Er.current===null){if(o=Qe,o!==null&&(S=U(o,r),S!==0&&S!==d.retryLane))throw d.retryLane=S,fs(e,S),ci(o,e,S),Ld;sf()}n=wg(e,n,r)}else e=d.treeContext,tn=Xi(S.nextSibling),Dn=n,Se=!0,xr=null,Vi=!1,e!==null&&mx(n,e),n=Bc(n,o),n.flags|=134221824;return n}return e=Pa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function go(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function Od(e,n,r,o,c){return _s(n),r=md(e,n,r,o,void 0,c),o=_d(),e!==null&&!Sn?(xd(e,n,c),Va(e,n,c)):(Se&&o&&xc(n),n.flags|=1,Tn(e,n,r,c),n.child)}function Dg(e,n,r,o,c,d){return _s(n),n.updateQueue=null,r=Lx(n,o,r,c),Nx(e),o=_d(),e!==null&&!Sn?(xd(e,n,d),Va(e,n,d)):(Se&&o&&xc(n),n.flags|=1,Tn(e,n,r,d),n.child)}function Ug(e,n,r,o,c){if(_s(n),n.stateNode===null){var d=oo,S=r.contextType;typeof S=="object"&&S!==null&&(d=zn(S)),d=new r(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ud,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},sd(n),S=r.contextType,d.context=typeof S=="object"&&S!==null?zn(S):oo,d.state=n.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Dd(n,r,S,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Ud.enqueueReplaceState(d,d.state,null),ql(n,o,d,c),Yl(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var T=n.memoizedProps,I=bs(r,T);d.props=I;var W=d.context,rt=r.contextType;S=oo,typeof rt=="object"&&rt!==null&&(S=zn(rt));var pt=r.getDerivedStateFromProps;rt=typeof pt=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,rt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||W!==S)&&xg(n,d,o,S),yr=!1;var Y=n.memoizedState;d.state=Y,ql(n,o,d,c),Yl(),W=n.memoizedState,T||Y!==W||yr?(typeof pt=="function"&&(Dd(n,r,pt,o),W=n.memoizedState),(I=yr||_g(n,r,I,o,Y,W,S))?(rt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=W),d.props=o,d.state=W,d.context=S,o=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,od(e,n),S=n.memoizedProps,rt=bs(r,S),d.props=rt,pt=n.pendingProps,Y=d.context,W=r.contextType,I=oo,typeof W=="object"&&W!==null&&(I=zn(W)),T=r.getDerivedStateFromProps,(W=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==pt||Y!==I)&&xg(n,d,o,I),yr=!1,Y=n.memoizedState,d.state=Y,ql(n,o,d,c),Yl();var tt=n.memoizedState;S!==pt||Y!==tt||yr||e!==null&&e.dependencies!==null&&Sc(e.dependencies)?(typeof T=="function"&&(Dd(n,r,T,o),tt=n.memoizedState),(rt=yr||_g(n,r,rt,o,Y,tt,I)||e!==null&&e.dependencies!==null&&Sc(e.dependencies))?(W||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,tt,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,tt,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=tt),d.props=o,d.state=tt,d.context=I,o=rt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,go(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=ys(n,e.child,null,c),n.child=ys(n,null,r,c)):Tn(e,n,r,c),n.memoizedState=d.state,e=n.child):e=Va(e,n,c),e}function Ng(e,n,r,o){return ds(),n.flags|=256,Tn(e,n,r,o),n.child}var Pd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zd(e){return{baseLanes:e,cachePool:yx()}}function Id(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=yi),e}function Lg(e,n,r){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(Fn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(c?Tr(n):Ar(),(e=tn)?(e=eS(e,Vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_r!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},r=hx(e),r.return=n,n.child=r,Dn=n,tn=null)):e=null,e===null)throw gr(n);return zp(e)?n.lanes=32:n.lanes=536870912,null}return d=o.children,o=o.fallback,c?(Ar(),c=n.mode,d=Hc({mode:"hidden",children:d},c),o=hs(o,c,r,null),d.return=n,o.return=n,d.sibling=o,n.child=d,o=n.child,o.memoizedState=zd(r),o.childLanes=Id(e,S,r),n.memoizedState=Pd,Ql(null,o)):(Tr(n),Fd(n,d))}var T=e.memoizedState;if(T!==null){var I=T.dehydrated;if(I!==null)return kb(e,n,d,S,o,I,T,r)}return c?(Ar(),c=o.fallback,d=n.mode,T=e.child,I=T.sibling,o=Pa(T,{mode:"hidden",children:o.children}),o.subtreeFlags=T.subtreeFlags&1206910976,I!==null?c=Pa(I,c):(c=hs(c,d,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,Ql(null,o),o=n.child,c=e.child.memoizedState,c===null?c=zd(r):(d=c.cachePool,d!==null?(T=gn._currentValue,d=d.parent!==T?{parent:T,pool:T}:d):d=yx(),c={baseLanes:c.baseLanes|r,cachePool:d}),o.memoizedState=c,o.childLanes=Id(e,S,r),n.memoizedState=Pd,Ql(e.child,o)):(Tr(n),r=e.child,e=r.sibling,r=Pa(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=r,n.memoizedState=null,r)}function Fd(e,n){return n=Hc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hc(e,n){return e=si(22,e,null,n),e.lanes=0,e}function Vc(e,n,r){return ys(n,e.child,null,r),e=Fd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function kb(e,n,r,o,c,d,S,T){if(r)return n.flags&256?(Tr(n),n.flags&=-257,Vc(e,n,T)):n.memoizedState!==null?(Ar(),n.child=e.child,n.flags|=128,null):(Ar(),d=c.fallback,S=n.mode,c=Hc({mode:"visible",children:c.children},S),d=hs(d,S,T,null),d.flags|=2,c.return=n,d.return=n,c.sibling=d,n.child=c,ys(n,e.child,null,T),c=n.child,c.memoizedState=zd(T),c.childLanes=Id(e,o,T),n.memoizedState=Pd,Ql(null,c));if(Tr(n),zp(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var I=o.dgst;return o=I,o!==""&&(c=Error(a(419)),c.stack="",c.digest=o,Bl({value:c,source:null,stack:null})),Vc(e,n,T)}if(Sn||ms(e,n,T,!1),o=(T&e.childLanes)!==0,Sn||o){if(Er.current!==null)return Vc(e,n,T);if(o=Qe,o!==null&&(c=U(o,T),c!==0&&c!==S.retryLane))throw S.retryLane=c,fs(e,c),ci(o,e,c),Ld;return Pp(d)||sf(),Vc(e,n,T)}return Pp(d)?(n.flags|=192,n.child=e.child,null):(e=S.treeContext,tn=Xi(d.nextSibling),Dn=n,Se=!0,xr=null,Vi=!1,e!==null&&mx(n,e),n=Fd(n,c.children),n.flags|=134221824,n)}function Og(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),vc(e.return,n,r)}function Pg(e){for(var n=null;e!==null;){var r=e.alternate;r!==null&&Cc(r)===null&&(n=e),e=e.sibling}return n}function Gc(e,n,r,o,c,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=r,S.tailMode=c,S.treeForkCount=d)}function Bd(e){var n=e.child;for(e.child=null;n!==null;){var r=n.sibling;n.sibling=e.child,e.child=n,n=r}}function Hd(e,n,r){var o=n.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var S=Fn.current;if(n.flags&128)return Wl(n,S),null;var T=(S&2)!==0;if(T?(S=S&1|2,n.flags|=128):S&=1,Wl(n,S),c==="backwards"&&e!==null?(Bd(e),Tn(e,n,o,r),Bd(e)):Tn(e,n,o,r),o=Se?Fl:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Og(e,r,n);else if(e.tag===19)Og(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":r=Pg(n.child),r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null,Bd(n)),Gc(n,!0,c,null,d,o);break;case"unstable_legacy-backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Cc(e)===null){n.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}Gc(n,!0,r,null,d,o);break;case"together":Gc(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:r=Pg(n.child),r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Gc(n,!1,c,r,d,o)}return n.child}function zg(e,n,r){var o=n.pendingProps;return vr(n,n.type,o.value),Tn(e,n,o.children,r),n.child}function Va(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Dr|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(ms(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Pa(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Pa(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Vd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sc(e)))}function Yb(e,n,r){switch(n.tag){case 3:z(n,n.stateNode.containerInfo),vr(n,gn,e.memoizedState.cache),ds();break;case 27:case 5:nt(n);break;case 4:z(n,n.stateNode.containerInfo);break;case 10:vr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hd(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return Tr(n),n.flags|=128,null;o=ms(e,n,r,!1);var c=n.child.childLanes;return o||(r&c)!==0?Lg(e,n,r):(Tr(n),e=Va(e,n,r),e!==null?e.sibling:null)}Tr(n);break;case 19:if(n.flags&128)return Hd(e,n,r);if(c=(e.flags&128)!==0,o=(r&n.childLanes)!==0,o||(ms(e,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return Hd(e,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Wl(n,Fn.current),o)break;return null;case 22:return n.lanes=0,Rg(e,n,r,n.pendingProps);case 24:vr(n,gn,e.memoizedState.cache)}return Va(e,n,r)}function Ig(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Vd(e,r)&&(n.flags&128)===0)return Sn=!1,Yb(e,n,r);Sn=(e.flags&131072)!==0}else Sn=!1,Se&&(n.flags&1048576)!==0&&px(n,Fl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=vs(n.elementType),n.type=e,typeof e=="function")jh(e)?(o=bs(e,o),n.tag=1,n=Ug(null,n,e,o,r)):(n.tag=0,n=Od(null,n,e,o,r));else{if(e!=null){var c=e.$$typeof;if(c===k){n.tag=11,n=Eg(null,n,e,o,r);break t}else if(c===xt){n.tag=14,n=Tg(null,n,e,o,r);break t}else if(c===st){n.tag=10,n.type=e,n=zg(null,n,r);break t}}throw n=Ot(e)||e,Error(a(306,n,""))}}return n;case 0:return Od(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=bs(o,n.pendingProps),Ug(e,n,o,c,r);case 3:t:{if(z(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,od(e,n),ql(n,o,null,r);var S=n.memoizedState;if(o=S.cache,vr(n,gn,o),o!==d.cache&&ed(n,[gn],r,!0),Yl(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Ng(e,n,o,r);break t}else if(o!==c){c=Fi(Error(a(424)),n),Bl(c),n=Ng(e,n,o,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Xi(e.firstChild),Dn=n,Se=!0,xr=null,Vi=!0,r=Rx(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|134221824,r=r.sibling}else{if(ds(),o===c){n=Va(e,n,r);break t}Tn(e,n,o,r)}n=n.child}return n;case 26:return go(e,n),e===null?(r=lS(n.type,null,n.pendingProps,null))?n.memoizedState=r:Se||(n.stateNode=Vv(n.type,n.pendingProps,Yt.current,n)):n.memoizedState=lS(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return nt(n),e===null&&Se&&(o=n.stateNode=aS(n.type,n.pendingProps,Yt.current),Dn=n,Vi=!0,c=tn,Or(n.type)?(Ip=c,tn=Xi(o.firstChild)):tn=c),Tn(e,n,n.pendingProps.children,r),go(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((c=o=tn)&&(o=BE(o,n.type,n.pendingProps,Vi),o!==null?(n.stateNode=o,Dn=n,tn=Xi(o.firstChild),Vi=!1,c=!0):c=!1),c||gr(n)),nt(n),c=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,Cp(c,d)?o=null:S!==null&&Cp(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=md(e,n,Ob,null,null,r),zo._currentValue=c),go(e,n),Tn(e,n,o,r),n.child;case 6:return e===null&&Se&&((e=r=tn)&&(r=HE(r,n.pendingProps,Vi),r!==null?(n.stateNode=r,Dn=n,tn=null,e=!0):e=!1),e||gr(n)),null;case 13:return Lg(e,n,r);case 4:return z(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ys(n,null,o,r):Tn(e,n,o,r),n.child;case 11:return Eg(e,n,n.type,n.pendingProps,r);case 7:return o=n.pendingProps,go(e,n),Tn(e,n,o,r),n.child;case 8:return Tn(e,n,n.pendingProps.children,r),n.child;case 12:return Tn(e,n,n.pendingProps.children,r),n.child;case 10:return zg(e,n,r);case 9:return c=n.type._context,o=n.pendingProps.children,_s(n),c=zn(c),o=o(c),n.flags|=1,Tn(e,n,o,r),n.child;case 14:return Tg(e,n,n.type,n.pendingProps,r);case 15:return Ag(e,n,n.type,n.pendingProps,r);case 19:return Hd(e,n,r);case 31:return Xb(e,n,r);case 22:return Rg(e,n,r,n.pendingProps);case 24:return _s(n),o=zn(gn),e===null?(c=ad(),c===null&&(c=Qe,d=nd(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=r),c=d),n.memoizedState={parent:o,cache:c},sd(n),vr(n,gn,c)):((e.lanes&r)!==0&&(od(e,n),ql(n,null,null,r),Yl()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),vr(n,gn,o)):(o=d.cache,vr(n,gn,o),o!==c.cache&&ed(n,[gn],r,!0))),Tn(e,n,n.pendingProps.children,r),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:Se&&xc(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:go(e,n),Tn(e,n,o.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Ga(e){e.flags|=4}function Gd(e,n,r,o,c){var d;if((d=(e.mode&32)!==0)&&(d=r===null?hS(n,o):hS(n,o)&&(o.src!==r.src||o.srcSet!==r.srcSet)),d){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(gv())e.flags|=8192;else throw Ss=Ec,rd}else e.flags&=-16777217}function Fg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dS(n))if(gv())e.flags|=8192;else throw Ss=Ec,rd}function Xc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?$u():536870912,e.lanes|=n,bo|=n)}function Jl(e,n){if(!Se)switch(e.tailMode){case"visible":break;case"collapsed":for(var r=e.tail,o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&1206910976,o|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function qb(e,n,r){var o=n.pendingProps;switch(Qh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Fa(gn),A(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(co(n)?Ga(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$h())),en(n),null;case 26:var c=n.type,d=n.memoizedState;return e===null?(Ga(n),d!==null?(en(n),Fg(n,d)):(en(n),Gd(n,c,null,o,r))):d?d!==e.memoizedState?(Ga(n),en(n),Fg(n,d)):(en(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ga(n),en(n),Gd(n,c,e,o,r)),null;case 27:if(mt(n),r=Yt.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ga(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return en(n),n.subtreeFlags&=-33554433,null}e=It.current,co(n)?_x(n):(e=aS(c,o,r),n.stateNode=e,Ga(n))}return en(n),n.subtreeFlags&=-33554433,null;case 5:if(mt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ga(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return en(n),n.subtreeFlags&=-33554433,null}if(d=It.current,co(n))_x(n);else{var S=uu(Yt.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}d[Tt]=n,d[Lt]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;t:switch(Hn(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ga(n)}}return en(n),n.subtreeFlags&=-33554433,Gd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=Yt.current,co(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Tt]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Iv(e.nodeValue,r)),e||gr(n,!0)}else e=uu(e).createTextNode(o),e[Tt]=n,n.stateNode=e}return en(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(o=co(n),r!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Tt]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),e=!1}else r=$h(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(gi(n),n):(gi(n),null);if((n.flags&128)!==0)throw Error(a(558))}return en(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=co(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Tt]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),c=!1}else c=$h(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(gi(n),n):(gi(n),null)}return gi(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),Xc(n,n.updateQueue),en(n),null);case 4:return A(),e===null&&bp(n.stateNode.containerInfo),n.flags|=67108864,en(n),null;case 10:return Fa(n.type),en(n),null;case 19:if(dd(n),o=n.memoizedState,o===null)return en(n),null;if(c=(n.flags&128)!==0,d=o.rendering,d===null)if(c)Jl(o,!1);else{if(cn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Cc(e),d!==null){for(n.flags|=128,Jl(o,!1),e=d.updateQueue,n.updateQueue=e,Xc(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)fx(r,e),r=r.sibling;return Wl(n,Fn.current&1|2),Se&&za(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&V()>ef&&(n.flags|=128,c=!0,Jl(o,!1),n.lanes=4194304)}else{if(!c)if(e=Cc(d),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Xc(n,e),Jl(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!d.alternate&&!Se)return en(n),null}else 2*V()-o.renderingStartTime>ef&&r!==536870912&&(n.flags|=128,c=!0,Jl(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}if(o.tail!==null){e=o.tail;t:{for(r=e;r!==null;){if(r.alternate!==null){r=!1;break t}r=r.sibling}r=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=V(),e.sibling=null,d=Fn.current,d=c?d&1|2:d&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!r||Se?Wl(n,d):(r=d,$t(In,n),$t(Fn,r),kn===null&&(kn=n)),Se&&za(n,o.treeForkCount),e}return en(n),null;case 22:case 23:return gi(n),fd(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),r=n.updateQueue,r!==null&&Xc(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&Qt(gs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Fa(gn),en(n),null;case 25:return null;case 30:return n.flags|=33554432,en(n),null}throw Error(a(156,n.tag))}function Wb(e,n){switch(Qh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fa(gn),A(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(gi(n),n.alternate===null)throw Error(a(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return dd(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return A(),null;case 10:return Fa(n.type),null;case 22:case 23:return gi(n),fd(),e!==null&&Qt(gs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fa(gn),null;case 25:return null;default:return null}}function Bg(e,n){switch(Qh(n),n.tag){case 3:Fa(gn),A();break;case 26:case 27:case 5:mt(n);break;case 4:A();break;case 31:n.memoizedState!==null&&gi(n);break;case 13:gi(n);break;case 19:dd(n);break;case 10:Fa(n.type);break;case 22:case 23:gi(n),fd(),e!==null&&Qt(gs);break;case 24:Fa(gn)}}function $l(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){o=void 0;var d=r.create,S=r.inst;o=d(),S.destroy=o}r=r.next}while(r!==c)}}catch(T){Ve(n,n.return,T)}}function Rr(e,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var I=r,W=T;try{W()}catch(rt){Ve(c,I,rt)}}}o=o.next}while(o!==d)}}catch(rt){Ve(n,n.return,rt)}}function Hg(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{wx(n,r)}catch(o){Ve(e,e.return,o)}}}function Vg(e,n,r){r.props=bs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Ve(e,n,o)}}function da(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var c=e.stateNode,d=La(e.memoizedProps,c);(c.ref===null||c.ref.name!==d)&&(c.ref=jv(d)),o=c.ref;break;case 7:if(e.stateNode===null){var S=new bi(e);x(e.child,!1,IE,S,void 0,void 0),e.stateNode=S}o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(T){Ve(e,n,T)}}function Bn(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Ve(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Ve(e,n,c)}else r.current=null}function kc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var r=0;r<n.length;r++)tS(e.stateNode,n[r])}function Gg(e){for(var n=e.return;n!==null&&(kd(n)&&tS(e.stateNode,n.stateNode),!Xd(n));)n=n.return}function tu(e){for(var n=e.return;n!==null&&(kd(n)&&FE(e.stateNode,n.stateNode),!Xd(n));)n=n.return}function Xd(e){return e.tag===5||e.tag===3||e.tag===27}function kd(e){return e&&e.tag===7&&e.stateNode!==null}function Yd(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Ve(e,e.return,c)}}function qd(e,n,r){try{var o=e.stateNode;vE(o,e.type,r,n),o[Lt]=n}catch(c){Ve(e,e.return,c)}}function Xg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Or(e.type)||e.tag===4}function Wd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Or(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jd(e,n,r,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(c,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(c),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=ca)),kc(e,o),me=!0;else if(c!==4&&(c===27&&(kc(e,o),o=null,Or(e.type)&&(r=e.stateNode,n=null)),e=e.child,e!==null))for(jd(e,n,r,o),e=e.sibling;e!==null;)jd(e,n,r,o),e=e.sibling}function Yc(e,n,r,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?r.insertBefore(c,n):r.appendChild(c),kc(e,o),me=!0;else if(c!==4&&(c===27&&(kc(e,o),o=null,Or(e.type)&&(r=e.stateNode)),e=e.child,e!==null))for(Yc(e,n,r,o),e=e.sibling;e!==null;)Yc(e,n,r,o),e=e.sibling}function kg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Hn(n,o,r),n[Tt]=e,n[Lt]=r}catch(d){Ve(e,e.return,d)}}var qc=!1,vi=null;function Yg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(qc=!0)}var pa=null;function qg(){var e=pa;return pa=null,e}var oi=0;function vo(e,n,r,o,c){return oi=0,Wg(e.child,n,r,o,c)}function Wg(e,n,r,o,c){for(var d=!1;e!==null;){if(e.tag===5){var S=e.stateNode;if(o!==null){var T=Up(S);o.push(T),T.view&&(d=!0)}else d||Up(S).view&&(d=!0);qc=!0,qv(S,oi===0?n:n+"_"+oi,r),oi++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||Wg(e.child,n,r,o,c)&&(d=!0));e=e.sibling}return d}function ma(e,n){for(;e!==null;)e.tag===5?Wv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ma(e.child,n)),e=e.sibling}function Wc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Wc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(a(544));var r=n.name;n=Oa(n.default,n.share),n!=="none"&&(vo(e,r,n,null,!1)||ma(e.child,!1))}e=e.sibling}}function Zd(e,n){if(e.tag===30){var r=e.stateNode,o=e.memoizedProps,c=La(o,r),d=Oa(o.default,r.paired?o.share:o.enter);d!=="none"?vo(e,c,d,null,!1)?(Wc(e),r.paired||n||Ro(e,o.onEnter)):ma(e.child,!1):Wc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Zd(e,n),e=e.sibling;else Wc(e)}function Kd(e){if(vi!==null&&vi.size!==0){var n=vi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var r=e.memoizedProps,o=r.name;if(o!=null&&o!=="auto"){var c=n.get(o);if(c!==void 0){var d=Oa(r.default,r.share);if(d!=="none"&&(vo(e,o,d,null,!1)?(d=e.stateNode,c.paired=d,d.paired=c,Ro(e,r.onShare)):ma(e.child,!1)),n.delete(o),n.size===0)break}}}Kd(e)}e=e.sibling}}}function Qd(e){if(e.tag===30){var n=e.memoizedProps,r=La(n,e.stateNode),o=vi!==null?vi.get(r):void 0,c=Oa(n.default,o!==void 0?n.share:n.exit);c!=="none"&&(vo(e,r,c,null,!1)?o!==void 0?(c=e.stateNode,o.paired=c,c.paired=o,vi.delete(r),Ro(e,n.onShare)):Ro(e,n.onExit):ma(e.child,!1)),vi!==null&&Kd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Qd(e),e=e.sibling;else vi!==null&&Kd(e)}function jg(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=La(n,e.stateNode);n=Oa(n.default,n.update),e.flags&=-5,n!=="none"&&vo(e,r,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&jg(e);e=e.sibling}}function Jd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ma(e.child,!1))}Jd(e)}e=e.sibling}}function jc(e){if(e.tag===30)e.stateNode.paired=null,ma(e.child,!1),Jd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)jc(e),e=e.sibling;else Jd(e)}function Zg(e){for(e=e.child;e!==null;)e.tag===30?ma(e.child,!1):(e.subtreeFlags&33554432)!==0&&Zg(e),e=e.sibling}function $d(e,n,r,o,c,d,S){for(var T=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(d!==null&&oi<d.length){var W=d[oi],rt=Up(I);(W.view||rt.view)&&(T=!0);var pt;if(pt=(e.flags&4)===0)if(rt.clip)pt=!0;else{pt=W.rect;var Y=rt.rect;pt=pt.y!==Y.y||pt.x!==Y.x||pt.height!==Y.height||pt.width!==Y.width}pt&&(e.flags|=4),rt.abs?rt=!W.abs:(W=W.rect,rt=rt.rect,rt=W.height!==rt.height||W.width!==rt.width),rt&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&qv(I,oi===0?r:r+"_"+oi,c),T&&(e.flags&4)!==0||(pa===null&&(pa=[]),pa.push(I,oi===0?o:o+"_"+oi,n.memoizedProps)),oi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?e.flags|=n.flags&32:$d(e,n.child,r,o,c,d,S)&&(T=!0));n=n.sibling}return T}function Kg(e,n){for(e=e.child;e!==null;){if(e.tag===30){var r=e.memoizedProps,o=e.stateNode,c=La(r,o),d=Oa(r.default,r.update),S;S=e.memoizedState,e.memoizedState=null,o=e;var T=e.child;oi=0,c=$d(o,T,c,c,d,S,!1),(e.flags&4)!==0&&c&&Ro(e,r.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Kg(e);e=e.sibling}}var Un=!1,Ie=!1,_a=!1,tp=!1,Qg=typeof WeakSet=="function"?WeakSet:Set,Nn=null,xa=!1,eu=!1,Zc=!1,ep=!1;function jb(e,n,r){if(e=e.containerInfo,Ap=Io,e=ex(e),Vh(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,S=c.focusNode;c=c.focusOffset;try{o.nodeType,S.nodeType}catch{o=null;break t}var T=0,I=-1,W=-1,rt=0,pt=0,Y=e,tt=null;e:for(;;){for(var Dt;Y!==o||d!==0&&Y.nodeType!==3||(I=T+d),Y!==S||c!==0&&Y.nodeType!==3||(W=T+c),Y.nodeType===3&&(T+=Y.nodeValue.length),(Dt=Y.firstChild)!==null;)tt=Y,Y=Dt;for(;;){if(Y===e)break e;if(tt===o&&++rt===d&&(I=T),tt===S&&++pt===c&&(W=T),(Dt=Y.nextSibling)!==null)break;Y=tt,tt=Y.parentNode}Y=Dt}o=I===-1||W===-1?null:{start:I,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(Rp={focusedElem:e,selectionRange:o},Io=!1,r=(r&335544064)===r,Nn=n,n=r?9270:1024;Nn!==null;){if(e=Nn,r&&(o=e.deletions,o!==null))for(d=0;d<o.length;d++)r&&Qd(o[d]);if(e.alternate===null&&(e.flags&2)!==0)r&&Yg(e),Kc(r);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&r&&Qd(o),Kc(r);continue}else if(o!==null&&o.memoizedState!==null){r&&Yg(e),Kc(r);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,Nn=o):(r&&jg(e),Kc(r))}}vi=null}function Kc(e){for(;Nn!==null;){var n=Nn,r=e,o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&o!==null){r=void 0,c=o.memoizedProps,o=o.memoizedState;var d=n.stateNode;try{var S=bs(n.type,c);r=d.getSnapshotBeforeUpdate(S,o),d.__reactInternalSnapshotBeforeUpdate=r}catch(T){Ve(n,n.return,T)}}break;case 3:if((c&1024)!==0){if(o=n.stateNode.containerInfo,r=o.nodeType,r===9)Op(o);else if(r===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Op(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:r&&o!==null&&(r=La(o.memoizedProps,o.stateNode),c=n.memoizedProps,c=Oa(c.default,c.update),c!=="none"&&vo(o,r,c,o.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(a(163))}if(o=n.sibling,o!==null){o.return=n.return,Nn=o;break}Nn=n.return}}function Jg(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ga(e,r),o&4&&$l(5,r);break;case 1:if(ga(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(S){Ve(r,r.return,S)}else{var c=bs(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ve(r,r.return,S)}}o&64&&Hg(r),o&512&&da(r,r.return);break;case 3:if(ga(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{wx(e,n)}catch(S){Ve(r,r.return,S)}}break;case 27:n===null&&o&4&&kg(r);case 26:case 5:ga(e,r),n===null&&o&4&&Yd(r),o&512&&da(r,r.return);break;case 12:ga(e,r);break;case 31:ga(e,r),o&4&&nv(e,r);break;case 13:ga(e,r),o&4&&iv(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=sE.bind(null,r),VE(e,r))));break;case 22:if(o=r.memoizedState!==null||Un,!o){var d=n!==null&&n.memoizedState!==null||Ie;n=Un,c=Ie,Un=o,(Ie=d)&&!c?(o=2,(r.subtreeFlags&8772)!==0&&(o|=1),ea(e,r,o)):ga(e,r),Un=n,Ie=c}break;case 30:ga(e,r),o&512&&da(r,r.return);break;case 7:o&512&&da(r,r.return);default:ga(e,r)}}function np(e,n){for(e=e.child;e!==null;)$g(e,n),e=e.sibling}function $g(e,n){switch(e.tag){case 5:case 26:try{var r=e.stateNode;if(n){var o=r.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var c=e.stateNode,d=e.memoizedProps.style,S=d!=null&&d.hasOwnProperty("display")?d.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(I){Ve(e,e.return,I)}ip(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,me=!0}catch(I){Ve(e,e.return,I)}break;case 18:try{var T=e.stateNode;n?Yv(T,!0):Yv(e.stateNode,!1)}catch(I){Ve(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&np(e,n);break;default:np(e,n)}}function ip(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var r=e,o=n;switch(r.tag){case 4:$g(r,o);break t;case 22:r.memoizedState===null&&ip(r,o);break t;default:ip(r,o)}}e=e.sibling}}function tv(e){var n=e.alternate;n!==null&&(e.alternate=null,tv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ke(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,li=!1;function $i(e,n,r){for(r=r.child;r!==null;)ev(e,n,r),r=r.sibling}function ev(e,n,r){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(we,r)}catch{}switch(r.tag){case 26:Ie||Bn(r,n),$i(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&!Ie&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ie||Bn(r,n),tu(r);var o=an,c=li;Or(r.type)&&(an=r.stateNode,li=!1),$i(e,n,r),rS(r.stateNode,r.type,r.memoizedProps),an=o,li=c;break;case 5:Ie||Bn(r,n),tu(r);case 6:if(r.tag===6&&tu(r),o=an,c=li,an=null,$i(e,n,r),an=o,li=c,an!==null)if(li)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(r.stateNode),me=!0}catch(d){Ve(r,n,d)}else try{an.removeChild(r.stateNode),me=!0}catch(d){Ve(r,n,d)}break;case 18:an!==null&&(li?(e=an,kv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Fo(e)):kv(an,r.stateNode));break;case 4:o=an,c=li,an=r.stateNode.containerInfo,li=!0,$i(e,n,r),an=o,li=c;break;case 0:case 11:case 14:case 15:Rr(2,r,n),Ie||Rr(4,r,n),$i(e,n,r);break;case 1:Ie||(Bn(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Vg(r,n,o)),$i(e,n,r);break;case 21:$i(e,n,r);break;case 22:Ie=(o=Ie)||r.memoizedState!==null,$i(e,n,r),Ie=o;break;case 30:Bn(r,n),$i(e,n,r);break;case 7:Ie||Bn(r,n),$i(e,n,r);break;default:$i(e,n,r)}}function nv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fo(e)}catch(r){Ve(n,n.return,r)}}}function iv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fo(e)}catch(r){Ve(n,n.return,r)}}function Zb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Qg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Qg),n;default:throw Error(a(435,e.tag))}}function Qc(e,n){var r=Zb(e);n.forEach(function(o){if(!r.has(o)){r.add(o);var c=oE.bind(null,e,o);o.then(c,c)}})}function $n(e,n,r){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],S=e,T=n,I=T;t:for(;I!==null;){switch(I.tag){case 27:if(Or(I.type)){an=I.stateNode,li=!1;break t}break;case 5:an=I.stateNode,li=!1;break t;case 3:case 4:an=I.stateNode.containerInfo,li=!0;break t}I=I.return}if(an===null)throw Error(a(160));ev(S,T,d),an=null,li=!1,S=d.alternate,S!==null&&(S.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)av(n,e,r),n=n.sibling}var ta=null;function av(e,n,r){var o=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var d=0;d<o.length;d++){var S=o[d];S.ref.impl=S.nextImpl}$n(n,e,r),ti(e),c&4&&(Rr(3,e,e.return),$l(3,e),Rr(5,e,e.return));break;case 1:$n(n,e,r),ti(e),c&512&&(Ie||o===null||Bn(o,o.return)),c&64&&Un&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?n:r.concat(n))));break;case 26:if(d=ta,$n(n,e,r),ti(e),c&512&&(Ie||o===null||Bn(o,o.return)),c&4)if(c=o!==null?o.memoizedState:null,r=e.memoizedState,o===null)if(r===null)if(e.stateNode===null)if(Un)e.stateNode=Vv(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,r=e.memoizedProps,c=d.ownerDocument||d;e:switch(n){case"title":o=c.getElementsByTagName("title")[0],(!o||o[De]||o[Tt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=c.createElement(n),c.head.insertBefore(o,c.querySelector("head > title"))),Hn(o,n,r),o[Tt]=e,Ne(o),n=o;break t;case"link":if(d=fS("link","href",c).get(n+(r.href||""))){for(S=0;S<d.length;S++)if(o=d[S],o.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&o.getAttribute("rel")===(r.rel==null?null:r.rel)&&o.getAttribute("title")===(r.title==null?null:r.title)&&o.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){d.splice(S,1);break e}}o=c.createElement(n),Hn(o,n,r),c.head.appendChild(o);break;case"meta":if(d=fS("meta","content",c).get(n+(r.content||""))){for(S=0;S<d.length;S++)if(o=d[S],o.getAttribute("content")===(r.content==null?null:""+r.content)&&o.getAttribute("name")===(r.name==null?null:r.name)&&o.getAttribute("property")===(r.property==null?null:r.property)&&o.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&o.getAttribute("charset")===(r.charSet==null?null:r.charSet)){d.splice(S,1);break e}}o=c.createElement(n),Hn(o,n,r),c.head.appendChild(o);break;default:throw Error(a(468,n))}o[Tt]=e,Ne(o),n=o}e.stateNode=n}else Un||Vp(d,e.type,e.stateNode);else e.stateNode=cS(d,r,e.memoizedProps);else c!==r?(c===null?(n=o.stateNode,n===null||Ie||n.parentNode.removeChild(n)):c.count--,r===null?Un||Vp(d,e.type,e.stateNode):cS(d,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qd(e,e.memoizedProps,o.memoizedProps);break;case 27:$n(n,e,r),ti(e),c&512&&(Ie||o===null||Bn(o,o.return)),o!==null&&c&4&&qd(e,e.memoizedProps,o.memoizedProps);break;case 5:if(d=_a,_a=!1,$n(n,e,r),_a=d,ti(e),c&512&&(Ie||o===null||Bn(o,o.return)),e.flags&32){n=e.stateNode;try{to(n,""),me=!0}catch(rt){Ve(e,e.return,rt)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,qd(e,n,o!==null?o.memoizedProps:n)),c&1024&&(tp=!0);break;case 6:if($n(n,e,r),ti(e),c&4){if(e.stateNode===null)throw Error(a(162));n=e.memoizedProps,r=e.stateNode;try{r.nodeValue=n,me=!0}catch(rt){Ve(e,e.return,rt)}}break;case 3:if(me=!1,df=null,d=ta,ta=cu(n.containerInfo),$n(n,e,r),ta=d,ti(e),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Fo(n.containerInfo)}catch(rt){Ve(e,e.return,rt)}tp&&(tp=!1,rv(e)),me=!1;break;case 4:c=_a,_a=Un,o=T_(),d=ta,ta=cu(e.stateNode.containerInfo),$n(n,e,r),ti(e),ta=d,me&&eu&&(Zc=!0),me=o,_a=c;break;case 12:$n(n,e,r),ti(e);break;case 31:$n(n,e,r),ti(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Qc(e,n)));break;case 13:$n(n,e,r),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(tf=V()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Qc(e,n)));break;case 22:d=e.memoizedState!==null,S=o!==null&&o.memoizedState!==null;var T=Un,I=Ie,W=_a;Un=T||d,_a=W||d,Ie=I||S,$n(n,e,r),Ie=I,_a=W,Un=T,ti(e),c&8192&&(n=e.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,!d||o===null||S||Un||Ie||(n=S||Ie,r=Un,o=Ie,Un=d||Un,Ie=n,Cr(e,2),Un=r,Ie=o),!d&&_a||np(e,d)),c&4&&(n=e.updateQueue,n!==null&&(r=n.retryQueue,r!==null&&(n.retryQueue=null,Qc(e,r))));break;case 19:$n(n,e,r),ti(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Qc(e,n)));break;case 30:c&512&&(Ie||o===null||Bn(o,o.return)),c=T_(),d=eu,S=(r&335544064)===r,T=e.memoizedProps,eu=S&&Oa(T.default,T.update)!=="none",$n(n,e,r),ti(e),S&&o!==null&&me&&(e.flags|=4),eu=d,me=c;break;case 21:break;case 7:c&512&&(Ie||o===null||Bn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:$n(n,e,r),ti(e)}}function ti(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(Xg(o)){r=o;break}o=o.return}o=null;for(var c=e.return;c!==null;){if(kd(c)){var d=c.stateNode;o===null?o=[d]:o.push(d)}if(Xd(c))break;c=c.return}var S=o;if(r==null)throw Error(a(160));switch(r.tag){case 27:var T=r.stateNode,I=Wd(e);Yc(e,I,T,S);break;case 5:var W=r.stateNode;r.flags&32&&(to(W,""),r.flags&=-33);var rt=Wd(e);Yc(e,rt,W,S);break;case 3:case 4:var pt=r.stateNode.containerInfo,Y=Wd(e);jd(e,Y,pt,S);break;default:throw Error(a(161))}}catch(tt){Ve(e,e.return,tt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function rv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;rv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Io=!0,n.reset(),Io=!1),e=e.sibling}}function So(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)sv(n,e),n=n.sibling;else Kg(n)}function sv(e,n){var r=e.alternate;if(r===null)Zd(e,!1);else switch(e.tag){case 3:if(ep=xa=!1,qg(),So(n,e),!xa&&!Zc){if(e=pa,e!==null)for(var o=0;o<e.length;o+=3){r=e[o];var c=e[o+1];Wv(r,e[o+2]),r=r.ownerDocument.documentElement,r!==null&&r.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ep=!0}pa=null;break;case 5:So(n,e);break;case 4:o=xa,xa=!1,So(n,e),xa&&(Zc=!0),xa=o;break;case 22:e.memoizedState===null&&(r.memoizedState!==null?Zd(e,!1):So(n,e));break;case 30:o=xa,c=qg(),xa=!1,So(n,e),xa&&(e.flags|=4);var d=e.memoizedProps,S=e.stateNode;n=La(d,S),S=La(r.memoizedProps,S);var T=Oa(d.default,d.update);T==="none"?n=!1:(d=r.memoizedState,r.memoizedState=null,r=e.child,oi=0,n=$d(e,r,n,S,T,d,!0),oi!==(d===null?0:d.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Ro(e,e.memoizedProps.onUpdate),pa=c):c!==null&&(c.push.apply(c,pa),pa=c),xa=(e.flags&32)!==0?!0:o;break;default:So(n,e)}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Jg(e,n.alternate,n),n=n.sibling}function Cr(e,n){for(e=e.child;e!==null;){var r=e,o=n;switch(r.tag){case 0:case 11:case 14:case 15:Rr(4,r,r.return),Cr(r,o);break;case 1:Bn(r,r.return);var c=r.stateNode;typeof c.componentWillUnmount=="function"&&Vg(r,r.return,c),Cr(r,o);break;case 27:(o&2)!==0&&rS(r.stateNode,r.type,r.memoizedProps);case 5:Bn(r,r.return),r.tag!==5&&r.tag!==27||tu(r),Cr(r,o);break;case 6:tu(r);break;case 26:Bn(r,r.return),c=r.stateNode,r.memoizedState!==null||c===null||Ie||c.parentNode.removeChild(c),Cr(r,o);break;case 22:r.memoizedState===null&&Cr(r,o);break;case 30:Bn(r,r.return),Cr(r,o);break;case 7:Bn(r,r.return);default:Cr(r,o)}e=e.sibling}}function ea(e,n,r){for(r=(n.subtreeFlags&8772)!==0?r:r&-2,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,S=d.flags,T=(r&1)!==0;switch(d.tag){case 0:case 11:case 15:ea(c,d,r),$l(4,d);break;case 1:if(ea(c,d,r),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(rt){Ve(o,o.return,rt)}if(o=d,c=o.updateQueue,c!==null){var I=o.stateNode;try{var W=c.shared.hiddenCallbacks;if(W!==null)for(c.shared.hiddenCallbacks=null,c=0;c<W.length;c++)Cx(W[c],I)}catch(rt){Ve(o,o.return,rt)}}T&&S&64&&Hg(d),da(d,d.return);break;case 27:(r&2)!==0&&kg(d);case 5:d.tag!==5&&d.tag!==27||Gg(d),ea(c,d,r),T&&o===null&&S&4&&Yd(d),da(d,d.return);break;case 6:Gg(d);break;case 26:I=d.stateNode,d.memoizedState!==null||I===null||Un||Vp(cu(I.ownerDocument),d.type,I),ea(c,d,r),T&&o===null&&S&4&&Yd(d),da(d,d.return);break;case 12:ea(c,d,r);break;case 31:ea(c,d,r),T&&S&4&&nv(c,d);break;case 13:ea(c,d,r),T&&S&4&&iv(c,d);break;case 22:d.memoizedState===null&&ea(c,d,r),da(d,d.return);break;case 30:ea(c,d,r),da(d,d.return);break;case 7:da(d,d.return);default:ea(c,d,r)}n=n.sibling}}function ap(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Hl(r))}function rp(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Hl(e))}function Gi(e,n,r,o){var c=(r&335544064)===r;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)ov(e,n,r,o),n=n.sibling;else c&&Zg(n)}function ov(e,n,r,o){var c=(r&335544064)===r;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&jc(n);var d=n.flags;switch(n.tag){case 0:case 11:case 15:Gi(e,n,r,o),d&2048&&$l(9,n);break;case 1:Gi(e,n,r,o);break;case 3:Gi(e,n,r,o),c&&ep&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),d&2048&&(d=null,n.alternate!==null&&(d=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==d&&(n.refCount++,d!=null&&Hl(d)));break;case 12:if(d&2048){Gi(e,n,r,o),d=n.stateNode;try{var S=n.memoizedProps,T=S.id,I=S.onPostCommit;typeof I=="function"&&I(T,n.alternate===null?"mount":"update",d.passiveEffectDuration,-0)}catch(W){Ve(n,n.return,W)}}else Gi(e,n,r,o);break;case 31:Gi(e,n,r,o);break;case 13:Gi(e,n,r,o);break;case 23:break;case 22:S=n.stateNode,T=n.alternate,n.memoizedState!==null?(c&&T!==null&&T.memoizedState===null&&jc(T),S._visibility&2?Gi(e,n,r,o):nu(e,n)):(c&&T!==null&&T.memoizedState!==null&&jc(n),S._visibility&2?Gi(e,n,r,o):(S._visibility|=2,yo(e,n,r,o,(n.subtreeFlags&10256)!==0||!1))),d&2048&&ap(T,n);break;case 24:Gi(e,n,r,o),d&2048&&rp(n.alternate,n);break;case 30:c&&(d=n.alternate,d!==null&&(ma(d.child,!0),ma(n.child,!0))),Gi(e,n,r,o);break;default:Gi(e,n,r,o)}}function yo(e,n,r,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,T=r,I=o,W=S.flags;switch(S.tag){case 0:case 11:case 15:yo(d,S,T,I,c),$l(8,S);break;case 23:break;case 22:var rt=S.stateNode;S.memoizedState!==null?rt._visibility&2?yo(d,S,T,I,c):nu(d,S):(rt._visibility|=2,yo(d,S,T,I,c)),c&&W&2048&&ap(S.alternate,S);break;case 24:yo(d,S,T,I,c),c&&W&2048&&rp(S.alternate,S);break;default:yo(d,S,T,I,c)}n=n.sibling}}function nu(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,c=o.flags;switch(o.tag){case 22:nu(r,o),c&2048&&ap(o.alternate,o);break;case 24:nu(r,o),c&2048&&rp(o.alternate,o);break;default:nu(r,o)}n=n.sibling}}var Es=8192;function Ts(e,n,r){if(e.subtreeFlags&Es)for(e=e.child;e!==null;)lv(e,n,r),e=e.sibling}function lv(e,n,r){switch(e.tag){case 26:Ts(e,n,r),e.flags&Es&&(e.memoizedState!==null?e3(r,ta,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&mS(r,e)));break;case 5:Ts(e,n,r),e.flags&Es&&(e=e.stateNode,(n&335544128)===n&&mS(r,e));break;case 3:case 4:var o=ta;ta=cu(e.stateNode.containerInfo),Ts(e,n,r),ta=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Es,Es=16777216,Ts(e,n,r),Es=o):Ts(e,n,r));break;case 30:if((e.flags&Es)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var c=e.stateNode;c.paired=null,vi===null&&(vi=new Map),vi.set(o,c)}Ts(e,n,r);break;default:Ts(e,n,r)}}function uv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function iu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Nn=o,fv(o,e)}uv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cv(e),e=e.sibling}function cv(e){switch(e.tag){case 0:case 11:case 15:iu(e),e.flags&2048&&Rr(9,e,e.return);break;case 3:iu(e);break;case 12:iu(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Jc(e)):iu(e);break;default:iu(e)}}function Jc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Nn=o,fv(o,e)}uv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Rr(8,n,n.return),Jc(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Jc(n));break;default:Jc(n)}e=e.sibling}}function fv(e,n){for(;Nn!==null;){var r=Nn;switch(r.tag){case 0:case 11:case 15:Rr(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Hl(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Nn=o;else t:for(r=e;Nn!==null;){o=Nn;var c=o.sibling,d=o.return;if(tv(o),o===r){Nn=null;break t}if(c!==null){c.return=d,Nn=c;break t}Nn=d}}}var Kb={getCacheForType:function(e){var n=zn(gn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return zn(gn).controller.signal}},Qb=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Qe=null,ye=null,Ee=0,He=0,Si=null,wr=!1,Mo=!1,sp=!1,Xa=0,cn=0,Dr=0,As=0,$c=0,yi=0,bo=0,au=null,ui=null,op=!1,tf=0,hv=0,ef=1/0,nf=null,Ur=null,sn=0,na=null,Rs=null,va=0,lp=0,up=null,dv=null,Eo=null,To=null,Ao=null,ru=0,af=null;function Mi(){return(Pe&2)!==0&&Ee!==0?Ee&-Ee:Mt.T!==null?vp():ut()}function pv(){if(yi===0)if((Ee&536870912)===0||Se){var e=rs;rs<<=1,(rs&3932160)===0&&(rs=262144),yi=e}else yi=536870912;return e=In.current,e!==null&&(e.flags|=32),yi}function Ro(e,n){if(n!=null){var r=e.stateNode,o=r.ref;o===null&&(o=r.ref=jv(La(e.memoizedProps,r))),To===null&&(To=[]),To.push(n.bind(null,o))}}function ci(e,n,r){(e===Qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Co(e,0),Nr(e,Ee,yi,!1)),ls(e,r),((Pe&2)===0||e!==Qe)&&(e===Qe&&((Pe&2)===0&&(As|=r),cn===4&&Nr(e,Ee,yi,!1)),Sa(e))}function mv(e,n,r){if((Pe&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&e.expiredLanes)===0||ua(e,n),c=o?tE(e,n):fp(e,n,!0),d=o;do{if(c===0){Mo&&!o&&Nr(e,n,0,!1);break}else{if(r=e.current.alternate,d&&!Jb(r)){c=fp(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;c=au;var I=T.current.memoizedState.isDehydrated;if(I&&(Co(T,S).flags|=256),S=fp(T,S,!1),S!==2&&S!==6){if(sp&&!I){T.errorRecoveryDisabledLanes|=d,As|=d,c=4;break t}d=ui,ui=c,d!==null&&(ui===null?ui=d:ui.push.apply(ui,d))}c=S}if(d=!1,c!==2)continue}}if(c===1){Co(e,0),Nr(e,n,0,!0);break}t:{switch(o=e,d=c,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Nr(o,n,yi,!wr);break t;case 2:ui=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=tf+300-V(),10<c)){if(Nr(o,n,yi,!wr),os(o,0,!0)!==0)break t;va=n,o.timeoutHandle=Dp(_v.bind(null,o,r,ui,nf,op,n,yi,As,bo,wr,d,"Throttled",-0,0),c);break t}_v(o,r,ui,nf,op,n,yi,As,bo,wr,d,null,-0,0)}}break}while(!0);Sa(e)}function _v(e,n,r,o,c,d,S,T,I,W,rt,pt,Y,tt){e.timeoutHandle=-1;var Dt=n.subtreeFlags,kt=(d&335544064)===d;if(pt=null,(kt||Dt&8192||(Dt&16785408)===16785408)&&(pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},vi=null,lv(n,d,pt),kt&&(Dt=pt,kt=e.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Dt.count++,Dt.waitingForViewTransition=!0,Dt=du.bind(Dt),kt.finished.then(Dt,Dt))),Dt=(d&62914560)===d?tf-V():(d&4194048)===d?hv-V():0,Dt=n3(pt,Dt),Dt!==null)){va=d,e.cancelPendingCommit=Dt(Ev.bind(null,e,n,d,r,o,c,S,T,I,W,rt,pt,null,Y,tt)),Nr(e,d,S,!W);return}Ev(e,n,d,r,o,c,S,T,I,W,rt,pt)}function Jb(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],d=c.getSnapshot;c=c.value;try{if(!xi(d(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Nr(e,n,r,o){n=Al(e,n),n&=~$c,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-Kn(c),S=1<<d;o[d]=-1,c&=~S}r!==0&&tc(e,r,n)}function rf(){return(Pe&6)===0?(su(0),!1):!0}function cp(){if(ye!==null){if(He===0)var e=ye.return;else e=ye,Ia=ps=null,gd(e),po=null,Xl=0,e=ye;for(;e!==null;)Bg(e.alternate,e),e=e.return;ye=null}}function Co(e,n){var r=e.timeoutHandle;return r!==-1&&(e.timeoutHandle=-1,ME(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),va=0,cp(),Qe=e,ye=r=Pa(e.current,null),Ee=n,He=0,Si=null,wr=!1,Mo=ua(e,n),sp=!1,bo=yi=$c=As=Dr=cn=0,ui=au=null,op=!1,Xa=Al(e,n),hc(),r}function xv(e,n){he=null,Mt.H=Ic,n===ho||n===bc?(n=Ex(),He=3):n===rd?(n=Ex(),He=4):He=n===Ld?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Si=n,ye===null&&(cn=1,Fc(e,Fi(n,e.current)))}function gv(){var e=In.current;return e===null?!0:(Ee&4194048)===Ee?kn===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===kn:!1}function vv(){var e=Mt.H;return Mt.H=Ic,e===null?Ic:e}function Sv(){var e=Mt.A;return Mt.A=Kb,e}function sf(){cn=4,wr||(Ee&4194048)!==Ee&&In.current!==null||(Mo=!0),(Dr&134217727)===0&&(As&134217727)===0||Qe===null||Nr(Qe,Ee,yi,!1)}function fp(e,n,r){var o=Pe;Pe|=2;var c=vv(),d=Sv();(Qe!==e||Ee!==n)&&(nf=null,Co(e,n)),n=!1;var S=cn;t:do try{if(He!==0&&ye!==null){var T=ye,I=Si;switch(He){case 8:cp(),S=6;break t;case 3:case 2:case 9:case 6:In.current===null&&(n=!0);var W=He;if(He=0,Si=null,wo(e,T,I,W),r&&Mo){S=0;break t}break;default:W=He,He=0,Si=null,wo(e,T,I,W)}}$b(),S=cn;break}catch(rt){xv(e,rt)}while(!0);return n&&e.shellSuspendCounter++,Ia=ps=null,Pe=o,Mt.H=c,Mt.A=d,ye===null&&(Qe=null,Ee=0,hc()),S}function $b(){for(;ye!==null;)yv(ye)}function tE(e,n){var r=Pe;Pe|=2;var o=vv(),c=Sv();Qe!==e||Ee!==n?(nf=null,ef=V()+500,Co(e,n)):Mo=ua(e,n);t:do try{if(He!==0&&ye!==null){n=ye;var d=Si;e:switch(He){case 1:He=0,Si=null,wo(e,n,d,1);break;case 2:case 9:if(Mx(d)){He=0,Si=null,Mv(n);break}n=function(){He!==2&&He!==9||Qe!==e||(He=7),Sa(e)},d.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Mx(d)?(He=0,Si=null,Mv(n)):(He=0,Si=null,wo(e,n,d,7));break;case 5:var S=null;switch(ye.tag){case 26:S=ye.memoizedState;case 5:case 27:var T=ye;if(S?dS(S):T.stateNode.complete){He=0,Si=null;var I=T.sibling;if(I!==null)ye=I;else{var W=T.return;W!==null?(ye=W,of(W)):ye=null}break e}}He=0,Si=null,wo(e,n,d,5);break;case 6:He=0,Si=null,wo(e,n,d,6);break;case 8:cp(),cn=6;break t;default:throw Error(a(462))}}eE();break}catch(rt){xv(e,rt)}while(!0);return Ia=ps=null,Mt.H=o,Mt.A=c,Pe=r,ye!==null?0:(Qe=null,Ee=0,hc(),cn)}function eE(){for(;ye!==null&&!Ft();)yv(ye)}function yv(e){var n=Ig(e.alternate,e,Xa);e.memoizedProps=e.pendingProps,n===null?of(e):ye=n}function Mv(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Dg(r,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Dg(r,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:gd(n);var o=n;o===Dn&&(Se?(gc(o),o.tag===5&&o.stateNode!=null&&(tn=o.stateNode)):(gc(o),Se=!0));default:Bg(r,n),n=ye=fx(n,Xa),n=Ig(r,n,Xa)}e.memoizedProps=e.pendingProps,n===null?of(e):ye=n}function wo(e,n,r,o){Ia=ps=null,gd(n),po=null,Xl=0;var c=n.return;try{if(Gb(e,c,n,r,Ee)){cn=1,Fc(e,Fi(r,e.current)),ye=null;return}}catch(d){if(c!==null)throw ye=c,d;cn=1,Fc(e,Fi(r,e.current)),ye=null;return}n.flags&32768?(Se||o===1?e=!0:Mo||(Ee&536870912)!==0?e=!1:(wr=e=!0,(o===2||o===9||o===3||o===6)&&(o=In.current,o!==null&&o.tag===13&&(o.flags|=16384))),bv(n,e)):of(n)}function of(e){var n=e;do{if((n.flags&32768)!==0){bv(n,wr);return}e=n.return;var r=qb(n.alternate,n,Xa);if(r!==null){ye=r;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);cn===0&&(cn=5)}function bv(e,n){do{var r=Wb(e.alternate,e);if(r!==null){r.flags&=32767,ye=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=r}while(e!==null);cn=6,ye=null}function Ev(e,n,r,o,c,d,S,T,I,W,rt,pt){e.cancelPendingCommit=null;do lf();while(sn!==0);if((Pe&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));e===Qe&&(ye=Qe=null,Ee=0),Rs=n,na=e,va=r,up=c,dv=o,nE(e,n,r,S,T,I,pt)}}function nE(e,n,r,o,c,d,S){var T=n.lanes|n.childLanes;if(lp=T,T|=qh,bh(e,r,T,o,c,d),To=null,(r&335544064)===r?(Ao=Db(e),o=10262):(Ao=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,lE(bt,function(){return mp(),null})):(e.callbackNode=null,e.callbackPriority=0),qc=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=Mt.T,Mt.T=null,c=Vt.p,Vt.p=2,d=Pe,Pe|=4;try{jb(e,n,r)}finally{Pe=d,Vt.p=c,Mt.T=o}}sn=1,qc?Eo=CE(S,e.containerInfo,Ao,hp,dp,aE,pp,mp,iE):(hp(),dp(),pp())}function iE(e){if(sn!==0){var n=na.onRecoverableError;n(e,{componentStack:null})}}function aE(){sn===3&&(sn=0,sv(Rs,na),sn=4)}function hp(){if(sn===1){sn=0;var e=na,n=Rs,r=va,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=Mt.T,Mt.T=null;var c=Vt.p;Vt.p=2;var d=Pe;Pe|=4;try{eu=Zc=!1,av(n,e,r),r=Rp;var S=ex(e.containerInfo),T=r.focusedElem,I=r.selectionRange;if(S!==T&&T&&T.ownerDocument&&tx(T.ownerDocument.documentElement,T)){if(I!==null&&Vh(T)){var W=I.start,rt=I.end;if(rt===void 0&&(rt=W),"selectionStart"in T)T.selectionStart=W,T.selectionEnd=Math.min(rt,T.value.length);else{var pt=T.ownerDocument||document,Y=pt&&pt.defaultView||window;if(Y.getSelection){var tt=Y.getSelection(),Dt=T.textContent.length,kt=Math.min(I.start,Dt),de=I.end===void 0?kt:Math.min(I.end,Dt);!tt.extend&&kt>de&&(S=de,de=kt,kt=S);var q=$_(T,kt),X=$_(T,de);if(q&&X&&(tt.rangeCount!==1||tt.anchorNode!==q.node||tt.anchorOffset!==q.offset||tt.focusNode!==X.node||tt.focusOffset!==X.offset)){var J=pt.createRange();J.setStart(q.node,q.offset),tt.removeAllRanges(),kt>de?(tt.addRange(J),tt.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),tt.addRange(J))}}}}for(pt=[],tt=T;tt=tt.parentNode;)tt.nodeType===1&&pt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var dt=pt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Io=!!Ap,Rp=Ap=null}finally{Pe=d,Vt.p=c,Mt.T=o}}e.current=n,sn=2}}function dp(){if(sn===2){sn=0;var e=na,n=Rs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=Mt.T,Mt.T=null;var o=Vt.p;Vt.p=2;var c=Pe;Pe|=4;try{Jg(e,n.alternate,n)}finally{Pe=c,Vt.p=o,Mt.T=r}}sn=3}}function pp(){if(sn===4||sn===3){sn=0;var e=Eo;Eo=null,se();var n=na,r=Rs,o=va,c=dv,d=(o&335544064)===o?10262:10256;if((r.subtreeFlags&d)!==0||(r.flags&d)!==0?sn=5:(sn=0,Rs=na=null,Tv(n,n.pendingLanes)),d=n.pendingLanes,d===0&&(Ur=null),ot(o),r=r.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(we,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=Mt.T,d=Vt.p,Vt.p=2,Mt.T=null;try{for(var S=n.onRecoverableError,T=0;T<c.length;T++){var I=c[T];S(I.value,{componentStack:I.stack})}}finally{Mt.T=r,Vt.p=d}}if(c=To,S=Ao,Ao=null,c!==null&&(To=null,S===null&&(S=[]),e!==null))for(I=0;I<c.length;I++)r=(0,c[I])(S),r!==void 0&&e.finished.finally(r);(va&3)!==0&&lf(),Sa(n),d=n.pendingLanes,(o&261930)!==0&&(d&42)!==0?n===af?ru++:(ru=0,af=n):(ru=0,af=null),su(0)}}function Tv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Hl(n)))}function lf(){return Eo!==null&&(Eo.skipTransition(),Eo=null),hp(),dp(),pp(),mp()}function mp(){if(sn!==5)return!1;var e=na,n=lp;lp=0;var r=ot(va),o=Mt.T,c=Vt.p;try{Vt.p=32>r?32:r,Mt.T=null,r=up,up=null;var d=na,S=va;if(sn=0,Rs=na=null,va=0,(Pe&6)!==0)throw Error(a(331));var T=Pe;if(Pe|=4,cv(d.current),ov(d,d.current,S,r),Pe=T,su(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(we,d)}catch{}return!0}finally{Vt.p=c,Mt.T=o,Tv(e,n)}}function Av(e,n,r){n=Fi(r,n),n=Nd(e.stateNode,n,2),e=br(e,n,2),e!==null&&(ls(e,2),Sa(e))}function Ve(e,n,r){if(e.tag===3)Av(e,e,r);else for(;n!==null;){if(n.tag===3){Av(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ur===null||!Ur.has(o))){e=Fi(r,e),r=Mg(2),o=br(n,r,2),o!==null&&(bg(r,o,n,e),ls(o,2),Sa(o));break}}n=n.return}}function _p(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Qb;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(sp=!0,c.add(r),e=rE.bind(null,e,n,r),n.then(e,e))}function rE(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Qe===e&&(Ee&r)===r&&((cn===4||cn===3&&(Ee&62914560)===Ee&&300>V()-tf)&&(Pe&2)===0?Co(e,0):$c|=r,bo===Ee&&(bo=0)),Sa(e)}function Rv(e,n){n===0&&(n=$u()),e=fs(e,n),e!==null&&(ls(e,n),Sa(e))}function sE(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Rv(e,r)}function oE(e,n){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),Rv(e,r)}function lE(e,n){return ee(e,n)}var Do=null,Uo=null,xp=!1,uf=!1,gp=!1,Lr=0;function Sa(e){e!==Uo&&e.next===null&&(Uo===null?Do=Uo=e:Uo=Uo.next=e),uf=!0,xp||(xp=!0,cE())}function su(e,n){if(!gp&&uf){gp=!0;do for(var r=!1,o=Do;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var S=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Kn(42|e)+1)-1,d&=c&~(S&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Uv(o,d))}else d=Ee,d=os(o,o===Qe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||ua(o,d)||(r=!0,Uv(o,d));o=o.next}while(r);gp=!1}}function uE(){Cv()}function Cv(){uf=xp=!1;var e=0;Lr!==0&&yE()&&(e=Lr);for(var n=V(),r=null,o=Do;o!==null;){var c=o.next,d=wv(o,n);d===0?(o.next=null,r===null?Do=c:r.next=c,c===null&&(Uo=r)):(r=o,(e!==0||(d&3)!==0)&&(uf=!0)),o=c}sn!==0&&sn!==5||su(e),Lr!==0&&(Lr=0)}function wv(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Kn(d),T=1<<S,I=c[S];I===-1?((T&r)===0||(T&o)!==0)&&(c[S]=Ju(T,n)):I<=n&&(e.expiredLanes|=T),d&=~T}if(n=Qe,r=Ee,r=os(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Jt(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ua(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&Jt(o),ot(r)){case 2:case 8:r=wt;break;case 32:r=bt;break;case 268435456:r=Xt;break;default:r=bt}return o=Dv.bind(null,e),r=ee(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&Jt(o),e.callbackPriority=2,e.callbackNode=null,2}function Dv(e,n){if(sn!==0&&sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(lf()&&e.callbackNode!==r)return null;var o=Ee;return o=os(e,e===Qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(mv(e,o,n),wv(e,V()),e.callbackNode!=null&&e.callbackNode===r?Dv.bind(null,e):null)}function Uv(e,n){if(lf())return null;mv(e,n,!0)}function cE(){bE(function(){(Pe&6)!==0?ee(Ct,uE):Cv()})}function vp(){if(Lr===0){var e=xs;e===0&&(e=hr,hr<<=1,(hr&261888)===0&&(hr=256)),Lr=e}return Lr}function Nv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ac(e)}function fE(e,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var d=Nv((c[Lt]||null).action),S=o.submitter;S&&(n=(n=S[Lt]||null)?Nv(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var T=new lc("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Lr!==0){var I=new FormData(c,S);Rd(r,{pending:!0,data:I,method:c.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=new FormData(c,S),Rd(r,{pending:!0,data:I,method:c.method,action:d},d,I))},currentTarget:c}]})}}for(var Sp=0;Sp<Yh.length;Sp++){var yp=Yh[Sp],hE=yp.toLowerCase(),dE=yp[0].toUpperCase()+yp.slice(1);Ji(hE,"on"+dE)}Ji(ax,"onAnimationEnd"),Ji(rx,"onAnimationIteration"),Ji(sx,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Mb,"onTransitionRun"),Ji(bb,"onTransitionStart"),Ji(Eb,"onTransitionCancel"),Ji(ox,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ou="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ou));function Lv(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],c=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],I=T.instance,W=T.currentTarget;if(T=T.listener,I!==d&&c.isPropagationStopped())break t;d=T,c.currentTarget=W;try{d(c)}catch(rt){fc(rt)}c.currentTarget=null,d=I}else for(S=0;S<o.length;S++){if(T=o[S],I=T.instance,W=T.currentTarget,T=T.listener,I!==d&&c.isPropagationStopped())break t;d=T,c.currentTarget=W;try{d(c)}catch(rt){fc(rt)}c.currentTarget=null,d=I}}}}function Me(e,n){var r=n[ne];r===void 0&&(r=n[ne]=new Set);var o=e+"__bubble";r.has(o)||(Ov(n,e,2,!1),r.add(o))}function Mp(e,n,r){var o=0;n&&(o|=4),Ov(r,e,o,n)}var cf="_reactListening"+Math.random().toString(36).slice(2);function bp(e){if(!e[cf]){e[cf]=!0,Xn.forEach(function(r){r!=="selectionchange"&&(pE.has(r)||Mp(r,!1,e),Mp(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cf]||(n[cf]=!0,Mp("selectionchange",!1,n))}}function Ov(e,n,r,o){switch(bS(n)){case 2:var c=s3;break;case 8:c=o3;break;default:c=Xp}r=c.bind(null,n,r,e),c=void 0,!Uh||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,r,{capture:!0,passive:c}):e.addEventListener(n,r,!0):c!==void 0?e.addEventListener(n,r,{passive:c}):e.addEventListener(n,r,!1)}function Ep(e,n,r,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Re(T),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=d=S;continue t}T=T.parentNode}}o=o.return}O_(function(){var W=d,rt=wh(r),pt=[];t:{var Y=lx.get(e);if(Y!==void 0){var tt=lc,Dt=e;switch(e){case"keypress":if(sc(r)===0)break t;case"keydown":case"keyup":tt=J1;break;case"focusin":Dt="focus",tt=Ph;break;case"focusout":Dt="blur",tt=Ph;break;case"beforeblur":case"afterblur":tt=Ph;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=I_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=H1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=ib;break;case ax:case rx:case sx:tt=X1;break;case ox:tt=rb;break;case"scroll":case"scrollend":tt=F1;break;case"wheel":tt=ob;break;case"copy":case"cut":case"paste":tt=Y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=B_;break;case"submit":tt=eb;break;case"toggle":case"beforetoggle":tt=ub}var kt=(n&4)!==0,de=!kt&&(e==="scroll"||e==="scrollend"),q=kt?Y!==null?Y+"Capture":null:Y;kt=[];for(var X=W,J;X!==null;){var dt=X;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||q===null||(dt=wl(X,q),dt!=null&&kt.push(lu(X,dt,J))),de)break;X=X.return}0<kt.length&&(Y=new tt(Y,Dt,null,r,rt),pt.push({event:Y,listeners:kt}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",tt&&r!==Ch&&(Dt=r.relatedTarget||r.fromElement)&&(Re(Dt)||Dt[zt]))break t;(Y||tt)&&(Dt=rt.window===rt?rt:(tt=rt.ownerDocument)?tt.defaultView||tt.parentWindow:window,Y?(tt=r.relatedTarget||r.toElement,Y=W,tt=tt?Re(tt):null,tt!==null&&(de=u(tt),kt=tt.tag,tt!==de||kt!==5&&kt!==27&&kt!==6)&&(tt=null)):(Y=null,tt=W),Y!==tt&&(kt=I_,dt="onMouseLeave",q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(kt=B_,dt="onPointerLeave",q="onPointerEnter",X="pointer"),de=Y==null?Dt:Be(Y),J=tt==null?Dt:Be(tt),Dt=new kt(dt,X+"leave",Y,r,rt),Dt.target=de,Dt.relatedTarget=J,dt=null,Re(rt)===W&&(kt=new kt(q,X+"enter",tt,r,rt),kt.target=J,kt.relatedTarget=de,dt=kt),de=dt,kt=Y&&tt?N(Y,tt,mE):null,Y!==null&&Pv(pt,Dt,Y,kt,!1),tt!==null&&de!==null&&Pv(pt,de,tt,kt,!0)))}t:{if(Y=W?Be(W):window,tt=Y.nodeName&&Y.nodeName.toLowerCase(),tt==="select"||tt==="input"&&Y.type==="file")var Ht=W_;else if(Y_(Y))if(j_)Ht=vb;else{Ht=xb;var Te=_b}else tt=Y.nodeName,!tt||tt.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?W&&Rh(W.elementType)&&(Ht=W_):Ht=gb;if(Ht&&(Ht=Ht(e,W))){q_(pt,Ht,r,rt);break t}Te&&Te(e,Y,W)}switch(Te=W?Be(W):window,e){case"focusin":(Y_(Te)||Te.contentEditable==="true")&&(ao=Te,Gh=W,Il=null);break;case"focusout":Il=Gh=ao=null;break;case"mousedown":Xh=!0;break;case"contextmenu":case"mouseup":case"dragend":Xh=!1,nx(pt,r,rt);break;case"selectionchange":if(yb)break;case"keydown":case"keyup":nx(pt,r,rt)}var jt;if(Ih)t:{switch(e){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else io?X_(e,r)&&(ie="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ie="onCompositionStart");ie&&(H_&&r.locale!=="ko"&&(io||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&io&&(jt=P_()):(pr=rt,Nh="value"in pr?pr.value:pr.textContent,io=!0)),Te=ff(W,ie),0<Te.length&&(ie=new F_(ie,e,null,r,rt),pt.push({event:ie,listeners:Te}),jt?ie.data=jt:(jt=k_(r),jt!==null&&(ie.data=jt)))),(jt=fb?hb(e,r):db(e,r))&&(ie=ff(W,"onBeforeInput"),0<ie.length&&(Te=new F_("onBeforeInput","beforeinput",null,r,rt),pt.push({event:Te,listeners:ie}),Te.data=jt)),fE(pt,e,W,r,rt)}Lv(pt,n)})}function lu(e,n,r){return{instance:e,listener:n,currentTarget:r}}function ff(e,n){for(var r=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=wl(e,r),c!=null&&o.unshift(lu(e,c,d)),c=wl(e,n),c!=null&&o.push(lu(e,c,d))),e.tag===3)return o;e=e.return}return[]}function mE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pv(e,n,r,o,c){for(var d=n._reactName,S=[];r!==null&&r!==o;){var T=r,I=T.alternate,W=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||W===null||(I=W,c?(W=wl(r,d),W!=null&&S.unshift(lu(r,W,I))):c||(W=wl(r,d),W!=null&&S.push(lu(r,W,I)))),r=r.return}S.length!==0&&e.push({event:n,listeners:S})}var _E=/\r\n?/g,xE=/\u0000|\uFFFD/g;function zv(e){return(typeof e=="string"?e:""+e).replace(_E,`
`).replace(xE,"")}function Iv(e,n){return n=zv(n),zv(e)===n}function Ge(e,n,r,o,c,d){switch(r){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||to(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&to(e,""+o);else return;break;case"className":ic(e,"class",o);break;case"tabIndex":ic(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ic(e,r,o);break;case"style":N_(e,o,d);return;case"data":if(n!=="object"){ic(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=ac(o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&Ge(e,n,"name",c.name,c,null),Ge(e,n,"formEncType",c.formEncType,c,null),Ge(e,n,"formMethod",c.formMethod,c,null),Ge(e,n,"formTarget",c.formTarget,c,null)):(Ge(e,n,"encType",c.encType,c,null),Ge(e,n,"method",c.method,c,null),Ge(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=ac(o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=ca);return;case"onScroll":o!=null&&Me("scroll",e);return;case"onScrollEnd":o!=null&&Me("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));(d!=null?d.__html:void 0)!==r&&(e.innerHTML=r)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=ac(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),nc(e,"popover",o);break;case"xlinkActuate":Ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ua(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ua(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ua(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ua(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":nc(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")r=z1.get(r)||r,nc(e,r,o);else return}me=!0}function Tp(e,n,r,o,c,d){switch(r){case"style":N_(e,o,d);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));(d!=null?d.__html:void 0)!==r&&(e.innerHTML=r)}}break;case"children":if(typeof o=="string")to(e,o);else if(typeof o=="number"||typeof o=="bigint")to(e,""+o);else return;break;case"onScroll":o!=null&&Me("scroll",e);return;case"onScrollEnd":o!=null&&Me("scrollend",e);return;case"onClick":o!=null&&(e.onclick=ca);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!dr.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),d=r.slice(2,c?r.length-7:void 0),n=e[Lt]||null,n=n!=null?n[r]:null,typeof n=="function"&&e.removeEventListener(d,n,c),typeof o=="function")){typeof n!="function"&&n!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(d,o,c);break t}me=!0,r in e?e[r]=o:o===!0?e.setAttribute(r,""):nc(e,r,o)}return}me=!0}function Hn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,c=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ge(e,n,d,S,r,null)}}c&&Ge(e,n,"srcSet",r.srcSet,r,null),o&&Ge(e,n,"src",r.src,r,null);return;case"input":Me("invalid",e);var T=d=S=c=null,I=null,W=null;for(o in r)if(r.hasOwnProperty(o)){var rt=r[o];if(rt!=null)switch(o){case"name":c=rt;break;case"type":S=rt;break;case"checked":I=rt;break;case"defaultChecked":W=rt;break;case"value":d=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,n));break;default:Ge(e,n,o,rt,r,null)}}C_(e,d,T,I,W,S,c,!1);return;case"select":Me("invalid",e),o=S=d=null;for(c in r)if(r.hasOwnProperty(c)&&(T=r[c],T!=null))switch(c){case"value":d=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Ge(e,n,c,T,r,null)}n=d,r=S,e.multiple=!!o,n!=null?$s(e,!!o,n,!1):r!=null&&$s(e,!!o,r,!0);return;case"textarea":Me("invalid",e),d=c=o=null;for(S in r)if(r.hasOwnProperty(S)&&(T=r[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":c=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Ge(e,n,S,T,r,null)}D_(e,o,c,d);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(o=r[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ge(e,n,I,o,r,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<ou.length;o++)Me(ou[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in r)if(r.hasOwnProperty(W)&&(o=r[W],o!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ge(e,n,W,o,r,null)}return;default:if(Rh(n)){for(rt in r)r.hasOwnProperty(rt)&&(o=r[rt],o!==void 0&&Tp(e,n,rt,o,r,void 0));return}}for(T in r)r.hasOwnProperty(T)&&(o=r[T],o!=null&&Ge(e,n,T,o,r,null))}var gE={};function vE(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,S=null,T=null,I=null,W=null,rt=null;for(tt in r){var pt=r[tt];if(r.hasOwnProperty(tt)&&pt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":I=pt;default:o.hasOwnProperty(tt)||Ge(e,n,tt,null,o,pt)}}for(var Y in o){var tt=o[Y];if(pt=r[Y],o.hasOwnProperty(Y)&&(tt!=null||pt!=null))switch(Y){case"type":tt!==pt&&(me=!0),d=tt;break;case"name":tt!==pt&&(me=!0),c=tt;break;case"checked":tt!==pt&&(me=!0),W=tt;break;case"defaultChecked":tt!==pt&&(me=!0),rt=tt;break;case"value":tt!==pt&&(me=!0),S=tt;break;case"defaultValue":tt!==pt&&(me=!0),T=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(a(137,n));break;default:tt!==pt&&Ge(e,n,Y,tt,o,pt)}}Th(e,S,T,I,W,rt,d,c);return;case"select":tt=S=T=Y=null;for(d in r)if(I=r[d],r.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":tt=I;default:o.hasOwnProperty(d)||Ge(e,n,d,null,o,I)}for(c in o)if(d=o[c],I=r[c],o.hasOwnProperty(c)&&(d!=null||I!=null))switch(c){case"value":d!==I&&(me=!0),Y=d;break;case"defaultValue":d!==I&&(me=!0),T=d;break;case"multiple":d!==I&&(me=!0),S=d;default:d!==I&&Ge(e,n,c,d,o,I)}n=T,r=S,o=tt,Y!=null?$s(e,!!r,Y,!1):!!o!=!!r&&(n!=null?$s(e,!!r,n,!0):$s(e,!!r,r?[]:"",!1));return;case"textarea":tt=Y=null;for(T in r)if(c=r[T],r.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(e,n,T,null,o,c)}for(S in o)if(c=o[S],d=r[S],o.hasOwnProperty(S)&&(c!=null||d!=null))switch(S){case"value":c!==d&&(me=!0),Y=c;break;case"defaultValue":c!==d&&(me=!0),tt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==d&&Ge(e,n,S,c,o,d)}w_(e,Y,tt);return;case"option":for(var Dt in r)if(Y=r[Dt],r.hasOwnProperty(Dt)&&Y!=null&&!o.hasOwnProperty(Dt))switch(Dt){case"selected":e.selected=!1;break;default:Ge(e,n,Dt,null,o,Y)}for(I in o)if(Y=o[I],tt=r[I],o.hasOwnProperty(I)&&Y!==tt&&(Y!=null||tt!=null))switch(I){case"selected":Y!==tt&&(me=!0),e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Ge(e,n,I,Y,o,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in r)Y=r[kt],r.hasOwnProperty(kt)&&Y!=null&&!o.hasOwnProperty(kt)&&Ge(e,n,kt,null,o,Y);for(W in o)if(Y=o[W],tt=r[W],o.hasOwnProperty(W)&&Y!==tt&&(Y!=null||tt!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,n));break;default:Ge(e,n,W,Y,o,tt)}return;default:if(Rh(n)){for(var de in r)Y=r[de],r.hasOwnProperty(de)&&Y!==void 0&&!o.hasOwnProperty(de)&&Tp(e,n,de,void 0,o,Y);for(rt in o)Y=o[rt],tt=r[rt],!o.hasOwnProperty(rt)||Y===tt||Y===void 0&&tt===void 0||Tp(e,n,rt,Y,o,tt);return}}for(var q in r)Y=r[q],r.hasOwnProperty(q)&&Y!=null&&!o.hasOwnProperty(q)&&Ge(e,n,q,null,o,Y);for(pt in o)Y=o[pt],tt=r[pt],!o.hasOwnProperty(pt)||Y===tt||Y==null&&tt==null||Ge(e,n,pt,Y,o,tt)}function Fv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var c=r[o],d=c.transferSize,S=c.initiatorType,T=c.duration;if(d&&T&&Fv(S)){for(S=0,T=c.responseEnd,o+=1;o<r.length;o++){var I=r[o],W=I.startTime;if(W>T)break;var rt=I.transferSize,pt=I.initiatorType;rt&&Fv(pt)&&(I=I.responseEnd,S+=rt*(I<T?1:(T-W)/(I-W)))}if(--o,n+=8*(d+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ap=null,Rp=null;function uu(e){return e.nodeType===9?e:e.ownerDocument}function Bv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vv(e,n,r,o){return r=uu(r).createElement(e),r[Tt]=o,r[Lt]=n,Hn(r,e,n),Ne(r),r}function Cp(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wp=null;function yE(){var e=window.event;return e&&e.type==="popstate"?e===wp?!1:(wp=e,!0):(wp=null,!1)}var Dp=typeof setTimeout=="function"?setTimeout:void 0,ME=typeof clearTimeout=="function"?clearTimeout:void 0,Gv=typeof Promise=="function"?Promise:void 0,Xv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Dp,bE=typeof queueMicrotask=="function"?queueMicrotask:typeof Gv<"u"?function(e){return Gv.resolve(null).then(e).catch(EE)}:Dp;function EE(e){setTimeout(function(){throw e})}function Or(e){return e==="head"}function kv(e,n){var r=n,o=0;do{var c=r.nextSibling;if(e.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(c),Fo(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Fp(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Fp(r);for(var d=r.firstChild;d;){var S=d.nextSibling,T=d.nodeName;d[De]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=S}}else r==="body"&&Fp(e.ownerDocument.body);r=c}while(r);Fo(n)}function Yv(e,n){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function qv(e,n,r){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,r!=null&&(e.style.viewTransitionClass=r),r=getComputedStyle(e),r.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var c=o=0;c<n.length;c++){var d=n[c];0<d.width&&0<d.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+r.paddingTop,e.marginBottom="-"+r.paddingBottom)}}function Wv(e,n){e=e.style,n=n.style;var r=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=r==null||typeof r=="boolean"?"":(""+r).trim(),r=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=r==null||typeof r=="boolean"?"":(""+r).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(r=n.display,e.display=r==null||typeof r=="boolean"?"":r,r=n.margin,r!=null?e.margin=r:(r=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=r==null||typeof r=="boolean"?"":r,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function TE(e,n,r){return r=r.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=r.innerHeight&&e.left<=r.innerWidth}}function Up(e){var n=e.getBoundingClientRect(),r=getComputedStyle(e);return TE(n,r,e)}function AE(e){return e.documentElement.clientHeight}function RE(e){this.addEventListener("load",e),this.addEventListener("error",e)}function CE(e,n,r,o,c,d,S,T,I){var W=n.nodeType===9?n:n.ownerDocument;try{var rt=W.startViewTransition({update:function(){var Y=W.defaultView,tt=Y.navigation&&Y.navigation.transition,Dt=W.fonts.status;o();var kt=[];if(Dt==="loaded"&&(AE(W),W.fonts.status==="loading"&&kt.push(W.fonts.ready)),Dt=kt.length,e!==null)for(var de=e.suspenseyImages,q=0,X=0;X<de.length;X++){var J=de[X];if(!J.complete){var dt=J.getBoundingClientRect();if(0<dt.bottom&&0<dt.right&&dt.top<Y.innerHeight&&dt.left<Y.innerWidth){if(q+=pS(J),q>pf){kt.length=Dt;break}J=new Promise(RE.bind(J)),kt.push(J)}}}if(0<kt.length)return Y=Promise.race([Promise.all(kt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(c,c),(tt?Promise.allSettled([tt.finished,Y]):Y).then(d,d);if(c(),tt)return tt.finished.then(d,d);d()},types:r});W.__reactViewTransition=rt;var pt=[];return rt.ready.then(function(){for(var Y=W.documentElement.getAnimations({subtree:!0}),tt=0;tt<Y.length;tt++){var Dt=Y[tt],kt=Dt.effect,de=kt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){pt.push(Dt),Dt=kt.getKeyframes();for(var q=de=void 0,X=!0,J=0;J<Dt.length;J++){var dt=Dt[J],Ht=dt.width;if(de===void 0)de=Ht;else if(de!==Ht){X=!1;break}if(Ht=dt.height,q===void 0)q=Ht;else if(q!==Ht){X=!1;break}delete dt.width,delete dt.height,dt.transform==="none"&&delete dt.transform}X&&de!==void 0&&q!==void 0&&(kt.setKeyframes(Dt),X=getComputedStyle(kt.target,kt.pseudoElement),X.width!==de||X.height!==q)&&(X=Dt[0],X.width=de,X.height=q,X=Dt[Dt.length-1],X.width=de,X.height=q,kt.setKeyframes(Dt))}}S()},function(Y){W.__reactViewTransition===rt&&(W.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&I(Y)}finally{o(),c(),S()}}),rt.finished.finally(function(){for(var Y=0;Y<pt.length;Y++)pt[Y].cancel();W.__reactViewTransition===rt&&(W.__reactViewTransition=null),T()}),rt}catch{return o(),c(),S(),null}}function Cs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Cs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Cs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,r=e.getAnimations({subtree:!0}),o=[],c=0;c<r.length;c++){var d=r[c].effect;d!==null&&d.target===e&&d.pseudoElement===n&&o.push(r[c])}return o},Cs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function jv(e){return{name:e,group:new Cs("group",e),imagePair:new Cs("image-pair",e),old:new Cs("old",e),new:new Cs("new",e)}}function bi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}bi.prototype.addEventListener=function(e,n,r){var o=null,c=null;if(!(r!=null&&typeof r!="boolean"&&(o=r.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var d=this._eventListeners;if(Kv(d,e,n,r)===-1){var S=this,T=n;r!=null&&typeof r!="boolean"&&r.once===!0&&(T=function(I){S.removeEventListener(e,n,r),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),o!==null&&(c=S.removeEventListener.bind(S,e,n,r),o.addEventListener("abort",c,{once:!0}),c=o.removeEventListener.bind(o,"abort",c)),o=No(r),d.push({type:e,listener:n,optionsOrUseCapture:r,attachedListener:T,cleanup:c}),x(this._fragmentFiber.child,!1,wE,e,T,o)}this._eventListeners=d}};function wE(e,n,r,o){return M(e).addEventListener(n,r,o),!1}bi.prototype.removeEventListener=function(e,n,r){var o=this._eventListeners;if(o!==null&&(n=Kv(o,e,n,r),n!==-1)){var c=o[n];r=c.attachedListener;var d=c.cleanup;c=No(c.optionsOrUseCapture),x(this._fragmentFiber.child,!1,DE,e,r,c),o.splice(n,1),d!==null&&d()}};function DE(e,n,r,o){return M(e).removeEventListener(n,r,o),!1}function No(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Zv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Kv(e,n,r,o){if(e.length===0)return-1;o=Zv(o);for(var c=0;c<e.length;c++){var d=e[c];if(d.type===n&&d.listener===r&&Zv(d.optionsOrUseCapture)===o)return c}return-1}bi.prototype.dispatchEvent=function(e){var n=g(this._fragmentFiber);if(n===null)return!0;n=M(n);var r=this._eventListeners;if(r!==null&&0<r.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(r)for(var c=0;c<r.length;c++){var d=r[c];o.addEventListener(d.type,d.attachedListener,No(d.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),r)for(c=0;c<r.length;c++)d=r[c],o.removeEventListener(d.type,d.attachedListener,No(d.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},bi.prototype.focus=function(e){x(this._fragmentFiber.child,!0,Qv,e,void 0,void 0)};function Qv(e,n){return e.tag===6?!1:(e=M(e),GE(e,n))}bi.prototype.focusLast=function(e){var n=[];x(this._fragmentFiber.child,!0,Np,n,void 0,void 0);for(var r=n.length-1;0<=r&&!Qv(n[r],e);r--);};function Np(e,n){return n.push(e),!1}bi.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=M(e),e=uu(e).activeElement,e!==null&&x(this._fragmentFiber.child,!1,UE,e,void 0,void 0))};function UE(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}bi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),x(this._fragmentFiber.child,!1,NE,e,void 0,void 0)};function NE(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}bi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),x(this._fragmentFiber.child,!1,LE,e,void 0,void 0);for(var r=n=0;r<ia.length;r++){var o=ia[r];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):ia[n++]=o}ia.length=n}};function LE(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var ia=[],Lp=!1;function OE(e,n,r){ia.push({fragmentInstance:e,observer:n,instance:r}),Lp||(Lp=!0,XE(function(){Lp=!1;var o=ia;ia=[];for(var c=0;c<o.length;c++){var d=o[c];d.observer.unobserve(d.instance)}}))}bi.prototype.getClientRects=function(){var e=[];return x(this._fragmentFiber.child,!1,PE,e,void 0,void 0),e};function PE(e,n){if(e.tag===6){e=e.stateNode;var r=e.ownerDocument.createRange();r.selectNodeContents(e),n.push.apply(n,r.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}bi.prototype.getRootNode=function(e){var n=g(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},bi.prototype.compareDocumentPosition=function(e){var n=g(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var r=[];x(this._fragmentFiber.child,!1,Np,r,void 0,void 0);var o=M(n);if(r.length===0){if(r=o,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(r=n)}n=this._fragmentFiber;var c=o=r.compareDocumentPosition(e);return r===e?c=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(r=E(n)[1],r===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(r).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(r[0]),c=M(r[r.length-1]);var d=y(this._fragmentFiber)?n.parentElement:o;if(d==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=d.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,d=d.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(e),T=c.compareDocumentPosition(e),I=S&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=o&&d&&S&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||d&&c===e||I||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!d&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||zE(n,this._fragmentFiber,r[0],r[r.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function zE(e,n,r,o,c){var d=Re(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(r=!!d)t:{for(;d!==null;){if(d.tag===7&&(d===n||d.alternate===n)){r=!0;break t}d=d.return}r=!1}return r}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(d===null)return d=c.ownerDocument,c===d||c===d.documentElement||c===d.body;t:{for(d=n,n=g(n);d!==null;){if(!(d.tag!==5&&d.tag!==3&&d.tag!==27||d!==n&&d.alternate!==n)){d=!0;break t}d=d.return}d=!1}return d}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!d)&&!(n=d===r)&&(n=N(r,d,P),n===null?n=!1:(x(n,!0,D,d,r),d=v,v=null,n=d!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!d)&&!(n=d===o)&&(n=N(o,d,P),n===null?n=!1:(x(n,!0,L,d,o),d=v,w=v=null,n=d!==null)),n):!1}function Jv(e,n){var r=e.ownerDocument.createRange();r.selectNodeContents(e),e=r.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}bi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(a(566));var n=[];x(this._fragmentFiber.child,!1,Np,n,void 0,void 0);var r=e!==!1;if(n.length===0){var o=E(this._fragmentFiber);if(o=r?o[1]||o[0]||g(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=M(o),Jv(e,r);return}if(o=M(o),o.nodeType!==9){if(o.nodeType===11){r="host"in o?o.host:null,r!==null&&r.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=r?n.length-1:0;o!==(r?-1:n.length);){var c=n[o];c.tag===6?(c=M(c),Jv(c,r)):M(c).scrollIntoView(e),o+=r?-1:1}};function IE(e,n){return e=M(e),$v(e,n),!1}function $v(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function tS(e,n){var r=n._eventListeners;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];e.addEventListener(c.type,c.attachedListener,No(c.optionsOrUseCapture))}e.nodeType!==3&&(r=n._observers,r!==null&&r.forEach(function(d){for(var S=0,T=0;T<ia.length;T++){var I=ia[T];(I.fragmentInstance!==n||I.observer!==d||I.instance!==e)&&(ia[S++]=I)}ia.length=S,d.observe(e)}),$v(e,n))}function FE(e,n){var r=n._eventListeners;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];e.removeEventListener(c.type,c.attachedListener,No(c.optionsOrUseCapture))}e.nodeType!==3&&(r=n._observers,r!==null&&r.forEach(function(d){typeof d.rootMargin=="string"?OE(n,d,e):d.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Op(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Op(r),Ke(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function BE(e,n,r,o){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[De])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Xi(e.nextSibling),e===null)break}return null}function HE(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Xi(e.nextSibling),e===null))return null;return e}function eS(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xi(e.nextSibling),e===null))return null;return e}function Pp(e){return e.data==="$?"||e.data==="$~"}function zp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function VE(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ip=null;function nS(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return Xi(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function iS(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function GE(e,n){function r(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",r,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",r,!0)}return o}function XE(e){Xv(function(){Xv(function(n){return e(n)})})}function aS(e,n,r){switch(n=uu(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function rS(e,n,r){for(var o in r){var c=r[o];r.hasOwnProperty(o)&&c!=null&&Ge(e,n,o,null,gE,c)}r.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ca&&(e.onclick=null),Ke(e)}function Fp(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ke(e)}var ki=new Map,sS=new Set;function cu(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var ka=Vt.d;Vt.d={f:kE,r:YE,D:qE,C:WE,L:jE,m:ZE,X:QE,S:KE,M:JE};function kE(){var e=ka.f(),n=rf();return e||n}function YE(e){var n=Wt(e);n!==null&&n.tag===5&&n.type==="form"?lg(n):ka.r(e)}var Lo=typeof document>"u"?null:document;function oS(e,n,r){var o=Lo;if(o&&typeof n=="string"&&n){var c=zi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),sS.has(c)||(sS.add(c),e={rel:e,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Hn(n,"link",e),Ne(n),o.head.appendChild(n)))}}function qE(e){ka.D(e),oS("dns-prefetch",e,null)}function WE(e,n){ka.C(e,n),oS("preconnect",e,n)}function jE(e,n,r){ka.L(e,n,r);var o=Lo;if(o&&e&&n){var c='link[rel="preload"][as="'+zi(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+zi(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+zi(r.imageSizes)+'"]')):c+='[href="'+zi(e)+'"]';var d=c;switch(n){case"style":d=Oo(e);break;case"script":d=Po(e)}if(!(ki.has(d)||(e=O({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),ki.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(fu(d))||n==="script"&&o.querySelector(hu(d))))){var S=o.createElement("link");Hn(S,"link",e),n==="style"&&(S[Ze]=!0,S.onload=S.onerror=function(){Da(S)}),Ne(S),o.head.appendChild(S)}}}function ZE(e,n){ka.m(e,n);var r=Lo;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+zi(o)+'"][href="'+zi(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Po(e)}if(!ki.has(d)&&(e=O({rel:"modulepreload",href:e},n),ki.set(d,e),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(hu(d)))return}o=r.createElement("link"),Hn(o,"link",e),Ne(o),r.head.appendChild(o)}}}function KE(e,n,r){ka.S(e,n,r);var o=Lo;if(o&&e){var c=ve(o).hoistableStyles,d=Oo(e);n=n||"default";var S=c.get(d);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(fu(d)))T.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":n},r),(r=ki.get(d))&&Bp(e,r);var I=S=o.createElement("link");Ne(I),Hn(I,"link",e),I._p=new Promise(function(W,rt){I.onload=W,I.onerror=rt}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,hf(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(d,S)}}}function QE(e,n){ka.X(e,n);var r=Lo;if(r&&e){var o=ve(r).hoistableScripts,c=Po(e),d=o.get(c);d||(d=r.querySelector(hu(c)),d||(e=O({src:e,async:!0},n),(n=ki.get(c))&&Hp(e,n),d=r.createElement("script"),Ne(d),Hn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function JE(e,n){ka.M(e,n);var r=Lo;if(r&&e){var o=ve(r).hoistableScripts,c=Po(e),d=o.get(c);d||(d=r.querySelector(hu(c)),d||(e=O({src:e,async:!0,type:"module"},n),(n=ki.get(c))&&Hp(e,n),d=r.createElement("script"),Ne(d),Hn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function lS(e,n,r,o){var c=(c=Yt.current)?cu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(r=Oo(r.href),n=ve(c).hoistableStyles,o=n.get(r),o||(o={type:"style",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Oo(r.href);var d=ve(c).hoistableStyles,S=d.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=c.querySelector(fu(e)))?d._p||(S.instance=d,S.state.loading=5):(d=ki.get(e),d||(d={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ki.set(e,d)),$E(c,e,d,S.state))),n&&o===null)throw Error(a(528,""));return S}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(r=Po(r),n=ve(c).hoistableScripts,o=n.get(r),o||(o={type:"script",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Oo(e){return'href="'+zi(e)+'"'}function fu(e){return'link[rel="stylesheet"]['+e+"]"}function uS(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function $E(e,n,r,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ze]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[Ze]=!0,n.onload=n.onerror=Da.bind(null,n),Hn(n,"link",r),Ne(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Po(e){return'[src="'+zi(e)+'"]'}function hu(e){return"script[async]"+e}function cS(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+zi(r.href)+'"]');if(o)return n.instance=o,Ne(o),o;var c=O({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ne(o),Hn(o,"style",c),hf(o,r.precedence,e),n.instance=o;case"stylesheet":c=Oo(r.href);var d=e.querySelector(fu(c));if(d)return n.state.loading|=4,n.instance=d,Ne(d),d;o=uS(r),(c=ki.get(c))&&Bp(o,c),d=(e.ownerDocument||e).createElement("link"),Ne(d);var S=d;return S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),Hn(d,"link",o),n.state.loading|=4,hf(d,r.precedence,e),n.instance=d;case"script":return d=Po(r.src),(c=e.querySelector(hu(d)))?(n.instance=c,Ne(c),c):(o=r,(c=ki.get(d))&&(o=O({},r),Hp(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ne(c),Hn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hf(o,r.precedence,e));return n.instance}function hf(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)d=T;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function Bp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Hp(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var df=null;function fS(e,n,r){if(df===null){var o=new Map,c=df=new Map;c.set(r,o)}else c=df,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var d=r[c];if(!(d[De]||d[Tt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var T=o.get(S);T?T.push(d):o.set(S,[d])}}return o}function Vp(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function t3(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hS(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function dS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function pS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function mS(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=pS(n),e.suspenseyImages.push(n)),e=i3.bind(e),n.decode().then(e,e))}function e3(e,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var c=Oo(o.href),d=n.querySelector(fu(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=du.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=d,Ne(d);return}d=n.ownerDocument||n,o=uS(o),(c=ki.get(c))&&Bp(o,c),d=d.createElement("link"),Ne(d);var S=d;S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),Hn(d,"link",o),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=du.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var pf=0;function n3(e,n){return e.stylesheets&&e.count===0&&_f(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&_f(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&pf===0&&(pf=62500*SE());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_f(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>pf?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function _S(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)_f(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function du(){this.count--,_S(this)}function i3(){this.imgCount--,_S(this)}var mf=null;function _f(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mf=new Map,n.forEach(a3,e),mf=null,du.call(e))}function a3(e,n){if(!(n.state.loading&4)){var r=mf.get(e);if(r)var o=r.get(null);else{r=new Map,mf.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var S=c[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),d=r.get(S)||o,d===o&&r.set(null,c),r.set(S,c),this.count++,o=du.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var zo={$$typeof:st,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function r3(e,n,r,o,c,d,S,T,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.hiddenUpdates=Rl(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function xS(e,n,r,o,c,d,S,T,I,W,rt,pt){return e=new r3(e,n,r,S,I,W,rt,pt,T),n=1,d===!0&&(n|=24),d=si(3,null,null,n),e.current=d,d.stateNode=e,n=nd(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:n},sd(d),e}function gS(e){return e?(e=oo,e):oo}function vS(e,n,r,o,c,d){c=gS(c),o.context===null?o.context=c:o.pendingContext=c,o=Mr(n),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=br(e,o,n),r!==null&&(ci(r,e,n),kl(r,e,n))}function SS(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Gp(e,n){SS(e,n),(e=e.alternate)&&SS(e,n)}function yS(e){if(e.tag===13||e.tag===31){var n=fs(e,67108864);n!==null&&ci(n,e,67108864),Gp(e,67108864)}}function MS(e){if(e.tag===13||e.tag===31){var n=Mi();n=Z(n);var r=fs(e,n);r!==null&&ci(r,e,n),Gp(e,n)}}var Io=!0;function s3(e,n,r,o){var c=Mt.T;Mt.T=null;var d=Vt.p;try{Vt.p=2,Xp(e,n,r,o)}finally{Vt.p=d,Mt.T=c}}function o3(e,n,r,o){var c=Mt.T;Mt.T=null;var d=Vt.p;try{Vt.p=8,Xp(e,n,r,o)}finally{Vt.p=d,Mt.T=c}}function Xp(e,n,r,o){if(Io){var c=kp(o);if(c===null)Ep(e,n,o,xf,r),ES(e,o);else if(u3(c,e,n,r,o))o.stopPropagation();else if(ES(e,o),n&4&&-1<l3.indexOf(e)){for(;c!==null;){var d=Wt(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Pi(d.pendingLanes);if(S!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var I=1<<31-Kn(S);T.entanglements[1]|=I,S&=~I}Sa(d),(Pe&6)===0&&(ef=V()+500,su(0))}}break;case 31:case 13:T=fs(d,2),T!==null&&ci(T,d,2),rf(),Gp(d,2)}if(d=kp(o),d===null&&Ep(e,n,o,xf,r),d===c)break;c=d}c!==null&&o.stopPropagation()}else Ep(e,n,o,null,r)}}function kp(e){return e=wh(e),Yp(e)}var xf=null;function Yp(e){if(xf=null,e=Re(e),e!==null){var n=u(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xf=e,null}function bS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case Ct:return 2;case wt:return 8;case bt:case gt:return 32;case Xt:return 268435456;default:return 32}default:return 32}}var qp=!1,Pr=null,zr=null,Ir=null,pu=new Map,mu=new Map,Fr=[],l3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ES(e,n){switch(e){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":pu.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mu.delete(n.pointerId)}}function _u(e,n,r,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=Wt(n),n!==null&&yS(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function u3(e,n,r,o,c){switch(n){case"focusin":return Pr=_u(Pr,e,n,r,o,c),!0;case"dragenter":return zr=_u(zr,e,n,r,o,c),!0;case"mouseover":return Ir=_u(Ir,e,n,r,o,c),!0;case"pointerover":var d=c.pointerId;return pu.set(d,_u(pu.get(d)||null,e,n,r,o,c)),!0;case"gotpointercapture":return d=c.pointerId,mu.set(d,_u(mu.get(d)||null,e,n,r,o,c)),!0}return!1}function TS(e){var n=Re(e.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,Q(e.priority,function(){MS(r)});return}}else if(n===31){if(n=h(r),n!==null){e.blockedOn=n,Q(e.priority,function(){MS(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gf(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=kp(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Ch=o,r.target.dispatchEvent(o),Ch=null}else return n=Wt(r),n!==null&&yS(n),e.blockedOn=r,!1;n.shift()}return!0}function AS(e,n,r){gf(e)&&r.delete(n)}function c3(){qp=!1,Pr!==null&&gf(Pr)&&(Pr=null),zr!==null&&gf(zr)&&(zr=null),Ir!==null&&gf(Ir)&&(Ir=null),pu.forEach(AS),mu.forEach(AS)}function vf(e,n){e.blockedOn===n&&(e.blockedOn=null,qp||(qp=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,c3)))}var Sf=null;function RS(e){Sf!==e&&(Sf=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Sf===e&&(Sf=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Yp(o||r)===null)continue;break}var d=Wt(r);d!==null&&(e.splice(n,3),n-=3,Rd(d,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function Fo(e){function n(I){return vf(I,e)}Pr!==null&&vf(Pr,e),zr!==null&&vf(zr,e),Ir!==null&&vf(Ir,e),pu.forEach(n),mu.forEach(n);for(var r=0;r<Fr.length;r++){var o=Fr[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Fr.length&&(r=Fr[0],r.blockedOn===null);)TS(r),r.blockedOn===null&&Fr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],d=r[o+1],S=c[Lt]||null;if(typeof d=="function")S||RS(r);else if(S){var T=null;if(d&&d.hasAttribute("formAction")){if(c=d,S=d[Lt]||null)T=S.formAction;else if(Yp(c)!==null)continue}else T=S.action;typeof T=="function"?r[o+1]=T:(r.splice(o,3),o-=3),RS(r)}}}function CS(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wp(e){this._internalRoot=e}yf.prototype.render=Wp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=Mi();vS(r,o,e,n,null,null)},yf.prototype.unmount=Wp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vS(e.current,2,null,e,null,null),rf(),n[zt]=null}};function yf(e){this._internalRoot=e}yf.prototype.unstable_scheduleHydration=function(e){if(e){var n=ut();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Fr.length&&n!==0&&n<Fr[r].priority;r++);Fr.splice(r,0,e),r===0&&TS(e)}};var wS=t.version;if(wS!=="19.3.1")throw Error(a(527,wS,"19.3.1"));Vt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var f3={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mf.isDisabled&&Mf.supportsFiber)try{we=Mf.inject(f3),nn=Mf}catch{}}return gu.createRoot=function(e,n){if(!s(e))throw Error(a(299));var r=!1,o="",c=gg,d=vg,S=Sg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=xS(e,1,!1,null,null,r,o,null,c,d,S,CS),e[zt]=n.current,bp(e),new Wp(n)},gu.hydrateRoot=function(e,n,r){if(!s(e))throw Error(a(299));var o=!1,c="",d=gg,S=vg,T=Sg,I=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.formState!==void 0&&(I=r.formState)),n=xS(e,1,!0,n,r??null,o,c,I,d,S,T,CS),n.context=gS(null),r=n.current,o=Mi(),o=Z(o),c=Mr(o),c.callback=null,br(r,c,o),r=o,n.current.lanes=r,ls(n,r),Sa(n),e[zt]=n.current,bp(e),new yf(n)},gu.version="19.3.1",gu}var BS;function y3(){if(BS)return Zp.exports;BS=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),Zp.exports=S3(),Zp.exports}var M3=y3(),Xs=km();function Ja(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function rM(l,t){l.prototype=Object.create(t.prototype),l.prototype.constructor=l,l.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fl={duration:.5,overwrite:!1,delay:0},Ym,Gn,rn,ji=1e8,$e=1/ji,V0=Math.PI*2,b3=V0/4,E3=0,sM=Math.sqrt,T3=Math.cos,A3=Math.sin,On=function(t){return typeof t=="string"},fn=function(t){return typeof t=="function"},rr=function(t){return typeof t=="number"},qm=function(t){return typeof t>"u"},Ca=function(t){return typeof t=="object"},fi=function(t){return t!==!1},Wm=function(){return typeof window<"u"},bf=function(t){return fn(t)||On(t)},oM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,G0=/(?:-?\.?\d|\.)+/gi,lM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,il=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,t0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,uM=/[+-]=-?[.\d]+/,cM=/[^,'"\[\]\s]+/gi,R3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,on,ya,X0,jm,Li={},sh={},fM,hM=function(t){return(sh=hl(t,Li))&&mi},Zm=function(t,i){return console.warn("Invalid property",t,"set to",i,"Missing plugin? gsap.registerPlugin()")},Lu=function(t,i){return!i&&console.warn(t)},dM=function(t,i){return t&&(Li[t]=i)&&sh&&(sh[t]=i)||Li},Ou=function(){return 0},C3={suppressEvents:!0,isStart:!0,kill:!1},Qf={suppressEvents:!0,kill:!1},w3={suppressEvents:!0},Km={},Jr=[],k0={},pM,Ai={},e0={},HS=30,Jf=[],Qm="",Jm=function(t){var i=t[0],a,s;if(Ca(i)||fn(i)||(t=[t]),!(a=(i._gsap||{}).harness)){for(s=Jf.length;s--&&!Jf[s].targetTest(i););a=Jf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new FM(t[s],a)))||t.splice(s,1);return t},ks=function(t){return t._gsap||Jm(Zi(t))[0]._gsap},mM=function(t,i,a){return(a=t[i])&&fn(a)?t[i]():qm(a)&&t.getAttribute&&t.getAttribute(i)||a},hi=function(t,i){return(t=t.split(",")).forEach(i)||t},pn=function(t){return Math.round(t*1e5)/1e5||0},En=function(t){return Math.round(t*1e7)/1e7||0},rl=function(t,i){var a=i.charAt(0),s=parseFloat(i.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},D3=function(t,i){for(var a=i.length,s=0;t.indexOf(i[s])<0&&++s<a;);return s<a},oh=function(){var t=Jr.length,i=Jr.slice(0),a,s;for(k0={},Jr.length=0,a=0;a<t;a++)s=i[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},$m=function(t){return!!(t._initted||t._startAt||t.add)},_M=function(t,i,a,s){Jr.length&&!Gn&&oh(),t.render(i,a,!!(Gn&&i<0&&$m(t))),Jr.length&&!Gn&&oh()},xM=function(t){var i=parseFloat(t);return(i||i===0)&&(t+"").match(cM).length<2?i:On(t)?t.trim():t},gM=function(t){return t},Oi=function(t,i){for(var a in i)a in t||(t[a]=i[a]);return t},U3=function(t){return function(i,a){for(var s in a)s in i||s==="duration"&&t||s==="ease"||(i[s]=a[s])}},hl=function(t,i){for(var a in i)t[a]=i[a];return t},VS=function l(t,i){for(var a in i)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Ca(i[a])?l(t[a]||(t[a]={}),i[a]):i[a]);return t},lh=function(t,i){var a={},s;for(s in t)s in i||(a[s]=t[s]);return a},Cu=function(t){var i=t.parent||on,a=t.keyframes?U3(jn(t.keyframes)):Oi;if(fi(t.inherit))for(;i;)a(t,i.vars.defaults),i=i.parent||i._dp;return t},N3=function(t,i){for(var a=t.length,s=a===i.length;s&&a--&&t[a]===i[a];);return a<0},vM=function(t,i,a,s,u){var f=t[s],h;if(u)for(h=i[u];f&&f[u]>h;)f=f._prev;return f?(i._next=f._next,f._next=i):(i._next=t[a],t[a]=i),i._next?i._next._prev=i:t[s]=i,i._prev=f,i.parent=i._dp=t,i},mh=function(t,i,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=i._prev,f=i._next;u?u._next=f:t[a]===i&&(t[a]=f),f?f._prev=u:t[s]===i&&(t[s]=u),i._next=i._prev=i.parent=null},es=function(t,i){t.parent&&(!i||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ys=function(t,i){if(t&&(!i||i._end>t._dur||i._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},L3=function(t){for(var i=t.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return t},Y0=function(t,i,a,s){return t._startAt&&(Gn?t._startAt.revert(Qf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(i,!0,s))},O3=function l(t){return!t||t._ts&&l(t.parent)},GS=function(t){return t._repeat?dl(t._tTime,t=t.duration()+t._rDelay)*t:0},dl=function(t,i){var a=Math.floor(t=En(t/i));return t&&a===t?a-1:a},uh=function(t,i){return(t-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},_h=function(t){return t._end=En(t._start+(t._tDur/Math.abs(t._ts||t._rts||$e)||0))},xh=function(t,i){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=En(a._time-(t._ts>0?i/t._ts:((t._dirty?t.totalDuration():t._tDur)-i)/-t._ts)),_h(t),a._dirty||Ys(a,t)),t},SM=function(t,i){var a;if((i._time||!i._dur&&i._initted||i._start<t._time&&(i._dur||!i.add))&&(a=uh(t.rawTime(),i),(!i._dur||Wu(0,i.totalDuration(),a)-i._tTime>$e)&&i.render(a,!0)),Ys(t,i)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-$e}},ba=function(t,i,a,s){return i.parent&&es(i),i._start=En((rr(a)?a:a||t!==on?qi(t,a,i):t._time)+i._delay),i._end=En(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),vM(t,i,"_first","_last",t._sort?"_start":0),q0(i)||(t._recent=i),s||SM(t,i),t._ts<0&&xh(t,t._tTime),t},yM=function(t,i){return(Li.ScrollTrigger||Zm("scrollTrigger",i))&&Li.ScrollTrigger.create(i,t)},MM=function(t,i,a,s,u){if(e_(t,i,u),!t._initted)return 1;if(!a&&t._pt&&!Gn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&pM!==Ci.frame)return Jr.push(t),t._lazy=[u,s],1},P3=function l(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||l(i))},q0=function(t){var i=t.data;return i==="isFromStart"||i==="isStart"},z3=function(t,i,a,s){var u=t.ratio,f=i<0||!i&&(!t._start&&P3(t)&&!(!t._initted&&q0(t))||(t._ts<0||t._dp._ts<0)&&!q0(t))?0:1,h=t._rDelay,p=0,m,_,x;if(h&&t._repeat&&(p=Wu(0,t._tDur,i),_=dl(p,h),t._yoyo&&_&1&&(f=1-f),_!==dl(t._tTime,h)&&(u=1-f,t.vars.repeatRefresh&&t._initted&&t.invalidate())),f!==u||Gn||s||t._zTime===$e||!i&&t._zTime){if(!t._initted&&MM(t,i,s,a,p))return;for(x=t._zTime,t._zTime=i||(a?$e:0),a||(a=i&&!x),t.ratio=f,t._from&&(f=1-f),t._time=0,t._tTime=p,m=t._pt;m;)m.r(f,m.d),m=m._next;i<0&&Y0(t,i,a,!0),t._onUpdate&&!a&&wi(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&wi(t,"onRepeat"),(i>=t._tDur||i<0)&&t.ratio===f&&(f&&es(t,1),!a&&!Gn&&(wi(t,f?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=i)},I3=function(t,i,a){var s;if(a>i)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>i)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<i)return s;s=s._prev}},pl=function(t,i,a,s){var u=t._repeat,f=En(i)||0,h=t._tTime/t._tDur;return h&&!s&&(t._time*=f/t._dur),t._dur=f,t._tDur=u?u<0?1e10:En(f*(u+1)+t._rDelay*u):f,h>0&&!s&&xh(t,t._tTime=t._tDur*h),t.parent&&_h(t),a||Ys(t.parent,t),t},XS=function(t){return t instanceof ii?Ys(t):pl(t,t._dur)},F3={_start:0,endTime:Ou,totalDuration:Ou},qi=function l(t,i,a){var s=t.labels,u=t._recent||F3,f=t.duration()>=ji?u.endTime(!1):t._dur,h,p,m;return On(i)&&(isNaN(i)||i in s)?(p=i.charAt(0),m=i.substr(-1)==="%",h=i.indexOf("="),p==="<"||p===">"?(h>=0&&(i=i.replace(/=/,"")),(p==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(i.substr(1))||0)*(m?(h<0?u:a).totalDuration()/100:1)):h<0?(i in s||(s[i]=f),s[i]):(p=parseFloat(i.charAt(h-1)+i.substr(h+1)),m&&a&&(p=p/100*(jn(a)?a[0]:a).totalDuration()),h>1?l(t,i.substr(0,h-1),a)+p:f+p)):i==null?f:+i},wu=function(t,i,a){var s=rr(i[1]),u=(s?2:1)+(t<2?0:1),f=i[u],h,p;if(s&&(f.duration=i[1]),f.parent=a,t){for(h=f,p=a;p&&!("immediateRender"in h);)h=p.vars.defaults||{},p=fi(p.vars.inherit)&&p.parent;f.immediateRender=fi(h.immediateRender),t<2?f.runBackwards=1:f.startAt=i[u-1]}return new bn(i[0],f,i[u+1])},as=function(t,i){return t||t===0?i(t):i},Wu=function(t,i,a){return a<t?t:a>i?i:a},Wn=function(t,i){return!On(t)||!(i=R3.exec(t))?"":i[1]},B3=function(t,i,a){return as(a,function(s){return Wu(t,i,s)})},W0=[].slice,bM=function(t,i){return t&&Ca(t)&&"length"in t&&(!i&&!t.length||t.length-1 in t&&Ca(t[0]))&&!t.nodeType&&t!==ya},H3=function(t,i,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return On(s)&&!i||bM(s,1)?(u=a).push.apply(u,Zi(s)):a.push(s)})||a},Zi=function(t,i,a){return rn&&!i&&rn.selector?rn.selector(t):On(t)&&!a&&(X0||!ml())?W0.call((i||jm).querySelectorAll(t),0):jn(t)?H3(t,a):bM(t)?W0.call(t,0):t?[t]:[]},j0=function(t){return t=Zi(t)[0]||Lu("Invalid scope")||{},function(i){var a=t.current||t.nativeElement||t;return Zi(i,a.querySelectorAll?a:a===t?Lu("Invalid scope")||jm.createElement("div"):t)}},EM=function(t){return t.sort(function(){return .5-Math.random()})},TM=function(t){if(fn(t))return t;var i=Ca(t)?t:{each:t},a=qs(i.ease),s=i.from||0,u=parseFloat(i.base)||0,f={},h=s>0&&s<1,p=isNaN(s)||h,m=i.axis,_=s,x=s;return On(s)?_=x={center:.5,edges:.5,end:1}[s]||0:!h&&p&&(_=s[0],x=s[1]),function(g,y,E){var b=(E||i).length,M=f[b],v,w,D,L,P,N,O,F,R;if(!M){if(R=i.grid==="auto"?0:(i.grid||[1,ji])[1],!R){for(O=-ji;O<(O=E[R++].getBoundingClientRect().left)&&R<b;);R<b&&R--}for(M=f[b]=[],v=p?Math.min(R,b)*_-.5:s%R,w=R===ji?0:p?b*x/R-.5:s/R|0,O=0,F=ji,N=0;N<b;N++)D=N%R-v,L=w-(N/R|0),M[N]=P=m?Math.abs(m==="y"?L:D):sM(D*D+L*L),P>O&&(O=P),P<F&&(F=P);s==="random"&&EM(M),M.max=O-F,M.min=F,M.v=b=(parseFloat(i.amount)||parseFloat(i.each)*(R>b?b-1:m?m==="y"?b/R:R:Math.max(R,b/R))||0)*(s==="edges"?-1:1),M.b=b<0?u-b:u,M.u=Wn(i.amount||i.each)||0,a=a&&b<0?PM(a):a}return b=(M[g]-M.min)/M.max||0,En(M.b+(a?a(b):b)*M.v)+M.u}},Z0=function(t){var i=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=En(Math.round(parseFloat(a)/t)*t*i);return(s-s%1)/i+(rr(a)?0:Wn(a))}},AM=function(t,i){var a=jn(t),s,u;return!a&&Ca(t)&&(s=a=t.radius||ji,t.values?(t=Zi(t.values),(u=!rr(t[0]))&&(s*=s)):t=Z0(t.increment)),as(i,a?fn(t)?function(f){return u=t(f),Math.abs(u-f)<=s?u:f}:function(f){for(var h=parseFloat(u?f.x:f),p=parseFloat(u?f.y:0),m=ji,_=0,x=t.length,g,y;x--;)u?(g=t[x].x-h,y=t[x].y-p,g=g*g+y*y):g=Math.abs(t[x]-h),g<m&&(m=g,_=x);return _=!s||m<=s?t[_]:f,u||_===f||rr(f)?_:_+Wn(f)}:Z0(t))},RM=function(t,i,a,s){return as(jn(t)?!i:a===!0?!!(a=0):!s,function(){return jn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(i-t+a*.99))/a)*a*s)/s})},V3=function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return function(s){return i.reduce(function(u,f){return f(u)},s)}},G3=function(t,i){return function(a){return t(parseFloat(a))+(i||Wn(a))}},X3=function(t,i,a){return wM(t,i,0,1,a)},CM=function(t,i,a){return as(a,function(s){return t[~~i(s)]})},k3=function l(t,i,a){var s=i-t;return jn(t)?CM(t,l(0,t.length),i):as(a,function(u){return(s+(u-t)%s)%s+t})},Y3=function l(t,i,a){var s=i-t,u=s*2;return jn(t)?CM(t,l(0,t.length-1),i):as(a,function(f){return f=(u+(f-t)%u)%u||0,t+(f>s?u-f:f)})},Pu=function(t){for(var i=0,a="",s,u,f,h;~(s=t.indexOf("random(",i));)f=t.indexOf(")",s),h=t.charAt(s+7)==="[",u=t.substr(s+7,f-s-7).match(h?cM:G0),a+=t.substr(i,s-i)+RM(h?u:+u[0],h?0:+u[1],+u[2]||1e-5),i=f+1;return a+t.substr(i,t.length-i)},wM=function(t,i,a,s,u){var f=i-t,h=s-a;return as(u,function(p){return a+((p-t)/f*h||0)})},q3=function l(t,i,a,s){var u=isNaN(t+i)?0:function(y){return(1-y)*t+y*i};if(!u){var f=On(t),h={},p,m,_,x,g;if(a===!0&&(s=1)&&(a=null),f)t={p:t},i={p:i};else if(jn(t)&&!jn(i)){for(_=[],x=t.length,g=x-2,m=1;m<x;m++)_.push(l(t[m-1],t[m]));x--,u=function(E){E*=x;var b=Math.min(g,~~E);return _[b](E-b)},a=i}else s||(t=hl(jn(t)?[]:{},t));if(!_){for(p in i)t_.call(h,t,p,"get",i[p]);u=function(E){return a_(E,h)||(f?t.p:t)}}}return as(a,u)},kS=function(t,i,a){var s=t.labels,u=ji,f,h,p;for(f in s)h=s[f]-i,h<0==!!a&&h&&u>(h=Math.abs(h))&&(p=f,u=h);return p},wi=function(t,i,a){var s=t.vars,u=s[i],f=rn,h=t._ctx,p,m,_;if(u)return p=s[i+"Params"],m=s.callbackScope||t,a&&Jr.length&&oh(),h&&(rn=h),_=p?u.apply(m,p):u.call(m),rn=f,_},Tu=function(t){return es(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Gn),t.progress()<1&&wi(t,"onInterrupt"),t},al,DM=[],UM=function(t){if(t)if(t=!t.name&&t.default||t,Wm()||t.headless){var i=t.name,a=fn(t),s=i&&!a&&t.init?function(){this._props=[]}:t,u={init:Ou,render:a_,add:t_,kill:lT,modifier:oT,rawVars:0},f={targetTest:0,get:0,getSetter:i_,aliases:{},register:0};if(ml(),t!==s){if(Ai[i])return;Oi(s,Oi(lh(t,u),f)),hl(s.prototype,hl(u,lh(t,f))),Ai[s.prop=i]=s,t.targetTest&&(Jf.push(s),Km[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}dM(i,s),t.register&&t.register(mi,s,di)}else DM.push(t)},Je=255,Au={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},n0=function(t,i,a){return t+=t<0?1:t>1?-1:0,(t*6<1?i+(a-i)*t*6:t<.5?a:t*3<2?i+(a-i)*(2/3-t)*6:i)*Je+.5|0},NM=function(t,i,a){var s=t?rr(t)?[t>>16,t>>8&Je,t&Je]:0:Au.black,u,f,h,p,m,_,x,g,y,E;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Au[t])s=Au[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),f=t.charAt(2),h=t.charAt(3),t="#"+u+u+f+f+h+h+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Je,s&Je,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Je,t&Je]}else if(t.substr(0,3)==="hsl"){if(s=E=t.match(G0),!i)p=+s[0]%360/360,m=+s[1]/100,_=+s[2]/100,f=_<=.5?_*(m+1):_+m-_*m,u=_*2-f,s.length>3&&(s[3]*=1),s[0]=n0(p+1/3,u,f),s[1]=n0(p,u,f),s[2]=n0(p-1/3,u,f);else if(~t.indexOf("="))return s=t.match(lM),a&&s.length<4&&(s[3]=1),s}else s=t.match(G0)||Au.transparent;s=s.map(Number)}return i&&!E&&(u=s[0]/Je,f=s[1]/Je,h=s[2]/Je,x=Math.max(u,f,h),g=Math.min(u,f,h),_=(x+g)/2,x===g?p=m=0:(y=x-g,m=_>.5?y/(2-x-g):y/(x+g),p=x===u?(f-h)/y+(f<h?6:0):x===f?(h-u)/y+2:(u-f)/y+4,p*=60),s[0]=~~(p+.5),s[1]=~~(m*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},LM=function(t){var i=[],a=[],s=-1;return t.split($r).forEach(function(u){var f=u.match(il)||[];i.push.apply(i,f),a.push(s+=f.length+1)}),i.c=a,i},YS=function(t,i,a){var s="",u=(t+s).match($r),f=i?"hsla(":"rgba(",h=0,p,m,_,x;if(!u)return t;if(u=u.map(function(g){return(g=NM(g,i,1))&&f+(i?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),a&&(_=LM(t),p=a.c,p.join(s)!==_.c.join(s)))for(m=t.replace($r,"1").split(il),x=m.length-1;h<x;h++)s+=m[h]+(~p.indexOf(h)?u.shift()||f+"0,0,0,0)":(_.length?_:u.length?u:a).shift());if(!m)for(m=t.split($r),x=m.length-1;h<x;h++)s+=m[h]+u[h];return s+m[x]},$r=(function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Au)l+="|"+t+"\\b";return new RegExp(l+")","gi")})(),W3=/hsl[a]?\(/,OM=function(t){var i=t.join(" "),a;if($r.lastIndex=0,$r.test(i))return a=W3.test(i),t[1]=YS(t[1],a),t[0]=YS(t[0],a,LM(t[1])),!0},zu,Ci=(function(){var l=Date.now,t=500,i=33,a=l(),s=a,u=1e3/240,f=u,h=[],p,m,_,x,g,y,E=function b(M){var v=l()-s,w=M===!0,D,L,P,N;if((v>t||v<0)&&(a+=v-i),s+=v,P=s-a,D=P-f,(D>0||w)&&(N=++x.frame,g=P-x.time*1e3,x.time=P=P/1e3,f+=D+(D>=u?4:u-D),L=1),w||(p=m(b)),L)for(y=0;y<h.length;y++)h[y](P,g,N,M)};return x={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(M){return g/(1e3/(M||60))},wake:function(){fM&&(!X0&&Wm()&&(ya=X0=window,jm=ya.document||{},Li.gsap=mi,(ya.gsapVersions||(ya.gsapVersions=[])).push(mi.version),hM(sh||ya.GreenSockGlobals||!ya.gsap&&ya||{}),DM.forEach(UM)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&x.sleep(),m=_||function(M){return setTimeout(M,f-x.time*1e3+1|0)},zu=1,E(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),zu=0,m=Ou},lagSmoothing:function(M,v){t=M||1/0,i=Math.min(v||33,t)},fps:function(M){u=1e3/(M||240),f=x.time*1e3+u},add:function(M,v,w){var D=v?function(L,P,N,O){M(L,P,N,O),x.remove(D)}:M;return x.remove(M),h[w?"unshift":"push"](D),ml(),D},remove:function(M,v){~(v=h.indexOf(M))&&h.splice(v,1)&&y>=v&&y--},_listeners:h},x})(),ml=function(){return!zu&&Ci.wake()},Ce={},j3=/^[\d.\-M][\d.\-,\s]/,Z3=/["']/g,K3=function(t){for(var i={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,f=a.length,h,p,m;u<f;u++)p=a[u],h=u!==f-1?p.lastIndexOf(","):p.length,m=p.substr(0,h),i[s]=isNaN(m)?m.replace(Z3,"").trim():+m,s=p.substr(h+1).trim();return i},Q3=function(t){var i=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",i);return t.substring(i,~s&&s<a?t.indexOf(")",a+1):a)},J3=function(t){var i=(t+"").split("("),a=Ce[i[0]];return a&&i.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[K3(i[1])]:Q3(t).split(",").map(xM)):Ce._CE&&j3.test(t)?Ce._CE("",t):a},PM=function(t){return function(i){return 1-t(1-i)}},zM=function l(t,i){for(var a=t._first,s;a;)a instanceof ii?l(a,i):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==i&&(a.timeline?l(a.timeline,i):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=i)),a=a._next},qs=function(t,i){return t&&(fn(t)?t:Ce[t]||J3(t))||i},Qs=function(t,i,a,s){a===void 0&&(a=function(p){return 1-i(1-p)}),s===void 0&&(s=function(p){return p<.5?i(p*2)/2:1-i((1-p)*2)/2});var u={easeIn:i,easeOut:a,easeInOut:s},f;return hi(t,function(h){Ce[h]=Li[h]=u,Ce[f=h.toLowerCase()]=a;for(var p in u)Ce[f+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Ce[h+"."+p]=u[p]}),u},IM=function(t){return function(i){return i<.5?(1-t(1-i*2))/2:.5+t((i-.5)*2)/2}},i0=function l(t,i,a){var s=i>=1?i:1,u=(a||(t?.3:.45))/(i<1?i:1),f=u/V0*(Math.asin(1/s)||0),h=function(_){return _===1?1:s*Math.pow(2,-10*_)*A3((_-f)*u)+1},p=t==="out"?h:t==="in"?function(m){return 1-h(1-m)}:IM(h);return u=V0/u,p.config=function(m,_){return l(t,m,_)},p},a0=function l(t,i){i===void 0&&(i=1.70158);var a=function(f){return f?--f*f*((i+1)*f+i)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:IM(a);return s.config=function(u){return l(t,u)},s};hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,t){var i=t<5?t+1:t;Qs(l+",Power"+(i-1),t?function(a){return Math.pow(a,i)}:function(a){return a},function(a){return 1-Math.pow(1-a,i)},function(a){return a<.5?Math.pow(a*2,i)/2:1-Math.pow((1-a)*2,i)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Qs("Elastic",i0("in"),i0("out"),i0());(function(l,t){var i=1/t,a=2*i,s=2.5*i,u=function(h){return h<i?l*h*h:h<a?l*Math.pow(h-1.5/t,2)+.75:h<s?l*(h-=2.25/t)*h+.9375:l*Math.pow(h-2.625/t,2)+.984375};Qs("Bounce",function(f){return 1-u(1-f)},u)})(7.5625,2.75);Qs("Expo",function(l){return Math.pow(2,10*(l-1))*l+l*l*l*l*l*l*(1-l)});Qs("Circ",function(l){return-(sM(1-l*l)-1)});Qs("Sine",function(l){return l===1?1:-T3(l*b3)+1});Qs("Back",a0("in"),a0("out"),a0());Ce.SteppedEase=Ce.steps=Li.SteppedEase={config:function(t,i){t===void 0&&(t=1);var a=1/t,s=t+(i?0:1),u=i?1:0,f=1-$e;return function(h){return((s*Wu(0,f,h)|0)+u)*a}}};fl.ease=Ce["quad.out"];hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return Qm+=l+","+l+"Params,"});var FM=function(t,i){this.id=E3++,t._gsap=this,this.target=t,this.harness=i,this.get=i?i.get:mM,this.set=i?i.getSetter:i_},Iu=(function(){function l(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,pl(this,+i.duration,1,1),this.data=i.data,rn&&(this._ctx=rn,rn.data.push(this)),zu||Ci.wake()}var t=l.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,pl(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(ml(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(xh(this,a),!u._dp||u.parent||SM(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ba(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===$e||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),_M(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+GS(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+GS(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?dl(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?uh(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-$e?0:this._rts,this.totalTime(Wu(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),_h(this),L3(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ml(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ba(s,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(fi(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?uh(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=w3);var s=Gn;return Gn=a,$m(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Gn=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,XS(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,XS(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(qi(this,a),fi(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,fi(s)),this._dur||(this._zTime=-$e),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-$e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-$e)},t.eventCallback=function(a,s,u){var f=this.vars;return arguments.length>1?(s?(f[a]=s,u&&(f[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete f[a],this):f[a]},t.then=function(a){var s=this;return new Promise(function(u){var f=fn(a)?a:gM,h=function(){var m=s.then;s.then=null,fn(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=m),u(f),s.then=m};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?h():s._prom=h})},t.kill=function(){Tu(this)},l})();Oi(Iu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var ii=(function(l){rM(t,l);function t(a,s){var u;return a===void 0&&(a={}),u=l.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=fi(a.sortChildren),on&&ba(a.parent||on,Ja(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&yM(Ja(u),a.scrollTrigger),u}var i=t.prototype;return i.to=function(s,u,f){return wu(0,arguments,this),this},i.from=function(s,u,f){return wu(1,arguments,this),this},i.fromTo=function(s,u,f,h){return wu(2,arguments,this),this},i.set=function(s,u,f){return u.duration=0,u.parent=this,Cu(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new bn(s,u,qi(this,f),1),this},i.call=function(s,u,f){return ba(this,bn.delayedCall(0,s,u),f)},i.staggerTo=function(s,u,f,h,p,m,_){return f.duration=u,f.stagger=f.stagger||h,f.onComplete=m,f.onCompleteParams=_,f.parent=this,new bn(s,f,qi(this,p)),this},i.staggerFrom=function(s,u,f,h,p,m,_){return f.runBackwards=1,Cu(f).immediateRender=fi(f.immediateRender),this.staggerTo(s,u,f,h,p,m,_)},i.staggerFromTo=function(s,u,f,h,p,m,_,x){return h.startAt=f,Cu(h).immediateRender=fi(h.immediateRender),this.staggerTo(s,u,h,p,m,_,x)},i.render=function(s,u,f){var h=this._time,p=this._dirty?this.totalDuration():this._tDur,m=this._dur,_=s<=0?0:En(s),x=this._zTime<0!=s<0&&(this._initted||!m),g,y,E,b,M,v,w,D,L,P,N,O;if(this!==on&&_>p&&s>=0&&(_=p),_!==this._tTime||f||x){if(h!==this._time&&m&&(_+=this._time-h,s+=this._time-h),g=_,L=this._start,D=this._ts,v=!D,x&&(m||(h=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(N=this._yoyo,M=m+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(M*100+s,u,f);if(g=En(_%M),_===p?(b=this._repeat,g=m):(P=En(_/M),b=~~P,b&&b===P&&(g=m,b--),g>m&&(g=m)),P=dl(this._tTime,M),!h&&this._tTime&&P!==b&&this._tTime-P*M-this._dur<=0&&(P=b),N&&b&1&&(g=m-g,O=1),b!==P&&!this._lock){var F=N&&P&1,R=F===(N&&b&1);if(b<P&&(F=!F),h=F?0:_%m?m:_,this._lock=1,this.render(h||(O?0:En(b*M)),u,!m)._lock=0,this._tTime=_,!u&&this.parent&&wi(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1),h&&h!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(m=this._dur,p=this._tDur,R&&(this._lock=2,h=F?m:-1e-4,this.render(h,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;zM(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=I3(this,En(h),En(g)),w&&(_-=g-(g=w._start))),this._tTime=_,this._time=g,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,h=0),!h&&_&&!u&&!P&&(wi(this,"onStart"),this._tTime!==_))return this;if(g>=h&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||g>=y._start)&&y._ts&&w!==y){if(y.parent!==this)return this.render(s,u,f);if(y.render(y._ts>0?(g-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(g-y._start)*y._ts,u,f),g!==this._time||!this._ts&&!v){w=0,E&&(_+=this._zTime=-$e);break}}y=E}else{y=this._last;for(var C=s<0?s:g;y;){if(E=y._prev,(y._act||C<=y._end)&&y._ts&&w!==y){if(y.parent!==this)return this.render(s,u,f);if(y.render(y._ts>0?(C-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(C-y._start)*y._ts,u,f||Gn&&$m(y)),g!==this._time||!this._ts&&!v){w=0,E&&(_+=this._zTime=C?-$e:$e);break}}y=E}}if(w&&!u&&(this.pause(),w.render(g>=h?0:-$e)._zTime=g>=h?1:-1,this._ts))return this._start=L,_h(this),this.render(s,u,f);this._onUpdate&&!u&&wi(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&h)&&(L===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((s||!m)&&(_===p&&this._ts>0||!_&&this._ts<0)&&es(this,1),!u&&!(s<0&&!h)&&(_||h||!p)&&(wi(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(s,u){var f=this;if(rr(u)||(u=qi(this,u,s)),!(s instanceof Iu)){if(jn(s))return s.forEach(function(h){return f.add(h,u)}),this;if(On(s))return this.addLabel(s,u);if(fn(s))s=bn.delayedCall(0,s);else return this}return this!==s?ba(this,s,u):this},i.getChildren=function(s,u,f,h){s===void 0&&(s=!0),u===void 0&&(u=!0),f===void 0&&(f=!0),h===void 0&&(h=-ji);for(var p=[],m=this._first;m;)m._start>=h&&(m instanceof bn?u&&p.push(m):(f&&p.push(m),s&&p.push.apply(p,m.getChildren(!0,u,f)))),m=m._next;return p},i.getById=function(s){for(var u=this.getChildren(1,1,1),f=u.length;f--;)if(u[f].vars.id===s)return u[f]},i.remove=function(s){return On(s)?this.removeLabel(s):fn(s)?this.killTweensOf(s):(s.parent===this&&mh(this,s),s===this._recent&&(this._recent=this._last),Ys(this))},i.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=En(Ci.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),l.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},i.addLabel=function(s,u){return this.labels[s]=qi(this,u),this},i.removeLabel=function(s){return delete this.labels[s],this},i.addPause=function(s,u,f){var h=bn.delayedCall(0,u||Ou,f);return h.data="isPause",this._hasPause=1,ba(this,h,qi(this,s))},i.removePause=function(s){var u=this._first;for(s=qi(this,s);u;)u._start===s&&u.data==="isPause"&&es(u),u=u._next},i.killTweensOf=function(s,u,f){for(var h=this.getTweensOf(s,f),p=h.length;p--;)jr!==h[p]&&h[p].kill(s,u);return this},i.getTweensOf=function(s,u){for(var f=[],h=Zi(s),p=this._first,m=rr(u),_;p;)p instanceof bn?D3(p._targets,h)&&(m?(!jr||p._initted&&p._ts)&&p.globalTime(0)<=u&&p.globalTime(p.totalDuration())>u:!u||p.isActive())&&f.push(p):(_=p.getTweensOf(h,u)).length&&f.push.apply(f,_),p=p._next;return f},i.tweenTo=function(s,u){u=u||{};var f=this,h=qi(f,s),p=u,m=p.startAt,_=p.onStart,x=p.onStartParams,g=p.immediateRender,y,E=bn.to(f,Oi({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:h,overwrite:"auto",duration:u.duration||Math.abs((h-(m&&"time"in m?m.time:f._time))/f.timeScale())||$e,onStart:function(){if(f.pause(),!y){var M=u.duration||Math.abs((h-(m&&"time"in m?m.time:f._time))/f.timeScale());E._dur!==M&&pl(E,M,0,1).render(E._time,!0,!0),y=1}_&&_.apply(E,x||[])}},u));return g?E.render(0):E},i.tweenFromTo=function(s,u,f){return this.tweenTo(u,Oi({startAt:{time:qi(this,s)}},f))},i.recent=function(){return this._recent},i.nextLabel=function(s){return s===void 0&&(s=this._time),kS(this,qi(this,s))},i.previousLabel=function(s){return s===void 0&&(s=this._time),kS(this,qi(this,s),1)},i.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+$e)},i.shiftChildren=function(s,u,f){f===void 0&&(f=0);for(var h=this._first,p=this.labels,m;h;)h._start>=f&&(h._start+=s,h._end+=s),h=h._next;if(u)for(m in p)p[m]>=f&&(p[m]+=s);return Ys(this)},i.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return l.prototype.invalidate.call(this,s)},i.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,f;u;)f=u._next,this.remove(u),u=f;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ys(this)},i.totalDuration=function(s){var u=0,f=this,h=f._last,p=ji,m,_,x;if(arguments.length)return f.timeScale((f._repeat<0?f.duration():f.totalDuration())/(f.reversed()?-s:s));if(f._dirty){for(x=f.parent;h;)m=h._prev,h._dirty&&h.totalDuration(),_=h._start,_>p&&f._sort&&h._ts&&!f._lock?(f._lock=1,ba(f,h,_-h._delay,1)._lock=0):p=_,_<0&&h._ts&&(u-=_,(!x&&!f._dp||x&&x.smoothChildTiming)&&(f._start+=_/f._ts,f._time-=_,f._tTime-=_),f.shiftChildren(-_,!1,-1/0),p=0),h._end>u&&h._ts&&(u=h._end),h=m;pl(f,f===on&&f._time>u?f._time:u,1,1),f._dirty=0}return f._tDur},t.updateRoot=function(s){if(on._ts&&(_M(on,uh(s,on)),pM=Ci.frame),Ci.frame>=HS){HS+=Di.autoSleep||120;var u=on._first;if((!u||!u._ts)&&Di.autoSleep&&Ci._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||Ci.sleep()}}},t})(Iu);Oi(ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var $3=function(t,i,a,s,u,f,h){var p=new di(this._pt,t,i,0,1,kM,null,u),m=0,_=0,x,g,y,E,b,M,v,w;for(p.b=a,p.e=s,a+="",s+="",(v=~s.indexOf("random("))&&(s=Pu(s)),f&&(w=[a,s],f(w,t,i),a=w[0],s=w[1]),g=a.match(t0)||[];x=t0.exec(s);)E=x[0],b=s.substring(m,x.index),y?y=(y+1)%5:b.substr(-5)==="rgba("&&(y=1),E!==g[_++]&&(M=parseFloat(g[_-1])||0,p._pt={_next:p._pt,p:b||_===1?b:",",s:M,c:E.charAt(1)==="="?rl(M,E)-M:parseFloat(E)-M,m:y&&y<4?Math.round:0},m=t0.lastIndex);return p.c=m<s.length?s.substring(m,s.length):"",p.fp=h,(uM.test(s)||v)&&(p.e=0),this._pt=p,p},t_=function(t,i,a,s,u,f,h,p,m,_){fn(s)&&(s=s(u||0,t,f));var x=t[i],g=a!=="get"?a:fn(x)?m?t[i.indexOf("set")||!fn(t["get"+i.substr(3)])?i:"get"+i.substr(3)](m):t[i]():x,y=fn(x)?m?aT:GM:n_,E;if(On(s)&&(~s.indexOf("random(")&&(s=Pu(s)),s.charAt(1)==="="&&(E=rl(g,s)+(Wn(g)||0),(E||E===0)&&(s=E))),!_||g!==s||K0)return!isNaN(g*s)&&s!==""?(E=new di(this._pt,t,i,+g||0,s-(g||0),typeof x=="boolean"?sT:XM,0,y),m&&(E.fp=m),h&&E.modifier(h,this,t),this._pt=E):(!x&&!(i in t)&&Zm(i,s),$3.call(this,t,i,g,s,y,p||Di.stringFilter,m))},tT=function(t,i,a,s,u){if(fn(t)&&(t=Du(t,u,i,a,s)),!Ca(t)||t.style&&t.nodeType||jn(t)||oM(t))return On(t)?Du(t,u,i,a,s):t;var f={},h;for(h in t)f[h]=Du(t[h],u,i,a,s);return f},BM=function(t,i,a,s,u,f){var h,p,m,_;if(Ai[t]&&(h=new Ai[t]).init(u,h.rawVars?i[t]:tT(i[t],s,u,f,a),a,s,f)!==!1&&(a._pt=p=new di(a._pt,u,t,0,1,h.render,h,0,h.priority),a!==al))for(m=a._ptLookup[a._targets.indexOf(u)],_=h._props.length;_--;)m[h._props[_]]=p;return h},jr,K0,e_=function l(t,i,a){var s=t.vars,u=s.ease,f=s.startAt,h=s.immediateRender,p=s.lazy,m=s.onUpdate,_=s.runBackwards,x=s.yoyoEase,g=s.keyframes,y=s.autoRevert,E=t._dur,b=t._startAt,M=t._targets,v=t.parent,w=v&&v.data==="nested"?v.vars.targets:M,D=t._overwrite==="auto"&&!Ym,L=t.timeline,P,N,O,F,R,C,H,K,it,ht,st,k,et;if(L&&(!g||!u)&&(u="none"),t._ease=qs(u,fl.ease),t._yEase=x?PM(qs(x===!0?u:x,fl.ease)):0,x&&t._yoyo&&!t._repeat&&(x=t._yEase,t._yEase=t._ease,t._ease=x),t._from=!L&&!!s.runBackwards,!L||g&&!s.stagger){if(K=M[0]?ks(M[0]).harness:0,k=K&&s[K.prop],P=lh(s,Km),b&&(b._zTime<0&&b.progress(1),i<0&&_&&h&&!y?b.render(-1,!0):b.revert(_&&E?Qf:C3),b._lazy=0),f){if(es(t._startAt=bn.set(M,Oi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!b&&fi(p),startAt:null,delay:0,onUpdate:m&&function(){return wi(t,"onUpdate")},stagger:0},f))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Gn||!h&&!y)&&t._startAt.revert(Qf),h&&E&&i<=0&&a<=0){i&&(t._zTime=i);return}}else if(_&&E&&!b){if(i&&(h=!1),O=Oi({overwrite:!1,data:"isFromStart",lazy:h&&!b&&fi(p),immediateRender:h,stagger:0,parent:v},P),k&&(O[K.prop]=k),es(t._startAt=bn.set(M,O)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Gn?t._startAt.revert(Qf):t._startAt.render(-1,!0)),t._zTime=i,!h)l(t._startAt,$e,$e);else if(!i)return}for(t._pt=t._ptCache=0,p=E&&fi(p)||p&&!E,N=0;N<M.length;N++){if(R=M[N],H=R._gsap||Jm(M)[N]._gsap,t._ptLookup[N]=ht={},k0[H.id]&&Jr.length&&oh(),st=w===M?N:w.indexOf(R),K&&(it=new K).init(R,k||P,t,st,w)!==!1&&(t._pt=F=new di(t._pt,R,it.name,0,1,it.render,it,0,it.priority),it._props.forEach(function(j){ht[j]=F}),it.priority&&(C=1)),!K||k)for(O in P)Ai[O]&&(it=BM(O,P,t,st,R,w))?it.priority&&(C=1):ht[O]=F=t_.call(t,R,O,"get",P[O],st,w,0,s.stringFilter);t._op&&t._op[N]&&t.kill(R,t._op[N]),D&&t._pt&&(jr=t,on.killTweensOf(R,ht,t.globalTime(i)),et=!t.parent,jr=0),t._pt&&p&&(k0[H.id]=1)}C&&YM(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!et,g&&i<=0&&L.render(ji,!0,!0)},eT=function(t,i,a,s,u,f,h,p){var m=(t._pt&&t._ptCache||(t._ptCache={}))[i],_,x,g,y;if(!m)for(m=t._ptCache[i]=[],g=t._ptLookup,y=t._targets.length;y--;){if(_=g[y][i],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==i&&_.fp!==i;)_=_._next;if(!_)return K0=1,t.vars[i]="+=0",e_(t,h),K0=0,p?Lu(i+" not eligible for reset"):1;m.push(_)}for(y=m.length;y--;)x=m[y],_=x._pt||x,_.s=(s||s===0)&&!u?s:_.s+(s||0)+f*_.c,_.c=a-_.s,x.e&&(x.e=pn(a)+Wn(x.e)),x.b&&(x.b=_.s+Wn(x.b))},nT=function(t,i){var a=t[0]?ks(t[0]).harness:0,s=a&&a.aliases,u,f,h,p;if(!s)return i;u=hl({},i);for(f in s)if(f in u)for(p=s[f].split(","),h=p.length;h--;)u[p[h]]=u[f];return u},iT=function(t,i,a,s){var u=i.ease||s||"power1.inOut",f,h;if(jn(i))h=a[t]||(a[t]=[]),i.forEach(function(p,m){return h.push({t:m/(i.length-1)*100,v:p,e:u})});else for(f in i)h=a[f]||(a[f]=[]),f==="ease"||h.push({t:parseFloat(t),v:i[f],e:u})},Du=function(t,i,a,s,u){return fn(t)?t.call(i,a,s,u):On(t)&&~t.indexOf("random(")?Pu(t):t},HM=Qm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",VM={};hi(HM+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return VM[l]=1});var bn=(function(l){rM(t,l);function t(a,s,u,f){var h;typeof s=="number"&&(u.duration=s,s=u,u=null),h=l.call(this,f?s:Cu(s))||this;var p=h.vars,m=p.duration,_=p.delay,x=p.immediateRender,g=p.stagger,y=p.overwrite,E=p.keyframes,b=p.defaults,M=p.scrollTrigger,v=p.yoyoEase,w=s.parent||on,D=(jn(a)||oM(a)?rr(a[0]):"length"in s)?[a]:Zi(a),L,P,N,O,F,R,C,H;if(h._targets=D.length?Jm(D):Lu("GSAP target "+a+" not found. https://gsap.com",!Di.nullTargetWarn)||[],h._ptLookup=[],h._overwrite=y,E||g||bf(m)||bf(_)){if(s=h.vars,L=h.timeline=new ii({data:"nested",defaults:b||{},targets:w&&w.data==="nested"?w.vars.targets:D}),L.kill(),L.parent=L._dp=Ja(h),L._start=0,g||bf(m)||bf(_)){if(O=D.length,C=g&&TM(g),Ca(g))for(F in g)~HM.indexOf(F)&&(H||(H={}),H[F]=g[F]);for(P=0;P<O;P++)N=lh(s,VM),N.stagger=0,v&&(N.yoyoEase=v),H&&hl(N,H),R=D[P],N.duration=+Du(m,Ja(h),P,R,D),N.delay=(+Du(_,Ja(h),P,R,D)||0)-h._delay,!g&&O===1&&N.delay&&(h._delay=_=N.delay,h._start+=_,N.delay=0),L.to(R,N,C?C(P,R,D):0),L._ease=Ce.none;L.duration()?m=_=0:h.timeline=0}else if(E){Cu(Oi(L.vars.defaults,{ease:"none"})),L._ease=qs(E.ease||s.ease||"none");var K=0,it,ht,st;if(jn(E))E.forEach(function(k){return L.to(D,k,">")}),L.duration();else{N={};for(F in E)F==="ease"||F==="easeEach"||iT(F,E[F],N,E.easeEach);for(F in N)for(it=N[F].sort(function(k,et){return k.t-et.t}),K=0,P=0;P<it.length;P++)ht=it[P],st={ease:ht.e,duration:(ht.t-(P?it[P-1].t:0))/100*m},st[F]=ht.v,L.to(D,st,K),K+=st.duration;L.duration()<m&&L.to({},{duration:m-L.duration()})}}m||h.duration(m=L.duration())}else h.timeline=0;return y===!0&&!Ym&&(jr=Ja(h),on.killTweensOf(D),jr=0),ba(w,Ja(h),u),s.reversed&&h.reverse(),s.paused&&h.paused(!0),(x||!m&&!E&&h._start===En(w._time)&&fi(x)&&O3(Ja(h))&&w.data!=="nested")&&(h._tTime=-$e,h.render(Math.max(0,-_)||0)),M&&yM(Ja(h),M),h}var i=t.prototype;return i.render=function(s,u,f){var h=this._time,p=this._tDur,m=this._dur,_=s<0,x=s>p-$e&&!_?p:s<$e?0:s,g,y,E,b,M,v,w,D,L;if(!m)z3(this,s,u,f);else if(x!==this._tTime||!s||f||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(g=x,D=this.timeline,this._repeat){if(b=m+this._rDelay,this._repeat<-1&&_)return this.totalTime(b*100+s,u,f);if(g=En(x%b),x===p?(E=this._repeat,g=m):(M=En(x/b),E=~~M,E&&E===M?(g=m,E--):g>m&&(g=m)),v=this._yoyo&&E&1,v&&(L=this._yEase,g=m-g),M=dl(this._tTime,b),g===h&&!f&&this._initted&&E===M)return this._tTime=x,this;E!==M&&(D&&this._yEase&&zM(D,v),this.vars.repeatRefresh&&!v&&!this._lock&&g!==b&&this._initted&&(this._lock=f=1,this.render(En(b*E),!0).invalidate()._lock=0))}if(!this._initted){if(MM(this,_?s:g,f,u,x))return this._tTime=0,this;if(h!==this._time&&!(f&&this.vars.repeatRefresh&&E!==M))return this;if(m!==this._dur)return this.render(s,u,f)}if(this._tTime=x,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(L||this._ease)(g/m),this._from&&(this.ratio=w=1-w),!h&&x&&!u&&!M&&(wi(this,"onStart"),this._tTime!==x))return this;for(y=this._pt;y;)y.r(w,y.d),y=y._next;D&&D.render(s<0?s:D._dur*D._ease(g/this._dur),u,f)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(_&&Y0(this,s,u,f),wi(this,"onUpdate")),this._repeat&&E!==M&&this.vars.onRepeat&&!u&&this.parent&&wi(this,"onRepeat"),(x===this._tDur||!x)&&this._tTime===x&&(_&&!this._onUpdate&&Y0(this,s,!0,!0),(s||!m)&&(x===this._tDur&&this._ts>0||!x&&this._ts<0)&&es(this,1),!u&&!(_&&!h)&&(x||h||v)&&(wi(this,x===p?"onComplete":"onReverseComplete",!0),this._prom&&!(x<p&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),l.prototype.invalidate.call(this,s)},i.resetTo=function(s,u,f,h,p){zu||Ci.wake(),this._ts||this.play();var m=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||e_(this,m),_=this._ease(m/this._dur),eT(this,s,u,f,h,_,m,p)?this.resetTo(s,u,f,h,1):(xh(this,0),this.parent||vM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?Tu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gn),this;if(this.timeline){var f=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,jr&&jr.vars.overwrite!==!0)._first||Tu(this),this.parent&&f!==this.timeline.totalDuration()&&pl(this,this._dur*this.timeline._tDur/f,0,1),this}var h=this._targets,p=s?Zi(s):h,m=this._ptLookup,_=this._pt,x,g,y,E,b,M,v;if((!u||u==="all")&&N3(h,p))return u==="all"&&(this._pt=0),Tu(this);for(x=this._op=this._op||[],u!=="all"&&(On(u)&&(b={},hi(u,function(w){return b[w]=1}),u=b),u=nT(h,u)),v=h.length;v--;)if(~p.indexOf(h[v])){g=m[v],u==="all"?(x[v]=u,E=g,y={}):(y=x[v]=x[v]||{},E=u);for(b in E)M=g&&g[b],M&&((!("kill"in M.d)||M.d.kill(b)===!0)&&mh(this,M,"_pt"),delete g[b]),y!=="all"&&(y[b]=1)}return this._initted&&!this._pt&&_&&Tu(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return wu(1,arguments)},t.delayedCall=function(s,u,f,h){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:f,onReverseCompleteParams:f,callbackScope:h})},t.fromTo=function(s,u,f){return wu(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,f){return on.killTweensOf(s,u,f)},t})(Iu);Oi(bn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hi("staggerTo,staggerFrom,staggerFromTo",function(l){bn[l]=function(){var t=new ii,i=W0.call(arguments,0);return i.splice(l==="staggerFromTo"?5:4,0,0),t[l].apply(t,i)}});var n_=function(t,i,a){return t[i]=a},GM=function(t,i,a){return t[i](a)},aT=function(t,i,a,s){return t[i](s.fp,a)},rT=function(t,i,a){return t.setAttribute(i,a)},i_=function(t,i){return fn(t[i])?GM:qm(t[i])&&t.setAttribute?rT:n_},XM=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e6)/1e6,i)},sT=function(t,i){return i.set(i.t,i.p,!!(i.s+i.c*t),i)},kM=function(t,i){var a=i._pt,s="";if(!t&&i.b)s=i.b;else if(t===1&&i.e)s=i.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=i.c}i.set(i.t,i.p,s,i)},a_=function(t,i){for(var a=i._pt;a;)a.r(t,a.d),a=a._next},oT=function(t,i,a,s){for(var u=this._pt,f;u;)f=u._next,u.p===s&&u.modifier(t,i,a),u=f},lT=function(t){for(var i=this._pt,a,s;i;)s=i._next,i.p===t&&!i.op||i.op===t?mh(this,i,"_pt"):i.dep||(a=1),i=s;return!a},uT=function(t,i,a,s){s.mSet(t,i,s.m.call(s.tween,a,s.mt),s)},YM=function(t){for(var i=t._pt,a,s,u,f;i;){for(a=i._next,s=u;s&&s.pr>i.pr;)s=s._next;(i._prev=s?s._prev:f)?i._prev._next=i:u=i,(i._next=s)?s._prev=i:f=i,i=a}t._pt=u},di=(function(){function l(i,a,s,u,f,h,p,m,_){this.t=a,this.s=u,this.c=f,this.p=s,this.r=h||XM,this.d=p||this,this.set=m||n_,this.pr=_||0,this._next=i,i&&(i._prev=this)}var t=l.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=uT,this.m=a,this.mt=u,this.tween=s},l})();hi(Qm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(l){return Km[l]=1});Li.TweenMax=Li.TweenLite=bn;Li.TimelineLite=Li.TimelineMax=ii;on=new ii({sortChildren:!1,defaults:fl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Di.stringFilter=OM;var Ws=[],$f={},cT=[],qS=0,fT=0,r0=function(t){return($f[t]||cT).map(function(i){return i()})},Q0=function(){var t=Date.now(),i=[];t-qS>2&&(r0("matchMediaInit"),Ws.forEach(function(a){var s=a.queries,u=a.conditions,f,h,p,m;for(h in s)f=ya.matchMedia(s[h]).matches,f&&(p=1),f!==u[h]&&(u[h]=f,m=1);m&&(a.revert(),p&&i.push(a))}),r0("matchMediaRevert"),i.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),qS=t,r0("matchMedia"))},qM=(function(){function l(i,a){this.selector=a&&j0(a),this.data=[],this._r=[],this.isReverted=!1,this.id=fT++,i&&this.add(i)}var t=l.prototype;return t.add=function(a,s,u){fn(a)&&(u=s,s=a,a=fn);var f=this,h=function(){var m=rn,_=f.selector,x;return m&&m!==f&&m.data.push(f),u&&(f.selector=j0(u)),rn=f,x=s.apply(f,arguments),fn(x)&&f._r.push(x),rn=m,f.selector=_,f.isReverted=!1,x};return f.last=h,a===fn?h(f,function(p){return f.add(null,p)}):a?f[a]=h:h},t.ignore=function(a){var s=rn;rn=null,a(this),rn=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof l?a.push.apply(a,s.getTweens()):s instanceof bn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?(function(){for(var h=u.getTweens(),p=u.data.length,m;p--;)m=u.data[p],m.data==="isFlip"&&(m.revert(),m.getChildren(!0,!0,!1).forEach(function(_){return h.splice(h.indexOf(_),1)}));for(h.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,x){return x.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=u.data.length;p--;)m=u.data[p],m instanceof ii?m.data!=="nested"&&(m.scrollTrigger&&m.scrollTrigger.revert(),m.kill()):!(m instanceof bn)&&m.revert&&m.revert(a);u._r.forEach(function(_){return _(a,u)}),u.isReverted=!0})():this.data.forEach(function(h){return h.kill&&h.kill()}),this.clear(),s)for(var f=Ws.length;f--;)Ws[f].id===this.id&&Ws.splice(f,1)},t.revert=function(a){this.kill(a||{})},l})(),hT=(function(){function l(i){this.contexts=[],this.scope=i,rn&&rn.data.push(this)}var t=l.prototype;return t.add=function(a,s,u){Ca(a)||(a={matches:a});var f=new qM(0,u||this.scope),h=f.conditions={},p,m,_;rn&&!f.selector&&(f.selector=rn.selector),this.contexts.push(f),s=f.add("onMatch",s),f.queries=a;for(m in a)m==="all"?_=1:(p=ya.matchMedia(a[m]),p&&(Ws.indexOf(f)<0&&Ws.push(f),(h[m]=p.matches)&&(_=1),p.addListener?p.addListener(Q0):p.addEventListener("change",Q0)));return _&&s(f,function(x){return f.add(null,x)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},l})(),ch={registerPlugin:function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];i.forEach(function(s){return UM(s)})},timeline:function(t){return new ii(t)},getTweensOf:function(t,i){return on.getTweensOf(t,i)},getProperty:function(t,i,a,s){On(t)&&(t=Zi(t)[0]);var u=ks(t||{}).get,f=a?gM:xM;return a==="native"&&(a=""),t&&(i?f((Ai[i]&&Ai[i].get||u)(t,i,a,s)):function(h,p,m){return f((Ai[h]&&Ai[h].get||u)(t,h,p,m))})},quickSetter:function(t,i,a){if(t=Zi(t),t.length>1){var s=t.map(function(_){return mi.quickSetter(_,i,a)}),u=s.length;return function(_){for(var x=u;x--;)s[x](_)}}t=t[0]||{};var f=Ai[i],h=ks(t),p=h.harness&&(h.harness.aliases||{})[i]||i,m=f?function(_){var x=new f;al._pt=0,x.init(t,a?_+a:_,al,0,[t]),x.render(1,x),al._pt&&a_(1,al)}:h.set(t,p);return f?m:function(_){return m(t,p,a?_+a:_,h,1)}},quickTo:function(t,i,a){var s,u=mi.to(t,Oi((s={},s[i]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),f=function(p,m,_){return u.resetTo(i,p,m,_)};return f.tween=u,f},isTweening:function(t){return on.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=qs(t.ease,fl.ease)),VS(fl,t||{})},config:function(t){return VS(Di,t||{})},registerEffect:function(t){var i=t.name,a=t.effect,s=t.plugins,u=t.defaults,f=t.extendTimeline;(s||"").split(",").forEach(function(h){return h&&!Ai[h]&&!Li[h]&&Lu(i+" effect requires "+h+" plugin.")}),e0[i]=function(h,p,m){return a(Zi(h),Oi(p||{},u),m)},f&&(ii.prototype[i]=function(h,p,m){return this.add(e0[i](h,Ca(p)?p:(m=p)&&{},this),m)})},registerEase:function(t,i){Ce[t]=qs(i)},parseEase:function(t,i){return arguments.length?qs(t,i):Ce},getById:function(t){return on.getById(t)},exportRoot:function(t,i){t===void 0&&(t={});var a=new ii(t),s,u;for(a.smoothChildTiming=fi(t.smoothChildTiming),on.remove(a),a._dp=0,a._time=a._tTime=on._time,s=on._first;s;)u=s._next,(i||!(!s._dur&&s instanceof bn&&s.vars.onComplete===s._targets[0]))&&ba(a,s,s._start-s._delay),s=u;return ba(on,a,0),a},context:function(t,i){return t?new qM(t,i):rn},matchMedia:function(t){return new hT(t)},matchMediaRefresh:function(){return Ws.forEach(function(t){var i=t.conditions,a,s;for(s in i)i[s]&&(i[s]=!1,a=1);a&&t.revert()})||Q0()},addEventListener:function(t,i){var a=$f[t]||($f[t]=[]);~a.indexOf(i)||a.push(i)},removeEventListener:function(t,i){var a=$f[t],s=a&&a.indexOf(i);s>=0&&a.splice(s,1)},utils:{wrap:k3,wrapYoyo:Y3,distribute:TM,random:RM,snap:AM,normalize:X3,getUnit:Wn,clamp:B3,splitColor:NM,toArray:Zi,selector:j0,mapRange:wM,pipe:V3,unitize:G3,interpolate:q3,shuffle:EM},install:hM,effects:e0,ticker:Ci,updateRoot:ii.updateRoot,plugins:Ai,globalTimeline:on,core:{PropTween:di,globals:dM,Tween:bn,Timeline:ii,Animation:Iu,getCache:ks,_removeLinkedListItem:mh,reverting:function(){return Gn},context:function(t){return t&&rn&&(rn.data.push(t),t._ctx=rn),rn},suppressOverwrites:function(t){return Ym=t}}};hi("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return ch[l]=bn[l]});Ci.add(ii.updateRoot);al=ch.to({},{duration:0});var dT=function(t,i){for(var a=t._pt;a&&a.p!==i&&a.op!==i&&a.fp!==i;)a=a._next;return a},pT=function(t,i){var a=t._targets,s,u,f;for(s in i)for(u=a.length;u--;)f=t._ptLookup[u][s],f&&(f=f.d)&&(f._pt&&(f=dT(f,s)),f&&f.modifier&&f.modifier(i[s],t,a[u],s))},s0=function(t,i){return{name:t,headless:1,rawVars:1,init:function(s,u,f){f._onInit=function(h){var p,m;if(On(u)&&(p={},hi(u,function(_){return p[_]=1}),u=p),i){p={};for(m in u)p[m]=i(u[m]);u=p}pT(h,u)}}}},mi=ch.registerPlugin({name:"attr",init:function(t,i,a,s,u){var f,h,p;this.tween=a;for(f in i)p=t.getAttribute(f)||"",h=this.add(t,"setAttribute",(p||0)+"",i[f],s,u,0,0,f),h.op=f,h.b=p,this._props.push(f)},render:function(t,i){for(var a=i._pt;a;)Gn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,i){for(var a=i.length;a--;)this.add(t,a,t[a]||0,i[a],0,0,0,0,0,1)}},s0("roundProps",Z0),s0("modifiers"),s0("snap",AM))||ch;bn.version=ii.version=mi.version="3.13.0";fM=1;Wm()&&ml();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var WS,Zr,sl,r_,Vs,jS,s_,mT=function(){return typeof window<"u"},sr={},Is=180/Math.PI,ol=Math.PI/180,Bo=Math.atan2,ZS=1e8,o_=/([A-Z])/g,_T=/(left|right|width|margin|padding|x)/i,xT=/[\s,\(]\S/,Ea={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},J0=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},gT=function(t,i){return i.set(i.t,i.p,t===1?i.e:Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},vT=function(t,i){return i.set(i.t,i.p,t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},ST=function(t,i){var a=i.s+i.c*t;i.set(i.t,i.p,~~(a+(a<0?-.5:.5))+i.u,i)},WM=function(t,i){return i.set(i.t,i.p,t?i.e:i.b,i)},jM=function(t,i){return i.set(i.t,i.p,t!==1?i.b:i.e,i)},yT=function(t,i,a){return t.style[i]=a},MT=function(t,i,a){return t.style.setProperty(i,a)},bT=function(t,i,a){return t._gsap[i]=a},ET=function(t,i,a){return t._gsap.scaleX=t._gsap.scaleY=a},TT=function(t,i,a,s,u){var f=t._gsap;f.scaleX=f.scaleY=a,f.renderTransform(u,f)},AT=function(t,i,a,s,u){var f=t._gsap;f[i]=a,f.renderTransform(u,f)},ln="transform",pi=ln+"Origin",RT=function l(t,i){var a=this,s=this.target,u=s.style,f=s._gsap;if(t in sr&&u){if(this.tfm=this.tfm||{},t!=="transform")t=Ea[t]||t,~t.indexOf(",")?t.split(",").forEach(function(h){return a.tfm[h]=$a(s,h)}):this.tfm[t]=f.x?f[t]:$a(s,t),t===pi&&(this.tfm.zOrigin=f.zOrigin);else return Ea.transform.split(",").forEach(function(h){return l.call(a,h,i)});if(this.props.indexOf(ln)>=0)return;f.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(pi,i,"")),t=ln}(u||i)&&this.props.push(t,i,u[t])},ZM=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},CT=function(){var t=this.props,i=this.target,a=i.style,s=i._gsap,u,f;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?i[t[u]](t[u+2]):i[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(o_,"-$1").toLowerCase());if(this.tfm){for(f in this.tfm)s[f]=this.tfm[f];s.svg&&(s.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),u=s_(),(!u||!u.isStart)&&!a[ln]&&(ZM(a),s.zOrigin&&a[pi]&&(a[pi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},KM=function(t,i){var a={target:t,props:[],revert:CT,save:RT};return t._gsap||mi.core.getCache(t),i&&t.style&&t.nodeType&&i.split(",").forEach(function(s){return a.save(s)}),a},QM,$0=function(t,i){var a=Zr.createElementNS?Zr.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zr.createElement(t);return a&&a.style?a:Zr.createElement(t)},Ki=function l(t,i,a){var s=getComputedStyle(t);return s[i]||s.getPropertyValue(i.replace(o_,"-$1").toLowerCase())||s.getPropertyValue(i)||!a&&l(t,_l(i)||i,1)||""},KS="O,Moz,ms,Ms,Webkit".split(","),_l=function(t,i,a){var s=i||Vs,u=s.style,f=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);f--&&!(KS[f]+t in u););return f<0?null:(f===3?"ms":f>=0?KS[f]:"")+t},tm=function(){mT()&&window.document&&(WS=window,Zr=WS.document,sl=Zr.documentElement,Vs=$0("div")||{style:{}},$0("div"),ln=_l(ln),pi=ln+"Origin",Vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",QM=!!_l("perspective"),s_=mi.core.reverting,r_=1)},QS=function(t){var i=t.ownerSVGElement,a=$0("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),sl.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),sl.removeChild(a),u},JS=function(t,i){for(var a=i.length;a--;)if(t.hasAttribute(i[a]))return t.getAttribute(i[a])},JM=function(t){var i,a;try{i=t.getBBox()}catch{i=QS(t),a=1}return i&&(i.width||i.height)||a||(i=QS(t)),i&&!i.width&&!i.x&&!i.y?{x:+JS(t,["x","cx","x1"])||0,y:+JS(t,["y","cy","y1"])||0,width:0,height:0}:i},$M=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&JM(t))},js=function(t,i){if(i){var a=t.style,s;i in sr&&i!==pi&&(i=ln),a.removeProperty?(s=i.substr(0,2),(s==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),a.removeProperty(s==="--"?i:i.replace(o_,"-$1").toLowerCase())):a.removeAttribute(i)}},Kr=function(t,i,a,s,u,f){var h=new di(t._pt,i,a,0,1,f?jM:WM);return t._pt=h,h.b=s,h.e=u,t._props.push(a),h},$S={deg:1,rad:1,turn:1},wT={grid:1,flex:1},ns=function l(t,i,a,s){var u=parseFloat(a)||0,f=(a+"").trim().substr((u+"").length)||"px",h=Vs.style,p=_T.test(i),m=t.tagName.toLowerCase()==="svg",_=(m?"client":"offset")+(p?"Width":"Height"),x=100,g=s==="px",y=s==="%",E,b,M,v;if(s===f||!u||$S[s]||$S[f])return u;if(f!=="px"&&!g&&(u=l(t,i,a,"px")),v=t.getCTM&&$M(t),(y||f==="%")&&(sr[i]||~i.indexOf("adius")))return E=v?t.getBBox()[p?"width":"height"]:t[_],pn(y?u/E*x:u/100*E);if(h[p?"width":"height"]=x+(g?f:s),b=s!=="rem"&&~i.indexOf("adius")||s==="em"&&t.appendChild&&!m?t:t.parentNode,v&&(b=(t.ownerSVGElement||{}).parentNode),(!b||b===Zr||!b.appendChild)&&(b=Zr.body),M=b._gsap,M&&y&&M.width&&p&&M.time===Ci.time&&!M.uncache)return pn(u/M.width*x);if(y&&(i==="height"||i==="width")){var w=t.style[i];t.style[i]=x+s,E=t[_],w?t.style[i]=w:js(t,i)}else(y||f==="%")&&!wT[Ki(b,"display")]&&(h.position=Ki(t,"position")),b===t&&(h.position="static"),b.appendChild(Vs),E=Vs[_],b.removeChild(Vs),h.position="absolute";return p&&y&&(M=ks(b),M.time=Ci.time,M.width=b[_]),pn(g?E*u/x:E&&u?x/E*u:0)},$a=function(t,i,a,s){var u;return r_||tm(),i in Ea&&i!=="transform"&&(i=Ea[i],~i.indexOf(",")&&(i=i.split(",")[0])),sr[i]&&i!=="transform"?(u=Bu(t,s),u=i!=="transformOrigin"?u[i]:u.svg?u.origin:hh(Ki(t,pi))+" "+u.zOrigin+"px"):(u=t.style[i],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=fh[i]&&fh[i](t,i,a)||Ki(t,i)||mM(t,i)||(i==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?ns(t,i,u,a)+a:u},DT=function(t,i,a,s){if(!a||a==="none"){var u=_l(i,t,1),f=u&&Ki(t,u,1);f&&f!==a?(i=u,a=f):i==="borderColor"&&(a=Ki(t,"borderTopColor"))}var h=new di(this._pt,t.style,i,0,1,kM),p=0,m=0,_,x,g,y,E,b,M,v,w,D,L,P;if(h.b=a,h.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Ki(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(b=t.style[i],t.style[i]=s,s=Ki(t,i)||s,b?t.style[i]=b:js(t,i)),_=[a,s],OM(_),a=_[0],s=_[1],g=a.match(il)||[],P=s.match(il)||[],P.length){for(;x=il.exec(s);)M=x[0],w=s.substring(p,x.index),E?E=(E+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(E=1),M!==(b=g[m++]||"")&&(y=parseFloat(b)||0,L=b.substr((y+"").length),M.charAt(1)==="="&&(M=rl(y,M)+L),v=parseFloat(M),D=M.substr((v+"").length),p=il.lastIndex-D.length,D||(D=D||Di.units[i]||L,p===s.length&&(s+=D,h.e+=D)),L!==D&&(y=ns(t,i,b,D)||0),h._pt={_next:h._pt,p:w||m===1?w:",",s:y,c:v-y,m:E&&E<4||i==="zIndex"?Math.round:0});h.c=p<s.length?s.substring(p,s.length):""}else h.r=i==="display"&&s==="none"?jM:WM;return uM.test(s)&&(h.e=0),this._pt=h,h},ty={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UT=function(t){var i=t.split(" "),a=i[0],s=i[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),i[0]=ty[a]||a,i[1]=ty[s]||s,i.join(" ")},NT=function(t,i){if(i.tween&&i.tween._time===i.tween._dur){var a=i.t,s=a.style,u=i.u,f=a._gsap,h,p,m;if(u==="all"||u===!0)s.cssText="",p=1;else for(u=u.split(","),m=u.length;--m>-1;)h=u[m],sr[h]&&(p=1,h=h==="transformOrigin"?pi:ln),js(a,h);p&&(js(a,ln),f&&(f.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Bu(a,1),f.uncache=1,ZM(s)))}},fh={clearProps:function(t,i,a,s,u){if(u.data!=="isFromStart"){var f=t._pt=new di(t._pt,i,a,0,0,NT);return f.u=s,f.pr=-10,f.tween=u,t._props.push(a),1}}},Fu=[1,0,0,1,0,0],t1={},e1=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ey=function(t){var i=Ki(t,ln);return e1(i)?Fu:i.substr(7).match(lM).map(pn)},l_=function(t,i){var a=t._gsap||ks(t),s=t.style,u=ey(t),f,h,p,m;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,u=[p.a,p.b,p.c,p.d,p.e,p.f],u.join(",")==="1,0,0,1,0,0"?Fu:u):(u===Fu&&!t.offsetParent&&t!==sl&&!a.svg&&(p=s.display,s.display="block",f=t.parentNode,(!f||!t.offsetParent&&!t.getBoundingClientRect().width)&&(m=1,h=t.nextElementSibling,sl.appendChild(t)),u=ey(t),p?s.display=p:js(t,"display"),m&&(h?f.insertBefore(t,h):f?f.appendChild(t):sl.removeChild(t))),i&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},em=function(t,i,a,s,u,f){var h=t._gsap,p=u||l_(t,!0),m=h.xOrigin||0,_=h.yOrigin||0,x=h.xOffset||0,g=h.yOffset||0,y=p[0],E=p[1],b=p[2],M=p[3],v=p[4],w=p[5],D=i.split(" "),L=parseFloat(D[0])||0,P=parseFloat(D[1])||0,N,O,F,R;a?p!==Fu&&(O=y*M-E*b)&&(F=L*(M/O)+P*(-b/O)+(b*w-M*v)/O,R=L*(-E/O)+P*(y/O)-(y*w-E*v)/O,L=F,P=R):(N=JM(t),L=N.x+(~D[0].indexOf("%")?L/100*N.width:L),P=N.y+(~(D[1]||D[0]).indexOf("%")?P/100*N.height:P)),s||s!==!1&&h.smooth?(v=L-m,w=P-_,h.xOffset=x+(v*y+w*b)-v,h.yOffset=g+(v*E+w*M)-w):h.xOffset=h.yOffset=0,h.xOrigin=L,h.yOrigin=P,h.smooth=!!s,h.origin=i,h.originIsAbsolute=!!a,t.style[pi]="0px 0px",f&&(Kr(f,h,"xOrigin",m,L),Kr(f,h,"yOrigin",_,P),Kr(f,h,"xOffset",x,h.xOffset),Kr(f,h,"yOffset",g,h.yOffset)),t.setAttribute("data-svg-origin",L+" "+P)},Bu=function(t,i){var a=t._gsap||new FM(t);if("x"in a&&!i&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,f="px",h="deg",p=getComputedStyle(t),m=Ki(t,pi)||"0",_,x,g,y,E,b,M,v,w,D,L,P,N,O,F,R,C,H,K,it,ht,st,k,et,j,xt,_t,Bt,te,xe,B,ct;return _=x=g=b=M=v=w=D=L=0,y=E=1,a.svg=!!(t.getCTM&&$M(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[ln]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[ln]!=="none"?p[ln]:"")),s.scale=s.rotate=s.translate="none"),O=l_(t,a.svg),a.svg&&(a.uncache?(j=t.getBBox(),m=a.xOrigin-j.x+"px "+(a.yOrigin-j.y)+"px",et=""):et=!i&&t.getAttribute("data-svg-origin"),em(t,et||m,!!et||a.originIsAbsolute,a.smooth!==!1,O)),P=a.xOrigin||0,N=a.yOrigin||0,O!==Fu&&(H=O[0],K=O[1],it=O[2],ht=O[3],_=st=O[4],x=k=O[5],O.length===6?(y=Math.sqrt(H*H+K*K),E=Math.sqrt(ht*ht+it*it),b=H||K?Bo(K,H)*Is:0,w=it||ht?Bo(it,ht)*Is+b:0,w&&(E*=Math.abs(Math.cos(w*ol))),a.svg&&(_-=P-(P*H+N*it),x-=N-(P*K+N*ht))):(ct=O[6],xe=O[7],_t=O[8],Bt=O[9],te=O[10],B=O[11],_=O[12],x=O[13],g=O[14],F=Bo(ct,te),M=F*Is,F&&(R=Math.cos(-F),C=Math.sin(-F),et=st*R+_t*C,j=k*R+Bt*C,xt=ct*R+te*C,_t=st*-C+_t*R,Bt=k*-C+Bt*R,te=ct*-C+te*R,B=xe*-C+B*R,st=et,k=j,ct=xt),F=Bo(-it,te),v=F*Is,F&&(R=Math.cos(-F),C=Math.sin(-F),et=H*R-_t*C,j=K*R-Bt*C,xt=it*R-te*C,B=ht*C+B*R,H=et,K=j,it=xt),F=Bo(K,H),b=F*Is,F&&(R=Math.cos(F),C=Math.sin(F),et=H*R+K*C,j=st*R+k*C,K=K*R-H*C,k=k*R-st*C,H=et,st=j),M&&Math.abs(M)+Math.abs(b)>359.9&&(M=b=0,v=180-v),y=pn(Math.sqrt(H*H+K*K+it*it)),E=pn(Math.sqrt(k*k+ct*ct)),F=Bo(st,k),w=Math.abs(F)>2e-4?F*Is:0,L=B?1/(B<0?-B:B):0),a.svg&&(et=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!e1(Ki(t,ln)),et&&t.setAttribute("transform",et))),Math.abs(w)>90&&Math.abs(w)<270&&(u?(y*=-1,w+=b<=0?180:-180,b+=b<=0?180:-180):(E*=-1,w+=w<=0?180:-180)),i=i||a.uncache,a.x=_-((a.xPercent=_&&(!i&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+f,a.y=x-((a.yPercent=x&&(!i&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-x)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+f,a.z=g+f,a.scaleX=pn(y),a.scaleY=pn(E),a.rotation=pn(b)+h,a.rotationX=pn(M)+h,a.rotationY=pn(v)+h,a.skewX=w+h,a.skewY=D+h,a.transformPerspective=L+f,(a.zOrigin=parseFloat(m.split(" ")[2])||!i&&a.zOrigin||0)&&(s[pi]=hh(m)),a.xOffset=a.yOffset=0,a.force3D=Di.force3D,a.renderTransform=a.svg?OT:QM?n1:LT,a.uncache=0,a},hh=function(t){return(t=t.split(" "))[0]+" "+t[1]},o0=function(t,i,a){var s=Wn(i);return pn(parseFloat(i)+parseFloat(ns(t,"x",a+"px",s)))+s},LT=function(t,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,n1(t,i)},ws="0deg",vu="0px",Ds=") ",n1=function(t,i){var a=i||this,s=a.xPercent,u=a.yPercent,f=a.x,h=a.y,p=a.z,m=a.rotation,_=a.rotationY,x=a.rotationX,g=a.skewX,y=a.skewY,E=a.scaleX,b=a.scaleY,M=a.transformPerspective,v=a.force3D,w=a.target,D=a.zOrigin,L="",P=v==="auto"&&t&&t!==1||v===!0;if(D&&(x!==ws||_!==ws)){var N=parseFloat(_)*ol,O=Math.sin(N),F=Math.cos(N),R;N=parseFloat(x)*ol,R=Math.cos(N),f=o0(w,f,O*R*-D),h=o0(w,h,-Math.sin(N)*-D),p=o0(w,p,F*R*-D+D)}M!==vu&&(L+="perspective("+M+Ds),(s||u)&&(L+="translate("+s+"%, "+u+"%) "),(P||f!==vu||h!==vu||p!==vu)&&(L+=p!==vu||P?"translate3d("+f+", "+h+", "+p+") ":"translate("+f+", "+h+Ds),m!==ws&&(L+="rotate("+m+Ds),_!==ws&&(L+="rotateY("+_+Ds),x!==ws&&(L+="rotateX("+x+Ds),(g!==ws||y!==ws)&&(L+="skew("+g+", "+y+Ds),(E!==1||b!==1)&&(L+="scale("+E+", "+b+Ds),w.style[ln]=L||"translate(0, 0)"},OT=function(t,i){var a=i||this,s=a.xPercent,u=a.yPercent,f=a.x,h=a.y,p=a.rotation,m=a.skewX,_=a.skewY,x=a.scaleX,g=a.scaleY,y=a.target,E=a.xOrigin,b=a.yOrigin,M=a.xOffset,v=a.yOffset,w=a.forceCSS,D=parseFloat(f),L=parseFloat(h),P,N,O,F,R;p=parseFloat(p),m=parseFloat(m),_=parseFloat(_),_&&(_=parseFloat(_),m+=_,p+=_),p||m?(p*=ol,m*=ol,P=Math.cos(p)*x,N=Math.sin(p)*x,O=Math.sin(p-m)*-g,F=Math.cos(p-m)*g,m&&(_*=ol,R=Math.tan(m-_),R=Math.sqrt(1+R*R),O*=R,F*=R,_&&(R=Math.tan(_),R=Math.sqrt(1+R*R),P*=R,N*=R)),P=pn(P),N=pn(N),O=pn(O),F=pn(F)):(P=x,F=g,N=O=0),(D&&!~(f+"").indexOf("px")||L&&!~(h+"").indexOf("px"))&&(D=ns(y,"x",f,"px"),L=ns(y,"y",h,"px")),(E||b||M||v)&&(D=pn(D+E-(E*P+b*O)+M),L=pn(L+b-(E*N+b*F)+v)),(s||u)&&(R=y.getBBox(),D=pn(D+s/100*R.width),L=pn(L+u/100*R.height)),R="matrix("+P+","+N+","+O+","+F+","+D+","+L+")",y.setAttribute("transform",R),w&&(y.style[ln]=R)},PT=function(t,i,a,s,u){var f=360,h=On(u),p=parseFloat(u)*(h&&~u.indexOf("rad")?Is:1),m=p-s,_=s+m+"deg",x,g;return h&&(x=u.split("_")[1],x==="short"&&(m%=f,m!==m%(f/2)&&(m+=m<0?f:-f)),x==="cw"&&m<0?m=(m+f*ZS)%f-~~(m/f)*f:x==="ccw"&&m>0&&(m=(m-f*ZS)%f-~~(m/f)*f)),t._pt=g=new di(t._pt,i,a,s,m,gT),g.e=_,g.u="deg",t._props.push(a),g},ny=function(t,i){for(var a in i)t[a]=i[a];return t},zT=function(t,i,a){var s=ny({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",f=a.style,h,p,m,_,x,g,y,E;s.svg?(m=a.getAttribute("transform"),a.setAttribute("transform",""),f[ln]=i,h=Bu(a,1),js(a,ln),a.setAttribute("transform",m)):(m=getComputedStyle(a)[ln],f[ln]=i,h=Bu(a,1),f[ln]=m);for(p in sr)m=s[p],_=h[p],m!==_&&u.indexOf(p)<0&&(y=Wn(m),E=Wn(_),x=y!==E?ns(a,p,m,E):parseFloat(m),g=parseFloat(_),t._pt=new di(t._pt,h,p,x,g-x,J0),t._pt.u=E||0,t._props.push(p));ny(h,s)};hi("padding,margin,Width,Radius",function(l,t){var i="Top",a="Right",s="Bottom",u="Left",f=(t<3?[i,a,s,u]:[i+u,i+a,s+a,s+u]).map(function(h){return t<2?l+h:"border"+h+l});fh[t>1?"border"+l:l]=function(h,p,m,_,x){var g,y;if(arguments.length<4)return g=f.map(function(E){return $a(h,E,m)}),y=g.join(" "),y.split(g[0]).length===5?g[0]:y;g=(_+"").split(" "),y={},f.forEach(function(E,b){return y[E]=g[b]=g[b]||g[(b-1)/2|0]}),h.init(p,y,x)}});var i1={name:"css",register:tm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,i,a,s,u){var f=this._props,h=t.style,p=a.vars.startAt,m,_,x,g,y,E,b,M,v,w,D,L,P,N,O,F;r_||tm(),this.styles=this.styles||KM(t),F=this.styles.props,this.tween=a;for(b in i)if(b!=="autoRound"&&(_=i[b],!(Ai[b]&&BM(b,i,a,s,t,u)))){if(y=typeof _,E=fh[b],y==="function"&&(_=_.call(a,s,t,u),y=typeof _),y==="string"&&~_.indexOf("random(")&&(_=Pu(_)),E)E(this,t,b,_,a)&&(O=1);else if(b.substr(0,2)==="--")m=(getComputedStyle(t).getPropertyValue(b)+"").trim(),_+="",$r.lastIndex=0,$r.test(m)||(M=Wn(m),v=Wn(_)),v?M!==v&&(m=ns(t,b,m,v)+v):M&&(_+=M),this.add(h,"setProperty",m,_,s,u,0,0,b),f.push(b),F.push(b,0,h[b]);else if(y!=="undefined"){if(p&&b in p?(m=typeof p[b]=="function"?p[b].call(a,s,t,u):p[b],On(m)&&~m.indexOf("random(")&&(m=Pu(m)),Wn(m+"")||m==="auto"||(m+=Di.units[b]||Wn($a(t,b))||""),(m+"").charAt(1)==="="&&(m=$a(t,b))):m=$a(t,b),g=parseFloat(m),w=y==="string"&&_.charAt(1)==="="&&_.substr(0,2),w&&(_=_.substr(2)),x=parseFloat(_),b in Ea&&(b==="autoAlpha"&&(g===1&&$a(t,"visibility")==="hidden"&&x&&(g=0),F.push("visibility",0,h.visibility),Kr(this,h,"visibility",g?"inherit":"hidden",x?"inherit":"hidden",!x)),b!=="scale"&&b!=="transform"&&(b=Ea[b],~b.indexOf(",")&&(b=b.split(",")[0]))),D=b in sr,D){if(this.styles.save(b),y==="string"&&_.substring(0,6)==="var(--"&&(_=Ki(t,_.substring(4,_.indexOf(")"))),x=parseFloat(_)),L||(P=t._gsap,P.renderTransform&&!i.parseTransform||Bu(t,i.parseTransform),N=i.smoothOrigin!==!1&&P.smooth,L=this._pt=new di(this._pt,h,ln,0,1,P.renderTransform,P,0,-1),L.dep=1),b==="scale")this._pt=new di(this._pt,P,"scaleY",P.scaleY,(w?rl(P.scaleY,w+x):x)-P.scaleY||0,J0),this._pt.u=0,f.push("scaleY",b),b+="X";else if(b==="transformOrigin"){F.push(pi,0,h[pi]),_=UT(_),P.svg?em(t,_,0,N,0,this):(v=parseFloat(_.split(" ")[2])||0,v!==P.zOrigin&&Kr(this,P,"zOrigin",P.zOrigin,v),Kr(this,h,b,hh(m),hh(_)));continue}else if(b==="svgOrigin"){em(t,_,1,N,0,this);continue}else if(b in t1){PT(this,P,b,g,w?rl(g,w+_):_);continue}else if(b==="smoothOrigin"){Kr(this,P,"smooth",P.smooth,_);continue}else if(b==="force3D"){P[b]=_;continue}else if(b==="transform"){zT(this,_,t);continue}}else b in h||(b=_l(b)||b);if(D||(x||x===0)&&(g||g===0)&&!xT.test(_)&&b in h)M=(m+"").substr((g+"").length),x||(x=0),v=Wn(_)||(b in Di.units?Di.units[b]:M),M!==v&&(g=ns(t,b,m,v)),this._pt=new di(this._pt,D?P:h,b,g,(w?rl(g,w+x):x)-g,!D&&(v==="px"||b==="zIndex")&&i.autoRound!==!1?ST:J0),this._pt.u=v||0,M!==v&&v!=="%"&&(this._pt.b=m,this._pt.r=vT);else if(b in h)DT.call(this,t,b,m,w?w+_:_);else if(b in t)this.add(t,b,m||t[b],w?w+_:_,s,u);else if(b!=="parseTransform"){Zm(b,_);continue}D||(b in h?F.push(b,0,h[b]):typeof t[b]=="function"?F.push(b,2,t[b]()):F.push(b,1,m||t[b])),f.push(b)}}O&&YM(this)},render:function(t,i){if(i.tween._time||!s_())for(var a=i._pt;a;)a.r(t,a.d),a=a._next;else i.styles.revert()},get:$a,aliases:Ea,getSetter:function(t,i,a){var s=Ea[i];return s&&s.indexOf(",")<0&&(i=s),i in sr&&i!==pi&&(t._gsap.x||$a(t,"x"))?a&&jS===a?i==="scale"?ET:bT:(jS=a||{})&&(i==="scale"?TT:AT):t.style&&!qm(t.style[i])?yT:~i.indexOf("-")?MT:i_(t,i)},core:{_removeProperty:js,_getMatrix:l_}};mi.utils.checkPrefix=_l;mi.core.getStyleSaver=KM;(function(l,t,i,a){var s=hi(l+","+t+","+i,function(u){sr[u]=1});hi(t,function(u){Di.units[u]="deg",t1[u]=1}),Ea[s[13]]=l+","+t,hi(a,function(u){var f=u.split(":");Ea[f[1]]=s[f[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){Di.units[l]="px"});mi.registerPlugin(i1);var a1=mi.registerPlugin(i1)||mi;a1.core.Tween;function IT({hidden:l}){return Xe.jsxs("div",{className:`loader${l?" loader-hidden":""}`,id:"loader",children:[Xe.jsx("div",{children:Xe.jsx("img",{src:"/images/gato.webp",alt:"Welcome!!",className:"cat"})}),Xe.jsx("div",{children:Xe.jsx("a",{children:" Welcome"})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const u_="181",ll={ROTATE:0,DOLLY:1,PAN:2},FT=0,iy=1,BT=2,r1=1,HT=2,Qa=3,is=0,ai=1,tr=2,ir=0,ul=1,ay=2,ry=3,sy=4,VT=5,Bs=100,GT=101,XT=102,kT=103,YT=104,qT=200,WT=201,jT=202,ZT=203,nm=204,im=205,KT=206,QT=207,JT=208,$T=209,tA=210,eA=211,nA=212,iA=213,aA=214,am=0,rm=1,sm=2,xl=3,om=4,lm=5,um=6,cm=7,s1=0,rA=1,sA=2,ts=0,oA=1,lA=2,uA=3,cA=4,fA=5,hA=6,dA=7,o1=300,gl=301,vl=302,fm=303,hm=304,gh=306,dm=1e3,er=1001,pm=1002,Ui=1003,pA=1004,Ef=1005,Qi=1006,l0=1007,Gs=1008,or=1009,l1=1010,u1=1011,Hu=1012,c_=1013,Zs=1014,nr=1015,Ml=1016,f_=1017,h_=1018,Vu=1020,c1=35902,f1=35899,h1=1021,d1=1022,la=1023,Gu=1026,Xu=1027,p1=1028,d_=1029,p_=1030,m_=1031,__=1033,th=33776,eh=33777,nh=33778,ih=33779,mm=35840,_m=35841,xm=35842,gm=35843,vm=36196,Sm=37492,ym=37496,Mm=37808,bm=37809,Em=37810,Tm=37811,Am=37812,Rm=37813,Cm=37814,wm=37815,Dm=37816,Um=37817,Nm=37818,Lm=37819,Om=37820,Pm=37821,zm=36492,Im=36494,Fm=36495,Bm=36283,Hm=36284,Vm=36285,Gm=36286,mA=3200,_A=3201,xA=0,gA=1,Wr="",Ri="srgb",Sl="srgb-linear",dh="linear",qe="srgb",Ho=7680,oy=519,vA=512,SA=513,yA=514,m1=515,MA=516,bA=517,EA=518,TA=519,ly=35044,uy="300 es",Ta=2e3,ph=2001;function _1(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function ku(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function AA(){const l=ku("canvas");return l.style.display="block",l}const cy={};function fy(...l){const t="THREE."+l.shift();console.log(t,...l)}function fe(...l){const t="THREE."+l.shift();console.warn(t,...l)}function mn(...l){const t="THREE."+l.shift();console.error(t,...l)}function Yu(...l){const t=l.join(" ");t in cy||(cy[t]=!0,fe(...l))}function RA(l,t,i){return new Promise(function(a,s){function u(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:s();break;case l.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:a()}}setTimeout(u,i)})}class Js{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const u=s.indexOf(i);u!==-1&&s.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let u=0,f=s.length;u<f;u++)s[u].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hy=1234567;const Uu=Math.PI/180,qu=180/Math.PI;function bl(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Yn[l&255]+Yn[l>>8&255]+Yn[l>>16&255]+Yn[l>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[i&63|128]+Yn[i>>8&255]+"-"+Yn[i>>16&255]+Yn[i>>24&255]+Yn[a&255]+Yn[a>>8&255]+Yn[a>>16&255]+Yn[a>>24&255]).toLowerCase()}function Ae(l,t,i){return Math.max(t,Math.min(i,l))}function x_(l,t){return(l%t+t)%t}function CA(l,t,i,a,s){return a+(l-t)*(s-a)/(i-t)}function wA(l,t,i){return l!==t?(i-l)/(t-l):0}function Nu(l,t,i){return(1-i)*l+i*t}function DA(l,t,i,a){return Nu(l,t,1-Math.exp(-i*a))}function UA(l,t=1){return t-Math.abs(x_(l,t*2)-t)}function NA(l,t,i){return l<=t?0:l>=i?1:(l=(l-t)/(i-t),l*l*(3-2*l))}function LA(l,t,i){return l<=t?0:l>=i?1:(l=(l-t)/(i-t),l*l*l*(l*(l*6-15)+10))}function OA(l,t){return l+Math.floor(Math.random()*(t-l+1))}function PA(l,t){return l+Math.random()*(t-l)}function zA(l){return l*(.5-Math.random())}function IA(l){l!==void 0&&(hy=l);let t=hy+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function FA(l){return l*Uu}function BA(l){return l*qu}function HA(l){return(l&l-1)===0&&l!==0}function VA(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function GA(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function XA(l,t,i,a,s){const u=Math.cos,f=Math.sin,h=u(i/2),p=f(i/2),m=u((t+a)/2),_=f((t+a)/2),x=u((t-a)/2),g=f((t-a)/2),y=u((a-t)/2),E=f((a-t)/2);switch(s){case"XYX":l.set(h*_,p*x,p*g,h*m);break;case"YZY":l.set(p*g,h*_,p*x,h*m);break;case"ZXZ":l.set(p*x,p*g,h*_,h*m);break;case"XZX":l.set(h*_,p*E,p*y,h*m);break;case"YXY":l.set(p*y,h*_,p*E,h*m);break;case"ZYZ":l.set(p*E,p*y,h*_,h*m);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nl(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function ei(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}const dy={DEG2RAD:Uu,RAD2DEG:qu,generateUUID:bl,clamp:Ae,euclideanModulo:x_,mapLinear:CA,inverseLerp:wA,lerp:Nu,damp:DA,pingpong:UA,smoothstep:NA,smootherstep:LA,randInt:OA,randFloat:PA,randFloatSpread:zA,seededRandom:IA,degToRad:FA,radToDeg:BA,isPowerOfTwo:HA,ceilPowerOfTwo:VA,floorPowerOfTwo:GA,setQuaternionFromProperEuler:XA,normalize:ei,denormalize:nl};class be{constructor(t=0,i=0){be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,s=t.elements;return this.x=s[0]*i+s[3]*a+s[6],this.y=s[1]*i+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ae(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(Ae(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),s=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*a-f*s+t.x,this.y=u*s+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class El{constructor(t=0,i=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=s}static slerpFlat(t,i,a,s,u,f,h){let p=a[s+0],m=a[s+1],_=a[s+2],x=a[s+3],g=u[f+0],y=u[f+1],E=u[f+2],b=u[f+3];if(h<=0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x;return}if(h>=1){t[i+0]=g,t[i+1]=y,t[i+2]=E,t[i+3]=b;return}if(x!==b||p!==g||m!==y||_!==E){let M=p*g+m*y+_*E+x*b;M<0&&(g=-g,y=-y,E=-E,b=-b,M=-M);let v=1-h;if(M<.9995){const w=Math.acos(M),D=Math.sin(w);v=Math.sin(v*w)/D,h=Math.sin(h*w)/D,p=p*v+g*h,m=m*v+y*h,_=_*v+E*h,x=x*v+b*h}else{p=p*v+g*h,m=m*v+y*h,_=_*v+E*h,x=x*v+b*h;const w=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=w,m*=w,_*=w,x*=w}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,a,s,u,f){const h=a[s],p=a[s+1],m=a[s+2],_=a[s+3],x=u[f],g=u[f+1],y=u[f+2],E=u[f+3];return t[i]=h*E+_*x+p*y-m*g,t[i+1]=p*E+_*g+m*x-h*y,t[i+2]=m*E+_*y+h*g-p*x,t[i+3]=_*E-h*x-p*g-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,s){return this._x=t,this._y=i,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,s=t._y,u=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(a/2),_=h(s/2),x=h(u/2),g=p(a/2),y=p(s/2),E=p(u/2);switch(f){case"XYZ":this._x=g*_*x+m*y*E,this._y=m*y*x-g*_*E,this._z=m*_*E+g*y*x,this._w=m*_*x-g*y*E;break;case"YXZ":this._x=g*_*x+m*y*E,this._y=m*y*x-g*_*E,this._z=m*_*E-g*y*x,this._w=m*_*x+g*y*E;break;case"ZXY":this._x=g*_*x-m*y*E,this._y=m*y*x+g*_*E,this._z=m*_*E+g*y*x,this._w=m*_*x-g*y*E;break;case"ZYX":this._x=g*_*x-m*y*E,this._y=m*y*x+g*_*E,this._z=m*_*E-g*y*x,this._w=m*_*x+g*y*E;break;case"YZX":this._x=g*_*x+m*y*E,this._y=m*y*x+g*_*E,this._z=m*_*E-g*y*x,this._w=m*_*x-g*y*E;break;case"XZY":this._x=g*_*x-m*y*E,this._y=m*y*x-g*_*E,this._z=m*_*E+g*y*x,this._w=m*_*x+g*y*E;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],s=i[4],u=i[8],f=i[1],h=i[5],p=i[9],m=i[2],_=i[6],x=i[10],g=a+h+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(f-s)*y}else if(a>h&&a>x){const y=2*Math.sqrt(1+a-h-x);this._w=(_-p)/y,this._x=.25*y,this._y=(s+f)/y,this._z=(u+m)/y}else if(h>x){const y=2*Math.sqrt(1+h-a-x);this._w=(u-m)/y,this._x=(s+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+x-a-h);this._w=(f-s)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,i/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,s=t._y,u=t._z,f=t._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=a*_+f*h+s*m-u*p,this._y=s*_+f*p+u*h-a*m,this._z=u*_+f*m+a*p-s*h,this._w=f*_-a*h-s*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let a=t._x,s=t._y,u=t._z,f=t._w,h=this.dot(t);h<0&&(a=-a,s=-s,u=-u,f=-f,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),_=Math.sin(m);p=Math.sin(p*m)/_,i=Math.sin(i*m)/_,this._x=this._x*p+a*i,this._y=this._y*p+s*i,this._z=this._z*p+u*i,this._w=this._w*p+f*i,this._onChangeCallback()}else this._x=this._x*p+a*i,this._y=this._y*p+s*i,this._z=this._z*p+u*i,this._w=this._w*p+f*i,this.normalize();return this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,i=0,a=0){lt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(py.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(py.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*i+u[3]*a+u[6]*s,this.y=u[1]*i+u[4]*a+u[7]*s,this.z=u[2]*i+u[5]*a+u[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,s=this.z,u=t.elements,f=1/(u[3]*i+u[7]*a+u[11]*s+u[15]);return this.x=(u[0]*i+u[4]*a+u[8]*s+u[12])*f,this.y=(u[1]*i+u[5]*a+u[9]*s+u[13])*f,this.z=(u[2]*i+u[6]*a+u[10]*s+u[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,s=this.z,u=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*s-h*a),_=2*(h*i-u*s),x=2*(u*a-f*i);return this.x=i+p*m+f*x-h*_,this.y=a+p*_+h*m-u*x,this.z=s+p*x+u*_-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*i+u[4]*a+u[8]*s,this.y=u[1]*i+u[5]*a+u[9]*s,this.z=u[2]*i+u[6]*a+u[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ae(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,s=t.y,u=t.z,f=i.x,h=i.y,p=i.z;return this.x=s*p-u*h,this.y=u*f-a*p,this.z=a*h-s*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return u0.copy(this).projectOnVector(t),this.sub(u0)}reflect(t){return this.sub(u0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(Ae(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return i*i+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const s=Math.sin(i)*t;return this.x=s*Math.sin(a),this.y=Math.cos(i)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=s,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const u0=new lt,py=new El;class pe{constructor(t,i,a,s,u,f,h,p,m){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,s,u,f,h,p,m)}set(t,i,a,s,u,f,h,p,m){const _=this.elements;return _[0]=t,_[1]=s,_[2]=h,_[3]=i,_[4]=u,_[5]=p,_[6]=a,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,s=i.elements,u=this.elements,f=a[0],h=a[3],p=a[6],m=a[1],_=a[4],x=a[7],g=a[2],y=a[5],E=a[8],b=s[0],M=s[3],v=s[6],w=s[1],D=s[4],L=s[7],P=s[2],N=s[5],O=s[8];return u[0]=f*b+h*w+p*P,u[3]=f*M+h*D+p*N,u[6]=f*v+h*L+p*O,u[1]=m*b+_*w+x*P,u[4]=m*M+_*D+x*N,u[7]=m*v+_*L+x*O,u[2]=g*b+y*w+E*P,u[5]=g*M+y*D+E*N,u[8]=g*v+y*L+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],s=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],_=t[8];return i*f*_-i*h*m-a*u*_+a*h*p+s*u*m-s*f*p}invert(){const t=this.elements,i=t[0],a=t[1],s=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],_=t[8],x=_*f-h*m,g=h*p-_*u,y=m*u-f*p,E=i*x+a*g+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=x*b,t[1]=(s*m-_*a)*b,t[2]=(h*a-s*f)*b,t[3]=g*b,t[4]=(_*i-s*p)*b,t[5]=(s*u-h*i)*b,t[6]=y*b,t[7]=(a*p-m*i)*b,t[8]=(f*i-a*u)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,s,u,f,h){const p=Math.cos(u),m=Math.sin(u);return this.set(a*p,a*m,-a*(p*f+m*h)+f+t,-s*m,s*p,-s*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(c0.makeScale(t,i)),this}rotate(t){return this.premultiply(c0.makeRotation(-t)),this}translate(t,i){return this.premultiply(c0.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let s=0;s<9;s++)if(i[s]!==a[s])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const c0=new pe,my=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_y=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kA(){const l={enabled:!0,workingColorSpace:Sl,spaces:{},convert:function(s,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===qe&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(s.applyMatrix3(this.spaces[u].toXYZ),s.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===qe&&(s.r=cl(s.r),s.g=cl(s.g),s.b=cl(s.b))),s},workingToColorSpace:function(s,u){return this.convert(s,this.workingColorSpace,u)},colorSpaceToWorking:function(s,u){return this.convert(s,u,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wr?dh:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,u=this.workingColorSpace){return s.fromArray(this.spaces[u].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,u,f){return s.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,u){return Yu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(s,u)},toWorkingColorSpace:function(s,u){return Yu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(s,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return l.define({[Sl]:{primaries:t,whitePoint:a,transfer:dh,toXYZ:my,fromXYZ:_y,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:t,whitePoint:a,transfer:qe,toXYZ:my,fromXYZ:_y,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),l}const Le=kA();function ar(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function cl(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let Vo;class YA{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Vo===void 0&&(Vo=ku("canvas")),Vo.width=t.width,Vo.height=t.height;const s=Vo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=Vo}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ku("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),u=s.data;for(let f=0;f<u.length;f++)u[f]=ar(u[f]/255)*255;return a.putImageData(s,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(ar(i[a]/255)*255):i[a]=ar(i[a]);return{data:i,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qA=0;class g_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qA++}),this.uuid=bl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let u;if(Array.isArray(s)){u=[];for(let f=0,h=s.length;f<h;f++)s[f].isDataTexture?u.push(f0(s[f].image)):u.push(f0(s[f]))}else u=f0(s);a.url=u}return i||(t.images[this.uuid]=a),a}}function f0(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?YA.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let WA=0;const h0=new lt;class Zn extends Js{constructor(t=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,a=er,s=er,u=Qi,f=Gs,h=la,p=or,m=Zn.DEFAULT_ANISOTROPY,_=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WA++}),this.uuid=bl(),this.name="",this.source=new g_(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(h0).x}get height(){return this.source.getSize(h0).y}get depth(){return this.source.getSize(h0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const a=t[i];if(a===void 0){fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){fe(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==o1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dm:t.x=t.x-Math.floor(t.x);break;case er:t.x=t.x<0?0:1;break;case pm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dm:t.y=t.y-Math.floor(t.y);break;case er:t.y=t.y<0?0:1;break;case pm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=o1;Zn.DEFAULT_ANISOTROPY=1;class _n{constructor(t=0,i=0,a=0,s=1){_n.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,s){return this.x=t,this.y=i,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,s=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*s+f[12]*u,this.y=f[1]*i+f[5]*a+f[9]*s+f[13]*u,this.z=f[2]*i+f[6]*a+f[10]*s+f[14]*u,this.w=f[3]*i+f[7]*a+f[11]*s+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,s,u;const p=t.elements,m=p[0],_=p[4],x=p[8],g=p[1],y=p[5],E=p[9],b=p[2],M=p[6],v=p[10];if(Math.abs(_-g)<.01&&Math.abs(x-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+b)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,L=(y+1)/2,P=(v+1)/2,N=(_+g)/4,O=(x+b)/4,F=(E+M)/4;return D>L&&D>P?D<.01?(a=0,s=.707106781,u=.707106781):(a=Math.sqrt(D),s=N/a,u=O/a):L>P?L<.01?(a=.707106781,s=0,u=.707106781):(s=Math.sqrt(L),a=N/s,u=F/s):P<.01?(a=.707106781,s=.707106781,u=0):(u=Math.sqrt(P),a=O/u,s=F/u),this.set(a,s,u,i),this}let w=Math.sqrt((M-E)*(M-E)+(x-b)*(x-b)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(x-b)/w,this.z=(g-_)/w,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ae(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jA extends Js{constructor(t=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=a.depth,this.scissor=new _n(0,0,t,i),this.scissorTest=!1,this.viewport=new _n(0,0,t,i);const s={width:t,height:i,depth:a.depth},u=new Zn(s);this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const i={minFilter:Qi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let s=0,u=this.textures.length;s<u;s++)this.textures[s].image.width=t,this.textures[s].image.height=i,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const s=Object.assign({},t.textures[i].image);this.textures[i].source=new g_(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends jA{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class x1 extends Zn{constructor(t=null,i=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:s},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZA extends Zn{constructor(t=null,i=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:s},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju{constructor(t=new lt(1/0,1/0,1/0),i=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(aa.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(aa.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=aa.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,aa):aa.fromBufferAttribute(u,f),aa.applyMatrix4(t.matrixWorld),this.expandByPoint(aa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tf.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Tf.copy(a.boundingBox)),Tf.applyMatrix4(t.matrixWorld),this.union(Tf)}const s=t.children;for(let u=0,f=s.length;u<f;u++)this.expandByObject(s[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,aa),aa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Su),Af.subVectors(this.max,Su),Go.subVectors(t.a,Su),Xo.subVectors(t.b,Su),ko.subVectors(t.c,Su),Hr.subVectors(Xo,Go),Vr.subVectors(ko,Xo),Us.subVectors(Go,ko);let i=[0,-Hr.z,Hr.y,0,-Vr.z,Vr.y,0,-Us.z,Us.y,Hr.z,0,-Hr.x,Vr.z,0,-Vr.x,Us.z,0,-Us.x,-Hr.y,Hr.x,0,-Vr.y,Vr.x,0,-Us.y,Us.x,0];return!d0(i,Go,Xo,ko,Af)||(i=[1,0,0,0,1,0,0,0,1],!d0(i,Go,Xo,ko,Af))?!1:(Rf.crossVectors(Hr,Vr),i=[Rf.x,Rf.y,Rf.z],d0(i,Go,Xo,ko,Af))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,aa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(aa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ya=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],aa=new lt,Tf=new ju,Go=new lt,Xo=new lt,ko=new lt,Hr=new lt,Vr=new lt,Us=new lt,Su=new lt,Af=new lt,Rf=new lt,Ns=new lt;function d0(l,t,i,a,s){for(let u=0,f=l.length-3;u<=f;u+=3){Ns.fromArray(l,u);const h=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),p=t.dot(Ns),m=i.dot(Ns),_=a.dot(Ns);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const KA=new ju,yu=new lt,p0=new lt;class v_{constructor(t=new lt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):KA.setFromPoints(t).getCenter(a);let s=0;for(let u=0,f=t.length;u<f;u++)s=Math.max(s,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yu.subVectors(t,this.center);const i=yu.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),s=(a-this.radius)*.5;this.center.addScaledVector(yu,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(p0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yu.copy(t.center).add(p0)),this.expandByPoint(yu.copy(t.center).sub(p0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const qa=new lt,m0=new lt,Cf=new lt,Gr=new lt,_0=new lt,wf=new lt,x0=new lt;class QA{constructor(t=new lt,i=new lt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=qa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(qa.copy(this.origin).addScaledVector(this.direction,i),qa.distanceToSquared(t))}distanceSqToSegment(t,i,a,s){m0.copy(t).add(i).multiplyScalar(.5),Cf.copy(i).sub(t).normalize(),Gr.copy(this.origin).sub(m0);const u=t.distanceTo(i)*.5,f=-this.direction.dot(Cf),h=Gr.dot(this.direction),p=-Gr.dot(Cf),m=Gr.lengthSq(),_=Math.abs(1-f*f);let x,g,y,E;if(_>0)if(x=f*p-h,g=f*h-p,E=u*_,x>=0)if(g>=-E)if(g<=E){const b=1/_;x*=b,g*=b,y=x*(x+f*g+2*h)+g*(f*x+g+2*p)+m}else g=u,x=Math.max(0,-(f*g+h)),y=-x*x+g*(g+2*p)+m;else g=-u,x=Math.max(0,-(f*g+h)),y=-x*x+g*(g+2*p)+m;else g<=-E?(x=Math.max(0,-(-f*u+h)),g=x>0?-u:Math.min(Math.max(-u,-p),u),y=-x*x+g*(g+2*p)+m):g<=E?(x=0,g=Math.min(Math.max(-u,-p),u),y=g*(g+2*p)+m):(x=Math.max(0,-(f*u+h)),g=x>0?u:Math.min(Math.max(-u,-p),u),y=-x*x+g*(g+2*p)+m);else g=f>0?-u:u,x=Math.max(0,-(f*g+h)),y=-x*x+g*(g+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(m0).addScaledVector(Cf,g),y}intersectSphere(t,i){qa.subVectors(t.center,this.origin);const a=qa.dot(this.direction),s=qa.dot(qa)-a*a,u=t.radius*t.radius;if(s>u)return null;const f=Math.sqrt(u-s),h=a-f,p=a+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,s,u,f,h,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return m>=0?(a=(t.min.x-g.x)*m,s=(t.max.x-g.x)*m):(a=(t.max.x-g.x)*m,s=(t.min.x-g.x)*m),_>=0?(u=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(u=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),a>f||u>s||((u>a||isNaN(a))&&(a=u),(f<s||isNaN(s))&&(s=f),x>=0?(h=(t.min.z-g.z)*x,p=(t.max.z-g.z)*x):(h=(t.max.z-g.z)*x,p=(t.min.z-g.z)*x),a>p||h>s)||((h>a||a!==a)&&(a=h),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,i)}intersectsBox(t){return this.intersectBox(t,qa)!==null}intersectTriangle(t,i,a,s,u){_0.subVectors(i,t),wf.subVectors(a,t),x0.crossVectors(_0,wf);let f=this.direction.dot(x0),h;if(f>0){if(s)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Gr.subVectors(this.origin,t);const p=h*this.direction.dot(wf.crossVectors(Gr,wf));if(p<0)return null;const m=h*this.direction.dot(_0.cross(Gr));if(m<0||p+m>f)return null;const _=-h*Gr.dot(x0);return _<0?null:this.at(_/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class An{constructor(t,i,a,s,u,f,h,p,m,_,x,g,y,E,b,M){An.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,s,u,f,h,p,m,_,x,g,y,E,b,M)}set(t,i,a,s,u,f,h,p,m,_,x,g,y,E,b,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=a,v[12]=s,v[1]=u,v[5]=f,v[9]=h,v[13]=p,v[2]=m,v[6]=_,v[10]=x,v[14]=g,v[3]=y,v[7]=E,v[11]=b,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new An().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,s=1/Yo.setFromMatrixColumn(t,0).length(),u=1/Yo.setFromMatrixColumn(t,1).length(),f=1/Yo.setFromMatrixColumn(t,2).length();return i[0]=a[0]*s,i[1]=a[1]*s,i[2]=a[2]*s,i[3]=0,i[4]=a[4]*u,i[5]=a[5]*u,i[6]=a[6]*u,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,s=t.y,u=t.z,f=Math.cos(a),h=Math.sin(a),p=Math.cos(s),m=Math.sin(s),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const g=f*_,y=f*x,E=h*_,b=h*x;i[0]=p*_,i[4]=-p*x,i[8]=m,i[1]=y+E*m,i[5]=g-b*m,i[9]=-h*p,i[2]=b-g*m,i[6]=E+y*m,i[10]=f*p}else if(t.order==="YXZ"){const g=p*_,y=p*x,E=m*_,b=m*x;i[0]=g+b*h,i[4]=E*h-y,i[8]=f*m,i[1]=f*x,i[5]=f*_,i[9]=-h,i[2]=y*h-E,i[6]=b+g*h,i[10]=f*p}else if(t.order==="ZXY"){const g=p*_,y=p*x,E=m*_,b=m*x;i[0]=g-b*h,i[4]=-f*x,i[8]=E+y*h,i[1]=y+E*h,i[5]=f*_,i[9]=b-g*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const g=f*_,y=f*x,E=h*_,b=h*x;i[0]=p*_,i[4]=E*m-y,i[8]=g*m+b,i[1]=p*x,i[5]=b*m+g,i[9]=y*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const g=f*p,y=f*m,E=h*p,b=h*m;i[0]=p*_,i[4]=b-g*x,i[8]=E*x+y,i[1]=x,i[5]=f*_,i[9]=-h*_,i[2]=-m*_,i[6]=y*x+E,i[10]=g-b*x}else if(t.order==="XZY"){const g=f*p,y=f*m,E=h*p,b=h*m;i[0]=p*_,i[4]=-x,i[8]=m*_,i[1]=g*x+b,i[5]=f*_,i[9]=y*x-E,i[2]=E*x-y,i[6]=h*_,i[10]=b*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(JA,t,$A)}lookAt(t,i,a){const s=this.elements;return Ei.subVectors(t,i),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Xr.crossVectors(a,Ei),Xr.lengthSq()===0&&(Math.abs(a.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Xr.crossVectors(a,Ei)),Xr.normalize(),Df.crossVectors(Ei,Xr),s[0]=Xr.x,s[4]=Df.x,s[8]=Ei.x,s[1]=Xr.y,s[5]=Df.y,s[9]=Ei.y,s[2]=Xr.z,s[6]=Df.z,s[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,s=i.elements,u=this.elements,f=a[0],h=a[4],p=a[8],m=a[12],_=a[1],x=a[5],g=a[9],y=a[13],E=a[2],b=a[6],M=a[10],v=a[14],w=a[3],D=a[7],L=a[11],P=a[15],N=s[0],O=s[4],F=s[8],R=s[12],C=s[1],H=s[5],K=s[9],it=s[13],ht=s[2],st=s[6],k=s[10],et=s[14],j=s[3],xt=s[7],_t=s[11],Bt=s[15];return u[0]=f*N+h*C+p*ht+m*j,u[4]=f*O+h*H+p*st+m*xt,u[8]=f*F+h*K+p*k+m*_t,u[12]=f*R+h*it+p*et+m*Bt,u[1]=_*N+x*C+g*ht+y*j,u[5]=_*O+x*H+g*st+y*xt,u[9]=_*F+x*K+g*k+y*_t,u[13]=_*R+x*it+g*et+y*Bt,u[2]=E*N+b*C+M*ht+v*j,u[6]=E*O+b*H+M*st+v*xt,u[10]=E*F+b*K+M*k+v*_t,u[14]=E*R+b*it+M*et+v*Bt,u[3]=w*N+D*C+L*ht+P*j,u[7]=w*O+D*H+L*st+P*xt,u[11]=w*F+D*K+L*k+P*_t,u[15]=w*R+D*it+L*et+P*Bt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],s=t[8],u=t[12],f=t[1],h=t[5],p=t[9],m=t[13],_=t[2],x=t[6],g=t[10],y=t[14],E=t[3],b=t[7],M=t[11],v=t[15];return E*(+u*p*x-s*m*x-u*h*g+a*m*g+s*h*y-a*p*y)+b*(+i*p*y-i*m*g+u*f*g-s*f*y+s*m*_-u*p*_)+M*(+i*m*x-i*h*y-u*f*x+a*f*y+u*h*_-a*m*_)+v*(-s*h*_-i*p*x+i*h*g+s*f*x-a*f*g+a*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=i,s[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],s=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],_=t[8],x=t[9],g=t[10],y=t[11],E=t[12],b=t[13],M=t[14],v=t[15],w=x*M*m-b*g*m+b*p*y-h*M*y-x*p*v+h*g*v,D=E*g*m-_*M*m-E*p*y+f*M*y+_*p*v-f*g*v,L=_*b*m-E*x*m+E*h*y-f*b*y-_*h*v+f*x*v,P=E*x*p-_*b*p-E*h*g+f*b*g+_*h*M-f*x*M,N=i*w+a*D+s*L+u*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/N;return t[0]=w*O,t[1]=(b*g*u-x*M*u-b*s*y+a*M*y+x*s*v-a*g*v)*O,t[2]=(h*M*u-b*p*u+b*s*m-a*M*m-h*s*v+a*p*v)*O,t[3]=(x*p*u-h*g*u-x*s*m+a*g*m+h*s*y-a*p*y)*O,t[4]=D*O,t[5]=(_*M*u-E*g*u+E*s*y-i*M*y-_*s*v+i*g*v)*O,t[6]=(E*p*u-f*M*u-E*s*m+i*M*m+f*s*v-i*p*v)*O,t[7]=(f*g*u-_*p*u+_*s*m-i*g*m-f*s*y+i*p*y)*O,t[8]=L*O,t[9]=(E*x*u-_*b*u-E*a*y+i*b*y+_*a*v-i*x*v)*O,t[10]=(f*b*u-E*h*u+E*a*m-i*b*m-f*a*v+i*h*v)*O,t[11]=(_*h*u-f*x*u-_*a*m+i*x*m+f*a*y-i*h*y)*O,t[12]=P*O,t[13]=(_*b*s-E*x*s+E*a*g-i*b*g-_*a*M+i*x*M)*O,t[14]=(E*h*s-f*b*s-E*a*p+i*b*p+f*a*M-i*h*M)*O,t[15]=(f*x*s-_*h*s+_*a*p-i*x*p-f*a*g+i*h*g)*O,this}scale(t){const i=this.elements,a=t.x,s=t.y,u=t.z;return i[0]*=a,i[4]*=s,i[8]*=u,i[1]*=a,i[5]*=s,i[9]*=u,i[2]*=a,i[6]*=s,i[10]*=u,i[3]*=a,i[7]*=s,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,s))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),s=Math.sin(i),u=1-a,f=t.x,h=t.y,p=t.z,m=u*f,_=u*h;return this.set(m*f+a,m*h-s*p,m*p+s*h,0,m*h+s*p,_*h+a,_*p-s*f,0,m*p-s*h,_*p+s*f,u*p*p+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,s,u,f){return this.set(1,a,u,0,t,1,f,0,i,s,1,0,0,0,0,1),this}compose(t,i,a){const s=this.elements,u=i._x,f=i._y,h=i._z,p=i._w,m=u+u,_=f+f,x=h+h,g=u*m,y=u*_,E=u*x,b=f*_,M=f*x,v=h*x,w=p*m,D=p*_,L=p*x,P=a.x,N=a.y,O=a.z;return s[0]=(1-(b+v))*P,s[1]=(y+L)*P,s[2]=(E-D)*P,s[3]=0,s[4]=(y-L)*N,s[5]=(1-(g+v))*N,s[6]=(M+w)*N,s[7]=0,s[8]=(E+D)*O,s[9]=(M-w)*O,s[10]=(1-(g+b))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,i,a){const s=this.elements;let u=Yo.set(s[0],s[1],s[2]).length();const f=Yo.set(s[4],s[5],s[6]).length(),h=Yo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(u=-u),t.x=s[12],t.y=s[13],t.z=s[14],ra.copy(this);const m=1/u,_=1/f,x=1/h;return ra.elements[0]*=m,ra.elements[1]*=m,ra.elements[2]*=m,ra.elements[4]*=_,ra.elements[5]*=_,ra.elements[6]*=_,ra.elements[8]*=x,ra.elements[9]*=x,ra.elements[10]*=x,i.setFromRotationMatrix(ra),a.x=u,a.y=f,a.z=h,this}makePerspective(t,i,a,s,u,f,h=Ta,p=!1){const m=this.elements,_=2*u/(i-t),x=2*u/(a-s),g=(i+t)/(i-t),y=(a+s)/(a-s);let E,b;if(p)E=u/(f-u),b=f*u/(f-u);else if(h===Ta)E=-(f+u)/(f-u),b=-2*f*u/(f-u);else if(h===ph)E=-f/(f-u),b=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=x,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,a,s,u,f,h=Ta,p=!1){const m=this.elements,_=2/(i-t),x=2/(a-s),g=-(i+t)/(i-t),y=-(a+s)/(a-s);let E,b;if(p)E=1/(f-u),b=f/(f-u);else if(h===Ta)E=-2/(f-u),b=-(f+u)/(f-u);else if(h===ph)E=-1/(f-u),b=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=x,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let s=0;s<16;s++)if(i[s]!==a[s])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const Yo=new lt,ra=new An,JA=new lt(0,0,0),$A=new lt(1,1,1),Xr=new lt,Df=new lt,Ei=new lt,xy=new An,gy=new El;class lr{constructor(t=0,i=0,a=0,s=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,s=this._order){return this._x=t,this._y=i,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const s=t.elements,u=s[0],f=s[4],h=s[8],p=s[1],m=s[5],_=s[9],x=s[2],g=s[6],y=s[10];switch(i){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ae(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return xy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xy,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return gy.setFromEuler(this),this.setFromQuaternion(gy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class g1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let t2=0;const vy=new lt,qo=new El,Wa=new An,Uf=new lt,Mu=new lt,e2=new lt,n2=new El,Sy=new lt(1,0,0),yy=new lt(0,1,0),My=new lt(0,0,1),by={type:"added"},i2={type:"removed"},Wo={type:"childadded",child:null},g0={type:"childremoved",child:null};class Ni extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t2++}),this.uuid=bl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ni.DEFAULT_UP.clone();const t=new lt,i=new lr,a=new El,s=new lt(1,1,1);function u(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(u),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new An},normalMatrix:{value:new pe}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=Ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return qo.setFromAxisAngle(t,i),this.quaternion.multiply(qo),this}rotateOnWorldAxis(t,i){return qo.setFromAxisAngle(t,i),this.quaternion.premultiply(qo),this}rotateX(t){return this.rotateOnAxis(Sy,t)}rotateY(t){return this.rotateOnAxis(yy,t)}rotateZ(t){return this.rotateOnAxis(My,t)}translateOnAxis(t,i){return vy.copy(t).applyQuaternion(this.quaternion),this.position.add(vy.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Sy,t)}translateY(t){return this.translateOnAxis(yy,t)}translateZ(t){return this.translateOnAxis(My,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?Uf.copy(t):Uf.set(t,i,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Mu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(Mu,Uf,this.up):Wa.lookAt(Uf,Mu,this.up),this.quaternion.setFromRotationMatrix(Wa),s&&(Wa.extractRotation(s.matrixWorld),qo.setFromRotationMatrix(Wa),this.quaternion.premultiply(qo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(mn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(by),Wo.child=t,this.dispatchEvent(Wo),Wo.child=null):mn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(i2),g0.child=t,this.dispatchEvent(g0),g0.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(by),Wo.child=t,this.dispatchEvent(Wo),Wo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,s=this.children.length;a<s;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const s=this.children;for(let u=0,f=s.length;u<f;u++)s[u].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mu,t,e2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mu,n2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const s=this.children;for(let u=0,f=s.length;u<f;u++)s[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(t.shapes,x)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));s.material=h}else s.material=u(t.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];s.animations.push(u(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),_=f(t.images),x=f(t.shapes),g=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),_.length>0&&(a.images=_),x.length>0&&(a.shapes=x),g.length>0&&(a.skeletons=g),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=s,a;function f(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}Ni.DEFAULT_UP=new lt(0,1,0);Ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sa=new lt,ja=new lt,v0=new lt,Za=new lt,jo=new lt,Zo=new lt,Ey=new lt,S0=new lt,y0=new lt,M0=new lt,b0=new _n,E0=new _n,T0=new _n;class oa{constructor(t=new lt,i=new lt,a=new lt){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,s){s.subVectors(a,i),sa.subVectors(t,i),s.cross(sa);const u=s.lengthSq();return u>0?s.multiplyScalar(1/Math.sqrt(u)):s.set(0,0,0)}static getBarycoord(t,i,a,s,u){sa.subVectors(s,i),ja.subVectors(a,i),v0.subVectors(t,i);const f=sa.dot(sa),h=sa.dot(ja),p=sa.dot(v0),m=ja.dot(ja),_=ja.dot(v0),x=f*m-h*h;if(x===0)return u.set(0,0,0),null;const g=1/x,y=(m*p-h*_)*g,E=(f*_-h*p)*g;return u.set(1-y-E,E,y)}static containsPoint(t,i,a,s){return this.getBarycoord(t,i,a,s,Za)===null?!1:Za.x>=0&&Za.y>=0&&Za.x+Za.y<=1}static getInterpolation(t,i,a,s,u,f,h,p){return this.getBarycoord(t,i,a,s,Za)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Za.x),p.addScaledVector(f,Za.y),p.addScaledVector(h,Za.z),p)}static getInterpolatedAttribute(t,i,a,s,u,f){return b0.setScalar(0),E0.setScalar(0),T0.setScalar(0),b0.fromBufferAttribute(t,i),E0.fromBufferAttribute(t,a),T0.fromBufferAttribute(t,s),f.setScalar(0),f.addScaledVector(b0,u.x),f.addScaledVector(E0,u.y),f.addScaledVector(T0,u.z),f}static isFrontFacing(t,i,a,s){return sa.subVectors(a,i),ja.subVectors(t,i),sa.cross(ja).dot(s)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,s){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,i,a,s){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sa.subVectors(this.c,this.b),ja.subVectors(this.a,this.b),sa.cross(ja).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return oa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,s,u){return oa.getInterpolation(t,this.a,this.b,this.c,i,a,s,u)}containsPoint(t){return oa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,s=this.b,u=this.c;let f,h;jo.subVectors(s,a),Zo.subVectors(u,a),S0.subVectors(t,a);const p=jo.dot(S0),m=Zo.dot(S0);if(p<=0&&m<=0)return i.copy(a);y0.subVectors(t,s);const _=jo.dot(y0),x=Zo.dot(y0);if(_>=0&&x<=_)return i.copy(s);const g=p*x-_*m;if(g<=0&&p>=0&&_<=0)return f=p/(p-_),i.copy(a).addScaledVector(jo,f);M0.subVectors(t,u);const y=jo.dot(M0),E=Zo.dot(M0);if(E>=0&&y<=E)return i.copy(u);const b=y*m-p*E;if(b<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(a).addScaledVector(Zo,h);const M=_*E-y*x;if(M<=0&&x-_>=0&&y-E>=0)return Ey.subVectors(u,s),h=(x-_)/(x-_+(y-E)),i.copy(s).addScaledVector(Ey,h);const v=1/(M+b+g);return f=b*v,h=g*v,i.copy(a).addScaledVector(jo,f).addScaledVector(Zo,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const v1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Nf={h:0,s:0,l:0};function A0(l,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?l+(t-l)*6*i:i<1/2?t:i<2/3?l+(t-l)*6*(2/3-i):l}class We{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,a,s=Le.workingColorSpace){return this.r=t,this.g=i,this.b=a,Le.colorSpaceToWorking(this,s),this}setHSL(t,i,a,s=Le.workingColorSpace){if(t=x_(t,1),i=Ae(i,0,1),a=Ae(a,0,1),i===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+i):a+i-a*i,f=2*a-u;this.r=A0(f,u,t+1/3),this.g=A0(f,u,t),this.b=A0(f,u,t-1/3)}return Le.colorSpaceToWorking(this,s),this}setStyle(t,i=Ri){function a(u){u!==void 0&&parseFloat(u)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=s[1],h=s[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:fe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=s[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ri){const a=v1[t.toLowerCase()];return a!==void 0?this.setHex(a,i):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=cl(t.r),this.g=cl(t.g),this.b=cl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ri){return Le.workingToColorSpace(qn.copy(this),t),Math.round(Ae(qn.r*255,0,255))*65536+Math.round(Ae(qn.g*255,0,255))*256+Math.round(Ae(qn.b*255,0,255))}getHexString(t=Ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(qn.copy(this),i);const a=qn.r,s=qn.g,u=qn.b,f=Math.max(a,s,u),h=Math.min(a,s,u);let p,m;const _=(h+f)/2;if(h===f)p=0,m=0;else{const x=f-h;switch(m=_<=.5?x/(f+h):x/(2-f-h),f){case a:p=(s-u)/x+(s<u?6:0);break;case s:p=(u-a)/x+2;break;case u:p=(a-s)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(qn.copy(this),i),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=Ri){Le.workingToColorSpace(qn.copy(this),t);const i=qn.r,a=qn.g,s=qn.b;return t!==Ri?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,i,a){return this.getHSL(kr),this.setHSL(kr.h+t,kr.s+i,kr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(kr),t.getHSL(Nf);const a=Nu(kr.h,Nf.h,i),s=Nu(kr.s,Nf.s,i),u=Nu(kr.l,Nf.l,i);return this.setHSL(a,s,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,s=this.b,u=t.elements;return this.r=u[0]*i+u[3]*a+u[6]*s,this.g=u[1]*i+u[4]*a+u[7]*s,this.b=u[2]*i+u[5]*a+u[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new We;We.NAMES=v1;let a2=0;class vh extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=bl(),this.name="",this.type="Material",this.blending=ul,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nm,this.blendDst=im,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){fe(`Material: parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){fe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==ul&&(a.blending=this.blending),this.side!==is&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==nm&&(a.blendSrc=this.blendSrc),this.blendDst!==im&&(a.blendDst=this.blendDst),this.blendEquation!==Bs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==xl&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oy&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ho&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ho&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ho&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}if(i){const u=s(t.textures),f=s(t.images);u.length>0&&(a.textures=u),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const s=i.length;a=new Array(s);for(let u=0;u!==s;++u)a[u]=i[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class S_ extends vh{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=s1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mn=new lt,Lf=new be;let r2=0;class Aa{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r2++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=ly,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let s=0,u=this.itemSize;s<u;s++)this.array[t+s]=i.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Lf.fromBufferAttribute(this,i),Lf.applyMatrix3(t),this.setXY(i,Lf.x,Lf.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=nl(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=ei(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=nl(i,this.array)),i}setX(t,i){return this.normalized&&(i=ei(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=nl(i,this.array)),i}setY(t,i){return this.normalized&&(i=ei(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=nl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ei(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=nl(i,this.array)),i}setW(t,i){return this.normalized&&(i=ei(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=ei(i,this.array),a=ei(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,s){return t*=this.itemSize,this.normalized&&(i=ei(i,this.array),a=ei(a,this.array),s=ei(s,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,i,a,s,u){return t*=this.itemSize,this.normalized&&(i=ei(i,this.array),a=ei(a,this.array),s=ei(s,this.array),u=ei(u,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ly&&(t.usage=this.usage),t}}class S1 extends Aa{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class y1 extends Aa{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class Ra extends Aa{constructor(t,i,a){super(new Float32Array(t),i,a)}}let s2=0;const Yi=new An,R0=new Ni,Ko=new lt,Ti=new ju,bu=new ju,Ln=new lt;class fr extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s2++}),this.uuid=bl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_1(t)?y1:S1)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new pe().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yi.makeRotationFromQuaternion(t),this.applyMatrix4(Yi),this}rotateX(t){return Yi.makeRotationX(t),this.applyMatrix4(Yi),this}rotateY(t){return Yi.makeRotationY(t),this.applyMatrix4(Yi),this}rotateZ(t){return Yi.makeRotationZ(t),this.applyMatrix4(Yi),this}translate(t,i,a){return Yi.makeTranslation(t,i,a),this.applyMatrix4(Yi),this}scale(t,i,a){return Yi.makeScale(t,i,a),this.applyMatrix4(Yi),this}lookAt(t){return R0.lookAt(t),R0.updateMatrix(),this.applyMatrix4(R0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let s=0,u=t.length;s<u;s++){const f=t[s];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ra(a,3))}else{const a=Math.min(t.length,i.count);for(let s=0;s<a;s++){const u=t[s];i.setXYZ(s,u.x,u.y,u.z||0)}t.length>i.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ju);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){mn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,s=i.length;a<s;a++){const u=i[a];Ti.setFromBufferAttribute(u),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new v_);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){mn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const a=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];bu.setFromBufferAttribute(h),this.morphTargetsRelative?(Ln.addVectors(Ti.min,bu.min),Ti.expandByPoint(Ln),Ln.addVectors(Ti.max,bu.max),Ti.expandByPoint(Ln)):(Ti.expandByPoint(bu.min),Ti.expandByPoint(bu.max))}Ti.getCenter(a);let s=0;for(let u=0,f=t.count;u<f;u++)Ln.fromBufferAttribute(t,u),s=Math.max(s,a.distanceToSquared(Ln));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)Ln.fromBufferAttribute(h,m),p&&(Ko.fromBufferAttribute(t,m),Ln.add(Ko)),s=Math.max(s,a.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){mn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,s=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Aa(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let F=0;F<a.count;F++)h[F]=new lt,p[F]=new lt;const m=new lt,_=new lt,x=new lt,g=new be,y=new be,E=new be,b=new lt,M=new lt;function v(F,R,C){m.fromBufferAttribute(a,F),_.fromBufferAttribute(a,R),x.fromBufferAttribute(a,C),g.fromBufferAttribute(u,F),y.fromBufferAttribute(u,R),E.fromBufferAttribute(u,C),_.sub(m),x.sub(m),y.sub(g),E.sub(g);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(H),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(H),h[F].add(b),h[R].add(b),h[C].add(b),p[F].add(M),p[R].add(M),p[C].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,R=w.length;F<R;++F){const C=w[F],H=C.start,K=C.count;for(let it=H,ht=H+K;it<ht;it+=3)v(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const D=new lt,L=new lt,P=new lt,N=new lt;function O(F){P.fromBufferAttribute(s,F),N.copy(P);const R=h[F];D.copy(R),D.sub(P.multiplyScalar(P.dot(R))).normalize(),L.crossVectors(N,R);const H=L.dot(p[F])<0?-1:1;f.setXYZW(F,D.x,D.y,D.z,H)}for(let F=0,R=w.length;F<R;++F){const C=w[F],H=C.start,K=C.count;for(let it=H,ht=H+K;it<ht;it+=3)O(t.getX(it+0)),O(t.getX(it+1)),O(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Aa(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let g=0,y=a.count;g<y;g++)a.setXYZ(g,0,0,0);const s=new lt,u=new lt,f=new lt,h=new lt,p=new lt,m=new lt,_=new lt,x=new lt;if(t)for(let g=0,y=t.count;g<y;g+=3){const E=t.getX(g+0),b=t.getX(g+1),M=t.getX(g+2);s.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),_.subVectors(f,u),x.subVectors(s,u),_.cross(x),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,b),m.fromBufferAttribute(a,M),h.add(_),p.add(_),m.add(_),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let g=0,y=i.count;g<y;g+=3)s.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,u),x.subVectors(s,u),_.cross(x),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)Ln.fromBufferAttribute(t,i),Ln.normalize(),t.setXYZ(i,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(h,p){const m=h.array,_=h.itemSize,x=h.normalized,g=new m.constructor(p.length*_);let y=0,E=0;for(let b=0,M=p.length;b<M;b++){h.isInterleavedBufferAttribute?y=p[b]*h.data.stride+h.offset:y=p[b]*_;for(let v=0;v<_;v++)g[E++]=m[y++]}return new Aa(g,_,x)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fr,a=this.index.array,s=this.attributes;for(const h in s){const p=s[h],m=t(p,a);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let _=0,x=m.length;_<x;_++){const g=m[_],y=t(g,a);p.push(y)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const s={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,g=m.length;x<g;x++){const y=m[x];_.push(y.toJSON(t.data))}_.length>0&&(s[p]=_,u=!0)}u&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const m in s){const _=s[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],x=u[m];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,_=f.length;m<_;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ty=new An,Ls=new QA,Of=new v_,Ay=new lt,Pf=new lt,zf=new lt,If=new lt,C0=new lt,Ff=new lt,Ry=new lt,Bf=new lt;class ur extends Ni{constructor(t=new fr,i=new S_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const s=i[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=s.length;u<f;u++){const h=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const a=this.geometry,s=a.attributes.position,u=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(s,t);const h=this.morphTargetInfluences;if(u&&h){Ff.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=h[p],x=u[p];_!==0&&(C0.fromBufferAttribute(x,t),f?Ff.addScaledVector(C0,_):Ff.addScaledVector(C0.sub(i),_))}i.add(Ff)}return i}raycast(t,i){const a=this.geometry,s=this.material,u=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Of.copy(a.boundingSphere),Of.applyMatrix4(u),Ls.copy(t.ray).recast(t.near),!(Of.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Of,Ay)===null||Ls.origin.distanceToSquared(Ay)>(t.far-t.near)**2))&&(Ty.copy(u).invert(),Ls.copy(t.ray).applyMatrix4(Ty),!(a.boundingBox!==null&&Ls.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,Ls)))}_computeIntersections(t,i,a){let s;const u=this.geometry,f=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,g=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,b=g.length;E<b;E++){const M=g[E],v=f[M.materialIndex],w=Math.max(M.start,y.start),D=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let L=w,P=D;L<P;L+=3){const N=h.getX(L),O=h.getX(L+1),F=h.getX(L+2);s=Hf(this,v,t,a,m,_,x,N,O,F),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=M.materialIndex,i.push(s))}}else{const E=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let M=E,v=b;M<v;M+=3){const w=h.getX(M),D=h.getX(M+1),L=h.getX(M+2);s=Hf(this,f,t,a,m,_,x,w,D,L),s&&(s.faceIndex=Math.floor(M/3),i.push(s))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,b=g.length;E<b;E++){const M=g[E],v=f[M.materialIndex],w=Math.max(M.start,y.start),D=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let L=w,P=D;L<P;L+=3){const N=L,O=L+1,F=L+2;s=Hf(this,v,t,a,m,_,x,N,O,F),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=M.materialIndex,i.push(s))}}else{const E=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let M=E,v=b;M<v;M+=3){const w=M,D=M+1,L=M+2;s=Hf(this,f,t,a,m,_,x,w,D,L),s&&(s.faceIndex=Math.floor(M/3),i.push(s))}}}}function o2(l,t,i,a,s,u,f,h){let p;if(t.side===ai?p=a.intersectTriangle(f,u,s,!0,h):p=a.intersectTriangle(s,u,f,t.side===is,h),p===null)return null;Bf.copy(h),Bf.applyMatrix4(l.matrixWorld);const m=i.ray.origin.distanceTo(Bf);return m<i.near||m>i.far?null:{distance:m,point:Bf.clone(),object:l}}function Hf(l,t,i,a,s,u,f,h,p,m){l.getVertexPosition(h,Pf),l.getVertexPosition(p,zf),l.getVertexPosition(m,If);const _=o2(l,t,i,a,Pf,zf,If,Ry);if(_){const x=new lt;oa.getBarycoord(Ry,Pf,zf,If,x),s&&(_.uv=oa.getInterpolatedAttribute(s,h,p,m,x,new be)),u&&(_.uv1=oa.getInterpolatedAttribute(u,h,p,m,x,new be)),f&&(_.normal=oa.getInterpolatedAttribute(f,h,p,m,x,new lt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new lt,materialIndex:0};oa.getNormal(Pf,zf,If,g.normal),_.face=g,_.barycoord=x}return _}class Zu extends fr{constructor(t=1,i=1,a=1,s=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:s,heightSegments:u,depthSegments:f};const h=this;s=Math.floor(s),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],x=[];let g=0,y=0;E("z","y","x",-1,-1,a,i,t,f,u,0),E("z","y","x",1,-1,a,i,-t,f,u,1),E("x","z","y",1,1,t,a,i,s,f,2),E("x","z","y",1,-1,t,a,-i,s,f,3),E("x","y","z",1,-1,t,i,a,s,u,4),E("x","y","z",-1,-1,t,i,-a,s,u,5),this.setIndex(p),this.setAttribute("position",new Ra(m,3)),this.setAttribute("normal",new Ra(_,3)),this.setAttribute("uv",new Ra(x,2));function E(b,M,v,w,D,L,P,N,O,F,R){const C=L/O,H=P/F,K=L/2,it=P/2,ht=N/2,st=O+1,k=F+1;let et=0,j=0;const xt=new lt;for(let _t=0;_t<k;_t++){const Bt=_t*H-it;for(let te=0;te<st;te++){const xe=te*C-K;xt[b]=xe*w,xt[M]=Bt*D,xt[v]=ht,m.push(xt.x,xt.y,xt.z),xt[b]=0,xt[M]=0,xt[v]=N>0?1:-1,_.push(xt.x,xt.y,xt.z),x.push(te/O),x.push(1-_t/F),et+=1}}for(let _t=0;_t<F;_t++)for(let Bt=0;Bt<O;Bt++){const te=g+Bt+st*_t,xe=g+Bt+st*(_t+1),B=g+(Bt+1)+st*(_t+1),ct=g+(Bt+1)+st*_t;p.push(te,xe,ct),p.push(xe,B,ct),j+=6}h.addGroup(y,j,R),y+=j,g+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yl(l){const t={};for(const i in l){t[i]={};for(const a in l[i]){const s=l[i][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=s.clone():Array.isArray(s)?t[i][a]=s.slice():t[i][a]=s}}return t}function ni(l){const t={};for(let i=0;i<l.length;i++){const a=yl(l[i]);for(const s in a)t[s]=a[s]}return t}function l2(l){const t=[];for(let i=0;i<l.length;i++)t.push(l[i].clone());return t}function M1(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const u2={clone:yl,merge:ni};var c2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends vh{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c2,this.fragmentShader=f2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yl(t.uniforms),this.uniformsGroups=l2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const s in this.uniforms){const f=this.uniforms[s].value;f&&f.isTexture?i.uniforms[s]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[s]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[s]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[s]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[s]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[s]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[s]={type:"m4",value:f.toArray()}:i.uniforms[s]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class b1 extends Ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=Ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new lt,Cy=new be,wy=new be;class Wi extends b1{constructor(t=50,i=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=qu*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qu*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-t/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Yr.x,Yr.y).multiplyScalar(-t/Yr.z)}getViewSize(t,i){return this.getViewBounds(t,Cy,wy),i.subVectors(wy,Cy)}setViewOffset(t,i,a,s,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Uu*.5*this.fov)/this.zoom,a=2*i,s=this.aspect*a,u=-.5*s;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*s/p,i-=f.offsetY*a/m,s*=f.width/p,a*=f.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+s,i,i-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Qo=-90,Jo=1;class h2 extends Ni{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wi(Qo,Jo,t,i);s.layers=this.layers,this.add(s);const u=new Wi(Qo,Jo,t,i);u.layers=this.layers,this.add(u);const f=new Wi(Qo,Jo,t,i);f.layers=this.layers,this.add(f);const h=new Wi(Qo,Jo,t,i);h.layers=this.layers,this.add(h);const p=new Wi(Qo,Jo,t,i);p.layers=this.layers,this.add(p);const m=new Wi(Qo,Jo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,s,u,f,h,p]=i;for(const m of i)this.remove(m);if(t===Ta)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===ph)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,p,m,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(i,u),t.setRenderTarget(a,1,s),t.render(i,f),t.setRenderTarget(a,2,s),t.render(i,h),t.setRenderTarget(a,3,s),t.render(i,p),t.setRenderTarget(a,4,s),t.render(i,m),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,s),t.render(i,_),t.setRenderTarget(x,g,y),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class E1 extends Zn{constructor(t=[],i=gl,a,s,u,f,h,p,m,_){super(t,i,a,s,u,f,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class d2 extends Ks{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new E1(s),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zu(5,5,5),u=new cr({name:"CubemapFromEquirect",uniforms:yl(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ai,blending:ir});u.uniforms.tEquirect.value=i;const f=new ur(s,u),h=i.minFilter;return i.minFilter===Gs&&(i.minFilter=Qi),new h2(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,a=!0,s=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,s);t.setRenderTarget(u)}}class Vf extends Ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p2={type:"move"};class w0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let s=null,u=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,a),v=this._getHandJoint(m,b);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,E=.005;m.inputState.pinching&&g>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&g<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(s=i.getPose(t.targetRaySpace,a),s===null&&u!==null&&(s=u),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(p2)))}return h!==null&&(h.visible=s!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new Vf;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}let m2=class extends Ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};class _2 extends Zn{constructor(t=null,i=1,a=1,s,u,f,h,p,m=Ui,_=Ui,x,g){super(null,f,h,p,m,_,s,u,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const D0=new lt,x2=new lt,g2=new pe;class Fs{constructor(t=new lt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,s){return this.normal.set(t,i,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const s=D0.subVectors(a,i).cross(x2.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(D0),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/s;return u<0||u>1?null:i.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||g2.getNormalMatrix(t),s=this.coplanarPoint(D0).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new v_,v2=new be(.5,.5),Gf=new lt;class T1{constructor(t=new Fs,i=new Fs,a=new Fs,s=new Fs,u=new Fs,f=new Fs){this.planes=[t,i,a,s,u,f]}set(t,i,a,s,u,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(a),h[3].copy(s),h[4].copy(u),h[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=Ta,a=!1){const s=this.planes,u=t.elements,f=u[0],h=u[1],p=u[2],m=u[3],_=u[4],x=u[5],g=u[6],y=u[7],E=u[8],b=u[9],M=u[10],v=u[11],w=u[12],D=u[13],L=u[14],P=u[15];if(s[0].setComponents(m-f,y-_,v-E,P-w).normalize(),s[1].setComponents(m+f,y+_,v+E,P+w).normalize(),s[2].setComponents(m+h,y+x,v+b,P+D).normalize(),s[3].setComponents(m-h,y-x,v-b,P-D).normalize(),a)s[4].setComponents(p,g,M,L).normalize(),s[5].setComponents(m-p,y-g,v-M,P-L).normalize();else if(s[4].setComponents(m-p,y-g,v-M,P-L).normalize(),i===Ta)s[5].setComponents(m+p,y+g,v+M,P+L).normalize();else if(i===ph)s[5].setComponents(p,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const i=v2.distanceTo(t.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const i=this.planes,a=t.center,s=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const s=i[a];if(Gf.x=s.normal.x>0?t.max.x:t.min.x,Gf.y=s.normal.y>0?t.max.y:t.min.y,Gf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gf)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class A1 extends Zn{constructor(t,i,a=Zs,s,u,f,h=Ui,p=Ui,m,_=Gu,x=1){if(_!==Gu&&_!==Xu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,s,u,f,h,p,_,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new g_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class R1 extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Sh extends fr{constructor(t=1,i=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:s};const u=t/2,f=i/2,h=Math.floor(a),p=Math.floor(s),m=h+1,_=p+1,x=t/h,g=i/p,y=[],E=[],b=[],M=[];for(let v=0;v<_;v++){const w=v*g-f;for(let D=0;D<m;D++){const L=D*x-u;E.push(L,-w,0),b.push(0,0,1),M.push(D/h),M.push(1-v/p)}}for(let v=0;v<p;v++)for(let w=0;w<h;w++){const D=w+m*v,L=w+m*(v+1),P=w+1+m*(v+1),N=w+1+m*v;y.push(D,L,N),y.push(L,P,N)}this.setIndex(y),this.setAttribute("position",new Ra(E,3)),this.setAttribute("normal",new Ra(b,3)),this.setAttribute("uv",new Ra(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.width,t.height,t.widthSegments,t.heightSegments)}}class y_ extends fr{constructor(t=1,i=32,a=16,s=0,u=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:a,phiStart:s,phiLength:u,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const p=Math.min(f+h,Math.PI);let m=0;const _=[],x=new lt,g=new lt,y=[],E=[],b=[],M=[];for(let v=0;v<=a;v++){const w=[],D=v/a;let L=0;v===0&&f===0?L=.5/i:v===a&&p===Math.PI&&(L=-.5/i);for(let P=0;P<=i;P++){const N=P/i;x.x=-t*Math.cos(s+N*u)*Math.sin(f+D*h),x.y=t*Math.cos(f+D*h),x.z=t*Math.sin(s+N*u)*Math.sin(f+D*h),E.push(x.x,x.y,x.z),g.copy(x).normalize(),b.push(g.x,g.y,g.z),M.push(N+L,1-D),w.push(m++)}_.push(w)}for(let v=0;v<a;v++)for(let w=0;w<i;w++){const D=_[v][w+1],L=_[v][w],P=_[v+1][w],N=_[v+1][w+1];(v!==0||f>0)&&y.push(D,L,N),(v!==a-1||p<Math.PI)&&y.push(L,P,N)}this.setIndex(y),this.setAttribute("position",new Ra(E,3)),this.setAttribute("normal",new Ra(b,3)),this.setAttribute("uv",new Ra(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new y_(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class S2 extends vh{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class y2 extends vh{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const U0={enabled:!1,files:{},add:function(l,t){this.enabled!==!1&&(this.files[l]=t)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class M2{constructor(t,i,a){const s=this;let u=!1,f=0,h=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=a,this._abortController=null,this.itemStart=function(_){h++,u===!1&&s.onStart!==void 0&&s.onStart(_,f,h),u=!0},this.itemEnd=function(_){f++,s.onProgress!==void 0&&s.onProgress(_,f,h),f===h&&(u=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(_){s.onError!==void 0&&s.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,x){return m.push(_,x),this},this.removeHandler=function(_){const x=m.indexOf(_);return x!==-1&&m.splice(x,2),this},this.getHandler=function(_){for(let x=0,g=m.length;x<g;x+=2){const y=m[x],E=m[x+1];if(y.global&&(y.lastIndex=0),y.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const b2=new M2;class M_{constructor(t){this.manager=t!==void 0?t:b2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const a=this;return new Promise(function(s,u){a.load(t,s,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}M_.DEFAULT_MATERIAL_NAME="__DEFAULT";const $o=new WeakMap;class E2 extends M_{constructor(t){super(t)}load(t,i,a,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,f=U0.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(f),u.manager.itemEnd(t)},0);else{let x=$o.get(f);x===void 0&&(x=[],$o.set(f,x)),x.push({onLoad:i,onError:s})}return f}const h=ku("img");function p(){_(),i&&i(this);const x=$o.get(this)||[];for(let g=0;g<x.length;g++){const y=x[g];y.onLoad&&y.onLoad(this)}$o.delete(this),u.manager.itemEnd(t)}function m(x){_(),s&&s(x),U0.remove(`image:${t}`);const g=$o.get(this)||[];for(let y=0;y<g.length;y++){const E=g[y];E.onError&&E.onError(x)}$o.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function _(){h.removeEventListener("load",p,!1),h.removeEventListener("error",m,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),U0.add(`image:${t}`,h),u.manager.itemStart(t),h.src=t,h}}class T2 extends M_{constructor(t){super(t)}load(t,i,a,s){const u=new Zn,f=new E2(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){u.image=h,u.needsUpdate=!0,i!==void 0&&i(u)},a,s),u}}class A2 extends b1{constructor(t=-1,i=1,a=1,s=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=s,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,s,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let u=a-t,f=a+t,h=s+i,p=s-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class R2 extends Wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class C2 extends Js{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){fe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Dy(l,t,i,a){const s=w2(a);switch(i){case h1:return l*t;case p1:return l*t/s.components*s.byteLength;case d_:return l*t/s.components*s.byteLength;case p_:return l*t*2/s.components*s.byteLength;case m_:return l*t*2/s.components*s.byteLength;case d1:return l*t*3/s.components*s.byteLength;case la:return l*t*4/s.components*s.byteLength;case __:return l*t*4/s.components*s.byteLength;case th:case eh:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case nh:case ih:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case _m:case gm:return Math.max(l,16)*Math.max(t,8)/4;case mm:case xm:return Math.max(l,8)*Math.max(t,8)/2;case vm:case Sm:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case ym:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Mm:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case bm:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case Em:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case Tm:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case Am:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case Rm:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case Cm:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case wm:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case Dm:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case Um:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case Nm:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case Lm:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case Om:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case Pm:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case zm:case Im:case Fm:return Math.ceil(l/4)*Math.ceil(t/4)*16;case Bm:case Hm:return Math.ceil(l/4)*Math.ceil(t/4)*8;case Vm:case Gm:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function w2(l){switch(l){case or:case l1:return{byteLength:1,components:1};case Hu:case u1:case Ml:return{byteLength:2,components:1};case f_:case h_:return{byteLength:2,components:4};case Zs:case c_:case nr:return{byteLength:4,components:1};case c1:case f1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:u_}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=u_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C1(){let l=null,t=!1,i=null,a=null;function s(u,f){i(u,f),a=l.requestAnimationFrame(s)}return{start:function(){t!==!0&&i!==null&&(a=l.requestAnimationFrame(s),t=!0)},stop:function(){l.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){l=u}}}function D2(l){const t=new WeakMap;function i(h,p){const m=h.array,_=h.usage,x=m.byteLength,g=l.createBuffer();l.bindBuffer(p,g),l.bufferData(p,m,_),h.onUploadCallback();let y;if(m instanceof Float32Array)y=l.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=l.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=l.HALF_FLOAT:y=l.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=l.SHORT;else if(m instanceof Uint32Array)y=l.UNSIGNED_INT;else if(m instanceof Int32Array)y=l.INT;else if(m instanceof Int8Array)y=l.BYTE;else if(m instanceof Uint8Array)y=l.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function a(h,p,m){const _=p.array,x=p.updateRanges;if(l.bindBuffer(m,h),x.length===0)l.bufferSubData(m,0,_);else{x.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<x.length;y++){const E=x[g],b=x[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++g,x[g]=b)}x.length=g+1;for(let y=0,E=x.length;y<E;y++){const b=x[y];l.bufferSubData(m,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(l.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:s,remove:u,update:f}}var U2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,L2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,H2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oR="gl_FragColor = linearToOutputTexel( gl_FragColor );",lR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_R=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ER=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$R=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_C=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$C=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ew=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ow=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:U2,alphahash_pars_fragment:N2,alphamap_fragment:L2,alphamap_pars_fragment:O2,alphatest_fragment:P2,alphatest_pars_fragment:z2,aomap_fragment:I2,aomap_pars_fragment:F2,batching_pars_vertex:B2,batching_vertex:H2,begin_vertex:V2,beginnormal_vertex:G2,bsdfs:X2,iridescence_fragment:k2,bumpmap_pars_fragment:Y2,clipping_planes_fragment:q2,clipping_planes_pars_fragment:W2,clipping_planes_pars_vertex:j2,clipping_planes_vertex:Z2,color_fragment:K2,color_pars_fragment:Q2,color_pars_vertex:J2,color_vertex:$2,common:tR,cube_uv_reflection_fragment:eR,defaultnormal_vertex:nR,displacementmap_pars_vertex:iR,displacementmap_vertex:aR,emissivemap_fragment:rR,emissivemap_pars_fragment:sR,colorspace_fragment:oR,colorspace_pars_fragment:lR,envmap_fragment:uR,envmap_common_pars_fragment:cR,envmap_pars_fragment:fR,envmap_pars_vertex:hR,envmap_physical_pars_fragment:bR,envmap_vertex:dR,fog_vertex:pR,fog_pars_vertex:mR,fog_fragment:_R,fog_pars_fragment:xR,gradientmap_pars_fragment:gR,lightmap_pars_fragment:vR,lights_lambert_fragment:SR,lights_lambert_pars_fragment:yR,lights_pars_begin:MR,lights_toon_fragment:ER,lights_toon_pars_fragment:TR,lights_phong_fragment:AR,lights_phong_pars_fragment:RR,lights_physical_fragment:CR,lights_physical_pars_fragment:wR,lights_fragment_begin:DR,lights_fragment_maps:UR,lights_fragment_end:NR,logdepthbuf_fragment:LR,logdepthbuf_pars_fragment:OR,logdepthbuf_pars_vertex:PR,logdepthbuf_vertex:zR,map_fragment:IR,map_pars_fragment:FR,map_particle_fragment:BR,map_particle_pars_fragment:HR,metalnessmap_fragment:VR,metalnessmap_pars_fragment:GR,morphinstance_vertex:XR,morphcolor_vertex:kR,morphnormal_vertex:YR,morphtarget_pars_vertex:qR,morphtarget_vertex:WR,normal_fragment_begin:jR,normal_fragment_maps:ZR,normal_pars_fragment:KR,normal_pars_vertex:QR,normal_vertex:JR,normalmap_pars_fragment:$R,clearcoat_normal_fragment_begin:tC,clearcoat_normal_fragment_maps:eC,clearcoat_pars_fragment:nC,iridescence_pars_fragment:iC,opaque_fragment:aC,packing:rC,premultiplied_alpha_fragment:sC,project_vertex:oC,dithering_fragment:lC,dithering_pars_fragment:uC,roughnessmap_fragment:cC,roughnessmap_pars_fragment:fC,shadowmap_pars_fragment:hC,shadowmap_pars_vertex:dC,shadowmap_vertex:pC,shadowmask_pars_fragment:mC,skinbase_vertex:_C,skinning_pars_vertex:xC,skinning_vertex:gC,skinnormal_vertex:vC,specularmap_fragment:SC,specularmap_pars_fragment:yC,tonemapping_fragment:MC,tonemapping_pars_fragment:bC,transmission_fragment:EC,transmission_pars_fragment:TC,uv_pars_fragment:AC,uv_pars_vertex:RC,uv_vertex:CC,worldpos_vertex:wC,background_vert:DC,background_frag:UC,backgroundCube_vert:NC,backgroundCube_frag:LC,cube_vert:OC,cube_frag:PC,depth_vert:zC,depth_frag:IC,distanceRGBA_vert:FC,distanceRGBA_frag:BC,equirect_vert:HC,equirect_frag:VC,linedashed_vert:GC,linedashed_frag:XC,meshbasic_vert:kC,meshbasic_frag:YC,meshlambert_vert:qC,meshlambert_frag:WC,meshmatcap_vert:jC,meshmatcap_frag:ZC,meshnormal_vert:KC,meshnormal_frag:QC,meshphong_vert:JC,meshphong_frag:$C,meshphysical_vert:tw,meshphysical_frag:ew,meshtoon_vert:nw,meshtoon_frag:iw,points_vert:aw,points_frag:rw,shadow_vert:sw,shadow_frag:ow,sprite_vert:lw,sprite_frag:uw},Pt={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ma={basic:{uniforms:ni([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:ni([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new We(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:ni([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:ni([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:ni([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new We(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:ni([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:ni([Pt.points,Pt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:ni([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:ni([Pt.common,Pt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:ni([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:ni([Pt.sprite,Pt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:ni([Pt.common,Pt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:ni([Pt.lights,Pt.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Ma.physical={uniforms:ni([Ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Xf={r:0,b:0,g:0},Ps=new lr,cw=new An;function fw(l,t,i,a,s,u,f){const h=new We(0);let p=u===!0?0:1,m,_,x=null,g=0,y=null;function E(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?i:t).get(L)),L}function b(D){let L=!1;const P=E(D);P===null?v(h,p):P&&P.isColor&&(v(P,1),L=!0);const N=l.xr.getEnvironmentBlendMode();N==="additive"?a.buffers.color.setClear(0,0,0,1,f):N==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(l.autoClear||L)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function M(D,L){const P=E(L);P&&(P.isCubeTexture||P.mapping===gh)?(_===void 0&&(_=new ur(new Zu(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:yl(Ma.backgroundCube.uniforms),vertexShader:Ma.backgroundCube.vertexShader,fragmentShader:Ma.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(N,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),Ps.copy(L.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(cw.makeRotationFromEuler(Ps)),_.material.toneMapped=Le.getTransfer(P.colorSpace)!==qe,(x!==P||g!==P.version||y!==l.toneMapping)&&(_.material.needsUpdate=!0,x=P,g=P.version,y=l.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new ur(new Sh(2,2),new cr({name:"BackgroundMaterial",uniforms:yl(Ma.background.uniforms),vertexShader:Ma.background.vertexShader,fragmentShader:Ma.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Le.getTransfer(P.colorSpace)!==qe,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||g!==P.version||y!==l.toneMapping)&&(m.material.needsUpdate=!0,x=P,g=P.version,y=l.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function v(D,L){D.getRGB(Xf,M1(l)),a.buffers.color.setClear(Xf.r,Xf.g,Xf.b,L,f)}function w(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,L=1){h.set(D),p=L,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,v(h,p)},render:b,addToRenderList:M,dispose:w}}function hw(l,t){const i=l.getParameter(l.MAX_VERTEX_ATTRIBS),a={},s=g(null);let u=s,f=!1;function h(C,H,K,it,ht){let st=!1;const k=x(it,K,H);u!==k&&(u=k,m(u.object)),st=y(C,it,K,ht),st&&E(C,it,K,ht),ht!==null&&t.update(ht,l.ELEMENT_ARRAY_BUFFER),(st||f)&&(f=!1,L(C,H,K,it),ht!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function p(){return l.createVertexArray()}function m(C){return l.bindVertexArray(C)}function _(C){return l.deleteVertexArray(C)}function x(C,H,K){const it=K.wireframe===!0;let ht=a[C.id];ht===void 0&&(ht={},a[C.id]=ht);let st=ht[H.id];st===void 0&&(st={},ht[H.id]=st);let k=st[it];return k===void 0&&(k=g(p()),st[it]=k),k}function g(C){const H=[],K=[],it=[];for(let ht=0;ht<i;ht++)H[ht]=0,K[ht]=0,it[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:it,object:C,attributes:{},index:null}}function y(C,H,K,it){const ht=u.attributes,st=H.attributes;let k=0;const et=K.getAttributes();for(const j in et)if(et[j].location>=0){const _t=ht[j];let Bt=st[j];if(Bt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Bt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Bt=C.instanceColor)),_t===void 0||_t.attribute!==Bt||Bt&&_t.data!==Bt.data)return!0;k++}return u.attributesNum!==k||u.index!==it}function E(C,H,K,it){const ht={},st=H.attributes;let k=0;const et=K.getAttributes();for(const j in et)if(et[j].location>=0){let _t=st[j];_t===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor));const Bt={};Bt.attribute=_t,_t&&_t.data&&(Bt.data=_t.data),ht[j]=Bt,k++}u.attributes=ht,u.attributesNum=k,u.index=it}function b(){const C=u.newAttributes;for(let H=0,K=C.length;H<K;H++)C[H]=0}function M(C){v(C,0)}function v(C,H){const K=u.newAttributes,it=u.enabledAttributes,ht=u.attributeDivisors;K[C]=1,it[C]===0&&(l.enableVertexAttribArray(C),it[C]=1),ht[C]!==H&&(l.vertexAttribDivisor(C,H),ht[C]=H)}function w(){const C=u.newAttributes,H=u.enabledAttributes;for(let K=0,it=H.length;K<it;K++)H[K]!==C[K]&&(l.disableVertexAttribArray(K),H[K]=0)}function D(C,H,K,it,ht,st,k){k===!0?l.vertexAttribIPointer(C,H,K,ht,st):l.vertexAttribPointer(C,H,K,it,ht,st)}function L(C,H,K,it){b();const ht=it.attributes,st=K.getAttributes(),k=H.defaultAttributeValues;for(const et in st){const j=st[et];if(j.location>=0){let xt=ht[et];if(xt===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const _t=xt.normalized,Bt=xt.itemSize,te=t.get(xt);if(te===void 0)continue;const xe=te.buffer,B=te.type,ct=te.bytesPerElement,$=B===l.INT||B===l.UNSIGNED_INT||xt.gpuType===c_;if(xt.isInterleavedBufferAttribute){const at=xt.data,yt=at.stride,Ot=xt.offset;if(at.isInstancedInterleavedBuffer){for(let At=0;At<j.locationSize;At++)v(j.location+At,at.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let At=0;At<j.locationSize;At++)M(j.location+At);l.bindBuffer(l.ARRAY_BUFFER,xe);for(let At=0;At<j.locationSize;At++)D(j.location+At,Bt/j.locationSize,B,_t,yt*ct,(Ot+Bt/j.locationSize*At)*ct,$)}else{if(xt.isInstancedBufferAttribute){for(let at=0;at<j.locationSize;at++)v(j.location+at,xt.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let at=0;at<j.locationSize;at++)M(j.location+at);l.bindBuffer(l.ARRAY_BUFFER,xe);for(let at=0;at<j.locationSize;at++)D(j.location+at,Bt/j.locationSize,B,_t,Bt*ct,Bt/j.locationSize*at*ct,$)}}else if(k!==void 0){const _t=k[et];if(_t!==void 0)switch(_t.length){case 2:l.vertexAttrib2fv(j.location,_t);break;case 3:l.vertexAttrib3fv(j.location,_t);break;case 4:l.vertexAttrib4fv(j.location,_t);break;default:l.vertexAttrib1fv(j.location,_t)}}}}w()}function P(){F();for(const C in a){const H=a[C];for(const K in H){const it=H[K];for(const ht in it)_(it[ht].object),delete it[ht];delete H[K]}delete a[C]}}function N(C){if(a[C.id]===void 0)return;const H=a[C.id];for(const K in H){const it=H[K];for(const ht in it)_(it[ht].object),delete it[ht];delete H[K]}delete a[C.id]}function O(C){for(const H in a){const K=a[H];if(K[C.id]===void 0)continue;const it=K[C.id];for(const ht in it)_(it[ht].object),delete it[ht];delete K[C.id]}}function F(){R(),f=!0,u!==s&&(u=s,m(u.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:F,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:M,disableUnusedAttributes:w}}function dw(l,t,i){let a;function s(m){a=m}function u(m,_){l.drawArrays(a,m,_),i.update(_,a,1)}function f(m,_,x){x!==0&&(l.drawArraysInstanced(a,m,_,x),i.update(_,a,x))}function h(m,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,_,0,x);let y=0;for(let E=0;E<x;E++)y+=_[E];i.update(y,a,1)}function p(m,_,x,g){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)f(m[E],_[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(a,m,0,_,0,g,0,x);let E=0;for(let b=0;b<x;b++)E+=_[b]*g[b];i.update(E,a,1)}}this.setMode=s,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function pw(l,t,i,a){let s;function u(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=l.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function f(O){return!(O!==la&&a.convert(O)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const F=O===Ml&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==or&&a.convert(O)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==nr&&!F)}function p(O){if(O==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(fe("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),E=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=l.getParameter(l.MAX_TEXTURE_SIZE),M=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),v=l.getParameter(l.MAX_VERTEX_ATTRIBS),w=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),D=l.getParameter(l.MAX_VARYING_VECTORS),L=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,N=l.getParameter(l.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:L,vertexTextures:P,maxSamples:N}}function mw(l){const t=this;let i=null,a=0,s=!1,u=!1;const f=new Fs,h=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||a!==0||s;return s=g,a=x.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const E=x.clippingPlanes,b=x.clipIntersection,M=x.clipShadows,v=l.get(x);if(!s||E===null||E.length===0||u&&!M)u?_(null):m();else{const w=u?0:a,D=w*4;let L=v.clippingState||null;p.value=L,L=_(E,g,D,y);for(let P=0;P!==D;++P)L[P]=i[P];v.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(x,g,y,E){const b=x!==null?x.length:0;let M=null;if(b!==0){if(M=p.value,E!==!0||M===null){const v=y+b*4,w=g.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<v)&&(M=new Float32Array(v));for(let D=0,L=y;D!==b;++D,L+=4)f.copy(x[D]).applyMatrix4(w,h),f.normal.toArray(M,L),M[L+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function _w(l){let t=new WeakMap;function i(f,h){return h===fm?f.mapping=gl:h===hm&&(f.mapping=vl),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===fm||h===hm)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new d2(p.height);return m.fromEquirectangularTexture(l,f),t.set(f,m),f.addEventListener("dispose",s),i(m.texture,f.mapping)}else return null}}return f}function s(f){const h=f.target;h.removeEventListener("dispose",s);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const Qr=4,Uy=[.125,.215,.35,.446,.526,.582],Hs=20,xw=256,Eu=new A2,Ny=new We;let N0=null,L0=0,O0=0,P0=!1;const gw=new lt;class Ly{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,a=.1,s=100,u={}){const{size:f=256,position:h=gw}=u;N0=this._renderer.getRenderTarget(),L0=this._renderer.getActiveCubeFace(),O0=this._renderer.getActiveMipmapLevel(),P0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Py(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(N0,L0,O0),this._renderer.xr.enabled=P0,t.scissorTest=!1,tl(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===gl||t.mapping===vl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),N0=this._renderer.getRenderTarget(),L0=this._renderer.getActiveCubeFace(),O0=this._renderer.getActiveMipmapLevel(),P0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:Ml,format:la,colorSpace:Sl,depthBuffer:!1},s=Oy(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oy(t,i,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vw(u)),this._blurMaterial=yw(u,t,i),this._ggxMaterial=Sw(u,t,i)}return s}_compileMaterial(t){const i=new ur(new fr,t);this._renderer.compile(i,Eu)}_sceneToCubeUV(t,i,a,s,u){const p=new Wi(90,1,i,a),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(Ny),x.toneMapping=ts,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ur(new Zu,new S_({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,M=b.material;let v=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,v=!0):(M.color.copy(Ny),v=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(p.up.set(0,m[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[D],u.y,u.z)):L===1?(p.up.set(0,0,m[D]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[D],u.z)):(p.up.set(0,m[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[D]));const P=this._cubeSize;tl(s,L*P,D>2?P:0,P,P),x.setRenderTarget(s),v&&x.render(b,p),x.render(t,p)}x.toneMapping=y,x.autoClear=g,t.background=w}_textureToCubeUV(t,i){const a=this._renderer,s=t.mapping===gl||t.mapping===vl;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Py());const u=s?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;tl(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(f,Eu)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const s=this._lodMeshes.length;for(let u=1;u<s;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=a}_applyGGXFilter(t,i,a){const s=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[a];h.material=f;const p=f.uniforms,m=a/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(m*m-_*_),g=.05+m*.95,y=x*g,{_lodMax:E}=this,b=this._sizeLods[a],M=3*b*(a>E-Qr?a-E+Qr:0),v=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=E-i,tl(u,M,v,3*b,2*b),s.setRenderTarget(u),s.render(h,Eu),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=E-a,tl(t,M,v,3*b,2*b),s.setRenderTarget(t),s.render(h,Eu)}_blur(t,i,a,s,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,a,s,"latitudinal",u),this._halfBlur(f,t,a,a,s,"longitudinal",u)}_halfBlur(t,i,a,s,u,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&mn("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[s];x.material=m;const g=m.uniforms,y=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Hs-1),b=u/E,M=isFinite(u)?1+Math.floor(_*b):Hs;M>Hs&&fe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hs}`);const v=[];let w=0;for(let O=0;O<Hs;++O){const F=O/b,R=Math.exp(-F*F/2);v.push(R),O===0?w+=R:O<M&&(w+=2*R)}for(let O=0;O<v.length;O++)v[O]=v[O]/w;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=v,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:D}=this;g.dTheta.value=E,g.mipInt.value=D-a;const L=this._sizeLods[s],P=3*L*(s>D-Qr?s-D+Qr:0),N=4*(this._cubeSize-L);tl(i,P,N,3*L,2*L),p.setRenderTarget(i),p.render(x,Eu)}}function vw(l){const t=[],i=[],a=[];let s=l;const u=l-Qr+1+Uy.length;for(let f=0;f<u;f++){const h=Math.pow(2,s);t.push(h);let p=1/h;f>l-Qr?p=Uy[f-l+Qr-1]:f===0&&(p=0),i.push(p);const m=1/(h-2),_=-m,x=1+m,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,E=6,b=3,M=2,v=1,w=new Float32Array(b*E*y),D=new Float32Array(M*E*y),L=new Float32Array(v*E*y);for(let N=0;N<y;N++){const O=N%3*2/3-1,F=N>2?0:-1,R=[O,F,0,O+2/3,F,0,O+2/3,F+1,0,O,F,0,O+2/3,F+1,0,O,F+1,0];w.set(R,b*E*N),D.set(g,M*E*N);const C=[N,N,N,N,N,N];L.set(C,v*E*N)}const P=new fr;P.setAttribute("position",new Aa(w,b)),P.setAttribute("uv",new Aa(D,M)),P.setAttribute("faceIndex",new Aa(L,v)),a.push(new ur(P,null)),s>Qr&&s--}return{lodMeshes:a,sizeLods:t,sigmas:i}}function Oy(l,t,i){const a=new Ks(l,t,i);return a.texture.mapping=gh,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function tl(l,t,i,a,s){l.viewport.set(t,i,a,s),l.scissor.set(t,i,a,s)}function Sw(l,t,i){return new cr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function yw(l,t,i){const a=new Float32Array(Hs),s=new lt(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Py(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function zy(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mw(l){let t=new WeakMap,i=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===fm||p===hm,_=p===gl||p===vl;if(m||_){let x=t.get(h);const g=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Ly(l)),x=m?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const y=h.image;return m&&y&&y.height>0||_&&y&&s(y)?(i===null&&(i=new Ly(l)),x=m?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function s(h){let p=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function bw(l){const t={};function i(a){if(t[a]!==void 0)return t[a];const s=l.getExtension(a);return t[a]=s,s}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const s=i(a);return s===null&&Yu("WebGLRenderer: "+a+" extension not supported."),s}}}function Ew(l,t,i,a){const s={},u=new WeakMap;function f(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete s[g.id];const y=u.get(g);y&&(t.remove(y),u.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(x,g){return s[g.id]===!0||(g.addEventListener("dispose",f),s[g.id]=!0,i.memory.geometries++),g}function p(x){const g=x.attributes;for(const y in g)t.update(g[y],l.ARRAY_BUFFER)}function m(x){const g=[],y=x.index,E=x.attributes.position;let b=0;if(y!==null){const w=y.array;b=y.version;for(let D=0,L=w.length;D<L;D+=3){const P=w[D+0],N=w[D+1],O=w[D+2];g.push(P,N,N,O,O,P)}}else if(E!==void 0){const w=E.array;b=E.version;for(let D=0,L=w.length/3-1;D<L;D+=3){const P=D+0,N=D+1,O=D+2;g.push(P,N,N,O,O,P)}}else return;const M=new(_1(g)?y1:S1)(g,1);M.version=b;const v=u.get(x);v&&t.remove(v),u.set(x,M)}function _(x){const g=u.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&m(x)}else m(x);return u.get(x)}return{get:h,update:p,getWireframeAttribute:_}}function Tw(l,t,i){let a;function s(g){a=g}let u,f;function h(g){u=g.type,f=g.bytesPerElement}function p(g,y){l.drawElements(a,y,u,g*f),i.update(y,a,1)}function m(g,y,E){E!==0&&(l.drawElementsInstanced(a,y,u,g*f,E),i.update(y,a,E))}function _(g,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,u,g,0,E);let M=0;for(let v=0;v<E;v++)M+=y[v];i.update(M,a,1)}function x(g,y,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<g.length;v++)m(g[v]/f,y[v],b[v]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,u,g,0,b,0,E);let v=0;for(let w=0;w<E;w++)v+=y[w]*b[w];i.update(v,a,1)}}this.setMode=s,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function Aw(l){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,f,h){switch(i.calls++,f){case l.TRIANGLES:i.triangles+=h*(u/3);break;case l.LINES:i.lines+=h*(u/2);break;case l.LINE_STRIP:i.lines+=h*(u-1);break;case l.LINE_LOOP:i.lines+=h*u;break;case l.POINTS:i.points+=h*u;break;default:mn("WebGLInfo: Unknown draw mode:",f);break}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:s,update:a}}function Rw(l,t,i){const a=new WeakMap,s=new _n;function u(f,h,p){const m=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==x){let C=function(){F.dispose(),a.delete(h),h.removeEventListener("dispose",C)};var y=C;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let L=0;E===!0&&(L=1),b===!0&&(L=2),M===!0&&(L=3);let P=h.attributes.position.count*L,N=1;P>t.maxTextureSize&&(N=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*N*4*x),F=new x1(O,P,N,x);F.type=nr,F.needsUpdate=!0;const R=L*4;for(let H=0;H<x;H++){const K=v[H],it=w[H],ht=D[H],st=P*N*4*H;for(let k=0;k<K.count;k++){const et=k*R;E===!0&&(s.fromBufferAttribute(K,k),O[st+et+0]=s.x,O[st+et+1]=s.y,O[st+et+2]=s.z,O[st+et+3]=0),b===!0&&(s.fromBufferAttribute(it,k),O[st+et+4]=s.x,O[st+et+5]=s.y,O[st+et+6]=s.z,O[st+et+7]=0),M===!0&&(s.fromBufferAttribute(ht,k),O[st+et+8]=s.x,O[st+et+9]=s.y,O[st+et+10]=s.z,O[st+et+11]=ht.itemSize===4?s.w:1)}}g={count:x,texture:F,size:new be(P,N)},a.set(h,g),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(l,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(l,"morphTargetBaseInfluence",b),p.getUniforms().setValue(l,"morphTargetInfluences",m)}p.getUniforms().setValue(l,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(l,"morphTargetsTextureSize",g.size)}return{update:u}}function Cw(l,t,i,a){let s=new WeakMap;function u(p){const m=a.render.frame,_=p.geometry,x=t.get(p,_);if(s.get(x)!==m&&(t.update(x),s.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),s.get(p)!==m&&(i.update(p.instanceMatrix,l.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,l.ARRAY_BUFFER),s.set(p,m))),p.isSkinnedMesh){const g=p.skeleton;s.get(g)!==m&&(g.update(),s.set(g,m))}return x}function f(){s=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const w1=new Zn,Iy=new A1(1,1),D1=new x1,U1=new ZA,N1=new E1,Fy=[],By=[],Hy=new Float32Array(16),Vy=new Float32Array(9),Gy=new Float32Array(4);function Tl(l,t,i){const a=l[0];if(a<=0||a>0)return l;const s=t*i;let u=Fy[s];if(u===void 0&&(u=new Float32Array(s),Fy[s]=u),t!==0){a.toArray(u,0);for(let f=1,h=0;f!==t;++f)h+=i,l[f].toArray(u,h)}return u}function Rn(l,t){if(l.length!==t.length)return!1;for(let i=0,a=l.length;i<a;i++)if(l[i]!==t[i])return!1;return!0}function Cn(l,t){for(let i=0,a=t.length;i<a;i++)l[i]=t[i]}function Mh(l,t){let i=By[t];i===void 0&&(i=new Int32Array(t),By[t]=i);for(let a=0;a!==t;++a)i[a]=l.allocateTextureUnit();return i}function ww(l,t){const i=this.cache;i[0]!==t&&(l.uniform1f(this.addr,t),i[0]=t)}function Dw(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;l.uniform2fv(this.addr,t),Cn(i,t)}}function Uw(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Rn(i,t))return;l.uniform3fv(this.addr,t),Cn(i,t)}}function Nw(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;l.uniform4fv(this.addr,t),Cn(i,t)}}function Lw(l,t){const i=this.cache,a=t.elements;if(a===void 0){if(Rn(i,t))return;l.uniformMatrix2fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,a))return;Gy.set(a),l.uniformMatrix2fv(this.addr,!1,Gy),Cn(i,a)}}function Ow(l,t){const i=this.cache,a=t.elements;if(a===void 0){if(Rn(i,t))return;l.uniformMatrix3fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,a))return;Vy.set(a),l.uniformMatrix3fv(this.addr,!1,Vy),Cn(i,a)}}function Pw(l,t){const i=this.cache,a=t.elements;if(a===void 0){if(Rn(i,t))return;l.uniformMatrix4fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,a))return;Hy.set(a),l.uniformMatrix4fv(this.addr,!1,Hy),Cn(i,a)}}function zw(l,t){const i=this.cache;i[0]!==t&&(l.uniform1i(this.addr,t),i[0]=t)}function Iw(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;l.uniform2iv(this.addr,t),Cn(i,t)}}function Fw(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;l.uniform3iv(this.addr,t),Cn(i,t)}}function Bw(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;l.uniform4iv(this.addr,t),Cn(i,t)}}function Hw(l,t){const i=this.cache;i[0]!==t&&(l.uniform1ui(this.addr,t),i[0]=t)}function Vw(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;l.uniform2uiv(this.addr,t),Cn(i,t)}}function Gw(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;l.uniform3uiv(this.addr,t),Cn(i,t)}}function Xw(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;l.uniform4uiv(this.addr,t),Cn(i,t)}}function kw(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s);let u;this.type===l.SAMPLER_2D_SHADOW?(Iy.compareFunction=m1,u=Iy):u=w1,i.setTexture2D(t||u,s)}function Yw(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s),i.setTexture3D(t||U1,s)}function qw(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s),i.setTextureCube(t||N1,s)}function Ww(l,t,i){const a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(l.uniform1i(this.addr,s),a[0]=s),i.setTexture2DArray(t||D1,s)}function jw(l){switch(l){case 5126:return ww;case 35664:return Dw;case 35665:return Uw;case 35666:return Nw;case 35674:return Lw;case 35675:return Ow;case 35676:return Pw;case 5124:case 35670:return zw;case 35667:case 35671:return Iw;case 35668:case 35672:return Fw;case 35669:case 35673:return Bw;case 5125:return Hw;case 36294:return Vw;case 36295:return Gw;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return Ww}}function Zw(l,t){l.uniform1fv(this.addr,t)}function Kw(l,t){const i=Tl(t,this.size,2);l.uniform2fv(this.addr,i)}function Qw(l,t){const i=Tl(t,this.size,3);l.uniform3fv(this.addr,i)}function Jw(l,t){const i=Tl(t,this.size,4);l.uniform4fv(this.addr,i)}function $w(l,t){const i=Tl(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,i)}function tD(l,t){const i=Tl(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,i)}function eD(l,t){const i=Tl(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,i)}function nD(l,t){l.uniform1iv(this.addr,t)}function iD(l,t){l.uniform2iv(this.addr,t)}function aD(l,t){l.uniform3iv(this.addr,t)}function rD(l,t){l.uniform4iv(this.addr,t)}function sD(l,t){l.uniform1uiv(this.addr,t)}function oD(l,t){l.uniform2uiv(this.addr,t)}function lD(l,t){l.uniform3uiv(this.addr,t)}function uD(l,t){l.uniform4uiv(this.addr,t)}function cD(l,t,i){const a=this.cache,s=t.length,u=Mh(i,s);Rn(a,u)||(l.uniform1iv(this.addr,u),Cn(a,u));for(let f=0;f!==s;++f)i.setTexture2D(t[f]||w1,u[f])}function fD(l,t,i){const a=this.cache,s=t.length,u=Mh(i,s);Rn(a,u)||(l.uniform1iv(this.addr,u),Cn(a,u));for(let f=0;f!==s;++f)i.setTexture3D(t[f]||U1,u[f])}function hD(l,t,i){const a=this.cache,s=t.length,u=Mh(i,s);Rn(a,u)||(l.uniform1iv(this.addr,u),Cn(a,u));for(let f=0;f!==s;++f)i.setTextureCube(t[f]||N1,u[f])}function dD(l,t,i){const a=this.cache,s=t.length,u=Mh(i,s);Rn(a,u)||(l.uniform1iv(this.addr,u),Cn(a,u));for(let f=0;f!==s;++f)i.setTexture2DArray(t[f]||D1,u[f])}function pD(l){switch(l){case 5126:return Zw;case 35664:return Kw;case 35665:return Qw;case 35666:return Jw;case 35674:return $w;case 35675:return tD;case 35676:return eD;case 5124:case 35670:return nD;case 35667:case 35671:return iD;case 35668:case 35672:return aD;case 35669:case 35673:return rD;case 5125:return sD;case 36294:return oD;case 36295:return lD;case 36296:return uD;case 35678:case 36198:case 36298:case 36306:case 35682:return cD;case 35679:case 36299:case 36307:return fD;case 35680:case 36300:case 36308:case 36293:return hD;case 36289:case 36303:case 36311:case 36292:return dD}}class mD{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=jw(i.type)}}class _D{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pD(i.type)}}class xD{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const s=this.seq;for(let u=0,f=s.length;u!==f;++u){const h=s[u];h.setValue(t,i[h.id],a)}}}const z0=/(\w+)(\])?(\[|\.)?/g;function Xy(l,t){l.seq.push(t),l.map[t.id]=t}function gD(l,t,i){const a=l.name,s=a.length;for(z0.lastIndex=0;;){const u=z0.exec(a),f=z0.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===s){Xy(i,m===void 0?new mD(h,l,t):new _D(h,l,t));break}else{let x=i.map[h];x===void 0&&(x=new xD(h),Xy(i,x)),i=x}}}class ah{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const u=t.getActiveUniform(i,s),f=t.getUniformLocation(i,u.name);gD(u,f,this)}}setValue(t,i,a,s){const u=this.map[i];u!==void 0&&u.setValue(t,a,s)}setOptional(t,i,a){const s=i[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,i,a,s){for(let u=0,f=i.length;u!==f;++u){const h=i[u],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,s)}}static seqWithValue(t,i){const a=[];for(let s=0,u=t.length;s!==u;++s){const f=t[s];f.id in i&&a.push(f)}return a}}function ky(l,t,i){const a=l.createShader(t);return l.shaderSource(a,i),l.compileShader(a),a}const vD=37297;let SD=0;function yD(l,t){const i=l.split(`
`),a=[],s=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=s;f<u;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const Yy=new pe;function MD(l){Le._getMatrix(Yy,Le.workingColorSpace,l);const t=`mat3( ${Yy.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(l)){case dh:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",l),[t,"LinearTransferOETF"]}}function qy(l,t,i){const a=l.getShaderParameter(t,l.COMPILE_STATUS),u=(l.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+yD(l.getShaderSource(t),h)}else return u}function bD(l,t){const i=MD(t);return[`vec4 ${l}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ED(l,t){let i;switch(t){case oA:i="Linear";break;case lA:i="Reinhard";break;case uA:i="Cineon";break;case cA:i="ACESFilmic";break;case hA:i="AgX";break;case dA:i="Neutral";break;case fA:i="Custom";break;default:fe("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+l+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const kf=new lt;function TD(){Le.getLuminanceCoefficients(kf);const l=kf.x.toFixed(4),t=kf.y.toFixed(4),i=kf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AD(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ru).join(`
`)}function RD(l){const t=[];for(const i in l){const a=l[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function CD(l,t){const i={},a=l.getProgramParameter(t,l.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const u=l.getActiveAttrib(t,s),f=u.name;let h=1;u.type===l.FLOAT_MAT2&&(h=2),u.type===l.FLOAT_MAT3&&(h=3),u.type===l.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:l.getAttribLocation(t,f),locationSize:h}}return i}function Ru(l){return l!==""}function Wy(l,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jy(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xm(l){return l.replace(wD,UD)}const DD=new Map;function UD(l,t){let i=_e[t];if(i===void 0){const a=DD.get(t);if(a!==void 0)i=_e[a],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Xm(i)}const ND=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zy(l){return l.replace(ND,LD)}function LD(l,t,i,a){let s="";for(let u=parseInt(t);u<parseInt(i);u++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return s}function Ky(l){let t=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function OD(l){let t="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===r1?t="SHADOWMAP_TYPE_PCF":l.shadowMapType===HT?t="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Qa&&(t="SHADOWMAP_TYPE_VSM"),t}function PD(l){let t="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case gl:case vl:t="ENVMAP_TYPE_CUBE";break;case gh:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zD(l){let t="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case vl:t="ENVMAP_MODE_REFRACTION";break}return t}function ID(l){let t="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case s1:t="ENVMAP_BLENDING_MULTIPLY";break;case rA:t="ENVMAP_BLENDING_MIX";break;case sA:t="ENVMAP_BLENDING_ADD";break}return t}function FD(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function BD(l,t,i,a){const s=l.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=OD(i),m=PD(i),_=zD(i),x=ID(i),g=FD(i),y=AD(i),E=RD(u),b=s.createProgram();let M,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ru).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ru).join(`
`),v.length>0&&(v+=`
`)):(M=[Ky(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ru).join(`
`),v=[Ky(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ts?"#define TONE_MAPPING":"",i.toneMapping!==ts?_e.tonemapping_pars_fragment:"",i.toneMapping!==ts?ED("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,bD("linearToOutputTexel",i.outputColorSpace),TD(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ru).join(`
`)),f=Xm(f),f=Wy(f,i),f=jy(f,i),h=Xm(h),h=Wy(h,i),h=jy(h,i),f=Zy(f),h=Zy(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===uy?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===uy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=w+M+f,L=w+v+h,P=ky(s,s.VERTEX_SHADER,D),N=ky(s,s.FRAGMENT_SHADER,L);s.attachShader(b,P),s.attachShader(b,N),i.index0AttributeName!==void 0?s.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function O(H){if(l.debug.checkShaderErrors){const K=s.getProgramInfoLog(b)||"",it=s.getShaderInfoLog(P)||"",ht=s.getShaderInfoLog(N)||"",st=K.trim(),k=it.trim(),et=ht.trim();let j=!0,xt=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(s,b,P,N);else{const _t=qy(s,P,"vertex"),Bt=qy(s,N,"fragment");mn("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+_t+`
`+Bt)}else st!==""?fe("WebGLProgram: Program Info Log:",st):(k===""||et==="")&&(xt=!1);xt&&(H.diagnostics={runnable:j,programLog:st,vertexShader:{log:k,prefix:M},fragmentShader:{log:et,prefix:v}})}s.deleteShader(P),s.deleteShader(N),F=new ah(s,b),R=CD(s,b)}let F;this.getUniforms=function(){return F===void 0&&O(this),F};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(b,vD)),C},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=SD++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=N,this}let HD=0;class VD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(i),u=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(s)===!1&&(f.add(s),s.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new GD(t),i.set(t,a)),a}}class GD{constructor(t){this.id=HD++,this.code=t,this.usedTimes=0}}function XD(l,t,i,a,s,u,f){const h=new g1,p=new VD,m=new Set,_=[],x=s.logarithmicDepthBuffer,g=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return m.add(R),R===0?"uv":`uv${R}`}function M(R,C,H,K,it){const ht=K.fog,st=it.geometry,k=R.isMeshStandardMaterial?K.environment:null,et=(R.isMeshStandardMaterial?i:t).get(R.envMap||k),j=et&&et.mapping===gh?et.image.height:null,xt=E[R.type];R.precision!==null&&(y=s.getMaxPrecision(R.precision),y!==R.precision&&fe("WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const _t=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Bt=_t!==void 0?_t.length:0;let te=0;st.morphAttributes.position!==void 0&&(te=1),st.morphAttributes.normal!==void 0&&(te=2),st.morphAttributes.color!==void 0&&(te=3);let xe,B,ct,$;if(xt){const we=Ma[xt];xe=we.vertexShader,B=we.fragmentShader}else xe=R.vertexShader,B=R.fragmentShader,p.update(R),ct=p.getVertexShaderID(R),$=p.getFragmentShaderID(R);const at=l.getRenderTarget(),yt=l.state.buffers.depth.getReversed(),Ot=it.isInstancedMesh===!0,At=it.isBatchedMesh===!0,Mt=!!R.map,Vt=!!R.matcap,oe=!!et,ke=!!R.aoMap,G=!!R.lightMap,le=!!R.bumpMap,Qt=!!R.normalMap,$t=!!R.displacementMap,It=!!R.emissiveMap,Fe=!!R.metalnessMap,Yt=!!R.roughnessMap,re=R.anisotropy>0,z=R.clearcoat>0,A=R.dispersion>0,nt=R.iridescence>0,mt=R.sheen>0,vt=R.transmission>0,ft=re&&!!R.anisotropyMap,Gt=z&&!!R.clearcoatMap,Ut=z&&!!R.clearcoatNormalMap,Zt=z&&!!R.clearcoatRoughnessMap,qt=nt&&!!R.iridescenceMap,St=nt&&!!R.iridescenceThicknessMap,Rt=mt&&!!R.sheenColorMap,ee=mt&&!!R.sheenRoughnessMap,Jt=!!R.specularMap,Ft=!!R.specularColorMap,se=!!R.specularIntensityMap,V=vt&&!!R.transmissionMap,Nt=vt&&!!R.thicknessMap,Ct=!!R.gradientMap,wt=!!R.alphaMap,bt=R.alphaTest>0,gt=!!R.alphaHash,Xt=!!R.extensions;let ue=ts;R.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ue=l.toneMapping);const je={shaderID:xt,shaderType:R.type,shaderName:R.name,vertexShader:xe,fragmentShader:B,defines:R.defines,customVertexShaderID:ct,customFragmentShaderID:$,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:At,batchingColor:At&&it._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&it.instanceColor!==null,instancingMorph:Ot&&it.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:at===null?l.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Sl,alphaToCoverage:!!R.alphaToCoverage,map:Mt,matcap:Vt,envMap:oe,envMapMode:oe&&et.mapping,envMapCubeUVHeight:j,aoMap:ke,lightMap:G,bumpMap:le,normalMap:Qt,displacementMap:g&&$t,emissiveMap:It,normalMapObjectSpace:Qt&&R.normalMapType===gA,normalMapTangentSpace:Qt&&R.normalMapType===xA,metalnessMap:Fe,roughnessMap:Yt,anisotropy:re,anisotropyMap:ft,clearcoat:z,clearcoatMap:Gt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Zt,dispersion:A,iridescence:nt,iridescenceMap:qt,iridescenceThicknessMap:St,sheen:mt,sheenColorMap:Rt,sheenRoughnessMap:ee,specularMap:Jt,specularColorMap:Ft,specularIntensityMap:se,transmission:vt,transmissionMap:V,thicknessMap:Nt,gradientMap:Ct,opaque:R.transparent===!1&&R.blending===ul&&R.alphaToCoverage===!1,alphaMap:wt,alphaTest:bt,alphaHash:gt,combine:R.combine,mapUv:Mt&&b(R.map.channel),aoMapUv:ke&&b(R.aoMap.channel),lightMapUv:G&&b(R.lightMap.channel),bumpMapUv:le&&b(R.bumpMap.channel),normalMapUv:Qt&&b(R.normalMap.channel),displacementMapUv:$t&&b(R.displacementMap.channel),emissiveMapUv:It&&b(R.emissiveMap.channel),metalnessMapUv:Fe&&b(R.metalnessMap.channel),roughnessMapUv:Yt&&b(R.roughnessMap.channel),anisotropyMapUv:ft&&b(R.anisotropyMap.channel),clearcoatMapUv:Gt&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:St&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:ee&&b(R.sheenRoughnessMap.channel),specularMapUv:Jt&&b(R.specularMap.channel),specularColorMapUv:Ft&&b(R.specularColorMap.channel),specularIntensityMapUv:se&&b(R.specularIntensityMap.channel),transmissionMapUv:V&&b(R.transmissionMap.channel),thicknessMapUv:Nt&&b(R.thicknessMap.channel),alphaMapUv:wt&&b(R.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Qt||re),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!st.attributes.uv&&(Mt||wt),fog:!!ht,useFog:R.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:yt,skinning:it.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:l.shadowMap.enabled&&H.length>0,shadowMapType:l.shadowMap.type,toneMapping:ue,decodeVideoTexture:Mt&&R.map.isVideoTexture===!0&&Le.getTransfer(R.map.colorSpace)===qe,decodeVideoTextureEmissive:It&&R.emissiveMap.isVideoTexture===!0&&Le.getTransfer(R.emissiveMap.colorSpace)===qe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===tr,flipSided:R.side===ai,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Xt&&R.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&R.extensions.multiDraw===!0||At)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function v(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)C.push(H),C.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(w(C,R),D(C,R),C.push(l.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function w(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function D(R,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),R.push(h.mask)}function L(R){const C=E[R.type];let H;if(C){const K=Ma[C];H=u2.clone(K.uniforms)}else H=R.uniforms;return H}function P(R,C){let H;for(let K=0,it=_.length;K<it;K++){const ht=_[K];if(ht.cacheKey===C){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new BD(l,C,R,u),_.push(H)),H}function N(R){if(--R.usedTimes===0){const C=_.indexOf(R);_[C]=_[_.length-1],_.pop(),R.destroy()}}function O(R){p.remove(R)}function F(){p.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:L,acquireProgram:P,releaseProgram:N,releaseShaderCache:O,programs:_,dispose:F}}function kD(){let l=new WeakMap;function t(f){return l.has(f)}function i(f){let h=l.get(f);return h===void 0&&(h={},l.set(f,h)),h}function a(f){l.delete(f)}function s(f,h,p){l.get(f)[h]=p}function u(){l=new WeakMap}return{has:t,get:i,remove:a,update:s,dispose:u}}function YD(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function Qy(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function Jy(){const l=[];let t=0;const i=[],a=[],s=[];function u(){t=0,i.length=0,a.length=0,s.length=0}function f(x,g,y,E,b,M){let v=l[t];return v===void 0?(v={id:x.id,object:x,geometry:g,material:y,groupOrder:E,renderOrder:x.renderOrder,z:b,group:M},l[t]=v):(v.id=x.id,v.object=x,v.geometry=g,v.material=y,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=b,v.group=M),t++,v}function h(x,g,y,E,b,M){const v=f(x,g,y,E,b,M);y.transmission>0?a.push(v):y.transparent===!0?s.push(v):i.push(v)}function p(x,g,y,E,b,M){const v=f(x,g,y,E,b,M);y.transmission>0?a.unshift(v):y.transparent===!0?s.unshift(v):i.unshift(v)}function m(x,g){i.length>1&&i.sort(x||YD),a.length>1&&a.sort(g||Qy),s.length>1&&s.sort(g||Qy)}function _(){for(let x=t,g=l.length;x<g;x++){const y=l[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:a,transparent:s,init:u,push:h,unshift:p,finish:_,sort:m}}function qD(){let l=new WeakMap;function t(a,s){const u=l.get(a);let f;return u===void 0?(f=new Jy,l.set(a,[f])):s>=u.length?(f=new Jy,u.push(f)):f=u[s],f}function i(){l=new WeakMap}return{get:t,dispose:i}}function WD(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new lt,color:new We};break;case"SpotLight":i={position:new lt,direction:new lt,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new lt,color:new We,distance:0,decay:0};break;case"HemisphereLight":i={direction:new lt,skyColor:new We,groundColor:new We};break;case"RectAreaLight":i={color:new We,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return l[t.id]=i,i}}}function jD(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=i,i}}}let ZD=0;function KD(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function QD(l){const t=new WD,i=jD(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new lt);const s=new lt,u=new An,f=new An;function h(m){let _=0,x=0,g=0;for(let R=0;R<9;R++)a.probe[R].set(0,0,0);let y=0,E=0,b=0,M=0,v=0,w=0,D=0,L=0,P=0,N=0,O=0;m.sort(KD);for(let R=0,C=m.length;R<C;R++){const H=m[R],K=H.color,it=H.intensity,ht=H.distance,st=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=K.r*it,x+=K.g*it,g+=K.b*it;else if(H.isLightProbe){for(let k=0;k<9;k++)a.probe[k].addScaledVector(H.sh.coefficients[k],it);O++}else if(H.isDirectionalLight){const k=t.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const et=H.shadow,j=i.get(H);j.shadowIntensity=et.intensity,j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,a.directionalShadow[y]=j,a.directionalShadowMap[y]=st,a.directionalShadowMatrix[y]=H.shadow.matrix,w++}a.directional[y]=k,y++}else if(H.isSpotLight){const k=t.get(H);k.position.setFromMatrixPosition(H.matrixWorld),k.color.copy(K).multiplyScalar(it),k.distance=ht,k.coneCos=Math.cos(H.angle),k.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),k.decay=H.decay,a.spot[b]=k;const et=H.shadow;if(H.map&&(a.spotLightMap[P]=H.map,P++,et.updateMatrices(H),H.castShadow&&N++),a.spotLightMatrix[b]=et.matrix,H.castShadow){const j=i.get(H);j.shadowIntensity=et.intensity,j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,a.spotShadow[b]=j,a.spotShadowMap[b]=st,L++}b++}else if(H.isRectAreaLight){const k=t.get(H);k.color.copy(K).multiplyScalar(it),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=k,M++}else if(H.isPointLight){const k=t.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),k.distance=H.distance,k.decay=H.decay,H.castShadow){const et=H.shadow,j=i.get(H);j.shadowIntensity=et.intensity,j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,j.shadowCameraNear=et.camera.near,j.shadowCameraFar=et.camera.far,a.pointShadow[E]=j,a.pointShadowMap[E]=st,a.pointShadowMatrix[E]=H.shadow.matrix,D++}a.point[E]=k,E++}else if(H.isHemisphereLight){const k=t.get(H);k.skyColor.copy(H.color).multiplyScalar(it),k.groundColor.copy(H.groundColor).multiplyScalar(it),a.hemi[v]=k,v++}}M>0&&(l.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=x,a.ambient[2]=g;const F=a.hash;(F.directionalLength!==y||F.pointLength!==E||F.spotLength!==b||F.rectAreaLength!==M||F.hemiLength!==v||F.numDirectionalShadows!==w||F.numPointShadows!==D||F.numSpotShadows!==L||F.numSpotMaps!==P||F.numLightProbes!==O)&&(a.directional.length=y,a.spot.length=b,a.rectArea.length=M,a.point.length=E,a.hemi.length=v,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=w,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=L+P-N,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=O,F.directionalLength=y,F.pointLength=E,F.spotLength=b,F.rectAreaLength=M,F.hemiLength=v,F.numDirectionalShadows=w,F.numPointShadows=D,F.numSpotShadows=L,F.numSpotMaps=P,F.numLightProbes=O,a.version=ZD++)}function p(m,_){let x=0,g=0,y=0,E=0,b=0;const M=_.matrixWorldInverse;for(let v=0,w=m.length;v<w;v++){const D=m[v];if(D.isDirectionalLight){const L=a.directional[x];L.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(M),x++}else if(D.isSpotLight){const L=a.spot[y];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const L=a.rectArea[E];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),f.identity(),u.copy(D.matrixWorld),u.premultiply(M),f.extractRotation(u),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const L=a.point[g];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),g++}else if(D.isHemisphereLight){const L=a.hemi[b];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(M),b++}}}return{setup:h,setupView:p,state:a}}function $y(l){const t=new QD(l),i=[],a=[];function s(_){m.camera=_,i.length=0,a.length=0}function u(_){i.push(_)}function f(_){a.push(_)}function h(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function JD(l){let t=new WeakMap;function i(s,u=0){const f=t.get(s);let h;return f===void 0?(h=new $y(l),t.set(s,[h])):u>=f.length?(h=new $y(l),f.push(h)):h=f[u],h}function a(){t=new WeakMap}return{get:i,dispose:a}}const $D=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eU(l,t,i){let a=new T1;const s=new be,u=new be,f=new _n,h=new S2({depthPacking:_A}),p=new y2,m={},_=i.maxTextureSize,x={[is]:ai,[ai]:is,[tr]:tr},g=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:$D,fragmentShader:tU}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new fr;E.setAttribute("position",new Aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ur(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r1;let v=this.type;this.render=function(N,O,F){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;const R=l.getRenderTarget(),C=l.getActiveCubeFace(),H=l.getActiveMipmapLevel(),K=l.state;K.setBlending(ir),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const it=v!==Qa&&this.type===Qa,ht=v===Qa&&this.type!==Qa;for(let st=0,k=N.length;st<k;st++){const et=N[st],j=et.shadow;if(j===void 0){fe("WebGLShadowMap:",et,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const xt=j.getFrameExtents();if(s.multiply(xt),u.copy(j.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(u.x=Math.floor(_/xt.x),s.x=u.x*xt.x,j.mapSize.x=u.x),s.y>_&&(u.y=Math.floor(_/xt.y),s.y=u.y*xt.y,j.mapSize.y=u.y)),j.map===null||it===!0||ht===!0){const Bt=this.type!==Qa?{minFilter:Ui,magFilter:Ui}:{};j.map!==null&&j.map.dispose(),j.map=new Ks(s.x,s.y,Bt),j.map.texture.name=et.name+".shadowMap",j.camera.updateProjectionMatrix()}l.setRenderTarget(j.map),l.clear();const _t=j.getViewportCount();for(let Bt=0;Bt<_t;Bt++){const te=j.getViewport(Bt);f.set(u.x*te.x,u.y*te.y,u.x*te.z,u.y*te.w),K.viewport(f),j.updateMatrices(et,Bt),a=j.getFrustum(),L(O,F,j.camera,et,this.type)}j.isPointLightShadow!==!0&&this.type===Qa&&w(j,F),j.needsUpdate=!1}v=this.type,M.needsUpdate=!1,l.setRenderTarget(R,C,H)};function w(N,O){const F=t.update(b);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ks(s.x,s.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,l.setRenderTarget(N.mapPass),l.clear(),l.renderBufferDirect(O,null,F,g,b,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,l.setRenderTarget(N.map),l.clear(),l.renderBufferDirect(O,null,F,y,b,null)}function D(N,O,F,R){let C=null;const H=F.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)C=H;else if(C=F.isPointLight===!0?p:h,l.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=C.uuid,it=O.uuid;let ht=m[K];ht===void 0&&(ht={},m[K]=ht);let st=ht[it];st===void 0&&(st=C.clone(),ht[it]=st,O.addEventListener("dispose",P)),C=st}if(C.visible=O.visible,C.wireframe=O.wireframe,R===Qa?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:x[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,F.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=l.properties.get(C);K.light=F}return C}function L(N,O,F,R,C){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===Qa)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,N.matrixWorld);const it=t.update(N),ht=N.material;if(Array.isArray(ht)){const st=it.groups;for(let k=0,et=st.length;k<et;k++){const j=st[k],xt=ht[j.materialIndex];if(xt&&xt.visible){const _t=D(N,xt,R,C);N.onBeforeShadow(l,N,O,F,it,_t,j),l.renderBufferDirect(F,null,it,_t,N,j),N.onAfterShadow(l,N,O,F,it,_t,j)}}}else if(ht.visible){const st=D(N,ht,R,C);N.onBeforeShadow(l,N,O,F,it,st,null),l.renderBufferDirect(F,null,it,st,N,null),N.onAfterShadow(l,N,O,F,it,st,null)}}const K=N.children;for(let it=0,ht=K.length;it<ht;it++)L(K[it],O,F,R,C)}function P(N){N.target.removeEventListener("dispose",P);for(const F in m){const R=m[F],C=N.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const nU={[am]:rm,[sm]:um,[om]:cm,[xl]:lm,[rm]:am,[um]:sm,[cm]:om,[lm]:xl};function iU(l,t){function i(){let V=!1;const Nt=new _n;let Ct=null;const wt=new _n(0,0,0,0);return{setMask:function(bt){Ct!==bt&&!V&&(l.colorMask(bt,bt,bt,bt),Ct=bt)},setLocked:function(bt){V=bt},setClear:function(bt,gt,Xt,ue,je){je===!0&&(bt*=ue,gt*=ue,Xt*=ue),Nt.set(bt,gt,Xt,ue),wt.equals(Nt)===!1&&(l.clearColor(bt,gt,Xt,ue),wt.copy(Nt))},reset:function(){V=!1,Ct=null,wt.set(-1,0,0,0)}}}function a(){let V=!1,Nt=!1,Ct=null,wt=null,bt=null;return{setReversed:function(gt){if(Nt!==gt){const Xt=t.get("EXT_clip_control");gt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Nt=gt;const ue=bt;bt=null,this.setClear(ue)}},getReversed:function(){return Nt},setTest:function(gt){gt?at(l.DEPTH_TEST):yt(l.DEPTH_TEST)},setMask:function(gt){Ct!==gt&&!V&&(l.depthMask(gt),Ct=gt)},setFunc:function(gt){if(Nt&&(gt=nU[gt]),wt!==gt){switch(gt){case am:l.depthFunc(l.NEVER);break;case rm:l.depthFunc(l.ALWAYS);break;case sm:l.depthFunc(l.LESS);break;case xl:l.depthFunc(l.LEQUAL);break;case om:l.depthFunc(l.EQUAL);break;case lm:l.depthFunc(l.GEQUAL);break;case um:l.depthFunc(l.GREATER);break;case cm:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}wt=gt}},setLocked:function(gt){V=gt},setClear:function(gt){bt!==gt&&(Nt&&(gt=1-gt),l.clearDepth(gt),bt=gt)},reset:function(){V=!1,Ct=null,wt=null,bt=null,Nt=!1}}}function s(){let V=!1,Nt=null,Ct=null,wt=null,bt=null,gt=null,Xt=null,ue=null,je=null;return{setTest:function(we){V||(we?at(l.STENCIL_TEST):yt(l.STENCIL_TEST))},setMask:function(we){Nt!==we&&!V&&(l.stencilMask(we),Nt=we)},setFunc:function(we,nn,xn){(Ct!==we||wt!==nn||bt!==xn)&&(l.stencilFunc(we,nn,xn),Ct=we,wt=nn,bt=xn)},setOp:function(we,nn,xn){(gt!==we||Xt!==nn||ue!==xn)&&(l.stencilOp(we,nn,xn),gt=we,Xt=nn,ue=xn)},setLocked:function(we){V=we},setClear:function(we){je!==we&&(l.clearStencil(we),je=we)},reset:function(){V=!1,Nt=null,Ct=null,wt=null,bt=null,gt=null,Xt=null,ue=null,je=null}}}const u=new i,f=new a,h=new s,p=new WeakMap,m=new WeakMap;let _={},x={},g=new WeakMap,y=[],E=null,b=!1,M=null,v=null,w=null,D=null,L=null,P=null,N=null,O=new We(0,0,0),F=0,R=!1,C=null,H=null,K=null,it=null,ht=null;const st=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,et=0;const j=l.getParameter(l.VERSION);j.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=et>=1):j.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=et>=2);let xt=null,_t={};const Bt=l.getParameter(l.SCISSOR_BOX),te=l.getParameter(l.VIEWPORT),xe=new _n().fromArray(Bt),B=new _n().fromArray(te);function ct(V,Nt,Ct,wt){const bt=new Uint8Array(4),gt=l.createTexture();l.bindTexture(V,gt),l.texParameteri(V,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(V,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let Xt=0;Xt<Ct;Xt++)V===l.TEXTURE_3D||V===l.TEXTURE_2D_ARRAY?l.texImage3D(Nt,0,l.RGBA,1,1,wt,0,l.RGBA,l.UNSIGNED_BYTE,bt):l.texImage2D(Nt+Xt,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,bt);return gt}const $={};$[l.TEXTURE_2D]=ct(l.TEXTURE_2D,l.TEXTURE_2D,1),$[l.TEXTURE_CUBE_MAP]=ct(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[l.TEXTURE_2D_ARRAY]=ct(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),$[l.TEXTURE_3D]=ct(l.TEXTURE_3D,l.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),at(l.DEPTH_TEST),f.setFunc(xl),le(!1),Qt(iy),at(l.CULL_FACE),ke(ir);function at(V){_[V]!==!0&&(l.enable(V),_[V]=!0)}function yt(V){_[V]!==!1&&(l.disable(V),_[V]=!1)}function Ot(V,Nt){return x[V]!==Nt?(l.bindFramebuffer(V,Nt),x[V]=Nt,V===l.DRAW_FRAMEBUFFER&&(x[l.FRAMEBUFFER]=Nt),V===l.FRAMEBUFFER&&(x[l.DRAW_FRAMEBUFFER]=Nt),!0):!1}function At(V,Nt){let Ct=y,wt=!1;if(V){Ct=g.get(Nt),Ct===void 0&&(Ct=[],g.set(Nt,Ct));const bt=V.textures;if(Ct.length!==bt.length||Ct[0]!==l.COLOR_ATTACHMENT0){for(let gt=0,Xt=bt.length;gt<Xt;gt++)Ct[gt]=l.COLOR_ATTACHMENT0+gt;Ct.length=bt.length,wt=!0}}else Ct[0]!==l.BACK&&(Ct[0]=l.BACK,wt=!0);wt&&l.drawBuffers(Ct)}function Mt(V){return E!==V?(l.useProgram(V),E=V,!0):!1}const Vt={[Bs]:l.FUNC_ADD,[GT]:l.FUNC_SUBTRACT,[XT]:l.FUNC_REVERSE_SUBTRACT};Vt[kT]=l.MIN,Vt[YT]=l.MAX;const oe={[qT]:l.ZERO,[WT]:l.ONE,[jT]:l.SRC_COLOR,[nm]:l.SRC_ALPHA,[tA]:l.SRC_ALPHA_SATURATE,[JT]:l.DST_COLOR,[KT]:l.DST_ALPHA,[ZT]:l.ONE_MINUS_SRC_COLOR,[im]:l.ONE_MINUS_SRC_ALPHA,[$T]:l.ONE_MINUS_DST_COLOR,[QT]:l.ONE_MINUS_DST_ALPHA,[eA]:l.CONSTANT_COLOR,[nA]:l.ONE_MINUS_CONSTANT_COLOR,[iA]:l.CONSTANT_ALPHA,[aA]:l.ONE_MINUS_CONSTANT_ALPHA};function ke(V,Nt,Ct,wt,bt,gt,Xt,ue,je,we){if(V===ir){b===!0&&(yt(l.BLEND),b=!1);return}if(b===!1&&(at(l.BLEND),b=!0),V!==VT){if(V!==M||we!==R){if((v!==Bs||L!==Bs)&&(l.blendEquation(l.FUNC_ADD),v=Bs,L=Bs),we)switch(V){case ul:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case ay:l.blendFunc(l.ONE,l.ONE);break;case ry:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case sy:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:mn("WebGLState: Invalid blending: ",V);break}else switch(V){case ul:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case ay:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case ry:mn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sy:mn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mn("WebGLState: Invalid blending: ",V);break}w=null,D=null,P=null,N=null,O.set(0,0,0),F=0,M=V,R=we}return}bt=bt||Nt,gt=gt||Ct,Xt=Xt||wt,(Nt!==v||bt!==L)&&(l.blendEquationSeparate(Vt[Nt],Vt[bt]),v=Nt,L=bt),(Ct!==w||wt!==D||gt!==P||Xt!==N)&&(l.blendFuncSeparate(oe[Ct],oe[wt],oe[gt],oe[Xt]),w=Ct,D=wt,P=gt,N=Xt),(ue.equals(O)===!1||je!==F)&&(l.blendColor(ue.r,ue.g,ue.b,je),O.copy(ue),F=je),M=V,R=!1}function G(V,Nt){V.side===tr?yt(l.CULL_FACE):at(l.CULL_FACE);let Ct=V.side===ai;Nt&&(Ct=!Ct),le(Ct),V.blending===ul&&V.transparent===!1?ke(ir):ke(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const wt=V.stencilWrite;h.setTest(wt),wt&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),It(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?at(l.SAMPLE_ALPHA_TO_COVERAGE):yt(l.SAMPLE_ALPHA_TO_COVERAGE)}function le(V){C!==V&&(V?l.frontFace(l.CW):l.frontFace(l.CCW),C=V)}function Qt(V){V!==FT?(at(l.CULL_FACE),V!==H&&(V===iy?l.cullFace(l.BACK):V===BT?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):yt(l.CULL_FACE),H=V}function $t(V){V!==K&&(k&&l.lineWidth(V),K=V)}function It(V,Nt,Ct){V?(at(l.POLYGON_OFFSET_FILL),(it!==Nt||ht!==Ct)&&(l.polygonOffset(Nt,Ct),it=Nt,ht=Ct)):yt(l.POLYGON_OFFSET_FILL)}function Fe(V){V?at(l.SCISSOR_TEST):yt(l.SCISSOR_TEST)}function Yt(V){V===void 0&&(V=l.TEXTURE0+st-1),xt!==V&&(l.activeTexture(V),xt=V)}function re(V,Nt,Ct){Ct===void 0&&(xt===null?Ct=l.TEXTURE0+st-1:Ct=xt);let wt=_t[Ct];wt===void 0&&(wt={type:void 0,texture:void 0},_t[Ct]=wt),(wt.type!==V||wt.texture!==Nt)&&(xt!==Ct&&(l.activeTexture(Ct),xt=Ct),l.bindTexture(V,Nt||$[V]),wt.type=V,wt.texture=Nt)}function z(){const V=_t[xt];V!==void 0&&V.type!==void 0&&(l.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function A(){try{l.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function nt(){try{l.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function mt(){try{l.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function vt(){try{l.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ft(){try{l.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Gt(){try{l.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ut(){try{l.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Zt(){try{l.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function qt(){try{l.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function St(){try{l.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Rt(V){xe.equals(V)===!1&&(l.scissor(V.x,V.y,V.z,V.w),xe.copy(V))}function ee(V){B.equals(V)===!1&&(l.viewport(V.x,V.y,V.z,V.w),B.copy(V))}function Jt(V,Nt){let Ct=m.get(Nt);Ct===void 0&&(Ct=new WeakMap,m.set(Nt,Ct));let wt=Ct.get(V);wt===void 0&&(wt=l.getUniformBlockIndex(Nt,V.name),Ct.set(V,wt))}function Ft(V,Nt){const wt=m.get(Nt).get(V);p.get(Nt)!==wt&&(l.uniformBlockBinding(Nt,wt,V.__bindingPointIndex),p.set(Nt,wt))}function se(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),f.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),_={},xt=null,_t={},x={},g=new WeakMap,y=[],E=null,b=!1,M=null,v=null,w=null,D=null,L=null,P=null,N=null,O=new We(0,0,0),F=0,R=!1,C=null,H=null,K=null,it=null,ht=null,xe.set(0,0,l.canvas.width,l.canvas.height),B.set(0,0,l.canvas.width,l.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:at,disable:yt,bindFramebuffer:Ot,drawBuffers:At,useProgram:Mt,setBlending:ke,setMaterial:G,setFlipSided:le,setCullFace:Qt,setLineWidth:$t,setPolygonOffset:It,setScissorTest:Fe,activeTexture:Yt,bindTexture:re,unbindTexture:z,compressedTexImage2D:A,compressedTexImage3D:nt,texImage2D:qt,texImage3D:St,updateUBOMapping:Jt,uniformBlockBinding:Ft,texStorage2D:Ut,texStorage3D:Zt,texSubImage2D:mt,texSubImage3D:vt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Gt,scissor:Rt,viewport:ee,reset:se}}function aU(l,t,i,a,s,u,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new be,_=new WeakMap;let x;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,A){return y?new OffscreenCanvas(z,A):ku("canvas")}function b(z,A,nt){let mt=1;const vt=re(z);if((vt.width>nt||vt.height>nt)&&(mt=nt/Math.max(vt.width,vt.height)),mt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ft=Math.floor(mt*vt.width),Gt=Math.floor(mt*vt.height);x===void 0&&(x=E(ft,Gt));const Ut=A?E(ft,Gt):x;return Ut.width=ft,Ut.height=Gt,Ut.getContext("2d").drawImage(z,0,0,ft,Gt),fe("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Gt+")."),Ut}else return"data"in z&&fe("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),z;return z}function M(z){return z.generateMipmaps}function v(z){l.generateMipmap(z)}function w(z){return z.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?l.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function D(z,A,nt,mt,vt=!1){if(z!==null){if(l[z]!==void 0)return l[z];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ft=A;if(A===l.RED&&(nt===l.FLOAT&&(ft=l.R32F),nt===l.HALF_FLOAT&&(ft=l.R16F),nt===l.UNSIGNED_BYTE&&(ft=l.R8)),A===l.RED_INTEGER&&(nt===l.UNSIGNED_BYTE&&(ft=l.R8UI),nt===l.UNSIGNED_SHORT&&(ft=l.R16UI),nt===l.UNSIGNED_INT&&(ft=l.R32UI),nt===l.BYTE&&(ft=l.R8I),nt===l.SHORT&&(ft=l.R16I),nt===l.INT&&(ft=l.R32I)),A===l.RG&&(nt===l.FLOAT&&(ft=l.RG32F),nt===l.HALF_FLOAT&&(ft=l.RG16F),nt===l.UNSIGNED_BYTE&&(ft=l.RG8)),A===l.RG_INTEGER&&(nt===l.UNSIGNED_BYTE&&(ft=l.RG8UI),nt===l.UNSIGNED_SHORT&&(ft=l.RG16UI),nt===l.UNSIGNED_INT&&(ft=l.RG32UI),nt===l.BYTE&&(ft=l.RG8I),nt===l.SHORT&&(ft=l.RG16I),nt===l.INT&&(ft=l.RG32I)),A===l.RGB_INTEGER&&(nt===l.UNSIGNED_BYTE&&(ft=l.RGB8UI),nt===l.UNSIGNED_SHORT&&(ft=l.RGB16UI),nt===l.UNSIGNED_INT&&(ft=l.RGB32UI),nt===l.BYTE&&(ft=l.RGB8I),nt===l.SHORT&&(ft=l.RGB16I),nt===l.INT&&(ft=l.RGB32I)),A===l.RGBA_INTEGER&&(nt===l.UNSIGNED_BYTE&&(ft=l.RGBA8UI),nt===l.UNSIGNED_SHORT&&(ft=l.RGBA16UI),nt===l.UNSIGNED_INT&&(ft=l.RGBA32UI),nt===l.BYTE&&(ft=l.RGBA8I),nt===l.SHORT&&(ft=l.RGBA16I),nt===l.INT&&(ft=l.RGBA32I)),A===l.RGB&&(nt===l.UNSIGNED_INT_5_9_9_9_REV&&(ft=l.RGB9_E5),nt===l.UNSIGNED_INT_10F_11F_11F_REV&&(ft=l.R11F_G11F_B10F)),A===l.RGBA){const Gt=vt?dh:Le.getTransfer(mt);nt===l.FLOAT&&(ft=l.RGBA32F),nt===l.HALF_FLOAT&&(ft=l.RGBA16F),nt===l.UNSIGNED_BYTE&&(ft=Gt===qe?l.SRGB8_ALPHA8:l.RGBA8),nt===l.UNSIGNED_SHORT_4_4_4_4&&(ft=l.RGBA4),nt===l.UNSIGNED_SHORT_5_5_5_1&&(ft=l.RGB5_A1)}return(ft===l.R16F||ft===l.R32F||ft===l.RG16F||ft===l.RG32F||ft===l.RGBA16F||ft===l.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function L(z,A){let nt;return z?A===null||A===Zs||A===Vu?nt=l.DEPTH24_STENCIL8:A===nr?nt=l.DEPTH32F_STENCIL8:A===Hu&&(nt=l.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Zs||A===Vu?nt=l.DEPTH_COMPONENT24:A===nr?nt=l.DEPTH_COMPONENT32F:A===Hu&&(nt=l.DEPTH_COMPONENT16),nt}function P(z,A){return M(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ui&&z.minFilter!==Qi?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function N(z){const A=z.target;A.removeEventListener("dispose",N),F(A),A.isVideoTexture&&_.delete(A)}function O(z){const A=z.target;A.removeEventListener("dispose",O),C(A)}function F(z){const A=a.get(z);if(A.__webglInit===void 0)return;const nt=z.source,mt=g.get(nt);if(mt){const vt=mt[A.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&R(z),Object.keys(mt).length===0&&g.delete(nt)}a.remove(z)}function R(z){const A=a.get(z);l.deleteTexture(A.__webglTexture);const nt=z.source,mt=g.get(nt);delete mt[A.__cacheKey],f.memory.textures--}function C(z){const A=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(A.__webglFramebuffer[mt]))for(let vt=0;vt<A.__webglFramebuffer[mt].length;vt++)l.deleteFramebuffer(A.__webglFramebuffer[mt][vt]);else l.deleteFramebuffer(A.__webglFramebuffer[mt]);A.__webglDepthbuffer&&l.deleteRenderbuffer(A.__webglDepthbuffer[mt])}else{if(Array.isArray(A.__webglFramebuffer))for(let mt=0;mt<A.__webglFramebuffer.length;mt++)l.deleteFramebuffer(A.__webglFramebuffer[mt]);else l.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&l.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&l.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let mt=0;mt<A.__webglColorRenderbuffer.length;mt++)A.__webglColorRenderbuffer[mt]&&l.deleteRenderbuffer(A.__webglColorRenderbuffer[mt]);A.__webglDepthRenderbuffer&&l.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const nt=z.textures;for(let mt=0,vt=nt.length;mt<vt;mt++){const ft=a.get(nt[mt]);ft.__webglTexture&&(l.deleteTexture(ft.__webglTexture),f.memory.textures--),a.remove(nt[mt])}a.remove(z)}let H=0;function K(){H=0}function it(){const z=H;return z>=s.maxTextures&&fe("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),H+=1,z}function ht(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function st(z,A){const nt=a.get(z);if(z.isVideoTexture&&Fe(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&nt.__version!==z.version){const mt=z.image;if(mt===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(nt,z,A);return}}else z.isExternalTexture&&(nt.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(l.TEXTURE_2D,nt.__webglTexture,l.TEXTURE0+A)}function k(z,A){const nt=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&nt.__version!==z.version){$(nt,z,A);return}else z.isExternalTexture&&(nt.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(l.TEXTURE_2D_ARRAY,nt.__webglTexture,l.TEXTURE0+A)}function et(z,A){const nt=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&nt.__version!==z.version){$(nt,z,A);return}i.bindTexture(l.TEXTURE_3D,nt.__webglTexture,l.TEXTURE0+A)}function j(z,A){const nt=a.get(z);if(z.version>0&&nt.__version!==z.version){at(nt,z,A);return}i.bindTexture(l.TEXTURE_CUBE_MAP,nt.__webglTexture,l.TEXTURE0+A)}const xt={[dm]:l.REPEAT,[er]:l.CLAMP_TO_EDGE,[pm]:l.MIRRORED_REPEAT},_t={[Ui]:l.NEAREST,[pA]:l.NEAREST_MIPMAP_NEAREST,[Ef]:l.NEAREST_MIPMAP_LINEAR,[Qi]:l.LINEAR,[l0]:l.LINEAR_MIPMAP_NEAREST,[Gs]:l.LINEAR_MIPMAP_LINEAR},Bt={[vA]:l.NEVER,[TA]:l.ALWAYS,[SA]:l.LESS,[m1]:l.LEQUAL,[yA]:l.EQUAL,[EA]:l.GEQUAL,[MA]:l.GREATER,[bA]:l.NOTEQUAL};function te(z,A){if(A.type===nr&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Qi||A.magFilter===l0||A.magFilter===Ef||A.magFilter===Gs||A.minFilter===Qi||A.minFilter===l0||A.minFilter===Ef||A.minFilter===Gs)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(z,l.TEXTURE_WRAP_S,xt[A.wrapS]),l.texParameteri(z,l.TEXTURE_WRAP_T,xt[A.wrapT]),(z===l.TEXTURE_3D||z===l.TEXTURE_2D_ARRAY)&&l.texParameteri(z,l.TEXTURE_WRAP_R,xt[A.wrapR]),l.texParameteri(z,l.TEXTURE_MAG_FILTER,_t[A.magFilter]),l.texParameteri(z,l.TEXTURE_MIN_FILTER,_t[A.minFilter]),A.compareFunction&&(l.texParameteri(z,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(z,l.TEXTURE_COMPARE_FUNC,Bt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ui||A.minFilter!==Ef&&A.minFilter!==Gs||A.type===nr&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");l.texParameterf(z,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function xe(z,A){let nt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",N));const mt=A.source;let vt=g.get(mt);vt===void 0&&(vt={},g.set(mt,vt));const ft=ht(A);if(ft!==z.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:l.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),vt[ft].usedTimes++;const Gt=vt[z.__cacheKey];Gt!==void 0&&(vt[z.__cacheKey].usedTimes--,Gt.usedTimes===0&&R(A)),z.__cacheKey=ft,z.__webglTexture=vt[ft].texture}return nt}function B(z,A,nt){return Math.floor(Math.floor(z/nt)/A)}function ct(z,A,nt,mt){const ft=z.updateRanges;if(ft.length===0)i.texSubImage2D(l.TEXTURE_2D,0,0,0,A.width,A.height,nt,mt,A.data);else{ft.sort((St,Rt)=>St.start-Rt.start);let Gt=0;for(let St=1;St<ft.length;St++){const Rt=ft[Gt],ee=ft[St],Jt=Rt.start+Rt.count,Ft=B(ee.start,A.width,4),se=B(Rt.start,A.width,4);ee.start<=Jt+1&&Ft===se&&B(ee.start+ee.count-1,A.width,4)===Ft?Rt.count=Math.max(Rt.count,ee.start+ee.count-Rt.start):(++Gt,ft[Gt]=ee)}ft.length=Gt+1;const Ut=l.getParameter(l.UNPACK_ROW_LENGTH),Zt=l.getParameter(l.UNPACK_SKIP_PIXELS),qt=l.getParameter(l.UNPACK_SKIP_ROWS);l.pixelStorei(l.UNPACK_ROW_LENGTH,A.width);for(let St=0,Rt=ft.length;St<Rt;St++){const ee=ft[St],Jt=Math.floor(ee.start/4),Ft=Math.ceil(ee.count/4),se=Jt%A.width,V=Math.floor(Jt/A.width),Nt=Ft,Ct=1;l.pixelStorei(l.UNPACK_SKIP_PIXELS,se),l.pixelStorei(l.UNPACK_SKIP_ROWS,V),i.texSubImage2D(l.TEXTURE_2D,0,se,V,Nt,Ct,nt,mt,A.data)}z.clearUpdateRanges(),l.pixelStorei(l.UNPACK_ROW_LENGTH,Ut),l.pixelStorei(l.UNPACK_SKIP_PIXELS,Zt),l.pixelStorei(l.UNPACK_SKIP_ROWS,qt)}}function $(z,A,nt){let mt=l.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(mt=l.TEXTURE_2D_ARRAY),A.isData3DTexture&&(mt=l.TEXTURE_3D);const vt=xe(z,A),ft=A.source;i.bindTexture(mt,z.__webglTexture,l.TEXTURE0+nt);const Gt=a.get(ft);if(ft.version!==Gt.__version||vt===!0){i.activeTexture(l.TEXTURE0+nt);const Ut=Le.getPrimaries(Le.workingColorSpace),Zt=A.colorSpace===Wr?null:Le.getPrimaries(A.colorSpace),qt=A.colorSpace===Wr||Ut===Zt?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,A.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,A.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let St=b(A.image,!1,s.maxTextureSize);St=Yt(A,St);const Rt=u.convert(A.format,A.colorSpace),ee=u.convert(A.type);let Jt=D(A.internalFormat,Rt,ee,A.colorSpace,A.isVideoTexture);te(mt,A);let Ft;const se=A.mipmaps,V=A.isVideoTexture!==!0,Nt=Gt.__version===void 0||vt===!0,Ct=ft.dataReady,wt=P(A,St);if(A.isDepthTexture)Jt=L(A.format===Xu,A.type),Nt&&(V?i.texStorage2D(l.TEXTURE_2D,1,Jt,St.width,St.height):i.texImage2D(l.TEXTURE_2D,0,Jt,St.width,St.height,0,Rt,ee,null));else if(A.isDataTexture)if(se.length>0){V&&Nt&&i.texStorage2D(l.TEXTURE_2D,wt,Jt,se[0].width,se[0].height);for(let bt=0,gt=se.length;bt<gt;bt++)Ft=se[bt],V?Ct&&i.texSubImage2D(l.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Rt,ee,Ft.data):i.texImage2D(l.TEXTURE_2D,bt,Jt,Ft.width,Ft.height,0,Rt,ee,Ft.data);A.generateMipmaps=!1}else V?(Nt&&i.texStorage2D(l.TEXTURE_2D,wt,Jt,St.width,St.height),Ct&&ct(A,St,Rt,ee)):i.texImage2D(l.TEXTURE_2D,0,Jt,St.width,St.height,0,Rt,ee,St.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){V&&Nt&&i.texStorage3D(l.TEXTURE_2D_ARRAY,wt,Jt,se[0].width,se[0].height,St.depth);for(let bt=0,gt=se.length;bt<gt;bt++)if(Ft=se[bt],A.format!==la)if(Rt!==null)if(V){if(Ct)if(A.layerUpdates.size>0){const Xt=Dy(Ft.width,Ft.height,A.format,A.type);for(const ue of A.layerUpdates){const je=Ft.data.subarray(ue*Xt/Ft.data.BYTES_PER_ELEMENT,(ue+1)*Xt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,bt,0,0,ue,Ft.width,Ft.height,1,Rt,je)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,bt,0,0,0,Ft.width,Ft.height,St.depth,Rt,Ft.data)}else i.compressedTexImage3D(l.TEXTURE_2D_ARRAY,bt,Jt,Ft.width,Ft.height,St.depth,0,Ft.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ct&&i.texSubImage3D(l.TEXTURE_2D_ARRAY,bt,0,0,0,Ft.width,Ft.height,St.depth,Rt,ee,Ft.data):i.texImage3D(l.TEXTURE_2D_ARRAY,bt,Jt,Ft.width,Ft.height,St.depth,0,Rt,ee,Ft.data)}else{V&&Nt&&i.texStorage2D(l.TEXTURE_2D,wt,Jt,se[0].width,se[0].height);for(let bt=0,gt=se.length;bt<gt;bt++)Ft=se[bt],A.format!==la?Rt!==null?V?Ct&&i.compressedTexSubImage2D(l.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Rt,Ft.data):i.compressedTexImage2D(l.TEXTURE_2D,bt,Jt,Ft.width,Ft.height,0,Ft.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ct&&i.texSubImage2D(l.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Rt,ee,Ft.data):i.texImage2D(l.TEXTURE_2D,bt,Jt,Ft.width,Ft.height,0,Rt,ee,Ft.data)}else if(A.isDataArrayTexture)if(V){if(Nt&&i.texStorage3D(l.TEXTURE_2D_ARRAY,wt,Jt,St.width,St.height,St.depth),Ct)if(A.layerUpdates.size>0){const bt=Dy(St.width,St.height,A.format,A.type);for(const gt of A.layerUpdates){const Xt=St.data.subarray(gt*bt/St.data.BYTES_PER_ELEMENT,(gt+1)*bt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,gt,St.width,St.height,1,Rt,ee,Xt)}A.clearLayerUpdates()}else i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Rt,ee,St.data)}else i.texImage3D(l.TEXTURE_2D_ARRAY,0,Jt,St.width,St.height,St.depth,0,Rt,ee,St.data);else if(A.isData3DTexture)V?(Nt&&i.texStorage3D(l.TEXTURE_3D,wt,Jt,St.width,St.height,St.depth),Ct&&i.texSubImage3D(l.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Rt,ee,St.data)):i.texImage3D(l.TEXTURE_3D,0,Jt,St.width,St.height,St.depth,0,Rt,ee,St.data);else if(A.isFramebufferTexture){if(Nt)if(V)i.texStorage2D(l.TEXTURE_2D,wt,Jt,St.width,St.height);else{let bt=St.width,gt=St.height;for(let Xt=0;Xt<wt;Xt++)i.texImage2D(l.TEXTURE_2D,Xt,Jt,bt,gt,0,Rt,ee,null),bt>>=1,gt>>=1}}else if(se.length>0){if(V&&Nt){const bt=re(se[0]);i.texStorage2D(l.TEXTURE_2D,wt,Jt,bt.width,bt.height)}for(let bt=0,gt=se.length;bt<gt;bt++)Ft=se[bt],V?Ct&&i.texSubImage2D(l.TEXTURE_2D,bt,0,0,Rt,ee,Ft):i.texImage2D(l.TEXTURE_2D,bt,Jt,Rt,ee,Ft);A.generateMipmaps=!1}else if(V){if(Nt){const bt=re(St);i.texStorage2D(l.TEXTURE_2D,wt,Jt,bt.width,bt.height)}Ct&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,Rt,ee,St)}else i.texImage2D(l.TEXTURE_2D,0,Jt,Rt,ee,St);M(A)&&v(mt),Gt.__version=ft.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function at(z,A,nt){if(A.image.length!==6)return;const mt=xe(z,A),vt=A.source;i.bindTexture(l.TEXTURE_CUBE_MAP,z.__webglTexture,l.TEXTURE0+nt);const ft=a.get(vt);if(vt.version!==ft.__version||mt===!0){i.activeTexture(l.TEXTURE0+nt);const Gt=Le.getPrimaries(Le.workingColorSpace),Ut=A.colorSpace===Wr?null:Le.getPrimaries(A.colorSpace),Zt=A.colorSpace===Wr||Gt===Ut?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,A.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,A.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const qt=A.isCompressedTexture||A.image[0].isCompressedTexture,St=A.image[0]&&A.image[0].isDataTexture,Rt=[];for(let gt=0;gt<6;gt++)!qt&&!St?Rt[gt]=b(A.image[gt],!0,s.maxCubemapSize):Rt[gt]=St?A.image[gt].image:A.image[gt],Rt[gt]=Yt(A,Rt[gt]);const ee=Rt[0],Jt=u.convert(A.format,A.colorSpace),Ft=u.convert(A.type),se=D(A.internalFormat,Jt,Ft,A.colorSpace),V=A.isVideoTexture!==!0,Nt=ft.__version===void 0||mt===!0,Ct=vt.dataReady;let wt=P(A,ee);te(l.TEXTURE_CUBE_MAP,A);let bt;if(qt){V&&Nt&&i.texStorage2D(l.TEXTURE_CUBE_MAP,wt,se,ee.width,ee.height);for(let gt=0;gt<6;gt++){bt=Rt[gt].mipmaps;for(let Xt=0;Xt<bt.length;Xt++){const ue=bt[Xt];A.format!==la?Jt!==null?V?Ct&&i.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,0,0,ue.width,ue.height,Jt,ue.data):i.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,se,ue.width,ue.height,0,ue.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ct&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,0,0,ue.width,ue.height,Jt,Ft,ue.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,se,ue.width,ue.height,0,Jt,Ft,ue.data)}}}else{if(bt=A.mipmaps,V&&Nt){bt.length>0&&wt++;const gt=re(Rt[0]);i.texStorage2D(l.TEXTURE_CUBE_MAP,wt,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(St){V?Ct&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Rt[gt].width,Rt[gt].height,Jt,Ft,Rt[gt].data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Rt[gt].width,Rt[gt].height,0,Jt,Ft,Rt[gt].data);for(let Xt=0;Xt<bt.length;Xt++){const je=bt[Xt].image[gt].image;V?Ct&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,0,0,je.width,je.height,Jt,Ft,je.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,se,je.width,je.height,0,Jt,Ft,je.data)}}else{V?Ct&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Jt,Ft,Rt[gt]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Jt,Ft,Rt[gt]);for(let Xt=0;Xt<bt.length;Xt++){const ue=bt[Xt];V?Ct&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,0,0,Jt,Ft,ue.image[gt]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,se,Jt,Ft,ue.image[gt])}}}M(A)&&v(l.TEXTURE_CUBE_MAP),ft.__version=vt.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function yt(z,A,nt,mt,vt,ft){const Gt=u.convert(nt.format,nt.colorSpace),Ut=u.convert(nt.type),Zt=D(nt.internalFormat,Gt,Ut,nt.colorSpace),qt=a.get(A),St=a.get(nt);if(St.__renderTarget=A,!qt.__hasExternalTextures){const Rt=Math.max(1,A.width>>ft),ee=Math.max(1,A.height>>ft);vt===l.TEXTURE_3D||vt===l.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,Zt,Rt,ee,A.depth,0,Gt,Ut,null):i.texImage2D(vt,ft,Zt,Rt,ee,0,Gt,Ut,null)}i.bindFramebuffer(l.FRAMEBUFFER,z),It(A)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,mt,vt,St.__webglTexture,0,$t(A)):(vt===l.TEXTURE_2D||vt>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,mt,vt,St.__webglTexture,ft),i.bindFramebuffer(l.FRAMEBUFFER,null)}function Ot(z,A,nt){if(l.bindRenderbuffer(l.RENDERBUFFER,z),A.depthBuffer){const mt=A.depthTexture,vt=mt&&mt.isDepthTexture?mt.type:null,ft=L(A.stencilBuffer,vt),Gt=A.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Ut=$t(A);It(A)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ut,ft,A.width,A.height):nt?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ut,ft,A.width,A.height):l.renderbufferStorage(l.RENDERBUFFER,ft,A.width,A.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,Gt,l.RENDERBUFFER,z)}else{const mt=A.textures;for(let vt=0;vt<mt.length;vt++){const ft=mt[vt],Gt=u.convert(ft.format,ft.colorSpace),Ut=u.convert(ft.type),Zt=D(ft.internalFormat,Gt,Ut,ft.colorSpace),qt=$t(A);nt&&It(A)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,qt,Zt,A.width,A.height):It(A)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,qt,Zt,A.width,A.height):l.renderbufferStorage(l.RENDERBUFFER,Zt,A.width,A.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function At(z,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(l.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=a.get(A.depthTexture);mt.__renderTarget=A,(!mt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),st(A.depthTexture,0);const vt=mt.__webglTexture,ft=$t(A);if(A.depthTexture.format===Gu)It(A)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,vt,0,ft):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,vt,0);else if(A.depthTexture.format===Xu)It(A)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,vt,0,ft):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Mt(z){const A=a.get(z),nt=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const mt=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),mt){const vt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,mt.removeEventListener("dispose",vt)};mt.addEventListener("dispose",vt),A.__depthDisposeCallback=vt}A.__boundDepthTexture=mt}if(z.depthTexture&&!A.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const mt=z.texture.mipmaps;mt&&mt.length>0?At(A.__webglFramebuffer[0],z):At(A.__webglFramebuffer,z)}else if(nt){A.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(l.FRAMEBUFFER,A.__webglFramebuffer[mt]),A.__webglDepthbuffer[mt]===void 0)A.__webglDepthbuffer[mt]=l.createRenderbuffer(),Ot(A.__webglDepthbuffer[mt],z,!1);else{const vt=z.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer[mt];l.bindRenderbuffer(l.RENDERBUFFER,ft),l.framebufferRenderbuffer(l.FRAMEBUFFER,vt,l.RENDERBUFFER,ft)}}else{const mt=z.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(l.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(l.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=l.createRenderbuffer(),Ot(A.__webglDepthbuffer,z,!1);else{const vt=z.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,ft),l.framebufferRenderbuffer(l.FRAMEBUFFER,vt,l.RENDERBUFFER,ft)}}i.bindFramebuffer(l.FRAMEBUFFER,null)}function Vt(z,A,nt){const mt=a.get(z);A!==void 0&&yt(mt.__webglFramebuffer,z,z.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),nt!==void 0&&Mt(z)}function oe(z){const A=z.texture,nt=a.get(z),mt=a.get(A);z.addEventListener("dispose",O);const vt=z.textures,ft=z.isWebGLCubeRenderTarget===!0,Gt=vt.length>1;if(Gt||(mt.__webglTexture===void 0&&(mt.__webglTexture=l.createTexture()),mt.__version=A.version,f.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer[Ut]=[];for(let Zt=0;Zt<A.mipmaps.length;Zt++)nt.__webglFramebuffer[Ut][Zt]=l.createFramebuffer()}else nt.__webglFramebuffer[Ut]=l.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)nt.__webglFramebuffer[Ut]=l.createFramebuffer()}else nt.__webglFramebuffer=l.createFramebuffer();if(Gt)for(let Ut=0,Zt=vt.length;Ut<Zt;Ut++){const qt=a.get(vt[Ut]);qt.__webglTexture===void 0&&(qt.__webglTexture=l.createTexture(),f.memory.textures++)}if(z.samples>0&&It(z)===!1){nt.__webglMultisampledFramebuffer=l.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(l.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Zt=vt[Ut];nt.__webglColorRenderbuffer[Ut]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,nt.__webglColorRenderbuffer[Ut]);const qt=u.convert(Zt.format,Zt.colorSpace),St=u.convert(Zt.type),Rt=D(Zt.internalFormat,qt,St,Zt.colorSpace,z.isXRRenderTarget===!0),ee=$t(z);l.renderbufferStorageMultisample(l.RENDERBUFFER,ee,Rt,z.width,z.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Ut,l.RENDERBUFFER,nt.__webglColorRenderbuffer[Ut])}l.bindRenderbuffer(l.RENDERBUFFER,null),z.depthBuffer&&(nt.__webglDepthRenderbuffer=l.createRenderbuffer(),Ot(nt.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(l.FRAMEBUFFER,null)}}if(ft){i.bindTexture(l.TEXTURE_CUBE_MAP,mt.__webglTexture),te(l.TEXTURE_CUBE_MAP,A);for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let Zt=0;Zt<A.mipmaps.length;Zt++)yt(nt.__webglFramebuffer[Ut][Zt],z,A,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Zt);else yt(nt.__webglFramebuffer[Ut],z,A,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(A)&&v(l.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let Ut=0,Zt=vt.length;Ut<Zt;Ut++){const qt=vt[Ut],St=a.get(qt);let Rt=l.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Rt=z.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(Rt,St.__webglTexture),te(Rt,qt),yt(nt.__webglFramebuffer,z,qt,l.COLOR_ATTACHMENT0+Ut,Rt,0),M(qt)&&v(Rt)}i.unbindTexture()}else{let Ut=l.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ut=z.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(Ut,mt.__webglTexture),te(Ut,A),A.mipmaps&&A.mipmaps.length>0)for(let Zt=0;Zt<A.mipmaps.length;Zt++)yt(nt.__webglFramebuffer[Zt],z,A,l.COLOR_ATTACHMENT0,Ut,Zt);else yt(nt.__webglFramebuffer,z,A,l.COLOR_ATTACHMENT0,Ut,0);M(A)&&v(Ut),i.unbindTexture()}z.depthBuffer&&Mt(z)}function ke(z){const A=z.textures;for(let nt=0,mt=A.length;nt<mt;nt++){const vt=A[nt];if(M(vt)){const ft=w(z),Gt=a.get(vt).__webglTexture;i.bindTexture(ft,Gt),v(ft),i.unbindTexture()}}}const G=[],le=[];function Qt(z){if(z.samples>0){if(It(z)===!1){const A=z.textures,nt=z.width,mt=z.height;let vt=l.COLOR_BUFFER_BIT;const ft=z.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Gt=a.get(z),Ut=A.length>1;if(Ut)for(let qt=0;qt<A.length;qt++)i.bindFramebuffer(l.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+qt,l.RENDERBUFFER,null),i.bindFramebuffer(l.FRAMEBUFFER,Gt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+qt,l.TEXTURE_2D,null,0);i.bindFramebuffer(l.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer);const Zt=z.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer[0]):i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let qt=0;qt<A.length;qt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(vt|=l.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(vt|=l.STENCIL_BUFFER_BIT)),Ut){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,Gt.__webglColorRenderbuffer[qt]);const St=a.get(A[qt]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,St,0)}l.blitFramebuffer(0,0,nt,mt,0,0,nt,mt,vt,l.NEAREST),p===!0&&(G.length=0,le.length=0,G.push(l.COLOR_ATTACHMENT0+qt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(G.push(ft),le.push(ft),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,le)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,G))}if(i.bindFramebuffer(l.READ_FRAMEBUFFER,null),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),Ut)for(let qt=0;qt<A.length;qt++){i.bindFramebuffer(l.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+qt,l.RENDERBUFFER,Gt.__webglColorRenderbuffer[qt]);const St=a.get(A[qt]).__webglTexture;i.bindFramebuffer(l.FRAMEBUFFER,Gt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+qt,l.TEXTURE_2D,St,0)}i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const A=z.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[A])}}}function $t(z){return Math.min(s.maxSamples,z.samples)}function It(z){const A=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Fe(z){const A=f.render.frame;_.get(z)!==A&&(_.set(z,A),z.update())}function Yt(z,A){const nt=z.colorSpace,mt=z.format,vt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||nt!==Sl&&nt!==Wr&&(Le.getTransfer(nt)===qe?(mt!==la||vt!==or)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mn("WebGLTextures: Unsupported texture color space:",nt)),A}function re(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=it,this.resetTextureUnits=K,this.setTexture2D=st,this.setTexture2DArray=k,this.setTexture3D=et,this.setTextureCube=j,this.rebindTextures=Vt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=It}function rU(l,t){function i(a,s=Wr){let u;const f=Le.getTransfer(s);if(a===or)return l.UNSIGNED_BYTE;if(a===f_)return l.UNSIGNED_SHORT_4_4_4_4;if(a===h_)return l.UNSIGNED_SHORT_5_5_5_1;if(a===c1)return l.UNSIGNED_INT_5_9_9_9_REV;if(a===f1)return l.UNSIGNED_INT_10F_11F_11F_REV;if(a===l1)return l.BYTE;if(a===u1)return l.SHORT;if(a===Hu)return l.UNSIGNED_SHORT;if(a===c_)return l.INT;if(a===Zs)return l.UNSIGNED_INT;if(a===nr)return l.FLOAT;if(a===Ml)return l.HALF_FLOAT;if(a===h1)return l.ALPHA;if(a===d1)return l.RGB;if(a===la)return l.RGBA;if(a===Gu)return l.DEPTH_COMPONENT;if(a===Xu)return l.DEPTH_STENCIL;if(a===p1)return l.RED;if(a===d_)return l.RED_INTEGER;if(a===p_)return l.RG;if(a===m_)return l.RG_INTEGER;if(a===__)return l.RGBA_INTEGER;if(a===th||a===eh||a===nh||a===ih)if(f===qe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===th)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===eh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===nh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ih)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===th)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===eh)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===nh)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ih)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===mm||a===_m||a===xm||a===gm)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===mm)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===_m)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===xm)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===gm)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===vm||a===Sm||a===ym)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===vm||a===Sm)return f===qe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===ym)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Mm||a===bm||a===Em||a===Tm||a===Am||a===Rm||a===Cm||a===wm||a===Dm||a===Um||a===Nm||a===Lm||a===Om||a===Pm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Mm)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===bm)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Em)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Tm)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Am)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Rm)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Cm)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===wm)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Dm)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Um)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Nm)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Lm)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Om)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Pm)return f===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===zm||a===Im||a===Fm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===zm)return f===qe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Im)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Fm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Bm||a===Hm||a===Vm||a===Gm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===Bm)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Hm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Vm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Gm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Vu?l.UNSIGNED_INT_24_8:l[a]!==void 0?l[a]:null}return{convert:i}}const sU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const a=new R1(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new cr({vertexShader:sU,fragmentShader:oU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ur(new Sh(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uU extends Js{constructor(t,i){super();const a=this;let s=null,u=1,f=null,h="local-floor",p=1,m=null,_=null,x=null,g=null,y=null,E=null;const b=typeof XRWebGLBinding<"u",M=new lU,v={},w=i.getContextAttributes();let D=null,L=null;const P=[],N=[],O=new be;let F=null;const R=new Wi;R.viewport=new _n;const C=new Wi;C.viewport=new _n;const H=[R,C],K=new R2;let it=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=P[$];return at===void 0&&(at=new w0,P[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=P[$];return at===void 0&&(at=new w0,P[$]=at),at.getGripSpace()},this.getHand=function($){let at=P[$];return at===void 0&&(at=new w0,P[$]=at),at.getHandSpace()};function st($){const at=N.indexOf($.inputSource);if(at===-1)return;const yt=P[at];yt!==void 0&&(yt.update($.inputSource,$.frame,m||f),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",et);for(let $=0;$<P.length;$++){const at=N[$];at!==null&&(N[$]=null,P[$].disconnect(at))}it=null,ht=null,M.reset();for(const $ in v)delete v[$];t.setRenderTarget(D),y=null,g=null,x=null,s=null,L=null,ct.stop(),a.isPresenting=!1,t.setPixelRatio(F),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,a.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,a.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&b&&(x=new XRWebGLBinding(s,i)),x},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",k),s.addEventListener("inputsourceschange",et),w.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ot=null,At=null;w.depth&&(At=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=w.stencil?Xu:Gu,Ot=w.stencil?Vu:Zs);const Mt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:u};x=this.getBinding(),g=x.createProjectionLayer(Mt),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new Ks(g.textureWidth,g.textureHeight,{format:la,type:or,depthTexture:new A1(g.textureWidth,g.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const yt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(s,i,yt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Ks(y.framebufferWidth,y.framebufferHeight,{format:la,type:or,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await s.requestReferenceSpace(h),ct.setContext(s),ct.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function et($){for(let at=0;at<$.removed.length;at++){const yt=$.removed[at],Ot=N.indexOf(yt);Ot>=0&&(N[Ot]=null,P[Ot].disconnect(yt))}for(let at=0;at<$.added.length;at++){const yt=$.added[at];let Ot=N.indexOf(yt);if(Ot===-1){for(let Mt=0;Mt<P.length;Mt++)if(Mt>=N.length){N.push(yt),Ot=Mt;break}else if(N[Mt]===null){N[Mt]=yt,Ot=Mt;break}if(Ot===-1)break}const At=P[Ot];At&&At.connect(yt)}}const j=new lt,xt=new lt;function _t($,at,yt){j.setFromMatrixPosition(at.matrixWorld),xt.setFromMatrixPosition(yt.matrixWorld);const Ot=j.distanceTo(xt),At=at.projectionMatrix.elements,Mt=yt.projectionMatrix.elements,Vt=At[14]/(At[10]-1),oe=At[14]/(At[10]+1),ke=(At[9]+1)/At[5],G=(At[9]-1)/At[5],le=(At[8]-1)/At[0],Qt=(Mt[8]+1)/Mt[0],$t=Vt*le,It=Vt*Qt,Fe=Ot/(-le+Qt),Yt=Fe*-le;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Yt),$.translateZ(Fe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const re=Vt+Fe,z=oe+Fe,A=$t-Yt,nt=It+(Ot-Yt),mt=ke*oe/z*re,vt=G*oe/z*re;$.projectionMatrix.makePerspective(A,nt,mt,vt,re,z),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Bt($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let at=$.near,yt=$.far;M.texture!==null&&(M.depthNear>0&&(at=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),K.near=C.near=R.near=at,K.far=C.far=R.far=yt,(it!==K.near||ht!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),it=K.near,ht=K.far),K.layers.mask=$.layers.mask|6,R.layers.mask=K.layers.mask&3,C.layers.mask=K.layers.mask&5;const Ot=$.parent,At=K.cameras;Bt(K,Ot);for(let Mt=0;Mt<At.length;Mt++)Bt(At[Mt],Ot);At.length===2?_t(K,R,C):K.projectionMatrix.copy(R.projectionMatrix),te($,K,Ot)};function te($,at,yt){yt===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=qu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&y===null))return p},this.setFoveation=function($){p=$,g!==null&&(g.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function($){return v[$]};let xe=null;function B($,at){if(_=at.getViewerPose(m||f),E=at,_!==null){const yt=_.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Ot=!1;yt.length!==K.cameras.length&&(K.cameras.length=0,Ot=!0);for(let oe=0;oe<yt.length;oe++){const ke=yt[oe];let G=null;if(y!==null)G=y.getViewport(ke);else{const Qt=x.getViewSubImage(g,ke);G=Qt.viewport,oe===0&&(t.setRenderTargetTextures(L,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(L))}let le=H[oe];le===void 0&&(le=new Wi,le.layers.enable(oe),le.viewport=new _n,H[oe]=le),le.matrix.fromArray(ke.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ke.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(G.x,G.y,G.width,G.height),oe===0&&(K.matrix.copy(le.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ot===!0&&K.cameras.push(le)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){x=a.getBinding();const oe=x.getDepthInformation(yt[0]);oe&&oe.isValid&&oe.texture&&M.init(oe,s.renderState)}if(At&&At.includes("camera-access")&&b){t.state.unbindTexture(),x=a.getBinding();for(let oe=0;oe<yt.length;oe++){const ke=yt[oe].camera;if(ke){let G=v[ke];G||(G=new R1,v[ke]=G);const le=x.getCameraImage(ke);G.sourceTexture=le}}}}for(let yt=0;yt<P.length;yt++){const Ot=N[yt],At=P[yt];Ot!==null&&At!==void 0&&At.update(Ot,at,m||f)}xe&&xe($,at),at.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:at}),E=null}const ct=new C1;ct.setAnimationLoop(B),this.setAnimationLoop=function($){xe=$},this.dispose=function(){}}}const zs=new lr,cU=new An;function fU(l,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function a(M,v){v.color.getRGB(M.fogColor.value,M1(l)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function s(M,v,w,D,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(M,v):v.isMeshToonMaterial?(u(M,v),x(M,v)):v.isMeshPhongMaterial?(u(M,v),_(M,v)):v.isMeshStandardMaterial?(u(M,v),g(M,v),v.isMeshPhysicalMaterial&&y(M,v,L)):v.isMeshMatcapMaterial?(u(M,v),E(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),b(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?p(M,v,w,D):v.isSpriteMaterial?m(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===ai&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===ai&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const w=t.get(v),D=w.envMap,L=w.envMapRotation;D&&(M.envMap.value=D,zs.copy(L),zs.x*=-1,zs.y*=-1,zs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),M.envMapRotation.value.setFromMatrix4(cU.makeRotationFromEuler(zs)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function p(M,v,w,D){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*w,M.scale.value=D*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function m(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function g(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,w){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ai&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function b(M,v){const w=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function hU(l,t,i,a){let s={},u={},f=[];const h=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,D){const L=D.program;a.uniformBlockBinding(w,L)}function m(w,D){let L=s[w.id];L===void 0&&(E(w),L=_(w),s[w.id]=L,w.addEventListener("dispose",M));const P=D.program;a.updateUBOMapping(w,P);const N=t.render.frame;u[w.id]!==N&&(g(w),u[w.id]=N)}function _(w){const D=x();w.__bindingPointIndex=D;const L=l.createBuffer(),P=w.__size,N=w.usage;return l.bindBuffer(l.UNIFORM_BUFFER,L),l.bufferData(l.UNIFORM_BUFFER,P,N),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,D,L),L}function x(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return mn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const D=s[w.id],L=w.uniforms,P=w.__cache;l.bindBuffer(l.UNIFORM_BUFFER,D);for(let N=0,O=L.length;N<O;N++){const F=Array.isArray(L[N])?L[N]:[L[N]];for(let R=0,C=F.length;R<C;R++){const H=F[R];if(y(H,N,R,P)===!0){const K=H.__offset,it=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let st=0;st<it.length;st++){const k=it[st],et=b(k);typeof k=="number"||typeof k=="boolean"?(H.__data[0]=k,l.bufferSubData(l.UNIFORM_BUFFER,K+ht,H.__data)):k.isMatrix3?(H.__data[0]=k.elements[0],H.__data[1]=k.elements[1],H.__data[2]=k.elements[2],H.__data[3]=0,H.__data[4]=k.elements[3],H.__data[5]=k.elements[4],H.__data[6]=k.elements[5],H.__data[7]=0,H.__data[8]=k.elements[6],H.__data[9]=k.elements[7],H.__data[10]=k.elements[8],H.__data[11]=0):(k.toArray(H.__data,ht),ht+=et.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(l.UNIFORM_BUFFER,K,H.__data)}}}l.bindBuffer(l.UNIFORM_BUFFER,null)}function y(w,D,L,P){const N=w.value,O=D+"_"+L;if(P[O]===void 0)return typeof N=="number"||typeof N=="boolean"?P[O]=N:P[O]=N.clone(),!0;{const F=P[O];if(typeof N=="number"||typeof N=="boolean"){if(F!==N)return P[O]=N,!0}else if(F.equals(N)===!1)return F.copy(N),!0}return!1}function E(w){const D=w.uniforms;let L=0;const P=16;for(let O=0,F=D.length;O<F;O++){const R=Array.isArray(D[O])?D[O]:[D[O]];for(let C=0,H=R.length;C<H;C++){const K=R[C],it=Array.isArray(K.value)?K.value:[K.value];for(let ht=0,st=it.length;ht<st;ht++){const k=it[ht],et=b(k),j=L%P,xt=j%et.boundary,_t=j+xt;L+=xt,_t!==0&&P-_t<et.storage&&(L+=P-_t),K.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=et.storage}}}const N=L%P;return N>0&&(L+=P-N),w.__size=L,w.__cache={},this}function b(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):fe("WebGLRenderer: Unsupported uniform value type.",w),D}function M(w){const D=w.target;D.removeEventListener("dispose",M);const L=f.indexOf(D.__bindingPointIndex);f.splice(L,1),l.deleteBuffer(s[D.id]),delete s[D.id],delete u[D.id]}function v(){for(const w in s)l.deleteBuffer(s[w]);f=[],s={},u={}}return{bind:p,update:m,dispose:v}}const dU=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ka=null;function pU(){return Ka===null&&(Ka=new _2(dU,32,32,p_,Ml),Ka.minFilter=Qi,Ka.magFilter=Qi,Ka.wrapS=er,Ka.wrapT=er,Ka.generateMipmaps=!1,Ka.needsUpdate=!0),Ka}class mU{constructor(t={}){const{canvas:i=AA(),context:a=null,depth:s=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=f;const E=new Set([__,m_,d_]),b=new Set([or,Zs,Hu,Vu,f_,h_]),M=new Uint32Array(4),v=new Int32Array(4);let w=null,D=null;const L=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let O=!1;this._outputColorSpace=Ri;let F=0,R=0,C=null,H=-1,K=null;const it=new _n,ht=new _n;let st=null;const k=new We(0);let et=0,j=i.width,xt=i.height,_t=1,Bt=null,te=null;const xe=new _n(0,0,j,xt),B=new _n(0,0,j,xt);let ct=!1;const $=new T1;let at=!1,yt=!1;const Ot=new An,At=new lt,Mt=new _n,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function ke(){return C===null?_t:1}let G=a;function le(U,Z){return i.getContext(U,Z)}try{const U={alpha:!0,depth:s,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${u_}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",gt,!1),i.addEventListener("webglcontextcreationerror",Xt,!1),G===null){const Z="webgl2";if(G=le(Z,U),G===null)throw le(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw U("WebGLRenderer: "+U.message),U}let Qt,$t,It,Fe,Yt,re,z,A,nt,mt,vt,ft,Gt,Ut,Zt,qt,St,Rt,ee,Jt,Ft,se,V,Nt;function Ct(){Qt=new bw(G),Qt.init(),se=new rU(G,Qt),$t=new pw(G,Qt,t,se),It=new iU(G,Qt),$t.reversedDepthBuffer&&g&&It.buffers.depth.setReversed(!0),Fe=new Aw(G),Yt=new kD,re=new aU(G,Qt,It,Yt,$t,se,Fe),z=new _w(N),A=new Mw(N),nt=new D2(G),V=new hw(G,nt),mt=new Ew(G,nt,Fe,V),vt=new Cw(G,mt,nt,Fe),ee=new Rw(G,$t,re),qt=new mw(Yt),ft=new XD(N,z,A,Qt,$t,V,qt),Gt=new fU(N,Yt),Ut=new qD,Zt=new JD(Qt),Rt=new fw(N,z,A,It,vt,y,p),St=new eU(N,vt,$t),Nt=new hU(G,Fe,$t,It),Jt=new dw(G,Qt,Fe),Ft=new Tw(G,Qt,Fe),Fe.programs=ft.programs,N.capabilities=$t,N.extensions=Qt,N.properties=Yt,N.renderLists=Ut,N.shadowMap=St,N.state=It,N.info=Fe}Ct();const wt=new uU(N,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const U=Qt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Qt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(U){U!==void 0&&(_t=U,this.setSize(j,xt,!1))},this.getSize=function(U){return U.set(j,xt)},this.setSize=function(U,Z,ot=!0){if(wt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}j=U,xt=Z,i.width=Math.floor(U*_t),i.height=Math.floor(Z*_t),ot===!0&&(i.style.width=U+"px",i.style.height=Z+"px"),this.setViewport(0,0,U,Z)},this.getDrawingBufferSize=function(U){return U.set(j*_t,xt*_t).floor()},this.setDrawingBufferSize=function(U,Z,ot){j=U,xt=Z,_t=ot,i.width=Math.floor(U*ot),i.height=Math.floor(Z*ot),this.setViewport(0,0,U,Z)},this.getCurrentViewport=function(U){return U.copy(it)},this.getViewport=function(U){return U.copy(xe)},this.setViewport=function(U,Z,ot,ut){U.isVector4?xe.set(U.x,U.y,U.z,U.w):xe.set(U,Z,ot,ut),It.viewport(it.copy(xe).multiplyScalar(_t).round())},this.getScissor=function(U){return U.copy(B)},this.setScissor=function(U,Z,ot,ut){U.isVector4?B.set(U.x,U.y,U.z,U.w):B.set(U,Z,ot,ut),It.scissor(ht.copy(B).multiplyScalar(_t).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(U){It.setScissorTest(ct=U)},this.setOpaqueSort=function(U){Bt=U},this.setTransparentSort=function(U){te=U},this.getClearColor=function(U){return U.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(U=!0,Z=!0,ot=!0){let ut=0;if(U){let Q=!1;if(C!==null){const Et=C.texture.format;Q=E.has(Et)}if(Q){const Et=C.texture.type,Tt=b.has(Et),Lt=Rt.getClearColor(),zt=Rt.getClearAlpha(),ne=Lt.r,ae=Lt.g,Kt=Lt.b;Tt?(M[0]=ne,M[1]=ae,M[2]=Kt,M[3]=zt,G.clearBufferuiv(G.COLOR,0,M)):(v[0]=ne,v[1]=ae,v[2]=Kt,v[3]=zt,G.clearBufferiv(G.COLOR,0,v))}else ut|=G.COLOR_BUFFER_BIT}Z&&(ut|=G.DEPTH_BUFFER_BIT),ot&&(ut|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",gt,!1),i.removeEventListener("webglcontextcreationerror",Xt,!1),Rt.dispose(),Ut.dispose(),Zt.dispose(),Yt.dispose(),z.dispose(),A.dispose(),vt.dispose(),V.dispose(),Nt.dispose(),ft.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Ku),wt.removeEventListener("sessionend",Qu),wa.stop()};function bt(U){U.preventDefault(),fy("WebGLRenderer: Context Lost."),O=!0}function gt(){fy("WebGLRenderer: Context Restored."),O=!1;const U=Fe.autoReset,Z=St.enabled,ot=St.autoUpdate,ut=St.needsUpdate,Q=St.type;Ct(),Fe.autoReset=U,St.enabled=Z,St.autoUpdate=ot,St.needsUpdate=ut,St.type=Q}function Xt(U){mn("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function ue(U){const Z=U.target;Z.removeEventListener("dispose",ue),je(Z)}function je(U){we(U),Yt.remove(U)}function we(U){const Z=Yt.get(U).programs;Z!==void 0&&(Z.forEach(function(ot){ft.releaseProgram(ot)}),U.isShaderMaterial&&ft.releaseShaderCache(U))}this.renderBufferDirect=function(U,Z,ot,ut,Q,Et){Z===null&&(Z=Vt);const Tt=Q.isMesh&&Q.matrixWorld.determinant()<0,Lt=$u(U,Z,ot,ut,Q);It.setMaterial(ut,Tt);let zt=ot.index,ne=1;if(ut.wireframe===!0){if(zt=mt.getWireframeAttribute(ot),zt===void 0)return;ne=2}const ae=ot.drawRange,Kt=ot.attributes.position;let ge=ae.start*ne,De=(ae.start+ae.count)*ne;Et!==null&&(ge=Math.max(ge,Et.start*ne),De=Math.min(De,(Et.start+Et.count)*ne)),zt!==null?(ge=Math.max(ge,0),De=Math.min(De,zt.count)):Kt!=null&&(ge=Math.max(ge,0),De=Math.min(De,Kt.count));const Ze=De-ge;if(Ze<0||Ze===1/0)return;V.setup(Q,ut,Lt,ot,zt);let Ke,Re=Jt;if(zt!==null&&(Ke=nt.get(zt),Re=Ft,Re.setIndex(Ke)),Q.isMesh)ut.wireframe===!0?(It.setLineWidth(ut.wireframeLinewidth*ke()),Re.setMode(G.LINES)):Re.setMode(G.TRIANGLES);else if(Q.isLine){let Wt=ut.linewidth;Wt===void 0&&(Wt=1),It.setLineWidth(Wt*ke()),Q.isLineSegments?Re.setMode(G.LINES):Q.isLineLoop?Re.setMode(G.LINE_LOOP):Re.setMode(G.LINE_STRIP)}else Q.isPoints?Re.setMode(G.POINTS):Q.isSprite&&Re.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Yu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))Re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Wt=Q._multiDrawStarts,Be=Q._multiDrawCounts,ve=Q._multiDrawCount,Ne=zt?nt.get(zt).bytesPerElement:1,Da=Yt.get(ut).currentProgram.getUniforms();for(let Xn=0;Xn<ve;Xn++)Da.setValue(G,"_gl_DrawID",Xn),Re.render(Wt[Xn]/Ne,Be[Xn])}else if(Q.isInstancedMesh)Re.renderInstances(ge,Ze,Q.count);else if(ot.isInstancedBufferGeometry){const Wt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Be=Math.min(ot.instanceCount,Wt);Re.renderInstances(ge,Ze,Be)}else Re.render(ge,Ze)};function nn(U,Z,ot){U.transparent===!0&&U.side===tr&&U.forceSinglePass===!1?(U.side=ai,U.needsUpdate=!0,ua(U,Z,ot),U.side=is,U.needsUpdate=!0,ua(U,Z,ot),U.side=tr):ua(U,Z,ot)}this.compile=function(U,Z,ot=null){ot===null&&(ot=U),D=Zt.get(ot),D.init(Z),P.push(D),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),U!==ot&&U.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights();const ut=new Set;return U.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Tt=0;Tt<Et.length;Tt++){const Lt=Et[Tt];nn(Lt,ot,Q),ut.add(Lt)}else nn(Et,ot,Q),ut.add(Et)}),D=P.pop(),ut},this.compileAsync=function(U,Z,ot=null){const ut=this.compile(U,Z,ot);return new Promise(Q=>{function Et(){if(ut.forEach(function(Tt){Yt.get(Tt).currentProgram.isReady()&&ut.delete(Tt)}),ut.size===0){Q(U);return}setTimeout(Et,10)}Qt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let xn=null;function Kn(U){xn&&xn(U)}function Ku(){wa.stop()}function Qu(){wa.start()}const wa=new C1;wa.setAnimationLoop(Kn),typeof self<"u"&&wa.setContext(self),this.setAnimationLoop=function(U){xn=U,wt.setAnimationLoop(U),U===null?wa.stop():wa.start()},wt.addEventListener("sessionstart",Ku),wt.addEventListener("sessionend",Qu),this.render=function(U,Z){if(Z!==void 0&&Z.isCamera!==!0){mn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(Z),Z=wt.getCamera()),U.isScene===!0&&U.onBeforeRender(N,U,Z,C),D=Zt.get(U,P.length),D.init(Z),P.push(D),Ot.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$.setFromProjectionMatrix(Ot,Ta,Z.reversedDepth),yt=this.localClippingEnabled,at=qt.init(this.clippingPlanes,yt),w=Ut.get(U,L.length),w.init(),L.push(w),wt.enabled===!0&&wt.isPresenting===!0){const Et=N.xr.getDepthSensingMesh();Et!==null&&hr(Et,Z,-1/0,N.sortObjects)}hr(U,Z,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(Bt,te),oe=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,oe&&Rt.addToRenderList(w,U),this.info.render.frame++,at===!0&&qt.beginShadows();const ot=D.state.shadowsArray;St.render(ot,U,Z),at===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=w.opaque,Q=w.transmissive;if(D.setupLights(),Z.isArrayCamera){const Et=Z.cameras;if(Q.length>0)for(let Tt=0,Lt=Et.length;Tt<Lt;Tt++){const zt=Et[Tt];ss(ut,Q,U,zt)}oe&&Rt.render(U);for(let Tt=0,Lt=Et.length;Tt<Lt;Tt++){const zt=Et[Tt];rs(w,U,zt,zt.viewport)}}else Q.length>0&&ss(ut,Q,U,Z),oe&&Rt.render(U),rs(w,U,Z);C!==null&&R===0&&(re.updateMultisampleRenderTarget(C),re.updateRenderTargetMipmap(C)),U.isScene===!0&&U.onAfterRender(N,U,Z),V.resetDefaultState(),H=-1,K=null,P.pop(),P.length>0?(D=P[P.length-1],at===!0&&qt.setGlobalState(N.clippingPlanes,D.state.camera)):D=null,L.pop(),L.length>0?w=L[L.length-1]:w=null};function hr(U,Z,ot,ut){if(U.visible===!1)return;if(U.layers.test(Z.layers)){if(U.isGroup)ot=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Z);else if(U.isLight)D.pushLight(U),U.castShadow&&D.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||$.intersectsSprite(U)){ut&&Mt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Ot);const Tt=vt.update(U),Lt=U.material;Lt.visible&&w.push(U,Tt,Lt,ot,Mt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||$.intersectsObject(U))){const Tt=vt.update(U),Lt=U.material;if(ut&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Mt.copy(U.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Mt.copy(Tt.boundingSphere.center)),Mt.applyMatrix4(U.matrixWorld).applyMatrix4(Ot)),Array.isArray(Lt)){const zt=Tt.groups;for(let ne=0,ae=zt.length;ne<ae;ne++){const Kt=zt[ne],ge=Lt[Kt.materialIndex];ge&&ge.visible&&w.push(U,Tt,ge,ot,Mt.z,Kt)}}else Lt.visible&&w.push(U,Tt,Lt,ot,Mt.z,null)}}const Et=U.children;for(let Tt=0,Lt=Et.length;Tt<Lt;Tt++)hr(Et[Tt],Z,ot,ut)}function rs(U,Z,ot,ut){const{opaque:Q,transmissive:Et,transparent:Tt}=U;D.setupLightsView(ot),at===!0&&qt.setGlobalState(N.clippingPlanes,ot),ut&&It.viewport(it.copy(ut)),Q.length>0&&Pi(Q,Z,ot),Et.length>0&&Pi(Et,Z,ot),Tt.length>0&&Pi(Tt,Z,ot),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function ss(U,Z,ot,ut){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[ut.id]===void 0&&(D.state.transmissionRenderTarget[ut.id]=new Ks(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Ml:or,minFilter:Gs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Et=D.state.transmissionRenderTarget[ut.id],Tt=ut.viewport||it;Et.setSize(Tt.z*N.transmissionResolutionScale,Tt.w*N.transmissionResolutionScale);const Lt=N.getRenderTarget(),zt=N.getActiveCubeFace(),ne=N.getActiveMipmapLevel();N.setRenderTarget(Et),N.getClearColor(k),et=N.getClearAlpha(),et<1&&N.setClearColor(16777215,.5),N.clear(),oe&&Rt.render(ot);const ae=N.toneMapping;N.toneMapping=ts;const Kt=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),D.setupLightsView(ut),at===!0&&qt.setGlobalState(N.clippingPlanes,ut),Pi(U,ot,ut),re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let De=0,Ze=Z.length;De<Ze;De++){const Ke=Z[De],{object:Re,geometry:Wt,material:Be,group:ve}=Ke;if(Be.side===tr&&Re.layers.test(ut.layers)){const Ne=Be.side;Be.side=ai,Be.needsUpdate=!0,os(Re,ot,ut,Wt,Be,ve),Be.side=Ne,Be.needsUpdate=!0,ge=!0}}ge===!0&&(re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et))}N.setRenderTarget(Lt,zt,ne),N.setClearColor(k,et),Kt!==void 0&&(ut.viewport=Kt),N.toneMapping=ae}function Pi(U,Z,ot){const ut=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Et=U.length;Q<Et;Q++){const Tt=U[Q],{object:Lt,geometry:zt,group:ne}=Tt;let ae=Tt.material;ae.allowOverride===!0&&ut!==null&&(ae=ut),Lt.layers.test(ot.layers)&&os(Lt,Z,ot,zt,ae,ne)}}function os(U,Z,ot,ut,Q,Et){U.onBeforeRender(N,Z,ot,ut,Q,Et),U.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),Q.onBeforeRender(N,Z,ot,ut,U,Et),Q.transparent===!0&&Q.side===tr&&Q.forceSinglePass===!1?(Q.side=ai,Q.needsUpdate=!0,N.renderBufferDirect(ot,Z,ut,Q,U,Et),Q.side=is,Q.needsUpdate=!0,N.renderBufferDirect(ot,Z,ut,Q,U,Et),Q.side=tr):N.renderBufferDirect(ot,Z,ut,Q,U,Et),U.onAfterRender(N,Z,ot,ut,Q,Et)}function ua(U,Z,ot){Z.isScene!==!0&&(Z=Vt);const ut=Yt.get(U),Q=D.state.lights,Et=D.state.shadowsArray,Tt=Q.state.version,Lt=ft.getParameters(U,Q.state,Et,Z,ot),zt=ft.getProgramCacheKey(Lt);let ne=ut.programs;ut.environment=U.isMeshStandardMaterial?Z.environment:null,ut.fog=Z.fog,ut.envMap=(U.isMeshStandardMaterial?A:z).get(U.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&U.envMap===null?Z.environmentRotation:U.envMapRotation,ne===void 0&&(U.addEventListener("dispose",ue),ne=new Map,ut.programs=ne);let ae=ne.get(zt);if(ae!==void 0){if(ut.currentProgram===ae&&ut.lightsStateVersion===Tt)return Ju(U,Lt),ae}else Lt.uniforms=ft.getUniforms(U),U.onBeforeCompile(Lt,N),ae=ft.acquireProgram(Lt,zt),ne.set(zt,ae),ut.uniforms=Lt.uniforms;const Kt=ut.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Kt.clippingPlanes=qt.uniform),Ju(U,Lt),ut.needsLights=ls(U),ut.lightsStateVersion=Tt,ut.needsLights&&(Kt.ambientLightColor.value=Q.state.ambient,Kt.lightProbe.value=Q.state.probe,Kt.directionalLights.value=Q.state.directional,Kt.directionalLightShadows.value=Q.state.directionalShadow,Kt.spotLights.value=Q.state.spot,Kt.spotLightShadows.value=Q.state.spotShadow,Kt.rectAreaLights.value=Q.state.rectArea,Kt.ltc_1.value=Q.state.rectAreaLTC1,Kt.ltc_2.value=Q.state.rectAreaLTC2,Kt.pointLights.value=Q.state.point,Kt.pointLightShadows.value=Q.state.pointShadow,Kt.hemisphereLights.value=Q.state.hemi,Kt.directionalShadowMap.value=Q.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Kt.spotShadowMap.value=Q.state.spotShadowMap,Kt.spotLightMatrix.value=Q.state.spotLightMatrix,Kt.spotLightMap.value=Q.state.spotLightMap,Kt.pointShadowMap.value=Q.state.pointShadowMap,Kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ut.currentProgram=ae,ut.uniformsList=null,ae}function Al(U){if(U.uniformsList===null){const Z=U.currentProgram.getUniforms();U.uniformsList=ah.seqWithValue(Z.seq,U.uniforms)}return U.uniformsList}function Ju(U,Z){const ot=Yt.get(U);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function $u(U,Z,ot,ut,Q){Z.isScene!==!0&&(Z=Vt),re.resetTextureUnits();const Et=Z.fog,Tt=ut.isMeshStandardMaterial?Z.environment:null,Lt=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Sl,zt=(ut.isMeshStandardMaterial?A:z).get(ut.envMap||Tt),ne=ut.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ae=!!ot.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Kt=!!ot.morphAttributes.position,ge=!!ot.morphAttributes.normal,De=!!ot.morphAttributes.color;let Ze=ts;ut.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ze=N.toneMapping);const Ke=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Re=Ke!==void 0?Ke.length:0,Wt=Yt.get(ut),Be=D.state.lights;if(at===!0&&(yt===!0||U!==K)){const wn=U===K&&ut.id===H;qt.setState(ut,U,wn)}let ve=!1;ut.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Be.state.version||Wt.outputColorSpace!==Lt||Q.isBatchedMesh&&Wt.batching===!1||!Q.isBatchedMesh&&Wt.batching===!0||Q.isBatchedMesh&&Wt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Wt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Wt.instancing===!1||!Q.isInstancedMesh&&Wt.instancing===!0||Q.isSkinnedMesh&&Wt.skinning===!1||!Q.isSkinnedMesh&&Wt.skinning===!0||Q.isInstancedMesh&&Wt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Wt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Wt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Wt.instancingMorph===!1&&Q.morphTexture!==null||Wt.envMap!==zt||ut.fog===!0&&Wt.fog!==Et||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==qt.numPlanes||Wt.numIntersection!==qt.numIntersection)||Wt.vertexAlphas!==ne||Wt.vertexTangents!==ae||Wt.morphTargets!==Kt||Wt.morphNormals!==ge||Wt.morphColors!==De||Wt.toneMapping!==Ze||Wt.morphTargetsCount!==Re)&&(ve=!0):(ve=!0,Wt.__version=ut.version);let Ne=Wt.currentProgram;ve===!0&&(Ne=ua(ut,Z,Q));let Da=!1,Xn=!1,dr=!1;const Oe=Ne.getUniforms(),hn=Wt.uniforms;if(It.useProgram(Ne.program)&&(Da=!0,Xn=!0,dr=!0),ut.id!==H&&(H=ut.id,Xn=!0),Da||K!==U){It.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",U.projectionMatrix),Oe.setValue(G,"viewMatrix",U.matrixWorldInverse);const Pn=Oe.map.cameraPosition;Pn!==void 0&&Pn.setValue(G,At.setFromMatrixPosition(U.matrixWorld)),$t.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",U.isOrthographicCamera===!0),K!==U&&(K=U,Xn=!0,dr=!0)}if(Q.isSkinnedMesh){Oe.setOptional(G,Q,"bindMatrix"),Oe.setOptional(G,Q,"bindMatrixInverse");const wn=Q.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Oe.setValue(G,"boneTexture",wn.boneTexture,re))}Q.isBatchedMesh&&(Oe.setOptional(G,Q,"batchingTexture"),Oe.setValue(G,"batchingTexture",Q._matricesTexture,re),Oe.setOptional(G,Q,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",Q._indirectTexture,re),Oe.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",Q._colorsTexture,re));const ri=ot.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&ee.update(Q,ot,Ne),(Xn||Wt.receiveShadow!==Q.receiveShadow)&&(Wt.receiveShadow=Q.receiveShadow,Oe.setValue(G,"receiveShadow",Q.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(hn.envMap.value=zt,hn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&Z.environment!==null&&(hn.envMapIntensity.value=Z.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=pU()),Xn&&(Oe.setValue(G,"toneMappingExposure",N.toneMappingExposure),Wt.needsLights&&Rl(hn,dr),Et&&ut.fog===!0&&Gt.refreshFogUniforms(hn,Et),Gt.refreshMaterialUniforms(hn,ut,_t,xt,D.state.transmissionRenderTarget[U.id]),ah.upload(G,Al(Wt),hn,re)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(ah.upload(G,Al(Wt),hn,re),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Oe.setValue(G,"center",Q.center),Oe.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Oe.setValue(G,"normalMatrix",Q.normalMatrix),Oe.setValue(G,"modelMatrix",Q.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const wn=ut.uniformsGroups;for(let Pn=0,Cl=wn.length;Pn<Cl;Pn++){const me=wn[Pn];Nt.update(me,Ne),Nt.bind(me,Ne)}}return Ne}function Rl(U,Z){U.ambientLightColor.needsUpdate=Z,U.lightProbe.needsUpdate=Z,U.directionalLights.needsUpdate=Z,U.directionalLightShadows.needsUpdate=Z,U.pointLights.needsUpdate=Z,U.pointLightShadows.needsUpdate=Z,U.spotLights.needsUpdate=Z,U.spotLightShadows.needsUpdate=Z,U.rectAreaLights.needsUpdate=Z,U.hemisphereLights.needsUpdate=Z}function ls(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(U,Z,ot){const ut=Yt.get(U);ut.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Yt.get(U.texture).__webglTexture=Z,Yt.get(U.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:ot,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,Z){const ot=Yt.get(U);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};const bh=G.createFramebuffer();this.setRenderTarget=function(U,Z=0,ot=0){C=U,F=Z,R=ot;let ut=!0,Q=null,Et=!1,Tt=!1;if(U){const zt=Yt.get(U);if(zt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(G.FRAMEBUFFER,null),ut=!1;else if(zt.__webglFramebuffer===void 0)re.setupRenderTarget(U);else if(zt.__hasExternalTextures)re.rebindTextures(U,Yt.get(U.texture).__webglTexture,Yt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Kt=U.depthTexture;if(zt.__boundDepthTexture!==Kt){if(Kt!==null&&Yt.has(Kt)&&(U.width!==Kt.image.width||U.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(U)}}const ne=U.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Tt=!0);const ae=Yt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ae[Z])?Q=ae[Z][ot]:Q=ae[Z],Et=!0):U.samples>0&&re.useMultisampledRTT(U)===!1?Q=Yt.get(U).__webglMultisampledFramebuffer:Array.isArray(ae)?Q=ae[ot]:Q=ae,it.copy(U.viewport),ht.copy(U.scissor),st=U.scissorTest}else it.copy(xe).multiplyScalar(_t).floor(),ht.copy(B).multiplyScalar(_t).floor(),st=ct;if(ot!==0&&(Q=bh),It.bindFramebuffer(G.FRAMEBUFFER,Q)&&ut&&It.drawBuffers(U,Q),It.viewport(it),It.scissor(ht),It.setScissorTest(st),Et){const zt=Yt.get(U.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,zt.__webglTexture,ot)}else if(Tt){const zt=Z;for(let ne=0;ne<U.textures.length;ne++){const ae=Yt.get(U.textures[ne]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ne,ae.__webglTexture,ot,zt)}}else if(U!==null&&ot!==0){const zt=Yt.get(U.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,ot)}H=-1},this.readRenderTargetPixels=function(U,Z,ot,ut,Q,Et,Tt,Lt=0){if(!(U&&U.isWebGLRenderTarget)){mn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Yt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Tt!==void 0&&(zt=zt[Tt]),zt){It.bindFramebuffer(G.FRAMEBUFFER,zt);try{const ne=U.textures[Lt],ae=ne.format,Kt=ne.type;if(!$t.textureFormatReadable(ae)){mn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Kt)){mn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=U.width-ut&&ot>=0&&ot<=U.height-Q&&(U.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(Z,ot,ut,Q,se.convert(ae),se.convert(Kt),Et))}finally{const ne=C!==null?Yt.get(C).__webglFramebuffer:null;It.bindFramebuffer(G.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(U,Z,ot,ut,Q,Et,Tt,Lt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Yt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Tt!==void 0&&(zt=zt[Tt]),zt)if(Z>=0&&Z<=U.width-ut&&ot>=0&&ot<=U.height-Q){It.bindFramebuffer(G.FRAMEBUFFER,zt);const ne=U.textures[Lt],ae=ne.format,Kt=ne.type;if(!$t.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ge),G.bufferData(G.PIXEL_PACK_BUFFER,Et.byteLength,G.STREAM_READ),U.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(Z,ot,ut,Q,se.convert(ae),se.convert(Kt),0);const De=C!==null?Yt.get(C).__webglFramebuffer:null;It.bindFramebuffer(G.FRAMEBUFFER,De);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await RA(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ge),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Et),G.deleteBuffer(ge),G.deleteSync(Ze),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,Z=null,ot=0){const ut=Math.pow(2,-ot),Q=Math.floor(U.image.width*ut),Et=Math.floor(U.image.height*ut),Tt=Z!==null?Z.x:0,Lt=Z!==null?Z.y:0;re.setTexture2D(U,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Tt,Lt,Q,Et),It.unbindTexture()};const tc=G.createFramebuffer(),ec=G.createFramebuffer();this.copyTextureToTexture=function(U,Z,ot=null,ut=null,Q=0,Et=null){Et===null&&(Q!==0?(Yu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Q,Q=0):Et=0);let Tt,Lt,zt,ne,ae,Kt,ge,De,Ze;const Ke=U.isCompressedTexture?U.mipmaps[Et]:U.image;if(ot!==null)Tt=ot.max.x-ot.min.x,Lt=ot.max.y-ot.min.y,zt=ot.isBox3?ot.max.z-ot.min.z:1,ne=ot.min.x,ae=ot.min.y,Kt=ot.isBox3?ot.min.z:0;else{const ri=Math.pow(2,-Q);Tt=Math.floor(Ke.width*ri),Lt=Math.floor(Ke.height*ri),U.isDataArrayTexture?zt=Ke.depth:U.isData3DTexture?zt=Math.floor(Ke.depth*ri):zt=1,ne=0,ae=0,Kt=0}ut!==null?(ge=ut.x,De=ut.y,Ze=ut.z):(ge=0,De=0,Ze=0);const Re=se.convert(Z.format),Wt=se.convert(Z.type);let Be;Z.isData3DTexture?(re.setTexture3D(Z,0),Be=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(re.setTexture2DArray(Z,0),Be=G.TEXTURE_2D_ARRAY):(re.setTexture2D(Z,0),Be=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const ve=G.getParameter(G.UNPACK_ROW_LENGTH),Ne=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Da=G.getParameter(G.UNPACK_SKIP_PIXELS),Xn=G.getParameter(G.UNPACK_SKIP_ROWS),dr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ne),G.pixelStorei(G.UNPACK_SKIP_ROWS,ae),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Kt);const Oe=U.isDataArrayTexture||U.isData3DTexture,hn=Z.isDataArrayTexture||Z.isData3DTexture;if(U.isDepthTexture){const ri=Yt.get(U),wn=Yt.get(Z),Pn=Yt.get(ri.__renderTarget),Cl=Yt.get(wn.__renderTarget);It.bindFramebuffer(G.READ_FRAMEBUFFER,Pn.__webglFramebuffer),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,Cl.__webglFramebuffer);for(let me=0;me<zt;me++)Oe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Yt.get(U).__webglTexture,Q,Kt+me),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Yt.get(Z).__webglTexture,Et,Ze+me)),G.blitFramebuffer(ne,ae,Tt,Lt,ge,De,Tt,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);It.bindFramebuffer(G.READ_FRAMEBUFFER,null),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||U.isRenderTargetTexture||Yt.has(U)){const ri=Yt.get(U),wn=Yt.get(Z);It.bindFramebuffer(G.READ_FRAMEBUFFER,tc),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,ec);for(let Pn=0;Pn<zt;Pn++)Oe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ri.__webglTexture,Q,Kt+Pn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ri.__webglTexture,Q),hn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,wn.__webglTexture,Et,Ze+Pn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wn.__webglTexture,Et),Q!==0?G.blitFramebuffer(ne,ae,Tt,Lt,ge,De,Tt,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):hn?G.copyTexSubImage3D(Be,Et,ge,De,Ze+Pn,ne,ae,Tt,Lt):G.copyTexSubImage2D(Be,Et,ge,De,ne,ae,Tt,Lt);It.bindFramebuffer(G.READ_FRAMEBUFFER,null),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else hn?U.isDataTexture||U.isData3DTexture?G.texSubImage3D(Be,Et,ge,De,Ze,Tt,Lt,zt,Re,Wt,Ke.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(Be,Et,ge,De,Ze,Tt,Lt,zt,Re,Ke.data):G.texSubImage3D(Be,Et,ge,De,Ze,Tt,Lt,zt,Re,Wt,Ke):U.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Et,ge,De,Tt,Lt,Re,Wt,Ke.data):U.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Et,ge,De,Ke.width,Ke.height,Re,Ke.data):G.texSubImage2D(G.TEXTURE_2D,Et,ge,De,Tt,Lt,Re,Wt,Ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,ve),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ne),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Da),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,dr),Et===0&&Z.generateMipmaps&&G.generateMipmap(Be),It.unbindTexture()},this.initRenderTarget=function(U){Yt.get(U).__webglFramebuffer===void 0&&re.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?re.setTextureCube(U,0):U.isData3DTexture?re.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?re.setTexture2DArray(U,0):re.setTexture2D(U,0),It.unbindTexture()},this.resetState=function(){F=0,R=0,C=null,It.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const I0={type:"change"},b_={type:"start"},E_={type:"end"},tM=1e-6,ze={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},Yf=new be,qr=new be,_U=new lt,qf=new lt,F0=new lt,el=new El,eM=new lt,Wf=new lt,B0=new lt,jf=new lt;class xU extends C2{constructor(t,i=null){super(t,i),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:ll.ROTATE,MIDDLE:ll.DOLLY,RIGHT:ll.PAN},this.target=new lt,this.state=ze.NONE,this.keyState=ze.NONE,this._lastPosition=new lt,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new lt,this._movePrev=new be,this._moveCurr=new be,this._lastAxis=new lt,this._zoomStart=new be,this._zoomEnd=new be,this._panStart=new be,this._panEnd=new be,this._pointers=[],this._pointerPositions={},this._onPointerMove=vU.bind(this),this._onPointerDown=gU.bind(this),this._onPointerUp=SU.bind(this),this._onPointerCancel=yU.bind(this),this._onContextMenu=CU.bind(this),this._onMouseWheel=RU.bind(this),this._onKeyDown=bU.bind(this),this._onKeyUp=MU.bind(this),this._onTouchStart=wU.bind(this),this._onTouchMove=DU.bind(this),this._onTouchEnd=UU.bind(this),this._onMouseDown=EU.bind(this),this._onMouseMove=TU.bind(this),this._onMouseUp=AU.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,i!==null&&(this.connect(i),this.handleResize()),this.update()}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const t=this.domElement.getBoundingClientRect(),i=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-i.clientLeft,this.screen.top=t.top+window.pageYOffset-i.clientTop,this.screen.width=t.width,this.screen.height=t.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>tM&&(this.dispatchEvent(I0),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>tM||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(I0),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=ze.NONE,this.keyState=ze.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(I0),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(qr.copy(this._panEnd).sub(this._panStart),qr.lengthSq()){if(this.object.isOrthographicCamera){const t=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,i=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;qr.x*=t,qr.y*=i}qr.multiplyScalar(this._eye.length()*this.panSpeed),qf.copy(this._eye).cross(this.object.up).setLength(qr.x),qf.add(_U.copy(this.object.up).setLength(qr.y)),this.object.position.add(qf),this.target.add(qf),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(qr.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){jf.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let t=jf.length();t?(this._eye.copy(this.object.position).sub(this.target),eM.copy(this._eye).normalize(),Wf.copy(this.object.up).normalize(),B0.crossVectors(Wf,eM).normalize(),Wf.setLength(this._moveCurr.y-this._movePrev.y),B0.setLength(this._moveCurr.x-this._movePrev.x),jf.copy(Wf.add(B0)),F0.crossVectors(jf,this._eye).normalize(),t*=this.rotateSpeed,el.setFromAxisAngle(F0,t),this._eye.applyQuaternion(el),this.object.up.applyQuaternion(el),this._lastAxis.copy(F0),this._lastAngle=t):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),el.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(el),this.object.up.applyQuaternion(el)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===ze.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=dy.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=dy.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(t,i){return Yf.set((t-this.screen.left)/this.screen.width,(i-this.screen.top)/this.screen.height),Yf}_getMouseOnCircle(t,i){return Yf.set((t-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-i))/this.screen.width),Yf}_addPointer(t){this._pointers.push(t)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i].pointerId==t.pointerId){this._pointers.splice(i,1);return}}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new be,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[i.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function gU(l){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(l.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(l),l.pointerType==="touch"?this._onTouchStart(l):this._onMouseDown(l))}function vU(l){this.enabled!==!1&&(l.pointerType==="touch"?this._onTouchMove(l):this._onMouseMove(l))}function SU(l){this.enabled!==!1&&(l.pointerType==="touch"?this._onTouchEnd(l):this._onMouseUp(),this._removePointer(l),this._pointers.length===0&&(this.domElement.releasePointerCapture(l.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function yU(l){this._removePointer(l)}function MU(){this.enabled!==!1&&(this.keyState=ze.NONE,window.addEventListener("keydown",this._onKeyDown))}function bU(l){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===ze.NONE&&(l.code===this.keys[ze.ROTATE]&&!this.noRotate?this.keyState=ze.ROTATE:l.code===this.keys[ze.ZOOM]&&!this.noZoom?this.keyState=ze.ZOOM:l.code===this.keys[ze.PAN]&&!this.noPan&&(this.keyState=ze.PAN)))}function EU(l){let t;switch(l.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ll.DOLLY:this.state=ze.ZOOM;break;case ll.ROTATE:this.state=ze.ROTATE;break;case ll.PAN:this.state=ze.PAN;break;default:this.state=ze.NONE}const i=this.keyState!==ze.NONE?this.keyState:this.state;i===ze.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(l.pageX,l.pageY)),this._movePrev.copy(this._moveCurr)):i===ze.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(l.pageX,l.pageY)),this._zoomEnd.copy(this._zoomStart)):i===ze.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(l.pageX,l.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(b_)}function TU(l){const t=this.keyState!==ze.NONE?this.keyState:this.state;t===ze.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(l.pageX,l.pageY))):t===ze.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(l.pageX,l.pageY)):t===ze.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(l.pageX,l.pageY))}function AU(){this.state=ze.NONE,this.dispatchEvent(E_)}function RU(l){if(this.enabled!==!1&&this.noZoom!==!0){switch(l.preventDefault(),l.deltaMode){case 2:this._zoomStart.y-=l.deltaY*.025;break;case 1:this._zoomStart.y-=l.deltaY*.01;break;default:this._zoomStart.y-=l.deltaY*25e-5;break}this.dispatchEvent(b_),this.dispatchEvent(E_)}}function CU(l){this.enabled!==!1&&l.preventDefault()}function wU(l){switch(this._trackPointer(l),this._pointers.length){case 1:this.state=ze.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=ze.TOUCH_ZOOM_PAN;const t=this._pointers[0].pageX-this._pointers[1].pageX,i=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(t*t+i*i);const a=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(a,s)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(b_)}function DU(l){switch(this._trackPointer(l),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(l.pageX,l.pageY));break;default:const t=this._getSecondPointerPosition(l),i=l.pageX-t.x,a=l.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(i*i+a*a);const s=(l.pageX+t.x)/2,u=(l.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,u));break}}function UU(l){switch(this._pointers.length){case 0:this.state=ze.NONE;break;case 1:this.state=ze.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(l.pageX,l.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=ze.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==l.pointerId){const i=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(i.x,i.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(E_)}function NU(){const l=Xs.useRef(null);return Xs.useEffect(()=>{const t=l.current,i=new m2,a=new Wi(75,window.innerWidth/window.innerHeight,.1,1e3);a.position.z=800,i.add(a);const s=new mU({canvas:t,antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(window.innerWidth,window.innerHeight,!1),s.setClearColor(0,0);const u=new xU(a,s.domElement);u.target.set(0,0,0),u.noPan=!0,u.noZoom=!0,u.rotateSpeed=10,u.zoomSpeed=30,u.enableDamping=!0,u.dynamicDampingFactor=.2,u.maxDistance=800,u.minDistance=2;const f=new y_(10,64,32),h=new T2().load("/images/IMG_1566.png");h.colorSpace=Ri;const p=new S_({map:h});p.side=ai;const m=new ur(f,p);m.rotateY(1.5),i.add(m);let _=0;function x(){const b=t.clientWidth,M=t.clientHeight,v=t.width!==b||t.height!==M;return v&&s.setSize(b,M,!1),v}function g(){a.aspect=t.clientWidth/t.clientHeight,a.updateProjectionMatrix(),x()&&(a.aspect=t.clientWidth/t.clientHeight,a.updateProjectionMatrix()),s.render(i,a)}function y(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight,!1),g()}function E(b){_=requestAnimationFrame(E),m.rotation.y=b/2e3,b<3e3&&(a.position.z=100),b>3e3&&(a.position.z-=b/800),a.position.z<2&&(a.position.z=2),u.update(),g()}return window.addEventListener("resize",y),_=requestAnimationFrame(E),()=>{cancelAnimationFrame(_),window.removeEventListener("resize",y),u.dispose(),f.dispose(),p.dispose(),h.dispose(),s.dispose()}},[]),Xe.jsx("canvas",{id:"c",ref:l})}const nM=10,iM=3,aM=10,rh=new Set;let Zf=!1;function Kf(l){const t=l.touches?l.touches[0]:l,i=2*(t.clientX/window.innerWidth-.5),a=2*(t.clientY/window.innerHeight-.5);rh.forEach(s=>s(i,a))}function LU(l){return rh.add(l),Zf||(window.addEventListener("mousemove",Kf),window.addEventListener("touchmove",Kf,{passive:!0}),Zf=!0),()=>{rh.delete(l),rh.size===0&&Zf&&(window.removeEventListener("mousemove",Kf),window.removeEventListener("touchmove",Kf),Zf=!1)}}function H0({id:l,className:t,children:i}){const a=Xs.useRef(null);Xs.useEffect(()=>LU((u,f)=>{const h=a.current;h&&(h.style.transform=`rotateX(${-f*aM}deg) rotateY(${u*aM}deg)`)}),[]);const s=Array.from({length:nM},(u,f)=>{const p=-(f/nM)*iM+iM;return Xe.jsx("span",{className:"z-layer","aria-hidden":f>0?"true":void 0,style:{transform:`translateZ(${p}rem)`},children:i},f)});return Xe.jsx("h1",{id:l,className:`z-heading prevent-select ${t}`,children:Xe.jsx("span",{className:"z-text",children:Xe.jsx("span",{className:"z-layers",ref:a,children:s})})})}function OU(){const[l,t]=Xs.useState(!1);return Xs.useEffect(()=>{const i=()=>t(!0);if(document.readyState==="complete")i();else return window.addEventListener("load",i),()=>window.removeEventListener("load",i)},[]),Xs.useLayoutEffect(()=>{const i=a1.timeline({delay:2.8});return i.from("#angel",{duration:1,opacity:0,rotateZ:-10}).from("#elliott",{duration:1,opacity:0,rotateZ:10}).from("#ulloa",{duration:1,opacity:0,rotateZ:-10}).from(".item-g",{duration:1,opacity:0}),()=>i.revert()},[]),Xe.jsxs(Xe.Fragment,{children:[Xe.jsx(IT,{hidden:l}),Xe.jsx(NU,{}),Xe.jsx(H0,{id:"angel",className:"item-a",children:"angel"}),Xe.jsx("div",{className:"item-c"}),Xe.jsx("div",{className:"item-d"}),Xe.jsx(H0,{id:"elliott",className:"item-e",children:"elliott"}),Xe.jsx("div",{className:"item-f grid-item"}),Xe.jsx("div",{className:"item-g grid-item",children:Xe.jsxs("p",{children:["contact me:"," ",Xe.jsx("a",{className:"email",href:"mailto:angel@angelulloa.com",children:"angel@angelulloa.com"}),Xe.jsx("br",{}),"linkedin:"," ",Xe.jsx("a",{className:"email",href:"https://www.linkedin.com/in/aeulloa",target:"_blank",rel:"noreferrer",children:"@aeulloa"}),Xe.jsx("br",{}),"github:"," ",Xe.jsx("a",{className:"email",href:"http://www.github.com/angelelliott",target:"_blank",rel:"noreferrer",children:"@angelelliott"})]})}),Xe.jsx("div",{className:"item-h grid-item"}),Xe.jsx(H0,{id:"ulloa",className:"item-i",children:"ulloa"})]})}M3.createRoot(document.getElementById("root")).render(Xe.jsx(OU,{}));
