import { getCampersById } from './api.js';

export async function openModal(camperId) {
  try {
    const camper = await getCampersById(camperId);
    if (!camper) {
      console.error('Camper not found');
      return;
    }

    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
    <section class='camp'>
            <h2 class='title-camp'>${camper.name}</h2>
            <div class='wrapper-camp'>
                <div class='reviews-camp'>
                    <img src='../src/img/star.svg' alt="star" />
                    <p>${camper.rating}</p>
                    ${
                      camper.reviews
                        ? `<p>(${camper.reviews.length} Reviews)</p>`
                        : ''
                    }
                </div>
                <div class='location-camp'>
                    <img src='../src/img/map.svg' alt="map" />
                    <p>${camper.location}</p>
                </div>
            </div>
            <p class='price-camp'>&euro;${camper.price},00</p>
            <div class='container-camp'>
                <ul class='gallery-camp'>
                    ${
                      camper.gallery[0]
                        ? `<li>
                        <img class='image-camp' src=${camper.gallery[0].original} alt="firs image" />
                    </li>`
                        : ''
                    }
                        ${
                          camper.gallery[1]
                            ? `<li>
                        <img class='image-camp' src=${camper.gallery[1].original} alt="second image" />
                    </li>`
                            : ''
                        }
                        ${
                          camper.gallery[2]
                            ? `<li>
                        <img class='image-camp' src=${camper.gallery[2].original} alt="third image" />
                    </li>`
                            : ''
                        }
                        ${
                          camper.gallery[3]
                            ? `<li>
                        <img class='image-camp' src=${camper.gallery[3].original} alt="forth image" />
                    </li>`
                            : ''
                        }             
                </ul>
            </div>
            <p class='description-camp'>${camper.description}</p>
            <img class='close-modal' src="../src/img/close.svg" alt="close" width='22px' />         
        </section> 
    `;

    document.querySelector('.modal').classList.add('open');
  } catch (error) {
    console.error('Error fetching camper data:', error);
  }
}

document.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('close-modal') ||
    event.target.classList.contains('modal')
  ) {
    document.querySelector('.modal').classList.remove('open');
    window.history.pushState({}, '', '/catalog');
  }
});
