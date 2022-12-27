import React, { useState } from 'react';
import { MyBtn } from './ui/MyBtn/MyBtn';

const Counter = function () {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (<div>
        <h1>{count}</h1>
        <MyBtn onClick={increment}>Increment</MyBtn>
        <MyBtn onClick={decrement}>Decrement</MyBtn>
    </div>);
}

export { Counter };