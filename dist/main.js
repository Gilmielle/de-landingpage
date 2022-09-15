!function(){"use strict";function e(){const e=document.getElementById("contact-form"),t=document.querySelector(".coop-modal__form"),o=document.querySelector(".coop-modal__success"),s=e.querySelector(".js-form-error");e.addEventListener("submit",(async function(c){var n;c.preventDefault(),(n=e).querySelectorAll(".validation-error-label").forEach((e=>e.remove())),n.querySelector(".js-form-error").textContent="";const[r,a]=function(e){const t={},o={};for(let s=0;s<e.elements.length;s++){const c=e.elements[s];c.name&&(t[c.name]=c.value.trim(),o[c.name]=c,c.classList.remove("validation-error"),c.classList.remove("validation-success"))}return[t,o]}(e),i=function(e){const t={errors:[],success:[]},{contactName:o,contactEmail:s}=e;return o?o.length<2?t.errors.push({name:"contactName",message:"Name should have at least 2 symbols"}):t.success.push("contactName"):t.errors.push({name:"contactName",message:"Name is required"}),s?/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(s)?t.success.push("contactEmail"):t.errors.push({name:"contactEmail",message:"Invalid e-mail"}):t.errors.push({name:"contactEmail",message:"E-mail is required"}),t}(r);if(function(e,t){e.success.length&&e.success.forEach((e=>{t[e].classList.add("validation-success")})),e.errors.length&&e.errors.forEach((e=>{!function(e,t){e.classList.add("validation-error");const o=e.parentNode,s=document.createElement("span");s.classList.add("validation-error-label"),s.textContent=t,o.append(s)}(t[e.name],e.message)}))}(i,a),0===i.errors.length)try{await async function(e){const t=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}),o=String(t.status).charAt(0);if("2"===o)return t;if("2"!==o){const e=new TypeError;throw e.errorMessages={name:"SomeError",message:"Some error happened"},e}throw new Error("Something went wrong...")}(r),t.classList.remove("coop-modal__form_active"),o.classList.add("coop-modal__success_active"),function(e){for(let t=0;t<e.elements.length;t++){const o=e.elements[t];o.value="",o.classList.remove("validation-error"),o.classList.remove("validation-success")}}(e)}catch(e){s.textContent=e.errorMessages.message}}))}document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".card__link").forEach((e=>{const[t]=e.getElementsByTagName("svg");e.addEventListener("mouseover",(()=>{return(e=t).classList.remove("card__link-img_inactive"),void e.classList.add("card__link-img_active");var e})),e.addEventListener("mouseleave",(()=>{return(e=t).classList.add("card__link-img_inactive"),void e.classList.remove("card__link-img_active");var e}))})),function(){const e=document.getElementById("coop-modal"),t=document.querySelector(".coop-modal__form"),o=document.querySelector(".coop-modal__success"),s=document.getElementById("coop_btn"),c=document.getElementById("close-modal-btn"),n="modal_active",r=document.querySelector(".modal__cell");function a(t){t.target===r&&(i(),e.classList.remove(n))}function i(){window.onscroll=()=>{}}s.addEventListener("click",(function(){e.classList.add(n),t.classList.add("coop-modal__form_active"),o.classList.remove("coop-modal__success_active"),function(){const e=window.pageYOffset||document.documentElement.scrollTop,t=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=()=>{window.scrollTo(t,e)}}(),document.addEventListener("click",a)})),c.addEventListener("click",(function(){e.classList.remove(n),i(),document.removeEventListener("click",a)}))}(),e()}))}();