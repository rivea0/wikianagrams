export default function AnagramList({ anagrams }: { 
  anagrams: string[] 
}) {
  return (
    <ul>
      {anagrams.map(anagram => <li key={anagram}>{anagram}</li>)}
    </ul>
  )  
}