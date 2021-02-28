import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { detailView } from "../views.js";

export default class AdsDetailController extends BaseController {

    renderDetail(advertisement) {
        const article = document.createElement('article');
        article.innerHTML = detailView(advertisement);
        this.element.appendChild(article);

    }

    async loadAdDetail() {
        this.publish(this.events.START_LOADING, {});
        try {
            const detailAdvertisements = await dataService.getAdvertisements();
            this.renderDetail(detailAdvertisements);
        } catch (error) {
            console.error(error);
            this.publish(this.events.ERROR, error);
        } finally {
        this.publish(this.events.FINISH_LOADING, {});
        }
    }
}