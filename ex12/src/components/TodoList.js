import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Hooks (useState)' },
    { id: 2, text: 'Build Todo List Component' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const newTodoObj = {
      id: Date.now(),
      text: inputVal.trim()
    };
    setTodos([...todos, newTodoObj]);
    setInputVal('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">4. Todo List</h3>
      <form onSubmit={handleAddTodo} className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new todo item..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit" className="btn btn-primary px-4">
          Add Todo
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="text-muted fst-italic mb-0">No todo items available. Add one above!</p>
      ) : (
        <ul className="list-group">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{todo.text}</span>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
