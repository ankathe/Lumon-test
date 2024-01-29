import React from "react";
import { FaPencil } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";
import { FaSquareCheck } from "react-icons/fa6";
import { FcHighPriority } from "react-icons/fc";
import "./tasks.css";

function Tasks({ id, text, completed, completeTask, deleteTask, editTask }) {
  return (
    <div>
      <div className={completed ? "task-container completed" : "task-container"}>

        <div className="container-icon-check">
          <FaSquareCheck
            className={completed ? "icon-check completed" : "icon-check"}
          />
        </div>

        <div className="task" onclick={() => completeTask(id)}>
          {text}
        </div>

        <div className="container-icons-end">
          <div className="container-icon-write" onclick={() => editTask(id)}>
            <FaPencil className="icon-edit" />
          </div>

          <div className="container-icon-delete" onclick={() => deleteTask(id)}>
            <BsTrash className="icon-delete" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tasks;
