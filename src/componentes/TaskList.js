import React from 'react';

//Manejo de las Task de forma individual, marcar completada o eliminar

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span className={task.completed ? 'completed' : 'uncompleted'}>{task.text}</span>
          <div className="buttons">
              <button className="completeButton" onClick={() => completeTask(index)}>✓</button>
              <button className="deleteButton" onClick={() => deleteTask(index)}>X</button>
         </div>
       </li>
      ))}
    </ul>
  );
};

export default TaskList;