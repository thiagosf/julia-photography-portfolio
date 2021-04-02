import React from 'react'
import About, { Props } from './About'

export default {
  title: 'organisms/About',
  component: About,
  parameters: { actions: { argTypesRegex: '^on.*' } }
}

export const Default = (props: Props) => <About {...props} />
