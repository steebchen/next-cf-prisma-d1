import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/container'
import { Poll } from '@/components/poll'
import { getPoll } from '@/lib/poll'
import { Stats } from '@/components/stats'
import { Metadata } from 'next'

export const runtime = 'edge'
export const revalidate = 10

interface Params {
  id: string
}

export async function generateMetadata({
  params: { id },
}: {
  params: Params
}): Promise<Metadata> {
  const poll = await getPoll(id)

  if (!poll) {
    return notFound()
  }

  return {
    title: `${poll.title} - Polls`,
  }
}

export default async function HomePage({ params: { id } }: { params: Params }) {
  const poll = await getPoll(id)

  if (!poll) {
    return notFound()
  }

  return (
    <Container className="p-4 flex items-center justify-center">
      <Stats />
      <Poll poll={poll} result />
    </Container>
  )
}
