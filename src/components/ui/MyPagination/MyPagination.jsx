import React from "react";
import { getPagesArray } from "../../../utils/pages";

const MyPagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className='page__btn-wrapper'>
            {pagesArray.map((data) =>
                <span className={page === data ? 'page__btn page__btn--current' : 'page__btn'} onClick={() => changePage(data)} key={data}>{data}</span>
            )}
        </div>

    )
}

export { MyPagination }