import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Table } from 'antd';
import ReactMarkdown from 'react-markdown';
import LayoutFooter from '../Layout/LayoutFooter';
import CodeBlock from '../CodeBlock/index.jsx';
import './index.less';

@inject('homeStore')
@observer
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }

    componentDidMount() {
        const { homeStore, history } = this.props;
        let title = history.location.pathname.split('/')[2];
        title = title[0].toUpperCase() + title.substr(1, title.length);
        homeStore.getBasicComponents(title);
    }

    changeIcon = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    }

    render() {
        const { isShow } = this.state;
        const { homeStore: { home: { basicComponents } }, children, README } = this.props;
        return (
            <main styleName="page-container">
                <article styleName="markdown">
                    <h1>
                        {basicComponents && basicComponents.title}
                        <span styleName="subtitle">{basicComponents && basicComponents.subTitle}</span>
                    </h1>
                    <article>
                        {basicComponents && basicComponents.subDescribe}
                    </article>
                        <h2 id="何时使用">{basicComponents && basicComponents.whenUse}</h2>
                        <p>{basicComponents && basicComponents.assemblyDescribe}</p>
                        <h2 data-scrollama-index="1">{basicComponents && basicComponents.codeDemo}</h2>
                </article>
                <article styleName="code-box">
                    <section styleName="code-box-demo">
                        {children}
                    </section>
                    <article styleName="code-box-meta markdown">
                        <section styleName="code-box-title">
                            {basicComponents && basicComponents.codeBoxTitle}
                        </section>
                        <section styleName="code-box-description">
                            <p>
                                {basicComponents && basicComponents.codeBoxDescription}
                            </p>
                        </section>
                        <section styleName="code-box-actions">
                            <span onClick={() => this.changeIcon()}>
                                <img
                                    alt="expand code"
                                    src="//gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                                    styleName={isShow ? 'code-expand-icon-hide' : 'code-expand-icon-show'}
                                />
                                <img
                                    alt="expand code"
                                    src="//gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                                    styleName={isShow ? 'code-expand-icon-show' : 'code-expand-icon-hide'}
                                />
                            </span>
                        </section>
                    </article>
                    {
                        isShow &&
                        <article styleName="highlight-wrapper highlight-wrapper-expand">
                            <ReactMarkdown
                                source={README}
                                escapeHtml={false}
                                renderers={{
                                    code: CodeBlock
                                }}
                            />
                        </article>
                    }
                </article>
                <article styleName="markdown api-container">
                    <h2 id="API" data-scrollama-index="11">
                        <span>{basicComponents && basicComponents.api}</span>
                    </h2>
                    <p>
                        {basicComponents && basicComponents.apiDescription}
                    </p>
                    <Table
                        styleName="api-container-table"
                        dataSource={basicComponents && basicComponents.dataSource ? JSON.parse(basicComponents && basicComponents.dataSource) : []}
                        columns={basicComponents && basicComponents.dataColumns ? JSON.parse(basicComponents && basicComponents.dataColumns) : []}
                        pagination={false}
                    />
                </article>
                <LayoutFooter />
            </main>
        );
    }
}

export default Index;