import '../App.css';
import React, {useState, useEffect}  from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import AlcoholList from "./AlcoholList";
import Gin from "./Gin";
import LightRum from "./LightRum";
import DarkRum from "./DarkRum";
import Scotch from "./Scotch";
import Brandy from "./Brandy";
import Tequila from "./Tequila";
import Vodka from "./Vodka";
import Bourbon from "./Bourbon";
// import FeaturedDrink from "./FeaturedDrink";

function App() {
  const [alcohols, setAlcohols] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/Alcohol")
    .then(r => r.json())
    .then(ingredientData => {
      setAlcohols(ingredientData)
      setLoaded(true);
    });
  }, [])

  // //fetch when alcohol is chosen
  // const [drinkFilter, setDrinkFilter] = useState(""); 
  // const [drinks, setDrinks] = useState([]);
  // useEffect(() => {
  //   // console.log(drinkFilter)
  //   if(!!drinkFilter){
  //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkFilter}`)
  //     .then(r => r.json())
  //     .then(drinkData => setDrinks(drinkData.drinks))
  //   }
  // }, [drinkFilter])

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
    setAlcohols([...alcohols, newDrink])
  }

  // function renderRoute(){
  //   alcohols.map((alcohol) => {
  //     return(
  //       <Route path={`/Alcohol/${alcohol.name}`}>
  //         <DrinkContainer alcohol={alcohol}/>
  //       </Route>
  //     )
  //   })
    
  // }


  return (
    <div className="App">
      <Header addNewDrink={addNewDrink}/>
      {/* <FeaturedDrink /> */}
      <AlcoholList alcohols={alcohols}/>
      <Switch>
        <Route path="/Alcohol/Light rum">
          <LightRum alcohol={alcohols[0]}loaded={loaded}/>
        </Route>
        <Route path="/Alcohol/Dark rum">
          <DarkRum alcohol={alcohols[1]}loaded={loaded}/>
        </Route>
        <Route path="/Alcohol/Scotch">
          <Scotch alcohol={alcohols[2]}loaded={loaded}/>
        </Route>
        <Route path="/Alcohol/Brandy">
          <Brandy alcohol={alcohols[3]}loaded={loaded}/>
        </Route>
        <Route path="/Alcohol/Bourbon">
          <Bourbon alcohol={alcohols[4]} loaded={loaded}/>
        </Route>
        <Route path="/Alcohol/Tequila">
          <Tequila alcohol={alcohols[5]}loaded={loaded}/>
        </Route>
        <Route path="/Alcohol/Vodka">
          <Vodka alcohol={alcohols[6]}loaded={loaded}/>
        </Route>
        <Route path="/Alcohol/Gin">
          <Gin alcohol={alcohols[7]}loaded={loaded}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
