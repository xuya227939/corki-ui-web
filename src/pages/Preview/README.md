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
        return (
            <div>
                <Button type="primary" onClick={this.showPreview}>
                    Open Preview
                </Button>
                <Preview
                    url="sight-world.oss-cn-hangzhou.aliyuncs.com/corki-ui/corki-ui-logo.jpeg"
                    onClose={this.onClose}
                    visible={this.state.isShowPreView}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
```