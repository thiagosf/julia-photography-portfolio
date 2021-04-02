import React from 'react'
import Flex, { Props } from './Flex'

export default {
  title: 'atoms/Flex',
  component: Flex
}

export const TwoColumns = (props: Props) => (
  <Flex {...props}>
    <div>1</div>
    <div>2</div>
  </Flex>
)

export const ThreeColumns = (props: Props) => (
  <Flex {...props}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Flex>
)
