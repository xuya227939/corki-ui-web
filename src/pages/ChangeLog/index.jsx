import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import LayoutFooter from './../../components/Layout/LayoutFooter';
import { Timeline } from 'antd';
import './index.less';

@inject('homeStore')
@observer
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {
        const { homeStore } = this.props;
        homeStore.getChangeLog();
    }

    render() {
        let { homeStore: { home: { changeLog } } } = this.props;

        if(changeLog) changeLog = changeLog.reverse();
        return (
            <main styleName="page-container">
                <article styleName="markdown markdown-article">
                    <h1>更新日志</h1>
                    <section styleName="markdown">
                        <h4>发布周期</h4>
                        <ul>
                            <li>
                                <p>修订版本号，有紧急的 bugfix，则任何时候都可发布</p>
                            </li>
                            <li>
                                <p>次版本号，有心情就发</p>
                            </li>
                            <li>
                                <p>主版本号，含有破坏性更新和新特性，不在发布周期内。</p>
                            </li>
                        </ul>
                    </section>
                </article>
                <Timeline>
                    {
                        changeLog.map((item, index) => {
                            return (
                                <Timeline.Item key={index}>
                                    <div styleName="content">
                                        <h2>{item.title}</h2>
                                        <p>
                                            <code>{item.date}</code>
                                        </p>
                                        <ul>
                                            {
                                                item.update && JSON.parse(item.update).map((item, index) => {
                                                    return (
                                                        <li key={index}>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </Timeline.Item>
                            )
                        })
                    }
                </Timeline>
                <LayoutFooter />
            </main>
        );
    }
}

export default Index;