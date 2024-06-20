import{_ as y}from"./B5wG4MNT.js";import{_ as h,o,c as n,n as T,q as $,s as d,F as g,u as v,a as s,t as f,b as l,v as I,w as x,x as m,y as b,T as k,p as C,e as S,z as A,A as D,d as N,B as V}from"./DCLNKYzc.js";import B from"./ythufiwE.js";import"./CvPl5tTm.js";const q={},j={class:"sm:flex bg-slate-100 rounded-xl overflow-hidden p-8 sm:p-0 dark:bg-slate-800 shadow-xl"},z=T('<img class="w-24 h-24 sm:w-48 sm:h-auto sm:rounded-none rounded-full mx-auto sm:mx-0" src="'+y+'" alt=""><div class="pt-6 sm:p-8 text-center sm:text-left space-y-4"><blockquote><p class="text-lg font-medium"> “Tailwind CSS is the only framework that I&#39;ve seen scale on large teams.” </p></blockquote><figcaption class="font-medium"><div class="text-sky-500 dark:text-sky-400"> Sarah Dayan </div><div class="text-slate-700 dark:text-slate-500"> Staff Engineer, Algolia </div></figcaption></div>',2),E=[z];function F(t,a,_,p,e,c){return o(),n("figure",j,E)}const U=h(q,[["render",F]]),Y={props:{type:{type:String,default:"info",validator:t=>["info","success","warning","error"].includes(t)}},computed:{computedClasses(){return{"bg-blue-100":this.type==="info","bg-green-100":this.type==="success","bg-yellow-100":this.type==="warning","bg-red-100":this.type==="error",border:!0,"border-blue-400":this.type==="info","border-green-400":this.type==="success","border-yellow-400":this.type==="warning","border-red-400":this.type==="error","text-blue-700":this.type==="info","text-green-700":this.type==="success","text-yellow-700":this.type==="warning","text-red-700":this.type==="error","p-4":!0,"rounded-md":!0}}}};function L(t,a,_,p,e,c){return o(),n("div",{class:d(["rounded-xl",c.computedClasses]),role:"alert"},[$(t.$slots,"default",{},void 0,!0)],2)}const P=h(Y,[["render",L],["__scopeId","data-v-764df7d1"]]),W={data(){return{activeIndex:0,items:[{title:"Accordion Item 1",content:"Content for Accordion Item 1"},{title:"Accordion Item 2",content:"Content for Accordion Item 2"},{title:"Accordion Item 3",content:"Content for Accordion Item 3"}]}},methods:{toggleAccordion(t){this.activeIndex=this.activeIndex===t?null:t}}},G={class:"bg-white rounded-xl shadow-xl overflow-hidden"},H=["onClick"],J={key:0,class:"p-4 ease duration-500"};function K(t,a,_,p,e,c){const u=B;return o(),n("div",G,[(o(!0),n(g,null,v(e.items,(r,i)=>(o(),n("div",{key:i,class:"border"},[s("button",{onClick:ue=>c.toggleAccordion(i),class:d(["w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none",{"bg-gray-100":e.activeIndex===i}])},[s("span",null,f(r.title),1),l(u,{class:d([e.activeIndex===i?"":"rotate-180","h-5 w-5 ease transition-all duration-500"]),name:"mdi:arrow-top-circle"},null,8,["class"])],10,H),e.activeIndex===i?(o(),n("div",J,f(r.content),1)):I("",!0)]))),128))])}const M=h(W,[["render",K]]),O={data(){return{activeTab:0,tabs:["Profile","Address"]}},methods:{toggleTab(t){this.activeTab=t}}},w=t=>(C("data-v-a79f6207"),t=t(),S(),t),Q={class:"bg-white rounded-xl"},R={class:"flex justify-stretch p-2 gap-2 bg-indigo-50 border-2 border-white rounded-md"},X=["onClick"],Z={class:"relative w-full h-[100px] overflow-hidden"},ee=w(()=>s("div",{class:"w-full p-4"},[s("h2",null,"Content for Tab 1"),s("p",null,"This is the content for tab 1. You can add any demo content here.")],-1)),te=[ee],se=w(()=>s("div",{class:"w-full p-4"},[s("h2",null,"Content for Tab 2"),s("p",null,"This is the content for tab 2. You can add any demo content here.")],-1)),oe=[se];function ne(t,a,_,p,e,c){return o(),n("div",Q,[s("div",R,[(o(!0),n(g,null,v(e.tabs,(u,r)=>(o(),n("button",{key:r,onClick:i=>c.toggleTab(r),class:d([{"bg-indigo-700 text-white":e.activeTab==r," hover:bg-indigo-200":e.activeTab!=r},"px-4 py-2 w-full rounded-full transition duration-500 ease-in-out"])},f(u),11,X))),128))]),l(k,{name:"slide"},{default:x(()=>[s("div",Z,[m(s("div",{class:d(["absolute top-0 left-0 w-full h-full flex",{"translate-x-0":e.activeTab==0,"translate-x-full":e.activeTab!=0}])},te,2),[[b,e.activeTab==0]]),m(s("div",{class:d(["absolute top-0 left-0 w-full h-full flex",{"translate-x-0":e.activeTab==1,"translate-x-full":e.activeTab!=1}])},oe,2),[[b,e.activeTab==1]])])]),_:1})])}const re=h(O,[["render",ne],["__scopeId","data-v-a79f6207"]]),ce={class:"page flex flex-col sm:gap-5 gap-2"},ae={class:"grid 2xl:grid-cols-2 lg:grid-cols-2 sm:gap-5 gap-2"},ie={class:"w-full"},le={class:"w-full"},de={class:"w-full"},me=A({__name:"index",setup(t){const a=D();return console.log(a.user),(_,p)=>{const e=U,c=P,u=M,r=re;return o(),n("div",ce,[s("div",ae,[l(e),l(c,{type:"warning"},{default:x(()=>[N("This is an error alert.")]),_:1})]),s("div",ie,[l(u)]),s("div",le,[l(r)]),s("div",de,f(V(a).user),1)])}}});export{me as default};