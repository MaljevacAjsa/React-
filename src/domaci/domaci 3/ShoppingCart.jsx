function ShoppingCart({ products }) {
  if (products.length === 0 || !products) {
    return <p>Korpa je prazna</p>;
  }
  const total = products.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <h2>Proizvodi u korpi:</h2>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} RSD
          </li>
        ))}
      </ul>
      <p>Ukupno: {total} RSD</p>
      {total > 2000 && <p>Imaš pravo na besplatnu dostavu</p>}
    </div>
  );
}
export default ShoppingCart;
