import React, { useRef } from "react";
import { MyBtn } from "./ui/MyBtn/MyBtn";
import { MyInputNoControl } from "./ui/MyInputNoControl/MyInputNoControl";

const FormRef = function () {
    const bodyInputRefNoControl = useRef()
    const bodyInputRef = useRef()
    function addNewPost(evt) {
        evt.preventDefault()
        console.log(bodyInputRefNoControl.current.value, bodyInputRef.current.value)
        bodyInputRefNoControl.current.value = ''
        bodyInputRef.current.value = ''
    }

    return (
        <form className="form">
            <legend>Форма с неуправляемыми инпутами</legend>
            <MyInputNoControl ref={bodyInputRefNoControl} name="description" placeholder="Описание поста" />
            <input className="usual-input" ref={bodyInputRef}></input>
            <MyBtn onClick={addNewPost}>Submit</MyBtn>
        </form>
    )
}

export { FormRef };