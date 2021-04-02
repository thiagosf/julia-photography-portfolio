import React from 'react'
import Logo, { Props } from './Logo'

export default {
  title: 'molecules/Logo',
  component: Logo
}

export const Default = (props: Props) => (
  <Logo {...props} />
)

export const WithText = (props: Props = {
  withText: true
}) => (
  <Logo {...props} />
)

export const WithTextWhite = (props: Props = {
  withText: true,
  white: true
}) => (
  <Logo {...props} />
)
