import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { imagesSelector } from '../../../modules/Selectors'
import { FiltersBlockWrapper, StyledFilterButton } from './styled'
import { useEffect } from 'react'

const FILTER_VALUES = {
  NAME: 'name',
  SIZE: 'size',
  MODIFIED: 'modified',
}

const FILTERS = {
  [FILTER_VALUES.NAME]: {
    title: 'Name',
    value: FILTER_VALUES.NAME,
    sort: (images) => [...images].sort((a, b) => a.name.localeCompare(b.name)),
  },
  [FILTER_VALUES.SIZE]: {
    title: 'Size',
    value: FILTER_VALUES.SIZE,
    sort: (images) => [...images].sort((a, b) => a.size - b.size),
  },
  [FILTER_VALUES.MODIFIED]: {
    title: 'Modified',
    value: FILTER_VALUES.MODIFIED,
    sort: (images) =>
      [...images].sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified)),
  },
}

export const FiltersBlock = ({ setImagesToRender }) => {
  const images = useSelector(imagesSelector)

  const [activeFilter, setActiveFilter] = useState(FILTER_VALUES.NAME)

  useEffect(() => {
    setImagesToRender(FILTERS[activeFilter].sort(images))
  }, [images, activeFilter, setImagesToRender])

  return (
    <FiltersBlockWrapper>
      {Object.values(FILTERS).map(({ title, value }, i) => (
        <StyledFilterButton
          key={i}
          isActive={value === activeFilter}
          onClick={() => {
            setActiveFilter(value)
          }}
        >
          {title}
        </StyledFilterButton>
      ))}
    </FiltersBlockWrapper>
  )
}
