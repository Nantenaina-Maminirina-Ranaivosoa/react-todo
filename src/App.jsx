import React from 'react';
import './App.css';

function App() {
  return (
    <div className="todo-container">
      <h1>Ma To-do List</h1>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Ajouter une nouvelle tache..."
          autoComplete="off"
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul className="task-list">
        <li>
          <span>Apprendre React</span>
          <button className="delete-btn">Supprimer</button>
        </li>
        <li>
          <span>Creer une To-do List</span>
          <button className="delete-btn">Supprimer</button>
        </li>
      </ul>
    </div>
  );
}

export default App;