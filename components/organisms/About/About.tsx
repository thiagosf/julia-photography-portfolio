import React from 'react'
import { Flex, Box, Text, Image, Icon } from '../../atoms'
import { Title } from '../../molecules'
import { classes } from '../../../utils'

export interface Props {
  active?: boolean;
  onClose: () => void;
  data: any;
}

const About: React.FC<Props> = ({ active = false, onClose, data, ...props }) => {
  const aboutClasses = classes({
    'about': true,
    'about--active': active
  })
  return (
    <Flex className={aboutClasses} {...props}>
      <Icon name="close" onClick={onClose} />
      <Flex className="about__wrapper">
        <Flex isColumn hCenter className="about__header">
          <Title>About</Title>
          <Image
            src={data.photo.url}
            alt="Julia"
          />
        </Flex>
        <Box className="about__content">
          <Text>{data.text}</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default About
