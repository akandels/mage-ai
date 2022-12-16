"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8601],{38789:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}function d(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}function p(e){return{}.toString.call(e).includes("Object")}function h(e){return"function"===typeof e}t.d(n,{ZP:function(){return de},_m:function(){return U}});var g=d((function(e,n){throw new Error(e[n]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),v={changes:function(e,n){return p(n)||g("changeType"),Object.keys(n).some((function(n){return t=e,r=n,!Object.prototype.hasOwnProperty.call(t,r);var t,r}))&&g("changeField"),n},selector:function(e){h(e)||g("selectorType")},handler:function(e){h(e)||p(e)||g("handlerType"),p(e)&&Object.values(e).some((function(e){return!h(e)}))&&g("handlersType")},initial:function(e){var n;e||g("initialIsRequired"),p(e)||g("initialType"),n=e,Object.keys(n).length||g("initialContent")}};function y(e,n){return h(n)?n(e.current):n}function m(e,n){return e.current=s(s({},e.current),n),n}function b(e,n,t){return h(n)?n(e.current):Object.keys(t).forEach((function(t){var r;return null===(r=n[t])||void 0===r?void 0:r.call(n,e.current[t])})),t}var O={create:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v.initial(e),v.handler(n);var t={current:e},r=d(b)(t,n),o=d(m)(t),i=d(v.changes)(e),a=d(y)(t);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return v.selector(e),e(t.current)}function u(e){f(r,o,i,a)(e)}return[c,u]}},w=O,j={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};var M=function(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}};var x=function(e){return{}.toString.call(e).includes("Object")};var E={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},k=M((function(e,n){throw new Error(e[n]||e.default)}))(E),P={config:function(e){return e||k("configIsRequired"),x(e)||k("configType"),e.urls?(console.warn(E.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},R=P,S=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}};var T=function e(n,t){return Object.keys(t).forEach((function(r){t[r]instanceof Object&&n[r]&&Object.assign(t[r],e(n[r],t[r]))})),i(i({},n),t)},N={type:"cancelation",msg:"operation is manually canceled"};var C,Z,q=function(e){var n=!1,t=new Promise((function(t,r){e.then((function(e){return n?r(N):t(e)})),e.catch(r)}));return t.cancel=function(){return n=!0},t},V=w.create({config:j,isInitialized:!1,resolve:null,reject:null,monaco:null}),A=(Z=2,function(e){if(Array.isArray(e))return e}(C=V)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}(C,Z)||function(e,n){if(e){if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}(C,Z)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),I=A[0],D=A[1];function L(e){return document.body.appendChild(e)}function W(e){var n=I((function(e){return{config:e.config,reject:e.reject}})),t=function(e){var n=document.createElement("script");return e&&(n.src=e),n}("".concat(n.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=n.reject,t}function _(){var e=I((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],(function(n){F(n),e.resolve(n)}),(function(n){e.reject(n)}))}function F(e){I().monaco||D({monaco:e})}var z=new Promise((function(e,n){return D({resolve:e,reject:n})})),B={config:function(e){var n=R.config(e),t=n.monaco,r=a(n,["monaco"]);D((function(e){return{config:T(e.config,r),monaco:t}}))},init:function(){var e=I((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(D({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),q(z);if(window.monaco&&window.monaco.editor)return F(window.monaco),e.resolve(window.monaco),q(z);S(L,W)(_)}return q(z)},__getMonacoInstance:function(){return I((function(e){return e.monaco}))}},U=B,H=t(82684),Y=t(47329),$=t.n(Y);function G(){return G=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G.apply(this,arguments)}const J={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var K=function({content:e}){return H.createElement("div",{style:J},e)};var Q={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function X({width:e,height:n,isEditorReady:t,loading:r,_ref:o,className:i,wrapperProps:a}){return H.createElement("section",G({style:{...Q.wrapper,width:e,height:n}},a),!t&&H.createElement(K,{content:r}),H.createElement("div",{ref:o,style:{...Q.fullWidth,...!t&&Q.hide},className:i}))}X.propTypes={width:$().oneOfType([$().number,$().string]).isRequired,height:$().oneOfType([$().number,$().string]).isRequired,loading:$().oneOfType([$().element,$().string]).isRequired,isEditorReady:$().bool.isRequired,className:$().string,wrapperProps:$().object};var ee=X,ne=(0,H.memo)(ee);var te=function(e){(0,H.useEffect)(e,[])};var re=function(e,n,t=!0){const r=(0,H.useRef)(!0);(0,H.useEffect)(r.current||!t?()=>{r.current=!1}:e,n)};function oe(){}function ie(e,n,t,r){return function(e,n){return e.editor.getModel(ae(e,n))}(e,r)||function(e,n,t,r){return e.editor.createModel(n,t,r&&ae(e,r))}(e,n,t,r)}function ae(e,n){return e.Uri.parse(n)}function ce({original:e,modified:n,language:t,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:a,keepCurrentOriginalModel:c,keepCurrentModifiedModel:u,theme:l,loading:s,options:f,height:d,width:p,className:h,wrapperProps:g,beforeMount:v,onMount:y}){const[m,b]=(0,H.useState)(!1),[O,w]=(0,H.useState)(!0),j=(0,H.useRef)(null),M=(0,H.useRef)(null),x=(0,H.useRef)(null),E=(0,H.useRef)(y),k=(0,H.useRef)(v);te((()=>{const e=U.init();return e.then((e=>(M.current=e)&&w(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>j.current?function(){const e=j.current.getModel();var n,t;c||null===(n=e.original)||void 0===n||n.dispose();u||null===(t=e.modified)||void 0===t||t.dispose();j.current.dispose()}():e.cancel()})),re((()=>{const e=j.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(n):n!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),e.pushUndoStop())}),[n],m),re((()=>{j.current.getModel().original.setValue(e)}),[e],m),re((()=>{const{original:e,modified:n}=j.current.getModel();M.current.editor.setModelLanguage(e,r||t),M.current.editor.setModelLanguage(n,o||t)}),[t,r,o],m),re((()=>{M.current.editor.setTheme(l)}),[l],m),re((()=>{j.current.updateOptions(f)}),[f],m);const P=(0,H.useCallback)((()=>{k.current(M.current);const c=ie(M.current,e,r||t,i),u=ie(M.current,n,o||t,a);j.current.setModel({original:c,modified:u})}),[t,n,o,e,r,i,a]),R=(0,H.useCallback)((()=>{j.current=M.current.editor.createDiffEditor(x.current,{automaticLayout:!0,...f}),P(),M.current.editor.setTheme(l),b(!0)}),[f,l,P]);return(0,H.useEffect)((()=>{m&&E.current(j.current,M.current)}),[m]),(0,H.useEffect)((()=>{!O&&!m&&R()}),[O,m,R]),H.createElement(ne,{width:p,height:d,isEditorReady:m,loading:s,_ref:x,className:h,wrapperProps:g})}ce.propTypes={original:$().string,modified:$().string,language:$().string,originalLanguage:$().string,modifiedLanguage:$().string,originalModelPath:$().string,modifiedModelPath:$().string,keepCurrentOriginalModel:$().bool,keepCurrentModifiedModel:$().bool,theme:$().string,loading:$().oneOfType([$().element,$().string]),options:$().object,width:$().oneOfType([$().number,$().string]),height:$().oneOfType([$().number,$().string]),className:$().string,wrapperProps:$().object,beforeMount:$().func,onMount:$().func},ce.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:oe,onMount:oe};var ue=function(e){const n=(0,H.useRef)();return(0,H.useEffect)((()=>{n.current=e}),[e]),n.current};const le=new Map;function se({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:o,path:i,theme:a,line:c,loading:u,options:l,overrideServices:s,saveViewState:f,keepCurrentModel:d,width:p,height:h,className:g,wrapperProps:v,beforeMount:y,onMount:m,onChange:b,onValidate:O}){const[w,j]=(0,H.useState)(!1),[M,x]=(0,H.useState)(!0),E=(0,H.useRef)(null),k=(0,H.useRef)(null),P=(0,H.useRef)(null),R=(0,H.useRef)(m),S=(0,H.useRef)(y),T=(0,H.useRef)(null),N=(0,H.useRef)(r),C=ue(i),Z=(0,H.useRef)(!1);te((()=>{const e=U.init();return e.then((e=>(E.current=e)&&x(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>k.current?function(){var e,n;null===(e=T.current)||void 0===e||e.dispose(),d?f&&le.set(i,k.current.saveViewState()):null===(n=k.current.getModel())||void 0===n||n.dispose();k.current.dispose()}():e.cancel()})),re((()=>{const t=ie(E.current,e||r,n||o,i);t!==k.current.getModel()&&(f&&le.set(C,k.current.saveViewState()),k.current.setModel(t),f&&k.current.restoreViewState(le.get(i)))}),[i],w),re((()=>{k.current.updateOptions(l)}),[l],w),re((()=>{k.current.getOption(E.current.editor.EditorOption.readOnly)?k.current.setValue(r):r!==k.current.getValue()&&(k.current.executeEdits("",[{range:k.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),k.current.pushUndoStop())}),[r],w),re((()=>{E.current.editor.setModelLanguage(k.current.getModel(),o)}),[o],w),re((()=>{void 0!==c&&k.current.revealLine(c)}),[c],w),re((()=>{E.current.editor.setTheme(a)}),[a],w);const q=(0,H.useCallback)((()=>{if(!Z.current){S.current(E.current);const c=i||t,u=ie(E.current,r||e,n||o,c);k.current=E.current.editor.create(P.current,{model:u,automaticLayout:!0,...l},s),f&&k.current.restoreViewState(le.get(c)),E.current.editor.setTheme(a),j(!0),Z.current=!0}}),[e,n,t,r,o,i,l,s,f,a]);return(0,H.useEffect)((()=>{w&&R.current(k.current,E.current)}),[w]),(0,H.useEffect)((()=>{!M&&!w&&q()}),[M,w,q]),N.current=r,(0,H.useEffect)((()=>{var e,n;w&&b&&(null===(e=T.current)||void 0===e||e.dispose(),T.current=null===(n=k.current)||void 0===n?void 0:n.onDidChangeModelContent((e=>{b(k.current.getValue(),e)})))}),[w,b]),(0,H.useEffect)((()=>{if(w){const e=E.current.editor.onDidChangeMarkers((e=>{var n;const t=null===(n=k.current.getModel())||void 0===n?void 0:n.uri;if(t){if(e.find((e=>e.path===t.path))){const e=E.current.editor.getModelMarkers({resource:t});null===O||void 0===O||O(e)}}}));return()=>{null===e||void 0===e||e.dispose()}}}),[w,O]),H.createElement(ne,{width:p,height:h,isEditorReady:w,loading:u,_ref:P,className:g,wrapperProps:v})}se.propTypes={defaultValue:$().string,defaultPath:$().string,defaultLanguage:$().string,value:$().string,language:$().string,path:$().string,theme:$().string,line:$().number,loading:$().oneOfType([$().element,$().string]),options:$().object,overrideServices:$().object,saveViewState:$().bool,keepCurrentModel:$().bool,width:$().oneOfType([$().number,$().string]),height:$().oneOfType([$().number,$().string]),className:$().string,wrapperProps:$().object,beforeMount:$().func,onMount:$().func,onChange:$().func,onValidate:$().func},se.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:oe,onMount:oe,onValidate:oe};var fe=se,de=(0,H.memo)(fe)},52136:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(47329),o=t.n(r),i=t(82684),a=t(63588),c=t.n(a),u=t(5237),l=t(29989),s=t(81352),f=t(46119),d=t(88543),p=t(12765),h=["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"];function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function v(e){var n=e.top,t=void 0===n?0:n,r=e.left,o=void 0===r?0:r,a=e.scale,v=e.height,y=e.stroke,m=void 0===y?"#eaf0f6":y,b=e.strokeWidth,O=void 0===b?1:b,w=e.strokeDasharray,j=e.className,M=e.numTicks,x=void 0===M?10:M,E=e.lineStyle,k=e.offset,P=e.tickValues,R=e.children,S=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,h),T=null!=P?P:(0,f.Z)(a,x),N=(null!=k?k:0)+(0,p.Z)(a)/2,C=T.map((function(e,n){var t,r=(null!=(t=(0,d.Z)(a(e)))?t:0)+N;return{index:n,from:new s.Z({x:r,y:0}),to:new s.Z({x:r,y:v})}}));return i.createElement(l.Z,{className:c()("visx-columns",j),top:t,left:o},R?R({lines:C}):C.map((function(e){var n=e.from,t=e.to,r=e.index;return i.createElement(u.Z,g({key:"column-line-"+r,from:n,to:t,stroke:m,strokeWidth:O,strokeDasharray:w,style:E},S))})))}v.propTypes={tickValues:o().array,height:o().number.isRequired}},53655:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(47329),o=t.n(r),i=t(82684),a=t(63588),c=t.n(a),u=t(29989),l=["className","top","left","data","binWidth","binHeight","x0","gap","xScale","yScale","colorScale","opacityScale","bins","count","children"];function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function f(e){var n=e.className,t=e.top,r=e.left,o=e.data,a=void 0===o?[]:o,f=e.binWidth,d=void 0===f?6:f,p=e.binHeight,h=void 0===p?6:p,g=e.x0,v=void 0===g?0:g,y=e.gap,m=void 0===y?1:y,b=e.xScale,O=e.yScale,w=e.colorScale,j=void 0===w?function(){}:w,M=e.opacityScale,x=void 0===M?function(){return 1}:M,E=e.bins,k=void 0===E?function(e){return null==e?void 0:e.bins}:E,P=e.count,R=void 0===P?function(e){return null==e?void 0:e.count}:P,S=e.children,T=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,l),N=d-m,C=h-m,Z=a.map((function(e,n){var t=b(n);return k(e).map((function(r,o){var i=R(r);return{bin:r,row:o,column:n,datum:e,width:N,height:C,gap:m,count:i,x:t+v,y:O(o)+m,color:j(i),opacity:x(i)}}))}));return S?i.createElement(i.Fragment,null,S(Z)):i.createElement(u.Z,{className:"visx-heatmap-rects",top:t,left:r},Z.map((function(e){return e.map((function(e){return i.createElement("rect",s({key:"heatmap-tile-rect-"+e.row+"-"+e.column,className:c()("visx-heatmap-rect",n),width:e.width,height:e.height,x:e.x,y:e.y,fill:e.color,fillOpacity:e.opacity},T))}))})))}f.propTypes={data:o().array,left:o().number,top:o().number,binWidth:o().number,binHeight:o().number,x0:o().number,gap:o().number,xScale:o().func.isRequired,yScale:o().func.isRequired,bins:o().func,count:o().func,className:o().string,children:o().func}},85587:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(82684),o=t(63588),i=t.n(o),a=t(39309),c=["children","data","x","y","fill","className","curve","innerRef","defined"];function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function l(e){var n=e.children,t=e.data,o=void 0===t?[]:t,l=e.x,s=e.y,f=e.fill,d=void 0===f?"transparent":f,p=e.className,h=e.curve,g=e.innerRef,v=e.defined,y=void 0===v?function(){return!0}:v,m=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,c),b=(0,a.jv)({x:l,y:s,defined:y,curve:h});return n?r.createElement(r.Fragment,null,n({path:b})):r.createElement("path",u({ref:g,className:i()("visx-linepath",p),d:b(o)||"",fill:d,strokeLinecap:"round"},m))}},39309:function(e,n,t){t.d(n,{SO:function(){return a},jv:function(){return c}});var r=t(48167),o=t(92201),i=t(49894);function a(e){var n=void 0===e?{}:e,t=n.x,o=n.x0,a=n.x1,c=n.y,u=n.y0,l=n.y1,s=n.defined,f=n.curve,d=(0,r.Z)();return t&&(0,i.Z)(d.x,t),o&&(0,i.Z)(d.x0,o),a&&(0,i.Z)(d.x1,a),c&&(0,i.Z)(d.y,c),u&&(0,i.Z)(d.y0,u),l&&(0,i.Z)(d.y1,l),s&&d.defined(s),f&&d.curve(f),d}function c(e){var n=void 0===e?{}:e,t=n.x,r=n.y,a=n.defined,c=n.curve,u=(0,o.Z)();return t&&(0,i.Z)(u.x,t),r&&(0,i.Z)(u.y,r),a&&u.defined(a),c&&u.curve(c),u}},98889:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(47329),o=t.n(r),i=t(82684),a=t(63588),c=t.n(a),u=t(39309),l=["children","x","x0","x1","y","y0","y1","data","defined","className","curve","innerRef"];function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function f(e){var n=e.children,t=e.x,r=e.x0,o=e.x1,a=e.y,f=e.y0,d=e.y1,p=e.data,h=void 0===p?[]:p,g=e.defined,v=void 0===g?function(){return!0}:g,y=e.className,m=e.curve,b=e.innerRef,O=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,l),w=(0,u.SO)({x:t,x0:r,x1:o,y:a,y0:f,y1:d,defined:v,curve:m});return n?i.createElement(i.Fragment,null,n({path:w})):i.createElement("path",s({ref:b,className:c()("visx-area",y),d:w(h)||""},O))}var d=["id","children"];function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function h(e){var n=e.id,t=e.children,r=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,d);return i.createElement("defs",null,i.createElement("clipPath",p({id:n},r),t))}function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function v(e){var n=e.className,t=e.curve,r=e.clipAboveTo,o=e.clipBelowTo,a=e.data,u=e.defined,l=e.x,s=e.y0,d=e.y1,p=e.aboveAreaProps,v=e.belowAreaProps,y=e.id,m=void 0===y?"":y;return i.createElement("g",{className:c()("visx-threshold",n)},i.createElement(f,{curve:t,data:a,x:l,y1:d,defined:u},(function(e){var n=e.path,t=null,c=null;return t=n.y0(o)(a),c=n.y0(r)(a),i.createElement("g",null,i.createElement(h,{id:"threshold-clip-below-"+m},i.createElement("path",{d:t||""})),i.createElement(h,{id:"threshold-clip-above-"+m},i.createElement("path",{d:c||""})))})),i.createElement(f,g({curve:t,data:a,defined:u,x:l,y0:s,y1:d,strokeWidth:0,clipPath:"url(#threshold-clip-below-"+m+")"},v)),i.createElement(f,g({curve:t,data:a,defined:u,x:l,y0:s,y1:d,strokeWidth:0,clipPath:"url(#threshold-clip-above-"+m+")"},p)))}h.propTypes={id:o().string.isRequired,children:o().node},v.propTypes={className:o().string,clipAboveTo:o().oneOfType([o().func,o().number]).isRequired,clipBelowTo:o().oneOfType([o().func,o().number]).isRequired,id:o().string.isRequired,data:o().array.isRequired,defined:o().func,x:o().oneOfType([o().func,o().number]).isRequired,y0:o().oneOfType([o().func,o().number]).isRequired,y1:o().oneOfType([o().func,o().number]).isRequired}}}]);