```jsx
import { Preview, Button } from 'corki-ui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPreView: false
        }
    }

    showPreview = () => {
        this.setState({
            isShowPreView: true
        });
    }

    onClose = () => {
        this.setState({
            isShowPreView: false
        });
    }

    render() {
        const { isShowPreView } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showPreview}>
                    Open Preview
                </Button>
                {
                    isShowPreView &&
                    <Preview
                        url="sight-world.oss-cn-hangzhou.aliyuncs.com/corki-ui/corki-ui-logo.jpeg"
                        onClose={this.onClose}
                    />
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
```