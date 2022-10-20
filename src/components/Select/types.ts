export interface SelectProps {
  name: string
  data: Array<GameSelect>
  placeholder: string
}

export type GameSelect = {
  value: string
  item: string
}
