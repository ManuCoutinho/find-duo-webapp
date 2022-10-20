import { FC } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export const InputCheckbox: FC = () => {
  return (
    <Checkbox.Root
      className='w-6 h-6 p-1 rounded bg-zinc-900 outline-0 focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-violet-500 focus-within:outline-violet-600'
      id='voice-channel'
    >
      <Checkbox.Indicator>
        <Check className='h4 w-4 text-emerald-400' />
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}
