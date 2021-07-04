import React from 'react'
import { Flex, Icon } from '../../atoms'
import { Logo } from '../../molecules'

export interface Props {
  onClick: (item: string) => void
}

const MainHeader: React.FC<Props> = ({ onClick, ...props }) => {
  return (
    <Flex
      vEnd
      className="main-header"
      {...props}
    >
      <Logo white withText />
      <Flex
        vCenter
        hCenter
        className="main-header__social-networks"
      >
        <Icon name="info" onClick={() => onClick('info')} />
        <a href="https://www.instagram.com/jsf.photography_/">
          <Icon name="instagram" />
        </a>
        <a href="mailto:hi@julias.photos">
          <Icon name="mail" onClick={() => onClick('mail')} />
        </a>
      </Flex>
    </Flex>
  )
}

export default MainHeader
