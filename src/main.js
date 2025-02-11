import { getCampers } from './js/api.js';

const resultRef = document.querySelector('.result');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');

document.querySelectorAll('.container-filters').forEach(item => {
  item.addEventListener('click', function () {
    item.classList.toggle('active-filter');
  });
});

let page = 1;
const pageSize = 4;
let allCampers = [];

function camperTemplate(camper) {
  return `<li class="campers-item">
                <img class="img-campers" src=${camper.gallery[0].original} alt=${camper.name} />
                    <div style={width:'524px', height:'320px'}>
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
                        <p class="description-campers" >${camper.description}</p>                    
                        <a class="campers-link">Show more</a>
                    </div>
        </li>`;
}

function campersTemplate(arr) {
  return arr.map(camperTemplate).join(' ');
}

async function createCatalog() {
  try {
    const data = await getCampers();
    allCampers = data;
    page = 1;
    resultRef.innerHTML = campersTemplate(allCampers.slice(0, pageSize));
    checkLoadMoreButton();
  } catch (error) {
    resultRef.innerHTML = '<p>Not found</p>';
    loadMore.classList.add('no-active');
  }
}

function loadMoreCampers() {
  page++;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  resultRef.insertAdjacentHTML(
    'beforeend',
    campersTemplate(allCampers.slice(startIndex, endIndex))
  );
  checkLoadMoreButton();
}

function checkLoadMoreButton() {
  if (page * pageSize >= allCampers.length) {
    loadMore.style.display = 'none';
  } else {
    loadMore.style.display = 'block';
  }
}

window.onload = createCatalog;
loadMore.addEventListener('click', loadMoreCampers);
