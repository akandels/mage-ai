(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4249],{99473:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return U}});var r=i(77837),t=i(82394),s=i(12757),u=i(38860),c=i.n(u),o=i(12691),l=i.n(o),a=i(82684),d=i(83455),p=i(34376),f=i(60328),g=i(87758),h=i(34744),j=i(87372),m=i(31866),b=i(10919),x=i(88182),v=i(93348),_=i(86673),Z=i(17903),y=i(19711),P=i(46313),k=i(23831),C=i(73942),w=i(49125),O=i(37391),I=P.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-cjaij-0"})(["border-bottom:1px solid ",";padding:","px;"],k.Z.borders.medium,w.tr),S=P.default.div.withConfig({displayName:"indexstyle__CardsStyle",componentId:"sc-cjaij-1"})([""," height:80px;display:flex;overflow-x:scroll;"],O.w5),E=P.default.div.withConfig({displayName:"indexstyle__VariableCardStyle",componentId:"sc-cjaij-2"})(["background-color:",";border-radius:","px;flex-shrink:0;margin-right:","px;padding:","px;"],k.Z.background.output,C.n_,w.iI,w.tr),T=i(73899),N=i(58122),B=i(28598);var D=function(e){var n=(e.pipelineSchedule||{}).variables;return(0,B.jsxs)(I,{children:[(0,B.jsx)(_.Z,{mb:2,children:(0,B.jsx)(y.ZP,{bold:!0,large:!0,monospace:!0,muted:!0,children:"Runtime variables"})}),(0,B.jsx)(S,{noScrollbarTrackBackground:!0,children:n&&Object.entries(n).map((function(e){var n=(0,s.Z)(e,2),i=n[0],r=n[1];return(0,B.jsxs)(E,{children:[(0,B.jsx)(y.ZP,{monospace:!0,children:i}),(0,B.jsx)(y.ZP,{color:T.Or,monospace:!0,children:(0,N.FS)(r)})]})}))})]})},q=i(41374),A=i(10503),R=i(59920),V=i(47452),z=i(96510),F=i(66653),G=i(5679);function M(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function L(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?M(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function H(e){var n=e.pipeline,i=(0,p.useRouter)(),r=n.uuid,t=q.ZP.pipeline_schedules.pipelines.list(r),u=t.data,c=t.mutate,o=(0,a.useMemo)((function(){return(null===u||void 0===u?void 0:u.pipeline_schedules)||[]}),[u]),P=(0,d.Db)(q.ZP.pipeline_schedules.pipelines.useCreate(r),{onSuccess:function(e){return(0,z.wD)(e,{callback:function(e){var r=e.pipeline_schedule.id;return i.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(null===n||void 0===n?void 0:n.uuid,"/triggers/").concat(r,"/edit"))},onErrorCallback:function(e){var n=e.error,i=n.errors,r=n.message;console.log(i,r)}})}}),k=(0,s.Z)(P,2),C=k[0],O=k[1].isLoading,I=(0,d.Db)((function(e){return q.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:e})}),{onSuccess:function(e){return(0,z.wD)(e,{callback:function(){c()},onErrorCallback:function(e){var n=e.error,i=n.errors,r=n.message;console.log(i,r)}})}}),S=(0,s.Z)(I,2),E=S[0],T=(S[1].isLoading,(0,a.useState)()),N=T[0],M=T[1],H=(0,a.useMemo)((function(){var e=N;return function(n){var i=n.height-(e?150:0);return(0,B.jsxs)(B.Fragment,{children:[e&&(0,B.jsx)(D,{pipelineSchedule:N}),(0,B.jsx)(g.Z,L(L({},n),{},{height:i,noStatus:!0}))]})}}),[N]);return(0,B.jsxs)(x.Z,{breadcrumbs:[{label:function(){return"Triggers"}}],buildSidekick:H,pageName:R.M.TRIGGERS,pipeline:n,subheaderBackgroundImage:"/images/banner-shape-purple-peach.jpg",subheaderButton:(0,B.jsx)(m.ZP,{blackBorder:!0,beforeElement:(0,B.jsx)(A.mm,{size:2.5*w.iI}),inline:!0,loading:O,noHoverUnderline:!0,onClick:function(){return C({pipeline_schedule:{name:(0,G.Y6)()}})},sameColorAsText:!0,uuid:"PipelineDetailPage/add_new_schedule",children:"Create"}),subheaderText:(0,B.jsx)(y.ZP,{bold:!0,large:!0,children:"Set up a new trigger for this pipeline."}),title:function(e){var n=e.name;return"".concat(n," triggers")},uuid:"".concat(R.M.TRIGGERS,"_").concat(r),children:[(0,B.jsx)(_.Z,{mt:w.cd,px:w.cd,children:(0,B.jsx)(j.Z,{level:5,children:"Pipeline triggers"})}),(0,B.jsx)(h.Z,{light:!0,mt:w.cd,short:!0}),(0,B.jsx)(Z.Z,{columnFlex:[null,null,1,1,3,1,null,null,null],columns:[{label:function(){return""},uuid:"action"},{uuid:"Status"},{uuid:"Type"},{uuid:"Start time"},{uuid:"Name"},{uuid:"Frequency"},{uuid:"Runs"},{uuid:"Logs"},{label:function(){return""},uuid:"edit"}],onClickRow:function(e){return M(o[e])},rows:o.map((function(e){var n=e.id,t=e.pipeline_runs_count,s=e.name,u=e.schedule_interval,c=e.start_time,o=e.status;return[(0,B.jsx)(f.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(n){(0,F.j)(n),E({id:e.id,status:v.fq.ACTIVE===o?v.fq.INACTIVE:v.fq.ACTIVE})},children:v.fq.ACTIVE===o?(0,B.jsx)(A.dz,{muted:!0,size:2*w.iI}):(0,B.jsx)(A.Py,{size:2*w.iI,success:!0})}),(0,B.jsx)(y.ZP,{default:v.fq.INACTIVE===o,monospace:!0,success:v.fq.ACTIVE===o,children:o}),(0,B.jsx)(y.ZP,{default:!0,monospace:!0,children:(0,V.s)(e)}),(0,B.jsx)(y.ZP,{monospace:!0,default:!0,children:c}),(0,B.jsx)(l(),{as:"/pipelines/".concat(r,"/triggers/").concat(n),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,B.jsx)(b.Z,{bold:!0,onClick:function(e){(0,F.j)(e),i.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(r,"/triggers/").concat(n))},sameColorAsText:!0,children:s})}),(0,B.jsx)(y.ZP,{default:!0,monospace:!0,children:u}),(0,B.jsx)(y.ZP,{default:!0,monospace:!0,children:t}),(0,B.jsx)(f.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return i.push("/pipelines/".concat(r,"/logs?pipeline_schedule_id[]=").concat(n))},children:(0,B.jsx)(A.B4,{default:!0,size:2*w.iI})}),(0,B.jsx)(f.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return i.push("/pipelines/".concat(r,"/triggers/").concat(n,"/edit"))},children:(0,B.jsx)(A.I8,{default:!0,size:2*w.iI})})]})),uuid:"pipeline-triggers"})]})}H.getInitialProps=function(){var e=(0,r.Z)(c().mark((function e(n){var i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:i}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var U=H},40183:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers",function(){return i(99473)}])}},function(e){e.O(0,[5339,2083,6776,7875,2874,3903,7578,5981,5584,7758,3694,9774,2888,179],(function(){return n=40183,e(e.s=n);var n}));var n=e.O();_N_E=n}]);