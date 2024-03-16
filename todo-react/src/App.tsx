import React, { useState, ChangeEvent, FormEvent } from 'react';
import './App.css'


const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  const addTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!task.trim()) return;
    setTodos([...todos, task]);
    setTask('');
  };

  const removeTask = (index: number): void => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Lista zadań</h1>
      <form onSubmit={addTask}>
        <input
        className="inputTask"
          type="text"
          value={task}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
          placeholder="Dodaj nowe zadanie"
        />
        <button type="submit">Dodaj</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTask(index)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
