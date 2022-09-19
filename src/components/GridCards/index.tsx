import { useGames } from '../../hooks/useGames'

export const GridCards: React.FC = () => {
  const games = useGames()

  return (
    <section className='grid grid-cols-6 gap-6 mt-16'>
      {games?.map((card) => (
        <a
          href={'#'}
          key={card.id}
          className='relative rounded-lg overflow-hidden'
        >
          <img
            src={card.bannerUrl}
            alt={card.title}
            loading='lazy'
            className='object-cover w-full'
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
  )
}
