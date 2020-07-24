import React from 'react'
import { StyledGrid } from './styled'
import { PhotoItem } from './PhotoItem'

export const PhotosGrid = ({ images }) => {
  return (
    <StyledGrid>
      {images.map(({ url, name, size }, i) => (
        <PhotoItem key={i} imageURL={url} name={name} size={size} />
      ))}
    </StyledGrid>
  )
}
