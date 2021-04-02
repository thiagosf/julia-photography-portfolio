import React, { useState } from 'react'
import FilterLinks, { Props } from './FilterLinks'

export default {
  title: 'organisms/FilterLinks',
  component: FilterLinks
}

const links = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Nature',
    value: 'nature'
  },
  {
    label: 'People',
    value: 'people'
  },
  {
    label: 'Lifestyle',
    value: 'lifestyle'
  }
]

export const Default = (props: Props) => {
  const [current, setCurrent] = useState('all')
  return (
    <FilterLinks
      links={links}
      current={current}
      onChange={value => setCurrent(value)}
    />
  )
}
