import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Help from './components/Help'
import Volunteers from './components/Volunteers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import VolunteersAdmin from './components/VolunteersAdmin'
import AdminLogin from './components/AdminLogin'

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

function AppContent(){
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')
  const hideHeader = isAdminRoute
  const hideFooter = isAdminRoute

  return (
    <>
      {!hideHeader && <Header />}

      <div className="app-shell">
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/volunteers" element={<VolunteersAdmin />} />
          </Routes>
        </main>

        {!hideFooter && <Footer />}
      </div>
    </>
  )
}

export default function App(){
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
