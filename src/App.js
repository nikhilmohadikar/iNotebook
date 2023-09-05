import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './componant/Navbar';
import Home from './componant/Home';
import About from './componant/About';
import NoteContext from './context/notes/NoteState';
import Alert from './componant/Alert';
import Login from './componant/Login';
import Signup from './componant/Signup';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    // <> This is the GHOST element.
    <>
      <NoteContext>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home showAlert={showAlert} />}></Route>
              <Route exact path='/about' element={<About showAlert={showAlert} />}></Route>
              <Route exact path='/login' element={<Login showAlert={showAlert} />}></Route>
              <Route exact path='/signup' element={<Signup showAlert={showAlert} />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteContext>
    </>
  );
}

export default App;
