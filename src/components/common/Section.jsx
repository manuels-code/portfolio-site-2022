import React from "react";
import Container from "./Container";

const Section = ({ children, bg }) => {
  const bgList = [`bg-app-bg-1`, `bg-hero-image`];

  const checkBgs = bgList.includes(bg) ? bg : bgList[0];

  return (
    <section className={`${checkBgs} bg-cover`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
