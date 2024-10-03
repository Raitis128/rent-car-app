import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  max-width: 40rem;
  width: 100%;
  min-height: 30rem;
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  padding: 5rem;
  background-color: var(--primary-color);
  color: var(--third-color);
  -webkit-box-shadow: 0rem 0rem 1rem 0.2rem rgba(2, 48, 71, 0.75);
  -moz-box-shadow: 0rem 0rem 1rem 0.2rem rgba(2, 48, 71, 0.75);
  box-shadow: 0rem 0rem 1rem 0.2rem rgba(2, 48, 71, 0.75);

  span {
    font-size: 4rem;
    color: var(--icons-color);
  }

  h3 {
    font-size: 2.2rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    letter-spacing: 0.2rem;

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.6rem;

    @media screen and (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: var(--icons-color);

    @media screen and (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 480px) {
    min-height: 20rem;
    padding: 3rem;
  }
`;
