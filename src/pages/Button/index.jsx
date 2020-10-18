import React, { Component } from 'react';
import { Button } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    onClick = (e) => {
        console.log('btn click', e);
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <Button
                    onClick={this.onClick}
                    styleName="corki-btn btn"
                >
                    Default
                </Button>
                <Button
                    onClick={this.onClick}
                    type="primary"
                    styleName="corki-btn btn"
                >
                    Primary
                </Button>
                <Button
                    onClick={this.onClick}
                    disabled
                    styleName="corki-btn btn"
                >
                    Disabled
                </Button>
                <Button
                    onClick={this.onClick}
                    type="danger"
                    styleName="corki-btn btn"
                >
                    Danger
                </Button>
            </BasicComponents>
        );
    }
}

export default Index;