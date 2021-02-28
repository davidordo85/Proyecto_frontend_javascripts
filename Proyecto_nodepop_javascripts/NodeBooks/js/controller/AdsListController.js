import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adsView } from '../views.js';

export default class AdsListController extends BaseController {

    render(advertisements) {
        for (const advertisement of advertisements) {
            
            
            const aHref = document.createElement('a');
            aHref.setAttribute('href', './ad-detail.html')
            aHref.innerHtml = adsView(advertisement)
            this.element.appendChild(aHref)
            
           
            const article = document.createElement('article');
            article.innerHTML = adsView(advertisement);
            aHref.appendChild(article);
        }
    }

    async loadAds() {
        this.publish(this.events.START_LOADING, {});
        try {
            const advertisements = await dataService.getAdvertisements();
            this.render(advertisements);
        } catch (error) {
            console.error(error);
            this.publish(this.events.ERROR, error);
        } finally {
            // esto se ejecuta siempre, vaya bien o vaya mal
            this.publish(this.events.FINISH_LOADING, {});
        }
    }


}
