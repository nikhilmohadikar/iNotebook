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
        },
        {
            "_id": "64d479c776270d13fd9685dfb",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.090Z",
            "__v": 0
        },
        {
            "_id": "64d479c7762s70d13d9685dff",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.749Z",
            "__v": 0
        },
        {
            "_id": "64d479c776e270d135d9685dfb",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.090Z",
            "__v": 0
        },
        {
            "_id": "64d479c77627w0d13d9685dff",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.749Z",
            "__v": 0
        },
        {
            "_id": "64d479c776270d13d9j685dfb",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.090Z",
            "__v": 0
        },
        {
            "_id": "64d479cw776270d13d9685dff",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.749Z",
            "__v": 0
        },
        {
            "_id": "64d479c776270d13d9685trdfb",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.090Z",
            "__v": 0
        },
        {
            "_id": "64d479cet776270d13d9685dff",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.749Z",
            "__v": 0
        },
        {
            "_id": "64d479c776270d13etd9685dfb",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.090Z",
            "__v": 0
        },
        {
            "_id": "64d479c776270det13d9685dff",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.749Z",
            "__v": 0
        },
        {
            "_id": "64d479c77627et0d13d9685dfb",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.090Z",
            "__v": 0
        },
        {
            "_id": "64d479c776270d13d96hs85dff",
            "user": "64d4513c6d02e4cae9003754",
            "title": "My title",
            "description": "Hello All set",
            "tag": "Personal",
            "date": "2023-08-10T05:46:47.749Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;