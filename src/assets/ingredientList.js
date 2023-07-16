import { recipeArr } from "./recipesData"

const allIngredients = []
for (let recipeObj = 0; recipeObj < recipeArr.length; recipeObj++) {
	const ingredientArr = recipeArr[recipeObj].ingredientArr
	for (let ingredient = 0; ingredient < ingredientArr.length; ingredient++) {
		allIngredients.push(ingredientArr[ingredient])
	}
}

const filteredIngredients = allIngredients.filter((ingredient, index) => {
	return allIngredients.indexOf(ingredient) === index
})

const ingredientSetArray = []
for (let i = 0; i < filteredIngredients.length; i += 5) {
	ingredientSetArray.push(filteredIngredients.slice(i, i + 5))
}

export default ingredientSetArray;