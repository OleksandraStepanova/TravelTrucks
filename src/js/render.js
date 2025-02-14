import { camperTemplate } from './templates.js';

const resultRef = document.querySelector('.result');
const loadMore = document.querySelector('.load-more');

export function renderCampers(arr, pageSize) {
  resultRef.innerHTML = arr.slice(0, pageSize).map(camperTemplate).join('');
}

export function appendCampers(arr, startIndex, endIndex) {
  resultRef.insertAdjacentHTML(
    'beforeend',
    arr.slice(startIndex, endIndex).map(camperTemplate).join('')
  );
}

export function checkLoadMoreButton(page, pageSize, filteredCampers) {
  loadMore.style.display =
    page * pageSize >= filteredCampers.length ? 'none' : 'block';
}