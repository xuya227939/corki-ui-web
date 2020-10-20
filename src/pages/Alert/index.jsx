import React, { Component } from 'react';
// import { Alert } from 'corki-ui';
import classNames from 'classNames';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
import './index.less';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { history, className, message = '123', description = '456', type = 'success', style } = this.props;

        const alertClass = classNames(className, {
            'corki-alert': true,
            'corki-alert-no-icon': true,
            'corki-alert-success': type === 'success',
            'corki-alert-info': type === 'info',
            'corki-alert-warning': type === 'warning',
            'corki-alert-error': type === 'error'
        });

        return (
            <BasicComponents history={history} README={README}>
                <div
                    styleName={alertClass}
                    style={{ ...style }}
                    role="alert"
                >
                    <span styleName="corki-alert-message">{message}</span>
                    <span styleName="corki-alert-description">{description}</span>
                </div>
            </BasicComponents>
        );
    }
}

export default Index;