/* empty css                      */import{a as v}from"./assets/vendor-BcYoTxAJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const f="https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",d=document.querySelector(".loader");async function C(){try{d.style.display="block";const e=await v.get(f);return d.style.display="none",e.data.items}catch(e){throw console.error("Error:",e),e}}async function p(e){try{d.style.display="block";const t=await v.get(`${f}/${e}`);return d.style.display="none",t.data}catch(t){throw console.error("Error:",t),t}}function h(e){return`<li class="campers-item">
              <img class="img-campers" src="${e.gallery[0].original}" alt="${e.name}" />
              <div class="content-campers">
                  <div class="title-campers">
                      <h2>${e.name}</h2>
                      <div class="price-campers">
                          <p>&euro;${e.price},00</p>
                          <button type="button" class="btn-like" data-id="${e.id}">
                              <img class='img-like' src='heart.svg' alt="like" />
                          </button>                                                      
                      </div>
                  </div>
                  <div class="wrapper-campers">
                      <div class="reviews-campers">
                        <img src='star.svg' alt="star" />
                        <p>${e.rating}</p>
                        <p>(${e.reviews.length} Reviews)</p>
                      </div>
                      <div class="reviews-campers">
                        <img src='map.svg' alt="location" />
                        <p>${e.location}</p>
                      </div>
                  </div>                    
                  <p class="description-campers">${e.description}</p>
                  <ul class="characteristics-list">
                      <li class="characteristics-item">
                          <img src='diagram.svg' alt="diagram" />
                          <p class='characteristics'>${e.transmission}</p>
                      </li>
                      <li class='characteristics-item'>
                          <img src='fuel-pump.svg' alt="fuel" />
                          <p class='characteristics'>${e.engine}</p>
                      </li>                        
                      ${e.kitchen?`
                      <li class='characteristics-item'>
                          <img src='cup-hot.svg' alt="kitchen" />
                          <p class='characteristics'>Kitchen</p>
                      </li>`:""}
                      
                      ${e.AC?`
                      <li class='characteristics-item'>
                          <img src='wind.svg' alt="AC" />
                          <p class='characteristics'>AC</p>
                      </li>`:""}
                      
                      ${e.bathroom?`
                      <li class='characteristics-item'>
                          <img src='bi_droplet.svg' alt="droplet" />
                          <p class='characteristics'>Bathroom</p>
                      </li>`:""}
                      
                      ${e.radio?`
                      <li class='characteristics-item'>
                          <img src='ui-radios.svg' alt="radio" />
                          <p class='characteristics'>Radio</p>
                      </li>`:""}
                       ${e.TV?`
                      <li class='characteristics-item'>
                          <img src='tv.svg' alt="tv" />
                          <p class='characteristics'>TV</p>
                      </li>`:""}
                  </ul>                    
                  <a class="campers-link" data-id="${e.id}">Show more</a>                    
              </div>
          </li>`}const y=document.querySelector(".result"),q=document.querySelector(".load-more");function $(e,t){y.innerHTML=e.slice(0,t).map(h).join("");const s=JSON.parse(localStorage.getItem("likedCampers"))||{};document.querySelectorAll(".btn-like").forEach(c=>{const i=c.dataset.id;s[i]&&(c.classList.add("liked"),c.querySelector("img").src="red-heart.svg")})}function b(e,t,s){y.insertAdjacentHTML("beforeend",e.slice(t,s).map(h).join(""))}function w(e,t,s){q.style.display=e*t>=s.length?"none":"block"}function E(e){var i,a;const t=((i=document.querySelector("#location"))==null?void 0:i.value.toLowerCase())||"",s=[...document.querySelectorAll(".container-filters.active-filter")].map(r=>r.id),c=((a=document.querySelector('input[name="vehicleType"]:checked'))==null?void 0:a.value)||"";return e.filter(r=>{const L=t?r.location.toLowerCase().includes(t):!0,k=s.every(g=>r[g]===!0||r[g]==="automatic"),S=c?r.form===c:!0;return L&&k&&S})}async function T(e){const t=await p(e);return`<section class='features'>
            ${t?`<div>
                <div class='info-feature'>
                    <ul class="characteristics-list">
                      <li class="characteristics-item">
                          <img src='diagram.svg' alt="diagram" />
                          <p class='characteristics'>${t.transmission}</p>
                      </li>
                      <li class='characteristics-item'>
                          <img src='fuel-pump.svg' alt="fuel" />
                          <p class='characteristics'>${t.engine}</p>
                      </li>                        
                      ${t.kitchen?`
                      <li class='characteristics-item'>
                          <img src='cup-hot.svg' alt="kitchen" />
                          <p class='characteristics'>Kitchen</p>
                      </li>`:""}
                      
                      ${t.AC?`
                      <li class='characteristics-item'>
                          <img src='wind.svg' alt="AC" />
                          <p class='characteristics'>AC</p>
                      </li>`:""}
                      
                      ${t.bathroom?`
                      <li class='characteristics-item'>
                          <img src='bi_droplet.svg' alt="droplet" />
                          <p class='characteristics'>Bathroom</p>
                      </li>`:""}
                      
                      ${t.radio?`
                      <li class='characteristics-item'>
                          <img src='ui-radios.svg' alt="radio" />
                          <p class='characteristics'>Radio</p>
                      </li>`:""}
                       ${t.TV?`
                      <li class='characteristics-item'>
                          <img src='tv.svg' alt="tv" />
                          <p class='characteristics'>TV</p>
                      </li>`:""}
                  </ul>  
                    <h3 class='details-feature'>Vehicle details</h3>
                    <ul class='details-list'>
                        <li class='details-item'>
                            <p class='item-feature'>Form</p>
                            <p class='item-feature'>${t.form}</p>
                        </li>
                        <li class='details-item'>
                            <p class='item-feature'>Length</p>
                            <p class='item-feature'>${t.length}</p>
                        </li>
                        <li class='details-item'>
                            <p class='item-feature'>Width</p>
                            <p class='item-feature'>${t.width}</p>
                        </li>
                        <li class='details-item'>
                            <p class='item-feature'>Height</p>
                            <p class='item-feature'>${t.height}</p>
                        </li>
                        <li class='details-item'>
                            <p class='item-feature'>Tank</p>
                            <p class='item-feature'>${t.tank}</p>
                        </li>                        
                        <li class='details-item'>
                            <p class='item-feature'>Consumption</p>
                            <p class='item-feature'>${t.consumption}</p>
                        </li>
                    </ul>
                </div>
            </div>`:""}            
        </section>`}async function A(e){return await T(e.id),`
    <section class='camp'>
      <h2 class='title-camp'>${e.name}</h2>
      <div class='wrapper-camp'>
          <div class='reviews-camp'>
              <img src='star.svg' alt="star" />
              <p>${e.rating}</p>
              ${e.reviews?`<p>(${e.reviews.length} Reviews)</p>`:""}
          </div>
          <div class='location-camp'>
              <img src='map.svg' alt="map" />
              <p>${e.location}</p>
          </div>
      </div>
      <p class='price-camp'>&euro;${e.price},00</p>
      <div class='container-camp'>
          <ul class='gallery-camp'>
              ${e.gallery.map((t,s)=>`
                <li>
                  <img class='image-camp' src=${t.original} alt="image ${s+1}" />
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
         
      </div>
      <img class='close-modal' src="close.svg" alt="close" width='22px' />
    </section>
    `}async function M(e){const t=await p(e);return` <section class='section-reviews'>
            ${t?`<ul class='reviews-list'>
                ${t.reviews.map(s=>`<li key=${s.reviewer_name} class='reviews-item'>
                    <div class='info-reviews'>
                        <div class='ava-reviews'>${s.reviewer_name}</div>
                        <div class='rating-reviews'>
                            <p class='name-reviews'>${s.reviewer_name}</p>
                            <div class='rating-stars'>
                             ${Array.from({length:s.reviewer_rating},()=>`
                              <img src='star.svg' alt='star' />
                            `).join("")}
                            <div/>                                                
                        </div>
                    </div>  
                    <p class='comment-reviews'>${s.comment}</p>
                    </li>`).join("")}             
            </ul>`:""}
          
        </section>`}async function I(e){document.body.classList.add("no-scroll");try{const t=await p(e);if(!t){console.error("Camper not found");return}const s=document.querySelector(".modal-content");if(!s){console.error("Modal content not found in DOM");return}s.innerHTML=await A(t),document.querySelector(".modal").classList.add("open"),R()}catch(t){console.error("Error fetching camper data:",t)}}function O(){document.body.classList.remove("no-scroll"),document.querySelector(".modal").classList.remove("open")}document.addEventListener("click",function(e){(e.target.classList.contains("close-modal")||e.target.classList.contains("modal"))&&O()});async function N(e,t){const s={reviews:await M(t)},c=document.getElementById("outlet");c&&(c.innerHTML=s[e]||"<h1>Catalog</h1>"),document.querySelectorAll(".nav-link").forEach(a=>a.classList.remove("active"));const i=document.querySelector(`.nav-link[data-page="${e}"]`);i&&i.classList.add("active")}function R(){document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const s=t.target.dataset.id;N(t.target.dataset.page,s)})})}document.addEventListener("click",function(e){if(e.target.closest(".btn-like")){const t=e.target.closest(".btn-like"),s=t.dataset.id;t.classList.toggle("liked");const c=t.querySelector("img"),i=t.classList.contains("liked");c.src=i?"red-heart.svg":"heart.svg";const a=JSON.parse(localStorage.getItem("likedCampers"))||{};a[s]=i,localStorage.setItem("likedCampers",JSON.stringify(a))}});const B=document.querySelector(".result"),F=document.querySelector(".loader"),u=document.querySelector(".load-more"),H=document.querySelector("#filtersForm");F.style.display="none";u.style.display="none";let o=1;const n=4;let m=[],l=[];async function _(){try{m=await C(),l=m,$(l,n),o=1,w(o,n,l)}catch{B.innerHTML="<p>Not found</p>",u.classList.add("no-active")}}function j(){o++;const e=(o-1)*n,t=o*n;b(l,e,t),w(o,n,l)}H.addEventListener("submit",function(e){e.preventDefault(),l=E(m),$(l,n)});document.querySelectorAll(".container-filters").forEach(e=>{e.addEventListener("click",function(){e.classList.toggle("active-filter")})});document.addEventListener("click",function(e){const t=e.target.closest(".campers-link");if(!t)return;const s=t.dataset.id;I(s)});u.addEventListener("click",j);window.onload=_;
//# sourceMappingURL=catalog.js.map
