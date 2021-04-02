import React from 'react'
import ButtonIcon, { Props } from './ButtonIcon'

export default {
  title: 'molecules/ButtonIcon',
  component: ButtonIcon,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['arrow-right', 'arrow-left']
      }
    }
  }
}

export const Default = (props: Props = {
  icon: 'arrow-left',
  onClick: () => null
}) => (
  <ButtonIcon {...props} />
)
