import styled from 'styled-components';
import { Content as Pattern } from '../Navbar/NavbarStyles';

export const Container = styled.footer`
  background-color: #fff;
  margin-top: 4rem;
  width: 100%;
`;

export const Content = styled(Pattern)`
  align-items: center;
  flex-direction: column;
  padding: 0;

  div {
    width: 90%;
  }

  @media (min-width: 576px) {
    flex-direction: row;

    div {
      width: 48%;
    }
  }
`;

export const About = styled.div`
  font-weight: 400;
  letter-spacing: 0.1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;

  h2 {
    color: #5c6ac4;
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
    margin-top: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
  }

  a {
    color: #fff;
    font-weight: 600;
    transition: all 0.3 ease;

    &:hover {
      color: #000;
    }
  }

  @media (min-width: 768px) {
    max-width: 50%;

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.6rem;
      padding-right: 3rem;
    }
  }
`;

export const Background = styled.div`
  height: 100%;
  overflow: hidden;

  img {
    width: 90%;
  }
`;
