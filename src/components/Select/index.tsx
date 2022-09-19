import * as List from '@radix-ui/react-select'
import { CaretDown, CaretUp, Check } from 'phosphor-react'
import { SelectProps } from './types'

export const Select: React.FC<SelectProps> = ({ data, placeholder, name }) => {
  return (
    <List.Root>
      <List.Trigger
        aria-label={name}
        className='bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500 rounded items-start flex justify-between'
      >
        <List.Value placeholder={placeholder} />
        <List.Icon>
          <CaretDown size={20} className='text-zinc-400' />
        </List.Icon>
      </List.Trigger>

      <List.Portal>
        <List.Content className='bg-zinc-900 text-zinc-50 rounded shadow-md p-4 w-full overflow-hidden cursor-pointer relative select-none'>
          <List.ScrollUpButton className='flex items-center justify-center'>
            <CaretUp size={20} className='text-zinc-400' />
          </List.ScrollUpButton>
          <List.Viewport>
            {data?.map((list) => (
              <List.Item
                value={list.value}
                key={list.value}
                className='leading-8 hover:bg-violet-500 px-2 rounded'
              >
                <List.ItemText>{list.item}</List.ItemText>
                <List.ItemIndicator className='absolute right-0 inline-flex items-center justify-center'>
                  <Check size={20} className='text-emerald-400' />
                </List.ItemIndicator>
              </List.Item>
            ))}
          </List.Viewport>
        </List.Content>
      </List.Portal>
    </List.Root>
  )
}
