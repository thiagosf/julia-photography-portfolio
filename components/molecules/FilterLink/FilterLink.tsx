import React from 'react'
import { Flex, Text } from '../../atoms'
import { classes } from '../../../utils'

export interface Props {
  active: boolean,
  onClick: () => void
}

const FilterLink: React.FC<Props> = ({ active, children, onClick, ...props }) => {
  const filterLinkClasses = classes({
    'filter-link': true,
    'filter-link--active': active
  })
  return (
    <Flex
      inline
      onClick={onClick}
      className={filterLinkClasses}
      {...props}
    >
      <Text className="filter-link--text" tag="span">{children}</Text>
    </Flex>
  )
}

export default FilterLink
