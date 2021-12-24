import styled, { keyframes } from 'styled-components';

export const Container = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #dfe4e8;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  height: 8.5rem;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  width: 90%;

  @media (min-width: 768px) {
    width: 85%;
  }

  @media (min-width: 992px) {
    width: 80%;
  }
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  img {
    animation: ${rotation} 3s linear infinite;
    display: none;
    height: 3.5rem;
    margin-right: 0.5rem;
    object-fit: cover;
    width: 3.5rem;
  }

  span {
    color: #5c6ac4;
    cursor: pointer;
    font-family: 'Fredericka the Great', cursive;
    font-size: 3.5rem;
    font-weight: 600;
  }

  @media (min-width: 576px) {
    img {
      display: block;
    }

    span {
      font-size: 4rem;
    }
  }
`;

export const Items = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-left: 1rem;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    & > div {
      transform: scale(1);
    }
    span {
      background-color: #dfe4e8;
    }
  }

  span {
    border: 2px solid transparent;
    border-radius: 0.4rem;
    color: #5c6ac4;
    cursor: pointer;
    display: inline-block;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    padding: 0.75rem 1rem;
    text-transform: uppercase;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: #dfe4e8;
    }
  }

  @media (min-width: 576px) {
    margin-left: 2rem;
  }
`;

export const Dropdown = styled.div`
  background-color: transparent;
  padding-top: 0.75rem;
  position: absolute;
  left: 0;
  top: 100%;
  transform: scale(0);
  transition: all 0.3s ease-out 0.01s;
  width: 100%;

  ul {
    background-color: #fff;
    border-radius: 0.4rem;
    box-shadow: 0 0.5rem 1.1rem 0 rgb(0 0 0 / 18%),
      0 0.4rem 1.5rem 0 rgb(0 0 0 / 15%);
    padding: 0.5rem 0 0.5rem 0.25rem;
  }

  li {
    border-left: 0.4rem solid transparent;
    color: #797f86;
    cursor: pointer;
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    margin-top: 0.75rem;
    padding: 0rem 0.5rem;
    text-align: left;
    transition: all 0.3s ease-out;

    &:hover {
      border-left-color: #5c6ac4;
      color: #5c6ac4;
    }
  }
`;
