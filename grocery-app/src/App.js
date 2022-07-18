import { useState, useRef } from "react";
import ToBuyForm from "./component/toBuyForm";
import "./App.css";

function App() {
  const input = useRef(null);
  const [currentEditing, setCurrentEditing] = useState(NaN);
  const [matchedGL, setMatchedGL] = useState([]);
  const [groceryList, setGroceryList] = useState([
    {
      _id: 1,
      name: "egg",
    },
    {
      _id: 2,
      name: "milk",
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

  const myDebounce = (cb, d) => {
    // cb simply means callback, d means delay.
    // It allows us to trigger a function at a specific time.
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const handleChange = myDebounce((e) => {
    const newMatchedResult = [];
    const { value } = e.target;
    const filteredValue = value.toLowerCase();
    console.log(filteredValue);
    if (filteredValue !== "")
      groceryList.filter((item) =>
        item.name.includes(filteredValue) ? newMatchedResult.push(item) : ""
      );
    setMatchedGL(newMatchedResult);
  }, 1000);

  const handleAdd = () => {
    // Always clone the current array, and modify it.
    // Then replace the previous one.
    const items = [...groceryList];
    const newId = Math.floor(Math.random() * Date.now());
    const newName = input.current.value.toLowerCase();
    const newItem = { _id: newId, name: newName };
    items.push(newItem);
    setGroceryList(items);
    console.log(newItem);
  };

  const handleDelete = (item) => {
    // Delete selected item.
    const items = [...groceryList];
    const result = items.filter((i) => i !== item);
    setGroceryList(result);
  };

  const handleEdit = (item) => {
    // Set input field as in focus
    // Set current editing item equals item.id
    const currentItem = item;
    input.current.value = item.name;
    setCurrentEditing(currentItem._id);
    input.current.focus();
  };

  const handleSetEdit = () => {
    // Filter func always return an array, but it should always have one item.
    // Simply use [0] to get the object, and use indexOf to find its index.
    // Then update the vale in the targeted index.
    const items = [...groceryList];
    const item = items.filter((i) => i._id === currentEditing)[0];
    const index = items.indexOf(item);
    items[index] = { ...items[index] };
    items[index].name = input.current.value.toLowerCase();
    setGroceryList(items);
    setCurrentEditing(NaN);
    input.current.value = "";
  };

  return (
    <ToBuyForm
      input={input}
      isEditing={currentEditing}
      items={groceryList}
      onClick={handleAdd}
      onChange={handleChange}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onUpdate={handleSetEdit}
      matchedGL={matchedGL}
    />
  );
}

export default App;
