import w from"./DDOrjunS.js";import{aO as B,_ as f,u as C,q as V,aP as K,o as _,c as h,a as s,b as e,w as c,p as m,e as g,aQ as y,aR as b,x as n,v as R}from"./fJqf0vOq.js";import{_ as v}from"./yaoHm2ml.js";import{V as z}from"./Chil0WC5.js";import{_ as $}from"./BF4NSNZC.js";import"./CGpRavMg.js";const S=B({id:"sidebarShow",state:()=>({count:!0}),actions:{showhide(){this.count=!this.count}}}),A=C(),O={name:"AppBar",methods:{mymethod(){S().showhide()},async pushtologin(){console.log("Pushtologin"),await V("/")},signOut(){A.logout(),K().go(0)}}},I=t=>(m("data-v-fb5c14ce"),t=t(),g(),t),T={class:"bg-gray-800 fixed flex justify-between w-screen top-0 left-0 right-0 items-center px-4 gap-4 z-30"},E={class:"w-100 flex justify-start"},H=I(()=>s("span",{class:"text-xs hidden"},"Search",-1)),N=I(()=>s("img",{src:v,class:"w-8 h-8",alt:""},null,-1));function q(t,r,p,x,a,i){const o=w;return _(),h("nav",T,[s("div",E,[s("button",{onClick:r[0]||(r[0]=(...l)=>i.mymethod&&i.mymethod(...l)),class:"flex flex-col lg:hidden bg-white items-center text-gray rounded-full h-9 w-9 p-2"},[e(o,{class:"h-full w-full",name:"mdi:menu"}),H]),N,s("div",{onClick:r[1]||(r[1]=l=>i.pushtologin()),class:"text-white text-lg font-medium tracking-wide"},"KSK APP")]),s("div",null,[e(z,{onClick:i.signOut,class:"!px-0",icon:"w"},{default:c(()=>[e(o,{name:"mdi:power"})]),_:1},8,["onClick"])])])}const M=f(O,[["render",q],["__scopeId","data-v-fb5c14ce"]]),Q={},P=t=>(m("data-v-9a5987c7"),t=t(),g(),t),U={class:"bg-gray-800 fixed flex justify-start w-screen top-0 left-0 right-0 items-center px-4 gap-4 z-30"},D=P(()=>s("img",{src:v,class:"w-8 h-8",alt:""},null,-1)),F=P(()=>s("div",{class:"text-white text-lg font-medium tracking-wide"},"KSK APP",-1)),G=[D,F];function J(t,r){return _(),h("nav",U,G)}const L=f(Q,[["render",J],["__scopeId","data-v-9a5987c7"]]),W={mounted(){this.footer=(this._.provides[y]||this.$route).fullPath},watch:{$route(t,r){b(),this.footer=t.fullPath}},data(){return{footer:""}}},d=t=>(m("data-v-00a48d14"),t=t(),g(),t),X={class:"h-screen bg-gray-500 shadow-2xl shadow-black flex-col gap-3 w-[150px] p-2"},Y={class:"flex flex-col gap-3"},Z=d(()=>s("div",{class:"flex justify-between"},null,-1)),ee=d(()=>s("span",{class:"text-xs"},"Home",-1)),te=d(()=>s("span",{class:"text-xs"},"Search",-1)),se=d(()=>s("span",{class:"text-xs"},"Profile",-1)),oe=d(()=>s("span",{class:"text-xs"},"Video",-1)),le=d(()=>s("span",{class:"text-xs"},"Settings",-1));function ae(t,r,p,x,a,i){const o=w,l=$;return _(),h("div",X,[s("div",Y,[Z,e(l,{to:"/login",class:n([a.footer=="/login"?"bg-white":"bg-gray-400 hover:bg-gray-200","flex gap-2 justify-start items-center text-gray rounded-full h-11 w-full px-4"])},{default:c(()=>[e(o,{class:"h-6 w-6",name:"material-symbols:home"}),ee]),_:1},8,["class"]),e(l,{to:"/search",class:n([a.footer=="/search"?"bg-white":"bg-gray-400 hover:bg-gray-200","flex gap-2 justify-start items-center text-gray rounded-full h-11 w-full px-4"])},{default:c(()=>[e(o,{class:"h-6 w-6",name:"material-symbols:search"}),te]),_:1},8,["class"]),e(l,{to:"/profile",class:n([a.footer=="/profile"?"bg-white":"bg-gray-400 hover:bg-gray-200","flex gap-2 justify-start items-center text-gray rounded-full h-11 w-full px-4"])},{default:c(()=>[e(o,{class:"h-6 w-6",name:"mdi:user"}),se]),_:1},8,["class"]),e(l,{to:"/video",class:n([a.footer=="/video"?"bg-white":"bg-gray-400 hover:bg-gray-200","flex gap-2 justify-start items-center text-gray rounded-full h-11 w-full px-4"])},{default:c(()=>[e(o,{class:"h-6 w-6",name:"mdi:video"}),oe]),_:1},8,["class"]),e(l,{href:"/settings",class:n([a.footer=="/settings"?"bg-white":"bg-gray-400 hover:bg-gray-200","flex gap-2 justify-start items-center text-gray rounded-full h-11 w-full px-4"])},{default:c(()=>[e(o,{class:"h-6 w-6",name:"material-symbols:settings"}),le]),_:1},8,["class"])])])}const ne=f(W,[["render",ae],["__scopeId","data-v-00a48d14"]]),ce={mounted(){this.footer=(this._.provides[y]||this.$route).fullPath},watch:{$route(t,r){b(),this.footer=t.fullPath}},data(){return{footer:""}}},u=t=>(m("data-v-75f9984d"),t=t(),g(),t),re={class:"fixed flex sm:hidden bottom-0 left-0 right-0 px-2"},ie={class:"w-full flex justify-evenly bg-gray-500 shadow-2xl rounded-full py-2 shadow-black"},de=u(()=>s("span",{class:"text-xs hidden"},"Home",-1)),fe=u(()=>s("span",{class:"text-xs hidden"},"Search",-1)),_e={class:"-mt-6 bg-gray-200 rounded-full border-2 border-gray-500 flex flex-col items-center align-center justify-center h-12 w-12"},he=u(()=>s("span",{class:"text-xs hidden"},"Profile",-1)),ue=u(()=>s("span",{class:"text-xs hidden"},"Video",-1)),me=u(()=>s("span",{class:"text-xs hidden"},"Settings",-1));function ge(t,r,p,x,a,i){const o=w,l=$;return _(),h("div",re,[s("div",ie,[e(l,{to:"/",class:n([a.footer=="/"?"bg-white":"bg-gray-400 hover:bg-gray-200","flex flex-col items-center text-gray rounded-full h-9 w-9 p-2"])},{default:c(()=>[e(o,{class:"h-full w-full",name:"material-symbols:home"}),de]),_:1},8,["class"]),e(l,{to:"/search",class:n([a.footer=="/search"?"bg-white":"bg-gray-400 hover:bg-gray-200","flex flex-col items-center text-gray rounded-full h-9 w-9 p-2"])},{default:c(()=>[e(o,{class:"h-full w-full",name:"material-symbols:search"}),fe]),_:1},8,["class"]),s("div",_e,[e(l,{to:"/profile",class:n([a.footer=="/profile"?"bg-white":"bg-gray-400 hover:bg-gray-200","flex flex-col items-center text-gray rounded-full h-10 w-10 p-2"])},{default:c(()=>[e(o,{class:"h-full w-full",name:"mdi:user"}),he]),_:1},8,["class"])]),e(l,{to:"/video",class:n([a.footer=="/video"?"bg-white":"bg-gray-400 hover:bg-gray-200","flex flex-col items-center text-gray rounded-full h-9 w-9 p-2"])},{default:c(()=>[e(o,{class:"h-full w-full",name:"mdi:video"}),ue]),_:1},8,["class"]),e(l,{href:"/settings",class:n([a.footer=="/settings"?"bg-white":"bg-gray-400 hover:bg-gray-200","flex flex-col items-center text-gray rounded-full h-9 w-9 p-2"])},{default:c(()=>[e(o,{class:"h-full w-full",name:"material-symbols:settings"}),me]),_:1},8,["class"])])])}const pe=f(ce,[["render",ge],["__scopeId","data-v-75f9984d"]]),xe={computed:{count(){return S().count}}},we={class:"h-dvh w-dvw overflow-hidden"},ye={class:"w-full h-[calc(100%-50px)] sm:h-[calc(100%-75px)] mt-[50px] sm:mt-[75px] flex"};function be(t,r,p,x,a,i){const o=M,l=L,k=ne,j=pe;return _(),h("div",we,[e(o,{class:"hidden sm:flex h-[75px]"}),e(l,{class:"flex sm:hidden h-[50px]"}),s("div",ye,[e(k,{class:n(i.count?"sm:flex hidden":"lg:flex hidden")},null,8,["class"]),s("div",{class:n([i.count?"w-full sm:w-[calc(100%-150px)]":"w-full lg:w-[calc(100%-150px)]","flex flex-col h-full overflow-auto pb-[80px] sm:pb-0 bg-indigo-100 p-4"])},[R(t.$slots,"default")],2)]),e(j)])}const je=f(xe,[["render",be]]);export{je as default};
