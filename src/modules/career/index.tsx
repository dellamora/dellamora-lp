/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef, useState } from "react";
import { Section, Title } from "../../common/components";
import TechItem from "./components/TechItem";
import { motion } from "framer-motion";
import Paragraph from "./components/Paragraph";
import LeftContent from "./components/LeftContent";

const career: React.FC = (): JSX.Element => {
  const [inView, setInview] = useState(false);
  const jobDescription = [
    "Worked on the development of two PWA applications.",
    "I was responsible for sprint and tasks management.",
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
    <Section
      id="experices"
      setIsInView={isInView => {
        setInview(current => isInView || current);
      }}
    >
      <Title subTitle="Work Experices">career path</Title>
      <motion.div className="flex flex-wrap  mt-[100px] justify-center space-y-12 ">
        <LeftContent />
        <motion.div className="sm:w-1/2 space-y-3">
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
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default career;
