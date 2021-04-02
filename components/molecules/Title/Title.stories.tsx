import React from 'react'
import Title, { Props } from './Title'

export default {
  title: 'molecules/Title',
  component: Title
}

export const Default = (props: Props) => <Title {...props}>About</Title>
