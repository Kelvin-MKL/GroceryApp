import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

const ToBuyForm = ({
  onChange,
  onClick,
  items,
  onDelete,
  onEdit,
  value,
  isEditing,
  onUpdate,
}) => {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Grocery List!</h1>
      </div>

      <div className='App-body-search'>
        <input
          className='input-field'
          value={value}
          placeholder='What to buy?'
          onChange={onChange}
        />

        {!isEditing ? (
          <button onClick={onClick} className='btn-add'>
            ADD
          </button>
        ) : (
          <button onClick={onUpdate} className='btn-add'>
            UPDATE
          </button>
        )}
      </div>

      {items.map((item) => (
        <div
          key={item._id}
          className={isEditing === item._id ? "item-edit" : "item-list"}
        >
          {item.name}
          <div className='list-row'>
            <GrEdit
              onClick={() => onEdit(item)}
              style={{ cursor: "pointer" }}
            />
            <RiDeleteBin2Line
              onClick={() => onDelete(item)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToBuyForm;
