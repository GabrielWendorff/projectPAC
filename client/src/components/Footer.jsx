import React from 'react'
import logo from '../assets/images/logo.png'

export default function Footer(){
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">

        <div className="muted" style={{textAlign:'center',fontSize:13}}>
          &copy; {new Date().getFullYear()} Costura Solidária — Todos os direitos reservados
        </div>

        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <a className="social-icon" href="https://wa.me/554796688983" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .051 5.322.051 11.948c0 2.107.553 4.162 1.6 5.995L0 24l6.258-1.616a11.928 11.928 0 005.742 1.45h.002c6.627 0 11.949-5.322 11.949-11.948 0-3.196-1.246-6.197-3.43-8.386z" fill="#25D366"/>
              <path d="M17.32 14.77c-.3-.15-1.76-.87-2.03-.97-.27-.11-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.79-1.5-1.76-1.67-2.07-.17-.31-.02-.48.13-.63.14-.14.31-.36.47-.55.16-.19.21-.32.31-.53.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.51l-.57-.01c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44 0 1.44 1.03 2.84 1.17 3.04.14.2 2.02 3.08 4.9 4.32 2.9 1.24 2.9.83 3.42.78.52-.05 1.68-.67 1.92-1.32.24-.65.24-1.2.17-1.31-.07-.11-.26-.17-.55-.31z" fill="#fff"/>
            </svg>
          </a>
          <a className="social-icon" href="https://www.instagram.com/costura_solidaria_js/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 6.5h.01" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
