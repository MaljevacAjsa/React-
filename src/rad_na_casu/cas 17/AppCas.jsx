import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import RecipeList from "./RecipeList";
import Home from "./Home";

const AppCas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes" element={<RecipeList />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppCas;
