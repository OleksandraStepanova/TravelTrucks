/* empty css                      */import{a as f}from"./assets/vendor-BcYoTxAJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const v="https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",d=document.querySelector(".loader");async function C(){try{d.style.display="block";const e=await f.get(v);return d.style.display="none",e.data.items}catch(e){throw console.error("Error:",e),e}}async function q(e){try{d.style.display="block";const t=await f.get(`${v}/${e}`);return d.style.display="none",t.data}catch(t){throw console.error("Error:",t),t}}function h(e){return`<li class="campers-item">
              <img class="img-campers" src="${e.gallery[0].original}" alt="${e.name}" />
              <div class="content-campers">
                  <div class="title-campers">
                      <h2>${e.name}</h2>
                      <div class="price-campers">
                          <p>&euro;${e.price},00</p>
                          <button type="button" class="btn-like" data-id="${e.id}">
                              <img class='img-like' src="/img/heart.svg" alt="like" />
                          </button>                                                      
                      </div>
                  </div>
                  <div class="wrapper-campers">
                      <div class="reviews-campers">
                        <img src='./img/star.svg' alt="star" />
                        <p>${e.rating}</p>
                        <p>(${e.reviews.length} Reviews)</p>
                      </div>
                      <div class="reviews-campers">
                        <img src='./img/map.svg' alt="location" />
                        <p>${e.location}</p>
                      </div>
                  </div>                    
                  <p class="description-campers">${e.description}</p>
                  <ul class="characteristics-list">
                      <li class="characteristics-item">
                          <img src='./img/diagram.svg' alt="diagram" />
                          <p class='characteristics'>${e.transmission}</p>
                      </li>
                      <li class='characteristics-item'>
                          <img src='./img/fuel-pump.svg' alt="fuel" />
                          <p class='characteristics'>${e.engine}</p>
                      </li>                        
                      ${e.kitchen?`
                      <li class='characteristics-item'>
                          <img src='./img/cup-hot.svg' alt="kitchen" />
                          <p class='characteristics'>Kitchen</p>
                      </li>`:""}
                      
                      ${e.AC?`
                      <li class='characteristics-item'>
                          <img src='./img/wind.svg' alt="AC" />
                          <p class='characteristics'>AC</p>
                      </li>`:""}
                      
                      ${e.bathroom?`
                      <li class='characteristics-item'>
                          <img src='./img/bi_droplet.svg' alt="droplet" />
                          <p class='characteristics'>Bathroom</p>
                      </li>`:""}
                      
                      ${e.radio?`
                      <li class='characteristics-item'>
                          <img src='./img/ui-radios.svg' alt="radio" />
                          <p class='characteristics'>Radio</p>
                      </li>`:""}
                       ${e.TV?`
                      <li class='characteristics-item'>
                          <img src='./img/tv.svg' alt="tv" />
                          <p class='characteristics'>TV</p>
                      </li>`:""}
                  </ul>                    
                  <a class="campers-link" data-id="${e.id}">Show more</a>                    
              </div>
          </li>`}const y=document.querySelector(".result"),E=document.querySelector(".load-more");function L(e,t){y.innerHTML=e.slice(0,t).map(h).join("");const a=JSON.parse(localStorage.getItem("likedCampers"))||{};document.querySelectorAll(".btn-like").forEach(r=>{const s=r.dataset.id;a[s]&&(r.classList.add("liked"),r.querySelector("img").src="./src/img/red-heart.svg")})}function M(e,t,a){y.insertAdjacentHTML("beforeend",e.slice(t,a).map(h).join(""))}function $(e,t,a){E.style.display=e*t>=a.length?"none":"block"}function I(e){var s,i;const t=((s=document.querySelector("#location"))==null?void 0:s.value.toLowerCase())||"",a=[...document.querySelectorAll(".container-filters.active-filter")].map(c=>c.id),r=((i=document.querySelector('input[name="vehicleType"]:checked'))==null?void 0:i.value)||"";return e.filter(c=>{const S=t?c.location.toLowerCase().includes(t):!0,w=a.every(g=>c[g]===!0||c[g]==="automatic"),k=r?c.form===r:!0;return S&&w&&k})}function b(e){return`
    <section class='camp'>
      <h2 class='title-camp'>${e.name}</h2>
      <div class='wrapper-camp'>
          <div class='reviews-camp'>
              <img src='../img/star.svg' alt="star" />
              <p>${e.rating}</p>
              ${e.reviews?`<p>(${e.reviews.length} Reviews)</p>`:""}
          </div>
          <div class='location-camp'>
              <img src='../img/map.svg' alt="map" />
              <p>${e.location}</p>
          </div>
      </div>
      <p class='price-camp'>&euro;${e.price},00</p>
      <div class='container-camp'>
          <ul class='gallery-camp'>
              ${e.gallery.map((t,a)=>`
                <li>
                  <img class='image-camp' src=${t.original} alt="image ${a+1}" />
                </li>
              `).join("")}
          </ul>
      </div>
      <p class='description-camp'>${e.description}</p>
      <nav class="navList">
        <a href="#" class="nav-link active" data-page="features" data-id="${e.id}">Features</a>
        <a href="#" class="nav-link" data-page="reviews" data-id="${e.id}">Reviews</a>
      </nav>
      <div id="outlet">
          <h1>Features Page</h1><p>Features of camper ID: ${e.id}</p>
      </div>
      <img class='close-modal' src="../img/close.svg" alt="close" width='22px' />
    </section>
    `}async function m(e){try{const t=await q(e);if(!t){console.error("Camper not found");return}const a=document.querySelector(".modal-content");if(!a){console.error("Modal content not found in DOM");return}a.innerHTML=b(t),document.querySelector(".modal").classList.add("open"),sessionStorage.setItem("openModal",e),O()}catch(t){console.error("Error fetching camper data:",t)}}function T(){document.querySelector(".modal").classList.remove("open"),sessionStorage.removeItem("openModal")}document.addEventListener("click",function(e){(e.target.classList.contains("close-modal")||e.target.classList.contains("modal"))&&T()});function A(e,t){const a={features:`<h1>Features Page</h1><p>Features of camper ID: ${t}</p>`,reviews:`<h1>Reviews Page</h1><p>Reviews for camper ID: ${t}</p>`},r=document.getElementById("outlet");r&&(r.innerHTML=a[e]||"<h1>Catalog</h1>"),document.querySelectorAll(".nav-link").forEach(i=>i.classList.remove("active"));const s=document.querySelector(`.nav-link[data-page="${e}"]`);s&&s.classList.add("active")}function O(){document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const a=t.target.dataset.id;A(t.target.dataset.page,a)})})}document.addEventListener("click",function(e){if(e.target.closest(".btn-like")){const t=e.target.closest(".btn-like"),a=t.dataset.id;t.classList.toggle("liked");const r=t.querySelector("img"),s=t.classList.contains("liked");r.src=s?"./img/red-heart.svg":"./img/heart.svg";const i=JSON.parse(localStorage.getItem("likedCampers"))||{};i[a]=s,localStorage.setItem("likedCampers",JSON.stringify(i))}});const P=document.querySelector(".result"),F=document.querySelector(".loader"),p=document.querySelector(".load-more"),R=document.querySelector("#filtersForm");F.style.display="none";p.style.display="none";let n=1;const l=4;let u=[],o=[];async function N(){try{u=await C(),o=u,L(o,l),n=1,$(n,l,o)}catch{P.innerHTML="<p>Not found</p>",p.classList.add("no-active")}}function B(){n++;const e=(n-1)*l,t=n*l;M(o,e,t),$(n,l,o)}R.addEventListener("submit",function(e){e.preventDefault(),o=I(u),L(o,l)});document.querySelectorAll(".container-filters").forEach(e=>{e.addEventListener("click",function(){e.classList.toggle("active-filter")})});document.addEventListener("click",function(e){const t=e.target.closest(".campers-link");if(!t)return;const a=t.dataset.id;m(a)});document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname.split("/").filter(Boolean),a=e[0]==="catalog.html"&&e[1]?e[1]:null,r=sessionStorage.getItem("openModal");a?m(a):r&&m(r)});p.addEventListener("click",B);window.onload=N;
//# sourceMappingURL=catalog.js.map
