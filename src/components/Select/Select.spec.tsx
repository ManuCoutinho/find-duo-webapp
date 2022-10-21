import { screen, render, fireEvent } from '@testing-library/react'
import { Select } from '.'
const onChange = jest.fn()
const value = ''
const selectProps = {
  placeholder: 'selecione',
  name: 'games',
  data: [
    {
      value: 'valor1',
      item: 'item1'
    },
    {
      value: 'valor2',
      item: 'item2'
    },
    {
      value: 'valor3',
      item: 'item3'
    }
  ]
}
describe('<Select/>', () => {
  it('should render Select correctly ', () => {
    render(<Select value={value} onValueChange={onChange} {...selectProps} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveAttribute('data-state', 'closed')
  })
})
