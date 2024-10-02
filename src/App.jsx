import { useState } from 'react'

import './App.css'
import Formulario1 from './ComponenteF.jsx/Formulario1'
import Formulario2 from './ComponenteF.jsx/Formulario2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Nome e idade:</h1>
    <br/>
    <Formulario1/>
    <br/>
    <h1>Desceva os Ingressos:</h1>
    <Formulario2/>
    </>
  )
}

export default App
