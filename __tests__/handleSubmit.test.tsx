import { handleSubmit } from '@/app/actions'
import { AnagramType } from '@/app/components/container'

const mockFormData = new FormData()
mockFormData.append('word', 'anagram')

describe('handleSubmit', () => {
  it('makes the request', async () => {
    const result = await handleSubmit(mockFormData)

    expect(result).toBeDefined()
  })

  it('returns correct type', async () => {
    const result = await handleSubmit(mockFormData)

    expectTypeOf(result).toEqualTypeOf<AnagramType | []>
  })

  it('returns correct data', async () => {
    const result = await handleSubmit(mockFormData)

    expect(result).toEqual([
      { 'text': 'argaman', 'link': 'https://en.wiktionary.org/wiki/argaman#English' }
    ])
  })
})
