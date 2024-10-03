import Benefits from "./components/Benefits/Benefits.component";
import Cars from "./components/Cars/Cars.component";
import Contact from "./components/Contact/Contact.component";
import Faq from "./components/Faq/Faq.component";
import Footer from "./components/Footer/Footer.component";
import Navigation from "./components/Navigation/Navigation.component";
import Search from "./components/Search/Search.component";

function App() {
  return (
    <>
      <Navigation />
      <Search />
      <Cars />
      <Benefits />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
