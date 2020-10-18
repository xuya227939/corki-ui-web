import React, { Component } from 'react';
import { Select } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.innerText
        });
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <Select defaultValue="lucy" value={this.state.value} style={{ width: 120, margin: '0 8px 10px 0' }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                </Select>
                <Select disabled defaultValue="lucy" style={{ width: 120 }}>

                </Select>
            </BasicComponents>
        );
    }
}

export default Index;