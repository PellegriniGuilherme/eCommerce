import{u as j,r as d,j as i,a as e,H as D,L as R,e as S}from"./app.eb0f93be.js";import{L as B}from"./Layout.0b12c16b.js";import{I as l,B as g}from"./Button.24614bc4.js";import{l as V,a as b,b as C,f as F,o as I,p as L}from"./index.esm.6c6f57be.js";import{M as p}from"./MaskInput.e4679544.js";import{I as A}from"./InputSelect.d99e4f70.js";import{u as y}from"./useTogglePasswordVisibility.43ea7c0c.js";import"./SideModal.231c4ce1.js";import"./transition.d9e460cc.js";function Y(){const{data:a,setData:c,post:N,processing:H,errors:r,reset:w,setError:u,clearErrors:z}=j({email:"",password:"",password_confirmation:"",name:"",cpf:"",gender:"",birth_date:"",cell:"",cep:"",endereco:"",bairro:"",cidade:"",numero:"",complemento:"",estado:"",referencia:"",pais:""}),{securityPassword:v,eye:k,handlePasswordVisibility:h}=y(),{securityPassword:E,eye:P,handlePasswordVisibility:x}=y(),[n,f]=d.exports.useState(),q=d.exports.useRef(null),_=async o=>{await S.get(`https://viacep.com.br/ws/${o}/json/`).then(s=>{s.data.erro?u("cep","N\xE3o foi poss\xEDvel localizar o seu CEP"):(c(M=>({...M,bairro:s.data.bairro,endereco:s.data.logradouro,estado:s.data.uf,cidade:s.data.localidade,pais:"Brasil"})),f(!0))}).catch(s=>{u("cep","N\xE3o foi poss\xEDvel localizar o seu CEP")})};d.exports.useEffect(()=>{a.cep.length===8?_(a.cep):(f(!1),z("cep"))},[a.cep]),d.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=o=>{c(o.target.name,o.target.type==="checkbox"?o.target.checked:o.target.value)},m=o=>{c(o.target.name,o.target.type==="checkbox"?o.target.checked:o.target.value.replace(/[^0-9]/g,""))};return i(B,{children:[e(D,{title:"Registre-se"}),i("form",{onSubmit:o=>{o.preventDefault(),N(route("register"))},className:"p-5 flex flex-col",children:[e("div",{className:"flex flex-col md:flex-row items-center justify-center mb-6",children:e("h1",{className:"text-2xl font-bold text-zinc-800",children:"Registre-se"})}),i("div",{className:"p-2 md:px-8 md:py-4 flex flex-row justify-start items-center border-t-2 border-zinc-600 rounded-t-md bg-zinc-50 mt-3",children:[e(V,{className:"flex text-2xl font-bold text-zinc-800 mr-3",size:24}),e("h1",{className:"text-xl font-bold text-zinc-800 mr-5",children:"Dados para acesso"})]}),i("section",{className:"p-2 md:p-8 md:py-4 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 md:grid-cols-3 md:gap-6 rounded-b-md bg-zinc-50",children:[e(l,{type:"email",label:"E-mail",name:"email",value:a.email,autoComplete:"email",handleChange:t,error:r.email,required:!0}),e(l,{type:v,label:"Senha",name:"password",value:a.password,autoComplete:"password",handleChange:t,error:r.password,required:!0,iconRight:k?e(b,{className:"text-zinc-800 cursor-pointer",size:20,onClick:h}):e(C,{className:"text-zinc-800 cursor-pointer",size:20,onClick:h})}),e(l,{type:E,label:"Confirma Senha",name:"password_confirmation",value:a.password_confirmation,autoComplete:"password_confirmation",handleChange:t,error:r.password_confirmation,required:!0,iconRight:P?e(b,{className:"text-zinc-800 cursor-pointer",size:20,onClick:x}):e(C,{className:"text-zinc-800 cursor-pointer",size:20,onClick:x})})]}),i("div",{className:"p-2 md:px-8 md:py-4 flex flex-row justify-start items-center border-t-2 border-zinc-600 rounded-t-md bg-zinc-50 mt-3",children:[e(F,{className:"flex text-2xl font-bold text-zinc-800 mr-3",size:24}),e("h1",{className:"text-xl font-bold text-zinc-800 mr-5",children:"Dados Pessoais"})]}),i("section",{className:"p-2 md:p-8 md:py-4 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 md:grid-cols-3 md:gap-6 rounded-b-md bg-zinc-50",children:[e(l,{type:"text",label:"Nome",name:"name",value:a.name,autoComplete:"name",handleChange:t,error:r.name,required:!0}),e(p,{type:"text",label:"CPF",name:"cpf",mask:"999.999.999-99",value:a.cpf,autoComplete:"cpf",handleChange:m,error:r.cpf,required:!0}),i(A,{label:"G\xEAnero",name:"gender",value:a.gender,handleChange:t,error:r.gender,children:[e("option",{value:"",children:"- Selecione -"}),e("option",{value:"M",children:"Masculino"}),e("option",{value:"F",children:"Feminino"}),e("option",{value:"NB",children:"N\xE3o Bin\xE1rio"}),e("option",{value:"O",children:"Outros"})]}),e(l,{type:"date",label:"Data de nascimento",name:"birth_date",value:a.birth_date,autoComplete:"birth_date",handleChange:t,error:r.birth_date}),e(p,{type:"text",label:"Celular/Telefone",mask:"(99)9999-99999",name:"cell",value:a.cell,autoComplete:"cell",handleChange:m,error:r.cell,required:!0})]}),i("div",{className:"p-2 md:px-8 md:py-4 flex flex-row justify-start items-center border-t-2 border-zinc-600 rounded-t-md bg-zinc-50 mt-3",children:[e(I,{className:"flex text-2xl font-bold text-zinc-800 mr-3",size:24}),e("h1",{className:"text-xl font-bold text-zinc-800 mr-5",children:"Endere\xE7o"})]}),i("section",{className:"p-2 md:p-8 md:py-4 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 md:grid-cols-3 md:gap-6 rounded-b-md bg-zinc-50",children:[e(p,{type:"text",label:"CEP",name:"cep",mask:"99999-999",value:a.cep,autoComplete:"cep",handleChange:m,error:r.cep,iconRight:e("a",{href:"https://buscacepinter.correios.com.br/app/endereco/index.php",target:"_blank",alt:"N\xE3o sei meu CEP",children:e(L,{size:24,className:"text-zinc-800"})}),required:!0}),e(l,{type:"text",label:"Endere\xE7o",name:"endereco",mask:"",value:a.endereco,autoComplete:"endereco",handleChange:t,error:r.endereco,disabled:n,required:!0}),e(l,{ref:q,type:"text",label:"N\xFAmero",name:"numero",mask:"",value:a.numero,autoComplete:"estado",handleChange:t,error:r.numero,required:!0}),e(l,{type:"text",label:"Complemento",name:"complemento",mask:"",value:a.complemento,autoComplete:"complemento",handleChange:t,error:r.complemento}),e(l,{type:"text",label:"Refer\xEAncia",name:"referencia",mask:"",value:a.referencia,autoComplete:"referencia",handleChange:t,error:r.referencia}),e(l,{type:"text",label:"Bairro",name:"bairro",mask:"",value:a.bairro,autoComplete:"bairro",handleChange:t,error:r.bairro,disabled:n,required:!0}),e(l,{type:"text",label:"Cidade",name:"cidade",mask:"",value:a.cidade,autoComplete:"cidade",handleChange:t,error:r.cidade,disabled:n,required:!0}),e(l,{type:"text",label:"Estado",name:"estado",mask:"",value:a.estado,autoComplete:"estado",handleChange:t,error:r.estado,disabled:n,required:!0}),e(l,{type:"text",label:"Pais",name:"pais",mask:"",value:a.pais,autoComplete:"pais",handleChange:t,error:r.pais,disabled:n,required:!0})]}),i("div",{className:"p-2 md:p-8 md:py-4 flex flex-col md:flex-row items-center justify-end gap-2",children:[e(R,{href:route("login"),className:"w-full md:w-1/4",children:e(g,{type:"button",className:"w-full",children:"J\xE1 tenho uma conta"})}),e(g,{className:"w-full md:w-1/4",children:"Registrar"})]})]})]})}export{Y as default};