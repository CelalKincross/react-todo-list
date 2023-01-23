import React, { useState } from "react";


function TodoItem(props) {
    const [lineThrough, setLineThrough] = useState(false)

    function handleClick(){
        setLineThrough(prev => !prev);
    }

    return (<li onClick={handleClick} style={{textDecoration: lineThrough && "line-through"}} >{props.listItem}</li>)
}

export default TodoItem;