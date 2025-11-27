import React from 'react'
import donation from '../assets/images/donation.png'

export default function Help(){
  return (
    <section id="help" className="container">
      <h3 className="section-subtitle">Contribua com nossa <span>causa</span></h3>
      <div className="help-grid">
        <div>
          <img src={donation} alt="doacao" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src='/images/donation.png' }} />
        </div>
        <div>
          <div className="card mb-1">
            <h4>Doação de materiais</h4>
            <p className="muted">Aceitamos tecidos, linhas, agulhas, botões, zíperes e outros materiais.</p>
          </div>
          <div className="card mb-1">
            <h4>Doação monetária</h4>
            <p className="muted">Sua doação ajuda a cobrir custos operacionais e compra de materiais.</p>
          </div>
          <div className="card mb-1">
            <h4>Divulgue a causa</h4>
            <p className="muted">Compartilhe nossa causa nas redes sociais e com amigos.</p>
          </div>
          <div className="card">
            <h4>Voluntariado</h4>
            <p className="muted">Se você sabe costurar e quer ajudar, entre em contato e faça parte do nosso grupo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
