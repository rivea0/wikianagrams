'use client'

import { useState } from 'react'
import { handleSubmit } from '../actions'
import AnagramList from './anagram-list'
import WordSearchForm from './word-search-form'

export type AnagramType = {
  text: string,
  link: string
}

export default function Container() {
  const [anagrams, setAnagrams] = useState<(AnagramType | undefined)[] | null>(null)

  async function onSubmitData(formData: FormData) {
    const anagramsResult = await handleSubmit(formData)
    anagramsResult && setAnagrams(anagramsResult)
  }

  return (
    <div className='flex flex-col'>
      <WordSearchForm onSubmitData={onSubmitData} />
      <AnagramList anagrams={anagrams} />
    </div>
  )
}
