import { Create } from '@/components/create'
import { Landing } from '@/components/landing'
import { Container } from '@/components/layout/container'

export const runtime = 'edge'

export default async function Home() {
  return (
    <Container full>
      <Landing />
      <Create />
    </Container>
  )
}
