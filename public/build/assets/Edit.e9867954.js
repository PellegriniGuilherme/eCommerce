import{j as i,a,H as t}from"./app.c0b94671.js";import{L as m}from"./Layout.a4576e12.js";import{B as e,P as s}from"./ProfileNav.8fa42845.js";import p from"./Address.f2c09f10.js";import d from"./PersonalData.c9c9bdd2.js";import l from"./AccessData.a86f5f26.js";import{S as n}from"./Status.32c57010.js";import"./SideModal.598194d4.js";import"./transition.0439193d.js";import"./index.esm.e6c3ef1a.js";import"./Button.24a8246c.js";import"./useTogglePasswordVisibility.caebeb6f.js";import"./MaskInput.68f629e6.js";import"./InputSelect.2a1087c3.js";function D({user:r,status:o}){return i(m,{children:[a(t,{title:"Minha Conta"}),i("div",{className:"p-4 md:p-8 flex flex-col gap-y-5",children:[a(e,{way:[{name:"Pagina Principal",route:"home",active:!1},{name:"Minha Conta",route:"profile.edit",active:!0}]}),a(s,{}),a(n,{status:o}),i("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[a(l,{user:r}),a(d,{user:r}),a(p,{user:r})]})]})]})}export{D as default};