import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {Link} from "react-router-dom"
// import Funcionalidad from './Funcionalidad.jsx'
import Home from './Home.jsx'
import CrearUsuario from './CrearUsuario.jsx'
import ListarUsuario from './ListarUsuario.jsx'

function App() {
  

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/consumoApi">ConsumoAPi</Link></li>
            <li><Link to="/CrearUsuarios">CrearUsuario</Link></li>
            <li><Link to="ListarUsuario">ListarUsuario</Link></li>
          </ul>
        </nav>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/consumoApi" element={<CrearUsuario/>}></Route>
          <Route path="/CrearUsuarios" element={<CrearUsuario/>}></Route>
          <Route path="/ListarUsuario" element={<ListarUsuario/>}></Route>
      </Routes>
      </Router>
      
      
    </div>
  )
}

export default App
