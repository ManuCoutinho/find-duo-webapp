import { BoxInputProps } from './types'

export const BoxInput: React.FC<BoxInputProps> = ({ children }) => {
  return <div className='flex flex-col gap-2 mb-4'>{children}</div>
}
