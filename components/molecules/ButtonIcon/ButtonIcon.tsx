import React from 'react'
import { Flex, Icon } from '../../atoms'
import { classes } from '../../../utils'

export interface Props {
  icon: string,
  onClick: () => void,
  props?: object,
  enabled?: boolean,
  className?: string
}

const ButtonIcon: React.FC<Props> = ({ icon, enabled = true, onClick, className, ...props }) => {
  const options: { [key: string]: boolean } = {
    'button-icon': true,
    'button-icon--disabled': !enabled
  }
  if (className) {
    options[className] = true
  }
  const buttonIconClasses = classes(options)
  return (
    <Flex
      inline
      className={buttonIconClasses}
      onClick={onClick}
      {...props}
    >
      <Icon name={icon} />
    </Flex>
  )
}

export default ButtonIcon
