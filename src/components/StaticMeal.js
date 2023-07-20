import React from 'react';
import { useState } from 'react';
import { recipeArr } from '../assets/recipesData';
import { trackIngredients } from '../assets/trackData';
import RecipeContainer from './RecipeContainer';
import { ActiveIngredient } from './ActiveIngredients';
import { DiscardedIngredientsList } from './DiscardedIngredients';

const StaticMeal = () => {
    const [activeIngredients, setActiveIngredients] = useState([...trackIngredients]);
    const [discardedIngredients, setDiscardedIngredients] = useState([]);
	const [meal, mealSetter] = useState([...recipeArr]);
    return (
			<>
				<div className='containers container d-flex flex-row justify-content-between'>
					<ActiveIngredient
						activeArr={activeIngredients}
						activeSetter={setActiveIngredients}
						disSetter={setDiscardedIngredients}
						mealArr={meal}
						mealSetter={mealSetter}
						disArr={discardedIngredients}
					/>
					<DiscardedIngredientsList
						disArr={discardedIngredients}
						activeSetter={setActiveIngredients}
						disSetter={setDiscardedIngredients}
						mealSetter={mealSetter}
					/>
				</div>
				<RecipeContainer recipeArr={meal} />
			</>
		)
}

export default StaticMeal;