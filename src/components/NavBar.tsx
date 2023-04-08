import { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarBackground("black");
      } else {
        setNavbarBackground("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`h-24 w-full fixed z-20 flex text-white items-center justify-center bg-gradient-to-b from-black to-${navbarBackground} opacity-80 transition-all ease-in-out`}
    >
      <ul className="flex h-full w-full items-center font-bold text-xl gap-8 max-w-[1600px]">
        <li>
          <NavLink to="/">Etusivu</NavLink>
        </li>
        <li>
          <NavLink to="/tapahtumat">Tapahtumat</NavLink>
        </li>
        <li>
          <NavLink to="/viikko-tapahtumat">Yhteystiedot</NavLink>
        </li>
        <li className="text-3xl">
          <a href="https://www.facebook.com/profile.php?id=100044458317177">
            <BsFacebook />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
