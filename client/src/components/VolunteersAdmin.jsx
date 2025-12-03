import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getVolunteers, addVolunteer, deleteVolunteer, editVolunteer } from '../services/api'

// Administrative volunteers screen: list, add, edit, delete
export default function VolunteersAdmin(){
  const [volunteers, setVolunteers] = useState([])
  const [needsLogin, setNeedsLogin] = useState(false)
  const [loginForm, setLoginForm] = useState({username:'', password:''})
  const [form, setForm] = useState({name:'', phone:'', email:''})
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{ load() }, [])

  async function load(){
    try{
      const data = await getVolunteers()
      setVolunteers(data || [])
      setNeedsLogin(false)
    }catch(err){
      console.error('load volunteers error', err)
      if(String(err).toLowerCase().includes('unauthorized') || String(err).includes('401')){
        // redirect to admin login page
        navigate('/admin')
      }
    }
  }

  async function handleAdd(e){
    e.preventDefault()
    if(editingId){
      await editVolunteer(editingId, form)
      setEditingId(null)
    } else {
      await addVolunteer(form)
    }
    setForm({name:'', phone:'', email:''})
    setShowModal(false)
    load()
  }

  async function handleDelete(id){
    if(!confirm('Excluir voluntário?')) return
    await deleteVolunteer(id)
    load()
  }

  // login handled by dedicated AdminLogin page

  function openModalForEdit(v){
    setEditingId(v.id)
    setForm({name:v.name, phone:v.phone, email:v.email})
    setShowModal(true)
  }

  return (
    <section id="volunteers-admin" className="container">

      <div className="volunteers-section">
        <h4 className="section-subtitle">Voluntários</h4>
        <div className="vol-list volunteer-list">
          {volunteers.filter(v=> (v.role||'volunteer') !== 'admin').map(v=> (
            <div key={v.id} className="card vol-card">
              <h4 style={{margin:'0 0 4px 0'}}>{v.name}</h4>
                <div className="vol-meta">
                    <div className="vol-line">{v.phone}</div>
                    <div className="vol-line">{v.email}</div>
                  </div>
              <div className="vol-actions">
                <button className="btn secondary" onClick={()=>openModalForEdit(v)}>Editar</button>
                <button className="btn" onClick={()=>handleDelete(v.id)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <h2>{editingId ? 'Editar Voluntário' : 'Adicionar Voluntário'}</h2>
              <button className="modal-close" onClick={()=>setShowModal(false)}>×</button>
            </div>
            <form onSubmit={handleAdd}>
              <div className="form-row">
                <input placeholder="Nome do Voluntário" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
                <input placeholder="Telefone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} required />
                <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
                {/* role switch removed — only volunteers are managed here */}
              </div>
              <div style={{textAlign:'right'}}>
                <button type="button" className="btn secondary" onClick={()=>setShowModal(false)} style={{marginRight:8}}>Cancelar</button>
                <button type="submit" className="btn">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Login is handled on /admin/login */}

      {/* Floating action menu fixed to bottom */}
      <div className="floating-menu" role="toolbar" aria-label="Ações rápidas">
        <div className="floating-menu-inner">
          <button
            className="btn btn-add"
            onClick={()=>{setShowModal(true); setEditingId(null); setForm({name:'',phone:'',email:''})}}
          >
            Adicionar
          </button>

          <button
            className={`btn secondary`}
            onClick={()=>navigate('/')}
          >
            Voltar à Home
          </button>
        </div>
      </div>
    </section>
  )
}

