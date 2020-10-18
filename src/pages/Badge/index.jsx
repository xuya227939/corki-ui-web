import React, { Component } from 'react';
import { Badge } from 'corki-ui';
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
                <div>
                    <span styleName="span-badge">
                        <Badge count={5}>
                            <div styleName="block"></div>
                        </Badge>
                    </span>
                    <Badge count={5} overflowCount="99" type="danger">
                        <div styleName="block"></div>
                    </Badge>
                </div>
                <div>
                    <Badge count={5} type="info" />
                </div>
            </BasicComponents>
        );
    }
}

export default Index;