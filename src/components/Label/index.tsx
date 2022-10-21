import { LabelProps } from './types'

export const Label: React.FC<LabelProps> = (props) => {
  return (
    <label className='font-semibold text-zinc-50' {...props}>
      {props.children}
    </label>
  )
}
