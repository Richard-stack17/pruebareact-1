import React from 'react'

const BtnQuote = ({objStyleBtn,handleClick}) => {
  return (
    <button style={objStyleBtn} className='card__btn fa-solid fa-arrow-right' onClick={handleClick}></button>
  )
}

export default BtnQuote