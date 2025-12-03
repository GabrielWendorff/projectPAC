import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyUser } from '../services/api'

export default function AdminLogin(){
  const [form, setForm] = useState({username:'', password:''})
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    try{
      await verifyUser(form.username, form.password)
      setError('')
      navigate('/admin/volunteers')
    }catch(err){
      console.error('login failed', err)
      setError('Usuário ou senha inválidos')
    }
  }

  return (
    <section className="admin-login-page">
      <div className="container" style={{maxWidth:800}}>
        <div className="admin-login admin-login-card">
          <h2 className="section-subtitle">Área Administrativa</h2>

          <form onSubmit={handleSubmit} style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className="form-row" style={{width:'100%', maxWidth:360}}>
              <input placeholder="Usuário" value={form.username} onChange={e=>setForm({...form, username: e.target.value})} required />
              <input type="password" placeholder="Senha" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} required />
            </div>
            {error && <div style={{color:'var(--danger)', marginBottom:8, textAlign:'center'}}>{error}</div>}
            <div style={{width:'100%', maxWidth:360, textAlign:'center'}}>
              <button className="btn" type="submit" style={{width:'100%', borderRadius:10}}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
