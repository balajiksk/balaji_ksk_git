import{z as o,A as t,o as n,c as r,a as e,b as c,w as i,d as l,C as p}from"./Dw3O7roD.js";import{V as _}from"./ClxUvTlz.js";const d={class:"page flex flex-col sm:gap-5 gap-2"},m=e("h1",null,"Welcome",-1),u=e("p",null,"Sign into your profile",-1),V=o({__name:"login",setup(f){const s=t(),a=async()=>{await s.signIn({username:"emilys",password:"emilyspass"}),await p("/",{replace:!0})};return(g,h)=>(n(),r("div",d,[e("div",null,[m,u,c(_,{onClick:a},{default:i(()=>[l("Sign In")]),_:1})])]))}});export{V as default};