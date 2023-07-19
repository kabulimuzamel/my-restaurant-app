import { recipeArr } from "./recipesData"

function getUniqueIngredients(recipeArr) {
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
    
    return filteredIngredients;
}

function arrangeInCol(arr){
    const ingredientSetArray = []
    for (let i = 0; i < arr.length; i += 5) {
        ingredientSetArray.push(arr.slice(i, i + 5))
    }

    return ingredientSetArray;
}
export const filteredArr = getUniqueIngredients(recipeArr);
export const arrangedArr = arrangeInCol(filteredArr);
