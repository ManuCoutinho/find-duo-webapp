import { screen, render } from '@testing-library/react'
import { Label } from '.'

describe('<Label/>', () => {
  it('should render Label correctly ', () => {
    const { container } = render(<Label>Test</Label>)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
      <label
        class="font-semibold text-zinc-50"
      >
        Test
      </label>
    `)
  })
})
