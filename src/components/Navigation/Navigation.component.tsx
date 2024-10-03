import { Nav } from "./Navigation.styles";
import { useState } from "react";

import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BiSolidCar } from "react-icons/bi";

import NavigationLinks from "../NavigationLinks/NavigationLinks.component";

const Navigation = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const handleClick = () => {
    setBurgerOpen(!isBurgerOpen);
  };

  return (
    <Nav>
      <header>
        <span>
          <BiSolidCar className="car" />
          simple car
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
