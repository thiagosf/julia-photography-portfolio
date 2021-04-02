import React from 'react'
import { Flex } from '../../atoms'

export interface Props {
  children?: React.ReactNode,
  props?: object
}

const Default: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Flex
      isColumn
      className="default-template"
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Default
