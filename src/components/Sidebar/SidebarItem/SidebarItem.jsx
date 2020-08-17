import React from 'react'
import {
  StyledSidebarItem,
  SidebarItemIcon,
  StyledItemWrapper,
  StyledTitle,
} from './styled'

export const SidebarItem = ({
  isActive = false,
  isSidebarOpened,
  onClick,
  title,
  icon: Icon,
}) => {
  return (
    <StyledSidebarItem
      isActive={isActive}
      isSidebarOpened={isSidebarOpened}
      onClick={onClick}
    >
      <StyledItemWrapper isSidebarOpened={isSidebarOpened}>
        {Icon && (
          <SidebarItemIcon isActive={isActive}>
            <Icon />
          </SidebarItemIcon>
        )}
        {title && isSidebarOpened && <StyledTitle>{title}</StyledTitle>}
      </StyledItemWrapper>
    </StyledSidebarItem>
  )
}
