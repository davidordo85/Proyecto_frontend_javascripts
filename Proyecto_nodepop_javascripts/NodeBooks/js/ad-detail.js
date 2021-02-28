

import ErrorController from './controller/ErrorController.js';
import LoaderController from './controller/LoaderController.js';
import AdsDetailController from './controller/AdsDetailController.js';
import NewAdsOrLoginController from './controller/NewAdsOrLoginController.js';

window.addEventListener("DOMContentLoaded", async (event) => {
    const loader = document.querySelector(".lds-ellipsis");
    new LoaderController(loader);

    const detail = document.querySelector(".advertisement");
    const detailAds = new AdsDetailController(detail);
    detailAds.loadAdDetail();

    const errorsElement = document.querySelector('.global-errors');
    new ErrorController(errorsElement);

    const newAdsButtons = document.querySelector('.new-advertisement');
    new NewAdsOrLoginController(newAdsButtons);


});