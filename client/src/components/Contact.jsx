import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Contact(){
  return (
    <section id="contact" className="container">
      <h3 className="section-subtitle">Entre em <span>contato</span> conosco</h3>
      <div className="contact-grid">
        <div>
          <p>Entre em contato através das nossas redes ou venha até nós:</p>
          <p>Rua Antônio Cunha, 160</p>
          <p>Baependi, Jaraguá do Sul - SC</p>
          <p>89256-140</p>

          <div className="social-row">
            <a className="social-icon" href="https://wa.me/554796688983" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a className="social-icon" href="https://www.instagram.com/costura_solidaria_js/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="social-icon" href="https://www.facebook.com/costura_solidaria_js/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
        <div>
          <div className="card">
            <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.0801008671388!2d-49.07241082367332!3d-26.485365675485628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de95044670248d%3A0x717f3f32c5d326!2sRodoviaria%20de%20Jaragu%C3%A1%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1711583266309!5m2!1spt-BR!2sbr" width="100%" height="300" style={{border:0,borderRadius:8}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
