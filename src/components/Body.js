import React, { useState } from "react";

const Body = () => {
  // type primative  : string,number, boolean
  // type reference : array, object, funtion
  // +) return lại địa chỉ dùng nhớ khi dùng phép gán
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Viec 1",
    },
    {
      id: 2,
      title: "Viec 2",
    },
  ]);

  const [title, setTitle] = useState("");

  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  };

  const addTodo = () => {
    const newTodos = [...todos];
    newTodos.push({
      id: Math.random() * 10000000,
      title,
    });
    setTitle("");

    setTodos(newTodos);
  };

  return (
    <div style={{ padding: 30 }}>
      <input type="text" onChange={handleSetTitle} value={title} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
