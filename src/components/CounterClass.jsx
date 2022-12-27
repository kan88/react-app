import React from 'react';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log(this)
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
            <button onClick={this.increment}>IncrementClass</button>
            <button onClick={this.decrement}>DecrementClass</button>
        </div >);
    }

}

export { CounterClass };