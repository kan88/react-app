import React, { useState } from 'react';

const Input = function () {
    const [text, setText] = useState('text')

    const changeValue = (evt => {
        setText(evt.target.value)
    })
    return (<div>
        <h2>{text}</h2>
        <input type="text" value={text} onChange={changeValue}></input>
    </div>);
}

export { Input };