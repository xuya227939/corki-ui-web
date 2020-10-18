```jsx
import { Button } from 'corki-ui';

ReactDOM.render(
    <div>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button disabled>Disabled</Button>
        <Button type="danger">Danger</Button>
    </div>,
    mountNode,
);
```