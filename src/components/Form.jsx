import React, { useState } from "react";
import { MyBtn } from "./ui/MyBtn/MyBtn";
import { MyInput } from "./ui/MyInput/MyInput";

const Form = function (props) {
    //задаем начальное значение состояния
    const [post, setPost] = useState({ title: '', description: '' })
    function addNewPost(evt) {
        evt.preventDefault()
        props.state([...props.posts, { ...post, id: Date.now() }])
        setPost({ title: '', description: '' })
    }

    return (
        <form className="form">
            <legend>Форма с управляемыми инпутами с передачей пропсов детям</legend>
            <MyInput onChange={(evt) => setPost({ ...post, title: evt.target.value })} name="title" placeholder="Название поста" value={post.title} />
            <MyInput onChange={(evt) => setPost({ ...post, description: evt.target.value })} name="description" placeholder="Описание поста" value={post.description} />
            <MyBtn onClick={addNewPost}>Submit</MyBtn>
        </form>
    )
}

export { Form };