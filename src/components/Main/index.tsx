import { MainProps } from './types'

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      {children}
    </main>
  )
}
