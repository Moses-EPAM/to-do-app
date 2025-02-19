import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [suggestedTask, setSuggestedTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({ title, description, status: "TO-DO", archived: false });
    setTitle("");
    setDescription("");
  };

  // Simulated AI suggestion
  const handleAiSuggest = () => {
    const aiSuggestions = ["Write a blog post", "Read about AI", "Practice coding", "Go for a run"];
    setSuggestedTask(aiSuggestions[Math.floor(Math.random() * aiSuggestions.length)]);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <button type="submit">Add Task</button>
      <button type="button" onClick={handleAiSuggest}>
        AI Suggest Task
      </button>
      {suggestedTask && <p>Suggested Task: {suggestedTask}</p>}
    </form>
  );
}

export default TaskForm;
