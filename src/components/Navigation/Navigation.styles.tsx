import styled from "styled-components";

export const Nav = styled.nav`
  background-color: var(--primary-color);
  color: var(--text-color);
  width: 100%;
  position: fixed;
  top: 0;

  header {
    height: 7rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: 2.7rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    padding-left: 25rem;

    @media screen and (max-width: 1026px) {
      font-size: 2.3rem;
      padding-left: 10rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
      padding-left: 3rem;
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