import React, { Component, Suspense } from 'react';
import {
    Switch,
    Redirect,
    Router
} from 'react-router-dom';
import { Row, Col } from 'antd';
import { createHashHistory } from 'history';
import LayoutFooter from '../../components/Layout/LayoutFooter.js';
import LayoutHead from '../../components/Layout/LayoutHead.js';
import Menu from './components/menu';
import App from '../App/index';
import * as stores from '../../mobx/rootStore';
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
