import LoaderController from './controller/LoaderController.js';
import ErrorController from './controller/ErrorController.js';
import RegisterFormController from './controller/RegisterFormController.js';

window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.lds-ellipsis');
    const loaderController = new LoaderController(loader);

    const errorsElement = document.querySelector('.global-errors');
    const errorController = new ErrorController(errorsElement);

    const formElement = document.querySelector('form');
    const formController = new RegisterFormController(formElement);
});
