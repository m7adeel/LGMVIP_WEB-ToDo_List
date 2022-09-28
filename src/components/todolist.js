import React, { useState } from "react";
import Note from "./notes";

import "./styles.css";

export default function ToDoList() {
    const [notes, setNotes] = useState(["Exercise", "Complete Assignment", "Perpare Quiz"]);

    const addNote = async () => {
        await setNotes((previousState) => {
            const note = document.getElementById("newNote").value;
            return [...previousState, note]
        })

        document.getElementById("newNote").value = "";
    }

    const deleteNote = async (noteDesc) => {
        await setNotes((previousState) => {
            var newArr = []
            // remove the element with noteDesc
            for (var i in previousState) {
                if (previousState.at(i) !== noteDesc) {
                    newArr.push(previousState.at(i))
                }
            }

            return newArr
        })
    }

    const notesList = notes.map(description => <Note description={description} deleteNote={deleteNote} />)

    return (
        <section className="container">
            <div className="addNotesForm">
                <h2>Add a note</h2>
                <div className="form">
                    <input typeof="text" id="newNote"></input>
                    <button className="addNotebutton" onClick={addNote}>Add Note</button>
                </div>
            </div>
            <div className="noteslist">
                {notesList}
            </div>
        </section>
    )
}