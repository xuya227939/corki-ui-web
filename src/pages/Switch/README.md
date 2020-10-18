```jsx
import { Switch } from 'corki-ui';

class App extends React.Component {
    state = { };

    render() {
        return (
            <div>
                <Switch defaultChecked />
                <br />
                <Switch
                    disabled
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
```