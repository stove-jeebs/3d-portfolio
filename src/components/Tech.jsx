import React from "react";
import { BallCanvas } from ".";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
