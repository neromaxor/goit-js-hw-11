import{i as c,S as d}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",p="41633959-4ab3a3c79df0d7e6ffc2251eb",v=document.querySelector(".form"),f=document.querySelector(".photo-container"),i=document.querySelector(".loader");let n;const h=()=>{const o=new URL(u);return o.searchParams.append("key",p),o.searchParams.append("image_type","photo"),o.searchParams.append("orientation","horizontal"),o.searchParams.append("safesearch","true"),o};v.addEventListener("submit",o=>{o.preventDefault();const t=o.currentTarget.elements[0].value;if(t.length<4)alert("Sorry, Yours length is not enough. Min 4 letters.");else{i.style.display="block";try{y(t.toLowerCase())}catch(s){console.error(s)}}});const m=(o="")=>{const t=h();return t.searchParams.append("q",o),fetch(t).then(s=>{if(s.ok)return s.json();throw new Error("Request is not okay")})},y=o=>{m(o).then(t=>{if(t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.style.display="none";return}const s=t.hits.reduce((a,e,r)=>a+`<div class="photo-card">
                        <div class="photo">
                            <a href="${e.largeImageURL}" data-lightbox="gallery-${r}">
                                <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="200" />
                            </a>
                        </div>
                        <div class="info-container">
                            <div class="label-value">
                                <div class="label-likes">Likes</div>
                                <div class="value">${e.likes}</div>
                            </div>
                            <div class="label-value">
                                <div class="label-likes">Views</div>
                                <div class="value">${e.views}</div>
                            </div>
                            <div class="label-value">
                                <div class="label-likes">Comments</div>
                                <div class="value">${e.comments}</div>
                            </div>
                            <div class="label-value">
                                <div class="label-likes">Downloads</div>
                                <div class="value">${e.downloads}</div>
                            </div>
                        </div>
                    </div>`,"");f.innerHTML=s,i.style.display="none",n=new d(".photo a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),n.refresh()}).catch(t=>{console.error(t)})};
//# sourceMappingURL=commonHelpers.js.map
