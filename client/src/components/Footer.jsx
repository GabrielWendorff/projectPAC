import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">

        <div className="muted" style={{textAlign:'center',fontSize:13}}>
          &copy; {new Date().getFullYear()} Costura Solidária — Todos os direitos reservados
        </div>

        <div style={{display:'flex',alignItems:'center',gap:40}}>
          <a className="footer-social" href="https://wa.me/554796688983" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a className="footer-social" href="https://www.instagram.com/costura_solidaria_js/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="footer-social" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  )
}
