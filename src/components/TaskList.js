// import { useState } from "react";

// function TaskList({ tasks, updateTask }) {
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   const [newDescription, setNewDescription] = useState("");

//   const handleEditClick = (task) => {
//     setEditingTaskId(task.id);
//     setNewDescription(task.description);
//   };

//   const handleSaveClick = (id) => {
//     updateTask(id, { description: newDescription });
//     setEditingTaskId(null);
//   };

//   return (
//     <div>
//       {tasks.map((task) => (
//         <div
//           key={task.id}
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             marginBottom: "10px",
//             background: task.archived ? "#f0f0f0" : "white",
//           }}
//         >
//           <h3>{task.title}</h3>
//           {editingTaskId === task.id ? (
//             <>
//               <textarea
//                 value={newDescription}
//                 onChange={(e) => setNewDescription(e.target.value)}
//               />
//               <button onClick={() => handleSaveClick(task.id)}>Save</button>
//             </>
//           ) : (
//             <>
//               <p>{task.description}</p>
//               {!task.archived && <button onClick={() => handleEditClick(task)}>Edit Description</button>}
//             </>
//           )}
//           <p>Status: {task.status}</p>
//           {!task.archived && (
//             <>
//               <button onClick={() => updateTask(task.id, { status: "In-Progress" })}>In-Progress</button>
//               <button onClick={() => updateTask(task.id, { status: "Done" })}>Done</button>
//               <button onClick={() => updateTask(task.id, { archived: true })}>Archive</button>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TaskList;
import { useState } from "react";

function TaskList({ tasks, updateTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newDescription, setNewDescription] = useState("");

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setNewDescription(task.description);
  };

  const handleSaveClick = (id) => {
    updateTask(id, { description: newDescription });
    setEditingTaskId(null);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            background: task.archived ? "#f0f0f0" : "white",
          }}
        >
          <h3>{task.title}</h3>
          {editingTaskId === task.id ? (
            <>
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <button onClick={() => handleSaveClick(task.id)}>Save</button>
            </>
          ) : (
            <>
              <p>{task.description}</p>
              {!task.archived && <button onClick={() => handleEditClick(task)}>Edit Description</button>}
            </>
          )}
          <p>Status: {task.status}</p>
          {!task.archived && (
            <>
              {task.status !== "Done" && (
                <>
                  <button onClick={() => updateTask(task.id, { status: "In-Progress" })}>
                    In-Progress
                  </button>
                  <button onClick={() => updateTask(task.id, { status: "Done" })}>Done</button>
                </>
              )}
              <button onClick={() => updateTask(task.id, { archived: true })}>Archive</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
