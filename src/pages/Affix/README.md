```jsx
import { Affix, Button } from 'corki-ui';

ReactDOM.render(
    <div>
        <Affix offsetTop={30}>
            <Button type="primary">
                Affix top
            </Button>
        </Affix>
    </div>,
    mountNode,
);
```