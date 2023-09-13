'use client'

import { useState } from 'react'

export default function WordSearchForm({ onSubmitData }: { 
  onSubmitData: (formData: FormData) => void
}) {
  const [word, setWord] = useState('')

  return (
    <>
      <form action={onSubmitData} className="flex flex-col items-center gap-2 rounded py-2 px-4">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-400">
              <path fill="san-marino-50" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/>
            </svg>
          </span>
          <input
            required
            type="text" 
            name="word" 
            id="word" 
            value={word} 
            onChange={e => setWord(e.currentTarget.value)} 
            placeholder="Search for a word" 
            className="placeholder:text-slate-400 block w-full border border-san-marino-200 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-san-marino-400 focus:ring-san-marino-400 focus:ring-1 sm:text-sm"
          />
        </label>
        <button 
          type="submit" 
          className="mt-2 w-fit px-2 py-1 rounded bg-san-marino-500 text-san-marino-50 hover:bg-san-marino-600"
        >
          Find anagrams
        </button>
      </form>
    </>
  )
}