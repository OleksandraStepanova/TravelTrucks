import { routes, isModalRoute, getCamperIdFromPath } from "./js/routes.js";
import { openModal } from "./js/modal.js";

const app = document.getElementById("app");

async function navigate(event) {
    event.preventDefault();
    const path = event.target.getAttribute("href");

    if (isModalRoute(path)) {
        openModal(getCamperIdFromPath(path));
    } else {
        history.pushState({}, "", path);
        await render();
    }
}

async function render() {
    const path = window.location.pathname;

    if (isModalRoute(path)) {
        openModal(getCamperIdFromPath(path));
        return;
    }

    app.innerHTML = `<p>Loading...</p>`;
    app.innerHTML = routes[path] ? await routes[path]() : `<h1>404 - Page not found</h1>`;

    document.querySelectorAll("a[data-link]").forEach(link => link.addEventListener("click", navigate));
}

window.addEventListener("popstate", render);
document.addEventListener("DOMContentLoaded", render);