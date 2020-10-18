import React, { Component } from 'react';
import { Input } from 'corki-ui';
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
                <Input
                    styleName="input"
                    placeholder="Basics Input"
                />
            </BasicComponents>
        );
    }
}

export default Index;