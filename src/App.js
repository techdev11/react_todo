import React, { useState } from 'react';
import Input from './components/Input'
import Button from './components/Button'

import './App.css';

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
      <li key={idx} className='list_item'>
        <div>{item.taskName.toUpperCase()}</div>
        <Button type="sumbit" text="Complete Task" clickHandler={() => deleteItem(idx)} />
      </li>
    )
  })

  const classAssigned = `App ${items.length <= 0 ? "no_border" : ""}`

  return (
    <div>
      <h3>Tasks To Do</h3>
      <div className="App">
        <Input placeholder='Enter Item to add' value={value} changeHandler={changeHandler} />
        <Button type="submit" text="Add Item" clickHandler={addItemHandler} />
      </div>
      <div className={classAssigned} >
        {items.length > 0 && (<ul> {listTodoTask}</ul>)}
      </div>
    </div >
  );
}

export default App;
