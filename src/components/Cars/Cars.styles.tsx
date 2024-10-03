import styled from "styled-components";


export const CarsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 10rem 25rem;
  background-color: var(--secondary-color);

  @media screen and (max-width: 1026px) {
    padding: 5rem 10rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 5rem;
  }

  @media screen and (max-width: 480px) {
    padding: 5rem 2rem;
  }

  img {
    width: 50rem;
    height: 30rem;
  }
`;
