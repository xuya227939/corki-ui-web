import React, { Component } from 'react';
import { Checkbox } from 'corki-ui';
import ReactMarkdown from 'react-markdown';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            checked: false
        };
    }

    checkChange = () => {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <Checkbox checked={this.state.checked} onChange={this.checkChange}>Checkbox</Checkbox>
                <br />
                <Checkbox disabled />
                <br />
                <Checkbox checked={true} disabled>disabled</Checkbox>
            </BasicComponents>
        );
    }
}

export default Index;