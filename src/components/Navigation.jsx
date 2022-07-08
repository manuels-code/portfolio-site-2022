import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = ({ menuLinks }) => {
  // toggle menu
  const [menuState, setMenuState] = React.useState(false);
  const style = { display: menuState ? null : "none" };
  const toggleMenu = () => setMenuState(!menuState);

  // check on window size
  React.useEffect(() => {
    const handleWindowSize = () => {
      window.innerWidth > 1280 ? setMenuState(true) : setMenuState(false);
    };
    handleWindowSize()
    window.addEventListener("resize", handleWindowSize);
  }, []);


  // pending check the media queries from tailwind
  return (
    <nav className="relative bg-app-base-1">

      <button
        onClick={toggleMenu}
        className="xl:hidden text-white flex items-center gap-1 tracking-[2px]">
        <AiOutlineMenu /> MENU
      </button>

      <ul style={style} className="fixed left-0 top-20 w-full bg-app-base-1 lg:relative lg:flex lg:top-0">
        {menuLinks.map(({ page, link }) => (
          <li key={page} className="list-none capitalize text-white">
            <a className="inline-block px-6 py-3 hover:bg-app-base-2 w-full lg:px-4 lg:hover:bg-transparent" href={link}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
