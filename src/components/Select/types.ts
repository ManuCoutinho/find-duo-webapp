export interface SelectProps {
  data: Array<GameSelect>
  placeholder: string
  value: string
  onValueChange: React.Dispatch<string>
}

export type GameSelect = {
  value: string
  item: string
}
