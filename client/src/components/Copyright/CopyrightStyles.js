import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8fbfe;
  width: 100%;
`;

export const Content = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  text-align: center;
  width: 90%;

  p {
    color: #000;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }

  span {
    font-weight: 600;
  }

  @media (min-width: 768px) {
    width: 85%;
  }

  @media (min-width: 992px) {
    width: 80%;
  }
`;
