import React from "react";
import classes from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
    const classStatus = [classes.modal]
    if (visible) {
        classStatus.push(classes.active)
    }

    return (
        <div className={classStatus.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export { MyModal }