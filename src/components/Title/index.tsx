import { FC } from 'react'

export const Title: FC = () => {
  return (
    <h1 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mt-20 text-center'>
      Seu &#xa0;
      <span className='bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] text-transparent bg-clip-text'>
        duo &#xa0;
      </span>
      está aqui.
    </h1>
  )
}
