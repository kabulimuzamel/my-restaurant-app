import React from "react";

const CardListGenerator = ({ingredientArr, index}) => {
    return (
        <ul
            className='card-text list-group list-group-flush'
            key={`include${index}`}>
            {ingredientArr.map((ingredient, index) => {
                return (
                    <li className='list-group-item' key={`ing${index}`}>
                        {ingredient}
                    </li>
                )
            })}
        </ul>
    )
}

export default CardListGenerator;