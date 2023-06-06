import '../App.css';
import React, {useState, useEffect}  from "react";
import Header from "./Header";
import AlcoholList from "./AlcoholList";
import DrinkContainer from "./DrinkContainer";
import FeaturedDrink from "./FeaturedDrink";

function App() {
  //fetch for AlcoholList 
  //todo the site looks bad
  //todo light/dark mode
  //todo check api for any other features that can be added
  //random drink, can use random button to generate random drink with www.thecocktaildb.com/api/json/v1/1/random.php
  //or random drink loads right up top as "featured drink" each time loading in
  //or have the random drink be consistent, retrigger everyday for "drink of the day"

  //todo oh shit the ingredients totally came with pictures www.thecocktaildb.com/images/ingredients/gin-Small.png www.thecocktaildb.com/images/ingredients/gin-Medium.png
  //www.thecocktaildb.com/images/ingredients/gin.png can incoporate into AlcoholList or Alcohol it will look nicer

  const [drinkFilter, setDrinkFilter] = useState(""); 
  const [alcohols, setAlcohols] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    .then(r => r.json())
    .then(ingredientData => setAlcohols(ingredientData));
  }, [])

  //fetch when alcohol is chosen
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    // console.log(drinkFilter)
    if(!!drinkFilter){
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkFilter}`)
      .then(r => r.json())
      .then(drinkData => setDrinks(drinkData.drinks))
    }
  }, [drinkFilter])

  function addNewDrink(e){
    const newDrink={
      strDrink: e.target.name.value,
      strDrinkThumb: e.target.image.value,
      strIngredient1: e.target.ingredient1.value,
      strIngredient2: e.target.strIngredient2 ? e.target.ingredient2.value : null,
      strIngredient3: e.target.strIngredient3 ? e.target.ingredient3.value : null,
      strIngredient4: e.target.strIngredient4 ? e.target.ingredient4.value : null,
      strIngredient5: e.target.strIngredient5 ? e.target.ingredient5.value : null,
      strIngredient6: e.target.strIngredient6 ? e.target.ingredient6.value : null,
      strIngredient7: e.target.strIngredient7 ? e.target.ingredient7.value : null,
      strIngredient8: e.target.strIngredient8 ? e.target.ingredient8.value : null,
      strIngredient9: e.target.strIngredient9 ? e.target.ingredient9.value : null,
      strIngredient10: e.target.strIngredient10 ? e.target.ingredient10.value : null,
      strIngredient11: e.target.strIngredient11 ? e.target.ingredient11.value : null,
      strIngredient12: e.target.strIngredient12 ? e.target.ingredient12.value : null,
      strIngredient13: e.target.strIngredient13 ? e.target.ingredient13.value : null,
      strIngredient14: e.target.strIngredient14 ? e.target.ingredient14.value : null,
      strIngredient15: e.target.strIngredient15 ? e.target.ingredient15.value : null,
      strInstructions: e.target.instructions.value
    }
    console.log(newDrink)
    setDrinks([...drinks, newDrink])
  }

  return (
    <div className="App">
      <Header addNewDrink={addNewDrink}/>
      <FeaturedDrink />
      <AlcoholList alcohols={alcohols} setDrinkFilter={setDrinkFilter}/>
      <DrinkContainer drinks={drinks} drinkFilter={drinkFilter}/>
    </div>
  );
}

export default App;
