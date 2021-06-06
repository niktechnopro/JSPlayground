import "./styles.css";
import { useState, useEffect } from "react";

const TodoElement = ({ todo, isCompleted, idx, setCompleted, removeItem }) => {
  return (
    <li
      style={{
        textAlign: "left",
        backgroundColor: isCompleted ? "green" : "red"
      }}
    >
      {todo}
      <button style={{ marginLeft: 50 }} onClick={() => setCompleted(idx)}>
        {isCompleted ? "done" : "to do"}
      </button>
      <button onClick={() => removeItem(idx)}>remove item</button>
    </li>
  );
};

export default function App() {
  const [value, setNote] = useState({
    todo: "",
    isCompleted: false
  });

  const [todos, setTodos] = useState([]);

  const addNote = () => {
    if (value.todo) {
      todos.push(value);
      //reset
      setNote({
        todo: "",
        isCompleted: false
      }); //reset the field
    }
  };

  const setCompleted = (idx) => {
    const ourItem = todos[idx];
    const mTodos = [...todos];
    //change object
    const updatedItem = {
      ...ourItem,
      isCompleted: !ourItem.isCompleted
    };
    mTodos[idx] = updatedItem;
    setTodos(mTodos); //need to spread it to create new object
  };

  const removeItem = (idx) => {
    const mTodos = [...todos];
    mTodos.splice(idx,1);
    setTodos(mTodos);
  };

  console.log(todos);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input
        type="text"
        value={value.todo}
        onChange={(e) =>
          setNote({
            todo: e.target.value,
            isCompleted: false
          })
        }
      />
      <button onClick={addNote}>add note</button>
      <ul>
        {todos.length > 0 &&
          todos.map((element, idx) => {
            return (
              <TodoElement
                key={element.todo + idx}
                idx={idx}
                {...element}
                setCompleted={setCompleted}
                removeItem={removeItem}
              />
            );
          })}
      </ul>
    </div>
  );
}
