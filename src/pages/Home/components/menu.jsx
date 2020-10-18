/*
 * 路由权限配置页面
 * @Date: 2019-07-18 10:33:21
 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import './menu.less';

const { SubMenu } = Menu;

@inject('homeStore')
@observer
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: ['/components/button'],
            // 当前页面路径
            pathname: '',
            openKeys: ['component']
        };
        this.rootSubmenuKeys = ['component'];
    }

    componentDidMount() {
        const { location: { pathname }, homeStore } = this.props;
        homeStore.getCard();

        document.title = pathname.split('/')[2];
        this.setState({
            selectedKeys: [pathname],
            pathname
        });
    }

    static getDerivedStateFromProps(props, state) {
        if(props.location.pathname != state.pathname) {
            return {
                pathname: props.location.pathname,
                selectedKeys: [props.location.pathname]
            };
        }
        return state;
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    };

    render() {
        const { selectedKeys, openKeys } = this.state;
        const { homeStore: { home } } = this.props;
        return (
            <Menu
                theme="light"
                mode="inline"
                defaultOpenKeys={['/components/button']}
                selectedKeys={selectedKeys}
                onClick={({ key }) => {
                    document.title = key.split('/')[2];
                    this.props.history.push(key);
                    this.setState({ selectedKeys: [key] });
                }}
                styleName="main-menu-inner"
                inlineIndent={40}
                openKeys={openKeys}
                onOpenChange={this.onOpenChange}
            >
                {
                    home.menu.map(item => {
                        return (
                            <Menu.Item key={item.href}>
                                <span>
                                    {item.title}
                                </span>
                            </Menu.Item>
                        );
                    })
                }
                <SubMenu
                    key="component"
                    title={
                        <span>组件</span>
                    }
                >
                    {/* <Menu.Item key="/components/tooltip">
                        <span>
                            Tooltip&nbsp;&nbsp;
                        </span>
                    </Menu.Item> */}
                    {
                        home.subMenu.map(item => {
                            return (
                                <Menu.Item key={item.href}>
                                    <span>
                                        {item.title}&nbsp;&nbsp;
                                        <span styleName="small">
                                            {item.small}
                                        </span>
                                    </span>
                                </Menu.Item>
                            );
                        })
                    }
                </SubMenu>
            </Menu>
        );
    }
}

export default withRouter(Index);
