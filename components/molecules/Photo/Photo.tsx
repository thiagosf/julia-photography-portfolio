import React from 'react'
import { LazyImage } from '../LazyImage/LazyImage'

export interface Props {
  data: any;
}

export const Photo: React.FC<Props> = function ({ data }) {
  return (
    <a
      href={data.link}
      className="h-full relative cursor-pointer block"
    >
      <LazyImage
        src={data.url}
        alt={data.title}
        className="h-full object-cover min-h-full w-full"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 opacity-0 hover:opacity-50 transition-all duration-300 flex items-end">
        <div className="text-xs flex justify-between p-4 pt-24 bg-gradient-to-t from-black to-transparent w-full">
          <div className="font-bold">{data.title}</div>
          <div>#{data.tags.join(' #')}</div>
        </div>
      </div>
    </a>
  )
}
