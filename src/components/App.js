import '../App.css';
import React, {useState, useEffect}  from "react";
import Header from "./Header";
import AlcoholList from "./AlcoholList"
import DrinkContainer from "./DrinkContainer"

function App() {
  //fetch for AlcoholList 
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
      <DrinkContainer drinks={drinks}/>
    </div>
  );
}

export default App;
