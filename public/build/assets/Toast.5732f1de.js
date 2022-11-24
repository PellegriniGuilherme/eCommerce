import{r as c,c as S,a as H}from"./app.7ebb1f45.js";let _={data:""},L=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||_,U=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,R=/\/\*[^]*?\*\/|  +/g,I=/\n+/g,x=(e,t)=>{let r="",s="",o="";for(let a in e){let n=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+n+";":s+=a[1]=="f"?x(n,a):a+"{"+x(n,a[1]=="k"?"":t)+"}":typeof n=="object"?s+=x(n,t?t.replace(/([^,])+/g,i=>a.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=x.p?x.p(a,n):a+":"+n+";")}return r+(t&&o?t+"{"+o+"}":o)+s},y={},T=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+T(e[r]);return t}return e},Y=(e,t,r,s,o)=>{let a=T(e),n=y[a]||(y[a]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(a));if(!y[n]){let l=a!==e?e:(d=>{let p,f,m=[{}];for(;p=U.exec(d.replace(R,""));)p[4]?m.shift():p[3]?(f=p[3].replace(I," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][p[1]]=p[2].replace(I," ").trim();return m[0]})(e);y[n]=x(o?{["@keyframes "+n]:l}:l,r?"":"."+n)}let i=r&&y.g?y.g:null;return r&&(y.g=y[n]),((l,d,p,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(y[n],t,s,i),n},Z=(e,t,r)=>e.reduce((s,o,a)=>{let n=t[a];if(n&&n.call){let i=n(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":x(i,""):i===!1?"":i}return s+o+(n==null?"":n)},"");function D(e){let t=this||{},r=e.call?e(t.p):e;return Y(r.unshift?r.raw?Z(r,[].slice.call(arguments,1),t.p):r.reduce((s,o)=>Object.assign(s,o&&o.call?o(t.p):o),{}):r,L(t.target),t.g,t.o,t.k)}let F,A,N;D.bind({g:1});let h=D.bind({k:1});function q(e,t,r,s){x.p=t,F=e,A=r,N=s}function b(e,t){let r=this||{};return function(){let s=arguments;function o(a,n){let i=Object.assign({},a),l=i.className||o.className;r.p=Object.assign({theme:A&&A()},i),r.o=/ *go\d+/.test(l),i.className=D.apply(r,s)+(l?" "+l:""),t&&(i.ref=n);let d=e;return e[0]&&(d=i.as||e,delete i.as),N&&d[0]&&N(i),F(d,i)}return t?t(o):o}}var B=e=>typeof e=="function",j=(e,t)=>B(e)?e(t):e,G=(()=>{let e=0;return()=>(++e).toString()})(),M=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),J=20,$=new Map,Q=1e3,P=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),v({type:4,toastId:e})},Q);$.set(e,t)},V=e=>{let t=$.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,J)};case 1:return t.toast.id&&V(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?z(e,{type:1,toast:r}):z(e,{type:0,toast:r});case 3:let{toastId:s}=t;return s?P(s):e.toasts.forEach(a=>{P(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===s||s===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},k=[],O={toasts:[],pausedAt:void 0},v=e=>{O=z(O,e),k.forEach(t=>{t(O)})},W={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},X=(e={})=>{let[t,r]=c.exports.useState(O);c.exports.useEffect(()=>(k.push(r),()=>{let o=k.indexOf(r);o>-1&&k.splice(o,1)}),[t]);let s=t.toasts.map(o=>{var a,n;return{...e,...e[o.type],...o,duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||W[o.type],style:{...e.style,...(n=e[o.type])==null?void 0:n.style,...o.style}}});return{...t,toasts:s}},K=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||G()}),w=e=>(t,r)=>{let s=K(t,e,r);return v({type:2,toast:s}),s.id},u=(e,t)=>w("blank")(e,t);u.error=w("error");u.success=w("success");u.loading=w("loading");u.custom=w("custom");u.dismiss=e=>{v({type:3,toastId:e})};u.remove=e=>v({type:4,toastId:e});u.promise=(e,t,r)=>{let s=u.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(o=>(u.success(j(t.success,o),{id:s,...r,...r==null?void 0:r.success}),o)).catch(o=>{u.error(j(t.error,o),{id:s,...r,...r==null?void 0:r.error})}),e};var ee=(e,t)=>{v({type:1,toast:{id:e,height:t}})},te=()=>{v({type:5,time:Date.now()})},re=e=>{let{toasts:t,pausedAt:r}=X(e);c.exports.useEffect(()=>{if(r)return;let a=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(l<0){i.visible&&u.dismiss(i.id);return}return setTimeout(()=>u.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,r]);let s=c.exports.useCallback(()=>{r&&v({type:6,time:Date.now()})},[r]),o=c.exports.useCallback((a,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},p=t.filter(g=>(g.position||d)===(a.position||d)&&g.height),f=p.findIndex(g=>g.id===a.id),m=p.filter((g,C)=>C<f&&g.visible).length;return p.filter(g=>g.visible).slice(...i?[m+1]:[0,m]).reduce((g,C)=>g+(C.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:ee,startPause:te,endPause:s,calculateOffset:o}}},ae=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,oe=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ie=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${oe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ne=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,le=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`,de=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ce=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,pe=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${de} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ce} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ue=b("div")`
  position: absolute;
`,me=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,fe=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ge=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ye=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?c.exports.createElement(ge,null,t):t:r==="blank"?null:c.exports.createElement(me,null,c.exports.createElement(le,{...s}),r!=="loading"&&c.exports.createElement(ue,null,r==="error"?c.exports.createElement(ie,{...s}):c.exports.createElement(pe,{...s})))},he=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,xe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,be="0%{opacity:0;} 100%{opacity:1;}",ve="0%{opacity:1;} 100%{opacity:0;}",we=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ee=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$e=(e,t)=>{let r=e.includes("top")?1:-1,[s,o]=M()?[be,ve]:[he(r),xe(r)];return{animation:t?`${h(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ke=c.exports.memo(({toast:e,position:t,style:r,children:s})=>{let o=e.height?$e(e.position||t||"top-center",e.visible):{opacity:0},a=c.exports.createElement(ye,{toast:e}),n=c.exports.createElement(Ee,{...e.ariaProps},j(e.message,e));return c.exports.createElement(we,{className:e.className,style:{...o,...r,...e.style}},typeof s=="function"?s({icon:a,message:n}):c.exports.createElement(c.exports.Fragment,null,a,n))});q(c.exports.createElement);var Oe=({id:e,className:t,style:r,onHeightUpdate:s,children:o})=>{let a=c.exports.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;s(e,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return c.exports.createElement("div",{ref:a,className:t,style:r},o)},je=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...o}},De=D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Ce=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:o,containerStyle:a,containerClassName:n})=>{let{toasts:i,handlers:l}=re(r);return c.exports.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...a},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let p=d.position||t,f=l.calculateOffset(d,{reverseOrder:e,gutter:s,defaultPosition:t}),m=je(p,f);return c.exports.createElement(Oe,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?De:"",style:m},d.type==="custom"?j(d.message,d):o?o(d):c.exports.createElement(ke,{toast:d,position:p}))}))},Ae=u;function ze(){const{flash:e}=S().props;return c.exports.useEffect(()=>{e.message&&Ae(e.message,{duration:4e3,position:"top-center"})},[e.message]),H(Ce,{toastOptions:{style:{color:"#F5F5F5",backgroundColor:"#1D1D1D"}}})}export{ze as T};
