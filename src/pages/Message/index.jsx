import React, { Component } from 'react';
import { message, Button } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    messageShow = () => {
        message.open('hello', 3);
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <Button type="primary" onClick={this.messageShow}>Display normal Message</Button>
            </BasicComponents>
        );
    }
}

export default Index;