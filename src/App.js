import React, { useState } from 'react';
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import "./App.css";


const App = () => {

  const [items, setItems] = useState([]);

  function additem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

	function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });

    });
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={additem} />

      <div> <ul> {items.map((todoitem, index) => {

        return <ToDoItem key={index} text={todoitem} id={index} deleteItem={deleteItem} />

      })
      }

      </ul> </div>

    </div>
  );
};

export default App;
