import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TaskForm({ addTask, darkMode }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({ title, description, status: "TO-DO", archived: false });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className={`p-4 rounded shadow-lg w-50 mx-auto ${darkMode ? "bg-secondary text-white" : "bg-light text-dark"}`}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
        className={`form-control mb-3 ${darkMode ? "bg-dark text-white border-0" : "bg-white text-dark border"}`}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        className={`form-control mb-3 ${darkMode ? "bg-dark text-white border-0" : "bg-white text-dark border"}`}
      />
      <button type="submit" className="btn btn-primary w-100">Add Task</button>
    </form>
  );
}

export default TaskForm;
