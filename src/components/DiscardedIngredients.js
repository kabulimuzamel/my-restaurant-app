import React, { useEffect } from "react";
import { checkRecipes } from "../assets/trackData";
import { recipeArr } from "../assets/recipesData";

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
        <div className="container disIngredient border-bottom border-dark border-3 mt-5 ms-5">
            <h2>Discarded Ingredients</h2>
            <div>
                <ul>
                    {disArr.map(ing => {
                        return (
                            <div className="d-flex align-items-center">
                                <li className="me-2">{ing}</li>
                                <img
                                className="Icon"
                                    data-value={ing}
                                    alt=""
                                    src="https://img.icons8.com/?size=512&id=1501&format=png"
                                    onClick={clickHandler}
                                />
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}