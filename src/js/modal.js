import { fetchCampersById } from './api';

const modal = document.getElementById('modal');

export async function openModal(id) {
    if (!modal) {
        console.error('Modal element not found');
        return;
    }
    const camper = await fetchCampersById(id);

    if (!camper) {
        modal.innerHTML = '<div class="modal-content"><h2>Camper not found</h2><button id="close-modal">Close</button></div>';
    } else {
        modal.innerHTML = `
            <div class="modal-content">
                <h2>${camper.name}</h2>
      
                <button id="close-modal">Close</button>
            </div>
        `;
    }

    modal.style.display = 'block';

    history.pushState({}, '', `/catalog/${id}`);

    document.getElementById('close-modal').addEventListener('click', closeModal);
}

export function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        history.pushState({}, '', '/catalog');
    }
}