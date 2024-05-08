import React from 'react'

function Input(props: any) {
  const { type, onChange, value, placeholder, inputCss, onFocus, onBlur } = props
  return (
    <>
      <input type={type} onChange={onChange} value={value} onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} className={`outline-none ${inputCss}`} />
    </>
  )
}

export default Input
