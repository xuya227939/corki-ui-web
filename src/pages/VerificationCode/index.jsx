import React, { Component } from 'react';
import { VerificationCode } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    getNumbers = (num) => {
        console.log('VerificationCode', num.toString());
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <VerificationCode getNumbers={this.getNumbers} />
            </BasicComponents>
        );
    }
}

export default Index;