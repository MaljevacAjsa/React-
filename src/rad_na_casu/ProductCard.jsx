function ProductCard({ title, price, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
    </div>
  );
}

function ProductCard2(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.price}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default ProductCard;
