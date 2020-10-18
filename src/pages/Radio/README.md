```jsx
import { Radio } from 'corki-ui';

class App extends React.Component {
    state = { 
        checked: true
    };

    onChange = (e) => {
        this.setState({
            checked: !e
        });
    }

    render() {
        return (
            <div>
                <Switch checked={this.state.checked} onChange={this.onChange} />
                <br />
                <Switch disabled/>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
```