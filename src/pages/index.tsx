import { useContext } from "react";
import Articles from "../modules/articles";
import Career from "../modules/career";
import Contact from "../modules/contact";
import Footer from "../modules/footer";
import Hero from "../modules/hero";
import Skills from "../modules/skills";
import Works from "../modules/works";
import AppContext from "../common/context/appContext";

const Home = (): JSX.Element => {
  const ctx = useContext(AppContext);

  return (
    <>
      <Hero />
      <Works />
      <Career />
      <Articles />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
