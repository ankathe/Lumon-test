import React, {useState} from "react";
import "./structure.css";
import Form from './form';
import Tasks from './tasks';

function Structure(){
const localStorageTasks = localStorage.getItem('taskSystem_v1');
let parsedTaskSystem = []

// los try catch son para prevenir un error y que la app no falle
try {
    parsedTaskSystem = JSON.parse(localStorageTasks);    
} catch (error) {
    parsedTaskSystem = []
}

const [tasks, setTasks] = useState(parsedTaskSystem ? parsedTaskSystem : []);

const addTask= task => {
    if (task.text.trim()){
        task.text = task.text.trim();
        const tasksUpdated = [task, ...tasks];
        setTasks(tasksUpdated);
        localStorage.setItem('taskSystem_v1',JSON.stringify(tasksUpdated));
    }
    
}
const deleteTask = id => {
    const tasksUpdated = tasks.filter(task => task.id !== id);
    setTasks(tasksUpdated);
    localStorage.setItem('taskSystem_v1',JSON.stringify(tasksUpdated));
}

const completedTask = id => {
    const completedTasks = [...tasks];
    const taskIndex = completedTasks.findIndex(task => task.id === id);
    completedTasks[taskIndex].completed =! completedTasks[taskIndex].completed;
    setTasks(completedTasks); 
    localStorage.setItem('taskSystem_v1',JSON.stringify(completedTasks));
}

const editTask = (updateTask) => {
    const editedTasks = [...tasks];
    const editedTasksIndex = editedTasks.findIndex(task => task.id === updateTask.id);
    editedTasks[editedTasksIndex].text = updateTask.text;
    setTasks(editedTasks); 
    localStorage.setItem('taskSystem_v1',JSON.stringify(editedTasks));
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

// const defaultTaskSystem = [
//     {id: id, text: 'Learn Angular', completed: false, priority: 0}, 
//     {id: id, text: 'present Test', completed: false, priority: 1}
// ]

// localStorage.setItem('taskSystem_v1', defaultTaskSystem);

// localStorage.getItem('taskSystem_v1');
// JSON.stringify(defaultTaskSystem);

// const stringifyDefaultTaskSystem = JSON.stringify(defaultTaskSystem);