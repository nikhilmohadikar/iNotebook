// rafce
import React, { useContext } from 'react'
import noteContext from '../context/notes/nodeContext';


const Noteitem = (props) => {
  const context = useContext(noteContext)
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-regular fa-trash-can mx-2" onClick={() => deleteNote(note._id)} ></i>
          <i className="fa-regular fa-pen-to-square mx-2" onClick={() => updateNote(note)}></i>
        </div>
      </div>
    </div>
  )
}

export default Noteitem
