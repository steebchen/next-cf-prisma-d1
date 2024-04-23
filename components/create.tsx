'use client'

import { useState } from 'react'
import { create } from '@/actions/create'
import { useFormStatus } from 'react-dom'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ButtonLoading } from './ui/button-loading'

export function Create() {
  const [inputs, setInputs] = useState<number>(2)

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10">Create a Poll</h2>
      <form
        className="grid grid-cols-1 gap-6 w-full max-w-md font-ui"
        action={create}
      >
        <Input
          className="px-4 py-2 border rounded-md"
          placeholder="Poll Question"
          type="text"
          name="title"
        />
        {Array.from(Array(inputs), (x, i) => i).map((i) => (
          <Input
            key={i}
            className="px-4 py-2 border rounded-md"
            placeholder={`Option ${i + 1}`}
            type="text"
            name="rows"
            onChange={() => {
              if (i >= inputs - 1 && inputs < 10) {
                setInputs(inputs + 1)
              }
            }}
          />
        ))}
        <div className="flex flex-col items-center">
          <FormButton />
        </div>
      </form>
    </div>
  )
}

const FormButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      className="bg-purple-500 text-white"
      type="submit"
      variant="secondary"
      disabled={pending}
    >
      {pending ? <ButtonLoading /> : <span>Submit Poll</span>}
    </Button>
  )
}
