import React, {useState} from 'react';
import "./form.css"
import { v4 as uuidv4 } from 'uuid';

function Form(props){
    const [input, setInput] = useState('');
    
    const infoInput = e =>{
        setInput(e.target.value);
    }

    const sendForm = e => {
        e.preventDefault();
        
        const taskNew ={
            id: uuidv4(),
            text: input,
            completed: false
        }
        props.onSubmit(taskNew);
    }
    return (
        <form className='container-form' onSubmit={sendForm}>
            <input 
            type="text" 
            className="input-text" 
            placeholder='Add a task and label according to priority'
            onChange={infoInput}
            />
            <button className="button-form" type='submit' > Add </button>
        </form>
    )
}

export default Form;

