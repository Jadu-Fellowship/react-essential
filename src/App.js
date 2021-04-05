import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import Items from "./Items";
// import Input from "./Input";

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

  // useEffect(() => {
  //   // fetch("https://jsonplaceholder.typicode.com/todos", {
  //   //   method: "GET",
  //   // })
  //   //   .then((response) => {
  //   //     return response.json();
  //   //   })
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   (async () => {
  //     let todos = await fetch("https://jsonplaceholder.typicode.com/todos", {
  //       method: "GET",
  //     });

  //     console.log(JSON.parse(todos));

  //     todos = await todos.text();
  //     todos = JSON.parse(todos);
  //     this.setState({
  //       items: todos,
  //     });
  //   })();
  // });

  const onInputChange = (e) => {
    setInputValue(e.target.value);
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
      <button onClick={addItem}>Add Item</button>
      {/* <Input
        inputValue={inputValue}
        onInputChange={onInputChange}
        addItem={addItem}
      /> */}

      <Items deleteItem={deleteItem} items={items} />
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Constructor");
//     this.state = {
//       items: [],
//       inputValue: "",
//     };
//   }

//   addItem = () => {
//     alert("Stopper");
//     const updatedValue = [...this.state.items];

//     updatedValue.push({
//       id: Date.now(),
//       name: this.state.inputValue,
//     });

//     this.setState({
//       items: updatedValue,
//       inputValue: "",
//     });
//   };

//   onInputChange = (e) => {
//     this.setState({
//       inputValue: e.target.value,
//     });
//   };

//   componentDidMount() {
//     console.log("ComponentDidMount");
//     // fetch("https://jsonplaceholder.typicode.com/todos", {
//     //   method: "GET",
//     // })
//     //   .then((response) => {
//     //     return response.json();
//     //   })
//     //   .then((res) => {
//     //     console.log(res);
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //   });

//     const todo = {
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     };
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify(todo),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .catch((err) => console.log("Path not found"))
//       .then((res) => console.log(res));

//     // (async () => {
//     //   let todos = await fetch("https://jsonplaceholder.typicode.com/todos", {
//     //     method: "GET",
//     //   });

//     //   console.log(JSON.parse(todos));

//     //   todos = await todos.text();
//     //   todos = JSON.parse(todos);
//     //   this.setState({
//     //     items: todos,
//     //   });
//     // })();
//   }

//   componentDidUpdate() {
//     console.log("ComponetDidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("ComponetWillUnmount");
//   }

//   render() {
//     console.log("Render");
//     console.log(this.state.items, this.state.inputValue);
//     return (
//       <div className={classes.App}>
//         <h1>Todo Application</h1>

//         <input
//           type="text"
//           value={this.state.inputValue}
//           onChange={this.onInputChange}
//           placeholder="Todo Item"
//         />
//         <button onClick={this.addItem}>Add Item</button>

//         <Items items={this.state.items} />
//       </div>
//     );
//   }
// }

export default App;
