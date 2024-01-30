import { FaPencil } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";
import { FaSquareCheck } from "react-icons/fa6";
import React, {useState} from "react";
import "./tasks.css";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";

function Tasks({ id, text, completed, priority, completeTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const updateInputValue = (e)=>{
    const newInputValue = e.target.value;
      setInputValue(newInputValue); 
  }

  const onEdit = ()=>{
    setIsEditing(false);
      const updateTask ={
        id: id,
        text: inputValue,
        completed: false,
        priority: priority
    }
    editTask(updateTask);

  }
  

const renderDiv = () => {
  if (isEditing) {
    return (
    <div>
      <div className="container-toEdit">
        <input value={inputValue} className="input-toEdit" type="text" onChange={updateInputValue}/>
      <div className="container-icon-checkEdit"> 
          <FaRegCircleCheck onClick={onEdit}/>
      </div>
      <div className="container-icon-closeEdit">
          <CgCloseO onClick={()=>setIsEditing(false)}/>
      </div>
    </div>  
    </div>
    )
  }

  return (
  <div className="container-general">
    <div className="select">
      <select class="form-select" aria-label="Default select example">
        <option selected>Responsible</option>
        <option value="1">Manager</option>
        <option value="2">Developer</option>
        <option value="3">Analist</option>
      </select>
  </div>
    <div className="container-unedited">
      <div className= "container-icon-check" onClick={() => completeTask(id)}>
        <FaSquareCheck className={completed ? "icon-check completed" : "icon-check"}/> 
      </div>
      <div className={`task ${completed ? "completed" : ""}`} onClick={() => completeTask(id)}> {text} </div>
      <div className="container-icon-edit"> 
          <FaPencil onClick={()=>setIsEditing(true) }/>
      </div>
      <div className="container-icon-delete" onClick={() => deleteTask(id)}>
          <BsTrash/>
      </div>
    </div>
</div>
  )
}


  return (
    <div>
      <div className={`task-container ${completed  ? "completed" : ""} ${priority === "1" ? "priority-1" : "" } ${priority === "2" ? "priority-2" : "" } ${priority === "3" ? "priority-3" : "" }`}>
        
        {renderDiv()}
      </div>
    </div>
  );
}

export default Tasks;

