import{L as f,M as k,o as h,P as C,Q as n,S as i,T as o,c as a,ak as x,K as y,V,al as S,a2 as b,a8 as p,am as v,ab as m,an as w,aa as B,_ as A,x as P,ad as I,a9 as L,R as T,Z as N,W as R,a6 as D,a7 as j,ag as z,ah as E}from"./index-2579ce82.js";import{V as F}from"./VContainer-7eff615b.js";import{V as _,a as K}from"./VRow-275f2665.js";const M={__name:"CultureCard",props:{_id:{type:String,default:()=>""},title:{type:String,default:()=>""},content:{type:String,default:()=>""},image:{type:String,default:()=>""},publish:{type:Boolean,default:()=>!0}},setup(t){const s=t,l=f(),e=k(),u=h(()=>!e.profile||!e.profile[0]||!e.profile[0].likedArticles?!1:e.profile[0].likedArticles.some(r=>r.toString()===s._id)),c=async()=>{try{const{data:r}=await B.post("/users/like",{culture:s._id});e.profile=r.result,e.profile[0].likedArticles.some(d=>d.toString()===s._id)&&l({text:"Article liked!",showCloseButton:!1,snackbarProps:{timeout:1e4,color:"green",location:"bottom"}})}catch(r){console.log(r),l({text:r.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(r,d)=>{const g=C("router-link");return n(),i(w,null,{default:o(()=>[a(x,{class:"justify-end"},{default:o(()=>[a(y,{color:u.value?"red":"primary",onClick:c,icon:"mdi-heart"},null,8,["color"])]),_:1}),a(V,{src:t.image,cover:"",height:"200"},null,8,["src"]),a(S,null,{default:o(()=>[a(g,{to:"/culture/"+t._id,class:"text-primary text-decoration-none"},{default:o(()=>[b(p(t.title),1)]),_:1},8,["to"])]),_:1}),a(v,null,{default:o(()=>[m("pre",null,p(t.content),1)]),_:1})]),_:1})}}};const Q=t=>(z("data-v-31cf2543"),t=t(),E(),t),U=Q(()=>m("h1",{class:"text-center"},"Culture Corner",-1)),W={__name:"CultureCorner",setup(t){const s=f(),l=P([]);return(async()=>{try{const{data:e}=await I.get("/culture");l.value.push(...e.result)}catch(e){s({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(e,u)=>(n(),i(F,null,{default:o(()=>[a(K,{class:"max-width-1080"},{default:o(()=>[a(_,{cols:"12"},{default:o(()=>[U]),_:1}),a(L),(n(!0),T(R,null,N(l.value,c=>(n(),i(_,{cols:"12",sm:"6",lg:"4",key:c._id},{default:o(()=>[a(M,D(j(c)),null,16)]),_:2},1024))),128))]),_:1})]),_:1}))}},G=A(W,[["__scopeId","data-v-31cf2543"]]);export{G as default};