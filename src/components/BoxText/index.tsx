import { FC, Fragment } from 'react'

export const BoxText: FC = () => {
  return (
    <Fragment>
      <strong className='text-lg md:text-2xl font-bold block text-zinc-50'>
        Não encontrou seu duo?
      </strong>
      <span className='text-sm md:text-regular text-zinc-400'>
        Publique um anúncio para encontrar novos players!
      </span>
    </Fragment>
  )
}
