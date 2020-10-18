```jsx
import { VerificationCode } from 'corki-ui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getNumbers = (num) => {
        console.log(num);
    }

    render() {
        return (
            <div>
                <VerificationCode getNumbers={this.getNumbers} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
```