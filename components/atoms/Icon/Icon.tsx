import React from 'react'
import { Flex } from '../'
import { classes } from '../../../utils'

export interface Props {
  name: string,
  size?: string,
  onClick?: () => void
}

const Icon: React.FC<Props> = ({ onClick, name, size }) => {
  const Source = require(`../../../public/svg/${name}.svg`)
  const iconClasses = classes({
    'icon': true,
    [`icon--${name}`]: true,
    'icon--small': size === 'small',
    'icon--large': size === 'large'
  })
  return (
    <Flex inline className={iconClasses} onClick={onClick}>
      <Source />
    </Flex>
  )
}

export default Icon
