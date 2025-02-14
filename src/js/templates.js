export function camperTemplate(camper) {
    return `<li class="campers-item">
              <img class="img-campers" src="${camper.gallery[0].original}" alt="${camper.name}" />
              <div>
                  <div class="title-campers">
                      <h2>${camper.name}</h2>
                      <div class="price-campers">
                          <p>&euro;${camper.price},00</p>                                                      
                      </div>
                  </div>
                  <div class="wrapper-campers">
                      <div class="reviews-campers">
                          <p>${camper.rating}</p>
                          <p>(${camper.reviews.length} Reviews)</p>
                      </div>
                      <div>
                          <p>${camper.location}</p>
                      </div>
                  </div>                    
                  <p class="description-campers">${camper.description}</p>                    
                  <a class="campers-link">Show more</a>
              </div>
          </li>`;
  }