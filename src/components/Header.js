//the header
//maybe contains button for NewDrinkForm
import React, {useState} from 'react'
import DrinkSubmitForm from "./DrinkSubmitForm"

const Header = () => {
  const [showingForm, setShowingForm] = useState(false);
  function renderSubmitForm(){
    setShowingForm(!showingForm)
  }

  return (
    <div>
      <h1>Title Goes Here</h1>
      <button onClick={renderSubmitForm}>Add New Drink</button>
      {showingForm ? <DrinkSubmitForm /> : null}
    </div>
  )
}

export default Header