import React from "react";
import CardGenerator from "./CardGenerator";

const RecipeContainer = ({recipeArr}) => {
    return (
			<>
				<h2 className=' text-center container border-bottom border-dark border-3 mt-5 pb-3'>
					Available Recipes
				</h2>
				<div className='container d-flex justify-content-center flex-wrap'>
					<CardGenerator recipeArr={recipeArr} />
				</div>
			</>
		)
}

export default RecipeContainer
