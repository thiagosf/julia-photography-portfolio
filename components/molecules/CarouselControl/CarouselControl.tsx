import React from 'react'
import { Flex } from '../../atoms'
import { ButtonIcon } from '../'

export interface Props {
  onPrev: () => void,
  onNext: () => void,
  enabledPrev?: boolean
  enabledNext?: boolean
}

const CarouselControl: React.FC<Props> = ({ onPrev, enabledPrev = true, enabledNext = true, onNext, ...props }) => {
  return (
    <Flex inline className="carousel-control" {...props}>
      <ButtonIcon
        enabled={enabledPrev}
        onClick={onPrev}
        icon="arrow-left"
      />
      <ButtonIcon
        enabled={enabledNext}
        onClick={onNext}
        icon="arrow-right"
      />
    </Flex>
  )
}

export default CarouselControl
