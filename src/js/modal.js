import { getCampersById } from './api.js';
import { modalTemplate } from './modal-template.js';
import { featuresTemplate } from './features-template.js';
import { reviewsTemplate } from './reviews-template.js';
import iziToast from 'izitoast';

export async function openModal(camperId) {
  document.body.classList.add('no-scroll');
  try {
    const camper = await getCampersById(camperId);
    if (!camper) {
      iziToast.show({
        message: 'Camper not found',
        timeout: 5000,
        position: 'topRight',
        color: 'red',
      });
      return;
    }

    const modalContent = document.querySelector('.modal-content');
    if (!modalContent) {
      iziToast.show({
        message: 'Error loading modal content. Please try again later.',
        timeout: 5000,
        position: 'topRight',
        color: 'red',
      });
      return;
    }

    modalContent.innerHTML = await modalTemplate(camper);
    document.querySelector('.modal').classList.add('open');

    addNavigationHandlers();
    const bookingForm = document.querySelector('#bookingForm');
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault();
      iziToast.show({
        message:
          'Success! We have received your booking request. We will contact you shortly.',
        timeout: 5000,
        position: 'topRight',
        color: 'green',
      });
      const formData = new FormData(bookingForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const date = formData.get('bookingDate');
      console.log('Booking request:', { name, email, date, camperId });
      bookingForm.reset();
    });
  } catch (error) {
    iziToast.show({
      message: 'Error fetching camper data. Please try again later.',
      timeout: 5000,
      position: 'topRight',
      color: 'red',
    });
  }
}

export function closeModal() {
  document.body.classList.remove('no-scroll');
  document.querySelector('.modal').classList.remove('open');
}

document.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('close-modal') ||
    event.target.classList.contains('modal')
  ) {
    closeModal();
  }
});

async function renderPage(page, camperId) {
  const content = {
    features: await featuresTemplate(camperId),
    reviews: await reviewsTemplate(camperId),
  };

  const outlet = document.getElementById('outlet');
  if (outlet) {
    outlet.innerHTML = content[page] || '<p>Page not found</p>';
  }

  document
    .querySelectorAll('.nav-link')
    .forEach(l => l.classList.remove('active'));

  const activeLink = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function addNavigationHandlers() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const camperId = event.target.dataset.id;
      renderPage(event.target.dataset.page, camperId);
    });
  });
}
