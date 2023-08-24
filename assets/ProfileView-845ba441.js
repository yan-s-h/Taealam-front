import{p as se,m as te,au as le,g as oe,av as re,u as ne,c as e,_ as ie,M as ue,N as de,x as u,L as ce,O as me,o as pe,aa as O,P as fe,Q as D,R as I,T as a,aw as ve,W as ge,$ as M,X as t,K as _,as as B,a9 as we,a3 as _e,ag as W,ah as K,ax as Q,a2 as r,at as y,V as ye,ak as x,al as C,am as k,ai as V,a8 as $,an as Ve,ao as he,ap as be}from"./index-284e5a43.js";import{c as Pe,a as A,b as xe,u as Ce,d as R,V as X}from"./index.esm-341e67f6.js";import{V as ke,a as Se}from"./VNavigationDrawer-7f43139b.js";import{V as Le}from"./VContainer-ade694be.js";import{V as G,a as m}from"./VRow-e5d8e298.js";import"./_commonjsHelpers-725317a4.js";const Ue=se({...te(),...le()},"VLayout"),Fe=oe()({name:"VLayout",props:Ue(),setup(n,o){let{slots:p}=o;const{layoutClasses:h,layoutStyles:f,getLayoutItem:S,items:v,layoutRef:d}=re(n);return ne(()=>{var c;return e("div",{ref:d,class:[h.value,n.class],style:[f.value,n.style]},[(c=p.default)==null?void 0:c.call(p)])}),{getLayoutItem:S,items:v}}});const T=n=>(he("data-v-57c78b82"),n=n(),be(),n),De=T(()=>V("h2",{class:"profile-title"},"Profile",-1)),Ie=T(()=>V("h4",{class:"personal-info-title"},"Personal Information",-1)),Me=T(()=>V("h4",{class:"personal-info-title"},"Reset Password",-1)),Be={class:"highlight-number"},$e={key:0,class:"highlight-number"},Ae={key:1},Re={class:"highlight-number"},Te={__name:"ProfileView",setup(n){const o=ue(),{avatar:p}=de(o),h=u(!0),f=ce(),{mobile:S}=me(),v=pe(()=>S.value),d=u(v.value),c=u("profile"),H=Pe({currentPassword:A().required("Password is required"),newPassword:A().required("Password is required").min(4,"Password should have at least 4 characters").max(20,"Password should not exceed 20 characters"),confirmPassword:A().required("Password is required").min(4,"Password should have at least 4 characters").max(20,"Password should not exceed 20 characters").oneOf([xe("newPassword")],"Passwords do not match")}),{handleSubmit:J,isSubmitting:q,resetForm:N}=Ce({validationSchema:H}),L=R("currentPassword"),U=R("newPassword"),F=R("confirmPassword"),Y=J(async i=>{try{await O.patch("/users/reset",{currentPassword:i.currentPassword,newPassword:i.newPassword}),f({text:"Password updated successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),N()}catch(s){f({text:s.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),b=u(!1),Z=()=>{b.value=!0},j=()=>{b.value=!1,N(),E.value.deleteFileRecord()},g=u([]),z=u([]),E=u(null),ee=async()=>{if(P.value=!0,g.value.length!==0){try{const i=new FormData;g.value.length>0&&i.append("image",g.value[0].file);const{data:s}=await O.patch("/users/image",i);o.image=s.result.image,f({text:"Updated Successfully",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),j()}catch(i){f({text:i.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}P.value=!1}},P=u(!1);return(i,s)=>{const ae=fe("vue-file-agent");return D(),I(ge,null,[e(Fe,{class:"h-100"},{default:a(()=>[e(ke,{modelValue:h.value,"onUpdate:modelValue":s[3]||(s[3]=l=>h.value=l),rail:d.value,permanent:"",onClick:s[4]||(s[4]=l=>v.value?d.value=!0:d.value=!1),clipped:v.value},{default:a(()=>[e(M,{"prepend-avatar":t(o).image===void 0?t(p):t(o).image,nav:"",title:"Welcome"},{append:a(()=>[e(_,{variant:"text",icon:"mdi-chevron-left",onClick:s[0]||(s[0]=B(l=>d.value=!d.value,["stop"]))})]),_:1},8,["prepend-avatar"]),e(we),e(_e,{density:"compact",nav:""},{default:a(()=>[e(M,{"prepend-icon":"mdi-account",title:"Profile",value:"profile",onClick:s[1]||(s[1]=l=>c.value="profile")}),e(M,{"prepend-icon":"mdi-history",title:"My Activity",value:"activity",onClick:s[2]||(s[2]=l=>c.value="activity")})]),_:1})]),_:1},8,["modelValue","rail","clipped"]),e(Se,{class:"h-100"},{default:a(()=>[e(Le,null,{default:a(()=>[W(e(G,{class:"max-width-835"},{default:a(()=>[e(m,{cols:"12",sm:"6"},{default:a(()=>[De,Ie,e(Q,{class:"info-label"},{default:a(()=>[r("Account")]),_:1}),e(y,{value:t(o).account,class:"info-input",density:"compact",variant:"outlined",disabled:""},null,8,["value"]),e(Q,{class:"info-label"},{default:a(()=>[r("Email")]),_:1}),e(y,{value:t(o).email,class:"info-input",density:"compact",variant:"outlined",disabled:""},null,8,["value"])]),_:1}),e(m,{cols:"12",sm:"6"},{default:a(()=>[e(ye,{src:t(o).image===void 0?t(p):t(o).image,width:"176",height:"176",class:"image",cover:""},null,8,["src"]),e(_,{variant:"text",color:"primary",onClick:Z,class:"ms-10"},{default:a(()=>[r("Upload")]),_:1})]),_:1}),e(X,{disabled:t(q),onSubmit:B(t(Y),["prevent"])},{default:a(()=>[e(m,{cols:"12"},{default:a(()=>[Me]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(y,{density:"compact",type:"password",modelValue:t(L).value.value,"onUpdate:modelValue":s[5]||(s[5]=l=>t(L).value.value=l),"error-messages":t(L).errorMessage.value,label:"Current password",variant:"outlined",class:"info-input",color:"primary"},null,8,["modelValue","error-messages"]),e(y,{density:"compact",type:"password",modelValue:t(U).value.value,"onUpdate:modelValue":s[6]||(s[6]=l=>t(U).value.value=l),"error-messages":t(U).errorMessage.value,label:"New password",variant:"outlined",class:"info-input",color:"primary"},null,8,["modelValue","error-messages"]),e(y,{density:"compact",type:"password",modelValue:t(F).value.value,"onUpdate:modelValue":s[7]||(s[7]=l=>t(F).value.value=l),"error-messages":t(F).errorMessage.value,label:"Confirm new password",variant:"outlined",class:"info-input",color:"primary"},null,8,["modelValue","error-messages"]),e(_,{color:"primary",type:"submit",rounded:"",width:"300",variant:"tonal",loading:t(q)},{default:a(()=>[r("Update")]),_:1},8,["loading"])]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},512),[[K,c.value==="profile"]]),W(e(G,{class:"max-width-835"},{default:a(()=>[e(m,{cols:"12",sm:"6",lg:"4"},{default:a(()=>[e(x,{class:"text-center",variant:"elevated"},{default:a(()=>[e(C,null,{default:a(()=>[r("Liked Articles")]),_:1}),e(k,null,{default:a(()=>{var l,w;return[V("span",Be,$(((w=(l=t(o).profile[0])==null?void 0:l.likedArticles)==null?void 0:w.length)||0),1)]}),_:1})]),_:1})]),_:1}),e(m,{cols:"12",sm:"6",lg:"4"},{default:a(()=>[e(x,{class:"text-center",variant:"elevated"},{default:a(()=>[e(C,null,{default:a(()=>[r("Current Lesson")]),_:1}),e(k,null,{default:a(()=>[t(o).profile[0]&&t(o).profile[0].currentLesson!==null?(D(),I("span",$e,$(t(o).profile[0].currentLesson),1)):(D(),I("p",Ae,"Start your learning journey now! Choose a lesson to begin."))]),_:1})]),_:1})]),_:1}),e(m,{cols:"12",sm:"6",lg:"4"},{default:a(()=>[e(x,{class:"text-center",variant:"elevated"},{default:a(()=>[e(C,null,{default:a(()=>[r("Posted Posts")]),_:1}),e(k,null,{default:a(()=>{var l,w;return[V("span",Re,$(((w=(l=t(o).profile[0])==null?void 0:l.postedPosts)==null?void 0:w.length)||0),1)]}),_:1})]),_:1})]),_:1})]),_:1},512),[[K,c.value==="activity"]])]),_:1})]),_:1})]),_:1}),e(ve,{persistent:"",modelValue:b.value,"onUpdate:modelValue":s[10]||(s[10]=l=>b.value=l),width:"200"},{default:a(()=>[e(X,{onSubmit:B(ee,["prevent"])},{default:a(()=>[e(x,null,{default:a(()=>[e(C,{class:"text-center"},{default:a(()=>[r("Upload Image")]),_:1}),e(k,null,{default:a(()=>[e(ae,{modelValue:g.value,"onUpdate:modelValue":s[8]||(s[8]=l=>g.value=l),"raw-model-value":z.value,"onUpdate:rawModelValue":s[9]||(s[9]=l=>z.value=l),"max-files":1,"max-size":"1MB",accept:"image/jpg,image/jpeg,image/png",multiple:!1,"error-text":{type:"Invalid file format",size:"File is too large"},deletable:"",ref_key:"fileAgent",ref:E},null,8,["modelValue","raw-model-value"])]),_:1}),e(Ve,{class:"d-flex justify-center"},{default:a(()=>[e(_,{color:"error",onClick:j,loading:P.value},{default:a(()=>[r("Cancel")]),_:1},8,["loading"]),e(_,{color:"primary",type:"submit",variant:"elevated",loading:P.value},{default:a(()=>[r("Submit")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1},8,["modelValue"])],64)}}},We=ie(Te,[["__scopeId","data-v-57c78b82"]]);export{We as default};