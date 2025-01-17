import React, { memo } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "./design/Benefits";
import { benefits } from "../constants";

const Benefits = memo(() => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map(
            ({ id, backgroundUrl, title, text, iconUrl, light, imageUrl }) => (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{ backgroundImage: `url(${backgroundUrl})` }}
                key={id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{title}</h5>
                  <p className="body-2 mb-6 text-n-3">{text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={iconUrl}
                      alt={title}
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>
                {light && <GradientLight />}
                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={title}
                        width={380}
                        height={362}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
                <ClipPath />
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
});

export default Benefits;
