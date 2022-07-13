import { useState, useRef } from "react";
import ToBuyForm from "./component/toBuyForm";
import "./App.css";

function App() {
  const [currentEditing, setCurrentEditing] = useState(NaN);
  const [inputField, setInputField] = useState("");
  const input = useRef(null);
  const [groceryList, setGroceryList] = useState([
    {
      _id: 1,
      name: "Egg",
    },
    {
      _id: 2,
      name: "Milk",
    },
    {
      _id: 3,
      name: "chips",
    },
    {
      _id: 4,
      name: "apples",
    },
  ]);

  const handleChange = (e) => {
    setInputField(e.target.value);
  };

  const handleAdd = () => {
    const items = [...groceryList];
    const newId = Math.floor(Math.random() * Date.now());
    const newName = inputField;
    const newItem = { _id: newId, name: newName };
    items.push(newItem);
    setGroceryList(items);
  };

  const handleDelete = (item) => {
    const items = [...groceryList];
    const result = items.filter((i) => i !== item);
    setGroceryList(result);
  };

  const handleEdit = (item) => {
    const currentItem = item;
    setInputField(currentItem.name);
    setCurrentEditing(currentItem._id);
    input.current.focus();
  };

  const handleSetEdit = () => {
    const items = [...groceryList];
    const item = items.filter((i) => i._id == currentEditing)[0];
    const index = items.indexOf(item);
    items[index] = { ...items[index] };
    items[index].name = inputField;

    return setGroceryList(items), setInputField(""), setCurrentEditing(NaN);
  };

  return (
    <ToBuyForm
      input={input}
      isEditing={currentEditing}
      value={inputField}
      items={groceryList}
      onClick={handleAdd}
      onChange={handleChange}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onUpdate={handleSetEdit}
    />
  );
}

export default App;
