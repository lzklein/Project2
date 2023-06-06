//each individual alcohol name & pic
//onClick set selectedAlcohol state or something to filter DrinkContainer
import React from 'react'

const Alcohol = ({alcohol, setDrinkFilter}) => {
  function handleAlcohol(){
    // console.log(alcohol)
    setDrinkFilter(alcohol);
  }
  return (
    <div >
      <div class={"card"} onClick={handleAlcohol}>
        <img src={`https://www.thecocktaildb.com/images/ingredients/${alcohol}-Small.png`} alt={alcohol.name} ></img>
        <h4 >{alcohol}</h4>
      </div>
    </div>
  )
}

export default Alcohol