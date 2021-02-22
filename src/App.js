import React, { useState } from 'react';
import Input from './components/Input'
import Button from './components/Button'

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const addItemHandler = () => {
    setItems(prevState =>
      prevState.concat({ id: value, taskName: value })
    )
    setValue("")
  }

  const changeHandler = (e) => {
    setValue(e.target.value)
  }

  const deleteItem = idx => {
    const newItemsList = items.filter(item => items.indexOf(item) !== idx)
    setItems(newItemsList);
    return;
  }

  const listTodoTask = items.map((item, idx) => {
    return (
      <li key={idx} onClick={() => deleteItem(idx)}>{item.taskName}</li>
    )
  })

  return (
    <div className="App">
      <Input placeholder='Enter Item to add' value={value} changeHandler={changeHandler} />
      <Button type="submit" text="Add Item" clickHandler={addItemHandler} />
      {items.length > 0 && (<ul> {listTodoTask}</ul>)}
    </div>
  );
}

export default App;
