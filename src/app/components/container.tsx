'use client'

import { useState } from 'react'
import { handleSubmit } from '../actions'
import AnagramList from './anagramList'
import WordSearchForm from './word-search-form'

export default function Container() {
  const [anagrams, setAnagrams] = useState<string[]>([])

  async function onSubmitData(formData: FormData) {
    const anagramsResult = await handleSubmit(formData)
    if (anagramsResult !== undefined) { setAnagrams(anagramsResult) }
  }

  return (
    <div className='flex flex-col'>
      <WordSearchForm onSubmitData={onSubmitData} />
      <AnagramList anagrams={anagrams}/>   
    </div>
  )
}