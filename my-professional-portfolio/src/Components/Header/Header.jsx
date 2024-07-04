import { NavLink, Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./header.css"
import { useEffect, useState } from "react";


const Header = () => {
    const [theme, setTheme] = useState('nord');  // Default theme

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);  // Set the theme attribute on the HTML element
    }, [theme]);

    const toggleTheme = () => {
        if (theme === 'nord') {
            setTheme('dark');
        } else if (theme === 'dark') {
            setTheme('nord');
        } else {
            setTheme('dark');
        }
    };
    



    const links = (
      <div
        className="flex flex-col gap-3 p-3 w-[600px] font-bold   "
        id="navigation"
      >
        <NavLink to="/" className=" p-1 ">
          <li>Home</li>
        </NavLink>
        <NavLink to="/projects" className="p-1 ">
          <li>Web Development</li>
        </NavLink>
        <NavLink to="/mobile" className="p-1 ">
          <li>App Development</li>
        </NavLink>
        <NavLink to="/education" className=" p-1 ">
          <li>Education</li>
        </NavLink>
        <NavLink to="/work" className="p-1 ">
          <li>Work</li>
        </NavLink>
        <NavLink to="/certificates" className=" p-1 ">
          <li>Certificates</li>
        </NavLink>
        <NavLink to="/about" className=" p-1 ">
          <li>Explore.Me</li>
        </NavLink>
      </div>
    );

    return (
      <div className="navbar container flex items-center mx-auto bg-base-100 fixed  z-10 font-mulish">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center flex items-center justify-center">
          <Link to="/">
            <a className="btn animate__animated animate__tada btn-ghost lg:text-xl text-sm">
              Sayem Ibne Taher
            </a>
          </Link>
        </div>
        <div className=" mr-2 -mb-8 lg:-mb-0 lg:mr-0">
          <label className="lg:flex  cursor-pointer gap-2">
            {/*  */}
            <input
              type="checkbox"
              value="synthwave"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
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
            to="https://drive.google.com/file/d/1zsPLS93Br4_kNwxyEaC31kykvyPzn2xj/view?usp=share_link"
            className="bg-darknavy hover:bg-primaryGreen flex gap-1 lg:gap-2 mr-14 lg:mr-0 justify-center items-center text-white  p-2 rounded-full w-[90px] text-xs  lg:w-[120px] text-center"
          >
            <MdOutlineFileDownload className="text-lg"></MdOutlineFileDownload>
            <button>Resume</button>
          </Link>
        </div>
      </div>
    );
};

export default Header;