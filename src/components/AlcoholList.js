import React from 'react'
import Alcohol from "./Alcohol"

const AlcoholList = ({alcohols}) => {

  function renderAlcohol(){
    return alcohols.map((alcohol) => {
      return (
        <div className={"card-container"} key={alcohol.id + "div"}>
          <Alcohol alcohol={alcohol}/>
        </div>
      )
    })
  }
  
  return (
    <div>{renderAlcohol()}</div>
  )
}

export default AlcoholList