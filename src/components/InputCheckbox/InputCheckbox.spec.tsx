import { screen, render, fireEvent } from '@testing-library/react'
import { InputCheckbox } from '.'
const onChange = jest.fn()

describe('<InputCheckbox/>', () => {
  it('should render InputCheckbox correctly ', () => {
    render(<InputCheckbox onValueChecked={onChange} checked={false} />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
  it('should render InputCheckbox unchecked ', () => {
    render(<InputCheckbox onValueChecked={onChange} checked={false} />)
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-checked',
      'false'
    )
  })
  it('should render InputCheckbox checked ', () => {
    render(<InputCheckbox onValueChecked={onChange} checked={true} />)
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(checkbox).toHaveAttribute('aria-checked', 'true')
  })
  it('should match to snapshot ', () => {
    const { container } = render(
      <InputCheckbox onValueChecked={onChange} checked={false} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
