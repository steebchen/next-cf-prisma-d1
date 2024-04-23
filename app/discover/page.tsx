import { get } from '@/lib/cf'
import Link from 'next/link'

export const runtime = 'edge'

export default async function Discover() {
  const { db } = await get()

  const polls = await db.poll.findMany()

  return (
    <div>
      <h1>Discover</h1>

      <ul>
        {polls.map((poll) => (
          <li key={poll.id}>
            <Link href={`/poll/${poll.id}`}>
              <a>{poll.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
