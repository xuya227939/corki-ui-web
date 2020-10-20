import React, { Component } from 'react';
import { Alert } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { history } = this.props;

        return (
            <BasicComponents history={history} README={README}>
                <Alert message="Success Text" type="success" style={{ marginBottom: '16px' }} />
                <Alert message="Info Text" type="info" style={{ marginBottom: '16px' }} />
                <Alert message="Warning Text" type="warning" style={{ marginBottom: '16px' }} />
                <Alert message="Error Text" type="error" style={{ marginBottom: '16px' }} />
            </BasicComponents>
        );
    }
}

export default Index;