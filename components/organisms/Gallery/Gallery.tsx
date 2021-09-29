import React from 'react'
import { Photo } from '../../molecules/Photo/Photo'

export interface Props {
  photos: any[];
}

export const Gallery: React.FC<Props> = function ({ photos }) {
  const items = photos
    .slice(0, 12) // @todo test
    .map((photo) => {
      return (
        <div key={photo.url}>
          <Photo data={photo} />
        </div>
      )
    })
  return (
    <div className="flex p-4 pt-40 md:pt-4">
      <div className="h-4 bg-custom-gray-900 fixed pointer-events-none top-0 left-0 right-0"></div>
      <div className="h-4 bg-custom-gray-900 fixed pointer-events-none bottom-0 left-0 right-0"></div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full">
        {items}
      </div>
    </div>
  )
}
