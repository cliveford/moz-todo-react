import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// create object array
const DATA = [
  { todoid: 'todo-0', name: 'Eat', completed: true },
  { todoid: 'todo-1', name: 'Sleep', completed: false },
  { todoid: 'todo-2', name: 'Repeat', completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
