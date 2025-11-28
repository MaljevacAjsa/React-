import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "laptop",
      price: 220,
      description: "Description for laptop",
      color: "green",
    },
    {
      id: 2,
      name: "mis",
      price: 10,
      description: "Description for mis",
      color: "pink",
    },
    {
      id: 3,
      name: "tastatura",
      price: 40,
      description: "Description for tastatura",
      color: "blue",
    },
    {
      id: 4,
      name: "monitor",
      price: 100,
      description: "Description for monitor",
      color: "red",
    },
  ];
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) {
    return <h1>product is not found</h1>;
  } else {
  }
  return (
    <div
      style={{
        color: "white",
        backgroundColor: product.color,
        padding: "20px",
        width: "250px",
      }}
    >
      <h1>{product.name}</h1>
      <p>price: {product.price}</p>
    </div>
  );
};
export default ProductDetails;
