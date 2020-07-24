import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0.4rem;
  &:hover {
    background-color: rgb(237, 247, 247);
  }
`

export const StyledPhoto = styled.img`
  width: 100%;
  height: 8rem;
  object-fit: cover;
`

export const PhotoName = styled.h4`
  font-weight: 600;
  margin: 0.4rem 0 0.3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const PhotoSize = styled.h5`
  color: rgba(47, 86, 186, 0.5);
  margin: 0;
`
