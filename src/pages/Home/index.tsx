import { useState } from 'react'
import { Root } from '@radix-ui/react-dialog'
import { Toaster } from 'react-hot-toast'
import { BoxText } from '../../components/BoxText'
import { BannerAction } from '../../components/BannerAction'
import { GridCards } from '../../components/GridCards'
import { Logo } from '../../components/Logo'
import { Main } from '../../components/Main'
import { Title } from '../../components/Title'
import { DialogCreateAd } from '../../components/DialogCreateAd'

export const Home: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <Main>
      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            background: '#2a2634',
            color: '#fafafa'
          }
        }}
      />
      <Logo />
      <Title />
      <GridCards />
      <Root open={open} onOpenChange={setOpen}>
        <BannerAction>
          <BoxText />
        </BannerAction>
        <DialogCreateAd handleClose={() => setOpen(false)} />
      </Root>
    </Main>
  )
}
