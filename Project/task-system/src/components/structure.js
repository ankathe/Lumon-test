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
const deleteTask = id => {
    const tasksUpdated = tasks.filter(task => task.id !== id);
    setTasks(tasksUpdated);
}

const completedTask = id => {
    const completedTasks = [...tasks];
    const taskIndex = completedTasks.findIndex(task => task.id === id);
    completedTasks[taskIndex].completed =! completedTasks[taskIndex].completed;
    setTasks(completedTasks); 
}

const editTask = (updateTask) => {
    const editedTasks = [...tasks];
    const editedTasksIndex = editedTasks.findIndex(task => task.id === updateTask.id);
    editedTasks[editedTasksIndex].text = updateTask.text;
    setTasks(editedTasks); 
}

    return(
        <div className="container-structure">
            <Form onSubmit ={addTask}/>
            <div className="container-task">
            { 
                tasks.map((task) =>
                    <Tasks 
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                    completeTask={completedTask}
                    priority={task.priority}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    />
                )
            }
            </div>
            
        </div>
        )
}
export default Structure;