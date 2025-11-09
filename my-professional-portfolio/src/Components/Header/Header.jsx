import { NavLink, Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";
import { FaUserGraduate } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const navlinkClassName =
    "flex gap-2 text-lg items-center text-blue-300 p-2 hover:bg-blue-500/20 hover:border hover:border-blue-400/30 hover:rounded-xl transition-all duration-300";

  return (
    <div className="bg-gradient-to-r from-slate-900/95 via-navy-900/95 to-indigo-900/95 backdrop-blur-3xl shadow-sm w-full mx-auto p-2 fixed top-0 left-0 right-0 z-50 font-mulish transition-all duration-300 border-b border-blue-500/20">
      <div className="navbar container mx-auto flex items-center justify-center">
        <div className="navbar-start">
          <div ref={dropdownRef} className={`dropdown ${open ? "dropdown-open" : ""}`}>
            <button
              type="button"
              aria-label="Menu"
              className="btn btn-ghost btn-circle hover:bg-blue-500/20 text-white"
              onClick={() => setOpen((prev) => !prev)}
              onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>

            <ul
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-darknavy rounded-box w-60 border border-blue-500/20"
              onMouseDown={() => setOpen(false)}
            >
              <li>
                <NavLink to="/" onMouseDown={() => setOpen(false)} className={navlinkClassName}>
                  <AiFillHome />
                  <span className="text-blue-200">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/mobileProjects" onMouseDown={() => setOpen(false)} className={navlinkClassName}>
                  <IoStatsChart />
                  <span className="text-blue-200">UX/UI</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" onMouseDown={() => setOpen(false)} className={navlinkClassName}>
                  <FaCode />
                  <span className="text-blue-200">Web Dev</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/education" onMouseDown={() => setOpen(false)} className={navlinkClassName}>
                  <PiStudentBold />
                  <span className="text-blue-200">Education</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" onMouseDown={() => setOpen(false)} className={navlinkClassName}>
                  <HiMiniWrenchScrewdriver />
                  <span className="text-blue-200">Experience</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/certificates" onMouseDown={() => setOpen(false)} className={navlinkClassName}>
                  <SlBadge />
                  <span className="text-blue-200">Certificates</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onMouseDown={() => setOpen(false)} className={navlinkClassName}>
                  <FaUserGraduate />
                  <span className="text-blue-200">OnlyMe</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center flex items-center justify-center">
          <Link to="/">
            <span className="font-semibold lg:text-xl text-sm text-white">Sayem Ibne Taher</span>
          </Link>
        </div>

        <div className="navbar-end">
          <Link to="https://www.linkedin.com/in/sayem-ibne-taher/" className="lg:flex hidden">
            <button className="btn btn-ghost btn-circle text-white hover:bg-blue-500/20">
              <BsLinkedin className="text-2xl" />
            </button>
          </Link>

          <Link to="https://github.com/SayemTaher" className="lg:flex hidden">
            <button className="btn btn-ghost btn-circle text-white hover:bg-blue-500/20">
              <div className="indicator">
                <FaGithub className="text-2xl" />
                <span className="badge badge-xs bg-blue-500 indicator-item"></span>
              </div>
            </button>
          </Link>

          <Link
            to="https://drive.google.com/file/d/1TuLLhgjCjjtnomyeX0Jy0vzi8WJAkSHJ/view?usp=drive_link"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 flex gap-1 lg:gap-2 lg:mr-0 justify-center items-center text-white p-2 rounded-full w-[90px] text-xs lg:w-[120px] text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-blue-400/30"
          >
            <MdOutlineFileDownload className="text-lg" />
            <button>Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
