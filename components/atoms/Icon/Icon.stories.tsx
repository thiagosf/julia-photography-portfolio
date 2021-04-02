import React from 'react'
import Icon, { Props } from './Icon'

export default {
  title: 'atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['info', 'arrow-left']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large']
      }
    }
  }
}

const defaultProps: Props = {
  name: 'info',
  size: 'small'
}

export const Default = (props: Props) =>
  <Icon
    {...defaultProps}
    {...props}
  />
