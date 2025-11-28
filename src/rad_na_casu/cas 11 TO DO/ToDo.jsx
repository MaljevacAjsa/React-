import { useState, useEffect, createContext, useContext } from "react";
import "./ToDo.css";

const ListsContext = createContext();

const ToDo = () => {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [showChecked, setShowChecked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setListItems(JSON.parse(saved));
    }
  }, []);
  const handleAdding = () => {
    if (inputText.trim() === "") return;

    const timestamp = Date.now();
    const newItem = { text: inputText, done: false, createdAt: timestamp };

    const updatedList = [...listItems, newItem];
    setListItems(updatedList);
    localStorage.setItem("todos", JSON.stringify(updatedList));
    setInputText("");
  };

  const reset = () => {
    setListItems([]);
    localStorage.removeItem("todos");
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleChecked = () => {
    setShowChecked(!showChecked);
  };

  const filteredItems = showChecked
    ? listItems.filter((item) => item.done)
    : listItems;

  return (
    <ListsContext.Provider value={{ listItems, setListItems, editMode }}>
      <div className="todo-container">
        <h2 style={{ color: "palevioletred" }}>To Do List</h2>

        <div className="input-area">
          <input
            type="text"
            placeholder="Type text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="input-text"
          />
          <button onClick={handleAdding}>Add Input</button>
        </div>

        <ul id="listContainer">
          {filteredItems.map((item, index) => (
            <ListItem key={index} index={index} item={item} />
          ))}
        </ul>

        <div className="reset_edit">
          {listItems.length > 0 && (
            <>
              <button onClick={reset}>Reset Inputs</button>
              <button onClick={handleEdit}>
                {editMode ? "Done Editing" : "Edit"}
              </button>
              <button onClick={handleChecked}>
                {showChecked ? "Show All" : "Checked"}
              </button>
            </>
          )}
        </div>
      </div>
    </ListsContext.Provider>
  );
};

const ListItem = ({ item, index }) => {
  const { listItems, setListItems, editMode } = useContext(ListsContext);

  const toggleDone = () => {
    const updated = listItems.map((it, i) =>
      i === index ? { ...it, done: !it.done } : it
    );
    setListItems(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  const handleDelete = () => {
    const updated = listItems.filter((_, i) => i !== index);
    setListItems(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  const dateObject = new Date(item.createdAt);
  const localeString = dateObject.toLocaleString();

  return (
    <li className={`list-item ${item.done ? "done" : ""}`}>
      <div className="li-container">
        <span>{item.text}</span>
        <p style={{ fontSize: "10px" }}>{localeString}</p>
      </div>
      <div className="li-sub-container">
        <input type="checkbox" checked={item.done} onChange={toggleDone} />

        {editMode && (
          <button className="delete-btn" onClick={handleDelete}>
            −
          </button>
        )}
      </div>
    </li>
  );
};

export default ToDo;
