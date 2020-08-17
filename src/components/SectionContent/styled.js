import styled from 'styled-components'
import { SIDEBAR_ANIMATION_PERIOD, SIDEBAR_ANIMATION_TYPE } from '../Sidebar/styled'

export const SectionContentWrapper = styled.div`
  padding: ${({ isSidebarOpened }) =>
    `7rem 2rem 3rem ${isSidebarOpened ? '24.2rem' : '6.4rem'}`};
  width: 100%;
  transition: padding-left ${SIDEBAR_ANIMATION_PERIOD} ${SIDEBAR_ANIMATION_TYPE};
`

export const Title = styled.h2`
  color: rgba(47, 86, 186, 0.5);
  margin: 0 0 1.5rem;
  font-size: 2rem;
`
