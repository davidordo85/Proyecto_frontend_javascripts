import BaseController from './BaseController.js';


export default class RegisterFormController extends BaseController {

    constructor(element) {
        super(element);
        this.attachEventListener();
    }

    attachEventListener() {
        
        this.element.addEventListener('submit', (event) => {
            event.preventDefault();  // evita que se enví el formulario (comportamiento por defecto)
            console.log('SE ENVIA EL FORMULARIO', this.element.validity);
        });

        this.element.querySelectorAll('input').forEach(input => {
            const button = this.element.querySelector('button');
            input.addEventListener('keyup', event => { 
                // si el input es OK lo marco en verde, si no, en rojo
                if (input.validity.valid) {
                    input.classList.add('is-success');
                    input.classList.remove('is-danger');
                } else {
                    input.classList.remove('is-success');
                    input.classList.add('is-danger');
                }

                // valido si todo el formulario es OK para habilitar o deshabilitar el botón
                if (this.element.checkValidity()) {
                    button.removeAttribute('disabled');
                    // button.setAttribute('disabled', false); // esto también valdría
                } else {
                    button.setAttribute('disabled', true);
                }
            });
        });
    }

}
