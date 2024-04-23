'use client'

import { Poll as IPoll, Row } from '@prisma/client'
import { vote } from '@/actions/vote'
import { useRouter } from 'next/navigation'

export const Rows = ({
  poll,
  result,
}: {
  poll: IPoll & { rows: Row[] }
  result: boolean
}) => {
  const router = useRouter()
  const totalVotes = poll.rows.reduce((acc, row) => acc + row.votes, 0)

  const onClick = async (id: string) => {
    if (result) {
      return
    }
    const res = await vote({
      poll: poll.id,
      row: id,
    })

    if (res.message) {
      // eslint-disable-next-line no-alert
      alert(res.message)
    }

    if (res.message === 'already voted') {
      router.push(`/poll/${poll.id}`)
    }
  }

  return poll.rows.map((row) => {
    const percentage = Math.round((row.votes / totalVotes) * 100) || 0
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        key={row.id}
        className={`${!result ? 'cursor-pointer' : ''}`}
        onClick={() => onClick(row.id)}
      >
        <div
          className={`flex gap-2 items-center mt-2 ${result ? 'justify-between' : ''}`}
        >
          {!result && (
            <div>
              <label
                htmlFor={row.id}
                className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700"
                title={`Vote for ${row.title}`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" />
                  {/* <path d="M12 8v8M8 12h8"/> */}
                </svg>
              </label>
            </div>
          )}

          <p className="text-sm">{row.title}</p>

          {result && (
            <p className="text-sm">
              {row.votes} votes ({percentage}%)
            </p>
          )}
        </div>
        {result && (
          <div className="h-2 rounded-full mt-1">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{
                width: `${percentage || 0.01}%`,
              }}
            />
          </div>
        )}
      </div>
    )
  })
}
