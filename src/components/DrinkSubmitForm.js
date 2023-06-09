//submit form for new drinks
import React from 'react'

const DrinkSubmitForm = ({addNewDrink}) => {
//when pushing the + button, create another input for ingredient up to 15 max <--
//each on has id of strIngredient but increment the number after up so strIngredient 2, then strIngredient 3 etc <--
//add dropdown selection of alcohol to put into category <--
//todo react router for NEW or CREATE

  // function handleAdd(){
  //     return <input placeholder="ingredient"></input>
  // }

  function handleSubmit(e){
    e.preventDefault();
    addNewDrink(e)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="name" id="name"></input>
        <input placeholder="image" id="image"></input>
        <input placeholder="ingredient 1" id="ingredient1"></input>
        <input placeholder="ingredient 2" id="ingredient2"></input>
        <input placeholder="ingredient 3" id="ingredient3"></input>
        <input placeholder="ingredient 4" id="ingredient4"></input>
        {/* <button onClick={handleAdd}>+</button> */}
        <input placeholder="instructions" id="instructions"></input>
        <select id="alcohol">
          <option>Select Main Liquor</option>
          <option>Light rum</option>
          <option>Dark rum</option>
          <option>Scotch</option>
          <option>Brandy</option>
          <option>Bourbon</option>
          <option>Tequila</option>
          <option>Vodka</option>
          <option>Gin</option>
        </select>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default DrinkSubmitForm