import { MagnifyingGlassPlus } from 'phosphor-react'
import { Trigger } from '@radix-ui/react-dialog'

import { BannerActionProps } from './types'

export const BannerAction: React.FC<BannerActionProps> = ({ children }) => {
  return (
    <section className='pt-1 bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] self-stretch mt-8 rounded-lg '>
      <div className='bg-[#2A2634] px-8 py-6 rounded-lg flex items-center justify-between'>
        <div>{children}</div>
        <div>
          <Trigger className='text-zinc-50 bg-violet-500 py-3 px-4 rounded-md hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </Trigger>
        </div>
      </div>
    </section>
  )
}
