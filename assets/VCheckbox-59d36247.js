import{p as g,aM as A,aN as F,aO as I,g as B,D as R,aP as U,aQ as D,o as M,u as N,aR as _,aS as t,aT as u,c as l,H as c}from"./index-3919ad30.js";const $=g({...A(),...F(I(),["inline"])},"VCheckbox"),S=B()({name:"VCheckbox",inheritAttrs:!1,props:$(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:r,slots:o}=d;const s=R(e,"modelValue"),{isFocused:n,focus:i,blur:m}=U(e),V=D(),b=M(()=>e.id||`checkbox-${V}`);return N(()=>{const[p,k]=_(r),[v,H]=t.filterProps(e),[x,O]=u.filterProps(e);return l(t,c({class:["v-checkbox",e.class]},p,v,{modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,id:b.value,focused:n.value,style:e.style}),{...o,default:a=>{let{id:h,messagesId:f,isDisabled:P,isReadonly:C}=a;return l(u,c(x,{id:h.value,"aria-describedby":f.value,disabled:P.value,readonly:C.value},k,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:m}),o)}})}),{}}});export{S as V};