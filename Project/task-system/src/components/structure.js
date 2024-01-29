import React, {useState} from "react";
import "./structure.css";
import Form from './form';
import Tasks from './tasks';

function Structure(){
const [tasks, setTasks] = useState([]);
const addTask= task => {
    if (task.text.trim()){
        task.text = task.text.trim();
        const tasksUpdated = [task, ...tasks];
        setTasks(tasksUpdated);
    }
}
    return(
        <div className="container-structure">
            <Form
            onSubmit ={addTask}/>
            <div className="container-task">
            { 
            tasks.map((task) =>
            <Tasks 
            key={task.id}
            id={task.id}
            text={task.text}
            completed ={task.completed}
            delete={task.delete}
            edit={task.edit}
            />
            )
            }
            </div>
            
        </div>
        )
}
export default Structure;