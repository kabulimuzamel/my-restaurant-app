import React, { useEffect } from "react";
import { checkRecipes } from "../assets/trackData";
import { recipeArr } from "../assets/recipesData";
import { DiscardedListGenerator } from "./DiscardedListGenerator";

export function DiscardedIngredientsList({ disArr, disSetter, activeSetter, mealSetter }) {
    useEffect(() => {
        const filteredIng = checkRecipes(recipeArr, disArr)
        const filteredRecipes = recipeArr.filter((recipeObj, recipeObjInd) => {
            if (filteredIng.includes(recipeObjInd)) {
                return false
            } else {
                return true
            }
        })
        mealSetter(filteredRecipes)
    }, [disArr])
    const clickHandler = (event) => {
        const toAddIng = event.target.dataset.value;
        activeSetter(prevIng => [...prevIng, toAddIng]);
        const toAddIngInd = disArr.indexOf(toAddIng);
        const filteredIngredients = disArr.filter((ing, ind) => {
            return ind !== toAddIngInd
        })
        disSetter(filteredIngredients)

    }
    return (
        <DiscardedListGenerator disArr={disArr} clickHandler={clickHandler} />
    )
}