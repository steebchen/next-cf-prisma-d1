import { ReactNode } from 'react'

export function Container({
  full,
  children,
  className,
}: {
  full?: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <main
      className={`min-h-screen w-full ${full ? '' : 'max-w-7xl'} ${className}`}
    >
      {children}
    </main>
  )
}
