import { useState } from 'react'
import './App.css'
import Header from './components/HeaderPagina'
import Nav from './components/NavPagina'
import Main from './components/MainPagina'
import Aside from './components/AsidePagina'
import Footer from './components/FooterPagina'
import Body from './components/BodyPagina'

function App() {
  const [count, setCount] = useState(0)

  const titulo="Portal Académico"
  const institucion='IESP "TRUJILLO"'

  const anio= 2026
  const programa="Diseño y Programación Web"


  return (
    <>
          <Header tituloo ={titulo} inst = {institucion}></Header>
          <Nav></Nav>
          <Main></Main>
          <Aside></Aside>
          <Footer anho = {anio} prog = {programa}></Footer>
    </>
  )
}

export default App
