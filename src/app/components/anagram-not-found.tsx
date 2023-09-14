export default function AnagramNotFound() {
  return (
    <div className="flex flex-col items-center mt-6">
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" fill="#000000" width="64" height="64"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path d="M61.1 19.1C56.6 7 44.9 7.5 37.9 11.7L32.6 23l10-.9l-10.3 13.2l8.4-2.2L35.4 54l-1.6-14.1l-11.9 2.5L31 28l-7.8-1.1l5.4-12.4c-6.4-6.4-23-7.6-26.2 7.8C-1.5 40.6 29.7 51.9 35.3 55v.1h.2V55c8.3-5.5 31.3-20.5 25.6-35.9" className="fill-[#aa4557] dark:fill-[#cb697f]"></path></g>
      </svg>
      <p className="mt-2">No anagrams found for this word.</p>
    </div>
  )
}