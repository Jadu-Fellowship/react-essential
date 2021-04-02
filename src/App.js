import React, { Component, useState } from "react";
import classes from "./App.module.css";
import Items from "./Items";
// import Input from "./Input";

// function Apps() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const addItem = () => {
//     const updatedValue = [...items];
//     updatedValue.push({
//       id: Date.now(),
//       name: inputValue,
//     });

//     setItems(updatedValue);
//     setInputValue("");
//     console.log(items);
//   };

//   const onInputChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   return (
//     <div className={classes.App}>
//       <h1>Todo Application</h1>

//       <input
//         type="text"
//         value={inputValue}
//         onChange={onInputChange}
//         placeholder="Todo Item"
//       />
//       <button onClick={addItem}>Add Item</button>
//       {/* <Input
//         inputValue={inputValue}
//         onInputChange={onInputChange}
//         addItem={addItem}
//       /> */}

//       <Items items={items} />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: "",
    };
  }

  addItem = () => {
    const updatedValue = [...this.state.items];

    updatedValue.push({
      id: Date.now(),
      name: this.state.inputValue,
    });

    this.setState({
      items: updatedValue,
      inputValue: "",
    });
  };

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    console.log(this.state.items, this.state.inputValue);
    return (
      <div className={classes.App}>
        <h1>Todo Application</h1>

        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onInputChange}
          placeholder="Todo Item"
        />
        <button onClick={this.addItem}>Add Item</button>

        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
