import React from 'react'
import LogoSvg from '../../../public/svg/logo.svg'
import InfoSvg from '../../../public/svg/info.svg'
import InstagramSvg from '../../../public/svg/instagram.svg'
import MailSvg from '../../../public/svg/mail.svg'
import { Filters } from '../Filters/Filters'
import { FilterEntity } from '../../molecules/Filter/Filter'

export interface Props {
  currentFilter: string;
  filters: FilterEntity[];
  onFilter: (value: string) => void;
  children?: React.ReactNode;
}

export interface MainHeaderIconProps {
  children?: React.ReactNode;
}

export const MainHeaderIcon: React.FC<MainHeaderIconProps> = function ({ children }) {
  return (
    <div className="ml-6 md:ml-2 flex items-center justify-center cursor-pointer">
      {children}
    </div>
  )
}

export const MainHeader: React.FC<Props> = function ({ currentFilter, filters, onFilter, children }) {
  return (
    <div className="flex flex-col px-8 py-4 pt-8">
      <div className="flex mb-2 md:mb-4 pb-4 border-b border-white border-opacity-10">
        <div className="flex-grow">
          <LogoSvg className="w-12" />
        </div>
        <div className="flex items-center">
          {/* <MainHeaderIcon>
            <InfoSvg className="w-6 h-6 md:w-4 md:h-4" />
          </MainHeaderIcon> */}
          <MainHeaderIcon>
            <InstagramSvg className="w-6 h-6 md:w-4 md:h-4" />
          </MainHeaderIcon>
          <MainHeaderIcon>
            <MailSvg className="w-6 h-6 md:w-4 md:h-4" />
          </MainHeaderIcon>
        </div>
      </div>
      <div className="flex border-b border-white border-opacity-10 pb-2 md:pb-4">
        <Filters currentFilter={currentFilter} filters={filters} onFilter={onFilter} />
      </div>
    </div>
  )
}
