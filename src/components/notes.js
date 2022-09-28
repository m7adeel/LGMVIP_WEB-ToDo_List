import React from "react";

import "./styles.css";

export default function Note(props){

    function handleDelete(){
        props.deleteNote(props.description)
    }

    return (
        <div className="note">
            <h3>{props.description}</h3> 
            <button onClick={handleDelete}>Delete Note</button>
        </div>
    )
}