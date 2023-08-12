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
    <div className="flex p-1">
      <div className="grid gap-1 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full">
        {items}
      </div>
    </div>
  )
}
