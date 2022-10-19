/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Title, Section } from "../../common/components";
import ProgressBar from "./components/progressBar";

const Skills = (): JSX.Element => {
  const [inView, setInview] = useState(false);
  const skills = [
    { name: "TypeScript", value: 100 },
    { name: "NextJS", value: 100 },
    { name: "TailWind CSS", value: 100 },
    { name: "Express.js", value: 100 },
    { name: "Prisma/SQL/NoSQl", value: 100 },
    { name: "Firebase", value: 100 },
  ];

  return (
    <Section
      id="skills"
      setIsInView={isInView => {
        setInview(current => isInView || current);
      }}
    >
      <Title subTitle={"About me & Skills"}>LEARNING PATH</Title>
      <motion.div
        animate={inView ? "animate" : "default"}
        className="flex mt-[100px] justify-center items-center"
      >
        <div className="w-1/2">
          <p className="font-Inter mb-10 text-[#656D72] mr-10">
            Im a Full-Stack developer with a passion for creating amazing code
            and solving problems. Im always looking for new challenges and
            opportunities to learn and grow. As a Full-Stack Developer I have 2
            main Languages, TypeScript and Python. Python being most for Data
            Science and automations, and Typescript being the main language for
            Web Development. Currently Web Development is my main focus, using
            tools like NextJS, ExpressJS, MongoDB / PostgresSQL and Apollo I can
            do almost everything! I also have experience with Docker and Jest to
            make sure my code works as intended. You can check the About Me Page
            if you want to know more!
          </p>
        </div>
        <div className="w-1/2">
          {skills.map(skills => (
            <>
              <h1 className="font-Inter font-semibold  text-[#232E35]">
                {skills.name}
              </h1>
              <ProgressBar width="w-[60%]" />
            </>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
