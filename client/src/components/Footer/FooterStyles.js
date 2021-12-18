import styled from 'styled-components';

export const Container = styled.footer`
  margin: 2rem auto;
  max-width: 128rem;
  padding: 0 2.4rem;
  width: 90%;

  @media (min-width: 768px) {
    width: 85%;
  }

  @media (min-width: 992px) {
    width: 80%;
  }
`;

export const Content = styled.div`
  background-color: #4db6ac;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;

  & > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    & > div {
      width: 50%;
    }
  }
`;

export const About = styled.div`
  color: #fff;
  font-weight: 400;
  letter-spacing: 0.1rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
    margin-top: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
  }

  a {
    /* color: #29b6f6; */
    color: #fff;
    font-weight: 600;
    transition: all 0.3 ease;

    &:hover {
      color: #000;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.6rem;
      padding-right: 3rem;
    }
  }
`;

export const Info = styled(About)`
  p {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`;
