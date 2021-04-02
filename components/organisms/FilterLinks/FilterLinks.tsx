import React from 'react'
import { Flex, Text } from '../../atoms'
import { FilterLink } from '../../molecules'

export interface FilterLinkProp {
  label: string,
  value: string
}

export interface Props {
  current: string,
  links: FilterLinkProp[],
  onChange: (value: string) => void
}

const FilterLinks: React.FC<Props> = ({ current, links, onChange, ...props }) => {
  const items = links.map((link, index) => (
    <FilterLink
      key={index}
      active={current === link.value}
      onClick={() => onChange(link.value)}
    >{link.label}</FilterLink>
  ))
  return (
    <Flex
      className="filter-links"
      isColumn
      hEnd
      {...props}
    >
      <Text className="filter-links__title">Filter</Text>
      <Flex
        className="filter-links__list"
        isColumn
        hEnd
      >
        {items}
      </Flex>
    </Flex>
  )
}

export default FilterLinks
