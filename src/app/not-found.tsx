import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image src="/img/404.png" alt="404 illustration" width="500" height="250" />
      <div className='group text-center border border-transparent rounded hover:border-slate-300 dark:hover:border-slate-700 mb-8 py-2 pl-4 px-2'>
      <Link href="/" className="flex items-center gap-1 text-san-marino-600 dark:text-san-marino-300">Go back to main page
          <span className="group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </span>
        </Link>
      </div>
      <p className="italic text-xs mb-8 text-slate-500">404 image: <Link href="https://storyset.com/web" className='underline decoration-san-marino-500'>Web illustrations by Storyset</Link></p>
    </div>
  )
}