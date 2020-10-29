import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import LayoutFooter from './../../components/Layout/LayoutFooter';
import CodeBlock from '../../components/CodeBlock/index.jsx';
import README from './README.md';
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { history } = this.props;
        return (
            <main styleName="main-container">
                <h1>Corki UI of React</h1>
                <section styleName="markdown">
                    <p>
                        <code>corki-ui</code>
                        是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。
                    </p>
                    <div styleName="pic-plus">
                        <img styleName="logo" src="https://sight-world.oss-cn-hangzhou.aliyuncs.com/corki-ui/corki-ui-logo.jpeg" />
                        <span>+</span>
                        <img src="https://sight-world.oss-cn-hangzhou.aliyuncs.com/images/logo.png" />
                    </div>
                </section>
                <section styleName="markdown">
                    <h2>
                        <span>✨ 特性</span>
                    </h2>
                    <ul>
                        <li>
                            <p>
                                🛡 仿照Ant Design
                            </p>
                        </li>
                    </ul>
                    <h2>
                        <span>支持环境</span>
                    </h2>
                    <ul>
                        <li>
                            <p>
                                现代浏览器和 IE11 及以上。
                            </p>
                        </li>
                    </ul>
                    <h2>
                        <span>版本</span>
                    </h2>
                    <ul>
                        <li>
                            <p>
                                稳定版：<a href="https://www.npmjs.org/package/corki-ui"><img src="https://img.shields.io/badge/npm-1.9.22-blue" alt="npm package" /></a>
                            </p>
                        </li>
                    </ul>
                    <h2>
                        <span>安装</span>
                    </h2>
                    <h3>
                        使用npm或yarn安装
                    </h3>
                    <p>
                        <strong>我们推荐使用 npm 或 yarn 的方式进行开发</strong>，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
                    </p>
                    <h2>
                        <span>示例</span>
                    </h2>
                    <article styleName="highlight-wrapper">
                        <ReactMarkdown
                            source={README}
                            escapeHtml={false}
                            renderers={{
                                code: CodeBlock
                            }}
                        />
                    </article>
                    <h2>
                        <span>链接</span>
                    </h2>
                    <ul>
                        <li>
                            <p>
                                <a onClick={() => history.push('/')}>首页</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a onClick={() => history.push('/components/introduce')}>组件</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a onClick={() => history.push('/components/changeLog')}>更新日志</a>
                            </p>
                        </li>
                    </ul>
                </section>
                <LayoutFooter />
            </main>
        );
    }
}

export default Index;