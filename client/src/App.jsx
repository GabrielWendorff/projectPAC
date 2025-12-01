import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Help from './components/Help'
import Volunteers from './components/Volunteers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import VolunteersAdmin from './components/VolunteersAdmin'

function Landing(){
  return (
    <>
      <Home />
      <About />
      <Help />
      <Volunteers />
      <Contact />
    </>
  )
}

export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin/volunteers" element={<VolunteersAdmin />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
