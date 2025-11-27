import React from 'react'
import logo from '../assets/images/logo.png'

export default function Home(){
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-image">
          <img src={logo} alt="logo" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src='/images/logo.png' }} />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Fazer o bem, sem olhar a <span style={{color:'var(--accent)'}}>quem</span></h1>
          <p className="hero-sub">Somos um grupo de voluntárias que acredita que compaixao e generosidade transformam vidas. Junte-se a nós.</p>
          <div className="hero-cta">
            <a className="btn btn-primary btn-add" href="#volunteers">Quero Ajudar</a>
            <a className="btn secondary" href="#contact">Contato</a>
          </div>
        </div>
      </div>
    </section>
  )
}
