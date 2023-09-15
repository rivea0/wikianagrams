import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col gap-1 px-12 md:px-96">
        <h1 className="text-4xl mb-4">About</h1>
        <p className="mb-6">WikiAnagrams is a simple website where you can search for anagrams of a word, taken from its <Link href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page" className="underline decoration-san-marino-500 dark:decoration-san-marino-200">Wiktionary</Link> page.</p>
        <span className="text-center text-lg">❦</span>
        <p className="mb-2 mt-2">Search for a word, and the list of anagrams will (if they exist!) show up; clicking on any of them will take you to its Wiktionary page.</p>
        <p>Note that it is only limited to the English language for now, other available languages are planned to be included in the future.</p>
      </div>
    </div>
  )
}