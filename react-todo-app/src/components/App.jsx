import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [lis, setLis] = useState([]);

  function handleClick(item) {
    setLis((prevItems) => {
      return ([
        ...prevItems, item
      ])
    })
  }

  function deleteItem(id) {
    setLis(prevItems => prevItems.filter((item, index)=> index !== id))
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea  handleClick={handleClick} />
      <div>
        <ul>
        {lis.map((item, index) => (<TodoItem key={index} id={index} listItem={item} deleteItem={deleteItem}/>))} 
        </ul>
      </div>
    </div>
  );
}

export default App;
