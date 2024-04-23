import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Poll as IPoll, Row } from '@prisma/client'
import { formatDistance, formatRFC3339 } from 'date-fns'
import { Rows } from '@/components/rows'

export function Poll({
  poll,
  result,
}: {
  poll: IPoll & { rows: Row[] }
  result: boolean
}) {
  const totalVotes = poll.rows.reduce((acc, row) => acc + row.votes, 0)

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold mb-2">
          {poll.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Rows poll={poll} result={result} />
      </CardContent>
      <CardFooter className="py-4 flex items-center space-x-3 text-gray-500">
        <div className="flex items-center" title="Views">
          <svg
            className="mr-2 h-5 w-5"
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
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <p className="text-sm">{poll.views}</p>
        </div>
        <div
          className="flex items-center"
          title={`Created at ${formatRFC3339(new Date(poll.createdAt))}`}
        >
          <svg
            className="mr-2 h-5 w-5"
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
            <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <p className="text-sm">
            {formatDistance(new Date(poll.createdAt), new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>
        <div className="flex items-center" title="Total votes">
          <svg
            className="mr-2 h-5 w-5"
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
            <path d="m9 12 2 2 4-4" />
            <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
            <path d="M22 19H2" />
          </svg>
          <p className="text-sm">{totalVotes}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
