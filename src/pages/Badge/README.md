```jsx
import { Badge } from 'corki-ui';

ReactDOM.render(
    <div>
        <span styleName="span-badge">
            <Badge count={5}>
                <div styleName="block"></div>
            </Badge>
        </span>
        <Badge count={5} overflowCount="99" type="danger">
            <div styleName="block"></div>
        </Badge>
    </div>
    <div>
        <Badge count={5} type="info" />
    </div>,
    mountNode,
);
```