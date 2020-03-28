import React, { useEffect, useState } from 'react'
import RecipesInside from '../Recepty/RecipesInside'
import { GiReturnArrow } from 'react-icons/gi';

const LOCAL_STORAGE_KEY = 'recipeApp'
function ReceptInfo({ match }) {

    const [result, setResult] = useState([])

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        setResult(storedTodos.filter(recepty => recepty.recipe.label === match.params.id))
    }, [])

    function Naspat() {
        window.history.back()
    }
    return (
        <div onClick={Naspat} className="receptinfocss">
            <div className="ikonka">
                <GiReturnArrow />
            </div>
            {result.map(recipe => (
                <RecipesInside
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    )
}

export default ReceptInfo
