//the full drink list container
//filter and map Drink to here
//return (showDrink ? <DrinkDetails /> : null)
import React, {useState} from 'react'
import DrinkDetails from "./DrinkDetails"
import DrinkSearchBar from "./DrinkSearchBar"

const DrinkContainer = ({drinks}) => {
  const [searchContent, setSearchContent] = useState("");
  // console.log(drinks);
  function renderDrinks(){
    return drinks
      .filter((drink) => drink.strDrink.toLowerCase().includes(searchContent.toLowerCase()))
      .map((drink) => {return(
      <DrinkDetails drink={drink} key={drink.idDrink}/>
    )})
  }
  return (
    <div>
      <DrinkSearchBar setSearchContent={setSearchContent}/>
      {renderDrinks()}
    </div>
  )
}

export default DrinkContainer