import React, { Component } from 'react';
import { Tag } from 'corki-ui';
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
                <Tag>Tag</Tag>
                <Tag color="red">red</Tag>
                <Tag color="green">green</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
            </BasicComponents>
        );
    }
}

export default Index;