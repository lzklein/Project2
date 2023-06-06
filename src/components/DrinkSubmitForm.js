//submit form for new drinks
import React from 'react'

const DrinkSubmitForm = ({addNewDrink}) => {
//when pushing the + button, create another input for ingredient up to 15 max <--
//each on has id of strIngredient but increment the number after up so strIngredient 2, then strIngredient 3 etc <--
//add dropdown selection of alcohol to put into category <--
//todo react router for NEW or CREATE
  function handleAdd(){
      return <input placeholder="ingredient"></input>
  }

  function handleSubmit(e){
    e.preventDefault();
    addNewDrink(e)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="name" id="name"></input>
        <input placeholder="image" id="image"></input>
        <input placeholder="ingredient" id="ingredient1"></input>
        <button onClick={handleAdd}>+</button>
        <input placeholder="instructions" id="instructions"></input>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default DrinkSubmitForm