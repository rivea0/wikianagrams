import Link from 'next/link'
import { AnagramType } from './container'

export default function AnagramList({ anagrams }: { 
  anagrams: (AnagramType | undefined)[]
}) {
  return (
    <ul>
      {anagrams && anagrams.map((anagram) => (
        anagram && (
          <li key={anagram.text}>
            <Link
              href={anagram.link}
              target="_blank"

            >
              {anagram.text}
            </Link>
          </li>
        )
      ))}
    </ul>
  )  
}