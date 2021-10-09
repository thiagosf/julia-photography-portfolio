import React from 'react'
import { Photo } from '../../molecules/Photo/Photo'

export interface Props {
  photos: any[];
}

export const Gallery: React.FC<Props> = function ({ photos }) {
  const items = photos
    .map((photo) => {
      return (
        <div key={photo.url}>
          <Photo data={photo} />
        </div>
      )
    })
  return (
    <div className="flex p-4 pt-40 md:p-12 md:pt-12">
      <div className="grid gap-4 md:gap-12 lg:grid-cols-2 2xl:grid-cols-3 w-full">
        {items}
      </div>
    </div>
  )
}
