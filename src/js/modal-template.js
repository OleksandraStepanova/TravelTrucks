export function modalTemplate(camper) {
  return `
    <section class='camp'>
      <h2 class='title-camp'>${camper.name}</h2>
      <div class='wrapper-camp'>
          <div class='reviews-camp'>
              <img src='./img/star.svg' alt="star" />
              <p>${camper.rating}</p>
              ${
                camper.reviews
                  ? `<p>(${camper.reviews.length} Reviews)</p>`
                  : ''
              }
          </div>
          <div class='location-camp'>
              <img src='./img/map.svg' alt="map" />
              <p>${camper.location}</p>
          </div>
      </div>
      <p class='price-camp'>&euro;${camper.price},00</p>
      <div class='container-camp'>
          <ul class='gallery-camp'>
              ${camper.gallery
                .map(
                  (img, index) => `
                <li>
                  <img class='image-camp' src=${img.original} alt="image ${
                    index + 1
                  }" />
                </li>
              `
                )
                .join('')}
          </ul>
      </div>
      <p class='description-camp'>${camper.description}</p>
      <nav class="navList">
        <a href="#" class="nav-link active" data-page="features" data-id="${
          camper.id
        }">Features</a>
        <a href="#" class="nav-link" data-page="reviews" data-id="${
          camper.id
        }">Reviews</a>
      </nav>
      <div id="outlet">
          <h1>Features Page</h1><p>Features of camper ID: ${camper.id}</p>
      </div>
      <img class='close-modal' src="./img/close.svg" alt="close" width='22px' />
    </section>
    `;
}
