import React, { useState } from 'react'
import DrinkDetails from "./DrinkDetails";
import DrinkSearchBar from "./DrinkSearchBar";

const Bourbon = ({alcohol, loaded}) => {
    console.log(alcohol)
    const [searchContent, setSearchContent] = useState("");

    if(loaded){

        function renderList(){
            return alcohol.drinks.filter((drink) => drink.strDrink.toLowerCase().includes(searchContent.toLowerCase())).map((drink) => {
                return(
                    <DrinkDetails drink={drink} key={drink.id}/>
                )
            })
        }
    
        return (
            <div>
                <h2>{alcohol.name} Drinks</h2>
                <DrinkSearchBar setSearchContent={setSearchContent}/>
                {renderList()}
            </div>
            
          )
    }   


}

export default Bourbon