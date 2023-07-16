const AllIngredientList = ({arr}) => {
	return (
		<div className='ingredientList container d-flex flex-column'>
			<h2 className='border-bottom border-dark border-3 mt-5'>All Ingredients</h2>
			<div className='row ingredientRow'>
				{arr.map((set, index) => {
					return (
						<ul key={index} className='col'>
							{set.map((ingredient) => {
								return <li key={ingredient}>{ingredient}</li>
							})}
						</ul>
					)
				})}
			</div>
		</div>
	)
}

export default AllIngredientList;