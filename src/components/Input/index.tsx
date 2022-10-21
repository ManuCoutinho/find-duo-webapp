import { ForwardRefRenderFunction, forwardRef } from 'react'
import { InputProps } from './types'

const BasicInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...props },
  ref
) => {
  return (
    <input
      ref={ref}
      className='bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500 rounded outline-0 focus:ring-2 focus:ring-offset-1 focus:ring-violet-500 focus:outline-violet-600'
      {...props}
    />
  )
}
export const Input = forwardRef(BasicInput)
