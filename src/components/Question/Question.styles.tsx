import styled from "styled-components";

export const QuestionSection = styled.section`
  border-bottom: 1px solid var(--border-color);
  padding: 1.5rem 0;
  cursor: pointer;

  &:first-of-type {
    border-top: 1px solid var(text);
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .up,
    .down {
      min-width: 3rem;
      min-height: 3rem;
      padding-left: 1rem;
    }
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 1.8rem;

    @media screen and (max-width: 676px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-family: "Montserrat", sans-serif;
    margin-top: 1rem;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;

    @media screen and (max-width: 676px) {
      font-size: 1.3rem;
    }
  }
`;
