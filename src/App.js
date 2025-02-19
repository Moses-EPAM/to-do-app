import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import tasksData from "./tasksData";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState(tasksData);
  const [darkMode, setDarkMode] = useState(true);

  // Function to add a task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task }]);
  };

  // Function to update a task
  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  return (
    <div className={`min-vh-100 d-flex flex-column justify-content-center align-items-center ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h1>Gen AI Kata - Team 7</h1>
      <TaskForm addTask={addTask} darkMode={darkMode} />
      <TaskList tasks={tasks} updateTask={updateTask} darkMode={darkMode} />
      
      {/* Dark mode toggle button positioned at bottom-right */}
      <button 
        className="btn btn-outline-light position-fixed" 
        style={{ bottom: "20px", right: "20px" }}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;
