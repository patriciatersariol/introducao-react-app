import React from "react"
import "./input.css"

const Input = ({ placeholder }) => {
  return (
    <div className="container-input">
      <input className="input" placeholder={placeholder}></input>
    </div>
  )
}

export default Input
