import styled from "styled-components";

export const CarsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  padding: 10rem 25rem;
  background-color: var(--secondary-color);

  @media screen and (max-width: 1026px) {
    padding: 5rem 10rem;
    flex-direction: column;
    gap: 4rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 5rem;
  }

  @media screen and (max-width: 480px) {
    padding: 5rem 2rem;
  }

  img {
    max-width: 50rem;
    max-height: 30rem;
    width: 100%;
    height: 100%;
    min-width: 30rem;
    min-height: 20rem;
  }
`;
