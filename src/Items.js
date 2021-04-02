import classes from "./App.module.css";

function Items(props) {
  const items = props.items;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p className={classes.item}>{item.name}</p> <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Items;
