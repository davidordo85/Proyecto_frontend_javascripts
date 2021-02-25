import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";

export default class NewAdsFormController extends BaseController {

    constructor(element) {
        super(element);
        this.checkIfUserIsLogged();
        this.attachEventListeners();
        this.focusNameBook();
    }

    // TODO: interesante meter en base controller
    async checkIfUserIsLogged() {
        const userIsLogged = await dataService.isUserLogged();
        if (!userIsLogged) {
            window.location.href = '/login.html';
        } else {
            this.publish(this.events.FINISH_LOADING);
        }
    }

    focusNameBook() {
        const nameBook = this.element.querySelector('input')
        nameBook.focus();
    }

    attachEventListeners() {
        // a medida que el usuario escribe, comprobamos si el formulario es válido para habilitar o no el botón de enviar
    }
}