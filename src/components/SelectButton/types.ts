export interface SelectButtonProps {
  data: Array<WeekDays>
  onValueChange: React.Dispatch<string[]>
}

export type WeekDays = {
  id: string
  day: string
  title: string
}
