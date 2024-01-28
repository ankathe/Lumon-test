import React from 'react'
import { FaPencil } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";
import { FaSquareCheck } from "react-icons/fa6";
import { FcHighPriority } from "react-icons/fc";
import "./task.css";

function Tasks(){
  return (
    <div>
      <div className="task-container">
          
            <div className="icon-check">
            <FaSquareCheck />
            </div>
        <div className="task">

        </div>
        <div className="container-icons-end">
          <div className="icon-write">
            <FaPencil />
          </div>
          <div className="icon-delete">
            <BsTrash />
          </div>
      </div>

      </div>
      
    </div>
  )
}

export default Tasks;
