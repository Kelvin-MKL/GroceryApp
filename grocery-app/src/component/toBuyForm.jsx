import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
const ToBuyForm = ({ onChange, onClick, items, onDelete }) => {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Grocery List!</h1>
      </div>

      <div className='App-body-search'>
        <input
          className='input-field'
          placeholder='What to buy?'
          onChange={onChange}
        />
        <button onClick={onClick} className='btn-add'>
          ADD
        </button>
      </div>

      {items.map((item) => (
        <div key={item} className='item'>
          {item} <RiDeleteBin2Line onClick={() => onDelete(item)} />
        </div>
      ))}
    </div>
  );
};

export default ToBuyForm;
