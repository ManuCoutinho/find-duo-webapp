import { Fragment } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { useGames } from '../../hooks/useGames'
import { CaretLeft, CaretRight } from 'phosphor-react'
import 'keen-slider/keen-slider.min.css'

export const GridCards: React.FC = () => {
  const games = useGames()
  const [slider, instance] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      drag: true,
      mode: 'free-snap',
      slides: {
        perView: 6,
        spacing: 64,
        origin: 'center'
      }
    },
    [
      (slider) => {
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
    ]
  )

  return (
    <Fragment>
      <section className='flex flex-row mt-16 keen-slider' ref={slider}>
        {games?.map((card) => (
          <a
            href={'#'}
            aria-hidden={true}
            key={card.id}
            className='keen-slider__slide rounded-lg'
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
          </a>
        ))}
      </section>
      <div
        className='text-zinc-300 absolute top-[60%] left-20 cursor-pointer hover:text-violet-500 transition-colors'
        onClick={() => instance.current?.prev()}
      >
        <CaretLeft size={62} />
      </div>
      <div
        className='text-zinc-300 absolute top-[60%] right-20 cursor-pointer hover:text-violet-500 transition-colors'
        onClick={() => instance.current?.next()}
      >
        <CaretRight size={62} />
      </div>
    </Fragment>
  )
}
