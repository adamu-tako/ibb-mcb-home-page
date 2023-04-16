import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState();

  const { pathname } = useLocation();
  return (
    <div className="bg-slate-200 py-2">
      <div className="h-fit text-center justify-between align-middle flex pt-5 md:pt-2 pb-2 px-2 md:px-10">
        <div className="flex">
          <a href="https://www.ibbu.edu.ng" className="flex">
            <div className="w-[2rem] md:w-[5rem]">
              <img src={logo} alt="" />
            </div>
            <h2 className="font-mono font-bold text-justify text-sm md:text-lg sm:text-2xl pl-4">
              Ibrahim Badamasi Babangida <br />
              University, Lapai
            </h2>
          </a>
        </div>
        {/* <div className="pt-5">
          <a className="mt-10" href="https://www.ibbu.edu.ng">
            IBBUL HOME
          </a>
        </div> */}
      </div>
      <hr className="w-[90%] ml-3 sm:ml-20 px-10 py-2 border-green-500" />
      <div className="shadow-sm">
        <div className="px-10 flex justify-between">
          <Link to="/">
            <span className="font-mono font-semibold text-base md:text-lg sm:text-2xl">
              DEPARTMENT OF <br />
            </span>
            <span className="font-mono font-bold text-3xl md:text-5xl sm:text-7xl">
              MICROBIOLOGY
            </span>
          </Link>
          <div
            className="block md:hidden"
            onClick={() => setToggle((val) => !val)}>
            {toggle ? <GiCancel /> : <GiHamburgerMenu />}
          </div>
          <div className="z-50 hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`${
                pathname === "/"
                  ? "border-green-500 text-green-500 border-b-4"
                  : ""
              } py-4 px-2  font-semibold`}>
              Homepage
            </Link>
            <Link
              to="/undergraduates"
              className={`${
                pathname === "/undergraduates"
                  ? "border-green-500 text-green-500 border-b-4"
                  : ""
              } py-4 px-2  font-semibold`}>
              Undergraduates
            </Link>
            <Link
              to="/postgraduates"
              className={`${
                pathname === "/postgraduates"
                  ? "border-green-500 text-green-500  border-b-4"
                  : ""
              } py-4 px-2  font-semibold`}>
              Postgraduates
            </Link>
            <Link
              to="/faculty"
              className={`${
                pathname === "/faculty"
                  ? "border-green-500 text-green-500 border-b-4 s"
                  : ""
              } py-4 px-2  font-semibold`}>
              Faculty
            </Link>
          </div>
        </div>
      </div>
      {toggle && (
        <div
          className="z-[99] w-full h-[100vh] bg-black/5 fixed"
          onClick={() => setToggle(false)}>
          <div className="flex flex-col w-fit border border-red-500 relative float-right bg-white">
            <Link
              to="/"
              className={`${
                pathname === "/"
                  ? "border-green-500 text-green-500 border-b-4"
                  : ""
              } py-4 px-2  font-semibold`}>
              Homepage
            </Link>
            <Link
              to="/undergraduates"
              className={`${
                pathname === "/undergraduates"
                  ? "border-green-500 text-green-500 border-b-4"
                  : ""
              } py-4 px-2  font-semibold`}>
              Undergraduates
            </Link>
            <Link
              to="/postgraduates"
              className={`${
                pathname === "/postgraduates"
                  ? "border-green-500 text-green-500 border-b-4"
                  : ""
              } py-4 px-2  font-semibold`}>
              Postgraduates
            </Link>
            <Link
              to="/faculty"
              className={`${
                pathname === "/faculty"
                  ? "border-green-500 text-green-500 border-b-4"
                  : ""
              } py-4 px-2  font-semibold`}>
              Faculty
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
