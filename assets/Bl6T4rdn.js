import j from"./D4RQ7Ghe.js";import{a as M,V as J}from"./CPs6IhPr.js";import{K as N,I as B,b as l,J as q,af as K,L as w,a8 as Q,Q as W,a1 as Y,aw as z,F as y,_ as H,n as X,E as b,w as a,o as s,d as V,a as i,c as R,B as U,t as Z,x}from"./DF7CFXmR.js";import{b as $,V as F,a as S}from"./CDWobTlY.js";import{k as ee,l as A,o as G,V as d}from"./BNCOf1RP.js";import{u as L,V as n}from"./DosFURG6.js";import{V as h}from"./Defpj7ao.js";import{V as v}from"./CUzdvt1Z.js";import{m as le,b as T,c as ae,d as re,a as oe}from"./DFLd-pis.js";import"./Djll8xL-.js";const te=N({...le({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),ue=B()({name:"VRadio",props:te(),setup(e,r){let{slots:g}=r;return L(()=>l(T,q(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),g)),{}}}),ne=N({height:{type:[Number,String],default:"auto"},...ee(),...K(ae(),["multiple"]),trueIcon:{type:w,default:"$radioOn"},falseIcon:{type:w,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),se=B()({name:"VRadioGroup",inheritAttrs:!1,props:ne(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:g,slots:p}=r;const P=Q(),k=W(()=>e.id||`radio-group-${P}`),t=Y(e,"modelValue");return L(()=>{const[o,m]=z(g),u=A.filterProps(e),f=T.filterProps(e),c=p.label?p.label({label:e.label,props:{for:k.value}}):e.label;return l(A,q({class:["v-radio-group",e.class],style:e.style},o,u,{modelValue:t.value,"onUpdate:modelValue":C=>t.value=C,id:k.value}),{...p,default:C=>{let{id:I,messagesId:D,isDisabled:E,isReadonly:O}=C;return l(y,null,[c&&l(G,{id:I.value},{default:()=>[c]}),l(re,q(f,{id:I.value,"aria-describedby":D.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:E.value,readonly:O.value,"aria-labelledby":c?I.value:void 0,multiple:!1},m,{modelValue:t.value,"onUpdate:modelValue":_=>t.value=_}),p)])}})}),{}}}),ie=X({data(){return{form:{clientname:"",email:"",mobile:"",role:"",facebook:"",twitter:"",instagram:"",aboutme:"",address:"",language:[{language:"",comfortable:["Speak"],proficiency:""}]},languageComfortable:["Speak","Read","Write"],languageProficiency:["Beginner","Proficient","Expert"],rules:{required:e=>!0,required2:e=>!0,required3:e=>!0,required31:e=>!0,email:e=>!0}}},computed:{language(){return this.form.language}},methods:{async submit(){if((await this.$refs.formRef.validate()).valid)try{const r=await M.post("api/resume",{form:this.form});r.data.success?(console.log(r.data.data),alert("Form submitted successfully!")):alert("Failed to submit form")}catch(r){console.error("An error occurred while submitting the form:",r),alert("An error occurred. Please try again.")}},addField(e){e=="Proficiency"&&this.form.language.push({language:"",comfortable:["Speak"],proficiency:""})},removeField(e){this.form.language.splice(e,1)},handleReset(){this.$refs.formRef.reset()}}}),de={class:"flex flex-col gap-2"},me={class:"flex justify-between"},fe={class:"flex flex-column gap-2"},pe={class:"flex flex-column"},ce={class:"flex ms-2"},be={class:"flex justify-end align-center gap-2"},Ve={class:"flex mt-5 gap-4 justify-center"};function ge(e,r,g,p,P,k){const t=j;return s(),b($,{class:"!overflow-visible"},{default:a(()=>[l(S,null,{default:a(()=>[l(F,{class:"text-center text-primary !text-2xl !mb-8"},{default:a(()=>[V(" Create your Stylish Resume ")]),_:1}),l(J,{ref:"formRef"},{default:a(()=>[i("div",de,[l(d,{clearable:"",modelValue:e.form.clientname,"onUpdate:modelValue":r[0]||(r[0]=o=>e.form.clientname=o),rules:[e.rules.required],label:"Name",variant:"outlined"},{"prepend-inner":a(()=>[l(n,null,{default:a(()=>[l(t,{name:"mdi:user"})]),_:1})]),_:1},8,["modelValue","rules"]),l(d,{clearable:"",modelValue:e.form.email,"onUpdate:modelValue":r[1]||(r[1]=o=>e.form.email=o),rules:[e.rules.required,e.rules.email],label:"Email Address",variant:"outlined"},{"prepend-inner":a(()=>[l(n,null,{default:a(()=>[l(t,{name:"ic:outline-email"})]),_:1})]),_:1},8,["modelValue","rules"]),l(d,{clearable:"",modelValue:e.form.mobile,"onUpdate:modelValue":r[2]||(r[2]=o=>e.form.mobile=o),rules:[e.rules.required],label:"Mobile Number",variant:"outlined"},{"prepend-inner":a(()=>[l(n,null,{default:a(()=>[l(t,{name:"clarity:mobile-solid"})]),_:1})]),_:1},8,["modelValue","rules"]),l(d,{clearable:"",modelValue:e.form.role,"onUpdate:modelValue":r[3]||(r[3]=o=>e.form.role=o),rules:[e.rules.required],label:"Role",variant:"outlined"},{"prepend-inner":a(()=>[l(n,null,{default:a(()=>[l(t,{name:"material-symbols:work"})]),_:1})]),_:1},8,["modelValue","rules"]),l(d,{clearable:"",modelValue:e.form.facebook,"onUpdate:modelValue":r[4]||(r[4]=o=>e.form.facebook=o),rules:[e.rules.required],label:"Facebook ID",variant:"outlined"},{"prepend-inner":a(()=>[l(n,null,{default:a(()=>[l(t,{name:"ri:facebook-fill"})]),_:1})]),_:1},8,["modelValue","rules"]),l(d,{clearable:"",modelValue:e.form.twitter,"onUpdate:modelValue":r[5]||(r[5]=o=>e.form.twitter=o),rules:[e.rules.required],label:"Twitter ID",variant:"outlined"},{"prepend-inner":a(()=>[l(n,null,{default:a(()=>[l(t,{name:"prime:twitter"})]),_:1})]),_:1},8,["modelValue","rules"]),l(d,{clearable:"",modelValue:e.form.instagram,"onUpdate:modelValue":r[6]||(r[6]=o=>e.form.instagram=o),rules:[e.rules.required],label:"Instagram ID",variant:"outlined"},{"prepend-inner":a(()=>[l(n,null,{default:a(()=>[l(t,{name:"mdi:instagram"})]),_:1})]),_:1},8,["modelValue","rules"]),l(h,{clearable:"",modelValue:e.form.aboutme,"onUpdate:modelValue":r[7]||(r[7]=o=>e.form.aboutme=o),rules:[e.rules.required],label:"About Yourself",variant:"outlined"},{"prepend-inner":a(()=>[l(n,null,{default:a(()=>[l(t,{name:"mingcute:love-fill"})]),_:1})]),_:1},8,["modelValue","rules"]),l(h,{clearable:"",modelValue:e.form.address,"onUpdate:modelValue":r[8]||(r[8]=o=>e.form.address=o),rules:[e.rules.required],label:"Address",variant:"outlined"},{"prepend-inner":a(()=>[l(n,null,{default:a(()=>[l(t,{name:"mdi:location"})]),_:1})]),_:1},8,["modelValue","rules"]),(s(!0),R(y,null,U(e.language,(o,m)=>(s(),b($,{variant:"outlined",class:"!border-gray-300 !mb-4",key:m},{default:a(()=>[l(S,null,{default:a(()=>[l(F,{class:"mb-4"},{default:a(()=>[i("div",me,[i("div",null,"Language : "+Z(m+1),1),m>0?(s(),b(v,{key:0,type:"button",class:"w-fit",density:"compact",icon:"",color:"error",onClick:u=>e.removeField(m)},{default:a(()=>[l(n,null,{default:a(()=>[l(t,{name:"mdi:minus"})]),_:1})]),_:2},1032,["onClick"])):x("",!0)])]),_:2},1024),i("div",fe,[l(d,{clearable:"",modelValue:o.language,"onUpdate:modelValue":u=>o.language=u,rules:[e.rules.required],label:"Language Name",variant:"outlined"},{"prepend-inner":a(()=>[l(n,null,{default:a(()=>[l(t,{name:"mdi:language"})]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue","rules"]),l(se,{inline:"",class:"ml-n4",modelValue:o.proficiency,"onUpdate:modelValue":u=>o.proficiency=u,label:"Proficiency",rules:[e.rules.required2]},{default:a(()=>[(s(!0),R(y,null,U(e.languageProficiency,(u,f)=>(s(),b(ue,{class:"pl-4",key:f,label:u,value:u},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","rules"]),i("div",pe,[l(G,{for:o.comfortable},{default:a(()=>[V("Comfortable")]),_:2},1032,["for"]),i("div",ce,[(s(!0),R(y,null,U(e.languageComfortable,(u,f)=>(s(),b(oe,{key:f,label:u,value:u,modelValue:o.comfortable,"onUpdate:modelValue":c=>o.comfortable=c,rules:f===e.languageComfortable.length-1?[e.rules.required3]:[e.rules.required31]},null,8,["label","value","modelValue","onUpdate:modelValue","rules"]))),128))])])])]),_:2},1024)]),_:2},1024))),128)),i("div",be,[l(v,{type:"button",class:"w-fit",density:"comfortable",color:"primary",rounded:"",onClick:r[9]||(r[9]=o=>e.addField("Proficiency"))},{default:a(()=>[l(n,null,{default:a(()=>[l(t,{name:"mdi:add"})]),_:1}),V(" Language ")]),_:1})]),i("div",Ve,[l(v,{color:"primary",onClick:e.submit},{default:a(()=>[V("Submit")]),_:1},8,["onClick"]),l(v,{color:"error",onClick:e.handleReset},{default:a(()=>[V("Clear")]),_:1},8,["onClick"])])])]),_:1},512)]),_:1})]),_:1})}const $e=H(ie,[["render",ge]]);export{$e as default};
