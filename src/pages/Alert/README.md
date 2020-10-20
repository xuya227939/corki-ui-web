```jsx
import { Alert } from 'corki-ui';

ReactDOM.render(
    <>
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
    </>,
    mountNode,
);
```