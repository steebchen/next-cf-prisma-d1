import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/container'
import { Poll } from '@/components/poll'
import { getPoll } from '@/lib/poll'
import { Stats } from '@/components/stats'

export const runtime = 'edge'
export const revalidate = 10

export default async function HomePage({
  params: { id },
}: {
  params: { id: string }
}) {
  const poll = await getPoll(id)

  if (!poll) {
    return notFound()
  }

  return (
    <Container className="p-4 flex items-center justify-center">
      <Stats />
      <Poll poll={poll} result={false} />
    </Container>
  )
}
