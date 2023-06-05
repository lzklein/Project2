//search bar to filter drink by name
//top of drink container
import React from 'react'

const DrinkSearchBar = ({setSearchContent}) => {
  function handleSearch(e){
    setSearchContent(e.target.value)
  }
  return (
    <input type="text" placeholder="Search Drink by Name..." onChange={handleSearch}/>
  )
}

export default DrinkSearchBar