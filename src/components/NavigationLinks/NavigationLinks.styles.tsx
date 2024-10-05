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
    padding-right: 5rem;
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
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: var(--third-color);
    align-items: center;
    overflow: hidden;
    padding: 0;

    li {
      padding: 3rem 0;
      font-size: 1.6rem;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
      width: 100%;
      padding-left: 5rem;
      color: var(--primary-color);
      border-bottom: 1px solid var(--primary-color);
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
