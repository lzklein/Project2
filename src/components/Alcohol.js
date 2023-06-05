//each individual alcohol name & pic
//onClick set selectedAlcohol state or something to filter DrinkContainer
import React from 'react'

const Alcohol = ({alcohol}) => {
  return (
    <span>
      <button>{alcohol}</button>
    </span>
  )
}

export default Alcohol