import { useState } from "react";
import React from 'react';

function InputArea(props){
    const [item, setItem] = useState("");

    function handleItem(e) {
        let {value} = e.target;
        setItem(value)
      }
    return (
        <div className="form">
        <input value={item} onChange={handleItem} type="text" />
        <button 
        onClick={()=>{
            props.handleClick(item);
            setItem("");
        }}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea;