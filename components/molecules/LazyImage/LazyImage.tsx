import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export interface Props {
  src: string;
  alt: string;
  className: string;
}

export const LazyImage: React.FC<Props> = function ({ src, alt, className }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const boxClasses = [
    'flex',
    'lazy-image',
    'relative',
  ]

  const placeholderClasses = [
    'azy-image__placeholder',
    'h-full',
    'absolute',
    'top-0',
    'left-0',
    'right-0',
    'bottom-0',
    'bg-custom-gray-900',
    'transition-opacity',
    'duration-1000',
  ]

  const imageClasses = [
    'lazy-image__image',
    'transition-opacity',
    'duration-1000',
  ]

  if (loaded) {
    boxClasses.push('h-full')
    placeholderClasses.push('opacity-0')
    imageClasses.push('opacity-100')
  } else {
    boxClasses.push('overflow-hidden')
    boxClasses.push('h-96')
    placeholderClasses.push('animate-pulse')
    imageClasses.push('opacity-0')
  }

  useEffect(() => {
    if (!isLoading && inView) {
      setIsLoading(true)
      const img = new Image()
      img.src = src
      img.onload = (e) => {
        setLoaded(true)
      }
    }
  }, [inView, isLoading, setLoaded])

  return (
    <div
      ref={ref}
      className={boxClasses.join(' ')}
    >
      <div className={placeholderClasses.join(' ')}></div>
      <div className={imageClasses.join(' ')}>
        {loaded && (
          <img src={src} alt={alt} className={className} />
        )}
      </div>
    </div>
  )
}
