import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/nodeContext';
import Noteitem from './Noteitems';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
    }, [])
    
    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })
    const ref = useRef(null)

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({etitle: currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        console.log("Updating the notes ",  note)
        e.preventDefault();
    }

    return (
        <>
            <div>
                <AddNote />
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="container my-4">
                                    <h2>Add a Note</h2>
                                    <div className="my-3">
                                        <div className="mb-3">
                                            <label htmlFor="etitle" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="edescription" className="form-label">Description</label>
                                            <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="etag" className="form-label">Tag</label>
                                            <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="my-5">
                        <h2>Your Notes</h2>
                        <div className="row row-cols-1 row-cols-md-4 g-4 my-2">
                            {notes.map((note) => {
                                return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes
