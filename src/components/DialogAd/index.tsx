import { XCircle } from 'phosphor-react'
import * as Modal from '@radix-ui/react-dialog'
import { DialogAdProps } from './types'

export const DialogAd: React.FC<DialogAdProps> = ({ children }) => {
  return (
    <Modal.Portal>
      <Modal.Overlay className='bg-black/5 inset-0 fixed' />
      <Modal.Content className='w-full h-full md:h-auto md:max-w-[55rem] fixed bg-zinc-900 px-10 py-8 text-zinc-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-black/40'>
        <Modal.Close
          className=' text-zinc-400 absolute -top-2 -right-2 bg-zinc-800 rounded-full'
          role='option'
          aria-label='fechar modal'
        >
          <XCircle size={32} weight='light' />
        </Modal.Close>
        {children}
      </Modal.Content>
    </Modal.Portal>
  )
}
