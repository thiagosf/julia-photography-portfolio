import React, { useState, useEffect, useRef } from 'react'
import { Flex, Box, Text, Icon } from '../../atoms'
import { classes } from '../../../utils'

export interface Props {
  url: string,
  title: string,
  tags: string[],
  isHidding?: boolean,
  onChangeFullscreen: (isFullscreen: boolean) => void,
  props?: object
}

const BigPhoto: React.FC<Props> = ({
  url,
  title,
  tags,
  isHidding,
  onChangeFullscreen,
  ...props
}) => {
  const boxRef: React.Ref<any> = useRef()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [imageWidth, setImageWidth] = useState<[number, number]>([0, 0])
  const [imageHeight, setImageHeight] = useState<[number, number]>([0, 0])
  const formattedTags = tags.map(item => `#${item}`).join(' ')
  const bigPhotoClasses = classes({
    'big-photo': true,
    'big-photo--is-loading': !isLoaded,
    'big-photo--is-fullscreen': isFullscreen,
    'big-photo--is-hidding': isHidding
  })
  const icon = !isFullscreen ? 'fullscreen' : 'arrow-left-long'

  const toggleFullscreen = () => {
    const newValue = !isFullscreen
    setIsFullscreen(newValue)
    onChangeFullscreen(newValue)
  }

  useEffect(() => {
    setIsLoaded(false)
    const img = document.createElement('img')
    img.src = url
    img.onload = function () {
      setIsLoaded(true)

      let width: number = img.width
      let height: number = img.height
      let widthFull: number
      let heightFull: number
      let refWidth = window.innerWidth
      let refHeight = window.innerHeight

      if (refWidth < 1024) {
        refWidth = boxRef.current.offsetWidth
        refHeight = boxRef.current.offsetHeight
      }

      if (width > height) {
        width = width * refHeight / height
        height = refHeight
        widthFull = width
        heightFull = height
      } else {
        height = height * refWidth / width
        width = refWidth
        widthFull = width * refHeight / height
        heightFull = refHeight
      }

      if (refHeight > refWidth) {
        if (height < refHeight) {
          width = width * refHeight / height
          height = refHeight
        }
        heightFull = height * refWidth / width
        widthFull = refWidth
      }

      setImageWidth([width, widthFull])
      setImageHeight([height, heightFull])
    }
  }, [url])

  return (
    <Flex
      isColumn
      className={bigPhotoClasses}
      ref={boxRef}
      {...props}
    >
      <Box
        className="big-photo--image"
      >
        <Box
          className="big-photo--image--img"
          style={{
            backgroundImage: `url(${url})`,
            width: !isFullscreen ? imageWidth[0] : imageWidth[1],
            height: !isFullscreen ? imageHeight[0] : imageHeight[1],
          }}
        />
      </Box>
      <Box
        className="big-photo--button-fullscreen"
        onClick={toggleFullscreen}
      >
        <Icon name={icon} />
      </Box>
      <Flex className="big-photo--content">
        <Flex isColumn grow vEnd hEnd className="big-photo--info">
          <Text className="big-photo--title" tag="h1">{title}</Text>
          <Flex className="big-photo--tags">
            <Text tag="strong">{formattedTags}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BigPhoto
