import React from "react";
import classes from "./MyLoader.module.css"

function MyLoader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className={classes.loader}></div>
        </div>
    )
}

export { MyLoader }