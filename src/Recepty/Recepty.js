import React, { useState, useEffect, useRef } from 'react'
import './Recepty.css'
import RecipesInside from './RecipesInside'
import uuidV4 from 'uuid/v4'

function Recepty() {

    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('chicken')
    const inputRef = useRef("asd")

    const APP_ID = 'fa8c7fae'
    const APP_KEY = '6559e46bcb03c32d18b853d67f40d1ae'
    const example_req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`

    useEffect(() => {
        getRecipes()
        inputRef.current.focus()
        console.log("asd")
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(example_req)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(response)
        console.log(data.hits)
    }

    function handleInput(e) {
        e.preventDefault()
        setQuery(inputRef.current.value)
        inputRef.current.value = ''
    }

    return (
        <div className="hl-recepty">
            <h2>Recepty</h2>

            <form >
                <input ref={inputRef} type="text" />

                {/* <input
                    type="text"
                    value={search}
                    onChange={updateSearch}
                /> */}
                <button onClick={handleInput} type="submit">Hladať</button>
            </form>
            {recipes.map(recipe => (
                <RecipesInside
                    key={uuidV4()}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    )
}

export default Recepty
