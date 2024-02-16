import React from "react";
import "./Top.css"

export default function TopComponent(props) {
    return (
        <div className="Top-Component">       
            <input id='Answer' type="text" value={props.answer} readOnly ></input> <br></br>
            <input id='Question' type="text" value={props.user} readOnly ></input>          
        </div>
    )
}