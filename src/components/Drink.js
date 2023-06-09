//each individual drink, probably just the name
//onClick toggle state to show DrinkDetails
import React, {useState, useEffect} from 'react'

const Drink = ({drink}) => {
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [language, setLanguage] = useState("");
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.id}`)
    .then(r => r.json())
    .then(drinkData => setDrinkDetails(drinkData.drinks[0]))
  }, [])

  function handleLanguage(e){
    setLanguage(e.target.value)
  }

  console.log(drinkDetails)
//maybe a for loop or something to iterate the ingredients and measurements, stop when it reads null because each after will also be null
//reference how the language selection is done for how to write the object path
  return (
    <div>
      <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink} width={300} height={300}/>
      <ul>Ingredients :</ul>
      {drinkDetails.strIngredient1 ? <li>{drinkDetails.strMeasure1} {drinkDetails.strIngredient1}</li> : null}
      {drinkDetails.strIngredient2 ? <li>{drinkDetails.strMeasure2} {drinkDetails.strIngredient2}</li> : null}
      {drinkDetails.strIngredient3 ? <li>{drinkDetails.strMeasure3} {drinkDetails.strIngredient3}</li> : null}
      {drinkDetails.strIngredient4 ? <li>{drinkDetails.strMeasure4} {drinkDetails.strIngredient4}</li> : null}
      {drinkDetails.strIngredient5 ? <li>{drinkDetails.strMeasure5} {drinkDetails.strIngredient5}</li> : null}
      {drinkDetails.strIngredient6 ? <li>{drinkDetails.strMeasure6} {drinkDetails.strIngredient6}</li> : null}
      {drinkDetails.strIngredient7 ? <li>{drinkDetails.strMeasure7} {drinkDetails.strIngredient7}</li> : null}
      {drinkDetails.strIngredient8 ? <li>{drinkDetails.strMeasure8} {drinkDetails.strIngredient8}</li> : null}
      {drinkDetails.strIngredient9 ? <li>{drinkDetails.strMeasure9} {drinkDetails.strIngredient9}</li> : null}
      {drinkDetails.strIngredient10 ? <li>{drinkDetails.strMeasure10} {drinkDetails.strIngredient10}</li> : null}
      {drinkDetails.strIngredient11 ? <li>{drinkDetails.strMeasure11} {drinkDetails.strIngredient11}</li> : null}
      {drinkDetails.strIngredient12 ? <li>{drinkDetails.strMeasure12} {drinkDetails.strIngredient12}</li> : null}
      {drinkDetails.strIngredient13 ? <li>{drinkDetails.strMeasure13} {drinkDetails.strIngredient13}</li> : null}
      {drinkDetails.strIngredient14 ? <li>{drinkDetails.strMeasure14} {drinkDetails.strIngredient14}</li> : null}
      {drinkDetails.strIngredient15 ? <li>{drinkDetails.strMeasure15} {drinkDetails.strIngredient15}</li> : null}

      <h4>How to Make</h4>
      <select name="language" id="language" onChange={handleLanguage}>
        {drinkDetails.strInstructions ?  <option value="">English</option> : null}
        {drinkDetails.strInstructionsDE ? <option value="DE">Deutsch</option> : null}
        {drinkDetails.strInstructionsIT ? <option value="IT">Italiana</option> : null}
        {drinkDetails.strInstructionsES ? <option value="ES">Español</option> : null}
        {drinkDetails.strInstructionsFR ? <option value="FR">Français</option> : null}
      </select>
      <p>{drinkDetails[`strInstructions${language}`]}</p>
    </div>
  )
}

export default Drink