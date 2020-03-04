import React from 'react'
import style from './recepty.module.css'
import uuidV4 from 'uuid/v4'


function RecipesInside({ title, calories, image, ingredients }) {
    return (
        <div className={style.recipeinside}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="" />
            <ul>
                {ingredients.map(ingredient => (
                    <li key={uuidV4()}>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default RecipesInside
