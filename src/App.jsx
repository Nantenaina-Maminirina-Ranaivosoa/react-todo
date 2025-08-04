import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Apprendre React" },
    { id: 2, text: "Creer une To-do List" },
  ]);

  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
    };

    setTasks([...tasks, newTask]);

    setInput("");
  };

  const handleDeleteTask = (idToDelete) => {
    const updatedTasks = tasks.filter(task => task.id !== idToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>Ma To-do List</h1>
      <form className="todo-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Ajouter une nouvelle tache..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
