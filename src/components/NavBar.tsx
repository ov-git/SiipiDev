import { BsFacebook } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div
      className={`h-24 w-full fixed z-20 flex text-white items-center justify-center bg-gradient-to-b from-black to-transparent transition-all ease-in-out`}
    >
      <ul className="flex h-full w-full items-center font-bold text-2xl gap-6 sm:gap-8 max-w-[1600px] px-8">
        <li className="hover:text-slate-300">
          <NavLink to="/">Etusivu</NavLink>
        </li>
        <li className="hover:text-slate-300">
          <NavLink to="/tapahtumat">Tapahtumat</NavLink>
        </li>
        {/*TODO <li>
          <NavLink to="/viikko-tapahtumat">Yhteystiedot</NavLink>
        </li> */}
        <li className="text-3xl hover:text-slate-300">
          <a href="https://www.facebook.com/profile.php?id=100044458317177">
            <BsFacebook />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
