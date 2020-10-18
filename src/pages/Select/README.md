```jsx
import { Select } from 'corki-ui';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

ReactDOM.render(
    <div>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
                Disabled
            </Option>
        </Select>
    </div>,
    mountNode,
);
```