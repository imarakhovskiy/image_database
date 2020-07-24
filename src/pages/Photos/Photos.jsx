import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SectionContent } from '../../components/SectionContent'
import { imagesSelector } from '../../modules/Selectors'
import { PhotosGrid } from './PhotosGrid'
import { FiltersBlock } from './FiltersBlock'

export const Photos = () => {
  const images = useSelector(imagesSelector)
  const [imagesToRender, setImagesToRender] = useState(images)

  return (
    <SectionContent title={'Photos'}>
      <FiltersBlock setImagesToRender={setImagesToRender}></FiltersBlock>
      <PhotosGrid images={imagesToRender} />
    </SectionContent>
  )
}
