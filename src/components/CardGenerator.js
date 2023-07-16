import React from "react" 
import CardListGenerator from "./CardListGenerator"
import { recipeArr } from "../assets/recipesData"

const CardGenerator = () => {
    return (
        <>
            {recipeArr.map((recipeObj, index) => {
                return (
                    <div
                        key={index}
                        className={`card ${recipeObj.name} recipeCard mx-3 my-3`}>
                        <h2 className='card-header' key={`name${index}`}>
                            {recipeObj.name}
                        </h2>
                        <CardListGenerator
                            ingredientArr={recipeObj.ingredientArr}
                            index={index}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default CardGenerator;