import React from 'react'
import { Filter, FilterEntity } from '../../molecules/Filter/Filter'

export interface Props {
  currentFilter: string;
  filters: FilterEntity[];
  onFilter: (value: string) => void;
}

export const Filters: React.FC<Props> = function ({ currentFilter, filters, onFilter }) {
  const items = filters.map((filter, index) => {
    return (
      <Filter
        key={index}
        actived={filter.value === currentFilter}
        {...filter}
        onClick={onFilter}
      />
    )
  })
  return (
    <div className="flex w-full justify-between items-center md:flex-col sm:items-start">
      {items}
    </div>
  )
}
