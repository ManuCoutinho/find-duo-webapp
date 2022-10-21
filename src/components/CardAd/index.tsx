import { GameController } from 'phosphor-react'
import { Fragment } from 'react'
import { CardAdProps } from './types'

export const CardAd: React.FC<CardAdProps> = ({ data }) => {
  return (
    <Fragment>
      {data.length > 0 ? (
        <section className={`flex items-center justify-center gap-6 `}>
          {data?.map((d) => (
            <dl
              key={d.id}
              className='flex flex-col gap-4 bg-[#2a2634] rounded p-4'
            >
              <div className='flex flex-col gap-1'>
                <dt className='text-zinc-400'>Nome</dt>
                <dd className='font-semibold'>{d.name}</dd>
              </div>
              <div className='flex flex-col gap-2'>
                <dt className='text-zinc-400'>Tempo de jogo</dt>
                <dd className='font-semibold'>
                  {d.yearsPlaying > 1
                    ? `${d.yearsPlaying} anos`
                    : `${d.yearsPlaying} ano`}
                </dd>
              </div>
              <div className='flex flex-col gap-2'>
                <dt className='text-zinc-400'>Disponibilidade</dt>
                <dd className='font-semibold'>
                  {`${d.weekDays.length} dias \u2022 ${d.hourStart}h - ${d.hourEnd}h`}
                </dd>
              </div>
              <div className='flex flex-col gap-2'>
                <dt className='text-zinc-400'>Chamada de áudio?</dt>
                <dd
                  className={`font-semibold ${
                    d.useVoiceChannel === true
                      ? `text-emerald-400`
                      : `text-red-400`
                  }`}
                >
                  {d.useVoiceChannel === true ? `Sim` : `Não`}
                </dd>
              </div>
              <button
                type='button'
                onClick={() => console.log('discord')}
                className='flex gap-3 items-center justify-center bg-violet-500 hover:bg-violet-700 p-3 rounded-md transition-colors delay-75 outline-0 focus:ring-2 focus:ring-offset-1 focus:ring-violet-500 focus:outline-violet-600'
              >
                <GameController size={24} />
                Conectar
              </button>
            </dl>
          ))}
        </section>
      ) : (
        <section className='bg-[#2a2634] w-full h-96 rounded p-6 grid place-content-center '>
          <h3 className='font-bold text-2xl text-center animate-bounce'>
            Este game ainda não tem anúncios!
          </h3>
        </section>
      )}
    </Fragment>
  )
}
