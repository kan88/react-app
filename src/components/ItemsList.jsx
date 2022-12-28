import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Item } from "./Item";


const ItemsList = function ({ posts, title, removePost }) {
    if (!posts.length) {
        return <div style={{ fontSize: '22px', textAlign: 'center' }}>Посты не найдены</div>
    }
    return (
        <div className="items">
            <h2 style={{ fontSize: '36px', textAlign: 'center' }} >{title}</h2>
            <TransitionGroup>
                {posts.map((post) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Item removePost={removePost} post={post} key={post.id} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export { ItemsList };