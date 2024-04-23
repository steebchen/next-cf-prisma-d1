import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex items-center justify-center py-4 bg-blue-500 text-white">
      <Link className="px-4" href="/">
        Privacy Policy
      </Link>
      <Link className="px-4" href="/">
        Terms of Service
      </Link>
      <Link className="px-4" href="/">
        Contact Us
      </Link>
    </footer>
  )
}
