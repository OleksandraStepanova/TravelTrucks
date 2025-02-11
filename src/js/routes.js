import { fetchCampers } from "./api.js";
import { openModal } from "./modal.js";

export const routes = {
    "/": () => `
        <section id="home" class="section-home">
            <h1>Campers of your dreams</h1>
            <p class="text-home">You can find everything you want in our catalog</p>
            <a href="/catalog" class="link-home">View Now</a>
        </section>
    `,
    "/catalog": async () => {
        const campers = await fetchCampers();
        return `
            <ul class="campers-list">
                ${campers.items.map(camper => 
                    `<li>
                        <img src="${camper.gallery[0].original}" alt="${camper.name}" />
                        <div>
                            <div>
                                <h2>${camper.name}</h2>
                                <div>
                                    <p>&euro;${camper.price},00</p>                                                         
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="path_to_star_icon" alt="star" />
                                    <p>${camper.rating}</p>
                                    <p>(${camper.reviews.length} Reviews)</p>
                                </div>
                                <div>
                                    <img src="path_to_map_icon" alt="map" />
                                    <p>${camper.location}</p>
                                </div>
                            </div>                    
                            <p>${camper.description}</p>                    
                            <a class="campers-link" href="/catalog/${camper.id}" data-link>Show more</a>
                        </div>
                    </li>`
                ).join("")}
            </ul>
        `;
    }
};

export function isModalRoute(path) {
    return path.startsWith("/catalog/") && path.split("/").length === 3;
}

export function getCamperIdFromPath(path) {
    return path.split("/").pop();
}

export function handleLinkClicks() {
    document.body.addEventListener("click", (event) => {
        if (event.target.matches('a[data-link]')) {
            event.preventDefault();
            const path = event.target.getAttribute('href');
            history.pushState({}, '', path);
            navigateTo(path);
        }
    });
}

function navigateTo(path) {
    const route = routes[path];
    
    if (route) {
        document.getElementById('app').innerHTML = route();
    }

    if (isModalRoute(path)) {
        const camperId = getCamperIdFromPath(path);
        openModal(camperId);
    }
}

handleLinkClicks();

navigateTo(window.location.pathname);