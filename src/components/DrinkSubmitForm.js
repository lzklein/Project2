//submit form for new drinks
import React from 'react'

const DrinkSubmitForm = () => {

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