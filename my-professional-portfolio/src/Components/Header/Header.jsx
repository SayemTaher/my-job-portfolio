import { NavLink, Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./header.css";
import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";
import { FaUserGraduate } from "react-icons/fa";
const Header = () => {
  const navlinkClassName =
    "p-2 hover:bg-purple-50 hover:border hover:border-purple-500 hover:p-2 hover:shadow-md hover:shadow-purple-100 hover:rounded-xl";
  const links = (
    <div className="flex flex-col gap-4 p-3 z-50  font-bold   " id="navigation">
      <NavLink
        to="/"
        className={navlinkClassName}
      >
        <div className=" flex gap-2 text-lg items-center text-purple-500">
          <span>
            <AiFillHome></AiFillHome>
          </span>
          <li className="text-pink-500">
            Home
          </li>
        </div>
      </NavLink>
      <NavLink
        to="/projects"
        className={navlinkClassName}
      >
        <div className=" flex text-lg  gap-2 items-center text-purple-500">
          <span>
            <IoStatsChart></IoStatsChart>
          </span>
          <li className="text-pink-500">
            Industry Projects
          </li>
        </div>
      </NavLink>
      <NavLink to="/mobile" className={navlinkClassName}>
        <div className=" flex text-lg  gap-2 items-center text-purple-500">
          <span>
            <FaCode></FaCode>
          </span>
          <li className="text-pink-500">
            Web Development
          </li>
        </div>
      </NavLink>
      <NavLink to="/education" className={navlinkClassName}>
        <div className="text-lg  flex gap-2 items-center text-purple-500">
          <span>
            <PiStudentBold></PiStudentBold>
          </span>
          <li className="text-pink-500">
            Education
          </li>
        </div>
      </NavLink>
      <NavLink to="/work" className={navlinkClassName}>
        <div className=" flex text-lg  gap-2 items-center text-purple-500">
          <span>
            <HiMiniWrenchScrewdriver></HiMiniWrenchScrewdriver>
          </span>
          <li className="text-pink-500">
            Experience
          </li>
        </div>
      </NavLink>
      <NavLink to="/certificates" className={navlinkClassName}>
        <div className=" flex text-lg  gap-2 items-center text-purple-500">
          <span>
            <SlBadge></SlBadge>
          </span>
          <li className="text-pink-500">
            Certificates
          </li>
        </div>
      </NavLink>
      <NavLink to="/about" className={navlinkClassName}>
        <div className=" flex gap-2 text-lg  items-center text-purple-500">
          <span>
            <FaUserGraduate></FaUserGraduate>
          </span>
          <li className="text-pink-500">
            OnlyMe
          </li>
        </div>
      </NavLink>
    </div>
  );

  return (
    <div className=" bg-white  w-full mx-auto p-2  fixed  z-50 font-mulish">
      <div className=" navbar container mx-auto flex items-center justify-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-purple-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center flex items-center justify-center">
          <Link to="/">
            <a className="font-semibold lg:text-xl text-sm">Sayem Ibne Taher</a>
          </Link>
        </div>

        <div className="navbar-end">
          <Link
            to="https://www.linkedin.com/in/sayem-ibne-taher/"
            className="lg:flex hidden"
          >
            <button className="btn btn-ghost btn-circle">
              <BsLinkedin className="text-2xl"></BsLinkedin>
            </button>
          </Link>
          <Link to="https://github.com/SayemTaher" className="lg:flex hidden">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FaGithub className="text-2xl"></FaGithub>
                <span className="badge badge-xs bg-green-400 indicator-item"></span>
              </div>
            </button>
          </Link>

          <Link
            to="https://drive.google.com/file/d/1TuLLhgjCjjtnomyeX0Jy0vzi8WJAkSHJ/view?usp=drive_link"
            className="bg-darknavy hover:bg-primaryGreen flex gap-1 lg:gap-2  lg:mr-0 justify-center items-center text-white  p-2 rounded-full w-[90px] text-xs  lg:w-[120px] text-center"
          >
            <MdOutlineFileDownload className="text-lg"></MdOutlineFileDownload>
            <button>Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
