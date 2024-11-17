import React from "react";
import Section from "./Section";
import Heading from './Heading';
import { smallSphere, stars } from './design/Pricing';

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img src={smallSphere} alt="Shpere" className="relative z-1" width={255} height={255} />
          <div className="absolute top=1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src={stars} alt="Stars" className="w-full" width={950} height={400} />
          </div>
        </div>
        <Heading tag="Get started with Brainwave" title="Pay once, use forever" />
      </div>
    </Section>
  );
};

export default Pricing;
