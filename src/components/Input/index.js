import React from "react"
import "./input.css"

const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <div className="container-input">
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  )
}

export default Input
