"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7400],{98677:function(n,t,e){function r(n,t,e){n=+n,t=+t,e=(i=arguments.length)<2?(t=n,n=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((t-n)/e)),o=new Array(i);++r<i;)o[r]=n+r*e;return o}e.d(t,{Z:function(){return a}});var i=e(8208),o=e(8162);function u(){var n,t,e=(0,o.Z)().unknown(void 0),c=e.domain,a=e.range,l=0,d=1,f=!1,s=0,p=0,h=.5;function v(){var e=c().length,i=d<l,o=i?d:l,u=i?l:d;n=(u-o)/Math.max(1,e-s+2*p),f&&(n=Math.floor(n)),o+=(u-o-n*(e-s))*h,t=n*(1-s),f&&(o=Math.round(o),t=Math.round(t));var v=r(e).map((function(t){return o+n*t}));return a(i?v.reverse():v)}return delete e.unknown,e.domain=function(n){return arguments.length?(c(n),v()):c()},e.range=function(n){return arguments.length?([l,d]=n,l=+l,d=+d,v()):[l,d]},e.rangeRound=function(n){return[l,d]=n,l=+l,d=+d,f=!0,v()},e.bandwidth=function(){return t},e.step=function(){return n},e.round=function(n){return arguments.length?(f=!!n,v()):f},e.padding=function(n){return arguments.length?(s=Math.min(1,p=+n),v()):s},e.paddingInner=function(n){return arguments.length?(s=Math.min(1,n),v()):s},e.paddingOuter=function(n){return arguments.length?(p=+n,v()):p},e.align=function(n){return arguments.length?(h=Math.max(0,Math.min(1,n)),v()):h},e.copy=function(){return u(c(),[l,d]).round(f).paddingInner(s).paddingOuter(p).align(h)},i.o.apply(v(),arguments)}var c=(0,e(11812).Z)("domain","range","reverse","align","padding","round");function a(n){return c(u(),n)}},62072:function(n,t,e){function r(n){return null==n?void 0:n[0]}function i(n){return null==n?void 0:n[1]}e.d(t,{l8:function(){return r},xf:function(){return i}})},53989:function(n,t,e){function r(n){if("bandwidth"in n)return n.bandwidth();var t=n.range(),e=n.domain();return Math.abs(t[t.length-1]-t[0])/e.length}e.d(t,{Z:function(){return r}})},59309:function(n,t,e){e.d(t,{ZP:function(){return l}});var r=e(12759),i=e(27500),o=e(82610),u=e(34812),c=e(77944),a={expand:r.Z,diverging:i.Z,none:o.Z,silhouette:u.Z,wiggle:c.Z};Object.keys(a);function l(n){return n&&a[n]||a.none}},18246:function(n,t,e){e.d(t,{ZP:function(){return l}});var r=e(39586),i=e(25516),o=e(54164),u=e(8512),c=e(2010),a={ascending:r.Z,descending:i.Z,insideout:o.Z,none:u.Z,reverse:c.Z};Object.keys(a);function l(n){return n&&a[n]||a.none}},13946:function(n,t,e){e.d(t,{t:function(){return r}});var r=Array.prototype.slice},27500:function(n,t,e){function r(n,t){if((c=n.length)>0)for(var e,r,i,o,u,c,a=0,l=n[t[0]].length;a<l;++a)for(o=u=0,e=0;e<c;++e)(i=(r=n[t[e]][a])[1]-r[0])>0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=u,r[0]=u+=i):(r[0]=0,r[1]=i)}e.d(t,{Z:function(){return r}})},12759:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(82610);function i(n,t){if((i=n.length)>0){for(var e,i,o,u=0,c=n[0].length;u<c;++u){for(o=e=0;e<i;++e)o+=n[e][u][1]||0;if(o)for(e=0;e<i;++e)n[e][u][1]/=o}(0,r.Z)(n,t)}}},82610:function(n,t,e){function r(n,t){if((i=n.length)>1)for(var e,r,i,o=1,u=n[t[0]],c=u.length;o<i;++o)for(r=u,u=n[t[o]],e=0;e<c;++e)u[e][1]+=u[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}e.d(t,{Z:function(){return r}})},34812:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(82610);function i(n,t){if((e=n.length)>0){for(var e,i=0,o=n[t[0]],u=o.length;i<u;++i){for(var c=0,a=0;c<e;++c)a+=n[c][i][1]||0;o[i][1]+=o[i][0]=-a/2}(0,r.Z)(n,t)}}},77944:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(82610);function i(n,t){if((o=n.length)>0&&(i=(e=n[t[0]]).length)>0){for(var e,i,o,u=0,c=1;c<i;++c){for(var a=0,l=0,d=0;a<o;++a){for(var f=n[t[a]],s=f[c][1]||0,p=(s-(f[c-1][1]||0))/2,h=0;h<a;++h){var v=n[t[h]];p+=(v[c][1]||0)-(v[c-1][1]||0)}l+=s,d+=p*s}e[c-1][1]+=e[c-1][0]=u,l&&(u-=d/l)}e[c-1][1]+=e[c-1][0]=u,(0,r.Z)(n,t)}}},34128:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(8512);function i(n){var t=n.map(o);return(0,r.Z)(n).sort((function(n,e){return t[n]-t[e]}))}function o(n){for(var t,e=-1,r=0,i=n.length,o=-1/0;++e<i;)(t=+n[e][1])>o&&(o=t,r=e);return r}},39586:function(n,t,e){e.d(t,{S:function(){return o},Z:function(){return i}});var r=e(8512);function i(n){var t=n.map(o);return(0,r.Z)(n).sort((function(n,e){return t[n]-t[e]}))}function o(n){for(var t,e=0,r=-1,i=n.length;++r<i;)(t=+n[r][1])&&(e+=t);return e}},25516:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(39586);function i(n){return(0,r.Z)(n).reverse()}},54164:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(34128),i=e(39586);function o(n){var t,e,o=n.length,u=n.map(i.S),c=(0,r.Z)(n),a=0,l=0,d=[],f=[];for(t=0;t<o;++t)e=c[t],a<l?(a+=u[e],d.push(e)):(l+=u[e],f.push(e));return f.reverse().concat(d)}},8512:function(n,t,e){function r(n){for(var t=n.length,e=new Array(t);--t>=0;)e[t]=t;return e}e.d(t,{Z:function(){return r}})},2010:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(8512);function i(n){return(0,r.Z)(n).reverse()}},75823:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(13946),i=e(90875),o=e(82610),u=e(8512);function c(n,t){return n[t]}function a(){var n=(0,i.Z)([]),t=u.Z,e=o.Z,a=c;function l(r){var i,o,u=n.apply(this,arguments),c=r.length,l=u.length,d=new Array(l);for(i=0;i<l;++i){for(var f,s=u[i],p=d[i]=new Array(c),h=0;h<c;++h)p[h]=f=[0,+a(r[h],s,h,r)],f.data=r[h];p.key=s}for(i=0,o=t(d);i<l;++i)d[o[i]].index=i;return e(d,o),d}return l.keys=function(t){return arguments.length?(n="function"===typeof t?t:(0,i.Z)(r.t.call(t)),l):n},l.value=function(n){return arguments.length?(a="function"===typeof n?n:(0,i.Z)(+n),l):a},l.order=function(n){return arguments.length?(t=null==n?u.Z:"function"===typeof n?n:(0,i.Z)(r.t.call(n)),l):t},l.offset=function(n){return arguments.length?(e=null==n?o.Z:n,l):e},l}},92953:function(n,t,e){var r;e.d(t,{a:function(){return r}}),function(n){n.BLOCK_RUNS="block_runs",n.BLOCK_RUNTIME="block_runtime",n.PIPELINE_RUNS="pipeline_runs"}(r||(r={}))},87465:function(n,t,e){e.d(t,{Z:function(){return g}});e(82684);var r=e(34376),i=e(87372),o=e(38965),u=e(86673),c=e(19711),a=e(2850),l=e(46313),d=e(23831),f=e(49125),s=l.default.div.withConfig({displayName:"indexstyle__LinkStyle",componentId:"sc-1in9sst-0"})(["padding:","px ","px;"," ",""],f.iI,f.tr,(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||d.Z.interactive).checked,";\n  ")}),(function(n){return!n.selected&&"\n    cursor: pointer;\n  "})),p=e(92953),h=e(59920),v=e(28598);var g=function(n){var t=n.breadcrumbs,e=n.children,l=n.monitorType,d=n.pipeline,g=n.subheader,m=(0,r.useRouter)();return(0,v.jsx)(o.Z,{before:(0,v.jsxs)(a.M,{children:[(0,v.jsx)(u.Z,{p:f.cd,children:(0,v.jsx)(i.Z,{level:4,muted:!0,children:"Insights"})}),(0,v.jsx)(s,{onClick:function(n){n.preventDefault(),m.push("/pipelines/[pipeline]/monitors","/pipelines/".concat(null===d||void 0===d?void 0:d.uuid,"/monitors"))},selected:p.a.PIPELINE_RUNS==l,children:(0,v.jsx)(c.ZP,{children:"Pipeline runs"})}),(0,v.jsx)(s,{onClick:function(n){n.preventDefault(),m.push("/pipelines/[pipeline]/monitors/block-runs","/pipelines/".concat(null===d||void 0===d?void 0:d.uuid,"/monitors/block-runs"))},selected:p.a.BLOCK_RUNS==l,children:(0,v.jsx)(c.ZP,{children:"Block runs"})}),(0,v.jsx)(s,{onClick:function(n){n.preventDefault(),m.push("/pipelines/[pipeline]/monitors/block-runtime","/pipelines/".concat(null===d||void 0===d?void 0:d.uuid,"/monitors/block-runtime"))},selected:p.a.BLOCK_RUNTIME==l,children:(0,v.jsx)(c.ZP,{children:"Block runtime"})})]}),breadcrumbs:t,pageName:h.M.MONITOR,pipeline:d,subheader:g,uuid:"pipeline/monitor",children:e})}},2850:function(n,t,e){e.d(t,{M:function(){return u}});var r=e(46313),i=e(23831),o=e(3055),u=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],o.Mz,(function(n){return"\n    border-left: 1px solid ".concat((n.theme.borders||i.Z.borders).medium,";\n  ")}))},21679:function(n,t,e){e.d(t,{Z:function(){return Y}});var r=e(26304),i=e(82394),o=e(77555),u=e(82684),c=e(84969),a=e(90948),l=e(63588),d=e.n(l),f=e(75823),s=e(29989),p=e(62072),h=e(53989),v=e(49894),g=e(18246),m=e(59309),Z=e(65743),x=["data","className","top","left","x","y0","y1","xScale","yScale","color","keys","value","order","offset","children"];function y(){return y=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},y.apply(this,arguments)}function b(n){var t=n.data,e=n.className,r=n.top,i=n.left,o=n.x,c=n.y0,a=void 0===c?p.l8:c,l=n.y1,b=void 0===l?p.xf:l,j=n.xScale,k=n.yScale,w=n.color,O=n.keys,P=n.value,M=n.order,S=n.offset,_=n.children,E=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,x),I=(0,f.Z)();O&&I.keys(O),P&&(0,v.Z)(I.value,P),M&&I.order((0,g.ZP)(M)),S&&I.offset((0,m.ZP)(S));var N=I(t),L=(0,h.Z)(j),T=N.map((function(n,t){var e=n.key;return{index:t,key:e,bars:n.map((function(t,r){var i=(k(a(t))||0)-(k(b(t))||0),u=k(b(t)),c="bandwidth"in j?j(o(t.data)):Math.max((j(o(t.data))||0)-L/2);return{bar:t,key:e,index:r,height:i,width:L,x:c||0,y:u||0,color:w(n.key,r)}}))}}));return _?u.createElement(u.Fragment,null,_(T)):u.createElement(s.Z,{className:d()("visx-bar-stack",e),top:r,left:i},T.map((function(n){return n.bars.map((function(t){return u.createElement(Z.Z,y({key:"bar-stack-"+n.index+"-"+t.index,x:t.x,y:t.y,height:t.height,width:t.width,fill:t.color},E))}))})))}var j=e(67778),k=e(17066),w=e(29179),O=e(65376),P=e(48072),M=e(98677),S=e(84181),_=e(24903),E=e(67971),I=e(26226),N=e(19711),L=e(52359),T=e(23831),A=e(73942),C=e(2005),D=e(49125),R=e(344),F=e(28598),B=["height","width","xAxisLabel","yAxisLabel"];function U(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function V(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?U(Object(e),!0).forEach((function(t){(0,i.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):U(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function K(n){var t=n.colors,e=n.data,r=n.getXValue,i=(n.getYValue,n.height),u=n.keys,l=n.margin,d=n.numYTicks,f=n.showLegend,p=n.width,h=n.xLabelFormat,v=n.yLabelFormat,g=(0,w.Z)(),m=g.hideTooltip,Z=g.showTooltip,x=g.tooltipData,y=g.tooltipLeft,E=g.tooltipOpen,I=g.tooltipTop,L=p-(l.left+l.right),D=i-(l.bottom+l.top),B=e.reduce((function(n,t){var e=t,r=u.reduce((function(n,t){return Number(e[t])&&(n+=Number(e[t])),n}),0);return n.push(r),n}),[]),U=(0,M.Z)({domain:e.map(r),padding:.4,range:[0,L],round:!1}),K=(0,S.Z)({domain:[0,Math.max.apply(Math,(0,o.Z)(B))],range:[D,0],round:!0}),Y=(0,_.Z)({domain:u,range:t});return(0,F.jsxs)("div",{style:{position:"relative"},children:[(0,F.jsxs)("svg",{width:p,height:i,children:[(0,F.jsx)("rect",{x:0,y:0,width:p,height:i,fill:"#2E3036",rx:14}),(0,F.jsx)(j.Z,{top:l.top,left:l.left,scale:K,width:L,height:D,stroke:"black",strokeOpacity:.2}),(0,F.jsx)(s.Z,{top:l.top,children:(0,F.jsx)(b,{data:e,keys:u,value:function(n,t){return n[t]||0},x:r,xScale:U,yScale:K,color:Y,children:function(n){return n.map((function(n){return n.bars.map((function(t){return(0,F.jsx)("rect",{x:t.x,y:t.y,height:t.height,width:t.width,fill:t.color,onMouseLeave:m,onMouseMove:function(n){var e=(0,P.Z)(n),r=t.x+t.width/2;Z({tooltipData:t,tooltipTop:null===e||void 0===e?void 0:e.y,tooltipLeft:r})}},"bar-stack-".concat(n.index,"-").concat(t.index))}))}))}})}),(0,F.jsx)(c.Z,{hideTicks:!0,left:l.left,numTicks:d,scale:K,stroke:T.Z.content.muted,tickFormat:function(n){return v?v(n):(0,R.P5)(n)},tickLabelProps:function(){return{fill:T.Z.content.muted,fontFamily:C.ry,fontSize:11,textAnchor:"end",transform:"translate(0,2.5)"}},top:l.top}),(0,F.jsx)(a.Z,{hideTicks:!0,left:l.left,top:D+l.top,scale:U,stroke:T.Z.content.muted,tickFormat:h,tickLabelProps:function(){return{fill:T.Z.content.muted,fontFamily:C.ry,fontSize:11,textAnchor:"middle"}}})]}),f&&(0,F.jsx)("div",{style:{position:"absolute",top:l.top/2-10,width:"100%",display:"flex",justifyContent:"center",fontSize:"14px"},children:(0,F.jsx)(k.Z,{scale:Y,direction:"row",labelMargin:"0 15px 0 0"})}),E&&x&&(0,F.jsxs)(O.Z,{top:I,left:y,style:V(V({},O.j),{},{backgroundColor:T.Z.background.page,borderRadius:"".concat(A.TR,"px")}),children:[(0,F.jsx)(N.ZP,{bold:!0,color:Y(x.key),children:x.key}),(0,F.jsx)(N.ZP,{children:x.bar.data[x.key]}),(0,F.jsx)(N.ZP,{children:r(x.bar.data)})]})]})}var Y=function(n){var t=n.height,e=n.width,i=n.xAxisLabel,o=n.yAxisLabel,u=(0,r.Z)(n,B);return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)("div",{style:{height:t,marginBottom:D.iI,width:e},children:[o&&(0,F.jsx)(E.Z,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,F.jsx)(L.Z,{children:(0,F.jsx)(N.ZP,{center:!0,muted:!0,small:!0,children:o})})}),(0,F.jsx)("div",{style:{height:t,width:o?0===e?e:e-28:e},children:(0,F.jsx)(I.Z,{children:function(n){var t=n.height,e=n.width;return(0,F.jsx)(K,V(V({},u),{},{height:t,width:e}))}})}),i&&(0,F.jsx)("div",{style:{paddingLeft:o?36:0,paddingTop:4},children:(0,F.jsx)(N.ZP,{center:!0,muted:!0,small:!0,children:i})})]})})}},52359:function(n,t,e){var r=e(46313).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);t.Z=r},344:function(n,t,e){e.d(t,{P5:function(){return c},Pw:function(){return i},Vs:function(){return l},Xh:function(){return o},fR:function(){return a}});var r=e(90211),i=20,o=10,u=Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:2});function c(n){return"number"!==typeof n?n:n>=1e4?u.format(n):n.toString()}function a(n,t){var e=(0,r.HW)(n)?String((0,r.QV)(n,1)):String(n);return e.length>t?"".concat(e.substring(0,t),"..."):e}function l(n,t,e){var r,i;if("undefined"===typeof n||"undefined"===typeof t)return 0;var o=null===n||void 0===n||null===(r=n(t,e))||void 0===r||null===(i=r.props)||void 0===i?void 0:i.children;return(Array.isArray(o)?o:[o]).join("").length}},93348:function(n,t,e){e.d(t,{U5:function(){return c},Xm:function(){return i},Z4:function(){return a},fq:function(){return u}});var r,i,o=e(82394);!function(n){n.API="api",n.EVENT="event",n.TIME="time"}(i||(i={}));var u,c,a=(r={},(0,o.Z)(r,i.API,(function(){return"API"})),(0,o.Z)(r,i.EVENT,(function(){return"event"})),(0,o.Z)(r,i.TIME,(function(){return"schedule"})),r);!function(n){n.ACTIVE="active",n.INACTIVE="inactive"}(u||(u={})),function(n){n.ONCE="@once",n.HOURLY="@hourly",n.DAILY="@daily",n.WEEKLY="@weekly",n.MONTHLY="@monthly"}(c||(c={}))},67400:function(n,t,e){e.r(t),e.d(t,{BAR_STACK_COLORS:function(){return N},BAR_STACK_STATUSES:function(){return L}});var r=e(77837),i=e(12757),o=e(82394),u=e(38860),c=e.n(u),a=e(82684),l=e(12691),d=e.n(l),f=e(92083),s=e.n(f),p=e(46313),h=e(21679),v=e(67971),g=e(87372),m=e(10919),Z=e(87465),x=e(86673),y=e(19711),b=e(41374),j=e(23831),k=e(10503),w=e(92953),O=e(93348),P=e(49125),M=e(90211),S=e(28598);function _(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function E(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?_(Object(e),!0).forEach((function(t){(0,o.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var I=p.default.div.withConfig({displayName:"monitors__GradientTextStyle",componentId:"sc-1is2m2l-0"})(["background:linear-gradient(90deg,#7D55EC 28.12%,#2AB2FE 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;"]),N=[j.Z.accent.warning,j.Z.background.success,j.Z.accent.negative,j.Z.content.active,j.Z.interactive.linkPrimary],L=["cancelled","completed","failed","initial","running"];function T(n){var t=n.pipeline.uuid,e=b.ZP.pipeline_schedules.pipelines.list(t).data,r=(0,a.useMemo)((function(){return null===e||void 0===e?void 0:e.pipeline_schedules}),[e]),u=(0,a.useMemo)((function(){return null===r||void 0===r?void 0:r.reduce((function(n,t){return E(E({},n),{},(0,o.Z)({},null===t||void 0===t?void 0:t.id,t))}),{})}),[r]),c=b.ZP.pipelines.detail(t,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,l=(0,a.useMemo)((function(){return E(E({},null===c||void 0===c?void 0:c.pipeline),{},{uuid:t})}),[c,t]),f=b.ZP.monitor_stats.detail("pipeline_run_count",{pipeline_uuid:null===l||void 0===l?void 0:l.uuid}).data,p=((null===f||void 0===f?void 0:f.monitor_stats)||{}).stats,j=(0,a.useMemo)((function(){for(var n=new Date,t=[],e=0;e<90;e++)t.unshift(n.toISOString().split("T")[0]),n.setDate(n.getDate()-1);return t}),[]),_=(0,a.useMemo)((function(){if(p){var n=Object.entries(p).reduce((function(n,t){var e=(0,i.Z)(t,2),r=(e[0],e[1].data),o={};return Object.entries(r).forEach((function(t){var e=(0,i.Z)(t,2),r=e[0],u=e[1],c={};r in n&&(c=n[r]);var a={};Object.entries(u).forEach((function(n){var t,e=(0,i.Z)(n,2),r=e[0],o=e[1],u=null!==(t=c)&&void 0!==t&&t[r]?c[r]:0;a[r]=u+o})),o[r]=E(E({},c),a)})),E(E({},n),o)}),{});return j.map((function(t){return E({date:t},n[t]||{})}))}return[]}),[j,p]),T=(0,a.useMemo)((function(){if(p)return Object.entries(p).reduce((function(n,t){var e=(0,i.Z)(t,2),r=e[0],u=e[1].data,c=j.map((function(n){return E({date:n},u[n]||{})}));return E(E({},n),{},(0,o.Z)({},r,c))}),{})}),[j,p]),A=(0,a.useMemo)((function(){var n=[];return n.push({bold:!0,label:function(){return"Monitors"}}),n}),[l]);return(0,S.jsx)(Z.Z,{breadcrumbs:A,monitorType:w.a.PIPELINE_RUNS,pipeline:l,children:(0,S.jsxs)(x.Z,{mt:2,mx:2,children:[(0,S.jsx)(x.Z,{ml:1,children:(0,S.jsx)(I,{children:(0,S.jsx)(g.Z,{children:"All pipeline runs"})})}),(0,S.jsx)(x.Z,{mt:1,children:(0,S.jsx)(h.Z,{colors:N,data:_,getXValue:function(n){return n.date},height:200,keys:L,margin:{top:10,bottom:30,left:35,right:0},xLabelFormat:function(n){return s()(n).format("MMM DD")}})}),T&&Object.entries(T).map((function(n){var e,r=(0,i.Z)(n,2),o=r[0],c=r[1],a=null===u||void 0===u?void 0:u[o];return(0,S.jsxs)(x.Z,{mt:3,children:[(0,S.jsxs)(v.Z,{alignItems:"center",children:[(0,S.jsx)(x.Z,{mx:1,children:(0,S.jsx)(I,{children:(0,S.jsx)(y.ZP,{bold:!0,large:!0,children:(0,M.kC)(null===(e=O.Z4[null===a||void 0===a?void 0:a.schedule_type])||void 0===e?void 0:e.call(O.Z4))})})}),(0,S.jsx)(d(),{as:"/pipelines/".concat(t,"/triggers/").concat(null===a||void 0===a?void 0:a.id),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,S.jsx)(m.Z,{children:(0,S.jsxs)(v.Z,{alignItems:"center",children:[(0,S.jsx)(g.Z,{level:5,children:(null===a||void 0===a?void 0:a.name)||o}),(0,S.jsx)(x.Z,{ml:1}),(0,S.jsx)(k._Q,{default:!0,size:2*P.iI})]})})})]}),(0,S.jsx)(x.Z,{mt:1,children:(0,S.jsx)(h.Z,{colors:N,data:c,getXValue:function(n){return n.date},height:200,keys:L,margin:{top:10,bottom:30,left:35,right:0},xLabelFormat:function(n){return s()(n).format("MMM DD")}})})]})}))]})})}T.getInitialProps=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query.pipeline,n.abrupt("return",{pipeline:{uuid:e}});case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t.default=T}}]);