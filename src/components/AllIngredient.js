import ingredientSetArray from "../assets/ingredientList"

const AllIngredientList = () => {
	return (
		<div className='ingredientList container d-flex flex-column'>
			<h2 className='border-bottom border-dark border-3 mt-5'>All Ingredients</h2>
			<div className='row ingredientRow'>
				{ingredientSetArray.map((set) => {
					return (
						<ul className='col'>
							{set.map((ingredient) => {
								return <li>{ingredient}</li>
							})}
						</ul>
					)
				})}
			</div>
		</div>
	)
}

export default AllIngredientList;