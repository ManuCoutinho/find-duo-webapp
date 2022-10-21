export type CardAdProps = {
  data: AdType[]
}

export type AdType = {
  name: string
  yearsPlaying: number
  hourStart: string
  hourEnd: string
  useVoiceChannel: boolean
  weekDays: Array<string>
  id: string
}
