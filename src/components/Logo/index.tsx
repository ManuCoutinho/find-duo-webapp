import { FC } from 'react'
import logo from '/logo.svg'

export const Logo: FC = () => {
  return <img src={logo} loading='lazy' alt='logo esports' />
}
