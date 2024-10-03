import styled from "styled-components";

export const CarsInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 30rem;
  width: 100%;

  span {
    font-weight: bold;
    letter-spacing: 0.2rem;
    font-family: "Roboto", sans-serif;
  }

  p {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    list-style: none;
    font-size: 2rem;
  }
  .icon {
    width: 3rem;
    height: 3rem;
    color: var(--primary-color);
  }
`;
