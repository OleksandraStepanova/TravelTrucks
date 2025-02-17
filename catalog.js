/* empty css                      */import{a as y,i as d,f as T}from"./assets/vendor-FRXaYvOr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();const $="https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";document.querySelector(".loader");async function E(){try{return(await y.get($)).data.items}catch(e){throw e}}async function v(e){try{return(await y.get(`${$}/${e}`)).data}catch(t){throw t}}function w(e){return`<li class="campers-item">
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
          </li>`}const k=document.querySelector(".result"),A=document.querySelector(".load-more");function L(e,t){k.innerHTML=e.slice(0,t).map(w).join("");const i=JSON.parse(localStorage.getItem("likedCampers"))||{};document.querySelectorAll(".btn-like").forEach(a=>{const s=a.dataset.id;i[s]&&(a.classList.add("liked"),a.querySelector("img").src="red-heart.svg")})}function M(e,t,i){k.insertAdjacentHTML("beforeend",e.slice(t,i).map(w).join(""))}function b(e,t,i){A.style.display=e*t>=i.length?"none":"block"}function F(e){var s,c;const t=((s=document.querySelector("#location"))==null?void 0:s.value.toLowerCase())||"",i=[...document.querySelectorAll(".container-filters.active-filter")].map(r=>r.id),a=((c=document.querySelector('input[name="vehicleType"]:checked'))==null?void 0:c.value)||"";return e.filter(r=>{const m=t?r.location.toLowerCase().includes(t):!0,p=i.every(h=>r[h]===!0||r[h]==="automatic"),C=a?r.form===a:!0;return m&&p&&C})}function S(){return`
   <div class="form-container">
        <h2 class='title-form'>Book your campervan now</h2>
        <p class='text-form'>Stay connected! We are always ready to help you.</p>
        <form id="bookingForm" class="form-bookings">
            <div>    
                <input class='input-bookings' type="text" id="name" name="name" required minlength="3" maxlength="50" placeholder="Name*" />
            </div>
            <div>    
                <input class='input-bookings' type="email" id="email" name="email" required placeholder="Email*" />
             </div>
             <div>
                <input class='input-bookings' type="text" id="datepicker" placeholder="Date*" name="bookingDate" required/>
            </div>
            <div>    
                <textarea class='comment-bookings' id="comment" name="comment" maxlength="250" placeholder="Comment"></textarea>
            </div>
            <button class='button-bookings' type="submit">Send</button>
        </form>
        
      <div id="toast"></div>     
   </div>`}async function q(e){const t=await v(e),i=S();return`<section class='features'>
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
            
        ${i}
        </section>`}async function R(e){const t=await q(e.id);return`
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
              ${e.gallery.map((i,a)=>`
                <li>
                  <img class='image-camp' src=${i.original} alt="image ${a+1}" />
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
          ${t}
      </div>
      <img class='close-modal' src="close.svg" alt="close" width='22px' />
    </section>
    `}async function x(e){const t=await v(e),i=S();return` <section class='section-reviews'>
            ${t?`<ul class='reviews-list'>
                ${t.reviews.map(a=>`<li key=${a.reviewer_name} class='reviews-item'>
                    <div class='info-reviews'>
                        <div class='ava-reviews'>${a.reviewer_name}</div>
                        <div class='rating-reviews'>
                            <p class='name-reviews'>${a.reviewer_name}</p>
                            <div class='rating-stars'>
                             ${Array.from({length:a.reviewer_rating},()=>`
                              <img src='star.svg' alt='star' />
                            `).join("")}
                            <div/>                                                
                        </div>
                    </div>  
                    <p class='comment-reviews'>${a.comment}</p>
                    </li>`).join("")}             
            </ul>`:""}
          ${i}
        </section>`}async function I(e){document.body.classList.add("no-scroll");try{const t=await v(e);if(!t){d.show({message:"Camper not found",timeout:5e3,position:"topRight",color:"red"});return}const i=document.querySelector(".modal-content");if(!i){d.show({message:"Error loading modal content. Please try again later.",timeout:5e3,position:"topRight",color:"red"});return}i.innerHTML=await R(t),document.querySelector(".modal").classList.add("open"),O(),setTimeout(()=>{const s=document.querySelector("#datepicker");s&&T(s,{dateFormat:"Y-m-d"})},100);const a=document.querySelector("#bookingForm");a.addEventListener("submit",function(s){s.preventDefault(),d.show({message:"Success! We have received your booking request. We will contact you shortly.",timeout:5e3,position:"topRight",color:"green"});const c=new FormData(a),r=c.get("name"),m=c.get("email"),p=c.get("bookingDate");console.log("Booking request:",{name:r,email:m,date:p,camperId:e}),a.reset()})}catch{d.show({message:"Error fetching camper data. Please try again later.",timeout:5e3,position:"topRight",color:"red"})}}function B(){document.body.classList.remove("no-scroll"),document.querySelector(".modal").classList.remove("open")}document.addEventListener("click",function(e){(e.target.classList.contains("close-modal")||e.target.classList.contains("modal"))&&B()});async function N(e,t){const i={features:await q(t),reviews:await x(t)},a=document.getElementById("outlet");a&&(a.innerHTML=i[e]||"<p>Page not found</p>"),document.querySelectorAll(".nav-link").forEach(c=>c.classList.remove("active"));const s=document.querySelector(`.nav-link[data-page="${e}"]`);s&&s.classList.add("active")}function O(){document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const i=t.target.dataset.id;N(t.target.dataset.page,i)})})}document.addEventListener("click",function(e){if(e.target.closest(".btn-like")){const t=e.target.closest(".btn-like"),i=t.dataset.id;t.classList.toggle("liked");const a=t.querySelector("img"),s=t.classList.contains("liked");a.src=s?"red-heart.svg":"heart.svg";const c=JSON.parse(localStorage.getItem("likedCampers"))||{};c[i]=s,localStorage.setItem("likedCampers",JSON.stringify(c))}});const D=document.querySelector(".result"),u=document.querySelector(".loader"),f=document.querySelector(".load-more"),P=document.querySelector("#filtersForm");u.style.display="none";f.style.display="none";let l=1;const n=4;let g=[],o=[];async function H(){try{u.style.display="block";const e=await E();u.style.display="none",g=e,o=g,L(o,n),l=1,b(l,n,o)}catch{D.innerHTML="<p>Not found</p>",f.classList.add("no-active")}}function _(){l++;const e=(l-1)*n,t=l*n;M(o,e,t),b(l,n,o)}P.addEventListener("submit",function(e){e.preventDefault(),o=F(g),L(o,n)});document.querySelectorAll(".container-filters").forEach(e=>{e.addEventListener("click",function(){e.classList.toggle("active-filter")})});document.addEventListener("click",function(e){const t=e.target.closest(".campers-link");if(!t)return;const i=t.dataset.id;I(i)});f.addEventListener("click",_);window.onload=H;
//# sourceMappingURL=catalog.js.map
