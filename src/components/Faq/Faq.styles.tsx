import styled from "styled-components";

export const FAQuestion = styled.section`
  padding: 5rem 25rem;
  background-color: var(--secondary-color);
  color: var(--text-secondary-color);

  @media screen and (max-width: 1026px) {
    padding: 5rem 10rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 5rem;
  }

  h2 {
    font-size: 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding-bottom: 3rem;

    @media screen and (max-width: 676px) {
      font-size: 2.2rem;
    }
  }
`;
