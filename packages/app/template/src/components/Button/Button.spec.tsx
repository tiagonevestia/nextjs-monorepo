import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from './Button'

test('loads and displays greeting', async () => {
  render(<Button label='Click aqui' onClick={jest.fn()} />)

  expect(screen.getByTestId('button')).toHaveTextContent('Click aqui')
})
