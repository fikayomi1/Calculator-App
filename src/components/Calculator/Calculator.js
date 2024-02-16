import React, { useState } from 'react'
import "./Calculator.css"
import TopComponent from '../Top/Top';
import BottomComponent from '../Bottom/Bottom';

//Calculator App

export default function SimpleCalculatorApp(props) {
  const [userInput, setInput] = useState("");
  const [userResult, setResult] = useState("");

  const handleClick = (event) => {
    const value = event.target.value;
    let myanswer;
    if (value === "C") {
      setInput("")
      setResult("")
    }
    else if (value === "=") {
      // eslint-disable-next-line
      myanswer = eval(userInput)
      console.log(myanswer)
      setResult(myanswer)
      // setResult(res)
    }
    else if (value === "DEL") {
      if (userInput !== "") {
        setInput(userInput.substr(0, userInput.length - 1))
        setResult("")
      }

    }
    else {
      setInput(userInput.concat(value))
    }

  }
  return (
    <div className="Calc-frame">
      
      <TopComponent user={userInput} answer={userResult} />
      <BottomComponent handleClick ={handleClick}/>
    </div>
  )
}



