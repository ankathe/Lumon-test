import React from "react";
import "./structure.css";
import Form from './form';
import Tasks from './tasks';

function Structure(){
    return(
        <div className="container-structure">
            <Form/>
            <div className="container-task">
                <Tasks/>
            </div>
            
        </div>
    )
}

export default Structure;