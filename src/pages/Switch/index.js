import React, { Component } from 'react';
import { Switch } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <Switch styleName="corki-switch" defaultChecked />
                <br />
                <Switch defaultChecked={false} disabled />
            </BasicComponents>
        );
    }
}

export default Index;