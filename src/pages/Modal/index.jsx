import React, { Component } from 'react';
import { Button, Modal } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    cancel = () => {
        this.setState({
            visible: false
        });
    };
        
    confirm = () => {
        this.setState({
            visible: false
        });
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <Button
                    onClick={this.showModal}
                    type="primary"
                >
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    cancel={this.cancel}
                    confirm={this.confirm}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </BasicComponents>
        );
    }
}

export default Index;