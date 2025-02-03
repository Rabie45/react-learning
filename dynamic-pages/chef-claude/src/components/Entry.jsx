import { useState } from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai.js";

export default function Entry() {
  const [recipe, setRecipe] = useState("");
  const [ingrediants, setIngrediant] = useState([]);

  async function getRecipe() {
    console.log("peressed");

    const recipeGenrated = await getRecipeFromMistral(ingrediants);
    // setRecipeShown((prevState) => !prevState);
    setRecipe(recipeGenrated);
    console.log(recipeGenrated);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngrediant((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="main-contanier">
        <input
          type="text"
          className="input-main-cotanier"
          placeholder="Enter the ingrediant"
          name="ingredient"
        ></input>
        <button className="button-main-contanier"> Add ingredient</button>
      </form>
      {ingrediants.length > 0 && (
        <IngredientList getRecipe={getRecipe} ingrediants={ingrediants}  />
      )}
      <ClaudeRecipe recipe={recipe}/>
    </main>
  );
}
