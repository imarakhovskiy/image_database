import React from 'react'
import { fileSizeFormatter } from '../../../../helpers/fileSizeFormatter'
import { Wrapper, StyledPhoto, PhotoName, PhotoSize } from './styled'

export const PhotoItem = ({ imageURL, size, name }) => {
  return (
    <Wrapper>
      <StyledPhoto src={imageURL} alt={name} />
      <PhotoName>{name}</PhotoName>
      <PhotoSize>{fileSizeFormatter(size)}</PhotoSize>
    </Wrapper>
  )
}
