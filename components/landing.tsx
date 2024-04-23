import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Create } from './create'

export function Landing() {
  return (
    <div className="flex flex-col">
      <nav className="flex items-center justify-between p-4 md:p-8 bg-transparent absolute w-full">
        <div className="flex items-center">
          <Image
            alt="Logo"
            className="mr-2"
            height="50"
            src="/icon.png"
            width="50"
          />
          <h1 className="text-2xl font-bold text-white">Poll Creator</h1>
        </div>
        <div className="flex space-x-4">
          <Link className="text-white font-semibold" href="/">
            About
          </Link>
          <Link className="text-white font-semibold" href="/">
            Contact
          </Link>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-center h-[40vh] bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <h1 className="text-5xl font-bold mb-4">Create Free Polls</h1>
        <h2 className="text-2xl mb-10">
          Get instant feedback from your audience
        </h2>
        <Button className="text-blue-500 bg-white" variant="outline">
          Start Now
        </Button>
      </section>

      <Create />

      <section className="flex flex-col items-center justify-center py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <svg
              className=" h-12 w-12 text-green-500 mb-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p>Create a poll in less than a minute.</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className=" h-12 w-12 text-blue-500 mb-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Engage Your Audience</h3>
            <p>Get real-time feedback from your users.</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className=" h-12 w-12 text-purple-500 mb-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Secure and Private</h3>
            <p>Your polls are private and we never share your data.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
