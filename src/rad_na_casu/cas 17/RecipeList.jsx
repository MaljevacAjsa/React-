import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = [
    { id: 1, name: "viskas klasik ", time: 100 },
    { id: 2, name: "viskas sa ribom ", time: 120 },
    { id: 3, name: "viskas sa govedinom ", time: 160 },
    { id: 4, name: "viskas mesano meso", time: 200 },
  ];
  return (
    <div>
      {recipes.map((recipe) => (
        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          {recipe.name}
        </Link>
      ))}
    </div>
  );
};
export default RecipeList;
