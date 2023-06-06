//all the alcohol to be used to load drinks
//map alcohol.js in a grid
import React from 'react'
import Alcohol from "./Alcohol"

const AlcoholList = ({alcohols, setDrinkFilter}) => {
//all the alcohol listed out, click to generate list containing that drink
//todo stretch combine similar like bourbon and whiskey into 1 category?
//todo turn into react routing INDEX
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
          drink.strIngredient1 == "Lager" || 
          // drink.strIngredient1 == "Cognac" || 
          drink.strIngredient1 == "Everclear" ||
          drink.strIngredient1 == "Light rum" 
          // drink.strIngredient1 == "Whiskey" 
          // drink.strIngredient1 == "Ale" ||
          // drink.strIngredient1 == "Amaretto"
        });
        return alcoholic.map((alcohol) => {return (
          <div class={"card-container"}>
            <Alcohol alcohol={alcohol.strIngredient1} key={alcohol.strIngredient1} setDrinkFilter={setDrinkFilter}/>
          </div>
        )})
      }
    }

  return (
    <div>{renderAlcohol()}</div>
  )
}

export default AlcoholList