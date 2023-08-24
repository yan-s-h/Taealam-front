import{_ as V,P as h,Q as c,S as f,T as e,c as a,al as S,a2 as u,a8 as i,am as k,an as w,K as b,ak as B,L as I,x as _,ar as N,o as y,R as P,Z as T,W as L,H as z,ao as A,ap as D,ai as R}from"./index-75492b07.js";import{a as j}from"./aos-97de04ae.js";import{V as E}from"./VContainer-709117ca.js";import{a as p,V as F}from"./VRow-889c52f2.js";import{V as G}from"./VPagination-9dba13a2.js";import"./_commonjsHelpers-725317a4.js";const H={__name:"CourseCard",props:{_id:{type:String,default:()=>""},lessonNo:{type:Number,default:()=>0},topic:{type:String,default:()=>""},description:{type:String,default:()=>""},publish:{type:Boolean,default:()=>!0},content:{type:Array,default:()=>[""]}},setup(t){return(m,r)=>{const o=h("router-link");return c(),f(B,null,{default:e(()=>[a(S,{class:"text-center"},{default:e(()=>[u(" Lesson "+i(t.lessonNo)+": "+i(t.topic),1)]),_:1}),a(k,{class:"lesson-description"},{default:e(()=>[u(i(t.description),1)]),_:1}),a(w,{class:"d-flex justify-center"},{default:e(()=>[a(o,{to:"/courses/"+t._id,class:"text-primary text-decoration-none"},{default:e(()=>[a(b,{variant:"elevated",color:"secondary"},{default:e(()=>[u("Get Started")]),_:1})]),_:1},8,["to"])]),_:1})]),_:1})}}},K=V(H,[["__scopeId","data-v-66161f51"]]);const M=t=>(A("data-v-561fb8d4"),t=t(),D(),t),Q=M(()=>R("h1",{class:"text-center"},"Courses",-1)),U={__name:"CoursesView",setup(t){j.init();const m=I(),r=_([]);(async()=>{try{const{data:s}=await N.get("/courses");r.value.push(...s.result)}catch(s){m({text:s.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})();const o=_(12),d=_(1),v=y(()=>{const s=(d.value-1)*o.value,l=s+o.value;return r.value.slice(s,l)}),x=y(()=>Math.ceil(r.value.length/o.value)),g=s=>s*50;return(s,l)=>(c(),f(E,{class:"h-100"},{default:e(()=>[a(F,{class:"max-width-1080"},{default:e(()=>[a(p,{cols:"12"},{default:e(()=>[Q]),_:1}),(c(!0),P(L,null,T(v.value,(n,C)=>(c(),f(p,{cols:"12",sm:"6",lg:"4",key:n._id,"data-aos":"fade-down","data-aos-duration":"600","data-aos-delay":g(C),"data-aos-offset":"-100"},{default:e(()=>[a(K,z(n,{class:"py-6"}),null,16)]),_:2},1032,["data-aos-delay"]))),128)),a(p,{cols:"12"},{default:e(()=>[a(G,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=n=>d.value=n),length:x.value,size:"20"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1}))}},X=V(U,[["__scopeId","data-v-561fb8d4"]]);export{X as default};
