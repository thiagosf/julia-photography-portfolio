import React from 'react'
import LogoSvg from '../../../public/svg/logo.svg'
import { Flex, Image, Text } from '../../atoms'
import { classes } from '../../../utils'

export interface Props {
  withText?: boolean,
  white?: boolean
}

const Logo: React.FC<Props> = ({ withText, white, ...props }) => {
  const logoClasses = classes({
    logo: true,
    'logo--white': white,
    'logo--with-text': withText
  })
  return (
    <Flex inline className={logoClasses} {...props}>
      <LogoSvg />
      {withText &&
        <Flex isColumn vCenter className="logo--text">
          <Text tag="span">julia.photos</Text>
          <Text tag="strong">Photography Portfolio</Text>
        </Flex>
      }
    </Flex>
  )
}

export default Logo
