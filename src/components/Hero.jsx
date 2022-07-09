import React from "react";
import Section from "./common/Section";
const Hero = () => {
  return (
    <Section bg={"bg-hero-image"}>
      <div className="h-screen  flex justify-center flex-col gap-6 lg:w-2/4">
        <h1 className="text-4xl lg:text-6xl text-white">
          <span className="text-base block">Hello there!</span>I am Manuel Nunez
          Web Developer
        </h1>
        <p className="text-white">
          I am Web Developer with 5 years of experience working on responsive
          and dynamic web applications. I take pride in my work by keeping all
          my websites responsive, dynamic, cross-browser compatible and ADA
          compliance.
        </p>

        <div className="flex gap-2">
          <a
            className="bg-app-base-1 px-6 py-4 inline-block rounded text-white "
            href="/"
          >
            HIRE ME
          </a>
          <a
            className="bg-white px-6 py-4 inline-block rounded text-app-base-1 "
            href="/"
          >
            VIEW PORTFOLIO
          </a>
        </div>
        <div className="flex gap-4">
          <a className="font-bold text-white" href="/">
            + INSTAGRAM
          </a>
          <a className="font-bold text-white" href="/">
            + LINKEDIN
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
