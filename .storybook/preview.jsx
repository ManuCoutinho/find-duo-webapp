import { ThemeContextProvider } from '../src/contexts/ThemeContext'
import { combineTheme, dark, light } from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: light.colors.background },
      { name: 'dark', value: dark.colors.background }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeContextProvider>
      <Story />
    </ThemeContextProvider>
  )
]
