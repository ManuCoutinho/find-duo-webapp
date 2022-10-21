import { screen, render, fireEvent } from '@testing-library/react'
import { SelectButton } from '.'
import data from '../../data/weekDays'

const onChange = jest.fn()
describe('<SelectButton/>', () => {
  it('should render SelectButton correctly ', () => {
    render(<SelectButton data={data} onValueChange={onChange} />)
    const monday = screen.getByRole('radio', { name: 'segunda-feira' })
    expect(monday).toHaveAttribute('aria-checked', 'false')
    fireEvent.click(monday)
    expect(monday).toHaveAttribute('aria-checked', 'true')
    expect(monday).toHaveAttribute('data-state', 'on')
  })
})
