import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [item, setItem] = useState("");
  const [li, setLi] = useState([]);

  function handleChange(e) {
    let {value} = e.target;
    setItem(value)
    console.log(value)
  }

  function handleClick(e) {
    setLi((prevItems) => {
      return ([
        ...prevItems, item
      ])
    })
    setItem("")
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {li.map((item) => (<TodoItem listItem={item} />))} 
        </ul>
      </div>
    </div>
  );
}

export default App;
