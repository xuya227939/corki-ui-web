import React, { Component } from 'react';
import { Tooltip, Button } from 'corki-ui';
import BasicComponents from '../../components/BasicComponents/index';
import README from './README.md';
import './index.less';

class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { history } = this.props;
        return (
            <BasicComponents history={history} README={README}>
                <div styleName="tooltip">
                    <div style={{ marginLeft: '70px', whiteSpace: 'nowrap' }}>
                        <Tooltip placement="top-start" title="prompt text">
                            <Button styleName="top-btn">TL</Button>
                        </Tooltip>
                        <Tooltip placement="top" title="prompt text">
                            <Button styleName="top-btn">TOP</Button>
                        </Tooltip>
                        <Tooltip placement="top-end" title="prompt text">
                            <Button styleName="top-btn">TR</Button>
                        </Tooltip>
                    </div>
                    <div style={{ float: 'left', width: '70px', marginLeft: '10px' }}>
                        <Tooltip placement="left-start" title="prompt text">
                            <Button styleName="left-btn">LT</Button>
                        </Tooltip>
                        <Tooltip placement="left" title="prompt text">
                            <Button styleName="left-btn">LEFT</Button>
                        </Tooltip>
                        <Tooltip placement="left-end" title="prompt text">
                            <Button styleName="left-btn">LB</Button>
                        </Tooltip>
                    </div>
                    <div style={{ width: '70px', marginLeft: '280px' }}>
                        <Tooltip placement="right-start" title="prompt text">
                            <Button styleName="right-btn">RT</Button>
                        </Tooltip>
                        <Tooltip placement="right" title="prompt text">
                            <Button styleName="right-btn">Right</Button>
                        </Tooltip>
                        <Tooltip placement="right-end" title="prompt text">
                            <Button styleName="right-btn">RB</Button>
                        </Tooltip>
                    </div>
                    <div style={{ clear: 'both', marginLeft: '70px', whiteSpace: 'nowrap' }}>
                        <Tooltip placement="bottom-start" title="prompt text">
                            <Button styleName="bottom-btn">BL</Button>
                        </Tooltip>
                        <Tooltip placement="bottom" title="prompt text">
                            <Button styleName="bottom-btn">Bottom</Button>
                        </Tooltip>
                        <Tooltip placement="bottom-end" title="prompt text">
                            <Button styleName="bottom-btn">BR</Button>
                        </Tooltip>
                    </div>
                </div>
            </BasicComponents>
        );
    }
}

export default Index;