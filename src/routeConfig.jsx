// 路由配置文件
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import Modal from './pages/Modal';
import VerificationCode from './pages/VerificationCode';
import Preview from './pages/Preview';
import Button from './pages/Button';
import Input from './pages/Input';
import Progress from './pages/Progress';
import Switch from './pages/Switch';
import About from './pages/About';
import Radio from './pages/Radio';
import Message from './pages/Message';
import Select from './pages/Select';
import Checkbox from './pages/Checkbox';
import Affix from './pages/Affix';
import Badge from './pages/Badge';
import Empty from './pages/Empty';
import Introduce from './pages/Introduce';
import ChangeLog from './pages/ChangeLog';
import Slider from './pages/Slider';
import Tag from './pages/Tag';
import Tooltip from './pages/Tooltip';

const routes = [
    {
        path: '/components/tag',
        component: Tag
    },
    {
        path: '/components/slider',
        component: Slider
    },
    {
        path: '/components/empty',
        component: Empty
    },
    {
        path: '/components/introduce',
        component: Introduce
    },
    {
        path: '/components/about',
        component: About,
    },
    {
        path: '/components/modal',
        component: Modal,
    },
    {
        path: '/components/verificationCode',
        component: VerificationCode,
    },
    {
        path: '/components/button',
        component: Button,
    },
    {
        path: '/components/input',
        component: Input,
    },
    {
        path: '/components/progress',
        component: Progress,
    },
    {
        path: '/components/tooltip',
        component: Tooltip,
    },
    {
        path: '/components/preview',
        component: Preview,
    },
    {
        path: '/components/switch',
        component: Switch,
    },
    {
        path: '/components/radio',
        component: Radio
    },
    {
        path: '/components/message',
        component: Message
    },
    {
        path: '/components/select',
        component: Select
    },
    {
        path: '/components/checkbox',
        component: Checkbox
    },
    {
        path: '/components/affix',
        component: Affix
    },
    {
        path: '/components/badge',
        component: Badge
    },
    {
        path: '/components/changeLog',
        component: ChangeLog
    }
];

const RouteWithSubRoutes = route => (
    <Route
        exact
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const routeConfig = routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
export default routeConfig;
