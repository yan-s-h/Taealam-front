import{p as g,aW as A,aX as F,aY as I,g as B,D as U,aZ as _,a_ as $,o as D,u as R,a$ as H,b0 as t,b1 as u,c as l,H as c}from"./index-267745d2.js";const M=g({...A(),...F(I(),["inline"])},"VCheckbox"),Y=B()({name:"VCheckbox",inheritAttrs:!1,props:M(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:r,slots:o}=d;const s=U(e,"modelValue"),{isFocused:n,focus:i,blur:m}=_(e),b=$(),V=D(()=>e.id||`checkbox-${b}`);return R(()=>{const[p,k]=H(r),[v,N]=t.filterProps(e),[x,W]=u.filterProps(e);return l(t,c({class:["v-checkbox",e.class]},p,v,{modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,id:V.value,focused:n.value,style:e.style}),{...o,default:a=>{let{id:h,messagesId:f,isDisabled:P,isReadonly:C}=a;return l(u,c(x,{id:h.value,"aria-describedby":f.value,disabled:P.value,readonly:C.value},k,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:m}),o)}})}),{}}});export{Y as V};
