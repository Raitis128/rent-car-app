import styled from "styled-components";

export const CarsInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    font-weight: bold;
    letter-spacing: 0.2rem;
    font-family: "Roboto", sans-serif;
  }

  p {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    list-style: none;
    font-size: 1.6rem;
  }
`;
