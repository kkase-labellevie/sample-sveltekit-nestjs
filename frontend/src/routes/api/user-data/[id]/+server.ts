import type { RequestHandler } from '@sveltejs/kit'

export const DELETE: RequestHandler = async ({ params }) => {
  const id = params.id

  const res = await fetch(`http://localhost:3000/user-data/${id}`, {
    method: 'DELETE'
  })

  const result = await res.json()

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
