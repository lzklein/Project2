//the full drink list container
//filter and map Drink to here
//return (showDrink ? <DrinkDetails /> : null)
import React from 'react'
import DrinkDetails from "./DrinkDetails"
import DrinkSearchBar from "./DrinkSearchBar"

const DrinkContainer = ({drinks}) => {
  console.log(drinks);
  
  return (
    <div>DrinkContainer</div>
  )
}

export default DrinkContainer