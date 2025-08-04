import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Apprendre React" },
    { id: 2, text: "Creer une To-do List" },
  ]);

  const [input, setInput] = useState("");

  return (
    <div className="todo-container">
      <h1>Ma To-do List</h1>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Ajouter une nouvelle tache..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul className="task-list">
        {tasks.map(task => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button className="delete-btn">Supprimer</button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
