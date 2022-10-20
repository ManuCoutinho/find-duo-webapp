import { Root } from '@radix-ui/react-dialog'
import { BoxText } from '../../components/BoxText'
import { BannerAction } from '../../components/BannerAction'
import { GridCards } from '../../components/GridCards'
import { Logo } from '../../components/Logo'
import { Main } from '../../components/Main'
import { Title } from '../../components/Title'
import { Dialog } from '../../components/Dialog'

export const Home: React.FC = () => {
  return (
    <Main>
      <Logo />
      <Title />
      <GridCards />
      <Root>
        <BannerAction>
          <BoxText />
        </BannerAction>

        <Dialog />
      </Root>
    </Main>
  )
}
