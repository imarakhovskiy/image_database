import React from 'react'
import { StyledSidebarItem } from './styled'

export const SidebarItem = ({ isActive = false, onClick, title }) => {
  return (
    <StyledSidebarItem isActive={isActive} onClick={onClick}>
      {title}
    </StyledSidebarItem>
  )
}
