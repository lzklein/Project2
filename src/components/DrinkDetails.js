//expanded drink, all details in a card
import React, {useState} from 'react'
import Drink from "./Drink"

const DrinkDetails = ({drink}) => {
  const [expanded, setExpanded] = useState(false);
  function handleExpand(){
    setExpanded(!expanded);
  }
  return (
    <div onClick={handleExpand}>
      {drink.strDrink}
      {expanded ? <Drink drink={drink}/> : null}
    </div>
  )
}

export default DrinkDetails