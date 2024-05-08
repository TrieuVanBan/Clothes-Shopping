import React from 'react'

function Button(props: any) {
  const { lable, onClick, buttonCss, icon } = props
  return (
    <>
      <button onClick={onClick} className={buttonCss}>{icon}{lable}</button>
    </>
  )
}

export default Button
