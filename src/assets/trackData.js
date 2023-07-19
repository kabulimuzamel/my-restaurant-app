import { filteredArr } from "./ingredientList";

export const trackIngredients = [...filteredArr];


export const checkRecipes = (arr, disArr) => {
	const ingredientSetArr = []
	for (let i = 0; i < arr.length; i++) {
		ingredientSetArr.push(arr[i].ingredientArr)
	}

	const ingredientSetArrIndex = []
	ingredientSetArr.forEach((ingSet, ingSetInd) => {
		let track = false;
		for (let i = 0; i < disArr.length; i++) {
			let disIng = disArr[i]
			if (ingSet.includes(disIng)) {
				track = true
				break
			}
		}
		if (track) {
			ingredientSetArrIndex.push(ingSetInd)
		}
	})
	return ingredientSetArrIndex
}
