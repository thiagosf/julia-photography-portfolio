import React, { useState } from 'react'
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
  onClick?: () => void;
  children?: React.ReactNode;
}

export const MainHeaderIcon: React.FC<MainHeaderIconProps> = function ({ onClick, children }) {
  return (
    <div onClick={onClick} className="ml-4 md:ml-2 flex items-center justify-center cursor-pointer">
      {children}
    </div>
  )
}

export const MainHeader: React.FC<Props> = function ({ currentFilter, filters, onFilter, children }) {
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const toggleShowInfo = () => setShowInfo((v) => !v)
  return (
    <div className="flex flex-col px-8 py-4 pt-8">
      <div className="flex mb-2 md:mb-4 pb-4">
        <div className="flex-grow">
          <a href="/">
            <LogoSvg className="w-12" />
          </a>
        </div>
        <div className="flex items-center">
          {/* <MainHeaderIcon onClick={toggleShowInfo}>
            <InfoSvg className="w-6 h-6 md:w-4 md:h-4" />
          </MainHeaderIcon> */}
          <a href="https://www.instagram.com/sf.juphotos" target="_blank" rel="noreferrer">
            <MainHeaderIcon>
              <InstagramSvg className="w-6 h-6 md:w-4 md:h-4" />
            </MainHeaderIcon>
          </a>
          <a href="mailto:hi@julia.photos" target="_blank" rel="noreferrer">
            <MainHeaderIcon>
              <MailSvg className="w-6 h-6 md:w-4 md:h-4" />
            </MainHeaderIcon>
          </a>
        </div>
      </div>
      {showInfo && (
        <div className="mb-2 md:mb-4 pb-4 text-center">
          <h1 className="text-xs font-bold">Julia Silva Ferreira</h1>
          <p className="italic text-xs mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod iste molestiae praesentium reprehenderit veniam non, consectetur vero quasi est, error obcaecati quisquam. A vel atque in quam voluptatibus sit!</p>
        </div>
      )}
      <div className="border-b border-white border-opacity-10"></div>
      <div className="flex border-b border-white border-opacity-10 py-2 md:py-4">
        <Filters currentFilter={currentFilter} filters={filters} onFilter={onFilter} />
      </div>
    </div>
  )
}
