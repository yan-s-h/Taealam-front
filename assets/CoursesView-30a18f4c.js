import{L as G,x as r,aa as B,P as J,Q as k,R as A,c as l,T as s,au as Y,W as F,a9 as ee,K as C,a2 as h,al as _,aL as ae,V as le,S as I,U as te,X as t,ak as se,ac as oe,ad as re,a8 as ne,ae as ue,Z as ie,af as de,a4 as ce,ab as pe,a0 as me}from"./index-3fed3b68.js";import{u as ve,b as ge,a as w}from"./vee-validate.esm-5f77f2c8.js";import{c as be,a as S,d as Ve,e as fe,V as ye}from"./index.esm-984fcf78.js";import{V as ke}from"./VContainer-9bc27829.js";import{V as Ce,a as $}from"./VRow-75b3fadd.js";import{V as he}from"./VTextarea-da2f43f0.js";import{V as _e}from"./VCheckbox-e163d5c0.js";import"./_commonjsHelpers-725317a4.js";const we=pe("h1",{class:"text-center"},"Courses",-1),De={__name:"CoursesView",setup(Se){const p=G(),x=r(5),m=r([{key:"lessonNo",order:"asc"}]),v=r(1),N=r([]),M=[{title:"Lesson No.",align:"center",sortable:!0,key:"lessonNo"},{title:"Topic",align:"center",sortable:!0,key:"topic"},{title:"Description",align:"center",sortable:!0,key:"description"},{title:"Content",align:"center",sortable:!0,key:"content"},{title:"Publish",align:"center",sortable:!0,key:"publish"},{title:"Edit",align:"center",sortable:!1,key:"edit"}],P=r(!1),L=r(0),g=r(""),T=()=>{v.value=1,n()},n=async()=>{var o,a;P.value=!0;try{const{data:u}=await B.get("/courses/all",{params:{page:v.value,itemsPerPage:x.value,sortBy:((o=m.value[0])==null?void 0:o.key)||"lessonNo",sortOrder:((a=m.value[0])==null?void 0:a.order)||"asc",search:g.value}});N.value.splice(0,N.value.length,...u.result.data),L.value=u.result.count}catch(u){p({text:u.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}P.value=!1};n();const E=o=>{d.value=o._id,b.value.value=o.lessonNo,f.value.value=o.topic,V.value.value=o.description,j(o.content),y.value.value=o.publish,i.value=!0},i=r(!1),d=r(""),K=()=>{d.value="",i.value=!0},q=()=>{i.value=!1,H()},O=be({lessonNo:S().required("Lesson No. is required"),topic:S().required("Topic is required"),description:S().required("Description is required"),content:Ve().of(S().required("Content is required")),publish:fe()}),{handleSubmit:R,isSubmitting:U,resetForm:H,errors:Q}=ve({validationSchema:O,initialValues:{lessonNo:"",topic:"",description:"",content:[""],publish:!1},validateOnMount:!1}),{remove:W,push:X,fields:Z,replace:j}=ge("content"),b=w("lessonNo"),V=w("description"),f=w("topic"),y=w("publish"),z=R(async o=>{try{d.value.length>0?(await B.patch("/courses/"+d.value,o),p({text:"Updated Successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})):(await B.post("/courses",o),p({text:"Added Successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})),q(),n()}catch(a){p({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(o,a)=>{const u=J("v-data-table-server");return k(),A(F,null,[l(ke,null,{default:s(()=>[l(Ce,null,{default:s(()=>[l($,{cols:"12"},{default:s(()=>[we]),_:1}),l(ee),l($,{cols:"12"},{default:s(()=>[l(C,{color:"green",onClick:K},{default:s(()=>[h("Add Course")]),_:1}),l(u,{"items-per-page":x.value,"onUpdate:itemsPerPage":[a[1]||(a[1]=e=>x.value=e),n],"sort-by":m.value,"onUpdate:sortBy":[a[2]||(a[2]=e=>m.value=e),n],page:v.value,"onUpdate:page":[a[3]||(a[3]=e=>v.value=e),n],items:N.value,headers:M,loading:P.value,"items-length":L.value,search:g.value,hover:""},{top:s(()=>[l(_,{label:"Search","append-icon":"mdi-magnify","onClick:append":T,onKeydown:ae(T,["enter"]),modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value=e)},null,8,["onKeydown","modelValue"])]),"item.image":s(({item:e})=>[l(le,{src:e.raw.image,height:"50px"},null,8,["src"])]),"item.publish":s(({item:e})=>[e.raw.publish?(k(),I(me,{key:0,icon:"mdi-check"})):te("",!0)]),"item.edit":s(({item:e})=>[l(C,{icon:"mdi-pencil",onClick:c=>E(e.raw),variant:"text"},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),l(Y,{persistent:"",modelValue:i.value,"onUpdate:modelValue":a[8]||(a[8]=e=>i.value=e),width:"500px"},{default:s(()=>[l(ye,{disabled:t(U),onSubmit:se(t(z),["prevent"])},{default:s(()=>[l(oe,{class:"dialog-card"},{default:s(()=>[l(re,null,{default:s(()=>[h(ne(d.value.length>0?"Edit Course":"Add Course"),1)]),_:1}),l(ue,null,{default:s(()=>[l(_,{label:"Lesson No.",modelValue:t(b).value.value,"onUpdate:modelValue":a[4]||(a[4]=e=>t(b).value.value=e),"error-messages":t(b).errorMessage.value},null,8,["modelValue","error-messages"]),l(_,{label:"Topic",modelValue:t(f).value.value,"onUpdate:modelValue":a[5]||(a[5]=e=>t(f).value.value=e),"error-messages":t(f).errorMessage.value},null,8,["modelValue","error-messages"]),l(he,{label:"Description",modelValue:t(V).value.value,"onUpdate:modelValue":a[6]||(a[6]=e=>t(V).value.value=e),"error-messages":t(V).errorMessage.value},null,8,["modelValue","error-messages"]),(k(!0),A(F,null,ie(t(Z),(e,c)=>(k(),I(_,{key:e.key,modelValue:e.value,"onUpdate:modelValue":D=>e.value=D,"error-messages":t(Q)[`content[${c}]`],"onClick:append":D=>c===0?t(X)(""):t(W)(c),"append-icon":c===0?"mdi-plus":"mdi-delete"},null,8,["modelValue","onUpdate:modelValue","error-messages","onClick:append","append-icon"]))),128)),l(_e,{label:"Publish",modelValue:t(y).value.value,"onUpdate:modelValue":a[7]||(a[7]=e=>t(y).value.value=e),"error-messages":t(y).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),l(de,null,{default:s(()=>[l(ce),l(C,{color:"red",onClick:q,loading:t(U)},{default:s(()=>[h("Cancel")]),_:1},8,["loading"]),l(C,{color:"green",type:"submit",loading:t(U)},{default:s(()=>[h("Submit")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{De as default};
