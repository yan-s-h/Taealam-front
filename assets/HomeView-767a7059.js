import{x as v,o as _,I as C,ab as V,A as w,Q as y,R as g,ac as $,a5 as A,a6 as F,X as s,ad as u,ae as p,a7 as S,U as N,af as I,ag as W,ah as t,ai as z,M,N as R,c as f,T as m,K as L,W as P,aj as U,a1 as j,ak as D,al as H}from"./index-fdaf6647.js";import{a as E}from"./aos-97de04ae.js";import{F as G}from"./footeR-1fd09fd5.js";import"./_commonjsHelpers-725317a4.js";const O=""+new URL("home-bbf8d576.mp4",import.meta.url).href,J="fade-left",K="fade-right",Q="fade-up",X="fade-down",b={[J]:{transform:"translate(-100%, 0)"},[K]:{transform:"translate(100%, 0)"},[Q]:{transform:"translate(0, -100%)"},[X]:{transform:"translate(0, 100%)"},default:{transform:"transform(-100%, 0)"}},q={backgroundColor:{type:String,default:"#091a28"},color:{type:String,default:"#ffffff"},loadingSpeed:{type:Number,default:15},overflowActive:{type:Boolean,default:!0},transitionSpeed:{type:Number,default:1400},transitionType:{type:String,default:"fade-left"}},Y="_preloader_1auhy_3",Z="_percentBar_1auhy_29",ee="_loadingWrapper_1auhy_37",oe="_loadingBar_1auhy_47",te={preloader:Y,percentBar:Z,loadingWrapper:ee,loadingBar:oe},ae=(a,n)=>{const o=a.__vccOpts||a;for(const[l,e]of n)o[l]=e;return o},se={__name:"VuePreloader",props:q,emits:["loading-is-over","transition-is-over"],setup(a,{emit:n}){const o=a,l=v(null);var e=v(0);const d=_(()=>({backgroundColor:o.backgroundColor})),c=_(()=>({transition:`all ${o.transitionSpeed}ms ease-in-out`})),i=_(()=>{if(e.value>=100)return b[o.transitionType]||b.default});C(()=>{e.value<100?setTimeout(()=>{e.value+=1,l.value&&(l.value.style.width=`${e.value}%`)},o.loadingSpeed):(B(),k())}),V(()=>{o.overflowActive&&T()}),w(()=>{e.value=e.value+=1});function B(){n("loading-is-over")}function x(){document.body.style.overflow="auto"}function T(){document.body.style.overflow="hidden"}function k(){setTimeout(()=>{n("transition-is-over"),o.overflowActive&&x()},o.transitionSpeed)}return(r,me)=>(y(),g("div",{class:u(r.$style.preloader),style:p([s(d),s(c),s(i)])},[$(r.$slots,"default",A(F({color:r.color,percent:s(e)})),()=>[s(e)<100?(y(),g("div",{key:0,class:u(r.$style.percentBar),style:p({color:r.color})},S(s(e))+" % ",7)):N("",!0),I(t("div",{class:u(r.$style.loadingWrapper)},[t("div",{ref_key:"loadingbar",ref:l,class:u(r.$style.loadingBar),style:p({backgroundColor:r.color})},null,6)],2),[[W,s(e)<100]])])],6))}},re={$style:te},ne=ae(se,[["__cssModules",re]]);const h=a=>(D("data-v-48e3cbbb"),a=a(),H(),a),le={style:{width:"90%"}},ie={class:"text-center text-secondary"},de={class:"video-section"},ce=h(()=>t("video",{class:"responsive-video",src:O,muted:"",autoplay:"",loop:"",type:"video/mp4"},null,-1)),ue={class:"text-center welcome text-white","data-aos":"fade-right","data-aos-duration":"2000"},fe=h(()=>t("h1",null,"Welcome to Taealam!",-1)),pe=h(()=>t("p",null,"Start your journey to learn Arabic with us",-1)),_e={__name:"HomeView",setup(a){const n=v(!0);w(()=>{setTimeout(()=>{n.value=!1},3e3)}),E.init();const o=M(),{isLogin:l}=R(o);return(e,d)=>(y(),g(P,null,[f(s(ne),{onLoadingIsOver:d[0]||(d[0]=c=>n.value=!1),overflowActive:!1,"transition-type":"fade-up","background-color":"#fff",color:"#FF6F61"},{default:m(({color:c,percent:i})=>[f(U,{name:"loading-animation",mode:"in-out"},{default:m(()=>[t("div",le,[t("h1",ie,S(i>100?100:i)+"%",1),t("div",{style:p({backgroundColor:c,height:"5px",width:i+"%"})},null,4)])]),_:2},1024)]),_:1}),t("section",de,[ce,t("div",ue,[fe,pe,f(L,{color:"secondary",size:"large",to:s(l)?"/courses":"/login"},{default:m(()=>[j("Get Started")]),_:1},8,["to"])])]),f(G,{class:"marginTop"})],64))}},be=z(_e,[["__scopeId","data-v-48e3cbbb"]]);export{be as default};