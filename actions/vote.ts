'use server'

import { z } from 'zod'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { get } from '@/lib/cf'

const schema = z.object({
  poll: z.string(),
  row: z.string(),
})

export async function vote(data: {
  poll: string
  row: string
}) {
  const { db, kv } = await get()
  const { poll, row } = schema.parse(data)

  const headersList = headers()
  let ip = headersList.get('x-forwarded-for')

  if (!ip) {
    // eslint-disable-next-line no-console
    console.error('no ip')
    ip = '::1'
  }

  const key = `poll:vote:${poll}:${ip}`

  const already = await kv.get(key)
  if (already) {
    return { message: 'already voted' }
  }

  await kv.put(key, 'true', { expirationTtl: 60 * 60 * 24 * 30 })

  await db.row.update({
    where: { id: row },
    data: {
      votes: {
        increment: 1,
      },
    },
  })

  return redirect(`/poll/${poll}`)
}
