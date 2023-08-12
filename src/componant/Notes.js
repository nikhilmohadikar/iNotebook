import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/nodeContext';
import Noteitem from './Noteitems';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
    }, [])

    return (
        <>
            <AddNote />
            <div>
                <div className="my-5">
                    <h2>Your Notes</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4 my-2">
                        {notes.map((note) => {
                            return <Noteitem key={note._id} note={note} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes
