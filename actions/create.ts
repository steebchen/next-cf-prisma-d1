'use server'

import { convert } from '@/lib/convert'
import { getPoll } from '@/lib/poll'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { get } from '@/lib/cf'

const schema = z.object({
  title: z.string(),
  rows: z.array(z.string()),
})

export async function create(formData: FormData) {
  const { db } = await get()

  const payload = convert(formData)

  const { title, rows } = schema.parse(payload)
  const sanitizedRows = rows
    .filter((row) => row.trim().length > 0)
    .map((row) => ({ title: row }))

  const poll = await db.poll.create({
    data: {
      title,
      rows: {
        createMany: {
          data: sanitizedRows,
        },
      },
    },
  })

  // cache
  await getPoll(poll.id)

  return redirect(`/poll/${poll.id}`)
}
