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
    background: "blue",
    textDecoration: "none",
    color: "black",
  };
  return (
    <div>
      <NavLink 
        to={`/Alcohol/${alcohol.name}`}
        exact
        style={linkStyles}
        activeStyle={{
          background:"yellow"
        }}
        >
          <img src={`https://www.thecocktaildb.com/images/ingredients/${alcohol.name}-Small.png`} ></img>
         {alcohol.name}
      </NavLink>

    </div>
  )
}

export default Alcohol