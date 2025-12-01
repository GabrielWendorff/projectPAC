import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxes, faHandHoldingDollar, faBullhorn, faHandsHelping, faTshirt } from '@fortawesome/free-solid-svg-icons'

export default function Help(){
  return (
    <section id="help" className="container">
  <h3 className="section-subtitle">Contribua com nossa <span>causa</span></h3>
  <p className="help-intro muted">Sua participação faz a diferença, veja abaixo como você pode contribuir do seu próprio jeito.</p>

      {/* Grid of help options: distributes cards cleanly on desktop and stacks on mobile */}
      <div className="help-grid">
        <div className="card">
          <div className="card-left">
            <span className="card-icon" aria-hidden="true"><FontAwesomeIcon icon={faTshirt} /></span>
          </div>
          <div className="card-right">
            <h4>Doação de materiais</h4>
            <p className="muted">Aceitamos tecidos, linhas, agulhas, botões, zíperes e outros materiais.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-left">
            <span className="card-icon" aria-hidden="true"><FontAwesomeIcon icon={faHandHoldingDollar} /></span>
          </div>
          <div className="card-right">
            <h4>Doação monetária</h4>
            <p className="muted">Sua doação ajuda a cobrir custos operacionais e compra de materiais.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-left">
            <span className="card-icon" aria-hidden="true"><FontAwesomeIcon icon={faBullhorn} /></span>
          </div>
          <div className="card-right">
            <h4>Divulgue a causa</h4>
            <p className="muted">Compartilhe nossa causa nas redes sociais e com amigos para ampliar nosso alcance.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-left">
            <span className="card-icon" aria-hidden="true"><FontAwesomeIcon icon={faHandsHelping} /></span>
          </div>
          <div className="card-right">
            <h4>Voluntariado</h4>
            <p className="muted">Se você sabe costurar e quer ajudar, entre em contato e faça parte do nosso grupo.</p>
          </div>
        </div>
      </div>

      {/* Single centered CTA */}
      <div className="help-cta" aria-hidden="false">
        <button className="btn" aria-label="Ajude">Quero ajudar</button>
      </div>
    </section>
  )
}
