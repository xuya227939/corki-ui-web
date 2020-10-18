import { observable, action, runInAction } from 'mobx';
import BasicStore, { initLoading } from '../basicStore';
import { isResultError } from '../../utils/index';
import * as api from '../../servers/home';
class HomeStore extends BasicStore {
    @observable home = {
        subMenu: [],
        menu: [],
        // 基础组件
        basicComponents: {},
        // 更新日志
        changeLog: []
    };

    @initLoading
    @action
    async getCard() {
        let cards = await api.getCard();
        runInAction(() => {
            let subMenu = [], menu = [];
            cards = cards.listData;
            cards.map(item => {
                if(item.isSubMenu) subMenu.push(item);

                if(!item.isSubMenu) menu.push(item);
            });
            this.home.subMenu = subMenu;
            this.home.menu = menu;
        });
    }

    @initLoading
    @action
    async getBasicComponents(title) {
        let basicComponents = await api.getBasicComponents(title);
        runInAction(() => {
            this.home.basicComponents = basicComponents[0];
        });
    }

    @initLoading
    @action
    async getChangeLog() {
        const changeLog = await api.getChangeLog();
        runInAction(() => {
            this.home.changeLog = changeLog.listData;
        });
    }
}

export default HomeStore;