import Link from 'next/link'
import { AnagramType } from './container'
import AnagramNotFound from './anagram-not-found'

export default function AnagramList({ anagrams }: { 
  anagrams: (AnagramType | undefined)[] | null
}) {
  return (
    <div className='flex flex-col justify-center items-center'>
      {anagrams && anagrams.length === 0 && <AnagramNotFound />}
      <ul className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3" data-testid="anagrams">
        {anagrams && anagrams.map((anagram) => (
          anagram && (
            <li key={anagram.text} className="text-[#aa4557] dark:text-[#e8b9c6] border border-transparent hover:border-slate-300 dark:hover:border-slate-700 hover:cursor-pointer py-4 px-6">
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
    </div>
 )
}