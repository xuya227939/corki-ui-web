import React, { Component } from 'react';
import { createHashHistory } from 'history';
import LayoutHead from '../../components/Layout/LayoutHead.js';
import Menu from './components/menu';
import routeConfig from '../../routeConfig';
import './index.less';
const history = createHashHistory();
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    render() {
        return (
            <div styleName="layout">
                <LayoutHead history={history} />
                <Menu />
                {routeConfig}
            </div>
        );
    }
}

export default Index;
