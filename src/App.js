import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './componant/Navbar';
import Home from './componant/Home';
import About from './componant/About';
import NoteContext from './context/notes/NodeState';
import Alert from './componant/Alert';
import Login from './componant/Login';
import Signup from './componant/Signup';

function App() {
  return (
    // <> This is the GHOST element.
    <>
      <NoteContext>
        <BrowserRouter>
          <Navbar />
          <Alert massage="This is a massage"/>
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/login' element={<Login />}></Route>
              <Route exact path='/signup' element={<Signup />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteContext>
    </>
  );
}

export default App;
