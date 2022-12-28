import React, { useState } from "react";
import { MyBtn } from "./ui/MyBtn/MyBtn";
import { MyInput } from "./ui/MyInput/MyInput";

const FormCallBack = function ({ createPost }) {
    //задаем начальное значение состояния
    const [post, setPost] = useState({ title: '', description: '' })
    function addNewPost(evt) {
        evt.preventDefault()
        const newPost = { ...post, id: Date.now() }
        createPost(newPost)
        setPost({ title: '', description: '' })
    }

    return (
        <form className="form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <legend>CB Форма с управляемыми инпутами</legend>
            <MyInput onChange={(evt) => setPost({ ...post, title: evt.target.value })} name="title" placeholder="Название поста" value={post.title} />
            <MyInput onChange={(evt) => setPost({ ...post, description: evt.target.value })} name="description" placeholder="Описание поста" value={post.description} />
            <MyBtn type="submit" onClick={addNewPost}>Submit</MyBtn>
        </form>
    )
}

export { FormCallBack };