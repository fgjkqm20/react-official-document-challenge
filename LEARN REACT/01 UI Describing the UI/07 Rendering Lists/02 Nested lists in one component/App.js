import { recipes } from './data.js';

export default function RecipeList() {
  const recipe = recipes.map((recipe) => (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Recipes</h1>
      {recipe}
    </div>
  );
}
