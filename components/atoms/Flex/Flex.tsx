import React from 'react'
import { classes } from '../../../utils'

export interface Props {
  ref?: React.Ref<any>,
  className?: string,
  inline?: boolean,
  children?: React.ReactNode,
  props?: object,
  isColumn?: boolean,
  vCenter?: boolean,
  hCenter?: boolean,
  vEnd?: boolean,
  hEnd?: boolean,
  grow?: boolean,
  onClick?: () => void
}

const Flex: React.FC<Props> = React.forwardRef(({
  className,
  inline = false,
  isColumn = false,
  vCenter = false,
  hCenter = false,
  vEnd = false,
  hEnd = false,
  grow = false,
  children,
  ...props
}, ref) => {
  const options: { [key: string]: boolean } = {
    'flex': true,
    'flex--inline': inline,
    'flex--column': isColumn,
    'flex--v-center': vCenter,
    'flex--h-center': hCenter,
    'flex--v-end': vEnd,
    'flex--h-end': hEnd,
    'flex--grow': grow
  }
  if (className) {
    options[className] = true
  }
  const flexClasses = classes(options)
  return (
    <div className={flexClasses} {...props} ref={ref}>
      {children}
    </div>
  )
})

export default Flex
