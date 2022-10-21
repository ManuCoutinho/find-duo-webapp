import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GameController } from 'phosphor-react'
import { Close } from '@radix-ui/react-dialog'
import { api } from '../../lib/api'
import { BoxInput } from '../BoxInput'
import { Input } from '../Input'
import { Label } from '../Label'
import { InputCheckbox } from '../InputCheckbox'
import { Select } from '../Select'
import { SelectButton } from '../SelectButton'
import weekDays from '../../data/weekDays'
import { FormDataType, FormProps } from './types'
import { toast } from 'react-hot-toast'

export const FormCreateAd: React.FC<FormProps> = ({ data, handleClose }) => {
  const [selected, setSelected] = useState('')
  const [checked, setChecked] = useState(false)
  const [weekDaysSelected, setWeekDaysSelected] = useState<string[]>()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormDataType>()

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    try {
      const request = await api.post(`/games/${selected}/ads`, {
        gameId: selected,
        name: data.name,
        yearsPlaying: data.yearsPlaying,
        discord: data.discord,
        weekDays: weekDaysSelected,
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: checked
      })
      if (request.status === 200) {
        toast.success('Anúncio criado com sucesso!')
        setTimeout(() => handleClose(), 1500)
      }
    } catch (err) {
      console.error(err)
      toast.error('Ooops! Algo inesperado ocorreu. Tente de novo.')
    } finally {
      reset()
    }
  }
  return (
    <form
      action='post'
      className='flex flex-col gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <BoxInput>
        <Select
          placeholder='Selecione o game que deseja jogar'
          data={data}
          value={selected}
          onValueChange={setSelected}
        />
      </BoxInput>
      <BoxInput>
        <Label htmlFor='name'>Seu nome (ou nickname)</Label>
        <Input
          type='text'
          inputMode='text'
          id='name'
          placeholder='Como te chamam dentro do game?'
          {...register('name', { required: true })}
        />
        {errors?.name && (
          <p className='text-xs text-red-400'>Informe seu nome!</p>
        )}
      </BoxInput>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6'>
        <BoxInput>
          <Label htmlFor='years-playing'>Joga há quantos anos?</Label>
          <Input
            type='number'
            inputMode='numeric'
            id='years-playing'
            placeholder='Tudo bem ser ZERO'
            {...register('yearsPlaying', { required: true })}
          />
          {errors?.yearsPlaying && (
            <p className='text-xs text-red-400'>
              Informe há quanto tempo joga!
            </p>
          )}
        </BoxInput>
        <BoxInput>
          <Label htmlFor='discord'>Qual seu Discord?</Label>
          <Input
            type='text'
            id='discord'
            inputMode='text'
            placeholder='Usuario#0000'
            {...register('discord', { required: true })}
          />
          {errors?.discord && (
            <p className='text-xs text-red-400'>Informe seu discord!</p>
          )}
        </BoxInput>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6'>
        <BoxInput>
          <Label htmlFor='week-days'>Quando costuma jogar?</Label>
          <SelectButton data={weekDays} onValueChange={setWeekDaysSelected} />
        </BoxInput>
        <BoxInput>
          <Label htmlFor='hour-start'>Qual horário do dia?</Label>
          <div className='flex gap-[6px] flex-row'>
            <Input
              type='time'
              id='hour-start'
              inputMode='numeric'
              placeholder='De'
              {...register('hourStart', { required: true })}
            />

            <Input
              type='time'
              id='hour-end'
              inputMode='numeric'
              placeholder='Até'
              {...register('hourEnd', { required: true })}
            />
          </div>
          {errors?.hourStart && (
            <p className='text-xs text-red-400'>Informe quando pode jogar!</p>
          )}
          {errors?.hourEnd && (
            <p className='text-xs text-red-400'>
              Informe quando tem que sair da parrty!
            </p>
          )}
        </BoxInput>
      </div>

      <div className='flex gap-2  items-center'>
        <InputCheckbox checked={checked} onValueChecked={setChecked} />
        <Label className='text-sm text-zinc-50' htmlFor='chat'>
          Costumo me conectar ao chat de voz
        </Label>
      </div>
      <footer className='flex gap-4 justify-between md:justify-end items-center w-full font-semibold mt-8'>
        <Close
          className='bg-zinc-500 rounded-md px-5 py-3 hover:bg-zinc-600 transition-colors delay-75 outline-0 focus:ring-2 focus:ring-offset-1 focus:ring-violet-500 focus:outline-violet-600'
          type='button'
        >
          Cancelar
        </Close>
        <button
          type='submit'
          className='flex gap-3 items-center bg-violet-500 hover:bg-violet-700 py-3 px-5 rounded-md transition-colors delay-75 outline-0 focus:ring-2 focus:ring-offset-1 focus:ring-violet-500 focus:outline-violet-600'
        >
          <GameController size={24} />
          Encontrar Duo
        </button>
      </footer>
    </form>
  )
}
