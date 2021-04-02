import React, { useRef, useState, useImperativeHandle } from 'react'
import Swiper from 'react-id-swiper'
import SwiperCore, { Pagination, Lazy } from 'swiper'
import { Box } from '../../atoms'
import { CarouselControl } from '../../molecules'
import { classes } from '../../../utils'
// import '../../../../node_modules/swiper/swiper-bundle.min.css'

SwiperCore.use([Pagination, Lazy])

export interface Photo {
  url: string,
  title: string,
  slug: string;
  tags: string[];
  link: string;
  fullLink: string;
}

export interface Props {
  ref?: React.Ref<any>,
  photos: Photo[],
  config?: object,
  onSlideChange: (photo: Photo) => void,
  currentPhotoIndex?: number
}

const CarouselPhotos: React.FC<Props> = React.forwardRef(({ photos, config = {}, onSlideChange, currentPhotoIndex = 0, ...props }, ref) => {
  const [enabledPrev, setEnabledPrev] = useState(true)
  const [enabledNext, setEnabledNext] = useState(true)

  const swiperRef: React.Ref<any> = useRef()
  const items = photos.map((photo, index) => {
    const options: { [key: string]: boolean } = {
      'carousel-photo-box': true,
      'carousel-photo-box--selected': currentPhotoIndex === index
    }
    const carouselPhotoBoxClasses = classes(options)
    return (
      <Box
        key={`${index}-${photo.url}`}
        className={carouselPhotoBoxClasses}
      >
        <Box
          className="carousel-photo swiper-lazy"
          data-background={photo.url}
          onClick={() => {
            if (currentPhotoIndex !== index) {
              onSlideChange(photo)
            }
          }}
        >
          <Box className="swiper-lazy-preloader"></Box>
        </Box>
      </Box>
    )
  })

  const defaultConfig = {
    lazy: {
      loadPrevNext: false,
      preloaderClass: 'swiper-lazy-preloader'
    },
    preloadImages: false,
    spaceBetween: 20,
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 3
    },
    on: {
      init: (data: any) => {
        setEnabledPrev(!data.isBeginning)
        setEnabledNext(!data.isEnd)
      },
      observerUpdate: (data: any) => {
        setEnabledPrev(!data.isBeginning)
        setEnabledNext(!data.isEnd)
        if (swiperRef?.current?.swiper) {
          swiperRef.current.swiper.lazy.load()
        }
      }
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 5
      },
      1024: {
        spaceBetween: 40,
        slidesPerView: 3
      }
    },
    observer: true,
    observeParents: true,
    centerInsufficientSlides: true
  }

  const onPrev = () => changeSlide('prev')
  const onNext = () => changeSlide('next')

  const changeSlide = (direction: string) => {
    if (swiperRef?.current?.swiper) {
      const { swiper } = swiperRef.current
      if (direction === 'next') {
        swiper.slideNext()
      } else {
        swiper.slidePrev()
      }
      setEnabledPrev(!swiper.isBeginning)
      setEnabledNext(!swiper.isEnd)
      if (onSlideChange) {
        onSlideChange(photos[swiper.activeIndex])
      }
    }
  }

  useImperativeHandle(ref, () => ({
    setActiveSlide: (index: number) => {
      if (swiperRef?.current?.swiper) {
        const { swiper } = swiperRef.current
        swiper.slideTo(index)
      }
    }
  }))

  return (
    <Box className="carousel-photos" {...props}>
      <Swiper
        ref={swiperRef}
        {...defaultConfig}
        {...config}
      >
        {items}
      </Swiper>
      <Box className="carousel-photos__control">
        <CarouselControl
          onPrev={onPrev}
          onNext={onNext}
          enabledPrev={enabledPrev}
          enabledNext={enabledNext}
        />
      </Box>
    </Box>
  )
})

export default CarouselPhotos
