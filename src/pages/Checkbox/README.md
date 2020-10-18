```jsx
import { Checkbox } from 'corki-ui';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

ReactDOM.render(
    <div>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <br />
        <Checkbox disabled />
        <br />
        <Checkbox checked={true} disabled>disabled</Checkbox>
    </div>,
mountNode);
```