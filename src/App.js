import React, { useState } from 'react';
import './App.css';
import TaskForm from './componentes/TaskForm';
import TaskList from './componentes/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="card" id="listaCard">
      <h2>FORMULARIO DE TAREAS</h2>
      <TaskForm 
      addTask={addTask} 
      />
      <h2>LISTA DE TAREAS</h2>
      <TaskList 
      tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} 
      />
    </div>
  );
};

export default App;