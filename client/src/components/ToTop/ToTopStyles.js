import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 3.7rem;

  button {
    background-color: #f3f3f3;
    animation: ${pulse} 1s ease infinite 0s;
    font-weight: 600;
  }
`;
