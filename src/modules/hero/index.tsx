/* eslint-disable @typescript-eslint/no-unused-vars */

import { Title } from "./components/Title";
import Cards from "./components/Cards";
import Content from "./components/Content";
/* import { Container } from "./styles"; */

const Hero: React.FC = (): JSX.Element => {
  return (
    <div className=" flex overflow-hidden relative h-screen items-center justify-center  p-[65px]">
      <div className=" lg:flex lg:justify-between max-w-[80rem] lg:w-full lg:flex-row-reverse ">
        <Cards />
        <div>
          <Title subTitle="Dellamora">My name is</Title>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Hero;
