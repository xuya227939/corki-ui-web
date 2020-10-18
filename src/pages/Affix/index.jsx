import React, { Component } from 'react';
import { Button, Affix } from 'corki-ui';
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
                <Affix offsetTop={30}>
                    <Button type="primary">Affix top</Button>
                </Affix>
            </BasicComponents>
        );
    }
}

export default Index;