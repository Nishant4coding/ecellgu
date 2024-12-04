import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import hamburger from "../Assets/hamburger.svg";
import SideNavbar from "./SideNavbar";
import Button from "./Button";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  const toggleSideNav = () => {
    setSideNav(!sideNav);
  };
  return (
    <div className="w-[90%] mx-auto flex justify-between items-center pt-3 z-10">
      <div>
        <img src={logo} alt="E-cell logo" />
      </div>
      <ul className="hidden sm:flex justify-between items-center sm:w-9/12 md:w-7/12 text-xl text-extrabold">
        <li className="  font-[500] hover:text-[#F9C922] transition-colors delay-200 ease-in">
          <a href="#Home">Home</a>
        </li>
        <li className="  font-[500] hover:text-[#F9C922] transition-colors delay-200 ease-in">
          <a href="#About">About</a>
        </li>
        <li className="  font-[500] hover:text-[#F9C922] transition-colors delay-200 ease-in">
          <a href="#Events">Our Events</a>
        </li>
        <li className="  font-[500] hover:text-[#F9C922] transition-colors delay-200 ease-in">
          <a href="#Team">Our Team</a>
        </li>
        <li className="  font-[500] hover:text-[#F9C922] transition-colors delay-200 ease-in">
          <a href="#Contact">Contact us</a>
        </li>
      </ul>
      <div className="flex gap-14">
        <Button
          title={"JOIN STARTUP COMMUNITY"}
          link={"http://bit.ly/4fHyjXm"}
          hideOnSmall={true}
        />
        <img
          src={hamburger}
          alt="hamburger"
          className="cursor-pointer w-[30px] lg:hidden"
          onClick={toggleSideNav}
        />
      </div>
      {sideNav && <SideNavbar sideNav={sideNav} setSideNav={setSideNav} />}
    </div>
  );
};

export default Navbar;
