import {useState} from 'react'
import ClaudeRecipe from './ClaudeRecipe'
export default function IngredientList(props) {
  const ingredientsListItems = props.ingrediants.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

 return ( <section>
  <h2>Ingredients on hand:</h2>
  <ul className="ingrediant-list">{ingredientsListItems}</ul>
  <div className="get-recipe-container">
    <div>
      <h3>Ready for recipe</h3>
      <p>Gererate a recipe from your lust of ingrediant</p>
    </div>
    <button onClick={props.getRecipe}>Get a recipe</button>
  </div>
</section> )
}


// token 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