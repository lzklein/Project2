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
  const [drinks, setDrinks] = useState([])

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
    if(!! e.target.name.value && !! e.target.image.value&& !! e.target.ingredient1.value && !! e.target.instructions.value && e.target.alcohol.value != "Select Main Liquor"){
    // if(!! e.target.name.value && e.target.alcohol.value != "Select Main Liquor"){
      const newDrink={
        strDrink: e.target.name.value,
        strDrinkThumb: e.target.image.value,
        strIngredient1: !!e.target.ingredient1.value ? e.target.ingredient1.value : null,
        strIngredient2: !!e.target.ingredient2.value ? e.target.ingredient2.value : null,
        strIngredient3: !!e.target.ingredient3.value ? e.target.ingredient3.value : null,
        strIngredient4: !!e.target.ingredient4.value ? e.target.ingredient4.value : null,
        strInstructions: e.target.instructions.value
      }
      console.log(newDrink)
      fetch(`http://localhost:3000/${e.target.alcohol.value}`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body:JSON.stringify(newDrink)
      })
      .then(r => r.json())
      .then(newDrinkData => setDrinks([...drinks, newDrinkData]))
    }
    else{
      alert("fill out the form correctly")
    }

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
        <Route path="/Light rum">
          <LightRum alcohol={alcohols[0]}loaded={loaded} setDrinks={setDrinks} drinks={drinks}/>
        </Route>
        <Route path="/Dark rum">
          <DarkRum alcohol={alcohols[1]}loaded={loaded} setDrinks={setDrinks} drinks={drinks}/>
        </Route>
        <Route path="/Scotch">
          <Scotch alcohol={alcohols[2]}loaded={loaded} setDrinks={setDrinks} drinks={drinks}/>
        </Route>
        <Route path="/Brandy">
          <Brandy alcohol={alcohols[3]}loaded={loaded} setDrinks={setDrinks} drinks={drinks}/>
        </Route>
        <Route path="/Bourbon">
          <Bourbon alcohol={alcohols[4]} loaded={loaded} setDrinks={setDrinks} drinks={drinks}/>
        </Route>
        <Route path="/Tequila">
          <Tequila alcohol={alcohols[5]}loaded={loaded} setDrinks={setDrinks} drinks={drinks}/>
        </Route>
        <Route path="/Vodka">
          <Vodka alcohol={alcohols[6]}loaded={loaded} setDrinks={setDrinks} drinks={drinks}/>
        </Route>
        <Route path="/Gin">
          <Gin alcohol={alcohols[7]}loaded={loaded} setDrinks={setDrinks} drinks={drinks}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
