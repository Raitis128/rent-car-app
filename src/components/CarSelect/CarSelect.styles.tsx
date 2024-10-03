import styled from "styled-components";

export const CarsSelectContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  h2 {
    font-size: 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }

  select {
    padding: 1rem;
    border: 0.1rem solid var(--border-color);
    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    letter-spacing: 0.2rem;
    outline: none;
  }
`;
