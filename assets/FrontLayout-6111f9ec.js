import{p as E,m as Z,a as ee,g as H,u as D,c as t,b as ne,d as se,e as re,f as ue,h as ie,t as q,i as ce,j as de,k as ve,l as me,n as fe,s as C,o as g,q as ge,V as W,r as z,v as M,w as pe,x as F,y as he,z as $,A as te,B as _e,C as be,D as ye,E as Ve,F as xe,G as ke,H as j,I as Se,J as Te,K as T,_ as Be,L as we,M as Ce,N as Pe,O as Ae,P as Ne,Q as u,R as P,S as _,T as l,U as m,W as I,X as k,Y as G,Z as J,$ as b,a0 as L,a1 as R,a2 as f,a3 as O,a4 as K,a5 as Ie,a6 as Le,a7 as Re,a8 as Y,a9 as Q,aa as Ee}from"./index-546107a1.js";import{V as He,a as De}from"./VNavigationDrawer-52d642b6.js";import{V as Ue}from"./VContainer-12d4fb26.js";const ae=E({text:String,...Z(),...ee()},"VToolbarTitle"),le=H()({name:"VToolbarTitle",props:ae(),setup(e,p){let{slots:a}=p;return D(()=>{const d=!!(a.default||a.text||e.text);return t(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[d&&t("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(o=a.default)==null?void 0:o.call(a)])]}})}),{}}}),Me=[null,"prominent","default","comfortable","compact"],oe=E({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Me.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ne(),...Z(),...se(),...re(),...ee({tag:"header"}),...ue()},"VToolbar"),X=H()({name:"VToolbar",props:oe(),setup(e,p){var r;let{slots:a}=p;const{backgroundColorClasses:d,backgroundColorStyles:o}=ie(q(e,"color")),{borderClasses:n}=ce(e),{elevationClasses:y}=de(e),{roundedClasses:V}=ve(e),{themeClasses:h}=me(e),{rtlClasses:x}=fe(),c=C(!!(e.extended||(r=a.extension)!=null&&r.call(a))),S=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=g(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ge({VBtn:{variant:"text"}}),D(()=>{var i;const B=!!(e.title||a.title),s=!!(a.image||e.image),U=(i=a.extension)==null?void 0:i.call(a);return c.value=!!(e.extended||U),t(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},d.value,n.value,y.value,V.value,h.value,x.value,e.class],style:[o.value,e.style]},{default:()=>[s&&t("div",{key:"image",class:"v-toolbar__image"},[a.image?t(z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):t(W,{key:"image-img",cover:!0,src:e.image},null)]),t(z,{defaults:{VTabs:{height:M(S.value)}}},{default:()=>{var w,A,N;return[t("div",{class:"v-toolbar__content",style:{height:M(S.value)}},[a.prepend&&t("div",{class:"v-toolbar__prepend"},[(w=a.prepend)==null?void 0:w.call(a)]),B&&t(le,{key:"title",text:e.title},{text:a.title}),(A=a.default)==null?void 0:A.call(a),a.append&&t("div",{class:"v-toolbar__append"},[(N=a.append)==null?void 0:N.call(a)])])]}}),t(z,{defaults:{VTabs:{height:M(v.value)}}},{default:()=>[t(pe,null,{default:()=>[c.value&&t("div",{class:"v-toolbar__extension",style:{height:M(v.value)}},[U])]})]})]})}),{contentHeight:S,extensionHeight:v}}}),$e=E({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Fe(e){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=p;let d=0;const o=F(null),n=C(0),y=C(0),V=C(0),h=C(!1),x=C(!1),c=g(()=>Number(e.scrollThreshold)),S=g(()=>he((c.value-n.value)/c.value||0)),v=()=>{const r=o.value;!r||a&&!a.value||(d=n.value,n.value="window"in r?r.pageYOffset:r.scrollTop,x.value=n.value<d,V.value=Math.abs(n.value-c.value))};return $(x,()=>{y.value=y.value||n.value}),$(h,()=>{y.value=0}),te(()=>{$(()=>e.scrollTarget,r=>{var s;const B=r?document.querySelector(r):window;B&&B!==o.value&&((s=o.value)==null||s.removeEventListener("scroll",v),o.value=B,o.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),_e(()=>{var r;(r=o.value)==null||r.removeEventListener("scroll",v)}),a&&$(a,v,{immediate:!0}),{scrollThreshold:c,currentScroll:n,currentThreshold:V,isScrollActive:h,scrollRatio:S,isScrollingUp:x,savedScroll:y}}const ze=E({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...oe(),...be(),...$e(),height:{type:[Number,String],default:64}},"VAppBar"),Oe=H()({name:"VAppBar",props:ze(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:a}=p;const d=F(),o=ye(e,"modelValue"),n=g(()=>{var w;const i=new Set(((w=e.scrollBehavior)==null?void 0:w.split(" "))??[]);return{hide:i.has("hide"),inverted:i.has("inverted"),collapse:i.has("collapse"),elevate:i.has("elevate"),fadeImage:i.has("fade-image")}}),y=g(()=>{const i=n.value;return i.hide||i.inverted||i.collapse||i.elevate||i.fadeImage||!o.value}),{currentScroll:V,scrollThreshold:h,isScrollingUp:x,scrollRatio:c}=Fe(e,{canScroll:y}),S=g(()=>e.collapse||n.value.collapse&&(n.value.inverted?c.value>0:c.value===0)),v=g(()=>e.flat||n.value.elevate&&(n.value.inverted?V.value>0:V.value===0)),r=g(()=>n.value.fadeImage?n.value.inverted?1-c.value:c.value:void 0),B=g(()=>{var A,N;if(n.value.hide&&n.value.inverted)return 0;const i=((A=d.value)==null?void 0:A.contentHeight)??0,w=((N=d.value)==null?void 0:N.extensionHeight)??0;return i+w});Ve(g(()=>!!e.scrollBehavior),()=>{Se(()=>{n.value.hide?n.value.inverted?o.value=V.value>h.value:o.value=x.value||V.value<h.value:o.value=!0})});const{ssrBootStyles:s}=xe(),{layoutItemStyles:U}=ke({id:e.name,order:g(()=>parseInt(e.order,10)),position:q(e,"location"),layoutSize:B,elementSize:C(void 0),active:o,absolute:q(e,"absolute")});return D(()=>{const[i]=X.filterProps(e);return t(X,j({ref:d,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...U.value,"--v-toolbar-image-opacity":r.value,height:void 0,...s.value},e.style]},i,{collapse:S.value,flat:v.value}),a)}),{}}}),Ye=E({...Te({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),qe=H()({name:"VAppBarNavIcon",props:Ye(),setup(e,p){let{slots:a}=p;return D(()=>t(T,j(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),We=H()({name:"VAppBarTitle",props:ae(),setup(e,p){let{slots:a}=p;return D(()=>t(le,j(e,{class:"v-app-bar-title"}),a)),{}}});const je={key:3,class:"text-center"},Ge={__name:"FrontLayout",setup(e){const p=F(!0);te(()=>{setTimeout(()=>{p.value=!1},3e3)});const a=we(),d=Ce(),{isLogin:o,isAdmin:n,avatar:y}=Pe(d),{mobile:V}=Ae(),h=g(()=>V.value),x=F(!1),c=g(()=>[{to:"/courses",text:"Courses",icon:"",show:o.value},{to:"/culture",text:"Culture Corner",icon:"",show:!0},{to:"/discussion",text:"Discussion Board",icon:"",show:!0},{to:"/aboutus",text:"About Us",icon:"",show:!0}]),S=async()=>{try{await Ee.delete("/users/logout"),d.logout(),a({text:"You have been logged out",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(v){a({text:v.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(v,r)=>{const B=Ne("router-view");return u(),P(I,null,[h.value?(u(),_(He,{key:0,modelValue:x.value,"onUpdate:modelValue":r[0]||(r[0]=s=>x.value=s),location:"left",temporary:""},{default:l(()=>[t(O,{nav:""},{default:l(()=>[t(T,{variant:"text",class:"v-btn__content",to:k(o)?"/profile":"/login"},{default:l(()=>[t(G,null,{default:l(()=>[t(W,{src:k(y)},null,8,["src"])]),_:1})]),_:1},8,["to"]),(u(!0),P(I,null,J(c.value,s=>(u(),P(I,{key:s.to},[s.show?(u(),_(b,{key:0,to:s.to},{prepend:l(()=>[t(L,{icon:s.icon},null,8,["icon"])]),default:l(()=>[t(R,null,{default:l(()=>[f(Y(s.text),1)]),_:2},1024)]),_:2},1032,["to"])):m("",!0)],64))),128)),k(o)?(u(),_(b,{key:0,to:"/admin"},{prepend:l(()=>[t(L,{icon:"mdi-cog"})]),default:l(()=>[t(R,null,{default:l(()=>[f("Admin")]),_:1})]),_:1})):m("",!0),k(o)?(u(),_(b,{key:1,onClick:S},{prepend:l(()=>[t(L,{icon:"mdi-logout"})]),default:l(()=>[t(R,null,{default:l(()=>[f("Sign Out")]),_:1})]),_:1})):m("",!0),k(o)?m("",!0):(u(),_(b,{key:2,to:"/login"},{prepend:l(()=>[t(L,{icon:"mdi-login"})]),default:l(()=>[t(R,null,{default:l(()=>[f("Log In")]),_:1})]),_:1})),k(o)?m("",!0):(u(),_(b,{key:3,to:"/register"},{prepend:l(()=>[t(L,{icon:"mdi-account-plus"})]),default:l(()=>[t(R,null,{default:l(()=>[f("Sign up")]),_:1})]),_:1}))]),_:1})]),_:1},8,["modelValue"])):m("",!0),t(Oe,{color:"primary"},{default:l(()=>[t(Ue,{class:"d-flex align-center"},{default:l(()=>[t(T,{to:"/","selected-class":"",active:!1},{default:l(()=>[t(We,null,{default:l(()=>[f("Taealam")]),_:1})]),_:1}),t(K),h.value?(u(),_(qe,{key:0,onClick:r[1]||(r[1]=s=>x.value=!0)})):m("",!0),h.value?m("",!0):(u(!0),P(I,{key:1},J(c.value,s=>(u(),P(I,{key:s.to},[s.show?(u(),_(T,{key:0,variant:"text","prepend-icon":s.icon,to:s.to},{default:l(()=>[f(Y(s.text),1)]),_:2},1032,["prepend-icon","to"])):m("",!0)],64))),128)),h.value?m("",!0):(u(),_(K,{key:2})),h.value?m("",!0):(u(),P("div",je,[t(Ie,{"open-on-hover":""},{activator:l(({props:s})=>[t(T,Le(Re(s)),{default:l(()=>[t(G,null,{default:l(()=>[t(W,{src:k(y)},null,8,["src"])]),_:1})]),_:2},1040)]),default:l(()=>[k(o)?(u(),_(O,{key:0},{default:l(()=>[t(b,{class:"text-center"},{default:l(()=>[f(" Welcome "+Y(k(d).account),1)]),_:1}),t(Q),t(b,null,{default:l(()=>[t(T,{variant:"text","prepend-icon":"mdi-account",to:"/profile"},{default:l(()=>[f("Profile")]),_:1})]),_:1}),t(Q),k(n)?(u(),_(b,{key:0},{default:l(()=>[t(T,{variant:"text","prepend-icon":"mdi-cog",to:"/admin"},{default:l(()=>[f("Admin")]),_:1})]),_:1})):m("",!0),t(b,null,{default:l(()=>[t(T,{variant:"text","prepend-icon":"mdi-logout",onClick:S},{default:l(()=>[f("Sign Out")]),_:1})]),_:1})]),_:1})):m("",!0),k(o)?m("",!0):(u(),_(O,{key:1},{default:l(()=>[t(b,null,{default:l(()=>[f("Hi Visitor")]),_:1}),t(b,null,{default:l(()=>[t(T,{variant:"text","prepend-icon":"mdi-login",to:"/login"},{default:l(()=>[f("Log In")]),_:1})]),_:1}),t(b,null,{default:l(()=>[t(T,{variant:"text","prepend-icon":"mdi-account-plus",to:"/register"},{default:l(()=>[f("Sign up")]),_:1})]),_:1})]),_:1}))]),_:1})]))]),_:1})]),_:1}),t(De,null,{default:l(()=>[(u(),_(B,{key:v.$route.path}))]),_:1})],64)}}},Xe=Be(Ge,[["__scopeId","data-v-10515697"]]);export{Xe as default};
