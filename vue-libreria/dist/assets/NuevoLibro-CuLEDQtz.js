import{_ as v,r as n,c as g,a as e,w as d,v as s,b,d as f,o as m}from"./index-CvG3_Bbu.js";const c={setup(){const t=n(""),o=n(""),a=n(""),r=n(""),i=n("");return{title:t,author:o,description:a,genre:r,cover:i,addBook:async()=>{if(!t.value||!o.value||!a.value||!r.value||!i.value){alert("Por favor, completa todos los campos.");return}const l={title:t.value,author:o.value,description:a.value,genre:r.value,cover:i.value,read:!1};try{await f.post("http://localhost:3000/libros",l),alert("Libro agregado exitosamente."),t.value="",o.value="",a.value="",r.value="",i.value=""}catch(p){console.error("Error al agregar el libro:",p),alert("Hubo un error al agregar el libro.")}}}}},x={class:"form-group"},B={class:"form-group"},k={class:"form-group"},y={class:"form-group"},U={class:"form-group"};function L(t,o,a,r,i,u){return m(),g("div",null,[o[12]||(o[12]=e("h1",null,"Nuevo Libro",-1)),e("form",{onSubmit:o[5]||(o[5]=b((...l)=>r.addBook&&r.addBook(...l),["prevent"])),class:"formulario"},[e("div",x,[o[6]||(o[6]=e("label",{for:"title"},"Título:",-1)),d(e("input",{id:"title","onUpdate:modelValue":o[0]||(o[0]=l=>r.title=l),type:"text",placeholder:"Ingresa el título del libro",required:""},null,512),[[s,r.title]])]),e("div",B,[o[7]||(o[7]=e("label",{for:"author"},"Autor:",-1)),d(e("input",{id:"author","onUpdate:modelValue":o[1]||(o[1]=l=>r.author=l),type:"text",placeholder:"Ingresa el autor del libro",required:""},null,512),[[s,r.author]])]),e("div",k,[o[8]||(o[8]=e("label",{for:"description"},"Descripción:",-1)),d(e("textarea",{id:"description","onUpdate:modelValue":o[2]||(o[2]=l=>r.description=l),placeholder:"Ingresa una descripción del libro",required:""},null,512),[[s,r.description]])]),e("div",y,[o[9]||(o[9]=e("label",{for:"genre"},"Género:",-1)),d(e("input",{id:"genre","onUpdate:modelValue":o[3]||(o[3]=l=>r.genre=l),type:"text",placeholder:"Ingresa el género del libro",required:""},null,512),[[s,r.genre]])]),e("div",U,[o[10]||(o[10]=e("label",{for:"cover"},"URL de la portada:",-1)),d(e("input",{id:"cover","onUpdate:modelValue":o[4]||(o[4]=l=>r.cover=l),type:"url",placeholder:"Ingresa la URL de la portada del libro",required:""},null,512),[[s,r.cover]])]),o[11]||(o[11]=e("button",{type:"submit",class:"btn"},"Agregar Libro",-1))],32)])}const q=v(c,[["render",L]]);export{q as default};
