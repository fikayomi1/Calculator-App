import React from "react";
import "./Bottom.css"

export default function BottomComponent({handleClick}) {
    return (
      <div className="Btm-Component">
        <input type="button" value="C" onClick={handleClick} id="operator1"></input>
        <input type="button" value="DEL" onClick={handleClick} id="operator1"></input>
        <input type="button" value="." onClick={handleClick} id="operator"></input>
        <input type="button" value="+" onClick={handleClick} id="operator"></input>
        
        <input type="button" value="0" onClick={handleClick}></input>
        <input type="button" value="(" onClick={handleClick} id="operator"></input>
        <input type="button" value=")" onClick={handleClick} id="operator"></input>
        <input type="button" value="/" onClick={handleClick} id="operator"></input>

        <input type="button" value="7" onClick={handleClick}></input>
        <input type="button" value="8" onClick={handleClick}></input>
        <input type="button" value="9" onClick={handleClick}></input>
        <input type="button" value="*" onClick={handleClick} id="operator"></input>

        <input type="button" value="4" onClick={handleClick}></input>
        <input type="button" value="5" onClick={handleClick}></input>
        <input type="button" value="6" onClick={handleClick}></input>
        <input type="button" value="-" onClick={handleClick} id="operator"></input>


        <input type="button" value="1" onClick={handleClick}></input>
        <input type="button" value="2" onClick={handleClick}></input>
        <input type="button" value="3" onClick={handleClick}></input>
        <input type="button" value="=" onClick={handleClick} id="operator1"></input>
        
        
      </div>
    )
  }