import React from 'react'
import Alcohol from "./Alcohol"

const AlcoholList = ({alcohols}) => {
  function renderAlcohol(){
    return alcohols.map((alcohol) => {
      return (
          <div className={"card-container"} key={alcohol + "div"}>
            <Alcohol alcohol={alcohol}/>
          </div>
      )
    })
  }
  
  return (
    <div className="card-container-container">
      {renderAlcohol()}
    </div>
  )
}

export default AlcoholList