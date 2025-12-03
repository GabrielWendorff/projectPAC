// Service layer: use Vite environment variable to configure API root.
const API_ROOT = import.meta.env.VITE_API_BASE || '/api'
const API_BASE = `${API_ROOT}/volunteers`

async function handleResponse(res) {
  if (!res) throw new Error('No response')
  const contentType = res.headers.get('content-type') || ''
  if (!res.ok) {
    // try to parse server error message
    if (contentType.includes('application/json')) {
      const err = await res.json()
      throw new Error(err.message || JSON.stringify(err))
    }
    throw new Error(res.statusText || `HTTP ${res.status}`)
  }
  if (contentType.includes('application/json')) return res.json()
  return null
}

export async function getVolunteers(){
  const res = await fetch(`${API_BASE}/`, { credentials: 'include' })
  return await handleResponse(res)
}

export async function addVolunteer(data){
  const res = await fetch(`${API_BASE}/`,{
    method:'POST',
    credentials: 'include',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function deleteVolunteer(id){
  const res = await fetch(`${API_BASE}/${id}`,{method:'DELETE', credentials: 'include'})
  return handleResponse(res)
}

export async function editVolunteer(id, data){
  const res = await fetch(`${API_BASE}/${id}`,{
    method:'PUT',
    credentials: 'include',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function verifyUser(username, password){
  const res = await fetch(`/api/users/verify`,{
    method: 'POST',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  })
  return handleResponse(res)
}

export async function logoutUser(){
  const res = await fetch(`/api/users/logout`,{
    method: 'POST',
    credentials: 'include'
  })
  return handleResponse(res)
}
