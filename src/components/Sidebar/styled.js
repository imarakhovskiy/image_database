import styled, { keyframes, css } from 'styled-components'

export const SIDEBAR_OPENED_LIST_WIDTH = 18,
  SIDEBAR_CLOSED_LIST_WIDTH = 4,
  SIDEBAR_OPENED_WRAPPER_HORIZONTAL_PADDING = 1,
  SIDEBAR_CLOSED_WRAPPER_HORIZONTAL_PADDING = 0

export const SIDEBAR_ANIMATION_PERIOD = '0.3s'
export const SIDEBAR_ANIMATION_TYPE = 'ease-in'

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

export const AnimationWrapper = styled.div`
  position: fixed;
  animation: ${slideInFromLeft} ${SIDEBAR_ANIMATION_PERIOD} ${SIDEBAR_ANIMATION_TYPE};
`

export const SidebarWrapper = styled.div`
  flex-grow: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgb(36, 130, 140);
  height: 100vh;
  padding: ${({ isSidebarOpened }) =>
    `7rem ${
      isSidebarOpened
        ? SIDEBAR_OPENED_WRAPPER_HORIZONTAL_PADDING
        : SIDEBAR_CLOSED_WRAPPER_HORIZONTAL_PADDING
    }rem 3rem`};
  box-sizing: border-box;
`

export const SidebarTopContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const TotalSize = styled.h4`
  color: white;
  text-align: center;
`

export const SidebarItemsList = styled.ul`
  margin: 0;
  width: ${({ isSidebarOpened }) =>
    `${isSidebarOpened ? SIDEBAR_OPENED_LIST_WIDTH : SIDEBAR_CLOSED_LIST_WIDTH}rem`};
  transition: padding-inline-start ${SIDEBAR_ANIMATION_PERIOD} ${SIDEBAR_ANIMATION_TYPE},
    list-style ${SIDEBAR_ANIMATION_PERIOD} ${SIDEBAR_ANIMATION_TYPE},
    width ${SIDEBAR_ANIMATION_PERIOD} ${SIDEBAR_ANIMATION_TYPE};

  ${({ isSidebarOpened }) =>
    !isSidebarOpened &&
    css`
      list-style: none;
      padding-inline-start: 0;
    `};

  li {
    padding: ${({ isSidebarOpened }) =>
      isSidebarOpened ? '0.5rem 0 0.5rem 0.5rem' : '0.3rem 0'};
  }
`
