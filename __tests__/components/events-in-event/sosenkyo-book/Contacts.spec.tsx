import { expect } from '@jest/globals'
import { render } from '@testing-library/react'
import { Contacts } from '@/components/events-in-event/sosenkyo-book/Contacts'

describe('pages/index の Home コンポーネント', () => {
  it('期待どおりであること', () => {
    const { getByText } = render(<Contacts />)

    expect(getByText('gensosenkyo2015@gmail.com')).toBeTruthy()
  })
})
