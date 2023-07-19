import { ActiveIngredient } from "./ActiveIngredients"
import { DiscardedIngredientsList } from "./DiscardedIngredients"

const AllIngredientList = ({arr}) => {
	return (
		<>
			<div className='container d-flex flex-column'>
				<h2 className='border-bottom border-dark border-3 mt-5'>
					All Ingredients
				</h2>
				<div className='row ingredientRow'>
					{arr.map((set, index) => {
						return (
							<ul key={index} className='col mt-3'>
								{set.map((ingredient) => {
									return (
										<div className='d-flex align-items-center'>
											<li 
												key={ingredient} 
											>
												{ingredient}
											</li>
										</div>
									)
								})}
							</ul>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default AllIngredientList;