import React from 'react'
import { classes } from '../../../utils'

export interface Props {
  tag?: keyof JSX.IntrinsicElements,
  children?: React.ReactNode,
  className?: string
}

const Text: React.FC<Props> = ({ tag: Wrapper = 'p', className, children, ...props }) => {
  const options: { [key: string]: boolean} = {
    text: true
  }
  if (className) {
    options[className] = true
  }
  const textClasses = classes(options)
  return (
    <Wrapper className={textClasses} {...props}>
      {children}
    </Wrapper>
  )
}

export default Text
