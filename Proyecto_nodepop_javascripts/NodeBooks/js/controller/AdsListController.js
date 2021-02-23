import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adsView } from '../views.js';

export default class AdsListController extends BaseController {

    render(advertisements) {
        for (const advertisement of advertisements) {
            const article = document.createElement('article');
            article.innerHTML = adsView(advertisement);
            this.element.appendChild(article);
        }
    }

    async loadAds() {
        try {
            const advertisements = await dataService.getAdvertisements();
            this.render(advertisements);
        } catch (error) {
            console.error(error);
        }
    }

}
