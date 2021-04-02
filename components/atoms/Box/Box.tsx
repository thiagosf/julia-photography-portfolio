import React from 'react'
import { classes } from '../../../utils'

export interface Props {
  className?: string,
  children?: React.ReactNode,
  props?: object
}

const Box: React.FC<
  Props &
  React.HTMLProps<HTMLDivElement>
> = ({ children, className, ...props }) => {
  const options: { [key: string]: boolean } = {
    box: true
  }
  if (className) {
    options[className] = true
  }
  const boxClasses = classes(options)
  return (
    <div className={boxClasses} {...props}>
      {children}
    </div>
  )
}

export default Box
