```jsx
import { Tag } from 'corki-ui';

class App extends React.Component {
    state = { };

    render() {
        return (
            <div>
                <Tag>Tag</Tag>
                <Tag color="red">red</Tag>
                <Tag color="green">green</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
```