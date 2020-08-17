import styled, { css } from 'styled-components'
import { SIDEBAR_ANIMATION_TYPE, SIDEBAR_ANIMATION_PERIOD } from '../styled'

export const StyledButton = styled.button`
  align-self: flex-end;
  border: none;
  width: 2rem;
  height: 2rem;
  margin: 0 1rem 3.5rem 0;
  border-radius: 50%;
  background-color: transparent;

  &:active,
  &:focus {
    outline: none;
  }

  svg {
    transition: transform ${SIDEBAR_ANIMATION_PERIOD} ${SIDEBAR_ANIMATION_TYPE};

    ${({ isSidebarOpened }) =>
      isSidebarOpened &&
      css`
        transform: rotate(180deg);
      `};

    &:hover {
      fill: #ebe84b;
    }
  }
`
