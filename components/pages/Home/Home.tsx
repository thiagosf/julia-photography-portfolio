import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Flex, Box } from '../../atoms'
import {
  MainHeader,
  BigPhoto,
  CarouselPhotos,
  FilterLinks,
  About
} from '../../organisms'
import { Photo } from '../../organisms/CarouselPhotos/CarouselPhotos'
import { classes } from '../../../utils'

export interface Props {
  photos: any[];
  tags: any[];
  about: any;
}

const Home: React.FC<Props> = ({ photos, tags, about }) => {
  const router = useRouter()
  const carouselPhotosRef: React.Ref<any> = useRef()
  const filters = [
    {
      label: 'All',
      value: 'all'
    }
  ].concat(
    tags.map((tag: any) => {
      return {
        label: tag.name,
        value: tag.name,
      }
    })
  )

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [currentFilter, setCurrentFilter] = useState('all')
  const [currentPhoto, setCurrentPhoto] = useState(photos[0])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isHidding, setIsHidding] = useState(false)
  const [aboutActive, setAboutActive] = useState(false)
  const homeClasses = classes({
    'home': true,
    'home--is-fullscreen': isFullscreen
  })
  const filterPhotos = (filter: string) => {
    return (photo: Photo) => {
      if (filter === 'all') return true
      return photo.tags.includes(filter)
    }
  }
  const filteredPhotos = photos.filter(filterPhotos(currentFilter))

  const onSlideChange = (photo: Photo) => {
    const index = filteredPhotos
      .map(item => item.url)
      .indexOf(photo.url)
    setCurrentPhotoIndex(index)
    setIsHidding(true)
    router.push(photo.link)
    setTimeout(() => {
      setCurrentPhoto(photo)
      setIsHidding(false)
    }, 200)
  }

  const onChangeFullscreen = (value: boolean) => {
    setIsFullscreen(value)
  }

  const onResize = () => {
    const windowHeight = `${window.innerHeight}px`
    document.documentElement.style.setProperty('--window-height', windowHeight)
  }

  const onFilter = (value: string) => {
    const filteredPhotos = photos.filter(filterPhotos(value))
    setCurrentPhoto(filteredPhotos[0])
    setCurrentFilter(value)
    setCurrentPhotoIndex(0)
  }

  const onClickMainHeaderIcon = (item: string) => {
    if (item === 'info') {
      setAboutActive(!aboutActive)
    }
  }

  const closeAbout = () => {
    setAboutActive(false)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <Flex
      isColumn
      className={homeClasses}
    >
      <About active={aboutActive} onClose={closeAbout} data={about} />
      <Box className="home__main-header">
        <MainHeader onClick={onClickMainHeaderIcon} />
      </Box>
      <Box className="home__filter-links">
        <FilterLinks
          links={filters}
          current={currentFilter}
          onChange={onFilter}
        />
      </Box>
      <Box className="home__big-photo">
        <BigPhoto
          url={currentPhoto.url}
          title={currentPhoto.title}
          tags={currentPhoto.tags}
          onChangeFullscreen={onChangeFullscreen}
          isHidding={isHidding}
        />
      </Box>
      <Box className="home__carousel-photos">
        <CarouselPhotos
          ref={carouselPhotosRef}
          photos={filteredPhotos}
          onSlideChange={onSlideChange}
          currentPhotoIndex={currentPhotoIndex}
        />
      </Box>
    </Flex>
  )
}

export default Home