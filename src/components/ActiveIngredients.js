import { useEffect } from "react";
import { checkRecipes } from "../assets/trackData";
// import { recipeArr } from "../assets/recipesData";

export function ActiveIngredient({ arr, activeSetter, disSetter, mealArr,  mealSetter, disArr }) {
    useEffect(() => {
			const toRemoveMealInd = checkRecipes(mealArr, disArr)
			const filteredRecipes = mealArr.filter((recipeObj, recipeObjIndex) => {
				if (toRemoveMealInd.includes(recipeObjIndex)) {
					return false
				} else {
					return true
				}
			})
			mealSetter(filteredRecipes)
		}, [mealArr, disArr])        
    const clickHandler = (event) => {
        const toRemoveIng = event.target.dataset.value;
        const toRemoveIngIndex = arr.indexOf(toRemoveIng);
        const filteredIngredients = arr.filter((ing, ind) => {
            return ind !== toRemoveIngIndex;
        })
        activeSetter(filteredIngredients);
        disSetter(prevIng => [...prevIng, toRemoveIng])
    }
    return (
        <div className='container actIngredient border-bottom border-dark border-3 mt-5'>
            <h2>Active Ingredients</h2>
            <ul>
                {arr.map(ingredient => {
                    return (
                        <div className="d-flex align-items-center">
                            <li 
                                className="me-2"
                                key={ingredient}
                            >
                                {ingredient}
                            </li>
                            <img
                                className="Icon"
                                src="https://img.icons8.com/?size=512&id=1504&format=png"
                                alt=""
                                data-value={ingredient}
                                onClick={clickHandler}
                            />

                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
