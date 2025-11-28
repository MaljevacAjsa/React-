function ProductCard2(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.price}</h2>
      <p>{props.inStock ? "Na stanju" : "Nije na stanju"}</p>
    </div>
  );
}

export default ProductCard2;
