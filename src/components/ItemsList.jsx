import React from "react";
import { Item } from "./Item";


const ItemsList = function ({ posts, title }) {
    return (
        <div className="items">
            <h2 style={{ fontSize: '36px', textAlign: 'center' }} >{title}</h2>
            {posts.map((post) => <Item post={post} key={post.id} />)}
        </div>
    )
}

export { ItemsList };