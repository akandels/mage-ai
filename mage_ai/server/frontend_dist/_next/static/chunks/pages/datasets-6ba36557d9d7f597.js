(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9671],{59739:function(n,e,t){"use strict";var r=t(56669);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},47329:function(n,e,t){n.exports=t(59739)()},56669:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},36770:function(n,e,t){"use strict";t.d(e,{d:function(){return k},Z:function(){return E}});var r=t(12757),o=t(82684),i=t(34376),c=t(82394),a=t(12691),l=t.n(a),u=t(60328),d=t(57639),s=t(93461),f=t(67971),h=t(10919),p=t(86673),b=t(19711),g=t(10503),m=t(28598);function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,c.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function x(n,e){var t=n.as,r=n.bold,o=n.button,i=n.hideIcon,c=n.href,a=n.label,v=n.large,x=n.linkProps,j=n.onClick,w=n.selected,_=n.title,Z=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,m.jsxs)(f.Z,{alignItems:"center",children:[(0,m.jsx)(s.Z,{children:(0,m.jsxs)(p.Z,{mr:e?0:{xs:1},children:[!n&&a,n&&(0,m.jsx)(b.ZP,{bold:!0,headline:v,primary:!w,title:_,children:a})]})}),!i&&(0,m.jsx)(s.Z,{children:(0,m.jsx)(b.ZP,{large:v,muted:!0,children:" / "})})]})},k=y(y({},x),{},{block:!0,bold:r||w,headline:v,title:_}),P=o?(0,m.jsx)(u.Z,{afterIcon:(0,m.jsx)(g.K5,{size:12}),basic:!0,noPadding:!0,onClick:j,ref:e,transparent:!0,children:Z(!0,!0)}):(0,m.jsx)(h.Z,y(y({},k),{},{onClick:j,children:Z()}));return(0,m.jsx)(d.Z,{children:(0,m.jsxs)(p.Z,{mr:{xs:1},children:[!c&&!j&&Z(!0),c&&!j&&(0,m.jsx)(l(),{as:t,href:c,passHref:!0,children:(0,m.jsx)(h.Z,y(y({},k),{},{children:Z()}))}),!c&&j&&P]})})}var j=o.forwardRef(x);function w(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function _(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?w(Object(t),!0).forEach((function(e){(0,c.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function Z(n,e){var t=n.bold,r=n.breadcrumbs,o=n.large,i=n.linkProps;return(0,m.jsx)(f.Z,{children:r.map((function(n,c){return(0,m.jsx)(s.Z,{children:(0,m.jsx)(j,_(_({bold:t,hideIcon:c===r.length-1},n),{},{large:o,linkProps:i,ref:e}))},"".concat(n.label,"_").concat(c)||c)}))})}var k,P=o.forwardRef(Z),O=t(6753),T=t(59e3);!function(n){n.DATASETS="datasets",n.DATASET_DETAIL="dataset_detail",n.COLUMNS="features",n.COLUMN_DETAIL="feature_detail",n.EXPORT="export"}(k||(k={}));function C(n,e){var t,o,c=n.featureSet,a=n.setColumnListMenuVisible,l=(0,i.useRouter)().query.slug,u=void 0===l?[]:l,d=(0,T.iV)(),s=d[O.yg],f=d.show_columns,h=d.column,p=(0,r.Z)(u,1)[0],b=["datasets"].concat(u),g=((null===c||void 0===c||null===(t=c.sample_data)||void 0===t?void 0:t.columns)||[])[h],v=(null===c||void 0===c||null===(o=c.metadata)||void 0===o?void 0:o.name)||"dataset",y=[],x="".concat(O.yg,"=").concat(s||O.mW),j="".concat(O.AE,"=").concat(f||0);b.length>0&&b.forEach((function(n,e){var t=k.DATASETS,r="/".concat(k.DATASETS);1===e?(t=v.length>35?"".concat(v.slice(0,35),"..."):v,r="/".concat(k.DATASETS,"/").concat(p,"?").concat(x,"&").concat(j)):n===k.EXPORT&&(t=k.EXPORT,r="/".concat(k.DATASETS,"/").concat(p,"/").concat(k.EXPORT));var o={bold:!0,href:r,label:t,title:1===e?v:null};y.push(o)})),"undefined"!==typeof h&&g&&y.push({bold:!0,label:g.length>35?"".concat(g.slice(0,35),"..."):g,title:g});var w=y[y.length-1];return w.selected=!0,w.href=null,w.label!==k.EXPORT&&(w.button=!0,w.onClick=function(){return a(!0)}),(0,m.jsx)(P,{breadcrumbs:y,large:!0,linkProps:{noHoverUnderline:!0},ref:e})}var E=o.forwardRef(C)},6753:function(n,e,t){"use strict";t.d(e,{AE:function(){return o},Ek:function(){return u},H3:function(){return i},jh:function(){return l},mW:function(){return c},oE:function(){return a},yg:function(){return r}});var r="tabs[]",o="show_columns",i="column",c="Reports",a="Visualizations",l="Data",u=[c,a,l]},69345:function(n,e,t){"use strict";t.d(e,{FH:function(){return u},o_:function(){return d}});var r=t(12757),o=t(34376),i=t(6753),c=t(36770),a=t(59e3),l=["Bad","Worse","Worst"],u=function(n){return l.includes(n)},d=function(n,e){var t=(0,o.useRouter)().query.slug,l=void 0===t?[]:t,u=(0,r.Z)(l,1)[0],d=(0,a.iV)(),s=d.show_columns,f=d.column,h="/".concat(c.d.DATASETS,"/").concat(u),p="".concat(i.H3,"=").concat(f||e),b="".concat(i.yg,"=").concat(n,"&").concat(p,"&").concat(i.AE,"=").concat(s||0);return"".concat(h,"?").concat(b)}},84201:function(n,e,t){"use strict";var r=t(82684),o=t(93461),i=t(67971),c=t(70759),a=t(28598);e.Z=function(n){var e=n.border,t=n.children,l=n.columnFlexNumbers,u=n.condensed,d=n.flexStart,s=n.last,f=n.noHorizontalPadding,h=n.secondary;return(0,a.jsx)(c.gI,{border:e,condensed:u,last:s,noHorizontalPadding:f,secondary:h,children:(0,a.jsx)(i.Z,{alignItems:d?"flex-start":"center",children:r.Children.map(t,(function(n,e){return n&&l?(0,a.jsx)(o.Z,{alignItems:"center",flex:l[e],children:n},"row-card-item-".concat(e)):n}))})})}},70759:function(n,e,t){"use strict";t.d(e,{$B:function(){return d},VH:function(){return s},gI:function(){return f},kA:function(){return u}});var r=t(9518),o=t(31969),i=t(73942),c=t(49125),a=1.5*c.iI,l=1.5*c.iI,u=r.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-13p7y8j-0"})(["",""],(function(n){return n.width&&"\n    width: ".concat(n.width,"px;\n  ")})),d=r.default.div.withConfig({displayName:"indexstyle__RowContainerStyle",componentId:"sc-13p7y8j-1"})(["border-bottom-left-radius:","px;border-bottom-right-radius:","px;margin-bottom:","px;"," "," ",""],i.n_,i.n_,a,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).page,";\n    border: ").concat(i.YF,"px ").concat(i.M8," ").concat((n.theme.interactive||o.Z.interactive).defaultBorder,";\n    border-top: none;\n  ")}),(function(n){return n.minHeight>0&&"\n    min-height: ".concat(n.minHeight,"px;\n  ")}),(function(n){return n.scrollable&&"\n    margin-bottom: ".concat(c.iI,"px;\n    overflow-y: auto;\n    padding-top: ").concat(3,"px;\n    padding-left: ").concat(3,"px;\n    padding-right: ").concat(3,"px;\n  ")})),s=r.default.div.withConfig({displayName:"indexstyle__TitleStyle",componentId:"sc-13p7y8j-2"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;",""],i.n_,i.n_,a,2*c.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).header,";\n    border: ").concat(i.YF,"px ").concat(i.M8," ").concat((n.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")})),f=r.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-13p7y8j-3"})(["padding:","px ","px;"," "," "," "," "," ",""],l,2*c.iI,(function(n){return n.noHorizontalPadding&&"\n    padding-left: 0;\n    padding-right: 0;\n  "}),(function(n){return n.condensed&&"\n    padding-top: ".concat(9,"px;\n    padding-bottom: ").concat(9,"px;\n  ")}),(function(n){return!n.secondary&&"\n    background-color: ".concat((n.theme.background||o.Z.background).row,";\n  ")}),(function(n){return n.secondary&&"\n    background-color: ".concat((n.theme.background||o.Z.background).row2,";\n  ")}),(function(n){return n.last&&"\n    border-bottom-left-radius: ".concat(i.n_,"px;\n    border-bottom-right-radius: ").concat(i.n_,"px;\n  ")}),(function(n){return n.border&&"\n    border: 1px solid ".concat((n.theme.monotone||o.Z.monotone).grey200,";\n    border-radius: ").concat(i.n_,"px;\n  ")}))},11754:function(n,e,t){"use strict";var r=t(82684),o=t(67971),i=t(19711),c=t(70759),a=t(28598);e.Z=function(n){var e=n.alternating,t=n.children,l=n.headerDetails,u=n.headerTitle,d=n.minHeight,s=n.scrollable,f=n.width;return(0,a.jsxs)(c.kA,{width:f,children:[(0,a.jsx)(c.VH,{children:(0,a.jsxs)(o.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,a.jsx)(i.ZP,{bold:!0,default:!0,children:u}),l&&(0,a.jsx)(i.ZP,{children:l})]})}),(0,a.jsx)(c.$B,{minHeight:d,scrollable:s,children:r.Children.map(t,(function(n,o){return n&&r.cloneElement(n,{last:o===t.length-1,secondary:e&&o%2===1})}))})]})}},105:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return H}});var r=t(77837),o=t(38860),i=t.n(o),c=t(34376),a=t.n(c),l=t(67971),u=t(28857),d=t(31969),s=t(10919),f=t(84201),h=t(11754),p=t(86673),b=t(47329),g=t.n(b);function m(n){return n.children}m.propTypes={afterChildren:g().node,beforeChildren:g().node,children:g().node.isRequired,disabled:g().bool,label:g().string.isRequired};var v=t(82684),y=t(9518),x=t(93461),j=t(19711),w=t(2005),_=t(49125),Z=t(73942),k=t(28598),P=y.default.div.withConfig({displayName:"Tabs__TabHeaderContainerStyle",componentId:"sc-rojme5-0"})(["",""],(function(n){return n.containerWidthPercentage&&"\n    width: ".concat(n.containerWidthPercentage,"%;\n  ")})),O=y.default.div.withConfig({displayName:"Tabs__TabHeader",componentId:"sc-rojme5-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;margin-right:","px;position:relative;z-index:2;"," "," ",""],Z.BG,Z.BG,6*_.iI,(function(n){return n.noBottomBorder&&"\n    border-bottom: none;\n  "}),(function(n){return n.active&&"\n    border-bottom: ".concat(_.cd,"px solid;\n    border-color: ").concat((n.theme.interactive||d.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.fullWidth&&"\n    width: 100%;\n  "})),T=y.default.div.withConfig({displayName:"Tabs__LinkStyle",componentId:"sc-rojme5-2"})(["align-items:center;display:flex;"," "," ",""],(function(n){return n.bold&&"\n    font-family: ".concat(w.nF,";\n  ")}),(function(n){return n.fullWidth&&"\n    justify-content: center;\n  "}),(function(n){return!n.disabled&&"\n    &:hover {\n      path {\n        fill: ".concat((n.theme.content||d.Z.interactive).linkPrimary," !important;\n      }\n    }\n  ")}));var C=function(n){var e=n.actionEl,t=n.bold,r=n.children,o=n.containerWidthPercentage,i=n.currentTab,c=n.defaultKey,a=n.fullWidth,u=n.large,d=n.noBottomBorder,f=n.onChange,h=Array.isArray(r)?r.filter((function(n){return!!n})):[r],b=v.Children.map(h,(function(n){return n.key})),g=(0,v.useState)(c||b[0]),m=g[0],y=g[1],w=i||m;return(0,v.useEffect)((function(){y(c)}),[c]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(P,{containerWidthPercentage:o,children:(0,k.jsxs)(l.Z,{justifyContent:a?"center":null,children:[e&&(0,k.jsx)(x.Z,{flex:"1",children:e}),v.Children.map(h,(function(n){var e=n.key,r=n.props,o=w===e,i={default:!o,disabled:r.disabled,size:2*_.iI};return(0,k.jsx)(x.Z,{flex:a?"1":null,children:(0,k.jsx)(s.Z,{block:!0,default:!o,disabled:r.disabled,flex:1,large:u,noHoverUnderline:!0,noOutline:!0,onClick:function(){f&&f(e),y(e)},preventDefault:!0,sameColorAsText:o,children:(0,k.jsx)(O,{active:o,fullWidth:a,noBottomBorder:d,children:(0,k.jsxs)(T,{bold:t&&o,disabled:r.disabled,fullWidth:a,large:u,children:[r.beforeChildren&&v.cloneElement(r.beforeChildren,i),(0,k.jsx)(p.Z,{ml:r.beforeChildren?1:0,mr:r.afterChildren?1:0,children:(0,k.jsx)(j.ZP,{bold:t,large:u,children:r.label})}),r.afterChildren&&v.cloneElement(r.afterChildren,i)]})})})},e)}))]})}),h.filter((function(n){return n.key===w}))]})},E=t(54626),S=t(10503),I=t(69345),A=t(5679),D=t(24224),N=function(){var n=E.ZP.feature_sets.list().data,e=n?(0,D.YC)(n,(function(n){return n.id}),{ascending:!1}):[];return(0,k.jsx)(u.Z,{centerAlign:!0,header:(0,k.jsx)(p.Z,{mt:_.iI}),pageTitle:"Dataset Dashboard",children:(0,k.jsx)(p.Z,{px:1,children:(0,k.jsx)(C,{bold:!0,defaultKey:"datasets",large:!0,children:(0,k.jsx)(m,{label:"Datasets",children:(0,k.jsx)(p.Z,{pb:3,pt:3,children:(0,k.jsx)(h.Z,{headerDetails:(0,A._6)("dataset",null===e||void 0===e?void 0:e.length),headerTitle:"datasets",children:(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(n,t){var r=n||{},o=r.id,i=r.metadata||{},c=i.column_types,u=void 0===c?{}:c,d=i.name,h=void 0===d?"dataset_".concat(o):d,b=i.statistics||{},g=b.count,m=b.quality,v=u?Object.keys(u).length:0;return(0,k.jsxs)(f.Z,{columnFlexNumbers:[4,1,1,1],last:t===e.length-1,children:[(0,k.jsxs)(l.Z,{alignItems:"center",children:[(0,k.jsx)(S.$B,{secondary:!0}),(0,k.jsx)(p.Z,{mr:1}),(0,k.jsx)(s.Z,{noHoverUnderline:!0,onClick:function(){return a().push("datasets/".concat(o))},preventDefault:!0,sameColorAsText:!0,children:h})]}),(0,k.jsxs)(j.ZP,{children:[(0,A.x6)(v)," features"]}),(0,k.jsxs)(j.ZP,{children:[(0,A.x6)(g)," rows"]}),(0,k.jsx)(j.ZP,{bold:(0,I.FH)(m),danger:(0,I.FH)(m),children:m})]},o)})):(0,k.jsx)(p.Z,{p:2,children:(0,k.jsx)(j.ZP,{children:"No datasets available. Add one to get started."})})})})},"datasets")})})})};N.getInitialProps=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{themeProps:{currentTheme:d.Z}});case 1:case"end":return n.stop()}}),n)})));var H=N},5679:function(n,e,t){"use strict";t.d(e,{RA:function(){return f},kC:function(){return h},vg:function(){return x},T3:function(){return Z},Mp:function(){return p},Pb:function(){return u},HW:function(){return w},HD:function(){return d},wX:function(){return b},x6:function(){return g},_6:function(){return m},zf:function(){return j},Y6:function(){return P},Lo:function(){return O},Tz:function(){return _},We:function(){return s},QV:function(){return k},C5:function(){return y}});var r=t(12757),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],i=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],c=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),a=["0","1","2","3","4","5","6","7","8","9"],l=t(24224);function u(n){try{JSON.parse(n)}catch(e){return!1}return!0}function d(n){return"string"===typeof n}function s(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function f(n){return n.split(" ").join("_")}function h(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function b(n){return n.charAt(0).toLowerCase()+n.slice(1)}function g(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),o=t[0],i=t[1],c=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return i?"".concat(c,".").concat(i):c}function m(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e,i=void 0!==o&&null!==o;if(i||(o=2),1===o)t=n;else{var c=n.length,a=n[c-1];t="y"===a&&"day"!==n?"".concat(n.slice(0,c-1),"ies"):"".concat(n,"s"===a?"es":"s")}if(i){var l=r?g(o):o;return"".concat(l," ").concat(t)}return t}function v(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function y(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)?n.slice(0,e-2):n.slice(0,e-1)}function x(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return h(v(n.toLowerCase()))}function j(n){var e,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(o,i){if(!e){var c=(0,r.Z)(o,2),a=c[0],l=c[1],u=t.slice(0,i).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(l)*u&&(e=m(a,Math.round(n/u)))}})),e}function w(n){return!isNaN(n)}function _(n){var e,t=n.match(/\d+(\.?\d*)%/)||[];return Number(null===(e=t[0])||void 0===e?void 0:e.slice(0,-1))}function Z(n){return"".concat(g(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round((n||0)*Math.pow(100,e))/100}(n)),"%")}function k(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function P(){return"".concat((0,l.mp)(o)," ").concat((0,l.mp)(c))}function O(){return"".concat((0,l.mp)(i)).concat((0,l.mp)(a))}},11246:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets",function(){return t(105)}])}},function(n){n.O(0,[4259,2212,7689,5763,3887,9774,2888,179],(function(){return e=11246,n(n.s=e);var e}));var e=n.O();_N_E=e}]);