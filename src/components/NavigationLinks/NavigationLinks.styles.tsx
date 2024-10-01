import styled from "styled-components";

export const Links = styled.ul`
  padding-left: 0;
  display: flex;
  list-style: none;
  padding-right: 25rem;

  @media screen and (max-width: 1026px) {
    padding-right: 10rem;
  }

  @media screen and (max-width: 768px) {
    padding-right: 3rem;
  }

  &.default-links {
    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  &.hidden-links {
    display: none;
  }

  &.hidden-links-show {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--text-color);
    padding: 0;

    li {
      padding: 1rem 0;
      width: 100%;
      text-align: center;
      color: var(--primary-color);
      border-bottom: 1px solid var(--primary-color);

      &:hover {
        background-color: var(--primary-color);
        color: var(--text-color);
        opacity: 0.8;
      }
    }
  }

  li {
    margin: 0 1rem;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;

    @media screen and (max-width: 1026px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      opacity: 0.8;
    }
  }
`;
