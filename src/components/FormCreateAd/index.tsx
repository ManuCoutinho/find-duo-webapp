import { useState } from 'react'
import { GameController } from 'phosphor-react'
import { Close } from '@radix-ui/react-dialog'
import { BoxInput } from '../BoxInput'
import { Input } from '../Input'
import { Label } from '../Label'
import { InputCheckbox } from '../InputCheckbox'
import { Select } from '../Select'
import { SelectButton } from '../SelectButton'
import weekDays from '../../data/weekDays'
import { FormProps } from './types'

export const FormCreateAd: React.FC<FormProps> = ({ data }) => {
  const [selected, setSelected] = useState()
  return (
    <form
      action='post'
      className='flex flex-col gap-4'
      onSubmit={() => console.log('submitou')}
    >
      <BoxInput>
        <Select
          placeholder='Selecione o game que deseja jogar'
          name='select-game'
          data={data}
        />
      </BoxInput>
      <BoxInput>
        <Label htmlFor='name'>Seu nome (ou nickname)</Label>
        <Input
          type='text'
          id='name'
          placeholder='Como te chamam dentro do game?'
        />
      </BoxInput>
      <div className='grid grid-cols-2 gap-6'>
        <BoxInput>
          <Label htmlFor='years-playing'>Joga há quantos anos?</Label>
          <Input
            type='number'
            id='years-playing'
            placeholder='Tudo bem ser ZERO'
          />
        </BoxInput>
        <BoxInput>
          <Label htmlFor='discord'>Qual seu Discord?</Label>
          <Input type='text' id='discord' placeholder='Usuario#0000' />
        </BoxInput>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <BoxInput>
          <Label htmlFor='week-days'>Quando costuma jogar?</Label>
          <SelectButton data={weekDays} />
        </BoxInput>
        <BoxInput>
          <Label htmlFor='hour-start'>Qual horário do dia?</Label>
          <div className='flex gap-[6px] flex-row'>
            <Input type='time' id='hour-start' placeholder='De' />
            <Input type='time' id='hour-end' placeholder='Até' />
          </div>
        </BoxInput>
      </div>

      <div className='flex gap-2  items-center'>
        <InputCheckbox />
        <p className='text-sm text-zinc-50'>
          Costumo me conectar ao chat de voz
        </p>
      </div>
      <footer className='flex gap-4 justify-end items-center w-full font-semibold mt-8'>
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
