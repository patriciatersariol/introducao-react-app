import React from "react"
import "./input.css"

const Input = ({ placeholder, type }) => {
  return (
    <div className="container-input">
      <input className="input" placeholder={placeholder} type={type}></input>
    </div>
  )
}

export default Input
