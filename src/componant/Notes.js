// rafce
import React, { useContext } from 'react'
import noteContext from '../context/notes/nodeContext'
import Noteitem from './Noteitems';

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, setNotes } = context;
    return (
        <div>
            <h2>Your Notes</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 my-3">
                {notes.map((note) => {
                    return <Noteitem note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes
