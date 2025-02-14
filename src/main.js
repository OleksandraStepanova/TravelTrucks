import { getCampers } from './js/api.js';
import {
  renderCampers,
  appendCampers,
  checkLoadMoreButton,
} from './js//render.js';
import { applyFilters } from './js/filters.js';

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
  if (event.target.closest('.btn-like')) {
    const button = event.target.closest('.btn-like');
    const camperId = button.dataset.id;
    button.classList.toggle('liked');

    const img = button.querySelector('img');
    const isLiked = button.classList.contains('liked');

    img.src = isLiked ? './src/img/red-heart.svg' : './src/img/heart.svg';

    const likedCampers = JSON.parse(localStorage.getItem('likedCampers')) || {};
    likedCampers[camperId] = isLiked;
    localStorage.setItem('likedCampers', JSON.stringify(likedCampers));
  }
});

loadMore.addEventListener('click', loadMoreCampers);
window.onload = createCatalog;
