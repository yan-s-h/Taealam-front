import{_ as C,Q as i,S as d,T as s,c as r,ae as L,ab as u,a8 as c,a2 as o,ac as N,ag as k,ah as P,M as U,N as M,ar as j,L as q,x as V,aj as w,aa as A,P as z,X as l,ak as E,K,U as x,R as O,Z as Q,W,a6 as X,a7 as Z}from"./index-5bb36160.js";import{c as G,a as H,V as J}from"./index.esm-462adb20.js";import{u as Y,a as tt}from"./vee-validate.esm-555b02ce.js";import{V as et}from"./VContainer-d0700334.js";import{a as _,V as at}from"./VRow-36ed3c78.js";import{V as st}from"./VTextarea-7053cd4a.js";import"./_commonjsHelpers-725317a4.js";const D=e=>(k("data-v-c831684c"),e=e(),P(),e),ot=D(()=>u("br",null,null,-1)),nt=D(()=>u("br",null,null,-1)),lt={__name:"CommentCard",props:{_id:{type:String,default:()=>""},account:{type:String,default:()=>""},date:{type:Date,default:()=>""},content:{type:String,default:()=>""}},setup(e){return(h,p)=>(i(),d(N,{variant:"text",class:"bgColor"},{default:s(()=>[r(L,null,{default:s(()=>[u("b",null,c(e.account),1),ot,o(" "+c(e.content),1),nt,o(" "+c(new Date(e.date).toLocaleString("en-US")),1)]),_:1})]),_:1}))}},rt=C(lt,[["__scopeId","data-v-c831684c"]]);const ct=e=>(k("data-v-632b9be2"),e=e(),P(),e),ut=ct(()=>u("br",null,null,-1)),it={class:"d-flex justify-end"},dt={class:"login-message"},mt={__name:"DiscussionPost",setup(e){const h=U(),{isLogin:p}=M(h),f=j(),b=q(),a=V({_id:"",title:"",content:"",account:"",date:"",status:""}),v=V([]);(async()=>{try{const{data:t}=await w.get("/discussion/"+f.params.id);a.value._id=t.result._id,a.value.title=t.result.title,a.value.content=t.result.content,a.value.account=t.result.account,a.value.status=t.result.status,a.value.date=t.result.date,document.title="Taealam | "+a.value.title,v.value.push(...t.commentResult)}catch(t){b({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})();const B=G({content:H().required("Content is required")}),{handleSubmit:I,isSubmitting:y,resetForm:R}=Y({validationSchema:B,initialValues:{content:""}}),g=tt("content"),F=I(async t=>{try{const n=new FormData;n.append("content",t.content),n.append("date",new Date().toISOString()),await A.post("/discussion/"+f.params.id,n),b({text:"Submitted successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),R();const{data:S}=await w.get("/discussion/"+f.params.id);v.value=[...S.commentResult]}catch(n){b({text:n.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),T=t=>t*50;return(t,n)=>{const S=z("router-link");return i(),d(et,null,{default:s(()=>[r(at,{class:"max-width-1080"},{default:s(()=>[r(_,{cols:"12"},{default:s(()=>[o(" Poster: "+c(a.value.account),1),ut,o(" "+c(new Date(a.value.date).toLocaleString("en-US"))+" ",1),u("h1",null,c(a.value.title),1),o(" "+c(a.value.content),1)]),_:1}),l(p)?(i(),d(_,{key:0,cols:"12"},{default:s(()=>[r(J,{disabled:l(y),onSubmit:E(l(F),["prevent"])},{default:s(()=>[r(st,{label:"Add a Comment",modelValue:l(g).value.value,"onUpdate:modelValue":n[0]||(n[0]=m=>l(g).value.value=m),"error-messages":l(g).errorMessage.value,variant:"outlined",clearable:"",rows:"2"},null,8,["modelValue","error-messages"]),u("div",it,[r(K,{color:"primary",type:"submit",loading:l(y)},{default:s(()=>[o("Submit")]),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1})):x("",!0),l(p)?x("",!0):(i(),d(_,{key:1,cols:"12",class:"text-center"},{default:s(()=>[u("p",dt,[o("Please "),r(S,{to:"/login",class:"login-link"},{default:s(()=>[o("log in")]),_:1}),o(" to leave a comment.")])]),_:1})),(i(!0),O(W,null,Q(v.value,(m,$)=>(i(),d(_,{cols:"12",key:m._id,"data-aos":"fade-down","data-aos-duration":"1200","data-aos-delay":T($),"data-aos-offset":"-100"},{default:s(()=>[r(rt,X(Z(m)),null,16)]),_:2},1032,["data-aos-delay"]))),128))]),_:1})]),_:1})}}},ht=C(mt,[["__scopeId","data-v-632b9be2"]]);export{ht as default};