import React from 'react'
import { SectionContentWrapper, Title } from './styled'

export const SectionContent = ({ title, children, isSidebarOpened }) => {
  return (
    <SectionContentWrapper isSidebarOpened={isSidebarOpened}>
      {title && <Title>{title}</Title>}
      {children}
    </SectionContentWrapper>
  )
}
