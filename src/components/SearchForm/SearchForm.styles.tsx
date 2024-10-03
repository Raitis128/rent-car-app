import styled from "styled-components";

export const SearchFormContainer = styled.form`
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem;
  max-width: 50rem;
  width: 100%;
  min-height: 20rem;
  height: 100%;
  border: 0.1rem solid var(--border-color);
  max-width: 60rem;
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 2rem;

    section {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }

    input {
      width: 100%;
      height: 4rem;
      text-align: center;
      border: 0.1rem solid var(--border-color);
      font-size: 1.5rem;
    }

    label {
      font-size: 1.5rem;
      font-weight: bold;
      padding-bottom: 1rem;
    }
  }

  button {
    width: 100%;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    color: var(--error-color);
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 1rem;
  }
`;
