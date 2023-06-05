import '../App.css';
import React, {useState, useEffect}  from "react";
import Header from "./Header";
import AlcoholList from "./AlcoholList"
import DrinkContainer from "./DrinkContainer"

function App() {
  //fetch for AlcoholList 
  //todo the site looks bad
  //todo submission field 
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


  return (
    <div className="App">
      <Header />
      <AlcoholList alcohols={alcohols} setDrinkFilter={setDrinkFilter}/>
      <DrinkContainer drinks={drinks} drinkFilter={drinkFilter}/>
    </div>
  );
}

export default App;
