import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 128rem;
  padding: 0 2.4rem;
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
      width: 43%;
    }
  }

  @media (min-width: 1200px) {
    & > div {
      width: 45%;
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 0.2rem 0.5rem 0 rgb(0 0 0 / 16%),
    0 0.2rem 1rem 0 rgb(0 0 0 / 12%);
  margin: 0.7rem 0 1.4rem 0;
  padding: 2rem;
`;

export const Textarea = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 1.6rem;
  }

  textarea {
    border: 0.2rem solid #e3e8ec;
    color: #797f86;
    font-size: 1.5rem;
    min-height: 15rem;
    outline: none;
    overflow-y: hidden;
    padding: 1.6rem 1.2rem;
    transition: all 0.3 ease;

    &:focus {
      border-color: #4db6ac;
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
  min-width: 13rem;
`;

export const Title = styled.label`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
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
  color: #797f86;
  font-size: 1.4rem;
  min-width: 12rem;
  padding: 0.5rem 0;
  text-transform: capitalize;

  @media (min-width: 576px) {
    min-width: 13rem;
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

  button {
    padding: 0 2rem;
  }

  @media (min-width: 576px) {
    button {
      padding: 0 2.8rem;
    }
  }
`;

export const Result = styled.div`
  position: relative;

  p {
    color: #797f86;
    font-size: 1.4rem;
    margin: 0;
    min-width: 13rem;
    padding: 0.5rem 0;

    span {
      color: #26a69a;
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  img {
    height: 2.68rem;
  }
`;
