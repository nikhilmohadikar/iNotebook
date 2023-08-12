import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './componant/Navbar';
import Home from './componant/Home';
import About from './componant/About';
import NoteContext from './context/notes/NodeState';

function App() {
  return (
    // <> This is the GHOST element.
    <>
      <NoteContext>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/about' element={<About />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteContext>
    </>
  );
}

export default App;
