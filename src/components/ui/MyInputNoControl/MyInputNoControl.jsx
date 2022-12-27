import React from "react";
import classes from "./MyInputNoControl.module.css"

const MyInputNoControl = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myInputNoControl} {...props} />
    )
});

export { MyInputNoControl }