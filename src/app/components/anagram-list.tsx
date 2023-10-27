import Link from 'next/link'
import { AnagramType } from './container'
import AnagramNotFound from './anagram-not-found'

export default function AnagramList({ anagrams }: { 
  anagrams: (AnagramType | undefined)[] | null
}) {
  return (
    <div className='flex flex-col justify-center items-center mb-6'>
      {anagrams && anagrams.length === 0 && <AnagramNotFound />}
      <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3" data-testid="anagrams">
        {anagrams && anagrams.map((anagram) => (
          anagram && (
            <Link
              key={anagram.text}
              href={anagram.link}
              target="_blank"
              className="text-slate-800 dark:text-slate-200 border rounded border-slate-300 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-700 hover:cursor-pointer py-4 px-6"
            >
              {anagram.text}
            </Link>
          )
        ))}
      </div>
    </div>
 )
}