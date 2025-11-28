function ProductCard({ title, price, InStock }) {
  console.log(title, price, InStock);
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      {!InStock && <p style={{ color: "red" }}>"Nije na stanju"</p>}
    </div>
  );
}

export default ProductCard;
