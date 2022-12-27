import React from 'react';
import { MyBtn } from './ui/MyBtn/MyBtn';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (<div>
            <h1>{this.state.count}</h1>
            <MyBtn onClick={this.increment}>IncrementClassBtn</MyBtn>
            <MyBtn onClick={this.decrement}>DecrementClassBtn</MyBtn>
        </div >);
    }

}

export { CounterClass };