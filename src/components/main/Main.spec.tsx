import { createDOM } from '@builder.io/qwik/testing'
import {test, expect, describe} from 'vitest'
import Main from './Main'

describe('<Main/>', () => {
  test('should render the heading', async () => {
    const {screen, render} = await createDOM()    
    await render(<Main/>)

    const h1 = screen.querySelector('h1')
    expect(h1?.innerHTML).toMatch(/won games/i)
  })
})