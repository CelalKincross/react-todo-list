import React from "react";


function TodoItem(props) {

    return (<li onClick={()=> props.deleteItem(props.id)} >{props.listItem}</li>)
}

export default TodoItem;