import { useState } from "react";
import ToBuyForm from "./component/toBuyForm";
import "./App.css";

function App() {
  const [inputField, setInputField] = useState("333");
  const [groceryList, setgroceryList] = useState([
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
    setgroceryList(items);
  }

  return (
    <ToBuyForm
      items={groceryList}
      onClick={handleClick}
      onChange={handleChange}
    />
  );
}

export default App;
