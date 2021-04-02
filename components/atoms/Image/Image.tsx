import React from 'react'
import { classes } from '../../../utils'

export interface Props {
  src: string,
  alt: string,
  rounded?: boolean,
  onClick?: () => void
}

const Image: React.FC<Props> = ({ src, alt, rounded, ...props }) => {
  const imageClasses = classes({
    'image': true,
    'image--rounded': rounded
  })
  return (
    <img
      src={src}
      alt={alt}
      className={imageClasses}
      {...props}
    />
  )
}

export default Image
