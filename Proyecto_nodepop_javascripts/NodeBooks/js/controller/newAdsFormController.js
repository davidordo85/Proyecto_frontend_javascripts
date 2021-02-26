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
        const nameBook = this.element.querySelector('input');
        nameBook.focus();
    }

    attachEventListeners() {
        // TODO: revisar esto que no furula
        /* a medida que el usuario escribe, comprobamos si el formulario es válido para habilitar o no el botón de enviar
        const inputCheck = this.element.querySelector('input', 'select');
        inputCheck.addEventListener('keyup', () => {
            const button = this.element.querySelector('button');
            if (this.element.checkValidity()) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', true);
            }                        
        });
        */
        const button = this.element.querySelector('button')
        button.removeAttribute('disabled')

        this.element.addEventListener('submit', async event => {
            event.preventDefault();
            const ads = {
                name: this.element.elements.nameBook.value,
                author: this.element.elements.nameAuthorBook.value,
                price: this.element.elements.priceBook.value,
                sale: this.element.elements.saleOrPurchase.value,
            }
            this.publish(this.events.START_LOADING);
            try {
                await dataService.saveAds(ads);
                window.location.href = '/?advertisement=adsOK'
            } catch (error) {
                this.publish(this.events.ERROR, error);
            } finally {
                this.publish(this.events.FINISH_LOADING);
            }
        })
    }
}