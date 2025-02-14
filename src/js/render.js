import { camperTemplate } from './templates.js';

const resultRef = document.querySelector('.result');
const loadMore = document.querySelector('.load-more');

export function renderCampers(arr, pageSize) {
  resultRef.innerHTML = arr.slice(0, pageSize).map(camperTemplate).join('');
  const likedCampers = JSON.parse(localStorage.getItem('likedCampers')) || {};
  document.querySelectorAll('.btn-like').forEach(button => {
    const camperId = button.dataset.id;
    if (likedCampers[camperId]) {
      button.classList.add('liked');
      button.querySelector('img').src = './src/img/red-heart.svg';
    }
  });
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
