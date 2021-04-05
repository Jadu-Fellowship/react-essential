import classes from "./App.module.css";

function Items(props) {
  const items = props.items;
  const deleteItem = props.deleteItem;
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id}>
          <p className={classes.item}>{item.name}</p>{" "}
          <button onClick={() => deleteItem(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Items;
