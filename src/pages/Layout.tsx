import { Outlet } from "react-router-dom";
import Benefits from "../components/Benefits/Benefits.component";
import Cars from "../components/Cars/Cars.component";
import Contact from "../components/Contact/Contact.component";
import Faq from "../components/Faq/Faq.component";
import Footer from "../components/Footer/Footer.component";
import Navigation from "../components/Navigation/Navigation.component";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Cars />
      <Benefits />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
