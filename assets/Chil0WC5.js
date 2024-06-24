import{b4 as U,J as y,a6 as F,an as Ze,r as q,R as _e,j as K,h as J,a9 as et,aI as V,P as d,ay as z,ai as xe,b5 as me,b6 as tt,b7 as nt,b8 as at,b as f,F as st,C as se,V as H,H as T,W as M,X as we,Y as w,a7 as lt,a3 as Be,a2 as it,ap as ot,a0 as Ie,a8 as rt,b9 as ut,U as Pe,a5 as ct,ba as dt,I as vt,bb as ft,ac as k,K as le,bc as mt,bd as gt,be as ht,O as bt,aF as yt,f as Ct,M as Ee,ak as ge,T as kt,bf as St,bg as he,aj as Le,ah as pt,bh as _t,bi as be,A as xt}from"./fJqf0vOq.js";const Ve=["top","bottom"],wt=["start","end","left","right"];function Bt(e,t){let[a,n]=e.split(" ");return n||(n=U(Ve,a)?"start":U(wt,a)?"top":"center"),{side:ye(a,t),align:ye(n,t)}}function ye(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function vn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function fn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function mn(e){return{side:e.align,align:e.side}}function gn(e){return U(Ve,e.side)?"y":"x"}const G=y({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function O(e){const t=F("useRender");t.render=e}function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=Ze(),n=q();if(_e){const s=new ResizeObserver(l=>{l.length&&(t==="content"?n.value=l[0].contentRect:n.value=l[0].target.getBoundingClientRect())});K(()=>{s.disconnect()}),J(()=>a.el,(l,i)=>{i&&(s.unobserve(i),n.value=void 0),l&&s.observe(l)},{flush:"post"})}return{resizeRef:a,contentRect:et(n)}}const Te=y({border:[Boolean,Number,String]},"border");function Re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{borderClasses:d(()=>{const n=z(e)?e.value:e.border,s=[];if(n===!0||n==="")s.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))s.push(`border-${l}`);return s})}}const Pt=[null,"default","comfortable","compact"],Ne=y({density:{type:String,default:"default",validator:e=>Pt.includes(e)}},"density");function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const ze=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Oe(e){return{elevationClasses:d(()=>{const a=z(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const re=y({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{roundedClasses:d(()=>{const n=z(e)?e.value:e.rounded,s=z(e)?e.value:e.tile,l=[];if(n===!0||n==="")l.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))l.push(`rounded-${i}`);else(s||n===!1)&&l.push("rounded-0");return l})}}const W=y({tag:{type:String,default:"div"}},"tag");function ce(e){return xe(()=>{const t=[],a={};if(e.value.background)if(me(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&tt(e.value.background)){const n=nt(e.value.background);if(n.a==null||n.a===1){const s=at(n);a.color=s,a.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(me(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function X(e,t){const a=d(()=>({text:z(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=ce(a);return{textColorClasses:n,textColorStyles:s}}function ee(e,t){const a=d(()=>({background:z(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=ce(a);return{backgroundColorClasses:n,backgroundColorStyles:s}}const Et=["elevated","flat","tonal","outlined","text","plain"];function Lt(e,t){return f(st,null,[e&&f("span",{key:"overlay",class:`${t}__overlay`},null),f("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ae=y({color:String,variant:{type:String,default:"elevated",validator:e=>Et.includes(e)}},"variant");function Vt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();const a=d(()=>{const{variant:l}=se(e);return`${t}--variant-${l}`}),{colorClasses:n,colorStyles:s}=ce(d(()=>{const{variant:l,color:i}=se(e);return{[["elevated","flat"].includes(l)?"background":"text"]:i}}));return{colorClasses:n,colorStyles:s,variantClasses:a}}const De=y({baseColor:String,divided:Boolean,...Te(),...G(),...Ne(),...ze(),...re(),...W(),...H(),...Ae()},"VBtnGroup"),Ce=T()({name:"VBtnGroup",props:De(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=M(e),{densityClasses:s}=$e(e),{borderClasses:l}=Re(e),{elevationClasses:i}=Oe(e),{roundedClasses:u}=ue(e);we({VBtn:{height:"auto",baseColor:w(e,"baseColor"),color:w(e,"color"),density:w(e,"density"),flat:!0,variant:w(e,"variant")}}),O(()=>f(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,l.value,s.value,i.value,u.value,e.class],style:e.style},a))}}),Tt=y({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Rt=y({value:null,disabled:Boolean,selectedClass:String},"group-item");function Nt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=F("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=lt();Be(Symbol.for(`${t.description}:id`),s);const l=it(t,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const i=w(e,"value"),u=d(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:i,disabled:u},n),K(()=>{l.unregister(s)});const r=d(()=>l.isSelected(s)),b=d(()=>l.items.value[0].id===s),C=d(()=>l.items.value[l.items.value.length-1].id===s),m=d(()=>r.value&&[l.selectedClass.value,e.selectedClass]);return J(r,o=>{n.emit("group:selected",{value:o})},{flush:"sync"}),{id:s,isSelected:r,isFirst:b,isLast:C,toggle:()=>l.select(s,!r.value),select:o=>l.select(s,o),selectedClass:m,value:i,disabled:u,group:l}}function $t(e,t){let a=!1;const n=ot([]),s=Ie(e,"modelValue",[],o=>o==null?[]:Fe(n,ct(o)),o=>{const v=Ot(n,o);return e.multiple?v:v[0]}),l=F("useGroup");function i(o,v){const g=o,c=Symbol.for(`${t.description}:id`),S=dt(c,l==null?void 0:l.vnode).indexOf(v);se(g.value)==null&&(g.value=S,g.useIndexAsValue=!0),S>-1?n.splice(S,0,g):n.push(g)}function u(o){if(a)return;r();const v=n.findIndex(g=>g.id===o);n.splice(v,1)}function r(){const o=n.find(v=>!v.disabled);o&&e.mandatory==="force"&&!s.value.length&&(s.value=[o.id])}rt(()=>{r()}),K(()=>{a=!0}),ut(()=>{for(let o=0;o<n.length;o++)n[o].useIndexAsValue&&(n[o].value=o)});function b(o,v){const g=n.find(c=>c.id===o);if(!(v&&(g!=null&&g.disabled)))if(e.multiple){const c=s.value.slice(),h=c.findIndex(I=>I===o),S=~h;if(v=v??!S,S&&e.mandatory&&c.length<=1||!S&&e.max!=null&&c.length+1>e.max)return;h<0&&v?c.push(o):h>=0&&!v&&c.splice(h,1),s.value=c}else{const c=s.value.includes(o);if(e.mandatory&&c)return;s.value=v??!c?[o]:[]}}function C(o){if(e.multiple,s.value.length){const v=s.value[0],g=n.findIndex(S=>S.id===v);let c=(g+o)%n.length,h=n[c];for(;h.disabled&&c!==g;)c=(c+o)%n.length,h=n[c];if(h.disabled)return;s.value=[n[c].id]}else{const v=n.find(g=>!g.disabled);v&&(s.value=[v.id])}}const m={register:i,unregister:u,selected:s,select:b,disabled:w(e,"disabled"),prev:()=>C(n.length-1),next:()=>C(1),isSelected:o=>s.value.includes(o),selectedClass:d(()=>e.selectedClass),items:d(()=>n),getItemIndex:o=>zt(n,o)};return Be(t,m),m}function zt(e,t){const a=Fe(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Fe(e,t){const a=[];return t.forEach(n=>{const s=e.find(i=>Pe(n,i.value)),l=e[n];(s==null?void 0:s.value)!=null?a.push(s.id):l!=null&&a.push(l.id)}),a}function Ot(e,t){const a=[];return t.forEach(n=>{const s=e.findIndex(l=>l.id===n);if(~s){const l=e[s];a.push(l.value!=null?l.value:s)}}),a}const He=Symbol.for("vuetify:v-btn-toggle"),At=y({...De(),...Tt()},"VBtnToggle");T()({name:"VBtnToggle",props:At(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:s,prev:l,select:i,selected:u}=$t(e,He);return O(()=>{const r=Ce.filterProps(e);return f(Ce,vt({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var b;return[(b=a.default)==null?void 0:b.call(a,{isSelected:n,next:s,prev:l,select:i,selected:u})]}})}),{next:s,prev:l,select:i}}});const Dt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),te=T(!1)({name:"VDefaultsProvider",props:Dt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:s,reset:l,root:i,scoped:u}=ft(e);return we(n,{reset:l,root:i,scoped:u,disabled:s}),()=>{var r;return(r=a.default)==null?void 0:r.call(a)}}}),Ft=["x-small","small","default","large","x-large"],de=y({size:{type:[String,Number],default:"default"}},"size");function ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return xe(()=>{let a,n;return U(Ft,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:k(e.size),height:k(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Ht=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:le,...G(),...de(),...W({tag:"i"}),...H()},"VIcon"),ne=T()({name:"VIcon",props:Ht(),setup(e,t){let{attrs:a,slots:n}=t;const s=q(),{themeClasses:l}=M(e),{iconData:i}=mt(d(()=>s.value||e.icon)),{sizeClasses:u}=ve(e),{textColorClasses:r,textColorStyles:b}=X(w(e,"color"));return O(()=>{var o,v;const C=(o=n.default)==null?void 0:o.call(n);C&&(s.value=(v=gt(C).filter(g=>g.type===ht&&g.children&&typeof g.children=="string")[0])==null?void 0:v.children);const m=!!(a.onClick||a.onClickOnce);return f(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",l.value,u.value,r.value,{"v-icon--clickable":m,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},b.value,e.style],role:m?"button":void 0,"aria-hidden":!m,tabindex:m?e.disabled?-1:0:void 0},{default:()=>[C]})}),{}}});function Me(e,t){const a=q(),n=bt(!1);if(yt){const s=new IntersectionObserver(l=>{n.value=!!l.find(i=>i.isIntersecting)},t);K(()=>{s.disconnect()}),J(a,(l,i)=>{i&&(s.unobserve(i),n.value=!1),l&&s.observe(l)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Mt=y({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...G(),...de(),...W({tag:"div"}),...H()},"VProgressCircular"),Gt=T()({name:"VProgressCircular",props:Mt(),setup(e,t){let{slots:a}=t;const n=20,s=2*Math.PI*n,l=q(),{themeClasses:i}=M(e),{sizeClasses:u,sizeStyles:r}=ve(e),{textColorClasses:b,textColorStyles:C}=X(w(e,"color")),{textColorClasses:m,textColorStyles:o}=X(w(e,"bgColor")),{intersectionRef:v,isIntersecting:g}=Me(),{resizeRef:c,contentRect:h}=It(),S=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),I=d(()=>Number(e.width)),E=d(()=>r.value?Number(e.size):h.value?h.value.width:Math.max(I.value,32)),x=d(()=>n/(1-I.value/E.value)*2),L=d(()=>I.value/E.value*x.value),B=d(()=>k((100-S.value)/100*s));return Ct(()=>{v.value=l.value,c.value=l.value}),O(()=>f(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":g.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,u.value,b.value,e.class],style:[r.value,C.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[f("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${x.value} ${x.value}`},[f("circle",{class:["v-progress-circular__underlay",m.value],style:o.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":L.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),f("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":L.value,"stroke-dasharray":s,"stroke-dashoffset":B.value},null)]),a.default&&f("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),Wt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function jt(e){return{dimensionStyles:d(()=>{const a={},n=k(e.height),s=k(e.maxHeight),l=k(e.maxWidth),i=k(e.minHeight),u=k(e.minWidth),r=k(e.width);return n!=null&&(a.height=n),s!=null&&(a.maxHeight=s),l!=null&&(a.maxWidth=l),i!=null&&(a.minHeight=i),u!=null&&(a.minWidth=u),r!=null&&(a.width=r),a})}}const ke={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ge=y({location:String},"location");function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Ee();return{locationStyles:d(()=>{if(!e.location)return{};const{side:l,align:i}=Bt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function u(b){return a?a(b):0}const r={};return l!=="center"&&(t?r[ke[l]]=`calc(100% - ${u(l)}px)`:r[l]=0),i!=="center"?t?r[ke[i]]=`calc(100% - ${u(i)}px)`:r[i]=0:(l==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),r})}}const Ut=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...G(),...Ge({location:"top"}),...re(),...W(),...H()},"VProgressLinear"),Xt=T()({name:"VProgressLinear",props:Ut(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Ie(e,"modelValue"),{isRtl:s,rtlClasses:l}=Ee(),{themeClasses:i}=M(e),{locationStyles:u}=We(e),{textColorClasses:r,textColorStyles:b}=X(e,"color"),{backgroundColorClasses:C,backgroundColorStyles:m}=ee(d(()=>e.bgColor||e.color)),{backgroundColorClasses:o,backgroundColorStyles:v}=ee(d(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:g,backgroundColorStyles:c}=ee(e,"color"),{roundedClasses:h}=ue(e),{intersectionRef:S,isIntersecting:I}=Me(),E=d(()=>parseFloat(e.max)),x=d(()=>parseFloat(e.height)),L=d(()=>ge(parseFloat(e.bufferValue)/E.value*100,0,100)),B=d(()=>ge(parseFloat(n.value)/E.value*100,0,100)),R=d(()=>s.value!==e.reverse),Q=d(()=>e.indeterminate?"fade-transition":"slide-x-transition");function Z(p){if(!S.value)return;const{left:P,right:N,width:$}=S.value.getBoundingClientRect(),j=R.value?$-p.clientX+(N-$):p.clientX-P;n.value=Math.round(j/$*E.value)}return O(()=>f(e.tag,{ref:S,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&I.value,"v-progress-linear--reverse":R.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},h.value,i.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?k(x.value):0,"--v-progress-linear-height":k(x.value),...e.absolute?u.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:B.value,onClick:e.clickable&&Z},{default:()=>[e.stream&&f("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...b.value,[R.value?"left":"right"]:k(-x.value),borderTop:`${k(x.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${k(x.value/4)})`,width:k(100-L.value,"%"),"--v-progress-linear-stream-to":k(x.value*(R.value?1:-1))}},null),f("div",{class:["v-progress-linear__background",C.value],style:[m.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),f("div",{class:["v-progress-linear__buffer",o.value],style:[v.value,{opacity:parseFloat(e.bufferOpacity),width:k(L.value,"%")}]},null),f(kt,{name:Q.value},{default:()=>[e.indeterminate?f("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(p=>f("div",{key:p,class:["v-progress-linear__indeterminate",p,g.value],style:c.value},null))]):f("div",{class:["v-progress-linear__determinate",g.value],style:[c.value,{width:k(B.value,"%")}]},null)]}),a.default&&f("div",{class:"v-progress-linear__content"},[a.default({value:B.value,buffer:L.value})])]})),{}}}),Yt=y({loading:[Boolean,String]},"loader");function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}function hn(e,t){var n;let{slots:a}=t;return f("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||f(Xt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Kt=["static","relative","fixed","absolute","sticky"],Jt=y({position:{type:String,validator:e=>Kt.includes(e)}},"position");function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function Zt(){const e=F("useRoute");return d(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function bn(){var e,t;return(t=(e=F("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function en(e,t){var b,C;const a=St("RouterLink"),n=d(()=>!!(e.href||e.to)),s=d(()=>(n==null?void 0:n.value)||he(t,"click")||he(e,"click"));if(typeof a=="string"||!("useLink"in a))return{isLink:n,isClickable:s,href:w(e,"href")};const l=d(()=>({...e,to:w(()=>e.to||"")})),i=a.useLink(l.value),u=d(()=>e.to?i:void 0),r=Zt();return{isLink:n,isClickable:s,route:(b=u.value)==null?void 0:b.route,navigate:(C=u.value)==null?void 0:C.navigate,isActive:d(()=>{var m,o,v;return u.value?e.exact?r.value?((v=u.value.isExactActive)==null?void 0:v.value)&&Pe(u.value.route.value.query,r.value.query):((o=u.value.isExactActive)==null?void 0:o.value)??!1:((m=u.value.isActive)==null?void 0:m.value)??!1:!1}),href:d(()=>{var m;return e.to?(m=u.value)==null?void 0:m.route.value.href:e.href})}}const tn=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ae=!1;function yn(e,t){let a=!1,n,s;_e&&(Le(()=>{window.addEventListener("popstate",l),n=e==null?void 0:e.beforeEach((i,u,r)=>{ae?a?t(r):r():setTimeout(()=>a?t(r):r()),ae=!0}),s=e==null?void 0:e.afterEach(()=>{ae=!1})}),pt(()=>{window.removeEventListener("popstate",l),n==null||n(),s==null||s()}));function l(i){var u;(u=i.state)!=null&&u.replaced||(a=!0,setTimeout(()=>a=!1))}}function nn(e,t){J(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Le(()=>{t(!0)})},{immediate:!0})}const ie=Symbol("rippleStop"),an=80;function Se(e,t){e.style.transform=t,e.style.webkitTransform=t}function oe(e){return e.constructor.name==="TouchEvent"}function je(e){return e.constructor.name==="KeyboardEvent"}const sn=function(e,t){var m;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,s=0;if(!je(e)){const o=t.getBoundingClientRect(),v=oe(e)?e.touches[e.touches.length-1]:e;n=v.clientX-o.left,s=v.clientY-o.top}let l=0,i=.3;(m=t._ripple)!=null&&m.circle?(i=.15,l=t.clientWidth/2,l=a.center?l:l+Math.sqrt((n-l)**2+(s-l)**2)/4):l=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=`${(t.clientWidth-l*2)/2}px`,r=`${(t.clientHeight-l*2)/2}px`,b=a.center?u:`${n-l}px`,C=a.center?r:`${s-l}px`;return{radius:l,scale:i,x:b,y:C,centerX:u,centerY:r}},Y={show(e,t){var v;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=t==null?void 0:t._ripple)!=null&&v.enabled))return;const n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:l,scale:i,x:u,y:r,centerX:b,centerY:C}=sn(e,t,a),m=`${l*2}px`;s.className="v-ripple__animation",s.style.width=m,s.style.height=m,t.appendChild(n);const o=window.getComputedStyle(t);o&&o.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Se(s,`translate(${u}, ${r}) scale3d(${i},${i},${i})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Se(s,`translate(${b}, ${C}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),s=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=a.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function Ue(e){return typeof e>"u"||!!e}function A(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ie])){if(e[ie]=!0,oe(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||je(e),a._ripple.class&&(t.class=a._ripple.class),oe(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{Y.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},an)}else Y.show(e,a,t)}}function pe(e){e[ie]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),Y.hide(t)}}function Xe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let D=!1;function Ye(e){!D&&(e.keyCode===be.enter||e.keyCode===be.space)&&(D=!0,A(e))}function qe(e){D=!1,_(e)}function Ke(e){D&&(D=!1,_(e))}function Je(e,t,a){const{value:n,modifiers:s}=t,l=Ue(n);if(l||Y.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,_t(n)&&n.class&&(e._ripple.class=n.class),l&&!a){if(s.stop){e.addEventListener("touchstart",pe,{passive:!0}),e.addEventListener("mousedown",pe);return}e.addEventListener("touchstart",A,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",Xe,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",A),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Ye),e.addEventListener("keyup",qe),e.addEventListener("blur",Ke),e.addEventListener("dragstart",_,{passive:!0})}else!l&&a&&Qe(e)}function Qe(e){e.removeEventListener("mousedown",A),e.removeEventListener("touchstart",A),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",Xe),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Ye),e.removeEventListener("keyup",qe),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Ke)}function ln(e,t){Je(e,t,!1)}function on(e){delete e._ripple,Qe(e)}function rn(e,t){if(t.value===t.oldValue)return;const a=Ue(t.oldValue);Je(e,t,a)}const un={mounted:ln,unmounted:on,updated:rn},cn=y({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:He},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:le,appendIcon:le,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Te(),...G(),...Ne(),...Wt(),...ze(),...Rt(),...Yt(),...Ge(),...Jt(),...re(),...tn(),...de(),...W({tag:"button"}),...H(),...Ae({variant:"elevated"})},"VBtn"),Cn=T()({name:"VBtn",props:cn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:s}=M(e),{borderClasses:l}=Re(e),{densityClasses:i}=$e(e),{dimensionStyles:u}=jt(e),{elevationClasses:r}=Oe(e),{loaderClasses:b}=qt(e),{locationStyles:C}=We(e),{positionClasses:m}=Qt(e),{roundedClasses:o}=ue(e),{sizeClasses:v,sizeStyles:g}=ve(e),c=Nt(e,e.symbol,!1),h=en(e,a),S=d(()=>{var p;return e.active!==void 0?e.active:h.isLink.value?(p=h.isActive)==null?void 0:p.value:c==null?void 0:c.isSelected.value}),I=d(()=>{var P,N;return{color:(c==null?void 0:c.isSelected.value)&&(!h.isLink.value||((P=h.isActive)==null?void 0:P.value))||!c||((N=h.isActive)==null?void 0:N.value)?e.color??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:E,colorStyles:x,variantClasses:L}=Vt(I),B=d(()=>(c==null?void 0:c.disabled.value)||e.disabled),R=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),Q=d(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function Z(p){var P;B.value||h.isLink.value&&(p.metaKey||p.ctrlKey||p.shiftKey||p.button!==0||a.target==="_blank")||((P=h.navigate)==null||P.call(h,p),c==null||c.toggle())}return nn(h,c==null?void 0:c.select),O(()=>{const p=h.isLink.value?"a":e.tag,P=!!(e.prependIcon||n.prepend),N=!!(e.appendIcon||n.append),$=!!(e.icon&&e.icon!==!0);return xt(f(p,{type:p==="a"?void 0:"button",class:["v-btn",c==null?void 0:c.selectedClass.value,{"v-btn--active":S.value,"v-btn--block":e.block,"v-btn--disabled":B.value,"v-btn--elevated":R.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,l.value,E.value,i.value,r.value,b.value,m.value,o.value,v.value,L.value,e.class],style:[x.value,u.value,C.value,g.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:B.value||void 0,href:h.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:Z,value:Q.value},{default:()=>{var j;return[Lt(!0,"v-btn"),!e.icon&&P&&f("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?f(te,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):f(ne,{key:"prepend-icon",icon:e.prependIcon},null)]),f("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&$?f(ne,{key:"content-icon",icon:e.icon},null):f(te,{key:"content-defaults",disabled:!$,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var fe;return[((fe=n.default)==null?void 0:fe.call(n))??e.text]}})]),!e.icon&&N&&f("span",{key:"append",class:"v-btn__append"},[n.append?f(te,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):f(ne,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&f("span",{key:"loader",class:"v-btn__loader"},[((j=n.loader)==null?void 0:j.call(n))??f(Gt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[un,!B.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:c}}});export{jt as A,X as B,ee as C,Bt as D,vn as E,fn as F,mn as G,gn as H,bn as I,yn as J,Yt as K,Ge as L,Jt as M,qt as N,We as O,Qt as P,hn as Q,un as R,Cn as V,ne as a,W as b,Tt as c,It as d,O as e,Ae as f,Te as g,Ne as h,ze as i,Rt as j,re as k,tn as l,G as m,de as n,Re as o,Vt as p,$e as q,Oe as r,ue as s,ve as t,$t as u,Nt as v,en as w,Lt as x,te as y,Wt as z};