import { InputProps } from './types'

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className='bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500 rounded'
      {...props}
    />
  )
}
