/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef } from "react";
import { Section, Title } from "../../common/components";
import TechItem from "./components/TechItem";
import { motion } from "framer-motion";
import Paragraph from "./components/Paragraph";

const career: React.FC = (): JSX.Element => {
  const jobDescription = [
    "Desenvolvi dois sitemas PWA",
    "fiz gerenciamento de sprint e tasks ",
    "padronizei arquiteura de um projeto e implementei tema global refatorei e criei components globais",
    " popularizei firebase",
    "consumo de apis",
    "sugeri ideias de features e designer q foram implementados",
    "MUI",
    "lp e sistemas",
    "Collaborate with back-end developers and web designers to improve usability    ",
    "Improving overall website performance for mobile users     ",
    "manutençao em redux-sagas",
  ];
  const containerRef = useRef(null);

  return (
    <Section id="experices">
      <Title subTitle="Work Experices">career path</Title>
      <div className="sm:flex  mt-[100px] justify-center ">
        <div className="sm:w-1/2 ">
          <h1 className="font-Jakarta text-xl font-semibold ">
            Front-end Developer
          </h1>
          <h1 className="font-Inter text-[#656D72]">
            Venturus · Campinas, São Paulo <br /> Fev 2021 - Set 2022 · Home
            office
          </h1>
        </div>
        <div className="sm:w-1/2 space-y-3">
          <motion.div
            initial={false}
            transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}
            ref={containerRef}
          >
            <TechItem />
          </motion.div>
          <hr />
          <div>
            {jobDescription.map((description, i) => (
              <Paragraph key={i}>{description}</Paragraph>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default career;
