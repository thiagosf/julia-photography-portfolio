import React from 'react'
import CarouselPhotos, { Props } from './CarouselPhotos'

export default {
  title: 'organisms/CarouselPhotos',
  component: CarouselPhotos,
  parameters: { actions: { argTypesRegex: '^on.*' } }
}

const photos = [
  {
    url: 'https://picsum.photos/800/800',
    title: 'Lorem ipsum 1',
    tags: ['nature', 'animal']
  },
  {
    url: 'https://picsum.photos/900/700',
    title: 'Lorem ipsum 2',
    tags: ['people', 'lifestyle']
  },
  {
    url: 'https://picsum.photos/1500/300',
    title: 'Lorem ipsum 3',
    tags: ['nature', 'people']
  },
  {
    url: 'https://picsum.photos/600/800',
    title: 'Lorem ipsum 4',
    tags: ['people', 'portrait']
  },
  {
    url: 'https://picsum.photos/300/500',
    title: 'Lorem ipsum 5',
    tags: ['lifestyle']
  },
  {
    url: 'https://picsum.photos/600/200',
    title: 'Lorem ipsum 6',
    tags: ['people']
  },
  {
    url: 'https://picsum.photos/1200/1200',
    title: 'Lorem ipsum 7',
    tags: ['nature']
  }
]

export const Default = (props: Props = {
  photos: photos,
  onSlideChange: () => console.log('selected')
}) => (
  <CarouselPhotos {...props} />
)
