import React from 'react';
import getUniqueIngredients from '../assets/ingredientList';
import { recipeArr } from '../assets/recipesData';
import RecipeContainer from './RecipeContainer';
import AllIngredientList from './AllIngredient';

const StaticMeal = () => {
    return (
        <>
            <AllIngredientList arr={getUniqueIngredients(recipeArr)} />
            <RecipeContainer recipeArr={recipeArr}/>
        </>
    )
}

export default StaticMeal;