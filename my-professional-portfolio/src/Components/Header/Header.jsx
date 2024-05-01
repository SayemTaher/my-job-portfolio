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
            setTheme('dim');
        } else if (theme === 'dim') {
            setTheme('light');
        } else {
            setTheme('nord');
        }
    };
    



    const links =

        <div className='flex flex-col gap-3 p-3 w-[600px] font-bold   ' id='navigation'>


            <NavLink to='/' className=" p-1 "><li >Home</li></NavLink>
            <NavLink to='/projects' className="p-1 "><li>MERN-Stack Development</li></NavLink>
            <NavLink to='/mobile' className="p-1 "><li>App Development</li></NavLink>
            <NavLink to='/education' className=" p-1 "><li>Education</li></NavLink>
            <NavLink to='/work' className="p-1 "><li>Work</li></NavLink>
            <NavLink to='/certificates' className=" p-1 "><li>Certificates</li></NavLink>


        </div>

    return (

        <div className="navbar container mx-auto bg-base-100 fixed  z-10 font-mulish">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/'><a className="btn animate__animated animate__tada btn-ghost lg:text-xl text-sm">Sayem Ibne Taher</a></Link>
            </div>
            <div>
                <label className="lg:flex hidden cursor-pointer gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} className="toggle theme-controller" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                <label className="swap swap-rotate flex lg:hidden">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} className="theme-controller" value="synthwave" />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
            <div className="navbar-end">
                <Link to='https://www.linkedin.com/in/sayem-ibne-taher/' className="lg:flex hidden">
                    <button className="btn btn-ghost btn-circle">
                        <BsLinkedin className="text-2xl"></BsLinkedin>
                    </button>
                </Link>
                <Link to='https://github.com/SayemTaher' className="lg:flex hidden">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaGithub className="text-2xl"></FaGithub>
                            <span className="badge badge-xs bg-green-400 indicator-item"></span>
                        </div>
                    </button>
                </Link>
                <Link to='https://drive.google.com/file/d/1zsPLS93Br4_kNwxyEaC31kykvyPzn2xj/view?usp=share_link' className="bg-darknavy hover:bg-primaryGreen flex gap-1 lg:gap-2 mr-28 lg:mr-0 justify-center items-center text-white  p-2 rounded-full w-[90px] text-xs  lg:w-[120px] text-center">
                    <MdOutlineFileDownload className="text-lg"></MdOutlineFileDownload>
                    <button >
                        Resume
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;