import React from "react";
import CardGenerator from "./CardGenerator";

const RecipeContainer = ({recipeArr}) => {
    return (
        <div className='container d-flex justify-content-center flex-wrap'>
            <CardGenerator recipeArr={recipeArr} />
        </div>
    )
}

export default RecipeContainer
