import React, { useEffect, useState } from 'react'
import './receptyV2.css'
import { Link } from 'react-router-dom'

const LOCAL_STORAGE_KEY = 'recipeApp'
function ReceptyV2() {
    const [receptyJson, setReceptyJson] = useState([])
    const url = 'https://api.edamam.com/search?q=chicken&app_id=fa8c7fae&app_key=6559e46bcb03c32d18b853d67f40d1ae&from=0&to=15&calories=591-722&health=alcohol-free'


    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setReceptyJson(storedTodos)
    }, [])


    const HandleLoadData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.hits))
        console.log(data.hits)
    }


    return (
        <div className="mainDiv">
            <button onClick={HandleLoadData}>Nahrať data do LOCAL STORAGE KEY</button>
            <div className="vypis">
                {receptyJson.map(recepty => (
                    <li key={recepty.recipe.label}>
                        <Link to={`/ReceptyV2/ReceptyV2/${recepty.recipe.label}`}> {recepty.recipe.label} </Link>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default ReceptyV2
