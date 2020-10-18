import React, { Component } from 'react';
import { Radio } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    onChange = (e) => {
        this.setState({
            checked: !e
        });
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <Radio styleName="radio" checked={this.state.checked} onChange={this.onChange}>
                    Radio
                </Radio>
                <br />
                <Radio disabled>
                    disabled
                </Radio>
            </BasicComponents>
        );
    }
}

export default Index;