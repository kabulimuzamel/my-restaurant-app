import React from "react";

export function DiscardedListGenerator({ disArr, clickHandler }) {
    return (
        <div className='container disIngredient border-bottom border-dark border-3 mt-5 ms-5'>
            <h2>Discarded Ingredients</h2>
            <div>
                <ul>
                    {disArr.map((ing) => {
                        return (
                            <div className='d-flex align-items-center'>
                                <li className='me-2'>{ing}</li>
                                <img
                                    className='Icon'
                                    data-value={ing}
                                    alt=''
                                    src='https://img.icons8.com/?size=512&id=1501&format=png'
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