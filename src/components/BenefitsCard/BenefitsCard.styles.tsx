import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 30rem;
  width: 100%;
  min-height: 20rem;
  border: 0.1rem solid var(--border-color);
  border-radius: 3rem;
  padding: 2rem;
  background-color: var(--primary-color);
  color: var(--third-color);
  -webkit-box-shadow: 0rem 0rem 1rem 0.2rem rgba(2, 48, 71, 0.75);
  -moz-box-shadow: 0rem 0rem 1rem 0.2rem rgba(2, 48, 71, 0.75);
  box-shadow: 0rem 0rem 1rem 0.2rem rgba(2, 48, 71, 0.75);

  @media screen and (max-width: 425px) {
    min-height: 15rem;
  }

  h3 {
    font-size: 2.2rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    letter-spacing: 0.2rem;

    @media screen and (max-width: 1026px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
      padding: 1rem 0;
    }
  }

  p {
    font-size: 1.5rem;

    @media screen and (max-width: 1026px) {
      font-size: 1.3rem;
    }
  }

  span {
    font-size: 4rem;
    color: var(--icons-color);
    display: flex;

    @media screen and (max-width: 1026px) {
      font-size: 3rem;
    }
  }
`;
