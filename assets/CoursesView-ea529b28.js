import{_ as f,P as m,Q as o,S as d,T as a,c as e,ad as y,a2 as c,a8 as l,ae as x,af as C,K as V,ac as g,L as h,x as b,aj as k,R as S,Z as v,W as w,ab as B,a6 as N,a7 as P}from"./index-267745d2.js";import{a as T}from"./aos-97de04ae.js";import{V as L}from"./VContainer-1a652348.js";import{a as _,V as R}from"./VRow-c27cac70.js";import"./_commonjsHelpers-725317a4.js";const j={__name:"CourseCard",props:{_id:{type:String,default:()=>""},lessonNo:{type:String,default:()=>""},topic:{type:String,default:()=>""},description:{type:String,default:()=>""},publish:{type:Boolean,default:()=>!0},content:{type:Array,default:()=>[""]}},setup(s){return(u,r)=>{const n=m("router-link");return o(),d(g,null,{default:a(()=>[e(y,{class:"text-center"},{default:a(()=>[c(" Lesson "+l(s.lessonNo)+": "+l(s.topic),1)]),_:1}),e(x,{class:"lesson-description"},{default:a(()=>[c(l(s.description),1)]),_:1}),e(C,{class:"d-flex justify-center"},{default:a(()=>[e(n,{to:"/courses/"+s._id,class:"text-primary text-decoration-none"},{default:a(()=>[e(V,{variant:"elevated",color:"secondary"},{default:a(()=>[c("Get Started")]),_:1})]),_:1},8,["to"])]),_:1})]),_:1})}}},A=f(j,[["__scopeId","data-v-98389db2"]]),D=B("h1",{class:"text-center"},"Courses",-1),Q={__name:"CoursesView",setup(s){T.init();const u=h(),r=b([]);(async()=>{try{const{data:t}=await k.get("/courses");r.value.push(...t.result)}catch(t){u({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})();const n=t=>t*200;return(t,z)=>(o(),d(L,null,{default:a(()=>[e(R,{class:"max-width-1080"},{default:a(()=>[e(_,{cols:"12"},{default:a(()=>[D]),_:1}),(o(!0),S(w,null,v(r.value,(i,p)=>(o(),d(_,{cols:"12",sm:"6",lg:"4",key:i._id,"data-aos":"fade-down","data-aos-duration":"1200","data-aos-delay":n(p),"data-aos-offset":"-100"},{default:a(()=>[e(A,N(P(i)),null,16)]),_:2},1032,["data-aos-delay"]))),128))]),_:1})]),_:1}))}};export{Q as default};
