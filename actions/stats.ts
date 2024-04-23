'use server'

import { z } from 'zod'
import { headers } from 'next/headers'
import { get } from '@/lib/cf'

const schema = z.object({
  id: z.string(),
})

export async function stats(data: { id: string }) {
  const { db, kv } = await get()

  const { id } = schema.parse(data)

  const headersList = headers()
  let ip = headersList.get('x-forwarded-for')

  if (!ip) {
    // eslint-disable-next-line no-console
    console.error('no ip')
    ip = '::1'
  }

  const key = `poll:view:${id}:${ip}`

  const already = await kv.get(key)
  if (already) {
    return {}
  }

  await kv.put(key, 'true', { expirationTtl: 60 })

  await db.poll.update({
    where: { id },
    data: {
      views: {
        increment: 1,
      },
    },
  })

  return {}
}
