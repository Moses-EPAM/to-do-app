import { useState } from "react";

function TaskList({ tasks, updateTask, darkMode }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [editingStatusId, setEditingStatusId] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  // Handle edit description click
  const handleEditClick = (task) => {
    if (task.status === "DONE") return; // Prevent editing if status is DONE
    setEditingTaskId(task.id);
    setNewDescription(task.description);
  };

  // Handle save description click
  const handleSaveClick = (id) => {
    if (!newDescription.trim()) return; // Prevent empty descriptions
    updateTask(id, { description: newDescription });
    setEditingTaskId(null);
  };

  // Handle status change click
  const handleStatusEditClick = (task) => {
    setEditingStatusId(task.id);
    setNewStatus(task.status);
  };

  // Save new status
  const handleStatusSaveClick = (id) => {
    updateTask(id, { status: newStatus });
    setEditingStatusId(null);
  };

  // Handle archive with confirmation
  const handleArchiveClick = (id) => {
    if (window.confirm("Are you sure you want to archive this task?")) {
      updateTask(id, { archived: true });
    }
  };

  return (
    <div className="w-50 mx-auto mt-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-3 rounded shadow border mb-3 ${darkMode ? "bg-dark text-white border-light" : "bg-light text-dark border-dark"}`}
        >
          <h3>{task.title}</h3>

          {/* Edit Description */}
          {editingTaskId === task.id ? (
            <div className="d-flex flex-column">
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className={`form-control mb-2 ${darkMode ? "bg-secondary text-white border-0" : "bg-white text-dark border"}`}
              />
              <div className="d-flex justify-content-between">
                <button onClick={() => handleSaveClick(task.id)} className="btn btn-success flex-fill me-2">
                  Save
                </button>
                <button onClick={() => setEditingTaskId(null)} className="btn btn-secondary flex-fill">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <p>{task.description || "No description available"}</p>
              {task.status !== "DONE" && (
                <button onClick={() => handleEditClick(task)} className="btn btn-warning w-100 mb-2">
                  Edit Description
                </button>
              )}
            </>
          )}

          {/* Edit Task Status */}
          {editingStatusId === task.id ? (
            <div className="d-flex flex-column">
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className={`form-select mb-2 ${darkMode ? "bg-secondary text-white border-0" : "bg-white text-dark border"}`}
              >
                <option value="TO-DO">TO-DO</option>
                <option value="IN-PROGRESS">IN-PROGRESS</option>
                <option value="DONE">DONE</option>
              </select>
              <div className="d-flex justify-content-between">
                <button onClick={() => handleStatusSaveClick(task.id)} className="btn btn-success py-2 flex-fill me-2">
                  Save
                </button>
                <button onClick={() => setEditingStatusId(null)} className="btn btn-secondary py-2 flex-fill">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p>
              <strong>Status:</strong> {task.status}{" "}
              {task.status !== "DONE" && (
                <button onClick={() => handleStatusEditClick(task)} className="btn btn-info btn-sm ms-2">
                  Edit
                </button>
              )}
            </p>
          )}

          {/* Archive Button */}
          <button onClick={() => handleArchiveClick(task.id)} className="btn btn-danger my-1 w-100">
            Archive
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
