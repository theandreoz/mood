'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState()

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          onChange={onChange}
          value={value}
          type="text"
          placeholder=""
          className="rounded-lg border border-black/20 px-4 py-2 text-lg"
        />
        <button
          disabled={loading}
          type="submit"
          className="rounded-lg bg-blue-400 px-4 py-2 text-lg"
        >
          Ask
        </button>
      </form>
      {loading && <div>Loading...</div>}
      {response && <div>{response}</div>}
    </div>
  )
}

export default Question
