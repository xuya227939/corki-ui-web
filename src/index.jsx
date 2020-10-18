import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { Provider } from 'mobx-react';
import { Switch, Router, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import Home from '../src/pages/Home/index';
import App from '../src/pages/App/index';
import Button from '../src/pages/Button/index';
import Introduce from '../src/pages/Introduce/index';
import Stores from './mobx/rootStore';
import './mock/mock.js';
const history = createHashHistory();

ReactDOM.render(
    <ConfigProvider locale={zh_CN}>
        <Provider {...Stores}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route path="/components">
                        <Home history={history} location={location} match={location}>
                            <Route path="/components/button" component={Button}></Route>
                            <Route path="/components/introduce" component={Introduce}></Route>
                        </Home>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    </ConfigProvider>,
    document.getElementById('root'),
);
