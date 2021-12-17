import styled from 'styled-components';

export const Button = styled.button`
  background-color: #26a69a;
  border: none;
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.5rem 0 rgb(0 0 0 / 16%),
    0 0.2rem 1rem 0 rgb(0 0 0 / 12%);
  color: #fff;
  cursor: pointer;
  font-size: 1.4rem;
  height: 3.6rem;
  line-height: 3.6rem;
  letter-spacing: 0.1rem;
  outline: none;
  padding: 0 2.8rem;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 0 0.5rem 1.1rem 0 rgb(0 0 0 / 18%),
      0 0.4rem 1.5rem 0 rgb(0 0 0 / 15%);
  }
`;
