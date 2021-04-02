import React from 'react'
import Image, { Props } from './Image'

export default {
  title: 'atoms/Image',
  component: Image
}

const defaultProps: Props = {
  src: 'https://placehold.it/200x200',
  alt: 'Lorem ipsum'
}

export const Default = (props: Props) => (
  <Image {...defaultProps} {...props} />
)
