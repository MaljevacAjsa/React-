import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    { id: 1, name: "laptop" },
    { id: 2, name: "mis" },
    { id: 3, name: "tastatura" },
    { id: 4, name: "monitor" },
  ];
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Product;
