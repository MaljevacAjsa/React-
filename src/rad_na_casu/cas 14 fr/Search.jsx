import { useState, createContext, useContext } from "react";

const searchContext = createContext();

const Search = () => {
  const [search, setSearch] = useState("");
  const products = [
    { id: 1, name: "mis", price: 10 },
    { id: 2, name: "telefon", price: 18 },
    { id: 3, name: "televizor", price: 15 },
    { id: 4, name: "laptop", price: 9 },
  ];
  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toString().includes(search)
    )
    .sort((a, b) => a.price - b.price);

  return (
    <searchContext.Provider value={{ search, products, setSearch }}>
      <div>
        <h2>Pretrazi</h2>
        <input
          placeholder="pretrazi"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    </searchContext.Provider>
  );
};

const Sort = () => {
  const { search, products, setSearch } = useContext(searchContext);

  const sortedByPrice = products.sort((a, b) => a.price - b.price);

  const sortedByName = products.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <div>
      <label for="sort">Sort:</label>
      <select name="sort" id="sort">
        <option value="sortByPrice">Sort By Price</option>
        <option value="sortByName">Sort By Name</option>
      </select>
    </div>
  );
};

export default Search;
