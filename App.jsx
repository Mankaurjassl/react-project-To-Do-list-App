import React, { useState } from 'react';

function TO_do_app() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask(""); 
    }
  };

  const handleDelete = (index) => {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  };

  return (
    <main>
      <div className="main-container">
        <h1>To Do List</h1>

        <div className="input-button">
          <input
            type="text"
            placeholder="Enter a Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAddTask}>+</button>
        </div>

        <div className="task">
          {taskList.map((item, index) => (
            <div className="todo" key={index}>
              <p>{item}</p>
              <div className="actions-btn">
                <input type="checkbox" />
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default TO_do_app;
    
