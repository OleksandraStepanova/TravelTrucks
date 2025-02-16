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
    const data = await getCampers();
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
  window.history.pushState({}, '', `/catalog.html/${camperId}`);
  openModal(camperId);
});

document.addEventListener('DOMContentLoaded', () => {
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const isCatalogPage = pathParts[0] === 'catalog.html';
  const camperId = isCatalogPage && pathParts[1] ? pathParts[1] : null;

  const savedCamperId = sessionStorage.getItem('openModal');

  if (camperId) {
    openModal(camperId);
  } else if (savedCamperId) {
    openModal(savedCamperId);
  }
});

loadMore.addEventListener('click', loadMoreCampers);
window.onload = createCatalog;
