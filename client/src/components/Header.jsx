import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <nav className="nav" aria-label="main navigation">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#about">Sobre</a>
          <a className="nav-link" href="#help">Como Ajudar</a>
          <a className="nav-link" href="#volunteers">Voluntários</a>
          <a className="nav-link" href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  )
}
