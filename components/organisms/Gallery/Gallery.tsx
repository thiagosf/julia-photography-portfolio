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
    <div className="flex p-4 pt-40 md:p-12 md:pt-12">
      <div className="grid gap-4 md:gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full">
        {items}
      </div>
    </div>
  )
}
