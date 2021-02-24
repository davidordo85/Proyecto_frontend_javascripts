import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adsView } from '../views.js';
import pubSub from '../services/Pubsub.js';

export default class AdsListController extends BaseController {

    render(advertisements) {
        for (const advertisement of advertisements) {
            const article = document.createElement('article');
            article.innerHTML = adsView(advertisement);
            this.element.appendChild(article);
        }
    }

    async loadAds() {
        pubSub.publish('startLoading', {});
        try {
            const advertisements = await dataService.getAdvertisements();
            this.render(advertisements);
        } catch (error) {
            pubSub.publish('error', error);
        } finally {
            pubSub.publish('finishLoading', {});
        }
    }

}
