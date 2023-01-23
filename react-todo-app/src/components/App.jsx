import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [item, setItem] = useState("");
  const [lis, setLis] = useState([]);

  function handleItem(e) {
    let {value} = e.target;
    setItem(value)
  }

  function handleClick(e) {
    setLis((prevItems) => {
      return ([
        ...prevItems, item
      ])
    })
    setItem("")
  }

  function deleteItem(id) {
    setLis(prevItems => prevItems.filter((item, index)=> index !== id))
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={handleItem} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {lis.map((item, index) => (<TodoItem key={index} id={index} listItem={item} deleteItem={deleteItem}/>))} 
        </ul>
      </div>
    </div>
  );
}

export default App;
