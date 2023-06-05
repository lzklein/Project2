//submit form for new drinks
import React from 'react'

const DrinkSubmitForm = () => {
//when pushing the + button, create another input for ingredient up to 15 max <--
//each on has id of strIngredient but increment the number after up so strIngredient 2, then strIngredient 3 etc <--
//add dropdown selection of alcohol to put into category <--
//todo react router for NEW or CREATE
  function handleAdd(){
      return <input placeholder="ingredient"></input>
  }
  
  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <div>
      <input placeholder="name" id="strDrink"></input>
      <input placeholder="picture" id="strDrinkThumb"></input>
      <input placeholder="ingredient" id="strIngredient1"></input>
      <button onClick={handleAdd}>+</button>
      <input placeholder="instructions" id="strInstructions"></input>
      <button onSubmit={handleSubmit}>Submit</button>
    </div>
  )
}

export default DrinkSubmitForm