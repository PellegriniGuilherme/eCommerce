import{r as t,c as m,a as e,j as y}from"./app.406e0da2.js";import{W as o}from"./transition.4f6e6c62.js";function f({children:n,show:a=!1,closeable:l=!0,onClose:i=()=>{}}){t.exports.useEffect(()=>{document.body.style.overflow=a?"hidden":null},[a]);const s=()=>{l&&i()},r=d=>{d.key==="Escape"&&props.show&&s()};t.exports.useEffect(()=>(document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r),document.body.style.overflow=null}),[]);const c=document.getElementById("modal-root");return m.createPortal(e(o,{show:a,leave:"duration-200",children:y("div",{className:"fixed inset-0 overflow-y-auto md:px-4 md:py-6 sm:px-0 z-50 flex justify-center items-center",children:[e(o.Child,{as:t.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 transform transition-all",onClick:s,children:e("div",{className:"absolute inset-0 bg-gray-500 opacity-75 flex"})})}),e(o.Child,{as:t.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:n})]})}),c)}export{f as M};