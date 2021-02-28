import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adsView } from "../views.js";

export default class AdsDetailController extends BaseController {

    renderDetail(advertisement) {
        const article = document.createElement('article');
        article.innerHTML = adsView(advertisement);
        this.element.appendChild(article);

    }

    async loadAdDetail() {
        this.publish(this.events.START_LOADING, {});
        try {
            
            const detailAdvertisement = await dataService.getAdvertisements();
            this.renderDetail(detailAdvertisement[0]);
            console.log(detailAdvertisement[0])
        } catch (error) {
            console.error(error);
            this.publish(this.events.ERROR, error);
        } finally {
        this.publish(this.events.FINISH_LOADING, {});
        }
    }
}