import { useEffect, useState } from "react"
import Usuarios,{UserContext} from "./pages/Usuarios"
import Reserva from "./pages/Reserva"
import Login from "./pages/login"
import Registro from "./pages/register"
import UserReserva from "./UserReserva"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserDetail from "./pages/UserDetail"

function App() {
const [SelectedUser, setSelectedUser]=useState(null)
  return (
    
      <UserContext.Provider value={{SelectedUser, setSelectedUser}}>
      <Router>

      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/home" element={<UserReserva/>}></Route>
        <Route path="/UserDetail" element={<UserDetail/>}></Route>
      </Routes>
      </Router>

      </UserContext.Provider>
    
    )
   
  }


export default App
