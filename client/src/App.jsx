import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Help from './components/Help'
import Volunteers from './components/Volunteers'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Help />
        <Volunteers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
