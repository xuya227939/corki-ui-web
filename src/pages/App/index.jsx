import React, { Component } from "react";
import { createHashHistory } from "history";
import LayoutHead from "../../components/Layout/LayoutHead.js";
import "./index.less";

const history = createHashHistory();
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="layout">
        <LayoutHead history={history} />
        <div styleName="layout-hero">
          <h1>corki-ui</h1>
          <div>
            <div styleName="markdown">
              <p>
                基于 Ant Design 设计体系的 React UI
                组件库，主要用于研发企业级中后台产品
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => history.push("/components/introduce")}
          >
            快速上手
          </button>
        </div>
        <div styleName="layout-features">
          <dl>
            <dt>企业级</dt>
            <dd>
              <div styleName="markdown">
                <p>企业级中后台产品的交互语言和视觉风格</p>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>React 组件</dt>
            <dd>
              <div styleName="markdown">
                <p>开箱即用的高质量 React 组件</p>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>细节</dt>
            <dd>
              <div styleName="markdown">
                <p>深入每个细节的主题定制能力</p>
              </div>
            </dd>
          </dl>
        </div>
        <div styleName="layout-content">
          <div styleName="markdown">
            <h2 id="三分钟上手-umi">
              <a aria-hidden="true" href="#三分钟上手-umi">
                <span></span>
              </a>
              快速上手 corki-ui
            </h2>
            <p>获取项目，</p>
          </div>
          <div styleName="code-block">
            <pre styleName="prism-code">
              <div styleName="token-line">
                <span styleName="token comment"># 克隆项目</span>
                <span styleName="token plain"></span>
              </div>
              <div styleName="token-line">
                <span styleName="token plain">$ </span>
                <span styleName="token plain">
                  git clone https://github.com/Cherry-Team/corki-ui-web.git{" "}
                </span>
                <span styleName="token operator">&amp;&amp;</span>
                <span styleName="token plain"> </span>
                <span styleName="token builtin class-name">cd</span>
                <span styleName="token plain"> corki-ui-web</span>
              </div>
              <div styleName="token-line">
                <span styleName="token plain"></span>
              </div>
              <div styleName="token-line">
                <span styleName="token plain"></span>
                <span styleName="token comment"># 安装依赖</span>
                <span styleName="token plain"></span>
              </div>
              <div styleName="token-line">
                <span styleName="token plain">$ </span>
                <span styleName="token function">cnpm</span>
                <span styleName="token plain"> </span>
                <span styleName="token function">i</span>
                {/* <span styleName="token plain"> umi</span> */}
              </div>
              <div styleName="token-line">
                <span styleName="token plain"></span>
              </div>
              {/* <div styleName="token-line">
                                <span styleName="token plain"></span>
                                <span styleName="token comment"># 创建页面</span>
                                <span styleName="token plain"></span>
                            </div>
                            <div styleName="token-line">
                                <span styleName="token plain">$ npx umi g page index --typescript --less</span>
                            </div>
                            <div styleName="token-line">
                                <span styleName="token plain"></span>
                            </div> */}
              <div styleName="token-line">
                <span styleName="token plain"></span>
                <span styleName="token comment"># 启动开发</span>
                <span styleName="token plain"></span>
              </div>
              <div styleName="token-line">
                <span styleName="token plain">$ npm start</span>
              </div>
              <div styleName="token-line">
                <span styleName="token plain"></span>
              </div>
            </pre>
          </div>
        </div>
        <footer styleName="layout-footer">
          <p>
            <a
              styleName="layoutfooter-icon icon-github"
              href="//github.com/xuya227939/corki-ui"
              target="_blank"
            />
          </p>
          <p>Copyright © 2019 - {new Date().getFullYear()} Cherry Team</p>
        </footer>
      </div>
    );
  }
}

export default Index;
