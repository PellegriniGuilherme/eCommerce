import{a as r,j as n,L as s}from"./app.235c1f47.js";function t({way:a}){return r("div",{className:"w-full my-3 text-sm text-zinc-600 flex flex-row flex-wrap gap-x-2",children:a.length>0?a.map((l,e)=>l.active?n("span",{className:`flex flex-row gap-x-2 cursor-default ${l.active?"font-bold":"font-normal"}`,children:[r("p",{children:l.name}),e===a.length-1?null:r("p",{className:"font-normal cursor-default",children:">"})]},`breadCrumbs_${e}`):n("span",{className:`flex flex-row gap-x-2 ${l.active?"font-bold":"font-normal"}`,children:[r(s,{href:route(l.route),children:l.name}),e===a.length-1?null:r("p",{className:"font-normal cursor-default",children:">"})]},`breadCrumbs_${e}`)):null})}export{t as B};