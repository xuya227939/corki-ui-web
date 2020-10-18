import React, { Component } from 'react';
import LayoutFooter from './../../components/Layout/LayoutFooter';
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { history } = this.props;
        return (
            <main styleName="about-container">
                <h2>关于corki-ui</h2>
                <p>corki-ui -- <a href="//corki-ui.com" target="_blank">https://corki-ui.com</a> 个人项目，组件都是参考ant-design</p>
                <h2 styleName="join-us">加入我</h2>
                <p styleName="about-mail">corki-ui个人练手项目，如果你也跟我有一样得想法，欢迎和我联系，一起探讨前端技术，更欢迎加入我一起来参与。<br /><br />Mail：<a href="mailto:hezhiqianye@gmail.com" target="_blank">hezhiqianye@gmail.com</a></p>
                <LayoutFooter />
            </main>
        );
    }
}

export default Index;