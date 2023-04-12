import { Outlet } from 'react-router-dom';
import haukka from './assets/haukka-transparent.png';
import NavBar from './components/NavBar';

const Layout = () => {
  return (
    <div className="h-full w-full bg-black font-squealer ">
      <NavBar />

      <Outlet />

      <footer className="flex flex-col items-center text-white">
        <img src={haukka} className="h-[300px]" />
        <p className=" font-sans">@Copyright 2023</p>
      </footer>
    </div>
  );
};

export default Layout;
