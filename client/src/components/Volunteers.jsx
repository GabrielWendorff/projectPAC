import React, { useState } from 'react'
import { addVolunteer } from '../services/api'

// Public landing component: small signup form for users to register as volunteers
export default function Volunteers(){
  const [form, setForm] = useState({name:'', phone:'', email:''})
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    try{
      await addVolunteer(form)
      setStatus('success')
      setForm({name:'', phone:'', email:''})
    } catch (err){
      console.error('signup error', err)
      setStatus('error')
    }
  }

  return (
  <section id="volunteers" className="volunteers-section">
      <div className="mb-1">
        <h3 className="section-subtitle">Seja voluntário</h3>
      </div>

      <p className="help-intro muted">Preencha o formulário abaixo para se cadastrar como voluntário — entraremos em contato em breve.</p>

      <div className="signup-wrapper">
        <div className="signup-card card">
          <form onSubmit={handleSubmit} className="vol-signup">
            <div className="form-row">
              <input placeholder="Nome completo" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
              <input placeholder="Telefone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} required />
              <input placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
            </div>

            <div style={{textAlign:'center', marginTop:64}}>
              <button type="submit" className="btn">Enviar</button>
            </div>

            {status === 'success' && <div className="muted" style={{textAlign:'center',marginTop:12}}>Cadastro enviado — obrigado!</div>}
            {status === 'error' && <div style={{color:'crimson',textAlign:'center',marginTop:12}}>Ocorreu um erro. Tente novamente.</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
