'use client'

import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { stats } from '@/actions/stats'

export function Stats() {
  const params = useParams()

  useEffect(() => {
    if (!params?.id) {
      return
    }

    void stats({
      id: params.id as string,
    })
  }, [params])

  return <div />
}
