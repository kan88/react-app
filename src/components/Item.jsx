import React from "react";
import { MyBtn } from "./ui/MyBtn/MyBtn";


const Item = function (props) {

    return (
        < div className="item" >
            <span className="item__id">{props.post.id}</span>
            <h2 className="item__title">{props.post.title}</h2>
            <p className="item__description">{props.post.body}</p>
            <MyBtn onClick={() => props.removePost(props.post)} className="item__btn">Remove</MyBtn>
        </ div >
    )
}

export { Item };