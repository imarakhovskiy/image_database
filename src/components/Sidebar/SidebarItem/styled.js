import styled, { css } from 'styled-components'

export const StyledSidebarItem = styled.li.attrs(({ isActive }) => ({ isActive }))`
  color: ${({ isActive }) => (isActive ? 'white' : 'rgba(0, 0, 0, 0.5)')};
  margin: 0;
  padding: 0.5rem 0 0.5rem 0.5rem;
  cursor: pointer;
  ${({ isActive }) =>
    !isActive &&
    css`
      list-style: none;
    `}
`
