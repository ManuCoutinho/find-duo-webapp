import { GameSelect } from '../Select/types'

export interface FormProps {
  data: Array<GameSelect>
  handleClose: () => void
}

export type FormDataType = {
  name: string
  yearsPlaying: number
  discord: string
  hourStart: string
  hourEnd: string
  chat?: boolean
}
