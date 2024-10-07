import styled from "styled-components";
import car from "../../assets/images/car.jpg";

export const SearchContainer = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 5rem 25rem;
  gap: 10rem;

  @media screen and (max-width: 1026px) {
    padding: 5rem 10rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 5rem;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    gap: 5rem;
  }

  @media screen and (max-width: 480px) {
    padding: 5rem 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("${car}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(0.1rem);
    z-index: -1;

  }

  .text-container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    z-index: 1;
    max-width: 70rem;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--secondary-color);
      opacity: 0.8;
      z-index: -1;
    }

    h1 {
      font-size: 4.5rem;
      font-family: "Roboto", serif;
      font-weight: bold;
      letter-spacing: 0.2rem;
      color: var(--primary-color);

      @media screen and (max-width: 1200px) {
        font-size: 3rem;
      }
    }

    p {
      font-size: 1.8rem;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      letter-spacing: 0.2rem;
      padding-top: 3rem;

      @media screen and (max-width: 1200px) {
        font-size: 1.5rem;
      }
    }
  }
`;
