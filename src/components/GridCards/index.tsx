import { Fragment, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useKeenSlider } from 'keen-slider/react'
import { KeenSliderInstance } from 'keen-slider'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useGames } from '../../hooks/useGames'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogAd } from '../DialogAd'
import { CardAd } from '../CardAd'
import { api } from '../../lib/api'

import 'keen-slider/keen-slider.min.css'
export const GridCards: React.FC = () => {
  const games = useGames()
  const [options, setOptions] = useState({})
  const [data, setData] = useState([])
  const [slider, instance] = useKeenSlider<HTMLDivElement>(options, [
    (slider: KeenSliderInstance) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on('created', () => {
        slider.container.addEventListener('mouseover', () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener('mouseout', () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on('dragStarted', clearNextTimeout)
      slider.on('animationEnded', nextTimeout)
      slider.on('updated', nextTimeout)
    }
  ])
  const getGames = async (gameId: string) => {
    try {
      const { data, status } = await api.get(`games/${gameId}/ads`)
      if (status === 200 && data.length > 0) {
        setData(data)
        return data
      }
      return
    } catch (err) {
      console.error(`Error loading requested listing ${err}`)
      return err
    }
  }
  useEffect(() => {
    setTimeout(
      () =>
        setOptions(
          {
            loop: true,
            drag: true,
            mode: 'free-snap',
            breakpoints: {
              '(max-width: 480px)': {
                slides: { perView: 2, spacing: 8 }
              },
              '(min-width: 481px) and (max-width: 1024px)': {
                slides: { perView: 3, spacing: 20 }
              },
              '(min-width: 1025px)': {
                slides: { perView: 6, spacing: 64 }
              }
            },
            slides: {
              perView: 6,
              spacing: 64
            }
          }
          //plugins
        ),
      10
    )
  }, [])

  return (
    <Dialog.Root>
      <section className='flex flex-row mt-16 keen-slider px-6' ref={slider}>
        {games?.map((card) => (
          <Fragment key={uuidv4()}>
            <Dialog.Trigger
              className='keen-slider__slide rounded-lg text-left'
              onClick={() => getGames(card.id)}
            >
              <img
                src={card.bannerUrl}
                alt={card.title}
                loading='lazy'
                className='w-full object-cover'
              />
              <div className='absolute bottom-0 right-0 left-0 w-full pt-16 pb-4 px-4 bg-gradient1'>
                <strong className='block font-bold text-zinc-50'>
                  {card.title}
                </strong>
                <span className='block text-zinc-300 text-sm'>
                  {card._count.ads <= 1
                    ? `${card._count.ads} anúncio`
                    : `${card._count.ads} anúncios`}
                </span>
              </div>
            </Dialog.Trigger>
            <DialogAd>
              <CardAd data={data} />
            </DialogAd>
          </Fragment>
        ))}
      </section>
      <div
        className='text-4xl 2xl:text-6xl hidden xl:block text-zinc-300 absolute top-[60%] left-0 2xl:left-20 cursor-pointer hover:text-violet-500 transition-colors'
        onClick={() => instance.current?.prev()}
        role='button'
        aria-controls='slider'
      >
        <CaretLeft />
      </div>
      <div
        className='text-4xl 2xl:text-6xl hidden xl:block text-zinc-300 absolute top-[60%] right-0 2xl:right-20 cursor-pointer hover:text-violet-500 transition-colors'
        onClick={() => instance.current?.next()}
        role='button'
        aria-controls='slider'
      >
        <CaretRight />
      </div>
    </Dialog.Root>
  )
}
