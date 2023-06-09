//each individual alcohol name & pic
//onClick set selectedAlcohol state or something to filter DrinkContainer
import React from 'react'
import { NavLink } from "react-router-dom";

const Alcohol = ({alcohol}) => {
  
  const linkStyles = {
    display: "inline-block",
    width: "125px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#4d82d8",
    textDecoration: "none",
    color: "black",
    boxShadow: "10px 5px 5px rgb(23, 59, 159)",
    borderRadius: "3px"

  };
  return (
    <div>
      <NavLink 
        to={`/${alcohol}`}
        exact
        style={linkStyles}
        activeStyle={{
          background:"#ffc250"
        }}
        >
          <img src={`https://www.thecocktaildb.com/images/ingredients/${alcohol}-Small.png`} ></img>
         {alcohol}
      </NavLink>

    </div>
  )
}

export default Alcohol