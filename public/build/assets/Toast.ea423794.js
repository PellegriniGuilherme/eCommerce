import{r as c,b as S,d as H,a as _}from"./app.406e0da2.js";let L={data:""},U=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||L,R=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Y=/\/\*[^]*?\*\/|  +/g,z=/\n+/g,x=(t,e)=>{let r="",s="",o="";for(let a in t){let n=t[a];a[0]=="@"?a[1]=="i"?r=a+" "+n+";":s+=a[1]=="f"?x(n,a):a+"{"+x(n,a[1]=="k"?"":e)+"}":typeof n=="object"?s+=x(n,e?e.replace(/([^,])+/g,i=>a.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=x.p?x.p(a,n):a+":"+n+";")}return r+(e&&o?e+"{"+o+"}":o)+s},y={},T=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+T(t[r]);return e}return t},Z=(t,e,r,s,o)=>{let a=T(t),n=y[a]||(y[a]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(a));if(!y[n]){let l=a!==t?t:(d=>{let p,m,f=[{}];for(;p=R.exec(d.replace(Y,""));)p[4]?f.shift():p[3]?(m=p[3].replace(z," ").trim(),f.unshift(f[0][m]=f[0][m]||{})):f[0][p[1]]=p[2].replace(z," ").trim();return f[0]})(t);y[n]=x(o?{["@keyframes "+n]:l}:l,r?"":"."+n)}let i=r&&y.g?y.g:null;return r&&(y.g=y[n]),((l,d,p,m)=>{m?d.data=d.data.replace(m,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(y[n],e,s,i),n},q=(t,e,r)=>t.reduce((s,o,a)=>{let n=e[a];if(n&&n.call){let i=n(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":x(i,""):i===!1?"":i}return s+o+(n==null?"":n)},"");function D(t){let e=this||{},r=t.call?t(e.p):t;return Z(r.unshift?r.raw?q(r,[].slice.call(arguments,1),e.p):r.reduce((s,o)=>Object.assign(s,o&&o.call?o(e.p):o),{}):r,U(e.target),e.g,e.o,e.k)}let F,A,I;D.bind({g:1});let h=D.bind({k:1});function B(t,e,r,s){x.p=e,F=t,A=r,I=s}function b(t,e){let r=this||{};return function(){let s=arguments;function o(a,n){let i=Object.assign({},a),l=i.className||o.className;r.p=Object.assign({theme:A&&A()},i),r.o=/ *go\d+/.test(l),i.className=D.apply(r,s)+(l?" "+l:""),e&&(i.ref=n);let d=t;return t[0]&&(d=i.as||t,delete i.as),I&&d[0]&&I(i),F(d,i)}return e?e(o):o}}var G=t=>typeof t=="function",j=(t,e)=>G(t)?t(e):t,J=(()=>{let t=0;return()=>(++t).toString()})(),M=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Q=20,$=new Map,V=1e3,P=t=>{if($.has(t))return;let e=setTimeout(()=>{$.delete(t),v({type:4,toastId:t})},V);$.set(t,e)},W=t=>{let e=$.get(t);e&&clearTimeout(e)},N=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,Q)};case 1:return e.toast.id&&W(e.toast.id),{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:r}=e;return t.toasts.find(a=>a.id===r.id)?N(t,{type:1,toast:r}):N(t,{type:0,toast:r});case 3:let{toastId:s}=e;return s?P(s):t.toasts.forEach(a=>{P(a.id)}),{...t,toasts:t.toasts.map(a=>a.id===s||s===void 0?{...a,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},k=[],O={toasts:[],pausedAt:void 0},v=t=>{O=N(O,t),k.forEach(e=>{e(O)})},X={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},K=(t={})=>{let[e,r]=c.exports.useState(O);c.exports.useEffect(()=>(k.push(r),()=>{let o=k.indexOf(r);o>-1&&k.splice(o,1)}),[e]);let s=e.toasts.map(o=>{var a,n;return{...t,...t[o.type],...o,duration:o.duration||((a=t[o.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||X[o.type],style:{...t.style,...(n=t[o.type])==null?void 0:n.style,...o.style}}});return{...e,toasts:s}},tt=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||J()}),w=t=>(e,r)=>{let s=tt(e,t,r);return v({type:2,toast:s}),s.id},u=(t,e)=>w("blank")(t,e);u.error=w("error");u.success=w("success");u.loading=w("loading");u.custom=w("custom");u.dismiss=t=>{v({type:3,toastId:t})};u.remove=t=>v({type:4,toastId:t});u.promise=(t,e,r)=>{let s=u.loading(e.loading,{...r,...r==null?void 0:r.loading});return t.then(o=>(u.success(j(e.success,o),{id:s,...r,...r==null?void 0:r.success}),o)).catch(o=>{u.error(j(e.error,o),{id:s,...r,...r==null?void 0:r.error})}),t};var et=(t,e)=>{v({type:1,toast:{id:t,height:e}})},rt=()=>{v({type:5,time:Date.now()})},at=t=>{let{toasts:e,pausedAt:r}=K(t);c.exports.useEffect(()=>{if(r)return;let a=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(l<0){i.visible&&u.dismiss(i.id);return}return setTimeout(()=>u.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,r]);let s=c.exports.useCallback(()=>{r&&v({type:6,time:Date.now()})},[r]),o=c.exports.useCallback((a,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},p=e.filter(g=>(g.position||d)===(a.position||d)&&g.height),m=p.findIndex(g=>g.id===a.id),f=p.filter((g,C)=>C<m&&g.visible).length;return p.filter(g=>g.visible).slice(...i?[f+1]:[0,f]).reduce((g,C)=>g+(C.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:et,startPause:rt,endPause:s,calculateOffset:o}}},ot=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,st=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,it=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,nt=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ot} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${st} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${it} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,lt=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,dt=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${lt} 1s linear infinite;
`,ct=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,pt=h`
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
}`,ut=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ct} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${pt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ft=b("div")`
  position: absolute;
`,mt=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,gt=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,yt=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${gt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ht=({toast:t})=>{let{icon:e,type:r,iconTheme:s}=t;return e!==void 0?typeof e=="string"?c.exports.createElement(yt,null,e):e:r==="blank"?null:c.exports.createElement(mt,null,c.exports.createElement(dt,{...s}),r!=="loading"&&c.exports.createElement(ft,null,r==="error"?c.exports.createElement(nt,{...s}):c.exports.createElement(ut,{...s})))},xt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,bt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,vt="0%{opacity:0;} 100%{opacity:1;}",wt="0%{opacity:1;} 100%{opacity:0;}",Et=b("div")`
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
`,$t=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,kt=(t,e)=>{let r=t.includes("top")?1:-1,[s,o]=M()?[vt,wt]:[xt(r),bt(r)];return{animation:e?`${h(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ot=c.exports.memo(({toast:t,position:e,style:r,children:s})=>{let o=t.height?kt(t.position||e||"top-center",t.visible):{opacity:0},a=c.exports.createElement(ht,{toast:t}),n=c.exports.createElement($t,{...t.ariaProps},j(t.message,t));return c.exports.createElement(Et,{className:t.className,style:{...o,...r,...t.style}},typeof s=="function"?s({icon:a,message:n}):c.exports.createElement(c.exports.Fragment,null,a,n))});B(c.exports.createElement);var jt=({id:t,className:e,style:r,onHeightUpdate:s,children:o})=>{let a=c.exports.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;s(t,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return c.exports.createElement("div",{ref:a,className:e,style:r},o)},Dt=(t,e)=>{let r=t.includes("top"),s=r?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...s,...o}},Ct=D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,At=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:s,children:o,containerStyle:a,containerClassName:n})=>{let{toasts:i,handlers:l}=at(r);return c.exports.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...a},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let p=d.position||e,m=l.calculateOffset(d,{reverseOrder:t,gutter:s,defaultPosition:e}),f=Dt(p,m);return c.exports.createElement(jt,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ct:"",style:f},d.type==="custom"?j(d.message,d):o?o(d):c.exports.createElement(Ot,{toast:d,position:p}))}))},It=u;function zt(){const{flash:t}=S().props;return c.exports.useEffect(()=>{t.message&&(It(t.message,{duration:4e3,position:"top-center"}),H.Inertia.reload({only:["flash"]}))},[t]),_(At,{toastOptions:{style:{color:"#F5F5F5",backgroundColor:"#1D1D1D"}}})}export{zt as T};
