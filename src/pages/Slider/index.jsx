import React, { Component } from 'react';
import { Slider } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <Slider defaultValue={30} />
            </BasicComponents>
        );
    }
}

export default Index;