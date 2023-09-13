import { parse, HTMLElement } from 'node-html-parser'

export default function findAnagrams(body: string) {
    const root = parse(body)
    const headings = root.querySelectorAll('h3')

    const anagramHeading = headings.find(h => (h.firstChild as HTMLElement)?.id === 'Anagrams')
    if (!anagramHeading) { return [] }

    const sibling = anagramHeading.nextElementSibling
    if (!sibling) { return [] }

    return sibling.firstChild.childNodes
      .filter(el => el.nodeType === 1 && (el as HTMLElement).tagName.toLowerCase() === 'span')
      .map(item => (item as HTMLElement).textContent)

    // return headings
    //     .filter(h => (h.firstChild as HTMLElement)?.id === 'Anagrams')[0].nextElementSibling.firstChild.childNodes
    //     .filter(el => el.nodeType === 1 && (el as HTMLElement).rawTagName === 'span')
    //     .map(item => (item as HTMLElement).firstChild.textContent)

  }
  


