import React, { PureComponent } from 'react';
import { Row, Col, Tabs, Menu } from 'antd';
import './LayoutHead.less';

class LayoutHead extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { current: '' };
    }

    handleClick = ({ key }) => {
        if(key != 'github') this.setState({ current: key });

        if(key == 'components') this.props.history.push('/components/introduce');

        if(key == 'changeLog') this.props.history.push('/components/changeLog');

        if(key == 'about') this.props.history.push('/components/about');

        if(key == 'github') window.open('https://github.com/xuya227939/corki-ui');
    }

    render() {
        return (
            <header styleName="header">
                <nav styleName="header-nav">
                    <Row styleName="header-nav-row">
                        <Col styleName="header-nav-col-left" span={12}>
                            <span styleName="header-nav-logo" onClick={() => this.props.history.push('/')} />
                            <div styleName="col-text" onClick={() => this.props.history.push('/')}>
                                corki-ui
                            </div>
                        </Col>
                        <Col styleName="header-nav-col-right" span={12}>
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                                style={{ height: '63px', lineHeight: '63px' }}
                            >
                                <Menu.Item key="components">
                                    组件
                                </Menu.Item>
                                <Menu.Item key="changeLog">
                                    更新日志
                                </Menu.Item>
                                <Menu.Item key="about">
                                    关于
                                </Menu.Item>
                                <Menu.Item key="github">
                                    GitHub
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </nav>
            </header>
        );
    }
}

export default LayoutHead;
