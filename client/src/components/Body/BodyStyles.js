import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
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
    font-size: 1.6rem;
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

export const ModelsContainer = styled.div`
  & > label {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
  }
`;

export const Models = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 30rem;
  padding-left: 0;
`;

export const Model = styled.li`
  min-width: 15rem;
`;
