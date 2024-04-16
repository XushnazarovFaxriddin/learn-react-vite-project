import React from 'react'
import './input.css'

const Input = ({ 
    type = "text", 
    placeholder = "Enter text ...", 
    value,
    setValue 
}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
  )
}

export default Input