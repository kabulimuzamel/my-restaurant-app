import React from 'react';
import RecipeContainer from './RecipeContainer';
import AllIngredientList from './AllIngredient';

const StaticMeal = () => {
    return (
        <>
            <AllIngredientList />
            <RecipeContainer />
        </>
    )
}

export default StaticMeal;