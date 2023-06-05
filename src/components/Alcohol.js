//each individual alcohol name & pic
//onClick set selectedAlcohol state or something to filter DrinkContainer
import React from 'react'

const Alcohol = ({alcohol, setDrinkFilter}) => {
  function handleAlcohol(){
    // console.log(alcohol)
    setDrinkFilter(alcohol);
  }
  return (
    <span>
      <button onClick={handleAlcohol}>{alcohol}</button>
    </span>
  )
}

export default Alcohol