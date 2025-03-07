import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hola from './Hola.jsx'
import Saludo from './Saludo.jsx'
import Contador from './Contador.jsx'
import NombreUsuario from './NombreUsuario.jsx'
import Formulario from './Formulario.jsx'
import Eventos from './Eventos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hola/>
    <Saludo/>
    <Contador/>
    <NombreUsuario/>
    <Formulario/>
    <Eventos/>
  </StrictMode>,
)
