import React from 'react'
import MainHeader, { Props } from './MainHeader'

export default {
  title: 'organisms/MainHeader',
  component: MainHeader,
  parameters: { actions: { argTypesRegex: '^on.*' } }
}

export const Default = (props: Props) => <MainHeader {...props} />
