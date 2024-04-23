import { unstable_cache } from 'next/cache'
import { getDB } from '@/lib/cf'

export const getPoll = unstable_cache(
  async (id: string) =>
    (await getDB()).poll.findUnique({
      where: { id },
      include: { rows: true },
    }),
  undefined,
  {
    revalidate: 10,
  },
)
