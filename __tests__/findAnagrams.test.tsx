import findAnagrams from '@/app/findAnagrams'

const parseStrMockSingle = '<h3><span class="mw-headline" id="Anagrams">Anagrams</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=rarely&amp;action=edit&amp;section=10" title="Edit section: Anagrams">edit</a><span class="mw-editsection-bracket">]</span></span></h3>\n<ul><li><span class="Latn" lang="en"><a href="/wiki/rearly#English" title="rearly">rearly</a></span></li></ul>'
const parseStrMockMultiple = '<h3><span class="mw-headline" id="Anagrams">Anagrams</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=trim&amp;action=edit&amp;section=13" title="Edit section: Anagrams">edit</a><span class="mw-editsection-bracket">]</span></span></h3>\n<ul><li><span class="Latn" lang="en"><a href="/wiki/MIRT#English" title="MIRT">MIRT</a></span>, <span class="Latn" lang="en"><a href="/wiki/RMIT#English" title="RMIT">RMIT</a></span></li></ul>'

describe('findAnagrams', () => {
  it('returns correct single object', () => {
    const result = findAnagrams(parseStrMockSingle)
    expect(result).toEqual([
      { text: 'rearly', link: 'https://en.wiktionary.org/wiki/rearly#English' }
    ])
  })

  it('returns correct single object', () => {
    const result = findAnagrams(parseStrMockMultiple)
    expect(result).toEqual([
      { text: 'MIRT', link: 'https://en.wiktionary.org/wiki/MIRT#English' },
      { text: 'RMIT', link: 'https://en.wiktionary.org/wiki/RMIT#English' }
    ])
  })
})
