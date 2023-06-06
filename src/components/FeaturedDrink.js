import React, {useState, useEffect} from 'react'

//todo this doesn't work

const FeaturedDrink = () => {
    const [randomDrink, setRandomDrink] = useState({});

    function renderRandomDrink(){
        if(!!randomDrink.drinks){
            const {drinks} = randomDrink;
            return(
                <div>
                    <h2>{drinks.strDrink}</h2>
                    <img src={drinks.strDrinkThumb}/>
                </div>
            )
        }
    }

    useEffect(()=>{
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(r => r.json())
        .then(randomDrinkData => setRandomDrink(randomDrinkData))
    },[])
  return (
    <div>
        {renderRandomDrink()}
    </div>
  )
}

export default FeaturedDrink