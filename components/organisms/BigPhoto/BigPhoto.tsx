import React, { useState, useEffect } from 'react'
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
  const [isLoaded, setIsLoaded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
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
    }
  }, [url])

  return (
    <Flex
      isColumn
      className={bigPhotoClasses}
      {...props}
    >
      <Box
        className="big-photo--image"
        style={{ backgroundImage: `url(${url}` }}
      />
      <Box
        className="big-photo--image-fullscreen"
        style={{ backgroundImage: `url(${url}` }}
      />
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
