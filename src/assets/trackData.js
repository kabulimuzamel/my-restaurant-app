import { filteredArr } from "./ingredientList";

export const trackIngredients = [...filteredArr];


export const checkRecipes = (arr, disArr) => {
	const ingredientSetArrIndex = [];
	arr.forEach((recipeObj, recipeObjInd) => {
		let track = false;
		recipeObj.ingredientArr.forEach(ingredient => {
			if(disArr.includes(ingredient)) {
				track = true;
			}
		});
		if(track) {
			ingredientSetArrIndex.push(recipeObjInd);
		}
	});
	return ingredientSetArrIndex;
}