import { screen, render } from '@testing-library/react'
import { Title } from '.'

describe('<Title/>', () => {
  it('should render Title correctly ', () => {
    render(<Title />)
    expect(screen.getByRole('heading', { name: /duo/i })).toBeInTheDocument()
  })
})
