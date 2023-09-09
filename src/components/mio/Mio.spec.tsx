import { createDOM } from '@builder.io/qwik/testing';
import { test, expect, describe } from 'vitest';
import Mio from './Mio';

describe('<Mio />', () => {
  test('should render the heading', async () => {
    const { screen, render } = await createDOM();
    await render(<Mio />);

    const h1 = screen.querySelector('h1');
    expect(h1?.innerHTML).toMatch(/Mio/i);
  });
});
