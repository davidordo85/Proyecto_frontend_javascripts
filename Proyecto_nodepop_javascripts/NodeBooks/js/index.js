import AdsListController from './controller/AdsListController.js';

window.addEventListener("DOMContentLoaded", async (event) => {
    const loader = document.querySelector(".lds-default");
    loader.classList.add("hidden");

    const element = document.querySelector('.advertisement-list');
    const controller = new AdsListController(element);
    controller.loadAds();
});