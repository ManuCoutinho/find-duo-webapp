import { FC } from 'react'

export const Title: FC = () => {
  return (
    <h1 className='text-6xl font-black text-white mt-20'>
      Seu
      <span className='bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] text-transparent bg-clip-text'>
        duo
      </span>
      está aqui.
    </h1>
  )
}
