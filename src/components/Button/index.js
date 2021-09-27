import React from "react"
import "./button.css"

const Button = ({ text, classe, onClick }) => {
  return (
    <button className={`btn ${classe}`} onClick={onClick} > {text}</button>
  )
}

export default Button
