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
  try {
    const res = await fetch(`${API_BASE}/`)
    return await handleResponse(res)
  } catch (err) {
    console.error('getVolunteers error', err)
    return []
  }
}

export async function addVolunteer(data){
  const res = await fetch(`${API_BASE}/`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function deleteVolunteer(id){
  const res = await fetch(`${API_BASE}/${id}`,{method:'DELETE'})
  return handleResponse(res)
}

export async function editVolunteer(id, data){
  const res = await fetch(`${API_BASE}/${id}`,{
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}
