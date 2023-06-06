//the header
//maybe contains button for NewDrinkForm
import React, {useState} from 'react'
import DrinkSubmitForm from "./DrinkSubmitForm"

const Header = ({addNewDrink}) => {
  //show and hide the form 
  const [showingForm, setShowingForm] = useState(false);
  function renderSubmitForm(){
    setShowingForm(!showingForm)
  }

  return (
    <div>
      <h1>Title Goes Here</h1>
      <button onClick={renderSubmitForm}>Add New Drink</button>
      {showingForm ? <DrinkSubmitForm addNewDrink={addNewDrink}/> : null}
    </div>
  )
}

export default Header