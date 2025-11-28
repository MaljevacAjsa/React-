import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/recipes/:id">Recipe </Link>
        <Link to="/recipes">Recipes </Link>
      </nav>
    </div>
  );
};
export default Home;
