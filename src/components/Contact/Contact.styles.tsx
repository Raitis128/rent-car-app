import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 5rem 25rem;
  background-color: var(--third-color);

  h2 {
    font-size: 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding-bottom: 3rem;
    text-align: center;
  }

  p {
    font-size: 1.7rem;
    text-align: center;
  }

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 3rem;
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
