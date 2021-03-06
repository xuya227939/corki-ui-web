import React, { Component } from 'react';
import { Button, Preview } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPreView: false
        };
    }

    showPreview = () => {
        this.setState({ isShowPreView: true });
    }

    onClose = () => {
        this.setState({ isShowPreView: false });
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <Button
                    onClick={this.showPreview}
                    type="primary"
                >
                    Open Preview
                </Button>
                <Preview
                    url="//sight-world.oss-cn-hangzhou.aliyuncs.com/corki-ui/corki-ui-logo.jpeg"
                    onClose={this.onClose}
                    visible={this.state.isShowPreView}
                />
            </BasicComponents>
        );
    }
}

export default Index;