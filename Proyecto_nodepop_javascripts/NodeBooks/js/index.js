import AdsListController from './controller/AdsListController.js';
import ErrorController from './controller/ErrorController.js';
import LoaderController from './controller/LoaderController.js';
import NewAdsOrLoginController from './controller/NewAdsOrLoginController.js';

window.addEventListener("DOMContentLoaded", async (event) => {
    const loader = document.querySelector(".lds-ellipsis");
    new LoaderController(loader);

    const element = document.querySelector('.advertisement-list');
    const controller = new AdsListController(element);
    controller.loadAds();

    const errorsElement = document.querySelector('.global-errors');
    new ErrorController(errorsElement);

    const newAdsButtons = document.querySelector('.new-advertisement');
    new NewAdsOrLoginController(newAdsButtons);
});