import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
  const res = await fetch('http://localhost:3000/user-data')
  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}

export const POST: RequestHandler = async ({ request }) => {
  const userData = await request.json()
  const res = await fetch('http://localhost:3000/user-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  })
  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
