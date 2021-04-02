import React from 'react'
import CarouselControl, { Props } from './CarouselControl'

export default {
  title: 'molecules/CarouselControl',
  component: CarouselControl,
  parameters: { actions: { argTypesRegex: '^on.*' } }
}

const defaultProps = {
  onPrev: console.log,
  onNext: console.log
}

export const Default = (props: Props) => (
  <CarouselControl {...defaultProps} {...props} />
)
