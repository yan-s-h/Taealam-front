import{Q as r,S as i,T as a,c as e,aw as w,ah as h,az as V,K as g,av as b,L as k,M as v,ay as x,x as u,an as L,aa as B,a8 as m,R as S,Z as N,W as R}from"./index-060fd7eb.js";import{a as T}from"./aos-97de04ae.js";import{V as A}from"./VContainer-8d51a515.js";import{a as f,V as M}from"./VRow-aea40bbf.js";import"./_commonjsHelpers-725317a4.js";const D=["innerHTML"],H={__name:"CourseContent",props:{content:{type:String,default:()=>""}},setup(d){const s=d,o=new Audio;o.src=new URL("/tts/"+s.content.split("<br>")[0],"https://bdhsfbjdhfehguhihtryhbd.onrender.com");const n=async()=>{o.play()};return(c,l)=>(r(),i(b,{class:"card"},{default:a(()=>[e(w,null,{default:a(()=>[h("div",{innerHTML:s.content,class:"title-card"},null,8,D)]),_:1}),e(V,null,{default:a(()=>[e(g,{icon:"mdi-volume-medium",color:"primary",onClick:n})]),_:1})]),_:1}))}},P={class:"text-center"},K={__name:"LessonView",setup(d){T.init();const s=k(),o=v(),n=x(),c=u([]),l=u(""),_=u("");(async()=>{try{const{data:t}=await L.get("/courses/"+n.params.id);l.value=t.result.lessonNo,_.value=t.result.topic,c.value=[...t.result.content]}catch(t){console.log(t),s({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(async()=>{try{const{data:t}=await B.patch("/users/currentLesson",{_id:n.params.id});o.profile=t.result}catch(t){console.log(t),s({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})();const y=t=>t*50;return(t,U)=>(r(),i(A,null,{default:a(()=>[e(M,{class:"max-width-1080"},{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[h("h1",P,"Lesson "+m(l.value)+": "+m(_.value),1)]),_:1}),(r(!0),S(R,null,N(c.value,(C,p)=>(r(),i(f,{cols:"12",sm:"4",md:"2",key:p,"data-aos":"fade-down","data-aos-duration":"1200","data-aos-delay":y(p)},{default:a(()=>[e(H,{content:C},null,8,["content"])]),_:2},1032,["data-aos-delay"]))),128))]),_:1})]),_:1}))}};export{K as default};
