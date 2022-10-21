import { screen, render } from '@testing-library/react'
import { Input } from '.'

describe('<Input/>', () => {
  it('should render Input correctly ', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
