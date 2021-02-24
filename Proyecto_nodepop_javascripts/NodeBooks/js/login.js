import LoaderController from './controller/LoaderController.js';
import ErrorController from './controller/ErrorController.js';
import LoginFormController from './controller/LoginFormController.js';

window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.lds-ellipsis');
    new LoaderController(loader);

    const errorsElement = document.querySelector('.global-errors');
    new ErrorController(errorsElement);

    const formElement = document.querySelector('form');
    new LoginFormController(formElement);
})