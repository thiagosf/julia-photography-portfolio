import React from 'react'
import BigPhoto, { Props } from './BigPhoto'

export default {
  title: 'organisms/BigPhoto',
  component: BigPhoto,
  parameters: { actions: { argTypesRegex: '^on.*' } }
}

export const Default = (props: Props = {
  url: "https://picsum.photos/240/480",
  title: "Lorem ipsum dolor",
  tags: ["nature", "lifestyle", "people"],
  onChangeFullscreen: () => null
}) => (
  <div style={{ display: 'flex', height: '90vh', width: '100%' }}>
    <BigPhoto {...props} />
  </div>
)
