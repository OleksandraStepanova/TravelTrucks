import { getCampers } from './js/api.js';
import {
  renderCampers,
  appendCampers,
  checkLoadMoreButton,
} from './js//render.js';
import { applyFilters } from './js/filters.js';
import { openModal } from './js/modal.js';
import './js/favorite.js';

const resultRef = document.querySelector('.result');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');
const filtersForm = document.querySelector('#filtersForm');

loader.style.display = 'none';
loadMore.style.display = 'none';

let page = 1;
const pageSize = 4;
let allCampers = [];
let filteredCampers = [];

async function createCatalog() {
  try {
    loader.style.display = 'block';
    const data = await getCampers();
    loader.style.display = 'none';
    allCampers = data;
    filteredCampers = allCampers;
    renderCampers(filteredCampers, pageSize);
    page = 1;
    checkLoadMoreButton(page, pageSize, filteredCampers);
  } catch (error) {
    resultRef.innerHTML = '<p>Not found</p>';
    loadMore.classList.add('no-active');
  }
}

function loadMoreCampers() {
  page++;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  appendCampers(filteredCampers, startIndex, endIndex);
  checkLoadMoreButton(page, pageSize, filteredCampers);
}

filtersForm.addEventListener('submit', function (event) {
  event.preventDefault();
  filteredCampers = applyFilters(allCampers);
  renderCampers(filteredCampers, pageSize);
});

document.querySelectorAll('.container-filters').forEach(item => {
  item.addEventListener('click', function () {
    item.classList.toggle('active-filter');
  });
});

document.addEventListener('click', function (event) {
  const showMoreButton = event.target.closest('.campers-link');
  if (!showMoreButton) return;
  const camperId = showMoreButton.dataset.id;
  openModal(camperId);
});

loadMore.addEventListener('click', loadMoreCampers);
window.onload = createCatalog;
