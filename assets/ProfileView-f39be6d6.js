import{p as B,m as D,aq as M,g as N,ar as R,u as A,c as e,M as I,N as E,x as h,O as F,o as U,Q as V,S as W,T as t,$ as g,X as n,K as j,ao as L,a9 as q,a3 as K,as as w,at as P,au as $,a2 as u,ah as a,av as b,aw as x,ax as k,a8 as C,R as S,W as O}from"./index-060fd7eb.js";import{V as Q,a as X}from"./VNavigationDrawer-f4c32f9d.js";import{V as z}from"./VContainer-8d51a515.js";import{V as T,a as d}from"./VRow-aea40bbf.js";const G=B({...D(),...M()},"VLayout"),H=N()({name:"VLayout",props:G(),setup(_,o){let{slots:c}=o;const{layoutClasses:f,layoutStyles:m,getLayoutItem:v,items:i,layoutRef:r}=R(_);return A(()=>{var y;return e("div",{ref:r,class:[f.value,_.class],style:[m.value,_.style]},[(y=c.default)==null?void 0:y.call(c)])}),{getLayoutItem:v,items:i}}});const J=a("h2",{class:"profile-title"},"Profile",-1),Y=a("h4",{class:"personal-info-title"},"Personal Information",-1),Z=a("br",null,null,-1),ee=["value"],te=a("br",null,null,-1),ae=["value"],le={class:"highlight-number"},se=a("br",null,null,-1),oe={class:"highlight-number"},ne=a("br",null,null,-1),ie=a("span",{class:"text-white"},"lesson",-1),ue={key:1},re={class:"highlight-number"},de=a("br",null,null,-1),ve={__name:"ProfileView",setup(_){const o=I(),{avatar:c}=E(o),f=h(!0),{mobile:m}=F(),v=U(()=>m.value),i=h(v.value),r=h("profile");return(y,l)=>(V(),W(H,{class:"h-100"},{default:t(()=>[e(Q,{modelValue:f.value,"onUpdate:modelValue":l[3]||(l[3]=s=>f.value=s),rail:i.value,permanent:"",onClick:l[4]||(l[4]=s=>i.value=!1),clipped:v.value},{default:t(()=>[e(g,{"prepend-avatar":n(c),nav:"",title:"Welcome"},{append:t(()=>[e(j,{variant:"text",icon:"mdi-chevron-left",onClick:l[0]||(l[0]=L(s=>i.value=!i.value,["stop"]))})]),_:1},8,["prepend-avatar"]),e(q),e(K,{density:"compact",nav:""},{default:t(()=>[e(g,{"prepend-icon":"mdi-account",title:"Profile",value:"profile",onClick:l[1]||(l[1]=s=>r.value="profile")}),e(g,{"prepend-icon":"mdi-history",title:"My Activity",value:"activity",onClick:l[2]||(l[2]=s=>r.value="activity")})]),_:1})]),_:1},8,["modelValue","rail","clipped"]),e(X,{class:"h-100",onClick:l[5]||(l[5]=L(s=>i.value=!0,["stop"]))},{default:t(()=>[e(z,null,{default:t(()=>[w(e(T,{class:"max-width-835"},{default:t(()=>[e(d,null,{default:t(()=>[J,Y,e(d,{cols:"12"},{default:t(()=>[e($,{class:"info-label"},{default:t(()=>[u("Account")]),_:1}),Z,a("input",{type:"text",disabled:"",value:n(o).account,placeholder:"",name:"account",class:"info-input"},null,8,ee)]),_:1}),e(d,{cols:"12"},{default:t(()=>[e($,{class:"info-label"},{default:t(()=>[u("Email")]),_:1}),te,a("input",{type:"text",disabled:"",value:n(o).email,placeholder:"",name:"email",class:"info-input"},null,8,ae)]),_:1})]),_:1})]),_:1},512),[[P,r.value==="profile"]]),w(e(T,{class:"max-width-835"},{default:t(()=>[e(d,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(b,{class:"text-center",variant:"elevated"},{default:t(()=>[e(x,null,{default:t(()=>[u("Liked Articles")]),_:1}),e(k,null,{default:t(()=>{var s,p;return[a("span",le,C(((p=(s=n(o).profile[0])==null?void 0:s.likedArticles)==null?void 0:p.length)||0),1),se,u(" articles liked")]}),_:1})]),_:1})]),_:1}),e(d,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(b,{class:"text-center",variant:"elevated"},{default:t(()=>[e(x,null,{default:t(()=>[u("Current Lesson")]),_:1}),e(k,null,{default:t(()=>[n(o).profile[0]&&n(o).profile[0].currentLesson!==null?(V(),S(O,{key:0},[a("span",oe,C(n(o).profile[0].currentLesson),1),ne,ie],64)):(V(),S("p",ue,"Start your learning journey now! Choose a lesson to begin."))]),_:1})]),_:1})]),_:1}),e(d,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(b,{class:"text-center",variant:"elevated"},{default:t(()=>[e(x,null,{default:t(()=>[u("Posted Posts")]),_:1}),e(k,null,{default:t(()=>{var s,p;return[a("span",re,C(((p=(s=n(o).profile[0])==null?void 0:s.postedPosts)==null?void 0:p.length)||0),1),de,u(" posts posted ")]}),_:1})]),_:1})]),_:1})]),_:1},512),[[P,r.value==="activity"]])]),_:1})]),_:1})]),_:1}))}};export{ve as default};
