import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  max-width: 50rem;
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  padding: 5rem;
  -webkit-box-shadow: 0px 0px 1rem 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 1rem 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem 0px rgba(0, 0, 0, 0.75);

  span {
    font-size: 4rem;
    color: var(--icons-color);
  }

  h3 {
    font-size: 2.2rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding-top: 1rem;
  }

  p {
    font-size: 1.6rem;
    padding-top: 1rem;
  }

  a {
    text-decoration: none;
    padding-top: 1rem;
    font-size: 1.6rem;
  }
`;
