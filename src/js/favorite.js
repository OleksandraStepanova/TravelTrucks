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
