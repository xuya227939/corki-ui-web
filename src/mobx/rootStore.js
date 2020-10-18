import HomeStore from './Home/store';
class Store {
    constructor() {
        this.homeStore = new HomeStore();
    }
}
export default new Store();