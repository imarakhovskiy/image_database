import React from 'react'
import { SectionContentWrapper, Title } from './styled'

export const SectionContent = ({ title, children }) => {
  return (
    <SectionContentWrapper>
      <Title>{title}</Title>
      {children}
    </SectionContentWrapper>
  )
}
