import { useContext } from "react";
import Articles from "../common/components/articles";
import Career from "../common/components/career";
import Contact from "../common/components/contact";
import Footer from "../common/components/footer";
import Header from "../common/components/header";
import Services from "../common/components/services";
import Works from "../common/components/works";
import AppContext from "../common/context/appContext";

const Home = (): JSX.Element => {
  const ctx = useContext(AppContext);
  return (
    <>
      <Header />
      <Services />
      <Works />
      <Career />
      <Articles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
