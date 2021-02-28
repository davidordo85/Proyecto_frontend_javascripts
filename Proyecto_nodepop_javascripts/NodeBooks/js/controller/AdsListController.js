import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adsView } from '../views.js';

export default class AdsListController extends BaseController {

    render(advertisements) {
        for (const advertisement of advertisements) {
            
           
            const article = document.createElement('article');
            article.classList.add('advertisement');
            const advertisementHTML = adsView(advertisement);
            article.innerHTML = advertisementHTML;

            article.addEventListener('click', (event) => {
                window.location.href = 'ad-detail.html?id=' + advertisement.id;
            })
            this.element.appendChild(article);
        }
    }

    async loadAds() {
        this.publish(this.events.START_LOADING, {});
        try {
            const advertisement = await dataService.getAdvertisements();
            this.render(advertisement);
        } catch (error) {
            console.error(error);
            this.publish(this.events.ERROR, error);
        } finally {
            // esto se ejecuta siempre, vaya bien o vaya mal
            this.publish(this.events.FINISH_LOADING, {});
        }
    }


}
