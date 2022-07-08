import React from "react";
import Container from "../common/Container";
import Navigation from "../Navigation";

const menuLinks = [
  {
    page: "home",
    link: "/",
  },
  {
    page: "about",
    link: "/about",
  },
  {
    page: "services",
    link: "/services",
  },
  {
    page: "portfolio",
    link: "/portfolio",
  },
  {
    page: "blog",
    link: "/blog",
  },
  {
    page: "contanct",
    link: "/contanct",
  },
];

const Header = () => {
  return (
    <div className="fixed left-0 top-0 w-full bg-app-base-1 h-20">
      <Container>
        <div className="flex items-center h-full justify-between">
          <a className="text-white font-bold tracking-[1px]" href="/">
            Manuel Nunez
          </a>

          <Navigation menuLinks={menuLinks} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
