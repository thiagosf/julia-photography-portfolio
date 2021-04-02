import React from 'react'
import Text, { Props } from './Text'

export default {
  title: 'atoms/Text',
  component: Text
}

export const Paragraph = (props: Props) =>
  <Text {...props}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Text>

export const Strong = (props: Props) =>
  <Text {...{ tag: 'strong' }} {...props}>strong</Text>

export const Italic = (props: Props) =>
  <Text {...{ tag: 'em' }} {...props}>em</Text>

export const Small = (props: Props) =>
  <Text {...{ tag: 'small' }} {...props}>small</Text>

export const Span = (props: Props) =>
  <Text {...{ tag: 'span' }} {...props}>span</Text>

export const Sup = (props: Props) =>
  <Text {...{ tag: 'sup' }} {...props}>sup</Text>
