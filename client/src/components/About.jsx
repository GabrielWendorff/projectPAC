import React from 'react'
import costura from '../assets/images/costura.jpg'

export default function About(){
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about-section-title">Sobre nós</h2>
      </div>
      <div className="container about-inner">
        <div className="about-card-left">
          <div className="about-body">
            <p>Nós acreditamos que a compaixão e a generosidade são ferramentas poderosas capazes de transformar a vida das pessoas, e que cada agulha e linha podem fazer a diferença.</p>

            <p>Somos um grupo diverso de mulheres, de todas as idades e origens, que se uniram por um objetivo comum: ajudar quem precisa. Através da nossa paixão pela costura, criamos peças únicas e especiais que são doadas para hospitais, igrejas e a comunidade carente em geral. Somos uma comunidade de mulheres que se apoiam, se motivam e se inspiram mutuamente.</p>

            <p>A união faz a força, e que juntas podemos fazer mais e melhor. Continuaremos costurando sonhos, tecendo sorrisos e transformando vidas, ponto a ponto. Acreditamos que a bondade é contagiante e que, juntos, podemos construir um mundo mais justo e solidário.</p>
          </div>
        </div>

        <div className="about-image">
          <img src={costura} alt="Costura" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src='/images/costura.jpg' }} />
        </div>
      </div>
      <div className="container">
        <div className="about-stats" aria-hidden="false">
          <div className="stat">
            <div className="stat-circle">10+</div>
            <div className="stat-label">Anos de ONG</div>
          </div>
          <div className="stat">
            <div className="stat-circle">1000+</div>
            <div className="stat-label">Peças produzidas</div>
          </div>
          <div className="stat">
            <div className="stat-circle">10+</div>
            <div className="stat-label">Voluntárias ativas</div>
          </div>
        </div>
      </div>
    </section>
  )
}
