import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 128rem;
  width: 90%;

  & > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 85%;
  }

  @media (min-width: 992px) {
    width: 80%;

    & > div {
      width: 48%;
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0 -0.6rem 1.6rem -0.6rem rgb(0 0 0 / 2%),
    0 0.8rem 1.6rem -0.8rem rgb(0 0 0 / 3%),
    0 1.3rem 2.7rem -0.5rem rgb(50 50 93 / 25%);
  box-sizing: border-box;
  margin: 0.7rem 0 1.4rem 0;
  padding: 2rem;

  @media (min-width: 576px) {
    padding: 4rem;
  }

  @media (min-width: 992px) {
    max-height: ${(props) => (props.hard ? '56rem' : 'auto')};
  }

  @media (min-width: 1200px) {
    max-height: ${(props) => (props.hard ? '54rem' : 'auto')};
  }

  @media (min-width: 1400px) {
    max-height: ${(props) => (props.hard ? '52rem' : 'auto')};
  }
`;

export const Textarea = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 1.6rem;
  }

  textarea {
    border: 0.2rem solid #e3e8ec;
    color: #919191;
    font-size: 1.5rem;
    min-height: 15rem;
    outline: none;
    overflow-y: hidden;
    padding: 1.6rem 1.2rem;
    transition: all 0.3 ease;

    &:focus {
      border-color: #5c6ac4;
    }
  }
`;

export const Predict = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;

    & > div {
      width: 50%;
    }
  }

  @media (min-width: 992px) {
    flex-direction: column;

    & > div {
      width: 100%;
    }
  }
`;

export const ModelsContainer = styled.div`
  margin-bottom: 3rem;
`;

export const Models = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  max-width: 30rem;
  padding-left: 0;
`;

export const Model = styled.li`
  min-width: 12rem;
`;

export const Title = styled.label`
  color: #5c6ac4;
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
  text-transform: capitalize;
`;

export const LabelsContainer = styled.div`
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    label {
      margin-bottom: 1.9rem;
    }
  }

  @media (min-width: 992px) {
    label {
      margin-bottom: 1.7rem;
    }
  }
`;

export const Labels = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 0;
`;

export const Label = styled.li`
  font-size: 1.4rem;
  min-width: 12rem;
  padding: 0.5rem 0;
  text-transform: capitalize;

  @media (min-width: 576px) {
    min-width: 12rem;
  }
`;

export const ActionsContainer = styled.div`
  margin-bottom: 3rem;

  label {
    margin-bottom: 1.6rem;
  }
`;

export const Actions = styled.div`
  button:first-child {
    margin-right: 2rem;
  }
`;

export const Result = styled.div`
  position: relative;

  p {
    font-size: 1.4rem;
    margin: 0;
    min-width: 13rem;
    padding: 0.5rem 0;

    span {
      color: #5c6ac4;
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  img {
    height: 2.68rem;
  }
`;
