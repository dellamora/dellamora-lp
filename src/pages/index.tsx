import { useContext } from "react";
import Card from "../common/components/card";
import AppContext from "../common/context/appContext";

const Home = (): JSX.Element => {
  const ctx = useContext(AppContext);
  return (
    <>
      <Card />
    </>
  );
};

export default Home;
