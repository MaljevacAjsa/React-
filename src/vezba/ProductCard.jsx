function ProductCard({ title, price, InStock }) {
  return <>{InStock ? <p>Na stanju</p> : <p>Nije na stanju</p>}</>;
}
export default ProductCard;
