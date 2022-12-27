import React from "react";
import { Item } from "./Item";


const ItemsList = function ({ posts, title, removePost }) {
    if (!posts.length) {
        return <div style={{ fontSize: '22px', textAlign: 'center' }}>Посты не найдены</div>
    }
    return (
        <div className="items">
            <h2 style={{ fontSize: '36px', textAlign: 'center' }} >{title}</h2>
            {posts.map((post) => <Item removePost={removePost} post={post} key={post.id} />)}
        </div>
    )
}

export { ItemsList };