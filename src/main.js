import { getCampers } from './js/api.js';

const resultRef = document.querySelector('.result');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');
const filtersForm = document.querySelector('#filtersForm');

let page = 1;
const pageSize = 4;
let allCampers = [];
let filteredCampers = [];

function camperTemplate(camper) {
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

function renderCampers(arr) {
  resultRef.innerHTML = arr.slice(0, pageSize).map(camperTemplate).join('');
  page = 1;
  checkLoadMoreButton();
}

async function createCatalog() {
  try {
    const data = await getCampers();
    allCampers = data;
    filteredCampers = allCampers;
    renderCampers(filteredCampers);
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
    filteredCampers.slice(startIndex, endIndex).map(camperTemplate).join('')
  );
  checkLoadMoreButton();
}

function applyFilters() {
  const location =
    document.querySelector('#location')?.value.toLowerCase() || '';

  const activeFilters = [
    ...document.querySelectorAll('.container-filters.active-filter'),
  ].map(filter => filter.id);

  const vehicleType =
    document.querySelector('input[name="vehicleType"]:checked')?.value || '';

  filteredCampers = allCampers.filter(camper => {
    const matchesLocation = camper.location.toLowerCase().includes(location);
    const matchesEquipment = activeFilters.every(
      key => camper[key] === true || 'automatic'
    );
    const matchesVehicleType = vehicleType ? camper.form === vehicleType : true;

    return matchesLocation && matchesEquipment && matchesVehicleType;
  });

  renderCampers(filteredCampers);
}

function checkLoadMoreButton() {
  loadMore.style.display =
    page * pageSize >= filteredCampers.length ? 'none' : 'block';
}

window.onload = createCatalog;
loadMore.addEventListener('click', loadMoreCampers);
filtersForm.addEventListener('submit', function (event) {
  event.preventDefault();
  applyFilters();
});

document.querySelectorAll('.container-filters').forEach(item => {
  item.addEventListener('click', function () {
    item.classList.toggle('active-filter');
  });
});
