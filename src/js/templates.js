export function camperTemplate(camper) {
  return `<li class="campers-item">
              <img class="img-campers" src="${
                camper.gallery[0].original
              }" alt="${camper.name}" />
              <div class="content-campers">
                  <div class="title-campers">
                      <h2>${camper.name}</h2>
                      <div class="price-campers">
                          <p>&euro;${camper.price},00</p>
                          <button type="button" class="btn-like" data-id="${
                            camper.id
                          }">
                              <img class='img-like' src="/img/heart.svg" alt="like" />
                          </button>                                                      
                      </div>
                  </div>
                  <div class="wrapper-campers">
                      <div class="reviews-campers">
                        <img src='./img/star.svg' alt="star" />
                        <p>${camper.rating}</p>
                        <p>(${camper.reviews.length} Reviews)</p>
                      </div>
                      <div class="reviews-campers">
                        <img src='./img/map.svg' alt="location" />
                        <p>${camper.location}</p>
                      </div>
                  </div>                    
                  <p class="description-campers">${camper.description}</p>
                  <ul class="characteristics-list">
                      <li class="characteristics-item">
                          <img src='./img/diagram.svg' alt="diagram" />
                          <p class='characteristics'>${camper.transmission}</p>
                      </li>
                      <li class='characteristics-item'>
                          <img src='./img/fuel-pump.svg' alt="fuel" />
                          <p class='characteristics'>${camper.engine}</p>
                      </li>                        
                      ${
                        camper.kitchen
                          ? `
                      <li class='characteristics-item'>
                          <img src='./img/cup-hot.svg' alt="kitchen" />
                          <p class='characteristics'>Kitchen</p>
                      </li>`
                          : ''
                      }
                      
                      ${
                        camper.AC
                          ? `
                      <li class='characteristics-item'>
                          <img src='./img/wind.svg' alt="AC" />
                          <p class='characteristics'>AC</p>
                      </li>`
                          : ''
                      }
                      
                      ${
                        camper.bathroom
                          ? `
                      <li class='characteristics-item'>
                          <img src='./img/bi_droplet.svg' alt="droplet" />
                          <p class='characteristics'>Bathroom</p>
                      </li>`
                          : ''
                      }
                      
                      ${
                        camper.radio
                          ? `
                      <li class='characteristics-item'>
                          <img src='./img/ui-radios.svg' alt="radio" />
                          <p class='characteristics'>Radio</p>
                      </li>`
                          : ''
                      }
                       ${
                         camper.TV
                           ? `
                      <li class='characteristics-item'>
                          <img src='./img/tv.svg' alt="tv" />
                          <p class='characteristics'>TV</p>
                      </li>`
                           : ''
                       }
                  </ul>                    
                  <a class="campers-link" data-id="${
                    camper.id
                  }">Show more</a>                    
              </div>
          </li>`;
}
