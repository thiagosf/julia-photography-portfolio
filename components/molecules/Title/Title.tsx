import React from 'react'
import { Text } from '../../atoms'

export interface Props {
  tag?: keyof JSX.IntrinsicElements,
  children?: React.ReactNode,
  props?: object
}

const Title: React.FC<Props> = ({ tag = 'h1', children, ...props }) => {
  return (
    <Text tag={tag} className="title" {...props}>
      {children}
    </Text>
  )
}

export default Title
