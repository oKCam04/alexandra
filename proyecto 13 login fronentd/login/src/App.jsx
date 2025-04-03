import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login"
import Home from "./pages/Home"
import { useState } from'react';
import Registro from "./pages/registro"
function App() {
const [userEmail, setUserEmail] =useState('');
const [userpassword, setuserPassword] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login emailcito={setUserEmail} passwordcito={setuserPassword}/>} />
        <Route path="/Home" element={<Home userEmail={userEmail} userpassword={userpassword} />} />
        <Route path="/registro" element={<Registro/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
