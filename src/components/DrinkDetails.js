//expanded drink, all details in a card
import React, {useState} from 'react'
import Drink from "./Drink"

const DrinkDetails = ({drink}) => {
  //each drink name in a list, click to expand into drink details
  //todo make into a client-side route for Show
  const [expanded, setExpanded] = useState(false);
  function handleExpand(){
    setExpanded(!expanded);
  }
  return (
    <div>
      <h4 onClick={handleExpand}>{drink.strDrink}</h4>
     
      {expanded ? <Drink drink={drink}/> : null}
    </div>
  )
}

export default DrinkDetails