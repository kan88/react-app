import React from "react";

const MySelect = function () {
    return (
        <div>
            <select name="sort">
                <option value="value1">По возрастанию</option>
                <option value="value2">По убыванию</option>
            </select>
        </div>
    )
}

export { MySelect }