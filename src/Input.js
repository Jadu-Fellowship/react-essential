function Input(props) {
  const inputValue = props.inputValue;
  const onInputChange = props.onInputChange;
  const addItem = props.addItem;

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Todo Item"
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default Input;
