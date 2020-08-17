import React from 'react'
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg'
import { StyledButton } from './styled'

export const SidebarStateButton = ({ isSidebarOpened, onClick }) => {
  return (
    <StyledButton isSidebarOpened={isSidebarOpened} onClick={onClick}>
      <ArrowIcon />
    </StyledButton>
  )
}
