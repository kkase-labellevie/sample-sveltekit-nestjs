import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
  const res = await fetch('http://localhost:3000/user-data')
  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
