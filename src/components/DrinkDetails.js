//expanded drink, all details in a card
import React from 'react'

const DrinkDetails = ({drink}) => {
  console.log(drink)
  return (
    <div>
      {drink.strDrink}
    </div>
  )
}

export default DrinkDetails