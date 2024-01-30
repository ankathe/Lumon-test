import React, {useState} from 'react';
import "./form.css"
import { v4 as uuidv4 } from 'uuid';
import { FcHighPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";

function Form(props){
    const [input, setInput] = useState('');
    const [priority, setPriority] = useState(0);
    
    const infoInput = e =>{
        setInput(e.target.value);
    }

    const sendForm = e => {
        e.preventDefault();
        
        const taskNew ={
            id: uuidv4(),
            text: input,
            completed: false,
            priority: priority
        }
        props.onSubmit(taskNew);
    }
    const selectPriority = e =>{
        setPriority(e.target.value);
        console.log(e.target.value);
        
    }


    return (
        <form className='container-form' onSubmit={sendForm}>

            <div className="container-icons-form">
                <input type="radio" id="1" name="priority" value="1" onChange={selectPriority}/>
                    <label htmlFor="1" className="priority1-name">High Priority</label>

                <input type="radio" id="2" name="priority" value="2" onChange={selectPriority}/>
                    <label htmlFor="2" className="priority2-name">Medium Priority</label>
                <input type="radio" id="3" name="priority" value="3" onChange={selectPriority}/>
                    <label htmlFor="3" className="priority3-name">Low Priority</label>
            </div>
            <input 
            type="text" 
            className="input-text " 
            placeholder='Add a task and label according to priority'
            onChange={infoInput}
            />
            <button className="button-form" type='submit' disabled={input === '' || priority === 0} > Add </button>
        </form>
    )
}

export default Form;

{/* <div className="container-icons-form">
<FcHighPriority className="icon-highPriority"/>
<FcMediumPriority className="icon-mediumPriority"/>
<FcLowPriority className="icon-lowPriority"/>
</div>  */}