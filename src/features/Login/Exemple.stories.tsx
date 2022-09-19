import { ComponentStory } from '@storybook/react'
import { Example } from '.'

export default {
  title: 'Example',
  component: Example,
  args: {
    children: ' '
  },
  argTypes: {
    children: { type: 'string' }
  }
}

const Template: ComponentStory<typeof Example> = (args) => {
  return (
    <div>
      <Example {...args} />
    </div>
  )
}
export const Default = Template.bind({})
