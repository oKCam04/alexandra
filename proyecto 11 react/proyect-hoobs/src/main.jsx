import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Funcionalidad  from './Funcionalidad.jsx'
import Hooks from './Hooks.jsx'
import App from './App.jsx'
import Mensaje from './Mensaje.jsx'
import Referencia from './referencia.jsx'
import ConsumoApi from './consumoApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Hooks/>
  <App/>
  <Mensaje/>
  <Referencia/>
  <ConsumoApi/>
  </StrictMode>,
)
