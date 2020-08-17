import styled, { css } from 'styled-components'

export const StyledItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  ${({ isSidebarOpened }) =>
    !isSidebarOpened &&
    css`
      justify-content: center;
    `}
`

export const StyledSidebarItem = styled.li`
  height: 2rem;
  color: white;
  border: 1px solid transparent;
  margin: 0;
  cursor: pointer;
  ${({ isActive, isSidebarOpened }) =>
    isActive
      ? !isSidebarOpened &&
        css`
          border-radius: 0.5rem;
          border: 1px solid white;
        `
      : css`
          list-style: none;
          color: rgba(0, 0, 0, 0.5);
        `}
`

export const StyledTitle = styled.h5`
  margin: 0 0 0 1rem;
  font-size: 1rem;
`

export const SidebarItemIcon = styled.div`
  width: 2rem;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;

    ${({ isActive }) =>
      isActive &&
      css`
        fill: white;
      `}
  }
`
