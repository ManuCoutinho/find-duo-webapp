import { FC, useEffect, useState } from 'react'
import { FormCreateAd } from '../FormCreateAd'
import * as Modal from '@radix-ui/react-dialog'
import { GameSelect } from '../Select/types'
import { useGames } from '../../hooks/useGames'

export const Dialog: FC = () => {
  const [data, setData] = useState<GameSelect[]>([])
  const games = useGames()
  useEffect(() => {
    const getItems = games?.map((game) => {
      return {
        value: game.id,
        item: game.title
      }
    })
    setData(getItems)
  }, [games])
  return (
    <Modal.Portal>
      <Modal.Overlay className='bg-black/40 inset-0 fixed' />
      <Modal.Content className='w-[480px] fixed bg-[#2a2634] px-10 py-8 text-zinc-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-black/40'>
        <Modal.Title className='font-black text-3xl mb-8'>
          Publique um anúncio
        </Modal.Title>
        <FormCreateAd data={data} />
      </Modal.Content>
    </Modal.Portal>
  )
}
