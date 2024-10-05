import { Nav } from "./Navigation.styles";
import { useState } from "react";

import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";

import NavigationLinks from "../NavigationLinks/NavigationLinks.component";

const Navigation = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const handleClick = () => {
    const newBurgerState = !isBurgerOpen;
    setBurgerOpen(!isBurgerOpen);

    document.body.style.overflow = newBurgerState ? "hidden" : "visible";
  };

  return (
    <Nav>
      <header>
        <span>
          <a href="#search" className="logo">
            <IoCarSportSharp className="car" />
            simple car
          </a>
        </span>
        <NavigationLinks className={"default-links"} />
        {isBurgerOpen ? (
          <IoClose className="burger" onClick={handleClick} />
        ) : (
          <HiOutlineMenu className="burger" onClick={handleClick} />
        )}
      </header>
      <section>
        {isBurgerOpen ? (
          <NavigationLinks
            className={"hidden-links-show"}
            onClick={handleClick}
          />
        ) : (
          <NavigationLinks className={"hidden-links"} />
        )}
      </section>
    </Nav>
  );
};

export default Navigation;
