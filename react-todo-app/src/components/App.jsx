import React, { useState } from "react";

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
        ...prevItems, <li>{item}</li>
      ])
    })
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
        {li}
        </ul>
      </div>
    </div>
  );
}

export default App;
