'use server'

import findAnagrams from './findAnagrams'

export async function handleSubmit(formData: FormData) {
  try {
    for (const [key, value] of formData) {
      if (key === 'word') {
        const res = await fetch(`https://en.wiktionary.org/w/api.php?action=parse&format=json&page=${value}&prop=text&formatversion=2`)
        const json = await res.json()
        const anagrams = findAnagrams(json.parse.text)
        return anagrams
      }
    }
  } catch (err) {
    console.error('Something went wrong')
  }
}
