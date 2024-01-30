import { FaPencil } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";
import { FaSquareCheck } from "react-icons/fa6";
import "./tasks.css";

function Tasks({ id, text, completed, priority, completeTask, deleteTask, editTask }) {

  return (
    <div>
      <div className={`task-container ${completed  ? "completed" : ""} ${priority === "1" ? "priority-1" : "" } ${priority === "2" ? "priority-2" : "" } ${priority === "3" ? "priority-3" : "" }`}>

        <div className= "container-icon-check" onClick={() => completeTask(id)}>
          <FaSquareCheck
            className={completed ? "icon-check completed" : "icon-check"}
          />
        </div>

        <div className={`task ${completed ? "completed" : ""}`} onClick={() => completeTask(id)}>
          {text}
        </div>

        <div className="container-icons-end">
          <div className="container-icon-edit" >
            <FaPencil className="icon-edit" />
          </div>

          <div className="container-icon-delete" onClick={() => deleteTask(id)}>
            <BsTrash className="icon-delete" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tasks;
