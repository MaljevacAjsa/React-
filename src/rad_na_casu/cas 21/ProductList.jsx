import React, { useMemo, useCallback } from "react";

const ProductList = React.memo(({ products }) => {
  const products = useMemo(() => {
    [
      { id: 1, name: "pizza", category: "food" },
      { id: 2, name: "apple", category: "food" },
      { id: 3, name: "laptop", category: "tech" },
      { id: 4, name: "mouse", category: "tech" },
      { id: 5, name: "shirt", category: "clothes" },
      { id: 6, name: "jeans", category: "clothes" },
      { id: 7, name: "cake", category: "food" },
      { id: 8, name: "jacket", category: "clothes" },
      { id: 9, name: "computer", category: "tech" },
    ];
  }, []);
  return <div></div>;
});

const filterByCategory = useCallback((event) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  setSelectedCategory(event.target.value);
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    if (selectedCategory === "All") {
      return itemsData;
    } else {
      return itemsData.filter((item) => item.category === selectedCategory);
    }
  }, [selectedCategory]);
});
return (
  <div>
    <div>
      <button onClick={() => filterByCategory(products)}>All </button>
      <button onClick={() => filterByCategory(products)}>Clothes</button>
      <button onClick={() => filterByCategory(products)}>Tech</button>
      <button onClick={() => filterByCategory(products)}>Food</button>
    </div>
    <ul>
      {filteredItems.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  </div>
);

export default filterByCategory;
