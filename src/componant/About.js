// rafce
import React, { useContext, useEffect } from "react"
import noteContext from "../context/notes/nodeContext"

const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
    // eslint-disable-next-line
    a.update();
  }, [])
  
  return (
    <div>
      This is about and {a.state.name} and {a.state.class}
    </div>
  )
}

export default About