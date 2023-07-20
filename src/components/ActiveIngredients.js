import { useEffect } from "react";
import { checkRecipes } from "../assets/trackData";
import { ActiveListGenerator } from "./ActiveListGenerator";

export function ActiveIngredient({ activeArr, activeSetter, disSetter, mealArr,  mealSetter, disArr }) {
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
        const toRemoveIngIndex = activeArr.indexOf(toRemoveIng);
        const filteredIngredients = activeArr.filter((ing, ind) => {
            return ind !== toRemoveIngIndex;
        })
        activeSetter(filteredIngredients);
        disSetter(prevIng => [...prevIng, toRemoveIng])
    }
    return (
        <ActiveListGenerator arr={activeArr} clickHandler={clickHandler} />
    )
}
