import AdsListController from './controller/AdsListController.js';
import LoaderController from './controller/LoaderController.js'

window.addEventListener("DOMContentLoaded", async (event) => {
    const loader = document.querySelector(".lds-ellipsis");
    const loaderController = new LoaderController(loader);

    const element = document.querySelector('.advertisement-list');
    const controller = new AdsListController(element);
    controller.loader = loaderController;
    controller.loadAds();
});