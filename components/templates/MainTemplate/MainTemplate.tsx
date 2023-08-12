import React from 'react'
import { FilterEntity } from '../../molecules/Filter/Filter'
import { MainHeader } from '../../organisms/MainHeader/MainHeader'

export interface Props {
  currentFilter: string;
  filters: FilterEntity[];
  onFilter: (value: string) => void;
  children?: React.ReactNode;
}

export const MainTemplate: React.FC<Props> = function ({ currentFilter, filters, onFilter, children }) {
  return (
    <div
      className="min-h-screen bg-gradient-to-tr from-custom-gray-900 to-black  text-white md:flex md:overflow-auto md:h-screen"
    >
      <div className="fixed z-10 top-0 left-0 right-0 mix-blend-difference md:w-sidebar">
        <div>
          <MainHeader currentFilter={currentFilter} filters={filters} onFilter={onFilter} />
        </div>
      </div>
      <div className="relative z-0 md:flex-1">
        {children}
      </div>
    </div>
  )
}
