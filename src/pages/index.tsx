import { useContext } from "react";
import Articles from "../modules/articles";
import Career from "../modules/career";
import Contact from "../modules/contact";
import Footer from "../modules/footer";
import Hero from "../modules/hero";
import Skills from "../modules/skills";
import Works from "../modules/works";

const Home = (): JSX.Element => {
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
