import React from "react";


const Item = function (props) {
    return (
        <div className="item">
            <h2 className="item__title">{props.post.title}</h2>
            <h3 className="item__id">{props.post.id}</h3>
            <p className="item__description">{props.post.description}</p>
            <button className="item__btn">Remove</button>
        </div>
    )
}

export { Item };