import styled, { keyframes } from 'styled-components'

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-10%);
  }
  to {
    transform: translateX(0);
  }
`

export const FiltersBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
  animation: ${slideInFromLeft} 0.5s ease-in;
`

export const StyledFilterButton = styled.button`
  outline: none;
  background-color: ${({ isActive }) => isActive ? 'rgb(36,130,140)' : 'white'};
  color: ${({ isActive }) => isActive ? 'white' : 'rgb(36,130,140)'};
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  font-size: 1rem;
  border: 1px solid rgb(36,130,140);

  &:hover, &:active, &:focus {
    outline: none;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`
