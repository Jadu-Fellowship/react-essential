import axios from "axios";
import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import Items from "./Items";
// import Input from "./Input";

const firebasePath = "https://todo-95eac.firebaseio.com";
function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addItem = () => {
    const updatedValue = [...items];
    updatedValue.push({
      id: Date.now(),
      name: inputValue,
    });

    setItems(updatedValue);
    setInputValue("");
    console.log(items);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((_, index) => {
      return id != index;
    });
    console.log(updatedItems);
    setItems(updatedItems);
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const saveToFirebase = () => {
    axios
      .post("https://todo-95eac.firebaseio.com/todos.json", {
        name: inputValue,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const getDataFromFirebase = () => {
    let updatedRecord = [];
    axios.get("https://todo-95eac.firebaseio.com/todos.json").then((res) => {
      for (const key in res.data) {
        updatedRecord.push(res.data[key]);
      }
      console.log(updatedRecord);
      updatedRecord = updatedRecord.filter((record) => {
        return record.name !== "New Item";
      });

      console.log(updatedRecord);
    });
  };

  return (
    <div className={classes.App}>
      <h1>Todo Application</h1>

      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Todo Item"
      />
      <button onClick={saveToFirebase}>Add Item</button>
      {/* <Input
        inputValue={inputValue}
        onInputChange={onInputChange}
        addItem={addItem}
      /> */}

      <Items deleteItem={deleteItem} items={items} />
      <button onClick={getDataFromFirebase}>Get Data</button>
    </div>
  );
}

export default App;
