import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { imagesSelector } from '../../modules/Selectors'
import { PhotosGrid } from './PhotosGrid'
import { FiltersBlock } from './FiltersBlock'

export const Photos = () => {
  const images = useSelector(imagesSelector)
  const [imagesToRender, setImagesToRender] = useState(images)

  return (
    <>
      <FiltersBlock setImagesToRender={setImagesToRender}></FiltersBlock>
      <PhotosGrid images={imagesToRender} />
    </>
  )
}
