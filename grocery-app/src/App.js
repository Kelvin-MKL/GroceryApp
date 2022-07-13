import { useState } from "react";
import ToBuyForm from "./component/toBuyForm";
import "./App.css";

function App() {
  const [inputField, setInputField] = useState("333");
  const [groceryList, setGroceryList] = useState([
    "Egg",
    "Milk",
    "chips",
    "apples",
  ]);

  const handleChange = (e) => {
    setInputField(e.target.value);
  };

  function handleClick() {
    const items = [...groceryList];
    const newItem = inputField;
    items.push(newItem);
    setGroceryList(items);
  }

  function handleDelete(item) {
    const items = [...groceryList];
    const result = items.filter((i) => i !== item);
    setGroceryList(result);
  }

  return (
    <ToBuyForm
      items={groceryList}
      onClick={handleClick}
      onChange={handleChange}
      onDelete={handleDelete}
    />
  );
}

export default App;
