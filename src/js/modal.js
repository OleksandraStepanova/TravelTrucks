import { getCampersById } from './api.js';
import { modalTemplate } from './modal-template.js';

export async function openModal(camperId) {
  try {
    const camper = await getCampersById(camperId);
    if (!camper) {
      console.error('Camper not found');
      return;
    }

    const modalContent = document.querySelector('.modal-content');
    if (!modalContent) {
      console.error('Modal content not found in DOM');
      return;
    }

    modalContent.innerHTML = modalTemplate(camper);
    document.querySelector('.modal').classList.add('open');

    sessionStorage.setItem('openModal', camperId);
    // window.history.pushState({}, '', `/catalog.html/${camperId}`);

    addNavigationHandlers();
  } catch (error) {
    console.error('Error fetching camper data:', error);
  }
}

export function closeModal() {
  document.querySelector('.modal').classList.remove('open');
  // window.history.pushState({}, '', '/catalog.html');
  sessionStorage.removeItem('openModal');
}

document.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('close-modal') ||
    event.target.classList.contains('modal')
  ) {
    closeModal();
  }
});

function renderPage(page, camperId) {
  const content = {
    features: `<h1>Features Page</h1><p>Features of camper ID: ${camperId}</p>`,
    reviews: `<h1>Reviews Page</h1><p>Reviews for camper ID: ${camperId}</p>`,
  };

  const outlet = document.getElementById('outlet');
  if (outlet) {
    outlet.innerHTML = content[page] || '<h1>Catalog</h1>';
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
