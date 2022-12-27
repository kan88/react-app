import React from "react";

const MySelect = function ({ props, defaultValue, value, onChange }) {
    return (
        <select
            name="sort"
            value={value}
            onChange={(evt) => onChange(evt.target.value)}
        >
            <option disabled value="value1">{defaultValue}</option>
            {props.map((prop) => {
                return <option key={prop.value} value={prop.value} > {prop.name}</option>
            })}
        </select >
    )
}

export { MySelect }