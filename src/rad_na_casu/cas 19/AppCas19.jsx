import { useMemo, useState } from "react";

const AppCas19 = () => {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const Products = ["telefon", "laptop", "mis", "monitor", "slusalice"];

  const Filtered = useMemo(() => {
    //useMemo je za filtriranje i cuva memoriju jer ne rerenderuje
    console.log("filtriram");
    return Products.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  return (
    <div>
      <h2>Pretrazi</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Povecaj
      </button>
      <h2>Theme {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
      <ul>
        {Filtered.map((product, i) => (
          <li key={i}>{product}</li>
        ))}
      </ul>
    </div>
  );
};
export default AppCas19;
