import './App.css';
import React, {useState, useEffect}  from "react";
import Header from "./Header";
import AlcoholList from "./AlcoholList"
import DrinkContainer from "./DrinkContainer"

function App() {
  // const [drinks, setDrinks] = useState([]);  <-- use this later can fetch onclick of alcohol or something
  //`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
  const [alcohol, setAlcohol] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    .then(r => r.json())
    .then(drinkData => setAlcohol(drinkData));
  }, [])

  return (
    <div className="App">
      <Header />
      <AlcoholList />
      <DrinkContainer />
    </div>
  );
}

export default App;
