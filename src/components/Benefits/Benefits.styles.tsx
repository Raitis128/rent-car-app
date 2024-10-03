import styled from "styled-components";

export const BenefitsSection = styled.section`
  padding: 5rem 25rem;
  background-color: var(--third-color);

  h2 {
    font-size: 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding-bottom: 3rem;
    text-align: center;

    @media screen and (max-width: 768px) {
      padding-bottom: 0;
    }
  }

  section {
    margin: 2rem 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media screen and (max-width: 1026px) {
    padding: 5rem 10rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 5rem;
  }

  @media screen and (max-width: 480px) {
    padding: 5rem 2rem;
  }
`;
