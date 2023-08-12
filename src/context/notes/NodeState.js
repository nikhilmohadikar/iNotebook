import NoteContext from "./nodeContext";
import { useState } from "react";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "64d479c776270d1d3d9685dfb",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.090Z",
            "__v": 0
        },
        {
            "_id": "64d479c7476270d13d9685dff",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.749Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO : API Call
        console.log("Adding a new note");
        const data = {
            "_id": "64d479c776270det13d9685dff",
            "user": "64d4513c6d02e4cae9003754",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-08-10T05:46:47.749Z",
            "__v": 0
        }
        setNotes(notes.concat(data))
    }

    // Delete a Note
    const deleteNote = () => {

    }

    // Edit a Note
    const editNote = () => {

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;