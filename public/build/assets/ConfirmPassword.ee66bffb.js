import{u as l,r as u,j as a,a as s,H as c}from"./app.246c3335.js";import{G as p}from"./GuestLayout.8d5618ee.js";import{T as f,I as w}from"./TextInput.a880399d.js";import{I as h}from"./InputLabel.89f83369.js";import{P as g}from"./PrimaryButton.b0b8a7d3.js";import"./ApplicationLogo.6c4ac8d7.js";function C(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=l({password:""});u.exports.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(p,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(f,{type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(w,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{C as default};
