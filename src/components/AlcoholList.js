//all the alcohol to be used to load drinks
//map alcohol.js in a grid
import React from 'react'
import Alcohol from "./Alcohol"

const AlcoholList = ({alcohols, setDrinkFilter}) => {
  const {drinks} = alcohols;

    function renderAlcohol(){
      if(!!drinks){
        const alcoholic = drinks.filter((drink) => {
          return drink.strIngredient1 == "Gin" || 
          drink.strIngredient1 == "Dark rum" || 
          drink.strIngredient1 == "Vodka" || 
          drink.strIngredient1 == "Tequila" || 
          drink.strIngredient1 == "Bourbon" || 
          drink.strIngredient1 == "Scotch" || 
          drink.strIngredient1 == "Brandy" || 
          drink.strIngredient1 == "Champagne" || 
          drink.strIngredient1 == "Red wine" || 
          drink.strIngredient1 == "Sherry" || 
          drink.strIngredient1 == "Cognac" || 
          drink.strIngredient1 == "Everclear" ||
          drink.strIngredient1 == "Lager" || 
          drink.strIngredient1 == "Whiskey" || 
          drink.strIngredient1 == "Ale"
        });
        return alcoholic.map((alcohol) => {return (
            <Alcohol alcohol={alcohol.strIngredient1} key={alcohol.strIngredient1} setDrinkFilter={setDrinkFilter}/>
        )})
      }
    }

  return (
    <div>{renderAlcohol()}</div>
  )
}

export default AlcoholList