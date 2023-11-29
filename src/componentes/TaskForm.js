import React, { useState } from 'react';

//Manejo de carga de las task

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

 //En caso de estar vacio, no agregar, sino agraga y limpia el campo para nuevo ingreso
  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <label htmlFor="task">Nueva Tarea: </label>
      <input type="text" id="task" value={task} onChange={handleInputChange} required />
      <button type="button" onClick={handleAddTask}>Agregar Tarea</button>
    </div>
  );
};

export default TaskForm;