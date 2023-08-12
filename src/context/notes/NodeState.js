import NoteContext from "./nodeContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Nikhil",
        "class": "4b"
    }

    const [state, setstate] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setstate(
                {
                    "name": "Niku",
                    "class": "5b"
                }
            )
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{ state: state, update: update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;