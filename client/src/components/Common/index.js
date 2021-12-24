import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #5c6ac4;
  border-radius: 0.4rem;
  color: #5c6ac4;
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  outline: none;
  padding: 0.75rem 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #5c6ac4;
    color: #fff;
  }
`;
