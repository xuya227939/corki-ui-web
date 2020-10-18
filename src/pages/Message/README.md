```jsx
import { message, Button } from 'corki-ui';

const messageShow = () => {
    message.open('hello', 3);
}

ReactDOM.render(
    <Button type="primary" onClick={this.messageShow}>
        Display normal message
    </Button>,
    mountNode,
);
```