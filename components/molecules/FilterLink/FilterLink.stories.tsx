import React from 'react'
import FilterLink, { Props } from './FilterLink'

export default {
  title: 'molecules/FilterLink',
  component: FilterLink,
  parameters: { actions: { argTypesRegex: '^on.*' } }
}

export const Default = (props: Props) => (
  <FilterLink {...props}>All</FilterLink>
)

export const Active = (props: Props = {
  active: true,
  onClick: () => null
}) => (
  <FilterLink {...props}>Nature</FilterLink>
)
