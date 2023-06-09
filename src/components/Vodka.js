import React, { useState , useEffect} from 'react'
import DrinkDetails from "./DrinkDetails";
import DrinkSearchBar from "./DrinkSearchBar";

const Vodka = ({alcohol, loaded, setDrinks, drinks}) => {
    const [searchContent, setSearchContent] = useState("");
    useEffect(()=>{
        fetch(`http://localhost:3000/${alcohol}`)
        .then(r => r.json())
        .then(drinkData => setDrinks(drinkData))
    }, [])

    if(loaded){

        function renderList(){
            return drinks.filter((drink) => drink.strDrink.toLowerCase().includes(searchContent.toLowerCase())).map((drink) => {
                return(
                    <DrinkDetails drink={drink} key={drink.id}/>
                )
            })
        }
    
        return (
            <div className="alcohol-list">
                <h2>{alcohol} Drinks</h2>
                <DrinkSearchBar setSearchContent={setSearchContent}/>
                {renderList()}
            </div>
            
          )
    }   
}

export default Vodka