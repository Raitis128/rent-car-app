import styled from "styled-components";

export const Nav = styled.nav`
  background-color: var(--primary-color);
  color: var(--third-color);
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;

  header {
    height: 7rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: var(--third-color);
  }

  span {
    font-size: 2.7rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-family: "Anton", serif;
    padding-left: 25rem;

    .car {
      margin-right: 1rem;
      font-size: 3rem;
    }

    @media screen and (max-width: 1026px) {
      font-size: 2.3rem;
      padding-left: 10rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
      padding-left: 5rem;
    }
  }

  .burger {
    display: none;

    @media screen and (max-width: 480px) {
      display: block;
      margin-right: 3rem;
      width: 3rem;
      height: 3rem;
    }
  }
`;
