import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipes = [
    { id: 1, name: "viskas klasik ", time: 100 },
    { id: 2, name: "viskas sa ribom ", time: 120 },
    { id: 3, name: "viskas sa govedinom ", time: 160 },
    { id: 4, name: "viskas mesano meso", time: 200 },
  ];

  const recipeId = Number(id); // jer dolazi kao string iz useParams
  const recipe = recipes.find((r) => r.id === recipeId); //pronalazimo taj recipe na koji je kliknuto po id iz useParams jer smo ga poslali iz RecipeList u Link-u kao argument id

  const [count, setCount] = useState(null); //null da  bi proveravali kasnije
  const [isRunning, setIsRunning] = useState(false); //provera da li trenutno odbrojava

  useEffect(() => {
    setCount(null);
    setIsRunning(false);
  }, [recipeId]); //resetujemo za nove recepte ako vidimo da se id promenio znaci da se i recept promenio
  useEffect(() => {
    if (!isRunning || count === null) return; // izlazimo odmah iz funkcije ako su vrednosti kao pocetne?

    if (count <= 0) {
      setIsRunning(false);
      return; //gotovo i vracamo jer je count odbrojao do nule 0
    }

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === null) return null;
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, count]);

  const startPreparing = () => {
    if (!recipe) return;
    setCount(recipe.time);
    setIsRunning(true);
  };

  const stopped = () => {
    let countRn = count;
    setCount((prevValue) => prevValue);
  };

  return (
    <div>
      <h1>{recipe ? recipe.name : "Recipe not found"}</h1>
      <h2>Time of preparation {recipe ? recipe.time : "-"}</h2>

      {!isRunning && (
        <button onClick={startPreparing} disabled={!recipe}>
          Start preparing
        </button>
      )}
      {isRunning && <button onClick={stopped}>Stop</button>}

      {count !== null && <h2>Time left: {count}</h2>}
    </div>
  );
};
export default RecipeDetails;
