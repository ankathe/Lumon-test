import React from 'react';
import "./form.css"

function Form(){
    return (
        <form className='container-form'>
            <input 
            type="text" 
            className="input-text" 
            placeholder='Add a task and label according to priority'
            />
            <button className="button-form" type='submit'> Add </button>
        </form>
    )
}

export default Form;

