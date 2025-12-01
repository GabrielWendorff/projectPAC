import React, { useEffect, useState } from 'react'
import { getVolunteers, addVolunteer, deleteVolunteer, editVolunteer } from '../services/api'

// Administrative volunteers screen: list, add, edit, delete
export default function VolunteersAdmin(){
  const [volunteers, setVolunteers] = useState([])
  const [form, setForm] = useState({name:'', phone:'', email:''})
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)

  useEffect(()=>{ load() }, [])

  async function load(){
    const data = await getVolunteers()
    setVolunteers(data || [])
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

  function openModalForEdit(v){
    setEditingId(v.id)
    setForm({name:v.name, phone:v.phone, email:v.email})
    setShowModal(true)
  }

  return (
    <section id="volunteers-admin" className="container">
      <div className="mb-1">
        <h3 className="section-subtitle">Voluntários (Admin)</h3>
      </div>

      <div className="controls">
        <button className="btn btn-add" onClick={()=>{setShowModal(true); setEditingId(null); setForm({name:'',phone:'',email:''})}}>Adicionar</button>
        <button className="btn secondary" onClick={load}>Atualizar</button>
      </div>

      <div className="vol-list">
        {volunteers.map(v=> (
          <div key={v.id} className="card vol-card">
            <h4>{v.name}</h4>
            <div className="vol-meta">{v.phone} • {v.email}</div>
            <div className="vol-actions">
              <button className="btn secondary" onClick={()=>openModalForEdit(v)}>Editar</button>
              <button className="btn" onClick={()=>handleDelete(v.id)}>Excluir</button>
            </div>
          </div>
        ))}
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
              </div>
              <div style={{textAlign:'right'}}>
                <button type="button" className="btn secondary" onClick={()=>setShowModal(false)} style={{marginRight:8}}>Cancelar</button>
                <button type="submit" className="btn">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
