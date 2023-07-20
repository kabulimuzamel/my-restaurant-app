import React from "react";

export function ActiveListGenerator({ arr, clickHandler }) {
    return (
        <div className='container actIngredient border-bottom border-dark border-3 mt-5'>
            <h2>Active Ingredients</h2>
            <ul>
                {arr.map((ingredient) => {
                    return (
                        <div className='d-flex align-items-center'>
                            <li className='me-2' key={ingredient}>
                                {ingredient}
                            </li>
                            <img
                                className='Icon'
                                src='https://img.icons8.com/?size=512&id=1504&format=png'
                                alt=''
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