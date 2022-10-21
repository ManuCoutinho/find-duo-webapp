import { useEffect, useState } from 'react'
import * as Toggle from '@radix-ui/react-toggle-group'
import { SelectButtonProps } from './types'

export const SelectButton: React.FC<SelectButtonProps> = ({
  data,
  onValueChange
}) => {
  const [selected, setSelected] = useState<string[]>([])
  const handleChange = (value: string) => {
    if (!selected.includes(value)) {
      setSelected((prev) => [...prev, value])
    } else {
      const index = selected.indexOf(value)
      selected.splice(index, 1)
      setSelected((prev) => [...prev])
    }
  }
  useEffect(() => {
    onValueChange(selected)
  }, [selected, onValueChange])

  return (
    <Toggle.Root
      type='single'
      defaultValue='0'
      aria-label='Select week days'
      className='grid-rows-2'
    >
      {data
        ?.sort((a, b) => a.id.localeCompare(b.id))
        .map((d) => (
          <Toggle.Item
            asChild
            value={d.id}
            key={d.id}
            onClick={() => handleChange(d.id)}
          >
            <button
              title={d.title}
              type='button'
              className={`mt-2 ml-2 md:ml-1 w-10 h-10  rounded text-neutral-50 font-semibold uppercase outline-0 focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-violet-500 focus-within:outline-violet-600 ${
                selected.includes(d.id) ? 'bg-violet-500' : 'bg-zinc-900'
              }`}
            >
              {d.day}
            </button>
          </Toggle.Item>
        ))}
    </Toggle.Root>
  )
}
