/* empty css                      */import{a as g}from"./assets/vendor-BcYoTxAJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const f="https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",d=document.querySelector(".loader");async function w(){try{d.style.display="block";const e=await g.get(f);return d.style.display="none",e.data.items}catch(e){throw console.error("Error:",e),e}}async function q(e){try{d.style.display="block";const t=await g.get(`${f}/${e}`);return d.style.display="none",t.data}catch(t){throw console.error("Error:",t),t}}function v(e){return`<li class="campers-item">
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
          </li>`}const h=document.querySelector(".result"),C=document.querySelector(".load-more");function y(e,t){h.innerHTML=e.slice(0,t).map(v).join("");const i=JSON.parse(localStorage.getItem("likedCampers"))||{};document.querySelectorAll(".btn-like").forEach(r=>{const s=r.dataset.id;i[s]&&(r.classList.add("liked"),r.querySelector("img").src="./src/img/red-heart.svg")})}function E(e,t,i){h.insertAdjacentHTML("beforeend",e.slice(t,i).map(v).join(""))}function $(e,t,i){C.style.display=e*t>=i.length?"none":"block"}function b(e){var s,a;const t=((s=document.querySelector("#location"))==null?void 0:s.value.toLowerCase())||"",i=[...document.querySelectorAll(".container-filters.active-filter")].map(c=>c.id),r=((a=document.querySelector('input[name="vehicleType"]:checked'))==null?void 0:a.value)||"";return e.filter(c=>{const L=t?c.location.toLowerCase().includes(t):!0,S=i.every(p=>c[p]===!0||c[p]==="automatic"),k=r?c.form===r:!0;return L&&S&&k})}function M(e){return`
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
              ${e.gallery.map((t,i)=>`
                <li>
                  <img class='image-camp' src=${t.original} alt="image ${i+1}" />
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
    `}async function I(e){try{const t=await q(e);if(!t){console.error("Camper not found");return}const i=document.querySelector(".modal-content");if(!i){console.error("Modal content not found in DOM");return}i.innerHTML=M(t),document.querySelector(".modal").classList.add("open"),sessionStorage.setItem("openModal",e),F()}catch(t){console.error("Error fetching camper data:",t)}}function T(){document.querySelector(".modal").classList.remove("open"),sessionStorage.removeItem("openModal")}document.addEventListener("click",function(e){(e.target.classList.contains("close-modal")||e.target.classList.contains("modal"))&&T()});function A(e,t){const i={features:`<h1>Features Page</h1><p>Features of camper ID: ${t}</p>`,reviews:`<h1>Reviews Page</h1><p>Reviews for camper ID: ${t}</p>`},r=document.getElementById("outlet");r&&(r.innerHTML=i[e]||"<h1>Catalog</h1>"),document.querySelectorAll(".nav-link").forEach(a=>a.classList.remove("active"));const s=document.querySelector(`.nav-link[data-page="${e}"]`);s&&s.classList.add("active")}function F(){document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const i=t.target.dataset.id;A(t.target.dataset.page,i)})})}document.addEventListener("click",function(e){if(e.target.closest(".btn-like")){const t=e.target.closest(".btn-like"),i=t.dataset.id;t.classList.toggle("liked");const r=t.querySelector("img"),s=t.classList.contains("liked");r.src=s?"./img/red-heart.svg":"./img/heart.svg";const a=JSON.parse(localStorage.getItem("likedCampers"))||{};a[i]=s,localStorage.setItem("likedCampers",JSON.stringify(a))}});const O=document.querySelector(".result"),R=document.querySelector(".loader"),u=document.querySelector(".load-more"),N=document.querySelector("#filtersForm");R.style.display="none";u.style.display="none";let l=1;const n=4;let m=[],o=[];async function P(){try{m=await w(),o=m,y(o,n),l=1,$(l,n,o)}catch{O.innerHTML="<p>Not found</p>",u.classList.add("no-active")}}function B(){l++;const e=(l-1)*n,t=l*n;E(o,e,t),$(l,n,o)}N.addEventListener("submit",function(e){e.preventDefault(),o=b(m),y(o,n)});document.querySelectorAll(".container-filters").forEach(e=>{e.addEventListener("click",function(){e.classList.toggle("active-filter")})});document.addEventListener("click",function(e){const t=e.target.closest(".campers-link");if(!t)return;const i=t.dataset.id;I(i)});u.addEventListener("click",B);window.onload=P;
//# sourceMappingURL=catalog.js.map
