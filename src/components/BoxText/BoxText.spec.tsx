import { screen, render } from '@testing-library/react'
import { BoxText } from '.'

describe('<BoxText/>', () => {
  it('should render BoxText correctly ', () => {
    render(<BoxText />)
    expect(screen.getByText(/não encontrou seu duo?/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Publique um anúncio para encontrar novos players!/i)
    ).toBeInTheDocument()
  })
  it('should match to snapshot ', () => {
    const { container } = render(<BoxText />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <strong
          class="text-lg md:text-2xl font-bold block text-zinc-50"
        >
          Não encontrou seu duo?
        </strong>
        <span
          class="text-sm md:text-regular text-zinc-400"
        >
          Publique um anúncio para encontrar novos players!
        </span>
      </div>
    `)
  })
})
