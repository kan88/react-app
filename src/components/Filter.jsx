import React from "react";
import { MyInput } from "./ui/MyInput/MyInput";
import { MySelect } from "./ui/MySelect/MySelect";


const Filter = function ({ filter, setFilter }) {
    return (
        <div className="filter">
            <MyInput placeholder='Поиск по списку' value={filter.query} onChange={(evt) => setFilter({ ...filter, query: evt.target.value })} />
            <hr style={{ margin: '15px 0' }}></hr>
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='нет сортировки'
                props={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                ]} />
        </div>
    )
}

export { Filter };